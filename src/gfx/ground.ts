import {
  Scene,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  CanvasTexture,
  RepeatWrapping,
  FogExp2,
  Points,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  Color,
  Vector3,
} from 'three';
import { LIGHT_PARS_FRAG, LIGHT_PARS_VERT, type LightUniforms } from './lightField';

const PLANE_SIZE = 420;
const REPEAT = 42;
const TILE_WORLD = PLANE_SIZE / REPEAT; // 텍스처 한 타일의 월드 크기
const FIREFLY_COUNT = 240;
const FIELD_RADIUS = 34;

// 어두운 남흑색 전장: 절차 텍스처 지면 + 안개 + 떠다니는 불씨.
export class Ground {
  private readonly plane: Mesh;
  private readonly tex: CanvasTexture;
  private readonly fireflies: Points;
  private readonly fireflyMat: ShaderMaterial;
  private time = 0;

  constructor(scene: Scene, light: LightUniforms) {
    scene.fog = new FogExp2(0x05060a, 0.017);

    this.tex = makeGroundTexture();
    this.tex.wrapS = RepeatWrapping;
    this.tex.wrapT = RepeatWrapping;
    this.tex.repeat.set(REPEAT, REPEAT);

    const geo = new PlaneGeometry(PLANE_SIZE, PLANE_SIZE, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new MeshBasicMaterial({ map: this.tex, toneMapped: true });
    // 언릿 지면이 동적 광원 필드를 받도록 셰이더에 라이트 항을 주입(파이프라인은 그대로 유지).
    // onBeforeCompile 변형을 Three의 프로그램 캐시가 기본 MeshBasicMaterial과 혼동하지 않게 한다.
    mat.customProgramCacheKey = () => 'oni-ground-light-field-v1';
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, light);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${LIGHT_PARS_VERT}`)
        .replace(
          '#include <project_vertex>',
          '#include <project_vertex>\n  vWorldXZ = (modelMatrix * vec4(transformed, 1.0)).xz;',
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\n${LIGHT_PARS_FRAG}`)
        .replace(
          '#include <tonemapping_fragment>',
          '  gl_FragColor.rgb += sampleLights() * 1.35;\n#include <tonemapping_fragment>',
        );
    };
    this.plane = new Mesh(geo, mat);
    this.plane.renderOrder = -1;
    scene.add(this.plane);

    // 불씨/반딧불
    const g = new BufferGeometry();
    const pos = new Float32Array(FIREFLY_COUNT * 3);
    const phase = new Float32Array(FIREFLY_COUNT);
    const speed = new Float32Array(FIREFLY_COUNT);
    for (let i = 0; i < FIREFLY_COUNT; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * FIELD_RADIUS;
      pos[i * 3] = Math.cos(ang) * r;
      pos[i * 3 + 1] = 0.5 + Math.random() * 7;
      pos[i * 3 + 2] = Math.sin(ang) * r;
      phase[i] = Math.random() * Math.PI * 2;
      speed[i] = 0.5 + Math.random() * 1.2;
    }
    g.setAttribute('position', new BufferAttribute(pos, 3));
    g.setAttribute('aPhase', new BufferAttribute(phase, 1));
    g.setAttribute('aSpeed', new BufferAttribute(speed, 1));

    this.fireflyMat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 90 },
        uColor: { value: new Color(1.5, 0.85, 0.4) },
      },
      vertexShader: /* glsl */ `
        attribute float aPhase;
        attribute float aSpeed;
        uniform float uTime;
        uniform float uSize;
        varying float vTw;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.5 * aSpeed + aPhase) * 0.9;
          p.y += sin(uTime * 0.7 * aSpeed + aPhase * 1.7) * 0.6;
          p.z += cos(uTime * 0.45 * aSpeed + aPhase) * 0.9;
          vTw = 0.5 + 0.5 * sin(uTime * 2.0 * aSpeed + aPhase * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize / max(0.1, -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vTw;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor * (0.4 + vTw) * a, 1.0);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.fireflies = new Points(g, this.fireflyMat);
    this.fireflies.frustumCulled = false;
    scene.add(this.fireflies);
  }

  update(dt: number, playerX: number, playerZ: number): void {
    this.time += dt;
    // 지면은 플레이어를 따라가고, 텍스처 오프셋으로 세계 고정감(무한 지면).
    this.plane.position.set(playerX, 0, playerZ);
    this.tex.offset.set(playerX / TILE_WORLD, -playerZ / TILE_WORLD);
    // 불씨는 플레이어 주변을 감싼다.
    this.fireflies.position.set(playerX, 0, playerZ);
    this.fireflyMat.uniforms.uTime.value = this.time;
  }
}

// 수묵 노이즈 얼룩 + 희미한 균열 캔버스 텍스처(고해상도, 다중 스케일로 반복감 완화).
// wrap 이음새가 안 보이도록 좌표를 S로 모듈로해 얼룩/균열이 경계를 넘어 반복되게 그린다.
function makeGroundTexture(): CanvasTexture {
  const S = 512;
  const cv = document.createElement('canvas');
  cv.width = S;
  cv.height = S;
  const ctx = cv.getContext('2d')!;

  ctx.fillStyle = '#080a11';
  ctx.fillRect(0, 0, S, S);

  // 이음새 없는 얼룩: 3×3 타일 위치에 함께 찍어 경계를 매끄럽게
  const blot = (x: number, y: number, r: number, shade: number, alpha: number) => {
    for (let ox = -1; ox <= 1; ox++) {
      for (let oy = -1; oy <= 1; oy++) {
        ctx.fillStyle = `rgba(${shade},${shade + 4},${shade + 12},${alpha})`;
        ctx.beginPath();
        ctx.arc(x + ox * S, y + oy * S, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };
  // 다중 스케일 얼룩 (큰 것 → 작은 것)
  for (let i = 0; i < 40; i++) blot(Math.random() * S, Math.random() * S, 40 + Math.random() * 90, 6 + Math.random() * 14, 0.04);
  for (let i = 0; i < 240; i++) blot(Math.random() * S, Math.random() * S, 8 + Math.random() * 30, 8 + Math.random() * 26, 0.05);
  for (let i = 0; i < 900; i++) blot(Math.random() * S, Math.random() * S, 1 + Math.random() * 6, 10 + Math.random() * 30, 0.05);

  // 균열 (이음새 넘어 이어지게 wrap)
  ctx.strokeStyle = 'rgba(20,24,34,0.45)';
  for (let i = 0; i < 22; i++) {
    ctx.lineWidth = 0.5 + Math.random() * 1.6;
    let x = Math.random() * S;
    let y = Math.random() * S;
    ctx.beginPath();
    ctx.moveTo(x, y);
    const segs = 3 + ((Math.random() * 5) | 0);
    for (let s = 0; s < segs; s++) {
      x += (Math.random() * 2 - 1) * 55;
      y += (Math.random() * 2 - 1) * 55;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  const tex = new CanvasTexture(cv);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export const _groundTmp = new Vector3();
