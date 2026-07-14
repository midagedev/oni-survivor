import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';

// KO 홈런 별 (#45 19.2 · 대난투 문법). 강타/무쌍/대넉백 처치 시 별이 포물선으로 튀어올라
// 회전·축소하며 반짝 사라진다. 동시 2개 상한. SDF 5각별(텍스처 없음), 애디티브 골드.
const CAP = 6;
const GRAV = 26; // 포물선 중력

export class KOStarBatch {
  private readonly x = new Float32Array(CAP);
  private readonly y = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vy = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly rot = new Float32Array(CAP);
  private readonly spin = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly maxLife = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private cursor = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly aFade: Float32Array;
  private readonly fadeAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1); // 카메라 각도에서 위로 튀는 별(눕히지 않음 — Y로 상승)
    this.aFade = new Float32Array(CAP);
    this.fadeAttr = new InstancedBufferAttribute(this.aFade, 1);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aFade', this.fadeAttr);
    const mat = new ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aFade; varying vec2 vUv; varying float vFade;
        void main() { vUv = uv; vFade = aFade; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv; varying float vFade;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          float a = atan(p.y, p.x);
          // 5각별 SDF: 각도별 반경 경계
          float star = 0.5 + 0.42 * cos(floor(0.5 + a * 5.0 / 3.14159265 * 1.5) * 3.14159265 * 2.0 / 5.0 - a);
          float m = smoothstep(star + 0.06, star - 0.02, r);
          float core = smoothstep(0.6, 0.0, r) * 0.5;
          float b = (m + core) * vFade;
          if (b < 0.01) discard;
          gl_FragColor = vec4(vec3(2.4, 1.9, 0.7) * b, b);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 20; // 스프라이트 위(튀는 별)
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  reset(): void {
    this.alive.fill(0);
    this.mesh.count = 0;
  }

  private activeCount(): number {
    let n = 0;
    for (let i = 0; i < CAP; i++) n += this.alive[i];
    return n;
  }

  // dirX/dirZ: 넉백/타격 방향(별이 그쪽으로 날아감). 동시 2개 상한.
  spawn(x: number, z: number, dirX: number, dirZ: number): void {
    if (this.activeCount() >= 2) return;
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % CAP;
    this.x[i] = x; this.y[i] = 1.0; this.z[i] = z;
    this.vx[i] = dirX * 7 + (Math.random() - 0.5) * 2;
    this.vy[i] = 11 + Math.random() * 3; // 상승 초속(포물선)
    this.vz[i] = dirZ * 7 + (Math.random() - 0.5) * 2;
    this.rot[i] = Math.random() * 6.28;
    this.spin[i] = 10 + Math.random() * 8;
    this.life[i] = 0.85;
    this.maxLife[i] = 0.85;
    this.alive[i] = 1;
  }

  update(dt: number): void {
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.alive[i] = 0; continue; }
      this.vy[i] -= GRAV * dt;
      this.x[i] += this.vx[i] * dt;
      this.y[i] += this.vy[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.rot[i] += this.spin[i] * dt;
      const f = this.life[i] / this.maxLife[i];
      const s = (0.4 + f * 0.9) * 1.1; // 후반 축소
      const c = Math.cos(this.rot[i]) * s;
      const sn = Math.sin(this.rot[i]) * s;
      const m = w * 16;
      // XY 평면 회전(화면상 회전) + 위치. 카메라 각도에서 상승·회전이 읽힘.
      this.matArr[m] = c; this.matArr[m + 1] = sn; this.matArr[m + 2] = 0; this.matArr[m + 3] = 0;
      this.matArr[m + 4] = -sn; this.matArr[m + 5] = c; this.matArr[m + 6] = 0; this.matArr[m + 7] = 0;
      this.matArr[m + 8] = 0; this.matArr[m + 9] = 0; this.matArr[m + 10] = s; this.matArr[m + 11] = 0;
      this.matArr[m + 12] = this.x[i]; this.matArr[m + 13] = this.y[i]; this.matArr[m + 14] = this.z[i]; this.matArr[m + 15] = 1;
      this.aFade[w] = Math.min(1, f * 2.2);
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}
