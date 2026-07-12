import {
  Scene,
  BoxGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  MeshBasicMaterial,
  DynamicDrawUsage,
} from 'three';

const CAP = 12;
const PICKUP_R = 2.6;
const COLLECT_R = 1.0;

// 보물상자 픽업 (엘리트/보스 드랍). 발광 상자, 자석 흡인, 획득 시 콜백.
export class TreasurePool {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  private readonly mag = new Uint8Array(CAP);
  private readonly boss = new Uint8Array(CAP); // 보스 드랍 여부(더 큰 보상)
  private readonly alive = new Uint8Array(CAP);
  private readonly free = new Int32Array(CAP);
  private freeTop = 0;
  private time = 0;

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;

  constructor(scene: Scene) {
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;
    const geo = new BoxGeometry(0.8, 0.6, 0.8);
    const mat = new MeshBasicMaterial({ toneMapped: false, vertexColors: false });
    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.colArr = new Float32Array(CAP * 3);
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
    this.alive.fill(0);
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;
  }

  spawn(x: number, z: number, boss: boolean): void {
    if (this.freeTop === 0) return;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.mag[i] = 0;
    this.boss[i] = boss ? 1 : 0;
    this.alive[i] = 1;
  }

  update(dt: number, px: number, pz: number, pickupMul: number, onCollect: (boss: boolean) => void): void {
    this.time += dt;
    const radius = PICKUP_R * pickupMul;
    const r2 = radius * radius;
    const c2 = COLLECT_R * COLLECT_R;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      const d2 = dx * dx + dz * dz;
      if (this.mag[i] === 0 && d2 <= r2) this.mag[i] = 1;
      if (this.mag[i]) {
        const d = Math.sqrt(d2) || 1;
        const speed = 5 + 8 / d;
        this.x[i] += (dx / d) * speed * dt;
        this.z[i] += (dz / d) * speed * dt;
        if (d2 <= c2) {
          onCollect(this.boss[i] === 1);
          this.alive[i] = 0;
          this.free[this.freeTop++] = i;
        }
      }
    }
  }

  render(): void {
    let w = 0;
    const t = this.time;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      const spin = t * 2 + i;
      const cs = Math.cos(spin);
      const sn = Math.sin(spin);
      const s = 1 + 0.12 * Math.sin(t * 5 + i);
      // Y축 회전 + 스케일
      this.matArr[m] = cs * s;
      this.matArr[m + 2] = -sn * s;
      this.matArr[m + 5] = s;
      this.matArr[m + 8] = sn * s;
      this.matArr[m + 10] = cs * s;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = 0.7 + Math.sin(t * 3 + i) * 0.15;
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      if (this.boss[i] === 1) {
        this.colArr[c] = 2.6;
        this.colArr[c + 1] = 1.4;
        this.colArr[c + 2] = 2.4;
      } else {
        this.colArr[c] = 2.8;
        this.colArr[c + 1] = 2.0;
        this.colArr[c + 2] = 0.6;
      }
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
  }
}
