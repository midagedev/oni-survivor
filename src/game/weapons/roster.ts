import type { Weapon, WeaponContext } from './types';
import { distToSegmentSq } from '../collision';
import {
  PK_ARROW,
  PK_TALISMAN,
  PK_SLASHWAVE,
  PK_CAVALRY,
  PK_FIRE_ARROW,
  PK_WATER,
  PK_BUTTERFLY,
  PK_FLAME,
  PK_COMPASS,
  PK_THORN,
  PK_LOTUS,
} from '../projectiles';
import { NEW_WEAPONS } from '../../data/weaponUnlocks';
import { WEAPON_DEFS } from '../../data/weapons';
import { WEAPON_DESC_EN } from '../../core/i18n';
import { resolvedDamage } from '../damagePolicy';

// 신규 무기 메타 자체 등록: 카드/도감/공유카드가 참조하는 WEAPON_DEFS와 영문 설명 WEAPON_DESC_EN에
// 병합한다(둘 다 export된 가변 객체). i18n 소스 무접촉 + 크로스레인 편집 없이 무기가 완전 동작.
// (영문 무기명 NAME_EN은 비공개라 리드가 2줄 수동 추가 — 배선 스니펫 참조)
for (const id in NEW_WEAPONS) {
  WEAPON_DEFS[id] = NEW_WEAPONS[id].def;
  WEAPON_DESC_EN[id] = NEW_WEAPONS[id].descEn;
}

// 무기 공용 헬퍼 -----------------------------------------------------------

// 선분(캡슐) 판정 + 대미지 + 선택적 넉백(플레이어 기준 바깥 방향).
function capsuleHit(
  ctx: WeaponContext,
  ax: number,
  az: number,
  bx: number,
  bz: number,
  width: number,
  damage: number,
  knockback: number,
  hitOnce?: Set<number>,
): void {
  const en = ctx.enemies;
  const mx = (ax + bx) * 0.5;
  const mz = (az + bz) * 0.5;
  const qr = Math.hypot(bx - ax, bz - az) * 0.5 + width + 1.2;
  // #45 19.6 근접 손맛(찌르기 계열): 대시/부스트 넉백 +50%, 부스트 스매시 피해 +25% + KO별 확정.
  const boost = ctx.boosting === true;
  const meleeK = boost || ctx.dashing === true ? 1.5 : 1;
  const meleeDmg = boost ? 1.25 : 1;
  const n = ctx.hash.query(mx, mz, qr, ctx.scratch);
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const hitR = width + en.radius[j];
    if (distToSegmentSq(en.x[j], en.z[j], ax, az, bx, bz) > hitR * hitR) continue;
    if (hitOnce?.has(j)) continue;
    hitOnce?.add(j);
    const isBoss = en.boss[j] === 1;
    const dealt = resolvedDamage(damage, isBoss, en.groggy[j] === 1, 'melee') * meleeDmg;
    const died = en.damageAt(j, dealt);
    ctx.damageText.spawn(dealt, en.x[j], en.scale[j] * 0.7, en.z[j], false);
    const dx = en.x[j] - ctx.px;
    const dz = en.z[j] - ctx.pz;
    const d = Math.hypot(dx, dz) || 1;
    if (knockback > 0) {
      en.push(j, dx / d, dz / d, knockback * meleeK);
      if (knockback >= 5 && !died && ctx.rng.next() < 0.4) ctx.particles.dust(en.x[j], en.z[j]);
    }
    if (died) {
      ctx.onKill(j);
      if (!isBoss && (boost || ctx.rng.next() < 0.6)) ctx.effects.spawnKOStar(en.x[j], en.z[j], dx / d, dz / d);
    } else if (!isBoss) {
      en.hitPunch[j] = boost ? 1.6 : 1.4;
    }
  }
}

// 부채꼴(원뿔) 판정 + 대미지 + 넉백. halfAngle 반각(라디안), PI면 360°.
function arcHit(
  ctx: WeaponContext,
  cx: number,
  cz: number,
  dirX: number,
  dirZ: number,
  radius: number,
  halfAngle: number,
  damage: number,
  knockback: number,
): void {
  const en = ctx.enemies;
  const cosHalf = Math.cos(halfAngle);
  // #45 19.6 근접 손맛: 대시/부스트 중 넉백 +50%, 부스트는 스매시(피해 +25% + KO별 확정).
  const boost = ctx.boosting === true;
  const meleeK = boost || ctx.dashing === true ? 1.5 : 1;
  const meleeDmg = boost ? 1.25 : 1;
  const n = ctx.hash.query(cx, cz, radius + 2, ctx.scratch);
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const dx = en.x[j] - cx;
    const dz = en.z[j] - cz;
    const d2 = dx * dx + dz * dz;
    const isBoss = en.boss[j] === 1;
    const rr = radius + en.radius[j];
    if (d2 > rr * rr) continue;
    const d = Math.sqrt(d2) || 1;
    if (halfAngle < 3.13) {
      const dot = (dx / d) * dirX + (dz / d) * dirZ;
      if (dot < cosHalf) continue;
    }
    const dealt = resolvedDamage(damage, isBoss, en.groggy[j] === 1, 'melee') * meleeDmg;
    const died = en.damageAt(j, dealt);
    ctx.damageText.spawn(dealt, en.x[j], en.scale[j] * 0.7, en.z[j], false);
    if (knockback !== 0) {
      // 음수는 시전자 쪽으로 되감는 채찍검 흡인, 양수는 기존 넉백이다.
      const direction = knockback > 0 ? 1 : -1;
      en.push(j, dx / d * direction, dz / d * direction, Math.abs(knockback) * meleeK);
      if (knockback >= 5 && !died && ctx.rng.next() < 0.35) ctx.particles.dust(en.x[j], en.z[j]);
    }
    if (died) {
      ctx.onKill(j);
      // #45 19.2/19.6: 근접 처치 KO 홈런 별 — 부스트 스매시는 확정, 그 외 60%(내부 동시 2 상한).
      if (!isBoss && (boost || ctx.rng.next() < 0.6)) ctx.effects.spawnKOStar(en.x[j], en.z[j], dx / d, dz / d);
    } else if (!isBoss) {
      en.hitPunch[j] = boost ? 1.6 : 1.4; // 근접 스쿼시 강화(x1.35~, 기본 x1.25 대비)
    }
  }
}

// 반경 내 전체 판정(연쇄/AoE용). 콜백에 인덱스 전달.
function forEachInRadius(ctx: WeaponContext, cx: number, cz: number, radius: number, fn: (j: number) => void): void {
  const en = ctx.enemies;
  const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
  for (let c = 0; c < n; c++) {
    const j = ctx.scratch[c];
    if (en.alive[j] === 0) continue;
    const dx = en.x[j] - cx;
    const dz = en.z[j] - cz;
    const rr = radius + en.radius[j];
    if (dx * dx + dz * dz <= rr * rr) fn(j);
  }
}

function dmg(ctx: WeaponContext, base: number, level: number, per: number): number {
  return base * ctx.stats.damageMul * (1 + (level - 1) * per);
}

// 계보 분기는 런당 최대 두 개다. 배열을 그대로 조회해 Set 할당이나 저장 포맷 변경 없이
// 서명 무기만 발사 궤적/타이밍을 바꾼다.
function hasBranch(ctx: WeaponContext, id: string): boolean {
  return ctx.lineageBranches.includes(id);
}

// 무기 base -----------------------------------------------------------------

abstract class TimedWeapon implements Weapon {
  abstract readonly id: string;
  level = 1;
  protected timer = 0;
  protected abstract baseCooldown: number;
  protected cooldownPerLevel = 0; // 레벨당 쿨다운 감소 비율

  update(ctx: WeaponContext): void {
    this.timer -= ctx.dt;
    if (this.timer > 0) return;
    const cd = this.baseCooldown * ctx.stats.cooldownMul * (1 - (this.level - 1) * this.cooldownPerLevel);
    this.timer += Math.max(0.05, cd);
    if (this.timer < 0) this.timer = 0;
    ctx.onAttack(this.id, ctx.aimX, ctx.aimZ);
    this.fire(ctx);
  }

  protected abstract fire(ctx: WeaponContext): void;
}

// 1. 물의 호흡 (수격) — 전방 관통 찌르기
export class SpearWeapon extends TimedWeapon {
  readonly id: string = 'spear';
  protected baseCooldown = 1.1;
  protected lineageCast = 0;
  protected readonly lineageHits = new Set<number>();

  protected fire(ctx: WeaponContext): void {
    const length = (5.0 + (this.level - 1) * 0.6) * ctx.stats.rangeMul;
    const width = 1.0; // 두께 상향 (0.72 -> 1.0)
    const isHinokami = ctx.musouActive && ctx.musouKey === 'tanjiro';
    const d = dmg(ctx, isHinokami ? 20 : 11, this.level, 0.15); // 데미지 상향 (8 -> 11)
    const end = this.strikeLineage(ctx, length, width, d, isHinokami);
    if (isHinokami || end.sunPulse) {
      ctx.particles.burst(end.x, end.z, 2.4, 0.6, 0.2, 10, 4);
    } else {
      ctx.particles.waterSplash(end.x, end.z, 14);
    }
  }

  // 한 시전의 피해 예산은 언제나 budget 하나다. 다중 선은 분할하고, 수룡의
  // 연결 선분은 공유 hit set으로 같은 적을 한 번만 벤다.
  protected strikeLineage(
    ctx: WeaponContext,
    length: number,
    width: number,
    budget: number,
    sunDefault = false,
  ): { x: number; z: number; sunPulse: boolean } {
    this.lineageCast++;
    const flow = hasBranch(ctx, 'tanjiro_flow');
    const dragon = hasBranch(ctx, 'tanjiro_dragon');
    const resonance = hasBranch(ctx, 'tanjiro_resonance') && ctx.musouActive === true;
    const sunMemory = hasBranch(ctx, 'tanjiro_sun') && this.lineageCast % 3 === 0;
    const sunPulse = sunDefault || sunMemory;
    const bx = ctx.px + ctx.aimX * length;
    const bz = ctx.pz + ctx.aimZ * length;
    const lineBudget = sunMemory ? budget * 0.75 : budget;
    const theme: 'sun' | 'water' = sunPulse ? 'sun' : 'water';

    if (resonance) {
      const sideX = -ctx.aimZ;
      const sideZ = ctx.aimX;
      const offsets = [0, -1.05, 1.05];
      const shares = [0.6, 0.2, 0.2];
      for (let k = 0; k < offsets.length; k++) {
        const off = offsets[k];
        const ax = ctx.px + sideX * off;
        const az = ctx.pz + sideZ * off;
        const ex = bx + sideX * off * 0.35;
        const ez = bz + sideZ * off * 0.35;
        capsuleHit(ctx, ax, az, ex, ez, width * (k === 0 ? 1 : 0.72), lineBudget * shares[k], 3);
        ctx.effects.spawnTechniqueLine('sun', ax, az, ex, ez, width * (k === 0 ? 1.7 : 1.05), 0.18, 0.94);
      }
    } else if (dragon) {
      const sideX = -ctx.aimZ;
      const sideZ = ctx.aimX;
      const p1x = ctx.px + ctx.aimX * length * 0.34 + sideX * 1.15;
      const p1z = ctx.pz + ctx.aimZ * length * 0.34 + sideZ * 1.15;
      const p2x = ctx.px + ctx.aimX * length * 0.68 - sideX * 1.2;
      const p2z = ctx.pz + ctx.aimZ * length * 0.68 - sideZ * 1.2;
      this.lineageHits.clear();
      const points = [ctx.px, ctx.pz, p1x, p1z, p2x, p2z, bx, bz];
      for (let k = 0; k < 3; k++) {
        const ax = points[k * 2];
        const az = points[k * 2 + 1];
        const ex = points[k * 2 + 2];
        const ez = points[k * 2 + 3];
        capsuleHit(ctx, ax, az, ex, ez, width, lineBudget, 3, this.lineageHits);
        ctx.effects.spawnTechniqueLine(theme, ax, az, ex, ez, width * 1.65, 0.19, 0.94);
      }
    } else if (flow) {
      const base = Math.atan2(ctx.aimZ, ctx.aimX);
      for (const turn of [-0.1, 0.1]) {
        const dx = Math.cos(base + turn);
        const dz = Math.sin(base + turn);
        const ex = ctx.px + dx * length;
        const ez = ctx.pz + dz * length;
        capsuleHit(ctx, ctx.px, ctx.pz, ex, ez, width * 0.9, lineBudget * 0.5, 3);
        ctx.effects.spawnThrust(ctx.px, ctx.pz, dx, dz, length, width * 1.55, 0.7, 0.95, 1.9, 0.14, theme);
      }
    } else {
      capsuleHit(ctx, ctx.px, ctx.pz, bx, bz, width, lineBudget, 3);
      const cr = sunPulse ? 2.4 : 0.7;
      const cg = sunPulse ? 0.6 : 0.95;
      const cb = sunPulse ? 0.2 : 1.9;
      ctx.effects.spawnThrust(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, length, width * 2.2, cr, cg, cb, 0.15, theme);
    }

    if (sunMemory) {
      arcHit(ctx, bx, bz, ctx.aimX, ctx.aimZ, 2.25 * ctx.stats.areaMul, Math.PI, budget * 0.25, 4);
      ctx.effects.spawnTechnique('sun', bx, bz, Math.atan2(-ctx.aimZ, ctx.aimX), 4.8, 4.8, 0.28, 0.92, 1.35, 0.08);
      ctx.effects.spawnLight?.(bx, bz, 1.0, 0.26, 0.08, 4.2, 0.18);
    }
    return { x: bx, z: bz, sunPulse };
  }
}

// 2. 잔잔한 물결 (유동참) — 전방 120° 부채꼴 슬래시
export class GuandaoWeapon extends TimedWeapon {
  readonly id = 'guandao';
  protected baseCooldown = 1.2; // 쿨다운 상향 (1.45 -> 1.2)
  private lineageCast = 0;

  protected fire(ctx: WeaponContext): void {
    this.lineageCast++;
    const still = hasBranch(ctx, 'tomioka_still');
    const current = hasBranch(ctx, 'tomioka_current');
    const counter = hasBranch(ctx, 'tomioka_counter') && (ctx.dashing === true || ctx.boosting === true);
    const nagi = hasBranch(ctx, 'tomioka_nagi') && this.lineageCast % 4 === 0;
    const baseRadius = (4.4 + (this.level - 1) * 0.35) * ctx.stats.areaMul;
    const radius = baseRadius * (still ? 0.82 : 1);
    const half = still ? 1.42 : 1.05 + (this.level - 1) * 0.02;
    const d = dmg(ctx, 15, this.level, 0.18);

    // 凪는 바깥으로 탄을 흩뿌리지 않고 중심에서 공격과 적탄을 함께 끊는다.
    if (nagi) {
      const calmRadius = Math.max(4.5, baseRadius * 0.92);
      arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, calmRadius, Math.PI, d, 0);
      ctx.clearEnemyProjectiles(ctx.px, ctx.pz, calmRadius + 0.8);
      ctx.effects.spawnRing(ctx.px, ctx.pz, calmRadius, 0.35, 1.15, 2.8, 0.5);
      ctx.effects.spawnTechnique('water', ctx.px, ctx.pz, 0, calmRadius * 2, calmRadius * 2, 0.38, 0.72, -0.45, 0.08);
      return;
    }

    const backShare = counter ? 0.25 : 0;
    const waveShare = current ? 0.35 : 0;
    const arcShare = 1 - backShare - waveShare;
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, half, d * arcShare, still ? 7 : 5);
    ctx.effects.spawnSlashArc(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, half, 0.3, 0.7, 2.2, 0.22, 'water'); // 기유 물그림자 청색

    if (current) {
      ctx.projectiles.spawn(
        ctx.px + ctx.aimX * 0.4, ctx.pz + ctx.aimZ * 0.4,
        ctx.aimX, ctx.aimZ, 12 * ctx.stats.rangeMul, d * waveShare, 0.68, 4, 1.05,
        PK_WATER, 0.42, 1.55, 2.8, 2.8, 1.45, false, 0, false, 'water',
      );
    }
    if (counter) {
      arcHit(ctx, ctx.px, ctx.pz, -ctx.aimX, -ctx.aimZ, radius * 0.72, 0.82, d * backShare, 6);
      ctx.effects.spawnSlashArc(ctx.px, ctx.pz, -ctx.aimX, -ctx.aimZ, radius * 0.72, 0.82, 0.25, 0.8, 2.4, 0.18, 'water');
    }
    ctx.particles.waterSplash(ctx.px + ctx.aimX * radius * 0.7, ctx.pz + ctx.aimZ * radius * 0.7, 16);
    ctx.effects.spawnRing(ctx.px, ctx.pz, radius * 0.9, 0.3, 0.8, 2.2, 0.35); // 물결 파문 링
  }
}

// 3. 짐승의 호흡 (쌍 엄니) — 좌우 톱날이 0.11초 간격으로 교차하는 쌍참
export class ZhangbaWeapon extends TimedWeapon {
  readonly id: string = 'zhangba';
  protected baseCooldown = 1.15;
  private followupT = -1;
  private ox = 0;
  private oz = 0;
  private fx = 1;
  private fz = 0;
  private length = 0;
  private castDamage = 0;
  private fangShare = 0.5;

  update(ctx: WeaponContext): void {
    super.update(ctx);
    if (this.followupT < 0) return;
    this.followupT -= ctx.dt;
    if (this.followupT > 0) return;
    this.followupT = -1;
    this.strike(ctx, 1);
  }

  protected fire(ctx: WeaponContext): void {
    this.ox = ctx.px;
    this.oz = ctx.pz;
    this.fx = ctx.aimX;
    this.fz = ctx.aimZ;
    if (hasBranch(ctx, 'inosuke_spatial')) {
      const n = ctx.hash.query(ctx.px, ctx.pz, 9, ctx.scratch);
      let sx = 0;
      let sz = 0;
      let found = 0;
      for (let k = 0; k < n; k++) {
        const j = ctx.scratch[k];
        if (ctx.enemies.alive[j] === 0) continue;
        const dx = ctx.enemies.x[j] - ctx.px;
        const dz = ctx.enemies.z[j] - ctx.pz;
        const inv = 1 / Math.max(1, Math.hypot(dx, dz));
        sx += dx * inv;
        sz += dz * inv;
        found++;
      }
      const sl = Math.hypot(sx, sz);
      if (found > 1 && sl > 0.01) {
        this.fx = sx / sl;
        this.fz = sz / sl;
        ctx.effects.spawnRing(ctx.px + this.fx * 3.5, ctx.pz + this.fz * 3.5, 2.8, 0.7, 1.5, 1.8, 0.2);
      }
    }
    this.length = (4.8 + (this.level - 1) * 0.4) * ctx.stats.rangeMul;
    this.castDamage = dmg(ctx, 13, this.level, 0.15);
    const rush = hasBranch(ctx, 'inosuke_rush');
    this.fangShare = rush ? 0.35 : 0.5;
    this.strike(ctx, 0);
    this.followupT = hasBranch(ctx, 'inosuke_fangs') ? 0.06 : hasBranch(ctx, 'inosuke_hunt') ? 0.14 : 0.11;
    if (rush) {
      const bx = this.ox + this.fx * this.length * 1.15;
      const bz = this.oz + this.fz * this.length * 1.15;
      capsuleHit(ctx, this.ox, this.oz, bx, bz, 0.92, this.castDamage * 0.3, 11);
      ctx.effects.spawnTechniqueLine('beast', this.ox, this.oz, bx, bz, 1.9, 0.16, 0.92);
    }
  }

  private strike(ctx: WeaponContext, side: 0 | 1): void {
    const px = -this.fz;
    const pz = this.fx;
    const sign = side === 0 ? -1 : 1;
    const tight = hasBranch(ctx, 'inosuke_fangs');
    const hunt = hasBranch(ctx, 'inosuke_hunt');
    const startSide = tight ? 0.8 : hunt ? 1.75 : 1.25;
    const endSide = tight ? 0.8 : hunt ? 1.9 : 1.35;
    const width = hunt ? 1 : tight ? 0.72 : 0.82;
    const ax = this.ox - this.fx * 0.75 + px * startSide * sign;
    const az = this.oz - this.fz * 0.75 + pz * startSide * sign;
    const bx = this.ox + this.fx * this.length - px * endSide * sign;
    const bz = this.oz + this.fz * this.length - pz * endSide * sign;
    capsuleHit(ctx, ax, az, bx, bz, width, this.castDamage * this.fangShare, 7.5);
    ctx.effects.spawnTechniqueLine('beast', ax, az, bx, bz, 1.65, 0.18, 0.96);
    ctx.particles.burst(bx, bz, 0.75, 1.15, 1.45, 5, 2.5);
  }
}

// 4. 매혹의 연기 (꽃망울) — 호밍 부적
export class BaiyuWeapon extends TimedWeapon {
  readonly id = 'baiyu';
  protected baseCooldown = 1.6;
  protected fire(ctx: WeaponContext): void {
    const baseCount = 2 + Math.floor((this.level - 1) / 2) + ctx.stats.projectileBonus;
    const guard = hasBranch(ctx, 'kanao_guard');
    const curved = hasBranch(ctx, 'kanao_arc');
    const precision = hasBranch(ctx, 'kanao_precision')
      || (hasBranch(ctx, 'kanao_vermilion') && ctx.musouActive === true);
    const count = precision ? 1 : Math.max(guard || curved ? 3 : 1, baseCount);
    // 분기로 발수가 늘어도 레벨/투사체 보너스로 정해진 원래 시전 예산만 나눈다.
    const castBudget = dmg(ctx, 9, this.level, 0.14) * (1 + (baseCount - 1) * 0.18);
    const d = castBudget / count;
    const speed = (precision ? 18 : curved ? 9.5 : guard ? 8 : 10.5) * ctx.stats.rangeMul;
    const pierce = 1 + Math.floor(this.level / 3);
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    for (let k = 0; k < count; k++) {
      const a = precision
        ? base
        : guard
          ? base + (k / count) * Math.PI * 2
          : base + (k - (count - 1) * 0.5) * (curved ? 0.42 : 0.24);
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d,
        (precision ? 0.36 : 0.5) * ctx.stats.areaMul,
        precision ? pierce + 2 : pierce, precision ? 1.1 : curved ? 3.2 : guard ? 1 : 2.6,
        PK_LOTUS, 1.9, 0.35, 1.0, precision ? 1.8 : 1.3, precision ? 0.7 : 1.0,
        !precision, curved ? 3.2 : guard ? 10 : 7, false, 'flower',
      );
    }
    if (precision) {
      ctx.effects.spawnTechniqueLine('flower', ctx.px, ctx.pz, ctx.px + ctx.aimX * 12, ctx.pz + ctx.aimZ * 12, 1.05, 0.18, 0.78);
    }
  }
}

// 5. 벌레의 호흡 (나비 춤) — 최근접 적 자동 연사 독침
export class CrossbowWeapon extends TimedWeapon {
  readonly id = 'crossbow';
  protected baseCooldown = 0.45; // 쿨다운 상향 (0.55 -> 0.45)
  protected cooldownPerLevel = 0.04;
  protected fire(ctx: WeaponContext): void {
    const dirX = ctx.aimX;
    const dirZ = ctx.aimZ;
    const baseShots = 1 + ctx.stats.projectileBonus;
    const bossNeedle = hasBranch(ctx, 'shinobu_boss');
    const cloud = hasBranch(ctx, 'shinobu_cloud');
    const bloom = hasBranch(ctx, 'shinobu_bloom') && ctx.musouActive === true;
    const shots = bloom ? Math.max(6, baseShots) : bossNeedle || cloud ? Math.max(3, baseShots) : baseShots;
    // 찌르기 직격을 낮추고 실제 3초 독(4중첩 독꽃)으로 총 피해를 옮긴다.
    const castBudget = dmg(ctx, 7, this.level, 0.11) * (1 + (baseShots - 1) * 0.2);
    const d = castBudget / shots;
    const speed = (bossNeedle ? 18 : cloud ? 13 : 15) * ctx.stats.rangeMul;
    const pierce = Math.floor((this.level - 1) / 2) + (hasBranch(ctx, 'shinobu_compound') ? 1 : 0);
    const spreadStep = bloom ? 0.075 : bossNeedle ? 0.025 : cloud ? 0.24 : 0.12;
    const homing = cloud || bloom;
    const poisonMul = hasBranch(ctx, 'shinobu_compound') ? 1.2 : bloom ? 0.55 : 1;
    ctx.particles.butterflyPoison(ctx.px, ctx.pz, 6);
    for (let k = 0; k < shots; k++) {
      const spread = (k - (shots - 1) / 2) * spreadStep;
      const a = Math.atan2(dirZ, dirX) + spread;
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d, 0.45 * ctx.stats.areaMul, pierce, 1.6,
        PK_BUTTERFLY, 1.3, 0.45, 1.9, 1.4, 0.8, homing, cloud ? 9 : 6, false,
        'butterfly', d * poisonMul, // 3초 독·4중첩 독꽃
      );
    }
  }
}

// 6. 혈귀술 폭혈격 — 전방 격투 발차기(할퀴기) 타격 + 타격점 폭혈 장판 폭발
export class FireWeapon extends TimedWeapon {
  readonly id = 'fire';
  protected baseCooldown = 2.4; // 격투 연사를 위해 쿨타운 소폭 감소 (3.0 -> 2.4)
  private igniteT = -1;
  private tx = 0;
  private tz = 0;
  private fx = 1;
  private fz = 0;
  private radius = 0;
  private zoneLife = 0;
  private zoneDps = 0;

  update(ctx: WeaponContext): void {
    super.update(ctx);
    if (this.igniteT < 0) return;
    this.igniteT -= ctx.dt;
    if (this.igniteT > 0) return;
    this.igniteT = -1;
    this.ignite(ctx);
  }

  protected fire(ctx: WeaponContext): void {
    const radius = (2.2 + (this.level - 1) * 0.28) * ctx.stats.areaMul;
    const life = 3.0 + (this.level - 1) * 0.3;
    const dps = 8 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.15);
    const contactDmg = 12 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.18);
    const inferno = hasBranch(ctx, 'nezuko_inferno');
    const regen = hasBranch(ctx, 'nezuko_regen');

    // 1) 전방 110도 부채꼴 발차기 격투 타격 (물리 대미지)
    const sweepRange = radius * (inferno ? 1.7 : 1.3);
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, sweepRange, inferno ? 0.48 : Math.PI * 0.6, contactDmg, inferno ? 9 : 5);

    // 2) 맞은 자리에 혈흔을 남긴 뒤 0.16초 후 분홍 불꽃이 붙는다.
    this.fx = ctx.aimX;
    this.fz = ctx.aimZ;
    const markDistance = regen ? 0 : inferno ? sweepRange * 0.76 : 1.5;
    this.tx = ctx.px + ctx.aimX * markDistance;
    this.tz = ctx.pz + ctx.aimZ * markDistance;
    this.radius = radius;
    this.zoneLife = life + (regen ? 1 : 0);
    this.zoneDps = dps * (regen ? 0.82 : 1);
    this.igniteT = hasBranch(ctx, 'nezuko_burst') && ctx.musouActive === true ? 0.04 : 0.16;
    ctx.effects.spawnRing(this.tx, this.tz, radius * 0.42, 1.1, 0.14, 0.46, 0.18);
  }

  private ignite(ctx: WeaponContext): void {
    const chained = hasBranch(ctx, 'nezuko_chain')
      || (hasBranch(ctx, 'nezuko_burst') && ctx.musouActive === true);
    const count = chained ? 3 : 1;
    for (let k = 0; k < count; k++) {
      const off = chained ? -0.3 + k * 1.65 : 0;
      const zx = this.tx + this.fx * off;
      const zz = this.tz + this.fz * off;
      const radius = this.radius * (chained ? 0.72 : hasBranch(ctx, 'nezuko_regen') ? 0.85 : 1);
      const zoneDps = this.zoneDps / count;
      ctx.zones.spawn(zx, zz, radius, this.zoneLife, zoneDps, 2.5, 0.3, 1.2);
      ctx.effects.spawnTechnique(
        'blood', zx, zz, Math.atan2(-this.fz, this.fx),
        radius * 2.2, radius * 2.2, 0.42, 0.96, 1.1, 0.16 + k * 0.035, 0.5,
      );
      ctx.effects.spawnTripleShock(zx, zz, radius, 2.4, 0.4, 1.5);
      ctx.effects.spawnFlash(zx, zz, 2.4, 0.4, 1.5, 1.3 + k * 0.12);
    }
  }
}

// 7. 번개의 호흡 · 벽력일섬 — 0.18초 납도 예고 뒤 한 프레임에 끝나는 초고속 선형 참격
export class ThunderWeapon extends TimedWeapon {
  readonly id = 'thunder';
  protected baseCooldown = 2.1; // 쿨다운 상향 (2.4 -> 2.1)
  protected cooldownPerLevel = 0.03;
  private windup = -1;
  private ox = 0;
  private oz = 0;
  private aimX = 1;
  private aimZ = 0;
  private targetHint = -1;
  private readonly castHits = new Set<number>();

  update(ctx: WeaponContext): void {
    super.update(ctx);
    if (this.windup < 0) return;
    this.windup -= ctx.dt;
    if (this.windup > 0) return;
    this.windup = -1;
    this.discharge(ctx);
  }

  protected fire(ctx: WeaponContext): void {
    this.ox = ctx.px;
    this.oz = ctx.pz;
    this.aimX = ctx.aimX;
    this.aimZ = ctx.aimZ;
    this.targetHint = ctx.aimTarget;
    this.windup = hasBranch(ctx, 'zenitsu_godspeed') ? 0.07 : 0.18;
    this.castHits.clear();
    // 납도/호흡 순간은 얇고 짧게, 방출 프레임과 밝기 계층을 분리한다.
    ctx.effects.spawnTechniqueLine(
      'thunder', this.ox, this.oz,
      this.ox + this.aimX * 6.5, this.oz + this.aimZ * 6.5,
      0.75, 0.18, 0.32,
    );
    ctx.particles.lightningSpark(this.ox, this.oz, 5);
  }

  private discharge(ctx: WeaponContext): void {
    const baseSegments = Math.min(4, 1 + Math.floor((this.level - 1) / 3) + ctx.stats.projectileBonus);
    const d = dmg(ctx, 25, this.level, 0.15);
    const branchBudget = d * Math.min(2, baseSegments);

    // 화뢰신은 무작위 연쇄가 아니라 조준선 하나를 끝까지 가르는 용형 번개다.
    if (hasBranch(ctx, 'zenitsu_thunder_god') && ctx.musouActive === true) {
      const length = 15 * ctx.stats.rangeMul;
      const bx = this.ox + this.aimX * length;
      const bz = this.oz + this.aimZ * length;
      capsuleHit(ctx, this.ox, this.oz, bx, bz, 1.2, branchBudget, 7);
      ctx.effects.spawnTechniqueLine('thunder', this.ox, this.oz, bx, bz, 2.25, 0.24, 1);
      ctx.effects.spawnChainArc(this.ox, this.oz, bx, bz, 3.2, 2.5, 0.34);
      for (let k = 1; k <= 5; k++) ctx.particles.lightningSpark(this.ox + this.aimX * length * k / 5, this.oz + this.aimZ * length * k / 5, 6);
      return;
    }

    // 팔련은 동일 조준선을 여덟 번 통과하지만 각 타격을 1/8로 나눠 총 예산을 고정한다.
    if (hasBranch(ctx, 'zenitsu_eight')) {
      let bx = this.ox + this.aimX * 12 * ctx.stats.rangeMul;
      let bz = this.oz + this.aimZ * 12 * ctx.stats.rangeMul;
      if (this.targetHint >= 0 && ctx.enemies.alive[this.targetHint] === 1) {
        bx = ctx.enemies.x[this.targetHint];
        bz = ctx.enemies.z[this.targetHint];
      }
      for (let k = 0; k < 8; k++) {
        capsuleHit(ctx, this.ox, this.oz, bx, bz, 0.56 * ctx.stats.areaMul, branchBudget / 8, 4);
      }
      ctx.effects.spawnTechniqueLine('thunder', this.ox, this.oz, bx, bz, 1.7, 0.2, 1);
      ctx.effects.spawnChainArc(this.ox, this.oz, bx, bz, 2.9, 2.3, 0.28);
      for (let k = 1; k <= 8; k++) ctx.particles.lightningSpark(this.ox + (bx - this.ox) * k / 8, this.oz + (bz - this.oz) * k / 8, 4);
      return;
    }

    const segments = hasBranch(ctx, 'zenitsu_six') ? 6 : baseSegments;
    const perSegment = hasBranch(ctx, 'zenitsu_six') ? branchBudget / 6 : d;
    let curX = this.ox;
    let curZ = this.oz;
    for (let k = 0; k < segments; k++) {
      let target = -1;
      if (k === 0 && this.targetHint >= 0 && ctx.enemies.alive[this.targetHint] === 1) {
        const hx = ctx.enemies.x[this.targetHint] - curX;
        const hz = ctx.enemies.z[this.targetHint] - curZ;
        const hintRange = 21 * ctx.stats.rangeMul;
        if (hx * hx + hz * hz <= hintRange * hintRange) target = this.targetHint;
      }
      if (target < 0) target = this.nearestUnhit(ctx, curX, curZ, 18 * ctx.stats.rangeMul);
      let nextX: number;
      let nextZ: number;
      if (target < 0) {
        if (k > 0) break;
        const fallback = (hasBranch(ctx, 'zenitsu_godspeed') ? 13 : 10) * ctx.stats.rangeMul;
        nextX = curX + this.aimX * fallback;
        nextZ = curZ + this.aimZ * fallback;
      } else {
        nextX = ctx.enemies.x[target];
        nextZ = ctx.enemies.z[target];
      }

      ctx.effects.spawnChainArc(curX, curZ, nextX, nextZ, 2.8, 2.25, 0.28);
      ctx.effects.spawnTechniqueLine('thunder', curX, curZ, nextX, nextZ, 1.25, 0.16, 1);
      ctx.particles.lightningSpark(nextX, nextZ, 11);
      ctx.effects.spawnFlash(nextX, nextZ, 2.55, 2.05, 0.38, 2.2);
      capsuleHit(ctx, curX, curZ, nextX, nextZ, 0.9, perSegment, 4, this.castHits);
      curX = nextX;
      curZ = nextZ;
    }
  }

  private nearestUnhit(ctx: WeaponContext, x: number, z: number, radius: number): number {
    let best = -1;
    let bestD2 = radius * radius;
    const n = ctx.hash.query(x, z, radius, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (ctx.enemies.alive[j] === 0 || this.castHits.has(j)) continue;
      const dx = ctx.enemies.x[j] - x;
      const dz = ctx.enemies.z[j] - z;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) {
        best = j;
        bestD2 = d2;
      }
    }
    return best;
  }
}

// 8. 등나무꽃 부적 — 주위 회전 등꽃 수호구
export class OrbitWeapon implements Weapon {
  readonly id = 'orbit';
  level = 1;
  private built = -1;

  private count(): number {
    return 3 + Math.floor((this.level - 1) / 2);
  }

  update(ctx: WeaponContext): void {
    const want = this.count() + ctx.stats.projectileBonus;
    const radius = 3.2;
    const angVel = 3.0 + (this.level - 1) * 0.15;
    const d = 8 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.16);
    if (want !== this.built) {
      ctx.projectiles.clearOrbits();
      for (let k = 0; k < want; k++) {
        const a = (k / want) * Math.PI * 2;
        ctx.projectiles.spawnOrbit(a, radius, angVel, d, 1.2, 0.4, 1.8, 1.35); // 등꽃 보라 오브 크기 상향
      }
      this.built = want;
    }
    ctx.projectiles.refreshOrbits(d, radius, angVel);
  }
}

// 9. 파괴살 (나침 / 난식) — 360° 나침 충격파 + 6방향 3D 공격 발사 (Air Punch Shockwaves)
export class HalberdWeapon extends TimedWeapon {
  readonly id = 'halberd';
  protected baseCooldown = 2.6; // 연사 속도 억제를 위해 쿨다운 대폭 상향 (1.5 -> 2.6)
  protected fire(ctx: WeaponContext): void {
    const radius = (3.6 + (this.level - 1) * 0.35) * ctx.stats.areaMul;
    const d = dmg(ctx, 11, this.level, 0.12); // 기본 공격력 및 레벨당 성장률 조정 (14 -> 11)

    // 1) 360° 근접 히트 판정
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, Math.PI, d, 4.5); // 넉백 완화 (6 -> 4.5)

    // 2) 비플레이어 호흡계 파괴살은 전용 원화 대상이 아니므로 낮은 알파의 보조 나침 문양만 유지.
    ctx.effects.spawnTechniqueMesh('compass', ctx.px, 0.1, ctx.pz, 0, radius * 1.25, 0.6, radius * 1.25, 0.8, 0.4, 2.2, 0.28);

    // 3) 이중 방사형 3D 충격파 링
    ctx.effects.spawnRing(ctx.px, ctx.pz, radius * 1.4, 0.8, 0.4, 2.2, 0.45);
    ctx.effects.spawnRing(ctx.px, ctx.pz, radius * 0.8, 1.4, 0.6, 2.5, 0.3);

    // 4) 6방향 파괴살 난식 3D 공권 투사체 충격파 방사 (8방향 -> 6방향 하향)
    const count = 6 + ctx.stats.projectileBonus;
    for (let k = 0; k < count; k++) {
      const ang = (k / count) * Math.PI * 2;
      const dx = Math.cos(ang);
      const dz = Math.sin(ang);
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, dx, dz, 13, d * 0.45 / count, 1.2, 3, 0.6,
        PK_COMPASS, 0.85, 0.45, 2.3, radius * 0.7, radius * 0.5, false, 0, true, // 파괴살 — 나침반 충격파 링
      );
    }
  }
}

// 10. 화염의 호흡 — 시전자에게서 전방으로 터져 나가는 불호랑이 돌격
export class CavalryWeapon extends TimedWeapon {
  readonly id: string = 'cavalry';
  protected baseCooldown = 3.0; // 쿨다운 상향 (4.0 -> 3.0)
  protected fire(ctx: WeaponContext): void {
    const charge = hasBranch(ctx, 'rengoku_charge');
    const tiger = hasBranch(ctx, 'rengoku_tiger');
    const ninth = hasBranch(ctx, 'rengoku_ninth') && ctx.musouActive === true;
    const guard = hasBranch(ctx, 'rengoku_guard');
    const baseCount = Math.min(4, 1 + Math.floor((this.level - 1) / 3) + ctx.stats.projectileBonus);
    const count = ninth || charge ? 1 : tiger ? 2 : baseCount;
    const d = dmg(ctx, 18, this.level, 0.15);
    // 성염 방어파를 선택해도 불호랑이와 합친 총 예산은 기존 1.15d다.
    const projectileBudget = d * (guard ? 0.9 : 1.15);
    const perTiger = projectileBudget / count;
    const speed = (ninth ? 30 : charge ? 24 : tiger ? 16.5 : 19) * ctx.stats.rangeMul;
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    if (guard) {
      arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, 3.4 * ctx.stats.areaMul, 1.25, d * 0.25, 7);
      ctx.effects.spawnSlashArc(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, 3.4 * ctx.stats.areaMul, 1.25, 2.5, 0.78, 0.16, 0.2, 'flame');
    }
    for (let k = 0; k < count; k++) {
      const spread = ninth || charge ? 0 : tiger ? 0.4 : 0.15;
      const a = base + (k - (count - 1) * 0.5) * spread;
      const dirX = Math.cos(a);
      const dirZ = Math.sin(a);
      const sx = ctx.px - dirX * 0.55;
      const sz = ctx.pz - dirZ * 0.55;
      ctx.projectiles.spawn(
        sx, sz, dirX, dirZ, speed, perTiger,
        (tiger ? 1.55 : ninth ? 1.75 : 1.25) * ctx.stats.areaMul, 15,
        ninth || charge ? 1.8 : 1.55,
        PK_FLAME, 2.9, 0.7, 0.12, ninth ? 8 : charge ? 6.5 : tiger ? 4.5 : 5.0,
        ninth ? 2 : tiger ? 2.2 : 1.65, false, 0, true, 'flame',
      );
    }
  }
}

// 11. 철질려 蒺藜 — 설치형 지뢰. 이동 경로에 마름쇠를 깔고, 적 접촉 시 폭발(소반경 AoE)+둔화.
//   자체 SoA 풀(고정 상한). 마름쇠 표식은 철색 반짝임(적탄 붉은 링과 색 구분). 신규 셰이더 없음.
export class CaltropWeapon implements Weapon {
  readonly id = 'caltrop';
  level = 1;
  private static readonly CAP = 32; // 물리 풀 상한(동시 존재 상한은 maxActive로 제어)
  private static readonly PLACE_INTERVAL = 0.9; // 설치 주기(초)
  private static readonly MAX_AGE = 14; // 미격발 마름쇠 수명(초)
  private static readonly TRIGGER_R = 0.95; // 접촉 감지 반경(+적 반경)
  private readonly cx = new Float32Array(CaltropWeapon.CAP);
  private readonly cz = new Float32Array(CaltropWeapon.CAP);
  private readonly age = new Float32Array(CaltropWeapon.CAP);
  private readonly glintT = new Float32Array(CaltropWeapon.CAP); // 반짝임 타이머
  private readonly armed = new Uint8Array(CaltropWeapon.CAP);
  private placeT = 0;

  // 동시 존재 상한: Lv1 3 → Lv8 10 (레벨당 +1, CAP 클램프)
  private maxActive(): number {
    return Math.min(CaltropWeapon.CAP, 3 + (this.level - 1));
  }

  update(ctx: WeaponContext): void {
    const CAP = CaltropWeapon.CAP;
    // 설치: 주기적으로 발밑(진행 반대쪽 약간 뒤)에 1개
    this.placeT -= ctx.dt;
    if (this.placeT <= 0) {
      this.placeT += CaltropWeapon.PLACE_INTERVAL * ctx.stats.cooldownMul;
      if (this.placeT < 0) this.placeT = 0;
      this.place(ctx);
    }
    const en = ctx.enemies;
    const triggerR = CaltropWeapon.TRIGGER_R;
    const blastR = (2.2 + (this.level - 1) * 0.13) * ctx.stats.areaMul;
    const d = dmg(ctx, 20, this.level, 0.13);
    const slowDur = 0.5 + (this.level - 1) * 0.03; // 둔화(짧은 속박)
    for (let i = 0; i < CAP; i++) {
      if (this.armed[i] === 0) continue;
      this.age[i] += ctx.dt;
      if (this.age[i] >= CaltropWeapon.MAX_AGE) {
        this.armed[i] = 0;
        continue;
      }
      const px = this.cx[i];
      const pz = this.cz[i];
      // 은은한 철색 반짝임(지면 표식). 파티클만 사용 → 데칼 풀 부담 없음.
      this.glintT[i] -= ctx.dt;
      if (this.glintT[i] <= 0) {
        this.glintT[i] = 0.7 + ctx.rng.next() * 0.8;
        for (let g = 0; g < 3; g++) {
          ctx.particles.emit(
            px + (ctx.rng.next() - 0.5) * 0.5, 0.12, pz + (ctx.rng.next() - 0.5) * 0.5,
            (ctx.rng.next() - 0.5) * 0.3, 0.5 + ctx.rng.next() * 0.5, (ctx.rng.next() - 0.5) * 0.3,
            0.55, 0.68, 0.95, 0.5, 0.55, -0.4, 0.9,
          );
        }
      }
      // 접촉 감지: 반경 내 생존 적 존재 시 폭발
      let hit = false;
      const n = ctx.hash.query(px, pz, triggerR + 1.0, ctx.scratch);
      for (let c = 0; c < n; c++) {
        const j = ctx.scratch[c];
        if (en.alive[j] === 0) continue;
        const dx = en.x[j] - px;
        const dz = en.z[j] - pz;
        const rr = triggerR + en.radius[j];
        if (dx * dx + dz * dz <= rr * rr) {
          hit = true;
          break;
        }
      }
      if (hit) this.explode(ctx, i, px, pz, blastR, d, slowDur);
    }
  }

  // 설치: 여유 슬롯이 있고 상한 미만이면 새로, 아니면 가장 오래된 마름쇠를 덮어쓴다.
  private place(ctx: WeaponContext): void {
    const CAP = CaltropWeapon.CAP;
    const max = this.maxActive();
    let free = -1;
    let armedCount = 0;
    let oldest = -1;
    let oldestAge = -1;
    for (let i = 0; i < CAP; i++) {
      if (this.armed[i] === 0) {
        if (free < 0) free = i;
        continue;
      }
      armedCount++;
      if (this.age[i] > oldestAge) {
        oldestAge = this.age[i];
        oldest = i;
      }
    }
    let slot: number;
    if (armedCount < max && free >= 0) slot = free;
    else if (oldest >= 0) slot = oldest;
    else if (free >= 0) slot = free;
    else return;
    const bx = ctx.px - ctx.faceX * 0.5;
    const bz = ctx.pz - ctx.faceZ * 0.5;
    this.cx[slot] = bx;
    this.cz[slot] = bz;
    this.age[slot] = 0;
    this.glintT[slot] = 0;
    this.armed[slot] = 1;
    // 설치 순간 표식(철색 데칼 + 잔불티)
    ctx.effects.spawnDecal?.(bx, bz, 0.55, 0.5, 0.62, 0.9);
  }

  private explode(
    ctx: WeaponContext,
    i: number,
    x: number,
    z: number,
    blastR: number,
    d: number,
    slowDur: number,
  ): void {
    this.armed[i] = 0;
    const en = ctx.enemies;
    const n = ctx.hash.query(x, z, blastR, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - x;
      const dz = en.z[j] - z;
      const rr = blastR + en.radius[j];
      if (dx * dx + dz * dz > rr * rr) continue;
      const dealt = resolvedDamage(d, en.boss[j] === 1, en.groggy[j] === 1, 'special');
      const died = en.damageAt(j, dealt);
      ctx.damageText.spawn(dealt, en.x[j], en.scale[j] * 0.7, en.z[j], false);
      const dist = Math.sqrt(dx * dx + dz * dz) || 1;
      en.push(j, dx / dist, dz / dist, 4);
      // 둔화: EnemyPool에 슬로우 배수 필드가 없어 짧은 속박(stun)으로 대체(자가 감쇠).
      if (!died) en.stun[j] = Math.max(en.stun[j], slowDur);
      if (died) ctx.onKill(j);
    }
    // 철색 폭발 연출(충격파 링 + 섬광 + 파편 + 스코치 + 순간 광원)
    ctx.effects.spawnRing(x, z, blastR + 0.6, 0.6, 0.75, 1.1, 0.4);
    ctx.effects.spawnFlash(x, z, 0.7, 0.85, 1.2, blastR * 0.8);
    ctx.particles.burst(x, z, 0.6, 0.72, 1.0, 12, 6);
    ctx.effects.spawnDecal?.(x, z, blastR * 0.7, 0.55, 0.68, 1.0);
    ctx.effects.spawnLight?.(x, z, 0.5, 0.65, 1.0, blastR * 2.2, 0.18);
  }
}

// 12. 독천 毒泉 — 장판 DoT. 주기적으로 최다 밀집 지점에 독 웅덩이(수명 수 초, 틱 피해).
//   ZonePool 재사용(녹색 → 화계 주황·적탄 붉은색과 색 구분). 레벨업 시 크기/틱/수명↑.
export class PoisonWeapon extends TimedWeapon {
  readonly id = 'poison';
  protected baseCooldown = 2.8;
  protected fire(ctx: WeaponContext): void {
    const radius = (2.4 + (this.level - 1) * 0.3) * ctx.stats.areaMul;
    const life = 4.0 + (this.level - 1) * 0.35;
    const dps = 9 * ctx.stats.damageMul * (1 + (this.level - 1) * 0.15);
    // 최다 밀집 지점 탐색: 무작위 생존 적 몇을 후보로, 반경 내 적 수가 최대인 곳 선택.
    const en = ctx.enemies;
    let bestX = ctx.px;
    let bestZ = ctx.pz;
    let bestCount = -1;
    const r2 = radius * radius;
    for (let s = 0; s < 6; s++) {
      const t = en.randomAlive();
      if (t < 0) break;
      const qx = en.x[t];
      const qz = en.z[t];
      const n = ctx.hash.query(qx, qz, radius, ctx.scratch);
      let count = 0;
      for (let c = 0; c < n; c++) {
        const j = ctx.scratch[c];
        if (en.alive[j] === 0) continue;
        const dx = en.x[j] - qx;
        const dz = en.z[j] - qz;
        if (dx * dx + dz * dz <= r2) count++;
      }
      if (count > bestCount) {
        bestCount = count;
        bestX = qx;
        bestZ = qz;
      }
    }
    if (bestCount < 0) return; // 생존 적 없음 → 생성 스킵(풀 절약)
    // 녹색 계열(화계 주황·적탄 붉은색과 구분). 블룸 절제 위해 강도는 은은하게.
    ctx.zones.spawn(bestX, bestZ, radius, life, dps, 0.3, 1.3, 0.5);
  }
}

// 13. 등꽃 투척륜 — 공용 중립 부메랑 장비. 전방 투척 → 최대거리에서 귀환,
//   왕복 각 1회 관통 타격. ProjectilePool에 왕복 모드가 없어 자체 SoA 시뮬 + 파티클 렌더.
//   우즈이의 금빛 폭약 쌍도와 겹치지 않도록 등꽃 보라 + 은색 회전광만 사용한다.
export class TwinringWeapon extends TimedWeapon {
  readonly id = 'twinring';
  protected baseCooldown = 1.6;
  private static readonly CAP = 12;
  private static readonly HITSET = 16; // 패스당 관통 중복 방지 목록
  private static readonly OUT_SPEED = 13;
  private static readonly RET_SPEED = 15;
  private static readonly MAX_LIFE = 4.0; // 안전 수명(플레이어 이탈 대비)
  private readonly bx = new Float32Array(TwinringWeapon.CAP);
  private readonly bz = new Float32Array(TwinringWeapon.CAP);
  private readonly dirX = new Float32Array(TwinringWeapon.CAP);
  private readonly dirZ = new Float32Array(TwinringWeapon.CAP);
  private readonly dist = new Float32Array(TwinringWeapon.CAP); // outbound 이동 거리
  private readonly maxD = new Float32Array(TwinringWeapon.CAP);
  private readonly dmgv = new Float32Array(TwinringWeapon.CAP);
  private readonly rad = new Float32Array(TwinringWeapon.CAP);
  private readonly life = new Float32Array(TwinringWeapon.CAP);
  private readonly spin = new Float32Array(TwinringWeapon.CAP);
  private readonly phase = new Uint8Array(TwinringWeapon.CAP); // 0 outbound / 1 return
  private readonly active = new Uint8Array(TwinringWeapon.CAP);
  private readonly hitset = new Int32Array(TwinringWeapon.CAP * TwinringWeapon.HITSET);
  private readonly hitN = new Uint8Array(TwinringWeapon.CAP);

  update(ctx: WeaponContext): void {
    super.update(ctx); // 쿨다운 타이머 → fire()로 투척
    this.simulate(ctx);
  }

  protected fire(ctx: WeaponContext): void {
    const count = 1 + Math.floor((this.level - 1) / 2) + ctx.stats.projectileBonus;
    const d = dmg(ctx, 12, this.level, 0.13);
    const maxDist = (6 + (this.level - 1) * 0.5) * ctx.stats.rangeMul;
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    for (let k = 0; k < count; k++) {
      const a = base + (k - (count - 1) * 0.5) * 0.2;
      this.throwRing(ctx, Math.cos(a), Math.sin(a), d, maxDist);
    }
  }

  private throwRing(ctx: WeaponContext, dirX: number, dirZ: number, d: number, maxDist: number): void {
    let slot = -1;
    for (let i = 0; i < TwinringWeapon.CAP; i++) if (this.active[i] === 0) { slot = i; break; }
    if (slot < 0) return; // 풀 만석 → 스킵
    this.bx[slot] = ctx.px;
    this.bz[slot] = ctx.pz;
    this.dirX[slot] = dirX;
    this.dirZ[slot] = dirZ;
    this.dist[slot] = 0;
    this.maxD[slot] = maxDist;
    this.dmgv[slot] = d;
    this.rad[slot] = 0.9;
    this.life[slot] = TwinringWeapon.MAX_LIFE;
    this.spin[slot] = 0;
    this.phase[slot] = 0;
    this.hitN[slot] = 0;
    this.active[slot] = 1;
  }

  private simulate(ctx: WeaponContext): void {
    const CAP = TwinringWeapon.CAP;
    for (let i = 0; i < CAP; i++) {
      if (this.active[i] === 0) continue;
      this.life[i] -= ctx.dt;
      this.spin[i] += ctx.dt * 16;
      if (this.phase[i] === 0) {
        const step = TwinringWeapon.OUT_SPEED * ctx.dt;
        this.bx[i] += this.dirX[i] * step;
        this.bz[i] += this.dirZ[i] * step;
        this.dist[i] += step;
        if (this.dist[i] >= this.maxD[i]) {
          this.phase[i] = 1;
          this.hitN[i] = 0; // 귀환 패스 재타격 허용 → 왕복 각 1회
        }
      } else {
        // 귀환: 플레이어로 홈잉 + 수직 성분으로 곡선 아치(부메랑 손맛). 남은 거리에 비례해
        // 휘었다가 근접 시 펴져 손으로 빨려든다.
        const tx = ctx.px - this.bx[i];
        const tz = ctx.pz - this.bz[i];
        const dd = Math.hypot(tx, tz) || 1;
        const nx = tx / dd;
        const nz = tz / dd;
        const step = TwinringWeapon.RET_SPEED * ctx.dt;
        const curve = Math.min(1, dd / this.maxD[i]) * 3.4; // 멀수록 크게 휨, 근접 시 0
        this.bx[i] += nx * step + -nz * curve * ctx.dt;
        this.bz[i] += nz * step + nx * curve * ctx.dt;
        if (dd <= 0.9) { this.active[i] = 0; continue; }
      }
      if (this.life[i] <= 0) { this.active[i] = 0; continue; }
      this.hitScan(ctx, i);
      this.renderBody(ctx, i);
    }
  }

  private hitScan(ctx: WeaponContext, i: number): void {
    const en = ctx.enemies;
    const px = this.bx[i];
    const pz = this.bz[i];
    const r = this.rad[i];
    const base = i * TwinringWeapon.HITSET;
    const n = ctx.hash.query(px, pz, r + 1.0, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - px;
      const dz = en.z[j] - pz;
      const rr = r + en.radius[j];
      if (dx * dx + dz * dz > rr * rr) continue;
      let dup = false;
      const cnt = this.hitN[i];
      for (let h = 0; h < cnt; h++) if (this.hitset[base + h] === j) { dup = true; break; }
      if (dup) continue;
      if (cnt < TwinringWeapon.HITSET) this.hitset[base + this.hitN[i]++] = j;
      const dealt = resolvedDamage(this.dmgv[i], en.boss[j] === 1, en.groggy[j] === 1, 'special');
      const died = en.damageAt(j, dealt);
      ctx.damageText.spawn(dealt, en.x[j], en.scale[j] * 0.7, en.z[j], false);
      if (!died) {
        const dsp = Math.sqrt(dx * dx + dz * dz) || 1;
        en.push(j, dx / dsp, dz / dsp, 2);
      }
      ctx.effects.spawnRing(en.x[j], en.z[j], 1.0, 0.72, 0.48, 1.7, 0.16);
      if (died) ctx.onKill(j);
    }
  }

  // 등꽃 보라/은색 투척륜 발광. 빠른 회전 잔상이 중립 장비의 얇은 링을 이룸.
  // 애디티브 누적 백색광(화이트아웃) 방지 위해 강도·수명 억제 — 색상 정체성 유지.
  private renderBody(ctx: WeaponContext, i: number): void {
    const px = this.bx[i];
    const pz = this.bz[i];
    const s = this.spin[i];
    const wr = 0.34;
    ctx.particles.emit(px + Math.cos(s) * wr, 0.9, pz + Math.sin(s) * wr, 0, 0, 0, 0.78, 0.86, 1.15, 0.56, 0.1, 0, 0.9); // 은빛 날
    ctx.particles.emit(px + Math.cos(s + Math.PI) * wr, 0.9, pz + Math.sin(s + Math.PI) * wr, 0, 0, 0, 0.7, 0.34, 1.22, 0.58, 0.1, 0, 0.9); // 등꽃 보라
    ctx.particles.emit(px, 0.9, pz, 0, 0, 0, 0.58, 0.46, 0.92, 0.38, 0.08, 0, 0.9); // 중립 보라 핵
    // 저순위 미니 보라 광원 추종. 확률 게이트로 필드 부담을 억제한다.
    if (ctx.rng.next() < 0.6) ctx.effects.spawnLight?.(px, pz, 0.48, 0.3, 0.86, 1.5, 0.1);
  }
}

// 14. 사랑의 호흡 (미츠리) — 시전자 손에서 이어지는 S자 채찍검 3단 경로
export class LoveWeapon extends TimedWeapon {
  readonly id: string = 'love';
  protected baseCooldown = 1.3;
  private phase = -1;
  private phaseT = 0;
  private ox = 0;
  private oz = 0;
  private fx = 1;
  private fz = 0;
  private side = 1;
  private radius = 0;
  private castDamage = 0;
  private phaseCount = 3;
  private phaseInterval = 0.075;
  private dancePath = false;
  private readonly castHits = new Set<number>();

  update(ctx: WeaponContext): void {
    super.update(ctx);
    if (this.phase < 0) return;
    this.phaseT -= ctx.dt;
    if (this.phaseT > 0) return;
    this.whipSegment(ctx, this.phase);
    this.phase++;
    if (this.phase >= this.phaseCount) this.phase = -1;
    else this.phaseT += this.phaseInterval;
  }

  protected fire(ctx: WeaponContext): void {
    this.ox = ctx.px;
    this.oz = ctx.pz;
    this.fx = ctx.aimX;
    this.fz = ctx.aimZ;
    if (hasBranch(ctx, 'kanroji_agile')) this.side *= -1;
    else this.side = ctx.rng.next() < 0.5 ? -1 : 1;
    this.radius = (5.4 + (this.level - 1) * 0.4) * ctx.stats.areaMul;
    this.castDamage = dmg(ctx, 14, this.level, 0.16);
    this.dancePath = hasBranch(ctx, 'kanroji_dance') && ctx.musouActive === true;
    this.phaseCount = this.dancePath ? 6 : hasBranch(ctx, 'kanroji_strength') ? 4 : 3;
    this.phaseInterval = hasBranch(ctx, 'kanroji_agile') ? 0.045 : this.dancePath ? 0.055 : 0.075;
    this.castHits.clear();
    this.phase = 0;
    this.phaseT = 0;
  }

  private whipSegment(ctx: WeaponContext, phase: number): void {
    const px = -this.fz * this.side;
    const pz = this.fx * this.side;
    const r = this.radius;
    const wide = hasBranch(ctx, 'kanroji_whip');
    const lateral = wide ? 0.78 : 0.58;
    const tip = wide ? 0.32 : 0.16;
    const p1x = this.ox + this.fx * r * 0.28 + px * r * lateral;
    const p1z = this.oz + this.fz * r * 0.28 + pz * r * lateral;
    const p2x = this.ox + this.fx * r * 0.58 - px * r * lateral;
    const p2z = this.oz + this.fz * r * 0.58 - pz * r * lateral;
    const p3x = this.ox + this.fx * r * 0.96 + px * r * tip;
    const p3z = this.oz + this.fz * r * 0.96 + pz * r * tip;
    const q1x = this.ox + this.fx * r * 0.58 + px * r * lateral;
    const q1z = this.oz + this.fz * r * 0.58 + pz * r * lateral;
    const q2x = this.ox + this.fx * r * 0.28 - px * r * lateral;
    const q2z = this.oz + this.fz * r * 0.28 - pz * r * lateral;
    let ax: number;
    let az: number;
    let bx: number;
    let bz: number;
    if (phase === 0) { ax = this.ox; az = this.oz; bx = p1x; bz = p1z; }
    else if (phase === 1) { ax = p1x; az = p1z; bx = p2x; bz = p2z; }
    else if (phase === 2) { ax = p2x; az = p2z; bx = p3x; bz = p3z; }
    else if (this.dancePath && phase === 3) { ax = p3x; az = p3z; bx = q1x; bz = q1z; }
    else if (this.dancePath && phase === 4) { ax = q1x; az = q1z; bx = q2x; bz = q2z; }
    else if (this.dancePath) { ax = q2x; az = q2z; bx = this.ox; bz = this.oz; }
    else { ax = p3x; az = p3z; bx = this.ox; bz = this.oz; }
    const strongReturn = !this.dancePath && phase === 3;
    capsuleHit(ctx, ax, az, bx, bz, strongReturn ? 1.15 : 0.82, this.castDamage, strongReturn ? 9 : 3.5, this.castHits);
    ctx.effects.spawnTechniqueLine('love', ax, az, bx, bz, strongReturn ? 1.9 : 1.5, strongReturn ? 0.26 : 0.22, 0.96);
    ctx.particles.burst(bx, bz, 2.25, 0.65, 1.35, phase >= 2 ? 7 : 3, 2.4);
  }
}

// 15. 안개의 호흡 (무이치로) — 실제 판정은 한 줄, 옆 선들은 방향을 속이는 무해한 잔상
export class MistWeapon extends TimedWeapon {
  readonly id: string = 'mist';
  protected baseCooldown = 1.0;
  protected cooldownPerLevel = 0.03;
  private pendingT = -1;
  private pendingX = 0;
  private pendingZ = 0;
  private pendingAimX = 1;
  private pendingAimZ = 0;
  private pendingLength = 0;
  private pendingDamage = 0;
  private shiftSide = 1;

  update(ctx: WeaponContext): void {
    super.update(ctx);
    if (this.pendingT < 0) return;
    this.pendingT -= ctx.dt;
    if (this.pendingT > 0) return;
    this.pendingT = -1;
    this.realSlash(
      ctx, this.pendingX, this.pendingZ, this.pendingAimX, this.pendingAimZ,
      this.pendingLength, this.pendingDamage,
    );
  }

  protected fire(ctx: WeaponContext): void {
    const length = (5.5 + (this.level - 1) * 0.5) * ctx.stats.rangeMul;
    const d = dmg(ctx, 10, this.level, 0.14);
    const shift = hasBranch(ctx, 'tokito_shift');
    if (shift) this.shiftSide *= -1;
    const sideX = -ctx.aimZ;
    const sideZ = ctx.aimX;
    const ox = ctx.px + (shift ? sideX * this.shiftSide * 0.55 : 0);
    const oz = ctx.pz + (shift ? sideZ * this.shiftSide * 0.55 : 0);
    const bx = ox + ctx.aimX * length;
    const bz = oz + ctx.aimZ * length;
    const unseen = hasBranch(ctx, 'tokito_unseen');
    const obscure = hasBranch(ctx, 'tokito_obscure') && ctx.musouActive === true;
    if (unseen || obscure) {
      this.pendingT = obscure ? 0.16 : 0.12;
      this.pendingX = ox;
      this.pendingZ = oz;
      this.pendingAimX = ctx.aimX;
      this.pendingAimZ = ctx.aimZ;
      this.pendingLength = length;
      this.pendingDamage = d;
    } else {
      this.realSlash(ctx, ox, oz, ctx.aimX, ctx.aimZ, length, d);
    }

    const afterimages = hasBranch(ctx, 'tokito_layers')
      ? 8
      : obscure ? 6 : Math.min(4, 2 + Math.floor(this.level / 3) + ctx.stats.projectileBonus);
    for (let k = 0; k < afterimages; k++) {
      const signed = k % 2 === 0 ? 1 : -1;
      const bandStep = hasBranch(ctx, 'tokito_layers') ? 0.56 : 0.72;
      const band = (Math.floor(k / 2) + 1) * bandStep * signed;
      const lag = 0.35 + k * 0.18;
      const ax = ox + sideX * band - ctx.aimX * lag;
      const az = oz + sideZ * band - ctx.aimZ * lag;
      ctx.effects.spawnTechniqueLine(
        'mist', ax, az,
        ax + ctx.aimX * length * (0.88 - k * 0.04),
        az + ctx.aimZ * length * (0.88 - k * 0.04),
        0.9, 0.16 + k * 0.015, 0.24 + k * 0.045,
      );
    }
    ctx.particles.burst(bx, bz, 1.2, 1.8, 2.1, 8, 3);
  }

  private realSlash(
    ctx: WeaponContext,
    ox: number,
    oz: number,
    aimX: number,
    aimZ: number,
    length: number,
    damage: number,
  ): void {
    const bx = ox + aimX * length;
    const bz = oz + aimZ * length;
    capsuleHit(ctx, ox, oz, bx, bz, 0.78, damage, 3);
    ctx.effects.spawnTechniqueLine('mist', ox, oz, bx, bz, 1.45, 0.18, 0.92);
    if (hasBranch(ctx, 'tokito_unseen')) ctx.effects.spawnLight?.(bx, bz, 0.62, 1.15, 1.3, 2.8, 0.12);
  }
}

// 16. 음의 호흡 (우즈이) — 전방 경로를 '짧-짧-강' 박자로 터뜨리는 3연 폭명
export class SoundWeapon extends TimedWeapon {
  readonly id: string = 'sound';
  protected baseCooldown = 2.2;
  private pulse = -1;
  private pulseT = 0;
  private ox = 0;
  private oz = 0;
  private fx = 1;
  private fz = 0;
  private radius = 0;
  private castDamage = 0;
  private pulseCount = 3;
  private finaleCast = false;
  private lineageCast = 0;

  update(ctx: WeaponContext): void {
    super.update(ctx);
    if (this.pulse < 0) return;
    this.pulseT -= ctx.dt;
    if (this.pulseT > 0) return;
    this.explodeBeat(ctx, this.pulse);
    this.pulse++;
    if (this.pulse >= this.pulseCount) this.pulse = -1;
    else if (this.finaleCast && this.pulse === 3) this.pulseT += 0.22;
    else if (hasBranch(ctx, 'uzui_guard')) this.pulseT += this.pulse === 2 ? 0.18 : 0.09;
    else this.pulseT += this.pulse === 2 ? 0.18 : hasBranch(ctx, 'uzui_score') ? 0.12 : 0.14;
  }

  protected fire(ctx: WeaponContext): void {
    this.lineageCast++;
    this.ox = ctx.px;
    this.oz = ctx.pz;
    this.fx = ctx.aimX;
    this.fz = ctx.aimZ;
    this.radius = (3.0 + (this.level - 1) * 0.3) * ctx.stats.areaMul;
    this.castDamage = dmg(ctx, 22, this.level, 0.16);
    this.finaleCast = hasBranch(ctx, 'uzui_finale') && this.lineageCast % 3 === 0;
    this.pulseCount = this.finaleCast ? 4 : 3;
    this.pulse = 0;
    this.pulseT = 0;
  }

  private explodeBeat(ctx: WeaponContext, beat: number): void {
    const guard = hasBranch(ctx, 'uzui_guard');
    const score = hasBranch(ctx, 'uzui_score');
    const distance = (beat === 3
      ? 7.2
      : score
        ? guard ? (beat === 0 ? 1.6 : beat === 1 ? 4.4 : 8.2) : (beat === 0 ? 2.2 : beat === 1 ? 5 : 8.2)
        : guard ? (beat === 0 ? 1.6 : beat === 1 ? 2.5 : 4.8) : (beat === 0 ? 2.7 : beat === 1 ? 4.25 : 5.8))
      * ctx.stats.rangeMul;
    const tx = this.ox + this.fx * distance;
    const tz = this.oz + this.fz * distance;
    const roar = hasBranch(ctx, 'uzui_roar');
    const scale = beat === 0 ? 0.68 : beat === 1 ? 0.82 : beat === 3 ? 1.15 : roar ? 1.28 : 1;
    const share = this.finaleCast
      ? beat === 0 ? 0.18 : beat === 1 ? 0.2 : beat === 2 ? 0.24 : 0.38
      : roar ? beat === 0 ? 0.22 : beat === 1 ? 0.23 : 0.55
        : beat === 0 ? 0.28 : beat === 1 ? 0.32 : 0.4;
    const radius = this.radius * scale;
    arcHit(ctx, tx, tz, this.fx, this.fz, radius, Math.PI, this.castDamage * share, roar && beat === 2 ? 9 : 3 + beat * 1.5);
    if (guard && beat < 2) {
      ctx.effects.spawnSlashArc(ctx.px, ctx.pz, beat === 0 ? this.fx : -this.fx, beat === 0 ? this.fz : -this.fz, radius * 0.8, 1.1, 2.3, 1.55, 0.52, 0.14, 'sound');
    }
    ctx.effects.spawnTechnique(
      'sound', tx, tz, Math.atan2(-this.fz, this.fx),
      radius * 2.05, radius * 2.05, 0.26 + beat * 0.04, 0.82 + beat * 0.07,
      beat % 2 === 0 ? 0.9 : -0.9, 0.12,
    );
    ctx.effects.spawnRing(tx, tz, radius, 2.2, 1.55, 0.52, 0.24 + beat * 0.04);
    ctx.effects.spawnFlash(tx, tz, 2.2, 1.55, 0.52, radius * (0.34 + beat * 0.08));
    ctx.particles.burst(tx, tz, 2.2, 1.55, 0.52, 7 + beat * 4, 4 + beat);
  }
}

// 17. 바람의 호흡 (사네미) — 조준 방향으로 벌어지는 겹초승달 칼바람
export class WindWeapon extends TimedWeapon {
  readonly id: string = 'wind';
  protected baseCooldown = 1.4;
  protected fire(ctx: WeaponContext): void {
    const radius = (4.6 + (this.level - 1) * 0.35) * ctx.stats.areaMul;
    const d = dmg(ctx, 15, this.level, 0.16);
    const crescent = hasBranch(ctx, 'sanemi_crescent');
    const rush = hasBranch(ctx, 'sanemi_rush');
    const blackwind = hasBranch(ctx, 'sanemi_blackwind');
    const typhoon = hasBranch(ctx, 'sanemi_typhoon') && ctx.musouActive === true;
    const meleeShare = blackwind ? 0.75 : 0.55;
    const waveShare = 1 - meleeShare;
    const meleeHalf = rush ? 0.48 : blackwind ? 0.58 : 0.68;
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius * (rush ? 0.85 : 0.72), meleeHalf, d * meleeShare, 4);
    ctx.effects.spawnSlashArc(
      ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius * (rush ? 0.88 : 0.78), meleeHalf,
      0.5, 1.9, 1.0, 0.22, 'wind',
    );
    const count = crescent ? 5 : 3 + Math.min(2, ctx.stats.projectileBonus);
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    const perWave = d * waveShare / count;
    for (let k = 0; k < count; k++) {
      const fanWidth = typhoon ? 0 : crescent ? 1.04 : rush ? 0.32 : blackwind ? 0.44 : 0.64;
      const fan = count === 1 ? 0 : (k / (count - 1) - 0.5) * fanWidth;
      const a = base + fan;
      const tier = Math.abs(k - (count - 1) * 0.5) / Math.max(1, count - 1);
      const speed = (typhoon ? 11 + k * 3 : rush ? 16.5 : 11.5 + tier * 2.2) * ctx.stats.rangeMul;
      const life = typhoon ? 1.45 - k * 0.2 : crescent ? 1.5 : rush ? 0.9 : 1.28;
      ctx.projectiles.spawn(
        ctx.px + ctx.aimX * 0.45, ctx.pz + ctx.aimZ * 0.45,
        Math.cos(a), Math.sin(a), speed,
        perWave, 0.82 + tier * 0.28, 2 + Math.floor(this.level / 3), life,
        PK_SLASHWAVE, 0.5, 1.9, 1.0,
        2.65 + tier * 0.9, 1.15 + tier * 0.55, false, 6, false, 'wind',
      );
    }
  }
}

// 18. 바위의 호흡 (히메지마) — 사슬 철구를 던져 착탄시키고 다시 손으로 회수
export class StoneWeapon extends TimedWeapon {
  readonly id: string = 'stone';
  protected baseCooldown = 1.8;
  private active = false;
  private returning = false;
  private bx = 0;
  private bz = 0;
  private dirX = 1;
  private dirZ = 0;
  private traveled = 0;
  private maxDistance = 0;
  private impactRadius = 0;
  private castDamage = 0;
  private vfxT = 0;
  private outboundSpeed = 13;
  private returnSpeed = 16;
  private outboundShare = 0.18;
  private returnShare = 0.28;
  private impactShare = 0.54;
  private impactKnockback = 8;
  private returnWidth = 0.92;
  private prayerShare = 0;
  private lineageCast = 0;
  private readonly outboundHits = new Set<number>();
  private readonly returnHits = new Set<number>();

  update(ctx: WeaponContext): void {
    // 단일 철구 궤적을 다음 쿨다운이 덮어쓰지 않게 한다. 쿨다운은
    // 비행 중에도 흐르되 왕복이 끝나기 전에는 새 철구를 발사하지 않는다.
    if (this.active) this.timer -= ctx.dt;
    else super.update(ctx);
    if (!this.active) return;
    const ax = this.bx;
    const az = this.bz;
    if (!this.returning) {
      const remaining = Math.max(0, this.maxDistance - this.traveled);
      const step = Math.min(remaining, this.outboundSpeed * ctx.dt);
      this.bx += this.dirX * step;
      this.bz += this.dirZ * step;
      this.traveled += step;
      capsuleHit(ctx, ax, az, this.bx, this.bz, 0.95, this.castDamage * this.outboundShare, 4, this.outboundHits);
      if (this.traveled >= this.maxDistance - 0.001) {
        this.impact(ctx);
        this.returning = true;
      }
    } else {
      const dx = ctx.px - this.bx;
      const dz = ctx.pz - this.bz;
      const distance = Math.hypot(dx, dz) || 1;
      if (distance <= 0.8) {
        this.active = false;
        ctx.particles.burst(ctx.px, ctx.pz, 1.35, 1.05, 0.52, 5, 2.2);
        return;
      }
      const step = Math.min(distance, this.returnSpeed * ctx.dt);
      this.bx += dx / distance * step;
      this.bz += dz / distance * step;
      capsuleHit(ctx, ax, az, this.bx, this.bz, this.returnWidth, this.castDamage * this.returnShare, 3, this.returnHits);
    }
    this.renderBallAndChain(ctx);
  }

  protected fire(ctx: WeaponContext): void {
    this.lineageCast++;
    const guard = hasBranch(ctx, 'himejima_guard');
    const chain = hasBranch(ctx, 'himejima_chain');
    const impact = hasBranch(ctx, 'himejima_impact');
    const prayer = hasBranch(ctx, 'himejima_prayer') && this.lineageCast % 3 === 0;
    this.active = true;
    this.returning = false;
    this.bx = ctx.px;
    this.bz = ctx.pz;
    this.dirX = ctx.aimX;
    this.dirZ = ctx.aimZ;
    this.traveled = 0;
    const baseDistance = (5.4 + (this.level - 1) * 0.45) * ctx.stats.rangeMul;
    const baseImpact = (3.2 + (this.level - 1) * 0.28) * ctx.stats.areaMul;
    this.maxDistance = baseDistance * (chain ? 1.22 : guard ? 0.78 : 1);
    this.impactRadius = baseImpact * (impact ? (guard ? 1.25 : 1.15) : guard ? 1.22 : 1);
    this.castDamage = dmg(ctx, 24, this.level, 0.18);
    this.outboundSpeed = chain ? 15 : guard ? 10 : 13;
    this.returnSpeed = chain ? 19 : guard ? 18 : 16;
    this.returnWidth = chain ? 1.12 : 0.92;
    this.impactKnockback = impact ? 11 : 8;
    this.prayerShare = prayer ? 0.2 : 0;
    if (impact) {
      this.outboundShare = 0.12;
      this.returnShare = 0.16;
      this.impactShare = 0.72;
    } else if (prayer) {
      this.outboundShare = 0.14;
      this.returnShare = 0.2;
      this.impactShare = 0.46;
    } else if (chain) {
      this.outboundShare = 0.16;
      this.returnShare = 0.34;
      this.impactShare = 0.5;
    } else if (guard) {
      this.outboundShare = 0.16;
      this.returnShare = 0.26;
      this.impactShare = 0.58;
    } else {
      this.outboundShare = 0.18;
      this.returnShare = 0.28;
      this.impactShare = 0.54;
    }
    this.vfxT = 0;
    this.outboundHits.clear();
    this.returnHits.clear();
  }

  private impact(ctx: WeaponContext): void {
    const radius = this.impactRadius;
    arcHit(ctx, this.bx, this.bz, this.dirX, this.dirZ, radius, Math.PI, this.castDamage * this.impactShare, this.impactKnockback);
    if (this.prayerShare > 0) {
      const sideX = -this.dirZ;
      const sideZ = this.dirX;
      capsuleHit(
        ctx,
        this.bx - sideX * radius, this.bz - sideZ * radius,
        this.bx + sideX * radius, this.bz + sideZ * radius,
        1.05, this.castDamage * this.prayerShare, 9,
      );
      ctx.effects.spawnTechniqueLine(
        'stone', this.bx - sideX * radius, this.bz - sideZ * radius,
        this.bx + sideX * radius, this.bz + sideZ * radius,
        2.2, 0.28, 0.92,
      );
    }
    ctx.effects.spawnTechnique(
      'stone', this.bx, this.bz, Math.atan2(-this.dirZ, this.dirX),
      radius * 2.05, radius * 2.05, 0.44, 0.98, 0.22, 0.18,
    );
    ctx.effects.spawnRing(this.bx, this.bz, radius, 1.6, 1.3, 0.7, 0.4);
    ctx.effects.spawnFlash(this.bx, this.bz, 1.6, 1.3, 0.7, radius * 0.42);
    ctx.effects.spawnTripleShock(this.bx, this.bz, radius * 0.72, 1.6, 1.3, 0.7);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      ctx.particles.dust(this.bx + Math.cos(a) * 2, this.bz + Math.sin(a) * 2);
    }
  }

  private renderBallAndChain(ctx: WeaponContext): void {
    const dx = this.bx - ctx.px;
    const dz = this.bz - ctx.pz;
    for (let k = 1; k <= 3; k++) {
      const t = k * 0.25;
      ctx.particles.emit(
        ctx.px + dx * t, 0.72, ctx.pz + dz * t,
        0, 0, 0, 0.85, 0.67, 0.34, 0.24, 0.08, 0, 0.55,
      );
    }
    ctx.particles.emit(
      this.bx, 0.88, this.bz, 0, 0.1, 0,
      1.4, 1.08, 0.48, 0.92, 0.12, 0, 1.15,
    );
    this.vfxT -= ctx.dt;
    if (this.vfxT <= 0) {
      this.vfxT += 0.09;
      ctx.effects.spawnTechnique(
        'stone', this.bx, this.bz, Math.atan2(-this.dirZ, this.dirX),
        2.15, 2.15, 0.14, 0.72, this.returning ? -1.8 : 1.8, 0.04,
      );
      ctx.effects.spawnLight?.(this.bx, this.bz, 0.72, 0.54, 0.24, 2.3, 0.11);
    }
  }
}

// 진화 무기 -----------------------------------------------------------------

// 탄지로 비전 — 물의 직선 참격을 태양의 원환과 좌우 불꽃 칼날로 닫는다.
export class HinokamiWeapon extends SpearWeapon {
  readonly id: string = 'hinokami';
  level = 8;
  protected baseCooldown = 0.92;
  protected fire(ctx: WeaponContext): void {
    const length = 10.5 * ctx.stats.rangeMul;
    const d = dmg(ctx, 25, 8, 0.14);
    // 기존 중앙 1.0 + 좌우 0.28×2 예산을 계보 패턴 안에서 재배분한다.
    const end = this.strikeLineage(ctx, length, 1.28, d * 1.56, true);
    ctx.effects.spawnTechnique('sun', end.x, end.z, Math.atan2(-ctx.aimZ, ctx.aimX), 8.8, 8.8, 0.34, 0.96, 1.5, 0.1);
    ctx.particles.burst(end.x, end.z, 2.5, 0.62, 0.18, 14, 4.4);
  }
}

// 이노스케 비전 — 기존 교차 엄니 뒤에 전방 X자 공간식각을 더한다.
export class BeastSecretWeapon extends ZhangbaWeapon {
  readonly id: string = 'beast_secret';
  level = 8;
  protected baseCooldown = 0.98;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const len = 8.4 * ctx.stats.rangeMul;
    const sideX = -ctx.aimZ;
    const sideZ = ctx.aimX;
    const d = dmg(ctx, 18, 8, 0.14) * 0.42;
    const bx = ctx.px + ctx.aimX * len;
    const bz = ctx.pz + ctx.aimZ * len;
    capsuleHit(ctx, ctx.px + sideX * 1.5, ctx.pz + sideZ * 1.5, bx - sideX * 1.5, bz - sideZ * 1.5, 0.8, d, 7);
    capsuleHit(ctx, ctx.px - sideX * 1.5, ctx.pz - sideZ * 1.5, bx + sideX * 1.5, bz + sideZ * 1.5, 0.8, d, 7);
    ctx.effects.spawnTechnique('beast', bx, bz, Math.atan2(-ctx.aimZ, ctx.aimX), 8, 8, 0.3, 0.9, 0.5, 0.12);
  }
}

// 렌고쿠 비전 — 불호랑이와 같은 방향의 단일 화염 회랑. 산개 탄막이 아니라 돌파선이 핵심이다.
export class RengokuSecretWeapon extends CavalryWeapon {
  readonly id: string = 'rengoku_secret';
  level = 8;
  protected baseCooldown = 2.35;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const len = 15 * ctx.stats.rangeMul;
    const bx = ctx.px + ctx.aimX * len;
    const bz = ctx.pz + ctx.aimZ * len;
    capsuleHit(ctx, ctx.px, ctx.pz, bx, bz, 2.1 * ctx.stats.areaMul, dmg(ctx, 29, 8, 0.15) * 0.46, 9);
    ctx.effects.spawnTechniqueLine('flame', ctx.px, ctx.pz, bx, bz, 3.2, 0.34, 0.98);
    ctx.effects.spawnFireWall(bx, bz, ctx.aimX, ctx.aimZ, 7, 1.5, 0.7);
  }
}

// 미츠리 비전 — 기본 S자 3절에 되감기는 넓은 두 호를 더해 검끝이 손에서 끊기지 않게 보인다.
export class LoveSecretWeapon extends LoveWeapon {
  readonly id: string = 'love_secret';
  level = 8;
  protected baseCooldown = 1.02;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const radius = 8.4 * ctx.stats.areaMul;
    const d = dmg(ctx, 18, 8, 0.16) * 0.34;
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, 1.22, d, 4);
    arcHit(ctx, ctx.px, ctx.pz, -ctx.aimX, -ctx.aimZ, radius * 0.72, 0.82, d * 0.75, -2);
    ctx.effects.spawnSlashArc(ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, radius, 1.22, 2.3, 0.55, 1.35, 0.24, 'love');
  }
}

// 무이치로 비전 — 여러 잔상은 낮은 보조 피해, 중앙 한 선만 높은 실제 판정을 가진다.
export class MistSecretWeapon extends MistWeapon {
  readonly id: string = 'mist_secret';
  level = 8;
  protected baseCooldown = 0.76;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const len = 9.2 * ctx.stats.rangeMul;
    const sideX = -ctx.aimZ;
    const sideZ = ctx.aimX;
    const d = dmg(ctx, 14, 8, 0.14) * 0.22;
    for (const side of [-1, 1]) {
      const ax = ctx.px + sideX * side * 1.2;
      const az = ctx.pz + sideZ * side * 1.2;
      capsuleHit(ctx, ax, az, ax + ctx.aimX * len, az + ctx.aimZ * len, 0.54, d, 2);
    }
    ctx.effects.spawnTechnique('mist', ctx.px + ctx.aimX * len * 0.55, ctx.pz + ctx.aimZ * len * 0.55, Math.atan2(-ctx.aimZ, ctx.aimX), 12, 7, 0.3, 0.7, 0.8, 0.06);
  }
}

// 우즈이 비전 — 짧-짧-강 3박의 끝점을 하나의 금빛 악보 선으로 묶는다.
export class SoundSecretWeapon extends SoundWeapon {
  readonly id: string = 'sound_secret';
  level = 8;
  protected baseCooldown = 1.7;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const len = 9.5 * ctx.stats.rangeMul;
    const bx = ctx.px + ctx.aimX * len;
    const bz = ctx.pz + ctx.aimZ * len;
    capsuleHit(ctx, ctx.px, ctx.pz, bx, bz, 1.1, dmg(ctx, 24, 8, 0.15) * 0.34, 5);
    ctx.effects.spawnTechniqueLine('sound', ctx.px, ctx.pz, bx, bz, 1.8, 0.3, 0.82);
    ctx.effects.spawnRing(bx, bz, 5.6 * ctx.stats.areaMul, 2.2, 1.55, 0.52, 0.34);
  }
}

// 사네미 비전 — 중심 회전이 아닌 전방으로 벌어지는 태풍 회랑.
export class WindSecretWeapon extends WindWeapon {
  readonly id: string = 'wind_secret';
  level = 8;
  protected baseCooldown = 1.08;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const len = 11.5 * ctx.stats.rangeMul;
    const bx = ctx.px + ctx.aimX * len;
    const bz = ctx.pz + ctx.aimZ * len;
    capsuleHit(ctx, ctx.px, ctx.pz, bx, bz, 1.7 * ctx.stats.areaMul, dmg(ctx, 20, 8, 0.16) * 0.44, 8);
    ctx.effects.spawnTechniqueLine('wind', ctx.px, ctx.pz, bx, bz, 2.5, 0.28, 0.95);
    ctx.effects.spawnSlashArc(bx, bz, ctx.aimX, ctx.aimZ, 6.5, 0.9, 0.5, 1.9, 1.0, 0.26, 'wind');
  }
}

// 교메이 비전 — 철구 왕복에 반대편 도끼 궤적과 사슬 교차점을 추가한다.
export class StoneSecretWeapon extends StoneWeapon {
  readonly id: string = 'stone_secret';
  level = 8;
  protected baseCooldown = 1.42;
  protected fire(ctx: WeaponContext): void {
    super.fire(ctx);
    const sideX = -ctx.aimZ;
    const sideZ = ctx.aimX;
    const len = 7.5 * ctx.stats.rangeMul;
    const d = dmg(ctx, 26, 8, 0.18) * 0.38;
    capsuleHit(ctx, ctx.px - sideX * 2.2, ctx.pz - sideZ * 2.2, ctx.px + ctx.aimX * len + sideX * 2.2, ctx.pz + ctx.aimZ * len + sideZ * 2.2, 1.0, d, 10);
    ctx.effects.spawnTechniqueLine('stone', ctx.px - sideX * 2.2, ctx.pz - sideZ * 2.2, ctx.px + ctx.aimX * len + sideX * 2.2, ctx.pz + ctx.aimZ * len + sideZ * 2.2, 2.3, 0.3, 0.9);
  }
}

// 수류참 (잔잔한 물결 진화) — 회전 참격파 발사 + 강화 부채꼴
export class ZhanmaWeapon extends TimedWeapon {
  readonly id = 'zhanma';
  level = 8;
  protected baseCooldown = 1.0;
  protected fire(ctx: WeaponContext): void {
    const still = hasBranch(ctx, 'tomioka_still');
    const current = hasBranch(ctx, 'tomioka_current');
    const counter = hasBranch(ctx, 'tomioka_counter');
    const nagi = hasBranch(ctx, 'tomioka_nagi');
    const innerRadius = (still ? 4.8 : 4.25) * ctx.stats.areaMul;
    const outerRadius = (current ? 7.2 : 6.2) * ctx.stats.areaMul * ctx.stats.rangeMul;
    const clearRadius = (nagi ? 10 : counter ? 8.8 : still ? 8 : 7.2)
      * ctx.stats.areaMul * ctx.stats.rangeMul;

    // 제11형 凪: 전방 탄막 대신 고요한 두 방어권 안의 적과 적탄만 끊는다.
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, innerRadius, Math.PI, dmg(ctx, 26, 8, 0.16), 0);
    arcHit(ctx, ctx.px, ctx.pz, ctx.aimX, ctx.aimZ, outerRadius, Math.PI, dmg(ctx, 22, 8, 0.16) * 0.25, 0);
    ctx.clearEnemyProjectiles(ctx.px, ctx.pz, clearRadius);
    ctx.effects.spawnTechnique('water', ctx.px, ctx.pz, 0, outerRadius * 2, outerRadius * 2, 0.5, 0.68, -0.35, 0.08);
    ctx.effects.spawnRing(ctx.px, ctx.pz, innerRadius, 0.32, 1.2, 2.8, 0.48);
    ctx.effects.spawnRing(ctx.px, ctx.pz, outerRadius, 0.2, 0.82, 2.45, 0.56);
    if (counter) ctx.effects.spawnSlashArc(ctx.px, ctx.pz, -ctx.aimX, -ctx.aimZ, innerRadius, 1.1, 0.5, 1.6, 2.8, 0.2, 'water');
  }
}

// 카나오 비전 · 피안주안 — 방사 탄막이 아니라 조준선으로 수렴하는 정밀 꽃 참격.
export class BamenWeapon extends TimedWeapon {
  readonly id = 'bamen';
  level = 8;
  protected baseCooldown = 1.3;
  protected fire(ctx: WeaponContext): void {
    const guard = hasBranch(ctx, 'kanao_guard');
    const curved = hasBranch(ctx, 'kanao_arc');
    const precision = hasBranch(ctx, 'kanao_precision')
      || (hasBranch(ctx, 'kanao_vermilion') && ctx.musouActive === true);
    const count = precision ? 1 : guard ? 6 : Math.min(7, 3 + ctx.stats.projectileBonus);
    const budget = dmg(ctx, 21, 8, 0.14) * 1.25;
    const d = budget / count;
    const speed = (precision ? 20 : curved ? 12 : guard ? 9 : 15) * ctx.stats.rangeMul;
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    for (let k = 0; k < count; k++) {
      const a = precision
        ? base
        : guard
          ? base + (k / count) * Math.PI * 2
          : base + (k - (count - 1) * 0.5) * (curved ? 0.24 : 0.1);
      ctx.projectiles.spawn(
        ctx.px, ctx.pz, Math.cos(a), Math.sin(a), speed, d,
        (precision ? 0.38 : 0.55) * ctx.stats.areaMul, 7,
        precision ? 1.1 : curved ? 2.9 : guard ? 1.1 : 2.4,
        PK_LOTUS, 2.0, 0.42, 1.0, precision ? 2 : 1.5, precision ? 0.7 : 1.0,
        !precision || curved, curved ? 3 : guard ? 10 : 7, false, 'flower',
      );
    }
    // 어영매를 거쳐 피안주안에 도달한 경우, 피해 없는 두 수호 꽃잎이 정밀선의
    // 기원을 보여 준다. 실제 피해 예산은 중앙 한 발에만 있다.
    if (guard && precision) {
      for (const side of [-1, 1]) {
        const a = base + side * Math.PI * 0.5;
        ctx.projectiles.spawn(
          ctx.px, ctx.pz, Math.cos(a), Math.sin(a), 8, 0, 0.38, 0, 0.85,
          PK_LOTUS, 1.7, 0.38, 0.9, 1.0, 0.7, true, 10, false, 'flower',
        );
      }
    }
    ctx.effects.spawnTechniqueLine('flower', ctx.px, ctx.pz, ctx.px + ctx.aimX * 12, ctx.pz + ctx.aimZ * 12, 1.4, 0.25, 0.78);
  }
}

// 폭혈 업화 (혈귀술 폭혈 진화) — 전진하는 화염 해일
export class ChibiWeapon extends TimedWeapon {
  readonly id = 'chibi';
  level = 8;
  protected baseCooldown = 2.4;
  protected fire(ctx: WeaponContext): void {
    const dps = 18 * ctx.stats.damageMul;
    const fx = ctx.aimX;
    const fz = ctx.aimZ;
    const chain = hasBranch(ctx, 'nezuko_chain');
    const regen = hasBranch(ctx, 'nezuko_regen');
    const inferno = hasBranch(ctx, 'nezuko_inferno');
    const burst = hasBranch(ctx, 'nezuko_burst') && ctx.musouActive === true;
    const count = chain || burst ? 5 : 3;
    const perZoneDps = dps * 3 / count; // 기존 3개 장판 총 예산 유지
    const spacing = burst ? 1.45 : inferno ? 2.6 : chain ? 1.65 : 2.2;
    const moveSpeed = regen ? 0 : inferno || burst ? 6.5 : 4.5;
    // 혈흔 전염은 더 많은 작은 점화점, 업화 발차기는 좁고 빠른 전진 해일이다.
    for (let k = 0; k < count; k++) {
      const off = regen ? (k - (count - 1) * 0.5) * 0.72 : 1.2 + k * spacing;
      const sideX = -fz;
      const sideZ = fx;
      const zx = regen ? ctx.px + sideX * off : ctx.px + fx * off;
      const zz = regen ? ctx.pz + sideZ * off : ctx.pz + fz * off;
      const radius = (2.6 + Math.min(k, 2) * 0.4) * ctx.stats.areaMul
        * (chain || burst ? 0.72 : inferno ? 0.82 : regen ? 0.88 : 1);
      ctx.zones.spawn(
        zx, zz, radius, regen ? 3.4 : 2.6, perZoneDps,
        2.6, 0.7, 0.2, fx * moveSpeed, fz * moveSpeed,
      );
      ctx.effects.spawnTechnique('blood', zx, zz, Math.atan2(-fz, fx), radius * 2, radius * 2, 0.46, 0.9, 0.7, 0.12 + k * 0.02);
    }
  }
}

// 제7형 · 화뢰신 — 무작위 적간 점프가 아니라 전방의 한 용형 경로를 끝까지 가른다.
export class TianfaWeapon extends TimedWeapon {
  readonly id = 'tianfa';
  level = 8;
  protected baseCooldown = 2.0;
  private readonly pathHits = new Set<number>();

  protected fire(ctx: WeaponContext): void {
    const d = dmg(ctx, 24, 8, 0.15);
    const godspeed = hasBranch(ctx, 'zenitsu_godspeed');
    const thunderGod = hasBranch(ctx, 'zenitsu_thunder_god');
    const eight = hasBranch(ctx, 'zenitsu_eight');
    const steps = thunderGod ? 7 : eight ? 8 : hasBranch(ctx, 'zenitsu_six') ? 6 : 5;
    const length = (thunderGod ? 20 : godspeed ? 18 : 15) * ctx.stats.rangeMul;
    const sideX = -ctx.aimZ;
    const sideZ = ctx.aimX;
    const amplitude = thunderGod ? 1.35 : eight ? 0.48 : 0.82;
    const width = (thunderGod ? 1.42 : eight ? 0.62 : 0.92) * ctx.stats.areaMul;
    this.pathHits.clear();
    let ax = ctx.px;
    let az = ctx.pz;
    for (let k = 1; k <= steps; k++) {
      const t = k / steps;
      const wave = k === steps ? 0 : Math.sin(t * Math.PI * (thunderGod ? 2.5 : 2)) * amplitude;
      const bx = ctx.px + ctx.aimX * length * t + sideX * wave;
      const bz = ctx.pz + ctx.aimZ * length * t + sideZ * wave;
      capsuleHit(ctx, ax, az, bx, bz, width, d, thunderGod ? 8 : 5, this.pathHits);
      ctx.effects.spawnTechniqueLine('thunder', ax, az, bx, bz, thunderGod ? 2.25 : 1.55, 0.18, 0.96);
      ctx.effects.spawnChainArc(ax, az, bx, bz, thunderGod ? 3.4 : 2.7, 2.25, 0.24);
      ctx.particles.lightningSpark(bx, bz, thunderGod ? 12 : 7);
      ax = bx;
      az = bz;
    }
    ctx.effects.spawnFlash(ax, az, 2.7, 2.15, 0.42, thunderGod ? 3.4 : 2.4);
  }
}

// 시노부 비전 · 백족사복 — 전방 약점에 집중되는 여섯 독침.
export class YuanrongWeapon extends TimedWeapon {
  readonly id = 'yuanrong';
  level = 8;
  protected baseCooldown = 0.5;
  private readonly pathHits = new Set<number>();

  protected fire(ctx: WeaponContext): void {
    const steps = 6 + Math.min(2, ctx.stats.projectileBonus);
    const budget = dmg(ctx, 10, 8, 0.1) * 1.35;
    const speed = 18 * ctx.stats.rangeMul;
    const length = 12 * ctx.stats.rangeMul;
    const sideX = -ctx.aimZ;
    const sideZ = ctx.aimX;
    const focused = hasBranch(ctx, 'shinobu_boss');
    const cloud = hasBranch(ctx, 'shinobu_cloud');
    const bloom = hasBranch(ctx, 'shinobu_bloom') && ctx.musouActive === true;
    const amplitude = focused ? 0.42 : cloud ? 1.28 : bloom ? 0.95 : 0.72;
    const poisonShare = budget / steps * (hasBranch(ctx, 'shinobu_compound') ? 1.2 : bloom ? 0.75 : 0.6);
    this.pathHits.clear();
    let ax = ctx.px;
    let az = ctx.pz;
    for (let k = 1; k <= steps; k++) {
      const t = k / steps;
      const side = k === steps ? 0 : (k % 2 === 0 ? -1 : 1) * amplitude;
      const bx = ctx.px + ctx.aimX * length * t + sideX * side;
      const bz = ctx.pz + ctx.aimZ * length * t + sideZ * side;
      const dx = bx - ax;
      const dz = bz - az;
      const segmentLength = Math.hypot(dx, dz) || 1;
      // 보이는 백족사복 선분과 동일한 캡슐만 직접 피해를 준다.
      capsuleHit(ctx, ax, az, bx, bz, (focused ? 0.42 : 0.58) * ctx.stats.areaMul, budget, 2, this.pathHits);
      ctx.effects.spawnTechniqueLine('butterfly', ax, az, bx, bz, focused ? 0.9 : 1.15, 0.16, 0.84);
      // 독은 같은 선분을 짧게 주행하는 무피해 독나비가 담당한다.
      ctx.projectiles.spawn(
        ax, az, dx / segmentLength, dz / segmentLength, speed, 0, 0.4 * ctx.stats.areaMul, 2,
        segmentLength / speed + 0.025,
        PK_BUTTERFLY, 1.4, 0.5, 2.0, Math.max(1.1, segmentLength), 0.72,
        false, 0, false, 'butterfly', poisonShare,
      );
      ctx.particles.butterflyPoison(bx, bz, focused ? 2 : 4);
      ax = bx;
      az = bz;
    }
    ctx.effects.spawnFlash(ax, az, 1.55, 0.5, 2.1, 1.25);
  }
}

export type WeaponCtor = new () => Weapon;

export const WEAPON_CTORS: Record<string, WeaponCtor> = {
  spear: SpearWeapon,
  guandao: GuandaoWeapon,
  zhangba: ZhangbaWeapon,
  baiyu: BaiyuWeapon,
  crossbow: CrossbowWeapon,
  fire: FireWeapon,
  thunder: ThunderWeapon,
  orbit: OrbitWeapon,
  halberd: HalberdWeapon,
  cavalry: CavalryWeapon,
  caltrop: CaltropWeapon,
  poison: PoisonWeapon,
  twinring: TwinringWeapon,
  love: LoveWeapon,
  mist: MistWeapon,
  sound: SoundWeapon,
  wind: WindWeapon,
  stone: StoneWeapon,
  hinokami: HinokamiWeapon,
  zhanma: ZhanmaWeapon,
  beast_secret: BeastSecretWeapon,
  bamen: BamenWeapon,
  chibi: ChibiWeapon,
  tianfa: TianfaWeapon,
  yuanrong: YuanrongWeapon,
  rengoku_secret: RengokuSecretWeapon,
  love_secret: LoveSecretWeapon,
  mist_secret: MistSecretWeapon,
  sound_secret: SoundSecretWeapon,
  wind_secret: WindSecretWeapon,
  stone_secret: StoneSecretWeapon,
};

export function createWeapon(id: string): Weapon {
  const ctor = WEAPON_CTORS[id];
  return new ctor();
}
