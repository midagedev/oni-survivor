import type { Scene } from 'three';
import type { Atlas, SheetInfo } from '../gfx/atlas';
import type { LightUniforms } from '../gfx/lightField';
import { cellUvOffset } from '../gfx/atlas';
import { SpriteQuad, dirFromVelocity } from '../gfx/sprites';
import { CELL_W } from '../data/spriteManifest';
import { COMPANION_BY_HERO, COMPANION_JOIN_TIME, companionLine } from '../data/companions';
import type { CompanionDef } from '../data/companions';
import type { Player } from './player';
import type { WeaponContext } from './weapons/types';

const FOLLOW_RATE = 4.5;
const ATTACK_RANGE = 15;
const ANIM_FPS = 7;
const CONE_COS = 0.64; // 부채꼴 반각 ≈50°

export interface SpecialEvent {
  line: string;
  cr: number;
  cg: number;
  cb: number;
}

// 원군: 합류 세트피스 + 광역 기본공격 + 특기(쿨다운 광역기) + 무쌍 시너지 (#22).
export class Companion {
  active = false;
  attacks = 0;
  kills = 0; // 밸런스 측정: 원군 킬 수(kill share)
  x = 0;
  z = 0;
  readonly radius = 0.45;

  private def: CompanionDef = COMPANION_BY_HERO.zhaoyun;
  private readonly sheet: SheetInfo;
  private readonly quad: SpriteQuad;
  private blockPx = 0;
  private dir = 0;
  private frame = 0;
  private animTime = 0;
  private attackTimer = 0;
  private specialTimer = 0;
  private posRingT = 0; // #34 위치 식별용 은은한 지면 링 펄스
  private side = 1; // #42: 팔로우 오프셋 좌/우(1=우, -1=좌) — 2인 체제 분리
  private joinTime = COMPANION_JOIN_TIME; // #42: 인스턴스별 합류 시각(1호 45s / 2호 270s)
  private specialPhase = 0; // #42: 특기 위상차(2인 동시 발동 방지)
  damageScale = 1; // #42: 2인 활성 시 0.8 (run이 설정)
  joinDirX = 0; // #42: 합류 순간 진입 방향(run의 onAllyJoin 카메라용)
  joinDirZ = 1;
  private playerLevel = 1;
  private musouActive = false;
  private pendingSpecial: SpecialEvent | null = null;
  private readonly uv = { u: 0, v: 0 };

  constructor(scene: Scene, atlas: Atlas, light: LightUniforms) {
    this.sheet = atlas.sgrade;
    this.quad = new SpriteQuad(this.sheet, light, 2.15);
    this.quad.setTint(0.72, 1.12, 1.5); // 아군 청록 틴트
    this.quad.setAlly(true); // 청록 림 아웃라인 — 적/플레이어와 확실히 구분(오너 딸 피드백)
    this.quad.mesh.visible = false;
    scene.add(this.quad.mesh);
  }

  get definition(): CompanionDef {
    return this.def;
  }

  // 특기 발동 이벤트 소비(run이 대사/사운드 표시). 프레임당 한 번.
  consumeSpecialEvent(): SpecialEvent | null {
    const e = this.pendingSpecial;
    this.pendingSpecial = null;
    return e;
  }

  // opts로 2호(다른 정의/좌측 오프셋/270s 합류/위상차)를 구성. 미지정 시 1호 기본값.
  reset(heroId: string, opts?: { def?: CompanionDef; side?: 1 | -1; joinTime?: number; specialPhase?: number }): void {
    this.def = opts?.def ?? COMPANION_BY_HERO[heroId] ?? COMPANION_BY_HERO.zhaoyun;
    this.blockPx = this.def.charIndex * 4 * CELL_W;
    this.side = opts?.side ?? 1;
    this.joinTime = opts?.joinTime ?? COMPANION_JOIN_TIME;
    this.specialPhase = opts?.specialPhase ?? 0;
    this.damageScale = 1;
    this.active = false;
    this.attacks = 0;
    this.kills = 0;
    this.animTime = 0;
    this.attackTimer = 0;
    this.specialTimer = 0;
    this.pendingSpecial = null;
    this.quad.mesh.visible = false;
  }

  // 합류한 프레임에 true를 반환해 Run이 UI/대사를 한 번만 띄운다.
  update(dt: number, gameTime: number, player: Player, ctx: WeaponContext, playerLevel: number, musouActive: boolean): boolean {
    this.playerLevel = playerLevel;
    this.musouActive = musouActive;
    let joined = false;
    if (!this.active) {
      if (gameTime < this.joinTime) return false;
      this.active = true;
      this.x = player.x - player.faceX * 2.2 + this.side * player.faceZ * 1.4;
      this.z = player.z - player.faceZ * 2.2 - this.side * player.faceX * 1.4;
      this.joinDirX = player.faceX || 0;
      this.joinDirZ = player.faceZ || 1;
      this.quad.mesh.visible = true;
      // 첫 특기 쿨 -50% + 2인 위상차(동시 발동 방지)
      this.specialTimer = this.def.specialCd * 0.5 + this.specialPhase;
      this.joinSetpiece(ctx, player);
      joined = true;
    }

    const targetX = player.x - player.faceX * 2.2 + this.side * player.faceZ * 1.4;
    const targetZ = player.z - player.faceZ * 2.2 - this.side * player.faceX * 1.4;
    let vx = targetX - this.x;
    let vz = targetZ - this.z;
    const dist = Math.hypot(vx, vz);
    if (dist > 14) {
      this.x = targetX;
      this.z = targetZ;
      vx = 0;
      vz = 0;
    } else {
      const follow = 1 - Math.exp(-FOLLOW_RATE * dt);
      this.x += vx * follow;
      this.z += vz * follow;
    }

    const moving = Math.hypot(vx, vz) > 0.08;
    this.dir = dirFromVelocity(vx, vz, this.dir);
    if (moving) {
      this.animTime += dt;
      this.frame = ((this.animTime * ANIM_FPS) | 0) % 4;
    } else {
      this.frame = 0;
    }

    // 특기(광역기): 쿨다운 + 사거리 내 적 존재 시 발동
    this.specialTimer -= dt;
    if (this.specialTimer <= 0 && this.nearestEnemy(ctx, 18) >= 0) {
      this.useSpecial(ctx, player);
      this.specialTimer = this.def.specialCd;
    }

    this.attackTimer -= dt;
    if (this.attackTimer <= 0) this.attack(ctx);

    // #34/오너 딸 피드백: 은은한 청록 지면 링(아군 표식 + 위치 식별). 반경<3 → 광원 미생성, 대형 버스트 아님.
    this.posRingT -= dt;
    if (this.posRingT <= 0) {
      this.posRingT = 0.55;
      ctx.effects.spawnRing(this.x, this.z, 1.5, 0.4, 1.2, 2.0, 0.5);
    }

    cellUvOffset(this.sheet, this.blockPx, 0, this.dir, this.frame, this.uv);
    this.quad.setUv(this.uv.u, this.uv.v);
    this.quad.setPosition(this.x, 0, this.z);
    return joined;
  }

  // 레벨 스케일 적용 대미지. #42: 2인 활성 시 damageScale(0.8)로 총 킬셰어 억제.
  private dmg(base: number, ctx: WeaponContext): number {
    return base * ctx.stats.damageMul * (1 + this.playerLevel * 0.05) * this.damageScale;
  }

  private nearestEnemy(ctx: WeaponContext, range: number): number {
    const en = ctx.enemies;
    const n = ctx.hash.query(this.x, this.z, range, ctx.scratch);
    let best = -1;
    let bestD2 = range * range;
    for (let c = 0; c < n; c++) {
      const i = ctx.scratch[c];
      if (en.alive[i] === 0) continue;
      const dx = en.x[i] - this.x;
      const dz = en.z[i] - this.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = i;
      }
    }
    return best;
  }

  // 합류 세트피스: 착지 광역 충격(넉백+피해) + 절제된 1회 임팩트. #34: 링 반경<3으로 대형 광원 버스트 제거.
  private joinSetpiece(ctx: WeaponContext, player: Player): void {
    const d = this.def;
    const fx = player.faceX || 0;
    const fz = player.faceZ || 1;
    // 진입 예고: 말발굽 먼지 웨이브(뒤→착지) + 돌격 스러스트(기병 합류감).
    for (let k = 1; k <= 4; k++) ctx.particles.dust(this.x - fx * (1.2 * k), this.z - fz * (1.2 * k));
    ctx.effects.spawnThrust(this.x - fx * 4.5, this.z - fz * 4.5, fx, fz, 4.5, 1.4, d.cr, d.cg, d.cb, 0.2);
    ctx.effects.spawnFlash(this.x, this.z, d.cr, d.cg, d.cb, 2);
    ctx.effects.spawnRing(this.x, this.z, 2.8, d.cr, d.cg, d.cb, 0.45); // <3 → 광원 미생성
    this.aoe(ctx, this.x, this.z, 6, this.dmg(60, ctx), 7); // 히트 범위는 유지
  }

  private attack(ctx: WeaponContext): void {
    const best = this.nearestEnemy(ctx, ATTACK_RANGE);
    if (best < 0) {
      this.attackTimer = 0.25;
      return;
    }
    const en = ctx.enemies;
    const dx = en.x[best] - this.x;
    const dz = en.z[best] - this.z;
    const dd = Math.hypot(dx, dz) || 1;
    const nx = dx / dd;
    const nz = dz / dd;
    const base = this.dmg(this.def.damage, ctx);
    const boost = this.musouActive ? 1.3 : 1; // 무쌍 중 이펙트/위력 강화

    if (this.def.attack === 'lightning') {
      // #34: 기본공격은 대형 낙뢰 버스트(반경9 광원+화면플래시) 제거 → 은은한 연쇄 아크만. 적 은폐 방지.
      ctx.effects.spawnChainArc(this.x, this.z, en.x[best], en.z[best], this.def.cr, this.def.cg, this.def.cb);
      this.hit(ctx, best, nx, nz, base * boost, 3);
      const chain = this.nearestOther(ctx, en.x[best], en.z[best], best, 6);
      if (chain >= 0) {
        ctx.effects.spawnChainArc(en.x[best], en.z[best], en.x[chain], en.z[chain], this.def.cr, this.def.cg, this.def.cb);
        this.hit(ctx, chain, nx, nz, base * 0.8 * boost, 2);
      }
    } else {
      // 부채꼴 광역: 아크 시각 반경 축소(7→4.5, 히트 범위는 콘 7.5 유지) — 고빈도 대형 버스트 완화.
      ctx.effects.spawnSlashArc(this.x, this.z, nx, nz, 4.5, 0.9, this.def.cr, this.def.cg, this.def.cb, 0.18);
      this.cone(ctx, nx, nz, 7.5, base * boost, 4);
    }

    this.attacks++;
    let cd = this.def.cooldown * ctx.stats.cooldownMul;
    if (this.musouActive) cd *= 0.5; // 무쌍 시너지: 공속 2배
    this.attackTimer = cd;
  }

  // 특기(광역기) — 장수별 1종.
  private useSpecial(ctx: WeaponContext, player: Player): void {
    const d = this.def;
    switch (d.special) {
      case 'rally': {
        // 유비 격려: 광역 격려파 + 플레이어 소폭 회복
        ctx.effects.spawnRing(this.x, this.z, 9, d.cr, d.cg, d.cb, 0.6);
        ctx.effects.spawnFlash(this.x, this.z, d.cr, d.cg, d.cb, 4);
        this.aoe(ctx, this.x, this.z, 9, this.dmg(70, ctx), 6);
        player.heal(player.maxHp * 0.05);
        break;
      }
      case 'triplebolt': {
        // 조조 낙뢰 3연발
        for (let k = 0; k < 3; k++) {
          const t = this.nthEnemy(ctx, 18, k);
          if (t < 0) break;
          ctx.effects.spawnLightning(ctx.enemies.x[t], ctx.enemies.z[t], d.cr, d.cg, d.cb);
          this.aoe(ctx, ctx.enemies.x[t], ctx.enemies.z[t], 3.2, this.dmg(55, ctx), 3);
        }
        break;
      }
      case 'pierce': {
        // 조운 돌진 관통
        const t = this.nearestEnemy(ctx, 18);
        const dx = t >= 0 ? ctx.enemies.x[t] - this.x : player.faceX;
        const dz = t >= 0 ? ctx.enemies.z[t] - this.z : player.faceZ;
        const dd = Math.hypot(dx, dz) || 1;
        const nx = dx / dd;
        const nz = dz / dd;
        ctx.effects.spawnThrust(this.x, this.z, nx, nz, 11, 2.2, d.cr, d.cg, d.cb, 0.24);
        this.capsule(ctx, this.x, this.z, nx, nz, 11, 1.4, this.dmg(85, ctx), 9);
        this.x += nx * 8;
        this.z += nz * 8;
        ctx.effects.spawnFlash(this.x, this.z, d.cr, d.cg, d.cb, 3);
        break;
      }
      case 'firefan': {
        // 주유 화염 부채: 광역 아크 + 화염 장판
        const t = this.nearestEnemy(ctx, 18);
        const dx = t >= 0 ? ctx.enemies.x[t] - this.x : player.faceX;
        const dz = t >= 0 ? ctx.enemies.z[t] - this.z : player.faceZ;
        const dd = Math.hypot(dx, dz) || 1;
        const nx = dx / dd;
        const nz = dz / dd;
        ctx.effects.spawnSlashArc(this.x, this.z, nx, nz, 9, 1.3, d.cr, d.cg, d.cb, 0.24);
        this.cone(ctx, nx, nz, 9, this.dmg(60, ctx), 5);
        ctx.zones.spawn(this.x + nx * 5, this.z + nz * 5, 4, 3, this.dmg(24, ctx), 2.4, 0.9, 0.25);
        break;
      }
      case 'chargesweep': {
        // 장료 돌격 스윕: 대형 아크 + 강넉백
        ctx.effects.spawnRing(this.x, this.z, 9, d.cr, d.cg, d.cb, 0.5);
        ctx.effects.spawnSlashArc(this.x, this.z, this.dir === 2 ? 1 : -1, 0, 9, 1.5, d.cr, d.cg, d.cb, 0.26);
        this.aoe(ctx, this.x, this.z, 9, this.dmg(75, ctx), 9);
        break;
      }
    }
    this.pendingSpecial = { line: companionLine(d), cr: d.cr, cg: d.cg, cb: d.cb };
  }

  // 단일 타격.
  private hit(ctx: WeaponContext, i: number, nx: number, nz: number, damage: number, knockback: number): void {
    const en = ctx.enemies;
    if (en.alive[i] === 0) return;
    const died = en.damageAt(i, damage);
    ctx.damageText.spawn(damage, en.x[i], en.scale[i] * 0.7, en.z[i], false);
    en.push(i, nx, nz, knockback);
    if (died) ctx.onKill(i);
  }

  // 원형 광역.
  private aoe(ctx: WeaponContext, cx: number, cz: number, radius: number, damage: number, knockback: number): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - cx;
      const dz = en.z[j] - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 > radius * radius) continue;
      const d = Math.sqrt(d2) || 1;
      const died = en.damageAt(j, damage);
      ctx.damageText.spawn(damage, en.x[j], en.scale[j] * 0.7, en.z[j], false);
      en.push(j, dx / d, dz / d, knockback);
      if (died) { this.kills++; ctx.onKill(j); }
    }
  }

  // 부채꼴 광역(진행 방향 콘).
  private cone(ctx: WeaponContext, dirX: number, dirZ: number, range: number, damage: number, knockback: number): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(this.x, this.z, range, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const dx = en.x[j] - this.x;
      const dz = en.z[j] - this.z;
      const d2 = dx * dx + dz * dz;
      if (d2 > range * range) continue;
      const d = Math.sqrt(d2) || 1;
      if ((dx / d) * dirX + (dz / d) * dirZ < CONE_COS) continue;
      const died = en.damageAt(j, damage);
      ctx.damageText.spawn(damage, en.x[j], en.scale[j] * 0.7, en.z[j], false);
      en.push(j, dx / d, dz / d, knockback);
      if (died) { this.kills++; ctx.onKill(j); }
    }
  }

  // 캡슐(선분) 광역 — 돌진 관통.
  private capsule(ctx: WeaponContext, ax: number, az: number, dx: number, dz: number, len: number, w: number, damage: number, knockback: number): void {
    const en = ctx.enemies;
    const bx = ax + dx * len;
    const bz = az + dz * len;
    const mx = (ax + bx) * 0.5;
    const mz = (az + bz) * 0.5;
    const n = ctx.hash.query(mx, mz, len * 0.5 + w + 1.2, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0) continue;
      const hitR = w + en.radius[j];
      let t = ((en.x[j] - ax) * dx + (en.z[j] - az) * dz) / (len || 1);
      if (t < 0) t = 0; else if (t > len) t = len;
      const px = ax + dx * t;
      const pz = az + dz * t;
      const ex = en.x[j] - px;
      const ez = en.z[j] - pz;
      if (ex * ex + ez * ez > hitR * hitR) continue;
      const died = en.damageAt(j, damage);
      ctx.damageText.spawn(damage, en.x[j], en.scale[j] * 0.7, en.z[j], false);
      en.push(j, dx, dz, knockback);
      if (died) { this.kills++; ctx.onKill(j); }
    }
  }

  private nearestOther(ctx: WeaponContext, cx: number, cz: number, exclude: number, range: number): number {
    const en = ctx.enemies;
    const n = ctx.hash.query(cx, cz, range, ctx.scratch);
    let best = -1;
    let bestD2 = range * range;
    for (let c = 0; c < n; c++) {
      const i = ctx.scratch[c];
      if (i === exclude || en.alive[i] === 0) continue;
      const dx = en.x[i] - cx;
      const dz = en.z[i] - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = i;
      }
    }
    return best;
  }

  // 특기 다중 타겟용: 자신 주변 n번째 후보(대충 분산).
  private nthEnemy(ctx: WeaponContext, range: number, k: number): number {
    const en = ctx.enemies;
    const n = ctx.hash.query(this.x, this.z, range, ctx.scratch);
    let found = 0;
    for (let c = 0; c < n; c++) {
      const i = ctx.scratch[c];
      if (en.alive[i] === 0) continue;
      if (found === k) return i;
      found++;
    }
    return -1;
  }
}
