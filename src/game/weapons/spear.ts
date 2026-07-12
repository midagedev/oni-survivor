import type { Weapon, WeaponContext } from './types';
import { distToSegmentSq } from '../collision';

// 용담창: 바라보는 방향으로 관통 찌르기(캡슐 판정).
const BASE_COOLDOWN = 1.1;
const BASE_DAMAGE = 8;
const BASE_LENGTH = 5.0;
const BASE_WIDTH = 0.7;

export class SpearWeapon implements Weapon {
  readonly id = 'spear';
  level = 1;
  private timer = 0;

  update(ctx: WeaponContext): void {
    this.timer -= ctx.dt;
    if (this.timer > 0) return;
    const cooldown = BASE_COOLDOWN * ctx.stats.cooldownMul;
    this.timer += cooldown;
    if (this.timer < 0) this.timer = 0;
    this.fire(ctx);
  }

  private fire(ctx: WeaponContext): void {
    const length = BASE_LENGTH + (this.level - 1) * 0.6;
    const width = BASE_WIDTH;
    const damage = BASE_DAMAGE * ctx.stats.damageMul * (1 + (this.level - 1) * 0.15);

    const ax = ctx.px;
    const az = ctx.pz;
    const bx = ctx.px + ctx.faceX * length;
    const bz = ctx.pz + ctx.faceZ * length;

    // 세그먼트 중점 주변을 넉넉히 질의
    const mx = (ax + bx) * 0.5;
    const mz = (az + bz) * 0.5;
    const queryR = length * 0.5 + width + 1.2;
    const enemies = ctx.enemies;
    const n = ctx.hash.query(mx, mz, queryR, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (enemies.alive[j] === 0) continue;
      const hitR = width + enemies.radius[j];
      const d2 = distToSegmentSq(enemies.x[j], enemies.z[j], ax, az, bx, bz);
      if (d2 <= hitR * hitR) {
        const died = enemies.damageAt(j, damage);
        ctx.damageText.spawn(damage, enemies.x[j], enemies.scale[j] * 0.7, enemies.z[j], false);
        if (died) ctx.onKill(j);
      }
    }

    ctx.effects.spawnThrust(ctx.px, ctx.pz, ctx.faceX, ctx.faceZ, length, width * 2.2);
  }
}
