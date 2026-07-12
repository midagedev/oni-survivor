import {
  PlaneGeometry,
  CircleGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  Mesh,
  ShaderMaterial,
  MeshBasicMaterial,
  CanvasTexture,
  DynamicDrawUsage,
  DoubleSide,
  Vector2,
  Vector3,
  Color,
} from 'three';
import type { SheetInfo } from './atlas';

import { ELEVATION } from './camera';

// 스프라이트 월드 기본 높이(셀 64px 기준). 세워진 빌보드.
export const SPRITE_WORLD_H = 2.4;
// 카메라 내려보기 각도만큼 뒤로 눕혀 쿼드가 뷰 방향과 수직이 되게 한다
// (수직 축소 없이 원본 픽셀 비율 그대로 보이는 VS 스타일 빌보드).
export const SPRITE_TILT = -ELEVATION;

const QUAD_W_RATIO = 48 / 64; // 셀 가로/세로 비

// 발이 y=0에 오도록 아래 정렬 후 X축으로 기울인 유닛 쿼드(높이 1).
function makeUnitSpriteGeometry(): PlaneGeometry {
  const geo = new PlaneGeometry(QUAD_W_RATIO, 1, 1, 1);
  geo.translate(0, 0.5, 0); // 하단(발) = 원점
  geo.rotateX(SPRITE_TILT); // 발을 축으로 상단이 카메라 반대쪽으로 기울어짐
  return geo;
}

const VERT_INSTANCED = /* glsl */ `
  attribute vec2 aUvOffset;
  attribute float aFlash;
  attribute vec3 aTint;
  uniform vec2 uCellUv;
  varying vec2 vUv;
  varying float vFlash;
  varying vec3 vTint;
  void main() {
    vUv = aUvOffset + uv * uCellUv;
    vFlash = aFlash;
    vTint = aTint;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;

const VERT_SINGLE = /* glsl */ `
  uniform vec2 uCellUv;
  uniform vec2 uUvOffset;
  varying vec2 vUv;
  void main() {
    vUv = uUvOffset + uv * uCellUv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// sRGB 텍스처를 선형으로 변환(오프스크린 렌더 → 블룸/OutputPass가 최종 톤매핑).
const FRAG_INSTANCED = /* glsl */ `
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying float vFlash;
  varying vec3 vTint;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    vec3 col = pow(tex.rgb, vec3(2.2)) * vTint;
    col = mix(col, vec3(2.0), vFlash); // 피격 화이트 플래시(HDR로 블룸)
    gl_FragColor = vec4(col, 1.0);
  }
`;

const FRAG_SINGLE = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uFlash;
  uniform vec3 uTint;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    vec3 col = pow(tex.rgb, vec3(2.2)) * uTint;
    col = mix(col, vec3(2.0), uFlash);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// 시트별 인스턴스드 스프라이트 렌더러. 프레임마다 begin→push*→end.
export class InstancedSpriteRenderer {
  readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly uvArr: Float32Array;
  private readonly flashArr: Float32Array;
  private readonly tintArr: Float32Array;
  private readonly uvAttr: InstancedBufferAttribute;
  private readonly flashAttr: InstancedBufferAttribute;
  private readonly tintAttr: InstancedBufferAttribute;
  private w = 0;

  constructor(sheet: SheetInfo, max: number) {
    const geo = makeUnitSpriteGeometry();
    this.uvArr = new Float32Array(max * 2);
    this.flashArr = new Float32Array(max);
    this.tintArr = new Float32Array(max * 3);
    this.uvAttr = new InstancedBufferAttribute(this.uvArr, 2);
    this.flashAttr = new InstancedBufferAttribute(this.flashArr, 1);
    this.tintAttr = new InstancedBufferAttribute(this.tintArr, 3);
    this.uvAttr.setUsage(DynamicDrawUsage);
    this.flashAttr.setUsage(DynamicDrawUsage);
    this.tintAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aUvOffset', this.uvAttr);
    geo.setAttribute('aFlash', this.flashAttr);
    geo.setAttribute('aTint', this.tintAttr);

    const mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: sheet.texture },
        uCellUv: { value: new Vector2(sheet.cellUvW, sheet.cellUvH) },
      },
      vertexShader: VERT_INSTANCED,
      fragmentShader: FRAG_INSTANCED,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geo, mat, max);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 2;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
  }

  begin(): void {
    this.w = 0;
  }

  push(
    x: number,
    z: number,
    scale: number,
    u: number,
    v: number,
    flash: number,
    tr: number,
    tg: number,
    tb: number,
  ): void {
    const i = this.w;
    const m = i * 16;
    // scale + translation (회전은 지오메트리에 베이크됨)
    this.matArr[m] = scale;
    this.matArr[m + 5] = scale;
    this.matArr[m + 10] = scale;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = 0;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    const u2 = i * 2;
    this.uvArr[u2] = u;
    this.uvArr[u2 + 1] = v;
    this.flashArr[i] = flash;
    const t3 = i * 3;
    this.tintArr[t3] = tr;
    this.tintArr[t3 + 1] = tg;
    this.tintArr[t3 + 2] = tb;
    this.w++;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.uvAttr.needsUpdate = true;
    this.flashAttr.needsUpdate = true;
    this.tintAttr.needsUpdate = true;
  }
}

// 단일 스프라이트(플레이어). 인스턴싱과 동일한 UV 수학 재사용.
export class SpriteQuad {
  readonly mesh: Mesh;
  private readonly mat: ShaderMaterial;

  constructor(sheet: SheetInfo, worldH = SPRITE_WORLD_H) {
    const geo = makeUnitSpriteGeometry();
    this.mat = new ShaderMaterial({
      uniforms: {
        uMap: { value: sheet.texture },
        uCellUv: { value: new Vector2(sheet.cellUvW, sheet.cellUvH) },
        uUvOffset: { value: new Vector2(0, 0) },
        uFlash: { value: 0 },
        uTint: { value: new Color(1, 1, 1) },
      },
      vertexShader: VERT_SINGLE,
      fragmentShader: FRAG_SINGLE,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.mesh = new Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.scale.setScalar(worldH);
    this.mesh.renderOrder = 2;
  }

  setUv(u: number, v: number): void {
    (this.mat.uniforms.uUvOffset.value as Vector2).set(u, v);
  }

  setFlash(f: number): void {
    this.mat.uniforms.uFlash.value = f;
  }

  setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }
}

// 발밑 타원 블롭 그림자 (인스턴스드). 카메라 기울임 덕에 원이 타원으로 보인다.
export class ShadowRenderer {
  readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private w = 0;

  constructor(max: number) {
    const geo = new CircleGeometry(1, 20);
    geo.rotateX(-Math.PI / 2); // XZ 평면에 눕힘
    const tex = makeRadialTexture();
    const mat = new MeshBasicMaterial({
      map: tex,
      color: 0x000000,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      depthTest: true,
      side: DoubleSide,
      toneMapped: false,
    });
    this.mesh = new InstancedMesh(geo, mat, max);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 0;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
  }

  begin(): void {
    this.w = 0;
  }

  push(x: number, z: number, radius: number): void {
    const m = this.w * 16;
    this.matArr[m] = radius;
    this.matArr[m + 5] = 1;
    this.matArr[m + 10] = radius;
    this.matArr[m + 12] = x;
    this.matArr[m + 13] = 0.02;
    this.matArr[m + 14] = z;
    this.matArr[m + 15] = 1;
    this.w++;
  }

  end(): void {
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

function makeRadialTexture(): CanvasTexture {
  const size = 64;
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.7)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(cv);
  tex.needsUpdate = true;
  return tex;
}

// 방향 인덱스: (vx,vz) → 0 south / 1 west / 2 east / 3 north
export function dirFromVelocity(vx: number, vz: number, fallback: number): number {
  if (vx === 0 && vz === 0) return fallback;
  if (Math.abs(vx) > Math.abs(vz)) {
    return vx > 0 ? 2 : 1; // east : west
  }
  return vz > 0 ? 0 : 3; // south : north
}

// 재사용 임시 벡터 (모듈 공용, 할당 회피)
export const _tmpVec3 = new Vector3();
