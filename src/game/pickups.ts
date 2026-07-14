import {
  Scene,
  InstancedMesh,
  InstancedBufferAttribute,
  IcosahedronGeometry,
  MeshBasicMaterial,
  DynamicDrawUsage,
} from 'three';

const GEM_CAP = 512;
const PICKUP_BASE = 2.0; // 기본 픽업(자석) 반경
const COLLECT_R = 0.7;

// 혼백 젬 풀. 발광 구슬, 자석 흡인.
export class GemPool {
  private readonly x = new Float32Array(GEM_CAP);
  private readonly z = new Float32Array(GEM_CAP);
  private readonly value = new Float32Array(GEM_CAP);
  private readonly heal = new Uint8Array(GEM_CAP); // 1=회복 픽업(온백색), 0=혼백 젬(XP) — #41 15.2
  private readonly mag = new Uint8Array(GEM_CAP); // 자석 발동 여부
  private readonly cr = new Float32Array(GEM_CAP);
  private readonly cg = new Float32Array(GEM_CAP);
  private readonly cb = new Float32Array(GEM_CAP);
  private readonly alive = new Uint8Array(GEM_CAP);
  private readonly free = new Int32Array(GEM_CAP);
  private freeTop = 0;
  private time = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    for (let i = 0; i < GEM_CAP; i++) this.free[i] = GEM_CAP - 1 - i;
    this.freeTop = GEM_CAP;

    const geo = new IcosahedronGeometry(0.26, 0);
    const mat = new MeshBasicMaterial({ toneMapped: false });
    this.mesh = new InstancedMesh(geo, mat, GEM_CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.colArr = new Float32Array(GEM_CAP * 3);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.mesh.instanceColor = this.colAttr;
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 1;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  get object(): InstancedMesh {
    return this.mesh;
  }

  reset(): void {
    for (let i = 0; i < GEM_CAP; i++) {
      this.alive[i] = 0;
      this.free[i] = GEM_CAP - 1 - i;
    }
    this.freeTop = GEM_CAP;
  }

  spawn(x: number, z: number, value: number): void {
    if (this.freeTop === 0) return;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.value[i] = value;
    this.heal[i] = 0;
    this.mag[i] = 0;
    this.alive[i] = 1;
    // 값에 따른 색 (파랑1 / 초록5 / 빨강20), HDR로 블룸
    if (value >= 20) {
      this.cr[i] = 2.2;
      this.cg[i] = 0.4;
      this.cb[i] = 0.5;
    } else if (value >= 5) {
      this.cr[i] = 0.4;
      this.cg[i] = 2.0;
      this.cb[i] = 0.7;
    } else {
      this.cr[i] = 0.35;
      this.cg[i] = 0.75;
      this.cb[i] = 2.2;
    }
  }

  // 회복 픽업(온백색). value = 최대 체력 회복 비율(예: 0.06 = 6%). #41 15.2 — 뱀서 치킨 문법.
  spawnHeal(x: number, z: number, value: number): void {
    if (this.freeTop === 0) return;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.value[i] = value;
    this.heal[i] = 1;
    this.mag[i] = 0;
    this.alive[i] = 1;
    this.cr[i] = 2.4; // 온백색(따뜻한 흰빛) — 냉색 XP 젬과 구분
    this.cg[i] = 2.1;
    this.cb[i] = 1.5;
  }

  // 동라(銅鑼): 필드의 모든 살아있는 젬을 즉시 자석 상태로. #41 15.7
  magnetizeAll(): void {
    for (let i = 0; i < GEM_CAP; i++) if (this.alive[i] === 1) this.mag[i] = 1;
  }

  // 화면상 활성 회복 픽업 수(동시 상한 게이트용). #41 15.2
  get activeHealCount(): number {
    let n = 0;
    for (let i = 0; i < GEM_CAP; i++) if (this.alive[i] === 1 && this.heal[i] === 1) n++;
    return n;
  }

  update(dt: number, px: number, pz: number, pickupMul: number, onCollect: (v: number) => void, onHeal?: (v: number) => void): void {
    this.time += dt;
    const radius = PICKUP_BASE * pickupMul;
    const r2 = radius * radius;
    const collect2 = COLLECT_R * COLLECT_R;
    for (let i = 0; i < GEM_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      const d2 = dx * dx + dz * dz;
      if (this.mag[i] === 0 && d2 <= r2) this.mag[i] = 1;
      if (this.mag[i]) {
        const d = Math.sqrt(d2) || 1;
        // 가까울수록 빠르게 흡인
        const speed = 6 + (radius - Math.min(radius, d)) * 5 + 10 / d;
        this.x[i] += (dx / d) * speed * dt;
        this.z[i] += (dz / d) * speed * dt;
        if (d2 <= collect2) {
          if (this.heal[i] === 1) onHeal?.(this.value[i]);
          else onCollect(this.value[i]);
          this.alive[i] = 0;
          this.free[this.freeTop++] = i;
        }
      }
    }
  }

  render(): void {
    let w = 0;
    const bob = this.time;
    for (let i = 0; i < GEM_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const s = 1 + 0.12 * Math.sin(bob * 5 + i);
      this.matArr[m] = s;
      this.matArr[m + 5] = s;
      this.matArr[m + 10] = s;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = 0.5 + Math.sin(bob * 3 + i) * 0.12;
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      this.colArr[c] = this.cr[i];
      this.colArr[c + 1] = this.cg[i];
      this.colArr[c + 2] = this.cb[i];
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
  }
}
