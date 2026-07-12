import { cellUvOffset } from '../gfx/atlas';
import type { Atlas } from '../gfx/atlas';
import type { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { dirFromVelocity, SPRITE_WORLD_H } from '../gfx/sprites';
import { SpatialHash } from './collision';

export const ENEMY_CAP = 1024;
const ANIM_FPS = 8;
const SEP_STRENGTH = 7;
const FLASH_DECAY = 7;

// 적 풀 (Struct-of-Arrays + freelist). 프레임당 할당 0 목표.
export class EnemyPool {
  readonly x = new Float32Array(ENEMY_CAP);
  readonly z = new Float32Array(ENEMY_CAP);
  readonly hp = new Float32Array(ENEMY_CAP);
  readonly maxHp = new Float32Array(ENEMY_CAP);
  readonly speed = new Float32Array(ENEMY_CAP);
  readonly radius = new Float32Array(ENEMY_CAP);
  readonly damage = new Float32Array(ENEMY_CAP); // 접촉 대미지(초당)
  readonly gemValue = new Float32Array(ENEMY_CAP);
  readonly scale = new Float32Array(ENEMY_CAP); // 스프라이트 월드 높이
  readonly sheetId = new Uint8Array(ENEMY_CAP); // 0 soldiers / 1 variants
  readonly blockPx = new Float32Array(ENEMY_CAP);
  readonly blockPy = new Float32Array(ENEMY_CAP);
  readonly dir = new Uint8Array(ENEMY_CAP);
  readonly frame = new Uint8Array(ENEMY_CAP);
  readonly animTime = new Float32Array(ENEMY_CAP);
  readonly flash = new Float32Array(ENEMY_CAP);
  readonly alive = new Uint8Array(ENEMY_CAP);

  private readonly free = new Int32Array(ENEMY_CAP);
  private freeTop = 0;
  aliveCount = 0;

  private readonly cand: number[] = [];
  private readonly uv = { u: 0, v: 0 };

  constructor() {
    // freelist 초기화: 모든 인덱스 가용
    for (let i = 0; i < ENEMY_CAP; i++) this.free[i] = ENEMY_CAP - 1 - i;
    this.freeTop = ENEMY_CAP;
  }

  spawn(
    x: number,
    z: number,
    hp: number,
    speed: number,
    radius: number,
    damage: number,
    gemValue: number,
    worldScale: number,
    sheetId: number,
    blockPx: number,
    blockPy: number,
  ): number {
    if (this.freeTop === 0) return -1;
    const i = this.free[--this.freeTop];
    this.x[i] = x;
    this.z[i] = z;
    this.hp[i] = hp;
    this.maxHp[i] = hp;
    this.speed[i] = speed;
    this.radius[i] = radius;
    this.damage[i] = damage;
    this.gemValue[i] = gemValue;
    this.scale[i] = SPRITE_WORLD_H * worldScale;
    this.sheetId[i] = sheetId;
    this.blockPx[i] = blockPx;
    this.blockPy[i] = blockPy;
    this.dir[i] = 0;
    this.frame[i] = 0;
    this.animTime[i] = Math.random() * 0.5;
    this.flash[i] = 0;
    this.alive[i] = 1;
    this.aliveCount++;
    return i;
  }

  kill(i: number): void {
    if (this.alive[i] === 0) return;
    this.alive[i] = 0;
    this.free[this.freeTop++] = i;
    this.aliveCount--;
  }

  reset(): void {
    this.alive.fill(0);
    for (let i = 0; i < ENEMY_CAP; i++) this.free[i] = ENEMY_CAP - 1 - i;
    this.freeTop = ENEMY_CAP;
    this.aliveCount = 0;
  }

  // 대미지 적용. 사망 시 true.
  damageAt(i: number, dmg: number): boolean {
    this.hp[i] -= dmg;
    this.flash[i] = 1;
    return this.hp[i] <= 0;
  }

  insertAll(hash: SpatialHash): void {
    const alive = this.alive;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (alive[i]) hash.insert(i, this.x[i], this.z[i]);
    }
  }

  // 플레이어 추적 + 적끼리 soft 분리 + 애니메이션/플래시 갱신
  update(dt: number, px: number, pz: number, hash: SpatialHash): void {
    const cand = this.cand;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const xi = this.x[i];
      const zi = this.z[i];

      // 플레이어 방향
      let dx = px - xi;
      let dz = pz - zi;
      const d = Math.hypot(dx, dz) || 1;
      dx /= d;
      dz /= d;
      const sp = this.speed[i];
      let vx = dx * sp;
      let vz = dz * sp;

      // 분리: 근처 적을 밀어냄
      const ri = this.radius[i];
      const sepR = ri + 0.9;
      const n = hash.query(xi, zi, sepR, cand);
      let sxx = 0;
      let szz = 0;
      for (let c = 0; c < n; c++) {
        const j = cand[c];
        if (j === i) continue;
        const ox = xi - this.x[j];
        const oz = zi - this.z[j];
        const dd = ox * ox + oz * oz;
        const minD = ri + this.radius[j];
        if (dd > 0 && dd < minD * minD) {
          const dist = Math.sqrt(dd);
          const push = (minD - dist) / minD;
          sxx += (ox / dist) * push;
          szz += (oz / dist) * push;
        }
      }
      vx += sxx * SEP_STRENGTH;
      vz += szz * SEP_STRENGTH;

      this.x[i] = xi + vx * dt;
      this.z[i] = zi + vz * dt;

      // 방향/애니메이션
      this.dir[i] = dirFromVelocity(vx, vz, this.dir[i]);
      this.animTime[i] += dt;
      this.frame[i] = (((this.animTime[i] * ANIM_FPS) | 0) % 4) as number;

      // 플래시 감쇠
      if (this.flash[i] > 0) {
        this.flash[i] -= dt * FLASH_DECAY;
        if (this.flash[i] < 0) this.flash[i] = 0;
      }
    }
  }

  // 두 시트 렌더러 + 그림자에 인스턴스 데이터 기록
  render(
    atlas: Atlas,
    soldiersR: InstancedSpriteRenderer,
    variantsR: InstancedSpriteRenderer,
    shadowR: ShadowRenderer,
  ): void {
    soldiersR.begin();
    variantsR.begin();
    const uv = this.uv;
    for (let i = 0; i < ENEMY_CAP; i++) {
      if (this.alive[i] === 0) continue;
      const isVariant = this.sheetId[i] === 1;
      const sheet = isVariant ? atlas.variants : atlas.soldiers;
      cellUvOffset(sheet, this.blockPx[i], this.blockPy[i], this.dir[i], this.frame[i], uv);
      const r = isVariant ? variantsR : soldiersR;
      r.push(this.x[i], this.z[i], this.scale[i], uv.u, uv.v, this.flash[i], 1, 1, 1);
      shadowR.push(this.x[i], this.z[i], this.radius[i] * 1.5);
    }
    soldiersR.end();
    variantsR.end();
  }
}
