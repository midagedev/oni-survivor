import {
  Scene,
  Points,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  CanvasTexture,
  AdditiveBlending,
  DynamicDrawUsage,
  Vector3,
} from 'three';

const CAPACITY = 600;

function makePetalTexture(): CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  // 벚꽃 꽃잎 (둥근 모양 + 윗부분 살짝 파임)
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(32, 53);
  ctx.bezierCurveTo(47, 45, 46, 19, 35, 13);
  ctx.quadraticCurveTo(32, 17, 29, 13);
  ctx.bezierCurveTo(18, 19, 17, 45, 32, 53);
  ctx.fill();

  const texture = new CanvasTexture(canvas);
  texture.generateMipmaps = false;
  return texture;
}

const FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const FOG_DENSITY = 0.019;

// 벚꽃/등꽃 흩날리기 파티클 시스템 (asiahouse/src/env/petals.js 기법 영감)
export class SakuraPetalsSystem {
  private readonly points: Points;
  private readonly pos: Float32Array;
  private readonly col: Float32Array;
  private readonly life: Float32Array;
  private readonly size: Float32Array;
  private readonly phase: Float32Array;
  private readonly fallSpeed: Float32Array;
  private readonly flutterAmp: Float32Array;
  private readonly flutterFreq: Float32Array;

  private readonly posAttr: BufferAttribute;
  private readonly colAttr: BufferAttribute;
  private readonly sizeAttr: BufferAttribute;
  private readonly lifeAttr: BufferAttribute;

  private time = 0;

  constructor(scene: Scene) {
    this.pos = new Float32Array(CAPACITY * 3);
    this.col = new Float32Array(CAPACITY * 3);
    this.life = new Float32Array(CAPACITY);
    this.size = new Float32Array(CAPACITY);
    this.phase = new Float32Array(CAPACITY);
    this.fallSpeed = new Float32Array(CAPACITY);
    this.flutterAmp = new Float32Array(CAPACITY);
    this.flutterFreq = new Float32Array(CAPACITY);

    const colors = [
      [1.0, 0.82, 0.88],  // soft pink
      [1.0, 0.75, 0.84],  // sakura pink
      [0.96, 0.68, 0.78], // vibrant pink
      [0.92, 0.78, 0.98], // wisteria light purple
    ];

    for (let i = 0; i < CAPACITY; i++) {
      const p3 = i * 3;
      this.pos[p3] = (Math.random() - 0.5) * 44;
      this.pos[p3 + 1] = Math.random() * 18 + 0.5;
      this.pos[p3 + 2] = (Math.random() - 0.5) * 44;

      const c = colors[Math.floor(Math.random() * colors.length)];
      this.col[p3] = c[0];
      this.col[p3 + 1] = c[1];
      this.col[p3 + 2] = c[2];

      this.life[i] = 1.0;
      this.size[i] = 0.45 + Math.random() * 0.45;
      this.phase[i] = Math.random() * Math.PI * 2;
      this.fallSpeed[i] = 0.8 + Math.random() * 1.2;
      this.flutterAmp[i] = 0.8 + Math.random() * 1.4;
      this.flutterFreq[i] = 1.2 + Math.random() * 1.8;
    }

    const geo = new BufferGeometry();
    this.posAttr = new BufferAttribute(this.pos, 3);
    this.colAttr = new BufferAttribute(this.col, 3);
    this.lifeAttr = new BufferAttribute(this.life, 1);
    this.sizeAttr = new BufferAttribute(this.size, 1);

    this.posAttr.setUsage(DynamicDrawUsage);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.lifeAttr.setUsage(DynamicDrawUsage);
    this.sizeAttr.setUsage(DynamicDrawUsage);

    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aLife', this.lifeAttr);
    geo.setAttribute('aSize', this.sizeAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: makePetalTexture() },
        uPix: { value: 360 },
        uFogColor: { value: FOG_COLOR.clone() },
        uFogDensity: { value: FOG_DENSITY },
      },
      vertexShader: /* glsl */ `
        attribute float aLife;
        attribute float aSize;
        attribute vec3 aColor;
        uniform float uPix;
        varying float vLife;
        varying vec3 vColor;
        varying float vFogDepth;

        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_PointSize = (aLife > 0.0) ? uPix * aSize / max(0.1, -mv.z) : 0.0;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying float vLife;
        varying vec3 vColor;
        varying float vFogDepth;

        void main() {
          if (vLife <= 0.0) discard;
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.1) discard;
          vec3 col = vColor * tex.rgb * 1.35;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, tex.a * vLife * 0.85);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.points = new Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    scene.add(this.points);
  }

  update(dt: number, px: number, pz: number): void {
    this.time += dt;
    const t = this.time;
    const pos = this.pos;

    for (let i = 0; i < CAPACITY; i++) {
      const p3 = i * 3;
      const ph = this.phase[i];
      const freq = this.flutterFreq[i];
      const amp = this.flutterAmp[i];
      const fall = this.fallSpeed[i];

      // 흩날리는 벚꽃 물리: 부유 낙하 + 바람 수평 팔랑임(사인 파동)
      pos[p3] += Math.sin(t * freq + ph) * amp * dt + 0.8 * dt;
      pos[p3 + 1] -= fall * dt;
      pos[p3 + 2] += Math.cos(t * freq * 0.7 + ph) * amp * 0.6 * dt;

      // 카메라/플레이어 중심 22m 밖으로 벗어나거나 바닥에 닿으면 플레이어 상공으로 재배치
      const dx = pos[p3] - px;
      const dz = pos[p3 + 2] - pz;
      if (pos[p3 + 1] <= 0.2 || dx * dx + dz * dz > 24 * 24) {
        pos[p3] = px + (Math.random() - 0.5) * 40;
        pos[p3 + 1] = 14.0 + Math.random() * 6.0;
        pos[p3 + 2] = pz + (Math.random() - 0.5) * 40;
      }
    }

    this.posAttr.needsUpdate = true;
  }
}
