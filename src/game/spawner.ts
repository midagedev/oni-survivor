import type { Atlas } from '../gfx/atlas';
import { EnemyPool } from './enemies';
import { ENEMY_TYPES } from '../data/enemyTypes';
import type { EnemyType } from '../data/enemyTypes';
import { rng } from '../core/rng';

const BLOCK_PX = 192; // 4열 × 48px
const BLOCK_PY = 256; // 4행 × 64px
const RING_MIN = 18;
const RING_MAX = 22;

// DESIGN 타임라인 축소판(0~3분 구간). 화면 밖 링에서 스폰, 시간에 따라 증가.
export class Spawner {
  private acc = 0;
  private readonly atlas: Atlas;
  private readonly pool: EnemyPool;

  constructor(atlas: Atlas, pool: EnemyPool) {
    this.atlas = atlas;
    this.pool = pool;
  }

  reset(): void {
    this.acc = 0;
  }

  update(dt: number, gameTime: number, px: number, pz: number): void {
    const minute = gameTime / 60;
    const rate = Math.min(22, 2 + minute * 4); // 초당 스폰 수
    this.acc += rate * dt;
    while (this.acc >= 1) {
      this.acc -= 1;
      this.spawnOne(minute, px, pz);
    }
  }

  private spawnOne(minute: number, px: number, pz: number): void {
    const type = this.pickType(minute);
    const ang = rng.next() * Math.PI * 2;
    const r = rng.range(RING_MIN, RING_MAX);
    const x = px + Math.cos(ang) * r;
    const z = pz + Math.sin(ang) * r;

    // HP 스케일: base × (1 + 0.13m + 0.011m²)
    const hp = type.hp * (1 + 0.13 * minute + 0.011 * minute * minute);

    // 색변형 팔레트: 분 0은 기본 시트, 이후 분마다 로테이션
    let sheetId = 0;
    let blockPx = this.atlas.soldierBlockPx(type.charIndex);
    let blockPy = 0;
    const m = Math.floor(minute);
    if (m >= 1) {
      const variants = this.atlas.variantBlocks(type.id);
      if (variants.length > 0) {
        const vb = variants[(m - 1) % variants.length];
        sheetId = 1;
        blockPx = vb.c * BLOCK_PX;
        blockPy = vb.r * BLOCK_PY;
      }
    }

    this.pool.spawn(
      x,
      z,
      hp,
      type.speed,
      type.radius,
      type.damage,
      type.gemValue,
      type.worldScale,
      sheetId,
      blockPx,
      blockPy,
    );
  }

  private pickType(minute: number): EnemyType {
    const rv = rng.next();
    if (minute < 1) {
      return rv < 0.6 ? ENEMY_TYPES.worker : ENEMY_TYPES.runner;
    }
    if (rv < 0.5) return ENEMY_TYPES.worker;
    if (rv < 0.8) return ENEMY_TYPES.runner;
    return ENEMY_TYPES.guard;
  }
}
