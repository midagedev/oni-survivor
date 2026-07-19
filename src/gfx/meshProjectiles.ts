import {
  Scene,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  CylinderGeometry,
  ConeGeometry,
  RingGeometry,
  SphereGeometry,
  OctahedronGeometry,
  PlaneGeometry,
  DynamicDrawUsage,
  Vector3,
  BufferGeometry,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LIGHT_PARS_FRAG, LIGHT_PARS_VERT, type LightUniforms } from './lightField';

const FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const FOG_DENSITY = 0.019;

function makeArrowGeometry(): BufferGeometry {
  const shaft = new CylinderGeometry(0.055, 0.055, 0.78, 6);
  shaft.rotateZ(-Math.PI / 2);
  shaft.translate(-0.06, 0, 0);
  const head = new ConeGeometry(0.15, 0.32, 8);
  head.rotateZ(-Math.PI / 2);
  head.translate(0.49, 0, 0);
  return mergeGeometries([shaft, head], false);
}

export class ArrowMeshBatch {
  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, cap: number, light: LightUniforms) {
    this.cap = cap;
    const geo = makeArrowGeometry();
    this.colArr = new Float32Array(cap * 3);
    this.fadeArr = new Float32Array(cap);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aFade', this.fadeAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uFogColor: { value: FOG_COLOR.clone() },
        uFogDensity: { value: FOG_DENSITY },
        ...light,
      },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${LIGHT_PARS_VERT}
        void main() {
          vColor = aColor;
          vFade = aFade;
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.55 + 0.45 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
          vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${LIGHT_PARS_FRAG}
        void main() {
          vec3 col = vColor * vShade;
          col += sampleLights() * 0.9;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,
      transparent: true,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, cap);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 4;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.w = 0;
  }

  push(x: number, y: number, z: number, theta: number, sx: number, sr: number, r: number, g: number, b: number, fade: number): void {
    if (this.w >= this.cap) return;
    const i = this.w++;
    const m = i * 16;
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    this.matArr[m] = ct * sx;
    this.matArr[m + 1] = 0;
    this.matArr[m + 2] = -st * sx;
    this.matArr[m + 3] = 0;
    this.matArr[m + 4] = 0;
    this.matArr[m + 5] = sr;
    this.matArr[m + 6] = 0;
    this.matArr[m + 7] = 0;
    this.matArr[m + 8] = st * sr;
    this.matArr[m + 9] = 0;
    this.matArr[m + 10] = ct * sr;
    this.matArr[m + 11] = 0;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = y;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    const c = i * 3;
    this.colArr[c] = r;
    this.colArr[c + 1] = g;
    this.colArr[c + 2] = b;
    this.fadeArr[i] = fade;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}

export function makeSlashGeometry(): BufferGeometry {
  const geo = new RingGeometry(0.75, 1.05, 18, 1, -0.75, 1.5);
  geo.rotateX(-Math.PI / 2);
  return geo;
}

export function makeOrbGeometry(): BufferGeometry {
  return new SphereGeometry(0.3, 8, 8);
}

export function makeCrystalGeometry(): BufferGeometry {
  return new OctahedronGeometry(0.24);
}

export function makeCavalryGeometry(): BufferGeometry {
  const geo = new ConeGeometry(0.4, 1.8, 6);
  geo.rotateZ(-Math.PI / 2);
  return geo;
}

// 귀멸의 칼날 기술 이펙트용 3D 발광 메시 배치 클래스
export class GlowMeshBatch {
  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, geo: BufferGeometry, cap: number, light: LightUniforms) {
    this.cap = cap;
    this.colArr = new Float32Array(cap * 3);
    this.fadeArr = new Float32Array(cap);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aFade', this.fadeAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uFogColor: { value: FOG_COLOR.clone() },
        uFogDensity: { value: FOG_DENSITY },
        ...light,
      },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${LIGHT_PARS_VERT}
        void main() {
          vColor = aColor;
          vFade = aFade;
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.65 + 0.35 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
          vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${LIGHT_PARS_FRAG}
        void main() {
          // 본체는 불투명(NormalBlending)으로 그려 겹쳐도 밝기가 누적되지 않게 한다.
          // (이전 AdditiveBlending은 투사체가 몰릴수록 화면이 하얗게 타버렸다 — 가독성 회복)
          vec3 col = vColor * vShade * 1.05;
          col += sampleLights() * 0.8;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,
      transparent: true,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, mat, cap);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 5;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.w = 0;
  }

  push(
    x: number, y: number, z: number, theta: number,
    sx: number, sy: number, sz: number,
    r: number, g: number, b: number, fade: number,
  ): void {
    if (this.w >= this.cap) return;
    const i = this.w++;
    const m = i * 16;
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    this.matArr[m] = ct * sx;
    this.matArr[m + 1] = 0;
    this.matArr[m + 2] = -st * sx;
    this.matArr[m + 3] = 0;
    this.matArr[m + 4] = 0;
    this.matArr[m + 5] = sy;
    this.matArr[m + 6] = 0;
    this.matArr[m + 7] = 0;
    this.matArr[m + 8] = st * sz;
    this.matArr[m + 9] = 0;
    this.matArr[m + 10] = ct * sz;
    this.matArr[m + 11] = 0;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = y;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    
    const c = i * 3;
    this.colArr[c] = r;
    this.colArr[c + 1] = g;
    this.colArr[c + 2] = b;
    this.fadeArr[i] = fade;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}

// ── 귀멸의 칼날 기술 전용 3D 지오메트리 메이커 ──

// 물의 호흡: 유려한 3D 물줄기 파도 커브
export function makeWaterStreamGeometry(): BufferGeometry {
  const segs: BufferGeometry[] = [];
  for (let i = 0; i < 3; i++) {
    const r = new RingGeometry(0.6 + i * 0.18, 0.78 + i * 0.18, 24, 1, -0.9 + i * 0.15, 1.8 - i * 0.1);
    r.rotateX(-Math.PI / 2);
    r.translate(0, 0.15 * i, 0);
    segs.push(r);
  }
  return mergeGeometries(segs, false);
}

// 짐승의 호흡: 3갈래 손톱 찢기 자국
export function makeClawGeometry(): BufferGeometry {
  const claws: BufferGeometry[] = [];
  for (let i = -1; i <= 1; i++) {
    const claw = new ConeGeometry(0.08, 1.6, 4);
    claw.rotateZ(-Math.PI / 2);
    claw.translate(0.8, 0, i * 0.35);
    claws.push(claw);
  }
  return mergeGeometries(claws, false);
}

// 벌레의 호흡: 극세 독침
export function makeNeedleGeometry(): BufferGeometry {
  const needle = new CylinderGeometry(0.02, 0.06, 1.2, 4);
  needle.rotateZ(-Math.PI / 2);
  return needle;
}

// 파괴살: 나침반 패턴 동심원 충격파
export function makeCompassGeometry(): BufferGeometry {
  const inner = new RingGeometry(0.5, 0.65, 32);
  inner.rotateX(-Math.PI / 2);
  const outer = new RingGeometry(0.85, 0.95, 32);
  outer.rotateX(-Math.PI / 2);
  return mergeGeometries([inner, outer], false);
}

// 등나무 가시: 뾰족한 4방향 가시 지뢰
export function makeThornGeometry(): BufferGeometry {
  const thorns: BufferGeometry[] = [];
  for (let i = 0; i < 4; i++) {
    const thorn = new ConeGeometry(0.06, 0.5, 4);
    const angle = (i / 4) * Math.PI * 2;
    thorn.translate(Math.cos(angle) * 0.2, 0.25, Math.sin(angle) * 0.2);
    thorns.push(thorn);
  }
  const core = new SphereGeometry(0.12, 6, 6);
  core.translate(0, 0.12, 0);
  thorns.push(core);
  return mergeGeometries(thorns, false);
}

// 쌍일륜: 빛나는 닛치린도 이중 디스크
export function makeDualBladeGeometry(): BufferGeometry {
  const ringA = new RingGeometry(0.28, 0.42, 16);
  ringA.rotateX(-Math.PI / 2);
  ringA.translate(0.22, 0, 0);
  const ringB = new RingGeometry(0.28, 0.42, 16);
  ringB.rotateX(-Math.PI / 2);
  ringB.translate(-0.22, 0, 0);
  return mergeGeometries([ringA, ringB], false);
}

// 화염의 호흡: 3D 화염용 뿔 아크 참격 메시 (Flame Dragon Arc)
export function makeFlameDragonGeometry(): BufferGeometry {
  const segs: BufferGeometry[] = [];
  for (let i = 0; i < 3; i++) {
    const r = new RingGeometry(0.7 + i * 0.22, 0.96 + i * 0.22, 28, 1, -1.1 + i * 0.18, 2.2 - i * 0.12);
    r.rotateX(-Math.PI / 2);
    r.translate(0, 0.18 * i, 0);
    segs.push(r);
  }
  for (let i = 0; i < 4; i++) {
    const horn = new ConeGeometry(0.12, 1.1, 5);
    const ang = -0.8 + i * 0.5;
    horn.rotateX(-Math.PI / 2);
    horn.rotateY(ang);
    horn.translate(Math.cos(ang) * 1.3, 0.25, Math.sin(ang) * 1.3);
    segs.push(horn);
  }
  return mergeGeometries(segs, false);
}

// 히노카미 카구라: 12방향 태양광 왕관 링 메시 (Sun Disc)
export function makeSunDiscGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  const ring = new RingGeometry(0.6, 0.85, 32);
  ring.rotateX(-Math.PI / 2);
  parts.push(ring);
  for (let i = 0; i < 12; i++) {
    const ray = new ConeGeometry(0.08, 0.9, 4);
    const ang = (i / 12) * Math.PI * 2;
    ray.rotateX(-Math.PI / 2);
    ray.rotateY(ang);
    ray.translate(Math.cos(ang) * 1.1, 0.1, Math.sin(ang) * 1.1);
    parts.push(ray);
  }
  return mergeGeometries(parts, false);
}

// 번개의 호흡: 벽력일섬 3D 지그재그 번개 메시 (Zigzag Lightning Bolt)
export function makeLightningBoltGeometry(): BufferGeometry {
  const segs: BufferGeometry[] = [];
  const coords = [
    [0, 0, 0], [0.5, 0, 0.3], [0.9, 0, -0.2], [1.4, 0, 0.4], [1.9, 0, -0.1]
  ];
  for (let i = 0; i < coords.length - 1; i++) {
    const p1 = coords[i];
    const p2 = coords[i + 1];
    const dx = p2[0] - p1[0];
    const dz = p2[2] - p1[2];
    const len = Math.sqrt(dx * dx + dz * dz);
    const seg = new CylinderGeometry(0.06 - i * 0.008, 0.08 - i * 0.008, len, 6);
    seg.rotateZ(-Math.PI / 2);
    const ang = Math.atan2(-dz, dx);
    seg.rotateY(ang);
    seg.translate((p1[0] + p2[0]) / 2, 0, (p1[2] + p2[2]) / 2);
    segs.push(seg);
  }
  const tip = new ConeGeometry(0.09, 0.6, 6);
  tip.rotateZ(-Math.PI / 2);
  tip.translate(2.1, 0, -0.1);
  segs.push(tip);
  return mergeGeometries(segs, false);
}

// 사랑의 호흡: 연주 미츠리 3D 이중 나선 채찍검 메시 (Spiral Ribbon Sword)
export function makeRibbonSwordGeometry(): BufferGeometry {
  const segs: BufferGeometry[] = [];
  const count = 16;
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const ang = t * Math.PI * 3;
    const r = 0.5 + t * 0.8;
    const node = new PlaneGeometry(0.24, 0.45);
    node.rotateX(-Math.PI / 2);
    node.rotateY(ang);
    node.translate(Math.cos(ang) * r, Math.sin(t * Math.PI) * 0.4, Math.sin(ang) * r);
    segs.push(node);
  }
  return mergeGeometries(segs, false);
}

// 벌레의 호흡: 나비의 춤 3D 나비 메시 (Butterfly Wings)
export function makeButterflyGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  const wingL1 = new RingGeometry(0.15, 0.65, 12, 1, 0.2, 2.2);
  wingL1.rotateX(-Math.PI / 2);
  wingL1.rotateZ(0.3);
  wingL1.translate(0.35, 0.15, 0.2);
  parts.push(wingL1);

  const wingR1 = new RingGeometry(0.15, 0.65, 12, 1, -2.4, 2.2);
  wingR1.rotateX(-Math.PI / 2);
  wingR1.rotateZ(-0.3);
  wingR1.translate(-0.35, 0.15, 0.2);
  parts.push(wingR1);

  const body = new CylinderGeometry(0.03, 0.08, 1.2, 6);
  body.rotateZ(-Math.PI / 2);
  parts.push(body);
  return mergeGeometries(parts, false);
}

// 달의 호흡: 코쿠시보 3D 초승달 참격 메시 (Moon Crescent Blade)
export function makeMoonCrescentGeometry(): BufferGeometry {
  const segs: BufferGeometry[] = [];
  const mainCrescent = new RingGeometry(0.7, 1.1, 24, 1, -1.2, 2.4);
  mainCrescent.rotateX(-Math.PI / 2);
  segs.push(mainCrescent);
  for (let i = -1; i <= 1; i++) {
    const mini = new RingGeometry(0.25, 0.42, 12, 1, -1.0, 2.0);
    mini.rotateX(-Math.PI / 2);
    mini.translate(i * 0.65, 0.1, 0.4);
    segs.push(mini);
  }
  return mergeGeometries(segs, false);
}

// 혈귀술: 폭혈 핏빛 연꽃 결정 메시 (Blood Lotus Crystal)
export function makeBloodLotusGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  for (let i = 0; i < 6; i++) {
    const petal = new OctahedronGeometry(0.35);
    const ang = (i / 6) * Math.PI * 2;
    petal.scale(0.6, 1.4, 0.6);
    petal.rotateZ(-Math.PI / 4);
    petal.rotateY(ang);
    petal.translate(Math.cos(ang) * 0.6, 0.2, Math.sin(ang) * 0.6);
    parts.push(petal);
  }
  const center = new OctahedronGeometry(0.4);
  center.translate(0, 0.35, 0);
  parts.push(center);
  return mergeGeometries(parts, false);
}
