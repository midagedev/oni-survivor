import type { WeaponContext } from './weapons/types';
import {
  EK_ARROW,
  EK_FIREBALL,
  EK_HEAVY,
  EK_LIGHTNING,
  EK_POISON,
  type EnemyProjectilePool,
} from './enemyProjectiles';
import type { Atlas } from '../gfx/atlas';
import { SHEET_SGRADE } from './enemies';
import { ENEMY_TYPES } from '../data/enemyTypes';

interface BossDef {
  name: string;
  hanja: string;
  charIndex: number; // sgrade 시트
  hp: number;
  speed: number;
  contact: number;
  radius: number;
  tr: number;
  tg: number;
  tb: number;
}

export const BOSS_DEFS: Record<string, BossDef> = {
  yuanshao: { name: '원소', hanja: '袁紹', charIndex: 14, hp: 8000, speed: 2.5, contact: 14, radius: 1.4, tr: 1.1, tg: 1.1, tb: 1.4 },
  dongzhuo: { name: '동탁', hanja: '董卓', charIndex: 4, hp: 22000, speed: 2.1, contact: 18, radius: 1.6, tr: 1.4, tg: 1.0, tb: 0.9 },
  lvbu: { name: '여포', hanja: '呂布', charIndex: 10, hp: 46000, speed: 2.7, contact: 20, radius: 1.5, tr: 1.5, tg: 0.9, tb: 1.1 },
};

const SGRADE_BLOCK = 4 * 48; // sgrade 캐릭터 블록 폭(px)

// 중간/최종 보스 컨트롤러. EnemyPool 엔트리(controlled)를 소유하고 패턴을 얹는다.
export class Boss {
  active = false;
  idx = -1;
  typeId = '';
  private def: BossDef | null = null;
  private readonly atlas: Atlas;
  private readonly onWarn: (name: string, hanja: string) => void;

  private atk1 = 0;
  private atk2 = 0;
  private atk3 = 0;
  private dashState = 0; // 0 없음 / 1 예열 / 2 돌진
  private dashT = 0;
  private dashDx = 0;
  private dashDz = 0;

  constructor(atlas: Atlas, onWarn: (name: string, hanja: string) => void) {
    this.atlas = atlas;
    this.onWarn = onWarn;
  }

  get name(): string {
    return this.def ? this.def.name : '';
  }
  get hanja(): string {
    return this.def ? this.def.hanja : '';
  }

  hpFrac(ctx: WeaponContext): number {
    if (!this.active || this.idx < 0) return 0;
    const en = ctx.enemies;
    if (en.alive[this.idx] === 0) return 0;
    return Math.max(0, en.hp[this.idx] / en.maxHp[this.idx]);
  }

  spawn(typeId: string, minute: number, ctx: WeaponContext, px: number, pz: number): void {
    const def = BOSS_DEFS[typeId];
    if (!def) return;
    const en = ctx.enemies;
    const hp = def.hp * (1 + 0.08 * minute);
    // 화면 위쪽 밖에서 등장, 스케일 2.2
    const i = en.spawn(px, pz - 16, hp, def.speed, def.radius, def.contact, 40, 2.2, SHEET_SGRADE, def.charIndex * SGRADE_BLOCK, 0);
    if (i < 0) return;
    en.boss[i] = 1;
    en.kbResist[i] = 0.9; // 보스: 넉백 90% 저항(밀리지 않는 위압감)
    en.controlled[i] = 1;
    en.tr[i] = def.tr;
    en.tg[i] = def.tg;
    en.tb[i] = def.tb;
    en.labels[i] = `${def.name} ${def.hanja}`;
    en.markSpecial(i);
    this.idx = i;
    this.typeId = typeId;
    this.def = def;
    this.active = true;
    this.atk1 = 2.0;
    // 여포의 첫 번개 창은 돌진 전에 보여 회피 방향을 읽을 시간을 준다.
    this.atk2 = typeId === 'lvbu' ? 1.15 : 3.5;
    this.atk3 = 6.0;
    this.dashState = 0;
    ctx.effects.spawnRing(px, pz, 24, 2.4, 1.2, 0.6, 0.9);
    this.onWarn(def.name, def.hanja);
  }

  update(dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, px: number, pz: number): void {
    if (!this.active) return;
    const en = ctx.enemies;
    if (en.alive[this.idx] === 0) {
      this.active = false;
      this.idx = -1;
      return;
    }
    const i = this.idx;
    const def = this.def!;

    let dx = px - en.x[i];
    let dz = pz - en.z[i];
    const dist = Math.hypot(dx, dz) || 1;
    dx /= dist;
    dz /= dist;

    // 이동: 돌진 중이 아니면 접근(원거리 패턴형은 거리 유지)
    if (this.dashState === 2) {
      en.x[i] += this.dashDx * 18 * dt;
      en.z[i] += this.dashDz * 18 * dt;
    } else if (this.dashState === 1) {
      // 예열: 정지 + 플래시
      en.flash[i] = 0.6;
    } else {
      const approach = this.typeId === 'yuanshao' ? (dist > 9 ? 1 : -0.2) : 1;
      en.x[i] += dx * def.speed * approach * dt;
      en.z[i] += dz * def.speed * approach * dt;
    }

    this.atk1 -= dt;
    this.atk2 -= dt;
    this.atk3 -= dt;

    if (this.typeId === 'yuanshao') this.updateYuanshao(dt, ctx, enemyProj, i, dx, dz);
    else if (this.typeId === 'dongzhuo') this.updateDongzhuo(dt, ctx, enemyProj, i, px, pz, dx, dz);
    else if (this.typeId === 'lvbu') this.updateLvbu(dt, ctx, enemyProj, i, px, pz, dx, dz);
  }

  // 원소: 투사체 부채꼴
  private updateYuanshao(_dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, i: number, dx: number, dz: number): void {
    const en = ctx.enemies;
    if (this.atk1 <= 0) {
      this.atk1 = 2.4;
      const base = Math.atan2(dz, dx);
      for (let k = -3; k <= 3; k++) {
        const a = base + k * 0.16;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 10, 12, false, EK_ARROW);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 3, 1.4, 1.2, 2.0, 0.4);
    }
    if (this.atk2 <= 0) {
      this.atk2 = 5.2;
      const base = Math.atan2(dz, dx);
      for (let k = -1; k <= 1; k++) {
        const a = base + k * 0.32;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 5.4, 16, true, EK_POISON);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 4.2, 0.7, 2.1, 1.2, 0.55);
    }
  }

  // 동탁: 화염 장판 소환
  private updateDongzhuo(
    _dt: number,
    ctx: WeaponContext,
    enemyProj: EnemyProjectilePool,
    i: number,
    px: number,
    pz: number,
    dx: number,
    dz: number,
  ): void {
    const en = ctx.enemies;
    if (this.atk1 <= 0) {
      this.atk1 = 3.2;
      // 플레이어 주변에 장판 3~4개
      for (let k = 0; k < 4; k++) {
        const a = ctx.rng.next() * Math.PI * 2;
        const r = ctx.rng.range(0, 5);
        ctx.zones.spawn(px + Math.cos(a) * r, pz + Math.sin(a) * r, 3.0, 3.2, 16, 2.6, 0.7, 0.2);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 4, 2.4, 1.0, 0.4, 0.5);
    }
    if (this.atk2 <= 0) {
      this.atk2 = 4.6;
      const base = Math.atan2(dz, dx);
      enemyProj.spawn(en.x[i], en.z[i], dx, dz, 7.2, 24, false, EK_HEAVY);
      for (const offset of [-0.32, 0.32]) {
        const a = base + offset;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 8.5, 17, false, EK_FIREBALL);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 4.8, 2.6, 0.75, 0.2, 0.55);
    }
  }

  // 여포: 돌진 + 참격파 + 졸개 소환
  private updateLvbu(dt: number, ctx: WeaponContext, enemyProj: EnemyProjectilePool, i: number, px: number, pz: number, dx: number, dz: number): void {
    const en = ctx.enemies;
    // 돌진 시퀀스
    if (this.dashState === 1) {
      this.dashT -= dt;
      if (this.dashT <= 0) {
        this.dashState = 2;
        this.dashT = 0.45;
        this.dashDx = dx;
        this.dashDz = dz;
        en.damage[i] = 40; // 돌진 중 고 대미지
        ctx.effects.spawnThrust(en.x[i], en.z[i], dx, dz, 10, 3, 2.2, 0.8, 0.7);
      }
    } else if (this.dashState === 2) {
      this.dashT -= dt;
      ctx.particles.dust(en.x[i], en.z[i]);
      if (this.dashT <= 0) {
        this.dashState = 0;
        en.damage[i] = this.def!.contact;
      }
    }
    if (this.atk1 <= 0 && this.dashState === 0) {
      this.atk1 = 4.5;
      this.dashState = 1;
      this.dashT = 0.6;
    }
    // 참격파 (전방 부채꼴 마탄)
    if (this.atk2 <= 0) {
      this.atk2 = 3.0;
      const base = Math.atan2(dz, dx);
      for (let k = -2; k <= 2; k++) {
        const a = base + k * 0.2;
        enemyProj.spawn(en.x[i], en.z[i], Math.cos(a), Math.sin(a), 13, 14, false, EK_LIGHTNING);
      }
    }
    // 졸개 소환
    if (this.atk3 <= 0) {
      this.atk3 = 7.0;
      const t = ENEMY_TYPES.general_blade;
      const bpx = this.atlas.soldierBlockPx(t.charIndex);
      for (let k = 0; k < 5; k++) {
        const a = ctx.rng.next() * Math.PI * 2;
        const r = 3 + ctx.rng.range(0, 3);
        en.spawn(px + Math.cos(a) * r, pz + Math.sin(a) * r, t.hp * 2, t.speed, t.radius, t.damage, t.gemValue, t.worldScale, 0, bpx, 0);
      }
      ctx.effects.spawnRing(en.x[i], en.z[i], 5, 2.0, 0.8, 1.4, 0.5);
    }
  }
}
