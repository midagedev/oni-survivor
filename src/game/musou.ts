import type { WeaponContext } from './weapons/types';
import type { Player } from './player';
import { PK_ARROW, PK_BUTTERFLY } from './projectiles';
import type { TechniqueTheme } from '../gfx/techniqueSprites';
import { resolvedDamage } from './damagePolicy';
import { ultimateFor, type UltimateProfile } from '../data/skillTrees';

// 대원별 문장 한자 + 테마 광원 색 — 각 호흡법의 정체성.
const CREST: Record<string, { r: number; g: number; b: number; theme: TechniqueTheme }> = {
  tanjiro: { r: 2.6, g: 1.0, b: 0.3, theme: 'sun' },
  tomioka: { r: 0.4, g: 1.2, b: 2.4, theme: 'water' },
  nezuko: { r: 2.4, g: 0.5, b: 0.9, theme: 'blood' },
  kanroji: { r: 2.4, g: 0.7, b: 1.4, theme: 'love' },
  shinobu: { r: 1.5, g: 0.7, b: 2.2, theme: 'butterfly' },
  kanao: { r: 2.2, g: 0.6, b: 1.0, theme: 'flower' },
  rengoku: { r: 2.6, g: 0.8, b: 0.2, theme: 'flame' },
  zenitsu: { r: 2.4, g: 2.0, b: 0.4, theme: 'thunder' },
  inosuke: { r: 1.0, g: 1.6, b: 1.9, theme: 'beast' },
  tokito: { r: 1.2, g: 1.8, b: 2.0, theme: 'mist' },
  uzui: { r: 2.2, g: 1.6, b: 0.6, theme: 'sound' },
  sanemi: { r: 0.5, g: 1.9, b: 1.0, theme: 'wind' },
  himejima: { r: 1.6, g: 1.3, b: 0.7, theme: 'stone' },
  default: { r: 1.5, g: 1.4, b: 1.0, theme: 'water' },
};

// 오의 게이지 + 대원별 고유 연출. 킬/피격/콤보로 충전하고 Space로 발동한다.
// 지속시간·적 시간배율·마무리 판정은 캐릭터 프로필과 계보 분기에 따라 달라진다.
export class Musou {
  gauge = 0; // 0..100
  active = false;
  // QA 보조값: 이 클래스가 직접 처리한 AoE/캡슐 피해. 투사체·장판까지 포함한
  // 실제 총피해는 보스 HP 전후값을 기준으로 검증한다.
  lastCastDamage = 0;
  finisherCount = 0;
  chargeMul = 1; // 사당 '무쌍 충전' 버프 시 2 (run이 매 프레임 세팅)
  private killRate = 0; // 최근 킬/초 EMA (몰살 구간 충전 체감)
  private chargeLockT = 0; // 종료 후 킬 충전 잠금(연속 체이닝 방지)
  private timer = 0;
  private tick = 0;
  private stormAngle = 0;
  private dashIdx = 0;
  private dashTimer = 0;
  private finaleStep = 0;
  private readonly moveOut = { x: 0, z: 0 };
  private initDone = false;
  private introDone = false; // 발동 연출(문장/광원) 1회
  public heroMusou: string;
  private lineageBranches: readonly string[] = [];
  private activeBranches: readonly string[] = [];
  private activeProfile: UltimateProfile | null = null;
  private readonly bloodMarks: Array<{ enemy: number; x: number; z: number }> = [];
  private readonly onActivateFx: () => void; // 발동 연출(한자/사운드)

  constructor(heroMusou: string, onActivateFx: () => void) {
    this.heroMusou = heroMusou;
    this.onActivateFx = onActivateFx;
  }

  setHero(musouKey: string): void {
    this.heroMusou = musouKey;
  }

  setLineageBranches(branches: readonly string[]): void {
    this.lineageBranches = branches;
  }

  reset(): void {
    this.gauge = 0;
    this.active = false;
    this.timer = 0;
    this.tick = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
    this.finaleStep = 0;
    this.initDone = false;
    this.introDone = false;
    this.chargeMul = 1;
    this.killRate = 0;
    this.chargeLockT = 0;
    this.lastCastDamage = 0;
    this.finisherCount = 0;
    this.activeBranches = [];
    this.activeProfile = null;
    this.bloodMarks.length = 0;
  }

  get ready(): boolean {
    return this.gauge >= 100;
  }

  get enemyTimeScale(): number {
    return this.active ? (this.activeProfile?.enemyTimeScale ?? 1) : 1;
  }

  addKill(comboCount: number): void {
    if (this.active || this.chargeLockT > 0) return;
    this.killRate += 0.25;
    const base = 1 + Math.min(1.5, comboCount * 0.02);
    const gain = Math.min(base, 2.0 / Math.max(this.killRate, 0.5));
    this.gauge = Math.min(100, this.gauge + gain * this.chargeMul);
  }

  addHit(): void {
    if (this.active) return;
    this.gauge = Math.min(100, this.gauge + 3 * this.chargeMul);
  }

  activate(): boolean {
    if (!this.ready || this.active) return false;
    const profile = ultimateFor(this.heroMusou, this.lineageBranches);
    this.activeBranches = [...this.lineageBranches];
    this.activeProfile = profile;
    this.active = true;
    this.timer = profile.duration;
    this.tick = 0;
    this.stormAngle = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
    this.finaleStep = 0;
    this.initDone = false;
    this.introDone = false;
    this.gauge = 0;
    this.lastCastDamage = 0;
    this.finisherCount = 0;
    this.bloodMarks.length = 0;
    this.onActivateFx();
    return true;
  }

  // 실제(real) dt로 진행. active 동안 대원별 오의 수행. 종료 시 true(run이 후처리).
  update(dt: number, ctx: WeaponContext, player: Player): boolean {
    this.killRate *= Math.exp(-dt / 4);
    if (this.chargeLockT > 0) this.chargeLockT -= dt;
    if (!this.active) return false;
    this.timer -= dt;
    this.tick -= dt;
    this.dashTimer -= dt;

    // 마지막 일반 틱과 피니셔가 같은 프레임에 겹치지 않게 먼저 종료한다.
    // finish 중에는 active를 유지해 마무리 처치도 오의 처치로 집계한다.
    if (this.timer <= 0) {
      const crest = CREST[this.heroMusou] ?? CREST.default;
      this.finishUltimate(ctx, player, crest);
      this.active = false;
      this.chargeLockT = 6;
      return true;
    }

    // 발동 문장 데칼(1회) + 테마 광원이 플레이어를 따라다님.
    const crest = CREST[this.heroMusou] ?? CREST.default;
    const profile = this.activeProfile ?? ultimateFor(this.heroMusou, this.activeBranches);
    if (!this.introDone) {
      this.introDone = true;
      ctx.effects.spawnCrest(player.x, player.z, profile.crest, crest.r, crest.g, crest.b, profile.duration);
    }
    ctx.effects.spawnMusouLight?.(player.x, player.z, crest.r * 0.24, crest.g * 0.24, crest.b * 0.24, 6.0, 0.07);

    switch (this.heroMusou) {
      case 'tanjiro': this.runTanjiro(ctx, player); break;
      case 'tomioka': this.runTomioka(ctx, player); break;
      case 'nezuko': this.runNezuko(ctx, player); break;
      case 'kanroji': this.runKanroji(ctx, player); break;
      case 'shinobu': this.runShinobu(ctx, player); break;
      case 'kanao': this.runKanao(ctx, player); break;
      case 'rengoku': this.runRengoku(ctx, player); break;
      case 'zenitsu': this.runZenitsu(ctx, player); break;
      case 'inosuke': this.runInosuke(ctx, player); break;
      case 'tokito': this.runTokito(ctx, player); break;
      case 'uzui': this.runUzui(ctx, player); break;
      case 'sanemi': this.runSanemi(ctx, player); break;
      case 'himejima': this.runHimejima(ctx, player); break;
      default: this.runCommon(ctx, player, 1.6, 1.4, 1.0); break;
    }

    return false;
  }

  // 공통 회전 참격 폭풍(색 지정 폴백/기반).
  private runCommon(
    ctx: WeaponContext,
    player: Player,
    r: number,
    g: number,
    b: number,
    theme: TechniqueTheme | null = null,
  ): void {
    if (this.tick > 0) return;
    this.tick += 0.1;
    this.stormAngle += 0.9;
    const dx = Math.cos(this.stormAngle);
    const dz = Math.sin(this.stormAngle);
    ctx.effects.spawnSlashArc(player.x, player.z, dx, dz, 7, 1.3, r, g, b, 0.24, theme);
    this.aoe(ctx, player.x, player.z, 7.5, 10 * ctx.stats.damageMul, 0);
  }

  // 탄지로 — 히노카미 카구라·원무: 회전하는 태양 화염륜 + 3방향 화염 참격
  private runTanjiro(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick += 0.09;
    this.stormAngle += 0.7;
    ctx.effects.spawnTechnique('sun', player.x, player.z, this.stormAngle, 13.5, 13.5, 0.25, 0.93, 1.4, 0.08);
    for (let k = 0; k < 3; k++) {
      const a = this.stormAngle + (k / 3) * Math.PI * 2;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 8, 0.8, 0.52, 0.2, 0.06, 0.22);
    }
    ctx.particles.burst(player.x, player.z, 2.6, 1.0, 0.3, 6, 3);
    this.aoe(ctx, player.x, player.z, 8.5, 12 * ctx.stats.damageMul, 5);
  }

  // 기유 — 물의 호흡·나기: 자신을 중심으로 감도는 거대 물 소용돌이
  private runTomioka(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick += 0.22;
    this.stormAngle += 0.18;
    ctx.effects.spawnTechnique('water', player.x, player.z, this.stormAngle, 16, 16, 0.28, 0.78, 0.18, 0.07);
    ctx.effects.spawnRing(player.x, player.z, 9.5, 0.22, 0.72, 1.8, 0.22);
    const erased = ctx.clearEnemyProjectiles(player.x, player.z, 11);
    if (erased > 0) ctx.particles.waterSplash(player.x, player.z, Math.min(18, erased * 2));
    this.aoe(ctx, player.x, player.z, 9.5, 10 * ctx.stats.damageMul, 0);
  }

  // 네즈코 — 폭혈: 전방위 핏빛 폭발 + 지속 혈염 장판
  private runNezuko(ctx: WeaponContext, player: Player): void {
    if (!this.initDone) {
      this.initDone = true;
      this.captureBloodMarks(ctx, player.x, player.z);
      ctx.effects.spawnTripleShock(player.x, player.z, 17, 2.4, 0.5, 0.9);
      ctx.effects.spawnTechnique('blood', player.x, player.z, 0, 15, 15, 0.8, 0.96, 0.8, 0.16);
      this.aoe(ctx, player.x, player.z, 30, 60 * ctx.stats.damageMul, 10);
    }
    if (this.tick > 0) return;
    this.tick += 0.35;
    this.captureBloodMarks(ctx, player.x, player.z);
    ctx.zones.spawn(player.x, player.z, 10, 0.5, 20 * ctx.stats.damageMul * ctx.stats.musouPowerMul, 2.4, 0.4, 0.9);
    ctx.effects.spawnRing(player.x, player.z, 13, 2.4, 0.5, 0.9, 0.4);
    this.aoe(ctx, player.x, player.z, 24, 25 * ctx.stats.damageMul, 3);
  }

  // 미츠리 — 사랑의 호흡: 유연한 채찍검이 회전하며 광범위를 휘감음
  private runKanroji(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick += 0.07;
    this.stormAngle += 0.9;
    ctx.effects.spawnTechnique('love', player.x, player.z, this.stormAngle, 15, 15, 0.2, 0.9, 2.4, 0.06);
    for (let k = 0; k < 2; k++) {
      const a = this.stormAngle + k * Math.PI;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 9, 0.5, 0.48, 0.14, 0.28, 0.2);
    }
    this.aoe(ctx, player.x, player.z, 9.5, 7 * ctx.stats.damageMul, 4);
  }

  // 시노부 — 잠자리의 춤: 여섯 독침이 한 약점으로 좁혀 든다.
  private runShinobu(ctx: WeaponContext, player: Player): void {
    if (this.dashIdx >= 6) return;
    if (this.tick > 0) return;
    this.tick += 0.42;
    const shot = this.dashIdx++;
    const base = Math.atan2(ctx.aimZ, ctx.aimX);
    const a = base + (shot - 2.5) * 0.045;
    const d = 8 * ctx.stats.damageMul * ctx.stats.musouPowerMul;
    ctx.projectiles.spawn(
      player.x, player.z, Math.cos(a), Math.sin(a), 18, d, 0.42, 3, 1.6,
      PK_BUTTERFLY, 1.3, 0.5, 2.0, 1.5, 0.9, false, 6, false, 'butterfly', d,
    );
    ctx.particles.butterflyPoison(player.x, player.z, 8);
    ctx.effects.spawnTechniqueLine('butterfly', player.x, player.z, player.x + Math.cos(a) * 12, player.z + Math.sin(a) * 12, 0.72, 0.2, 0.58);
  }

  // 카나오 — 꽃의 호흡·피안주안: 방사 탄막 없이 한 조준선만 반복 관찰한다.
  private runKanao(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick += 0.42;
    const fx = ctx.aimTarget >= 0 ? ctx.aimX : player.faceX;
    const fz = ctx.aimTarget >= 0 ? ctx.aimZ : player.faceZ;
    const len = 16;
    ctx.effects.spawnTechniqueLine('flower', player.x - fx, player.z - fz, player.x + fx * len, player.z + fz * len, 1.25, 0.2, 0.72);
    ctx.effects.spawnSlashArc(player.x + fx * 8, player.z + fz * 8, fx, fz, 7, 0.36, 1.8, 0.48, 0.8, 0.2, 'flower');
    this.capsule(ctx, player.x - fx, player.z - fz, fx, fz, len + 1, 0.72, 32 * ctx.stats.damageMul);
  }

  // 렌고쿠 — 화염의 호흡·연옥: 조작 가능한 무적 화염 돌진(이동은 run의 입력) + 화염벽
  private runRengoku(ctx: WeaponContext, player: Player): void {
    ctx.particles.dust(player.x, player.z);
    if (this.tick > 0) return;
    this.tick += 0.28;
    ctx.effects.spawnFireWall(player.x, player.z, player.faceX, player.faceZ, 6, 1.5, 0.5);
    ctx.effects.spawnTechnique('flame', player.x, player.z, Math.atan2(-player.faceZ, player.faceX), 9.5, 9.5, 0.42, 0.95, 0, 0.12);
    ctx.effects.spawnRing(player.x, player.z, 2.6, 2.6, 0.9, 0.3, 0.3);
    this.aoe(ctx, player.x, player.z, 7, 35 * ctx.stats.damageMul, 6);
  }

  // 젠이츠 — 벽력일섬·육련: 가장 가까운 적으로 번개 순보하며 참격 연쇄
  private runZenitsu(ctx: WeaponContext, player: Player): void {
    if (this.dashIdx >= 6) return;
    if (this.tick > 0) return;
    this.tick += 0.38;
    this.dashIdx++;
    const t = this.priorityTarget(ctx);
    if (t < 0) {
      const len = 18;
      ctx.effects.spawnTechniqueLine('thunder', player.x, player.z, player.x + player.faceX * len, player.z + player.faceZ * len, 2.1, 0.22, 0.9);
      this.capsule(ctx, player.x, player.z, player.faceX, player.faceZ, len, 1.0, 20 * ctx.stats.damageMul);
      return;
    }
    const targetX = ctx.enemies.x[t];
    const targetZ = ctx.enemies.z[t];
    const originX = player.x;
    const originZ = player.z;
    const dx = targetX - originX;
    const dz = targetZ - originZ;
    const dd = Math.hypot(dx, dz) || 1;
    // 적 바로 앞까지 순보하되 잠긴 관문/성벽에서 멈춘다.
    const blocked = this.movePlayer(ctx, player, targetX - (dx / dd) * 1.4, targetZ - (dz / dd) * 1.4);
    ctx.effects.spawnChainArc(originX, originZ, player.x, player.z, 2.6, 2.2, 0.5);
    ctx.effects.spawnTechniqueLine('thunder', originX, originZ, player.x, player.z, 2.4, 0.24, 0.98);
    player.faceX = dx / dd;
    player.faceZ = dz / dd;
    const strikeX = blocked ? player.x : targetX;
    const strikeZ = blocked ? player.z : targetZ;
    ctx.effects.spawnLightning(strikeX, strikeZ, 2.6, 2.2, 0.5, 5);
    ctx.particles.lightningSpark(strikeX, strikeZ, 10);
    this.aoe(ctx, strikeX, strikeZ, blocked ? 2.2 : 4.2, 20 * ctx.stats.damageMul, 3);
  }

  // 이노스케 — 짐승의 호흡: 8방향 광란 이도류 돌격 + 손톱 참격
  private runInosuke(ctx: WeaponContext, player: Player): void {
    this.runCommon(ctx, player, 1.0, 1.6, 1.9, 'beast'); // 주변 난도질 유지
    if (this.dashIdx >= 8 || this.dashTimer > 0) return;
    this.dashTimer = 0.45;
    const a = (this.dashIdx / 8) * Math.PI * 2 + this.stormAngle * 0.1;
    this.dashIdx++;
    const dx = Math.cos(a);
    const dz = Math.sin(a);
    const blocked = this.movePlayer(ctx, player, player.x + dx * 3.4, player.z + dz * 3.4);
    player.faceX = dx;
    player.faceZ = dz;
    ctx.effects.spawnTechnique('beast', player.x, player.z, Math.atan2(-dz, dx), 7.5, 7.5, 0.32, 0.94, 0.3, 0.12);
    this.capsule(ctx, player.x, player.z, dx, dz, blocked ? 2.2 : 9, 1.3, 40 * ctx.stats.damageMul);
  }

  // 무이치로 — 안개의 호흡: 적 사이를 순보하며 다중 참격(안개 잔상)
  private runTokito(ctx: WeaponContext, player: Player): void {
    if (this.dashIdx >= 7 || this.dashTimer > 0) return;
    this.dashIdx++;
    this.dashTimer = 0.3;
    const t = this.priorityTarget(ctx);
    const tx = t >= 0 ? ctx.enemies.x[t] : player.x + player.faceX * 8;
    const tz = t >= 0 ? ctx.enemies.z[t] : player.z + player.faceZ * 8;
    const originX = player.x;
    const originZ = player.z;
    const dx = tx - originX;
    const dz = tz - originZ;
    const dd = Math.hypot(dx, dz) || 1;
    const blocked = this.movePlayer(ctx, player, tx, tz);
    const moveDx = player.x - originX;
    const moveDz = player.z - originZ;
    const moveDist = Math.hypot(moveDx, moveDz) || 1;
    for (let s = 0; s < 3; s++) ctx.effects.spawnFlameTrail(originX + moveDx / moveDist * s * 1.5, originZ + moveDz / moveDist * s * 1.5, 1.2, 1.8, 2.0);
    player.faceX = dx / dd;
    player.faceZ = dz / dd;
    ctx.effects.spawnSlashArc(player.x, player.z, dx / dd, dz / dd, 6, 1.4, 1.2, 1.8, 2.0, 0.2, 'mist');
    this.aoe(ctx, player.x, player.z, blocked ? 2.4 : 6, 22 * ctx.stats.damageMul, 3);
  }

  // 우즈이 — 음의 호흡·보허무: 폭발 리듬 충격파(본체 + 주변 2발)
  private runUzui(ctx: WeaponContext, player: Player): void {
    // 마지막 0.54초는 실제 시간 간격을 둔 짧-짧-강 3박 피날레다.
    if (this.timer <= 0.54) {
      const thresholds = [0.54, 0.36, 0.10];
      while (this.finaleStep < 3 && this.timer <= thresholds[this.finaleStep]) {
        this.uzuiFinaleBeat(ctx, player, this.finaleStep++);
      }
      return;
    }
    if (this.tick > 0) return;
    this.tick += 0.5; // 리듬
    ctx.effects.spawnTechnique('sound', player.x, player.z, this.stormAngle, 15, 15, 0.48, 0.96, 0.6, 0.16);
    ctx.effects.spawnTripleShock(player.x, player.z, 12, 2.2, 1.6, 0.6);
    ctx.effects.spawnRing(player.x, player.z, 10, 2.2, 1.6, 0.6, 0.4);
    ctx.effects.spawnFlash(player.x, player.z, 2.2, 1.6, 0.6, 6);
    this.aoe(ctx, player.x, player.z, 12, 30 * ctx.stats.damageMul, 8);
    for (let m = 0; m < 2; m++) {
      const a = ctx.rng.next() * Math.PI * 2;
      const r = 5 + ctx.rng.next() * 8;
      const mx = player.x + Math.cos(a) * r;
      const mz = player.z + Math.sin(a) * r;
      ctx.effects.spawnRing(mx, mz, 5, 2.2, 1.4, 0.5, 0.3);
      this.aoe(ctx, mx, mz, 5, 15 * ctx.stats.damageMul, 4);
    }
  }

  private uzuiFinaleBeat(ctx: WeaponContext, player: Player, beat: number): void {
    const distance = [6, 11, 17][beat];
    const damage = [100, 120, 190][beat];
    const x = player.x + player.faceX * distance;
    const z = player.z + player.faceZ * distance;
    const radius = 5.5 + beat * 1.5;
    ctx.effects.spawnTechnique('sound', x, z, Math.atan2(-player.faceZ, player.faceX), 7 + beat * 2, 7 + beat * 2, 0.42 + beat * 0.08, 0.98, beat % 2 ? -1 : 1, 0.14);
    ctx.effects.spawnTripleShock(x, z, 6 + beat * 2, 2.2, 1.6, 0.55);
    ctx.effects.spawnFlash(x, z, 2.2, 1.6, 0.55, 3 + beat * 1.5);
    this.aoe(ctx, x, z, radius, damage * ctx.stats.damageMul, 5 + beat * 2);
  }

  // 사네미 — 바람의 호흡: 회오리 참격 폭풍(2엽 회전 + 확산 링)
  private runSanemi(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick += 0.07;
    this.stormAngle += 1.1;
    ctx.effects.spawnTechnique('wind', player.x, player.z, this.stormAngle, 14, 14, 0.21, 0.9, 2.6, 0.06);
    for (let k = 0; k < 2; k++) {
      const a = this.stormAngle + k * Math.PI;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 8, 1.0, 0.1, 0.38, 0.2, 0.2);
    }
    ctx.effects.spawnRing(player.x, player.z, 7 + (this.stormAngle % 2), 0.5, 1.9, 1.0, 0.15);
    this.aoe(ctx, player.x, player.z, 8.5, 8 * ctx.stats.damageMul, 5);
  }

  // 히메지마 — 바위의 호흡: 전 화면 스턴 후 철구+도끼 강타 연타
  private runHimejima(ctx: WeaponContext, player: Player): void {
    if (!this.initDone) {
      this.initDone = true;
      this.stunAll(ctx, player.x, player.z, 30, 3.0);
      ctx.effects.spawnTechnique('stone', player.x, player.z, 0, 19, 19, 0.9, 0.96, 0.2, 0.2);
      ctx.effects.spawnTripleShock(player.x, player.z, 17, 1.6, 1.3, 0.7);
      this.aoe(ctx, player.x, player.z, 30, 50 * ctx.stats.damageMul, 12);
    }
    if (this.tick > 0) return;
    this.tick += 0.45; // 강타 리듬
    const a = ctx.rng.next() * Math.PI * 2;
    const r = 4 + ctx.rng.next() * 10;
    const mx = player.x + Math.cos(a) * r;
    const mz = player.z + Math.sin(a) * r;
    ctx.effects.spawnTechnique('stone', mx, mz, a, 9, 9, 0.52, 0.95, 0.3, 0.16);
    ctx.effects.spawnRing(mx, mz, 6, 1.6, 1.3, 0.7, 0.4);
    ctx.effects.spawnFlash(mx, mz, 1.6, 1.3, 0.7, 5);
    for (let k = 0; k < 10; k++) {
      const aa = (k / 10) * Math.PI * 2;
      ctx.particles.dust(mx + Math.cos(aa) * 2, mz + Math.sin(aa) * 2);
    }
    this.aoe(ctx, mx, mz, 7, 18 * ctx.stats.damageMul, 6);
    this.aoe(ctx, player.x, player.z, 24, 10 * ctx.stats.damageMul, 2);
  }

  // 공통 전 화면 폭발을 없애고, 각 캐릭터가 싸워 온 방향·리듬·판정으로 오의를 닫는다.
  private finishUltimate(
    ctx: WeaponContext,
    player: Player,
    crest: { r: number; g: number; b: number; theme: TechniqueTheme },
  ): void {
    this.finisherCount++;
    const x = player.x;
    const z = player.z;
    // 발동 당시 캐릭터가 바라보던 방향이 아니라 종료 순간의 실제 자동조준
    // 대상을 향한다. 뒤쪽 보스에게 오의를 썼을 때 피니셔만 반대로 새는 일을 막는다.
    const target = this.priorityTarget(ctx);
    const targetDx = target >= 0 ? ctx.enemies.x[target] - x : ctx.aimX;
    const targetDz = target >= 0 ? ctx.enemies.z[target] - z : ctx.aimZ;
    const targetLength = Math.hypot(targetDx, targetDz);
    const fx = targetLength > 0.001 ? targetDx / targetLength : player.faceX;
    const fz = targetLength > 0.001 ? targetDz / targetLength : player.faceZ;
    const light = (radius = 9): void => {
      ctx.effects.spawnMusouLight?.(x, z, crest.r * 0.42, crest.g * 0.42, crest.b * 0.42, radius, 0.46);
    };

    switch (this.heroMusou) {
      case 'tanjiro': { // 닫히는 태양 원무 → 전방 용두 돌파
        const len = 25;
        ctx.effects.spawnTechnique('sun', x, z, Math.atan2(-fz, fx), 17, 17, 0.62, 0.98, 1.4, 0.14);
        ctx.effects.spawnTechniqueLine('sun', x, z, x + fx * len, z + fz * len, 4.2, 0.42, 1);
        this.capsule(ctx, x, z, fx, fz, len, 2.6, 240 * ctx.stats.damageMul);
        this.aoe(ctx, x + fx * len, z + fz * len, 7, 100 * ctx.stats.damageMul, 8);
        light(11);
        break;
      }
      case 'tomioka': { // 밖으로 터뜨리지 않고 고요하게 수렴
        ctx.effects.spawnTechnique('water', x, z, -this.stormAngle, 20, 20, 0.7, 0.9, -1.2, 0.08);
        ctx.effects.spawnRing(x, z, 12, 0.35, 1.0, 2.4, 0.62);
        this.aoe(ctx, x, z, 12, 200 * ctx.stats.damageMul, 0);
        ctx.clearEnemyProjectiles(x, z, 16);
        this.stunAll(ctx, x, z, 15, 1.4);
        light(8);
        break;
      }
      case 'nezuko': { // 오의 도중 실제로 새긴 혈흔을 바깥에서 안쪽으로 연쇄 점화
        const marks: Array<[number, number]> = this.bloodMarks.map((mark) => [mark.x, mark.z]);
        if (marks.length === 0) marks.push([x, z]);
        for (const [bx, bz] of marks) {
          const a = Math.atan2(bz - z, bx - x);
          ctx.effects.spawnTechnique('blood', bx, bz, a, 6.5, 6.5, 0.5, 0.9, -1, 0.12);
          ctx.effects.spawnRing(bx, bz, 4.2, 2.4, 0.45, 1.1, 0.36);
          this.aoe(ctx, bx, bz, 5.2, 60 * ctx.stats.damageMul, 3);
        }
        ctx.zones.spawn(x, z, 11, 2.8, 42 * ctx.stats.damageMul * ctx.stats.musouPowerMul, 2.4, 0.4, 0.9);
        light(10);
        break;
      }
      case 'kanroji': { // 손끝에서 뻗은 네 겹의 채찍검을 되감는다
        const sideX = -fz;
        const sideZ = fx;
        let ax = x;
        let az = z;
        for (let k = 1; k <= 4; k++) {
          const bend = (k % 2 === 0 ? -1 : 1) * 4.2;
          const bx = x + fx * (k * 4.8) + sideX * bend;
          const bz = z + fz * (k * 4.8) + sideZ * bend;
          const dx = bx - ax;
          const dz = bz - az;
          const dist = Math.hypot(dx, dz) || 1;
          ctx.effects.spawnTechniqueLine('love', ax, az, bx, bz, 2.2, 0.32, 0.96);
          this.capsule(ctx, ax, az, dx / dist, dz / dist, dist, 1.25, 72 * ctx.stats.damageMul);
          ax = bx;
          az = bz;
        }
        ctx.effects.spawnTechnique('love', x + fx * 10, z + fz * 10, Math.atan2(-fz, fx), 22, 14, 0.5, 0.94, -2.2, 0.1);
        light(10);
        break;
      }
      case 'shinobu': { // 여섯 독침이 한 약점에 수렴해 독꽃 개화
        const len = 23;
        for (let k = -2; k <= 3; k++) {
          const sideX = -fz * k * 0.34;
          const sideZ = fx * k * 0.34;
          ctx.effects.spawnTechniqueLine('butterfly', x + sideX, z + sideZ, x + fx * len, z + fz * len, 0.9, 0.3, 0.9);
          const sx = x + sideX;
          const sz = z + sideZ;
          const dx = x + fx * len - sx;
          const dz = z + fz * len - sz;
          const dist = Math.hypot(dx, dz) || 1;
          this.capsule(ctx, sx, sz, dx / dist, dz / dist, dist, 0.55, 45 * ctx.stats.damageMul);
        }
        const bx = x + fx * len;
        const bz = z + fz * len;
        ctx.zones.spawn(bx, bz, 6.5, 3.2, 48 * ctx.stats.damageMul * ctx.stats.musouPowerMul, 0.5, 1.2, 0.5);
        ctx.effects.spawnTechnique('butterfly', bx, bz, 0, 11, 11, 0.62, 0.96, 1.2, 0.16);
        light(8);
        break;
      }
      case 'kanao': { // 피안주안의 단 한 칼
        const len = 30;
        ctx.effects.spawnTechniqueLine('flower', x - fx * 3, z - fz * 3, x + fx * len, z + fz * len, 3.2, 0.34, 1);
        ctx.effects.spawnSlashArc(x + fx * 13, z + fz * 13, fx, fz, 14, 0.58, 2.2, 0.55, 0.9, 0.38, 'flower');
        this.capsule(ctx, x - fx * 3, z - fz * 3, fx, fz, len + 3, 1.35, 300 * ctx.stats.damageMul);
        light(8);
        break;
      }
      case 'rengoku': { // 제9형 연옥의 단일 화염 회랑
        const len = 31;
        ctx.effects.spawnTechniqueLine('flame', x, z, x + fx * len, z + fz * len, 6.2, 0.52, 1);
        ctx.effects.spawnTechnique('flame', x + fx * len, z + fz * len, Math.atan2(-fz, fx), 15, 15, 0.62, 1, 0, 0.18);
        this.capsule(ctx, x, z, fx, fz, len, 3.25, 300 * ctx.stats.damageMul);
        this.aoe(ctx, x + fx * len, z + fz * len, 7.5, 100 * ctx.stats.damageMul, 12);
        light(12);
        break;
      }
      case 'zenitsu': { // 여섯 잔광이 하나의 극도로 좁은 납도선으로 확정
        const len = 38;
        if (this.activeBranches.includes('zenitsu_thunder_god')) {
          ctx.effects.spawnTechniqueLine('thunder', x - fx * 4, z - fz * 4, x + fx * len, z + fz * len, 3.1, 0.34, 1);
          ctx.effects.spawnChainArc(x - fx * 4, z - fz * 4, x + fx * len, z + fz * len, 3.2, 2.5, 0.38);
          ctx.effects.spawnTechnique('thunder', x + fx * 20, z + fz * 20, Math.atan2(-fz, fx), 18, 7, 0.46, 0.98, 1.8, 0.12);
          this.capsule(ctx, x - fx * 4, z - fz * 4, fx, fz, len + 4, 1.5, 360 * ctx.stats.damageMul);
        } else {
          const sideX = -fz;
          const sideZ = fx;
          for (let k = 0; k < 6; k++) {
            const offset = (k - 2.5) * 0.48;
            const sx = x - fx * 4 + sideX * offset;
            const sz = z - fz * 4 + sideZ * offset;
            ctx.effects.spawnTechniqueLine('thunder', sx, sz, sx + fx * (len + 4), sz + fz * (len + 4), 0.9, 0.2 + k * 0.018, 0.88);
            this.capsule(ctx, sx, sz, fx, fz, len + 4, 0.38, 60 * ctx.stats.damageMul);
          }
        }
        light(10);
        break;
      }
      case 'inosuke': { // 공간식각 끝의 거대한 X자 교차 엄니
        const sideX = -fz;
        const sideZ = fx;
        const ax1 = x - fx * 11 - sideX * 8;
        const az1 = z - fz * 11 - sideZ * 8;
        const ax2 = x - fx * 11 + sideX * 8;
        const az2 = z - fz * 11 + sideZ * 8;
        ctx.effects.spawnTechniqueLine('beast', ax1, az1, x + fx * 11 + sideX * 8, z + fz * 11 + sideZ * 8, 3.1, 0.42, 1);
        ctx.effects.spawnTechniqueLine('beast', ax2, az2, x + fx * 11 - sideX * 8, z + fz * 11 - sideZ * 8, 3.1, 0.42, 1);
        this.capsule(ctx, ax1, az1, (fx * 22 + sideX * 16) / 27.2, (fz * 22 + sideZ * 16) / 27.2, 27.2, 1.8, 180 * ctx.stats.damageMul);
        this.capsule(ctx, ax2, az2, (fx * 22 - sideX * 16) / 27.2, (fz * 22 - sideZ * 16) / 27.2, 27.2, 1.8, 180 * ctx.stats.damageMul);
        light(9);
        break;
      }
      case 'tokito': { // 잔상은 사라지고 실제 절단선 하나만 남는다
        const len = 29;
        for (const off of [-2.4, -1.2, 1.2, 2.4]) {
          const sx = x - fz * off;
          const sz = z + fx * off;
          ctx.effects.spawnTechniqueLine('mist', sx, sz, sx + fx * len * 0.85, sz + fz * len * 0.85, 1.5, 0.38, 0.24);
        }
        ctx.effects.spawnTechniqueLine('mist', x - fx * 5, z - fz * 5, x + fx * len, z + fz * len, 2.5, 0.25, 1);
        this.capsule(ctx, x - fx * 5, z - fz * 5, fx, fz, len + 5, 1.25, 300 * ctx.stats.damageMul);
        light(7);
        break;
      }
      case 'uzui': { // 무작위가 아닌 짧-짧-강의 고정 악보
        // 세 타격은 runUzui의 마지막 0.54초에 시간차로 이미 연주됐다.
        ctx.effects.spawnTechniqueLine('sound', x, z, x + fx * 19, z + fz * 19, 2.2, 0.4, 0.95);
        light(11);
        break;
      }
      case 'sanemi': { // 세 겹 초승달이 전진하는 폭풍 회랑
        const base = Math.atan2(fz, fx);
        for (const off of [-0.24, 0, 0.24]) {
          const a = base + off;
          const dx = Math.cos(a);
          const dz = Math.sin(a);
          ctx.effects.spawnTechniqueLine('wind', x, z, x + dx * 25, z + dz * 25, 3.4, 0.4, 0.96);
          ctx.effects.spawnSlashArc(x + dx * 18, z + dz * 18, dx, dz, 10, 0.75, 0.5, 1.9, 1.0, 0.32, 'wind');
          this.capsule(ctx, x, z, dx, dz, 25, 1.65, 120 * ctx.stats.damageMul);
        }
        light(10);
        break;
      }
      case 'himejima': { // 철구와 도끼 두 궤도가 중앙 사슬 교차점에서 맞물린다
        const sideX = -fz;
        const sideZ = fx;
        for (const side of [-1, 1]) {
          const ax = x - fx * 10 + sideX * side * 7;
          const az = z - fz * 10 + sideZ * side * 7;
          const dx = (fx * 20 - sideX * side * 14) / 24.4;
          const dz = (fz * 20 - sideZ * side * 14) / 24.4;
          ctx.effects.spawnTechniqueLine('stone', ax, az, ax + dx * 24.4, az + dz * 24.4, 3.4, 0.48, 0.98);
          this.capsule(ctx, ax, az, dx, dz, 24.4, 2, 170 * ctx.stats.damageMul);
        }
        ctx.effects.spawnTechnique('stone', x, z, 0, 14, 14, 0.65, 0.98, 0.2, 0.18);
        ctx.effects.spawnTripleShock(x, z, 12, 1.6, 1.3, 0.7);
        this.aoe(ctx, x, z, 7, 140 * ctx.stats.damageMul, 12);
        light(10);
        break;
      }
      default:
        ctx.effects.spawnRing(x, z, 12, crest.r, crest.g, crest.b, 0.6);
        this.aoe(ctx, x, z, 12, 240 * ctx.stats.damageMul, 5);
        light(8);
    }
  }

  // 폭혈 오의 중 한 번이라도 범위 안에 들어온 적에게 혈흔을 남긴다. 적이
  // 쓰러져도 마지막 위치를 보존해 종료 순간 주변 적을 새로 찾지 않는다.
  private captureBloodMarks(ctx: WeaponContext, x: number, z: number): void {
    for (const mark of this.bloodMarks) {
      if (ctx.enemies.alive[mark.enemy] !== 1) continue;
      mark.x = ctx.enemies.x[mark.enemy];
      mark.z = ctx.enemies.z[mark.enemy];
    }
    if (this.bloodMarks.length >= 6) return;
    const nearby = ctx.hash.query(x, z, 28, ctx.scratch);
    for (let k = 0; k < nearby && this.bloodMarks.length < 6; k++) {
      const enemy = ctx.scratch[k];
      if (ctx.enemies.alive[enemy] !== 1 || this.bloodMarks.some((mark) => mark.enemy === enemy)) continue;
      const mark = { enemy, x: ctx.enemies.x[enemy], z: ctx.enemies.z[enemy] };
      this.bloodMarks.push(mark);
      ctx.effects.spawnRing(mark.x, mark.z, 1.6, 2.2, 0.35, 0.85, 0.18);
    }
  }

  private priorityTarget(ctx: WeaponContext): number {
    const aimed = ctx.aimTarget;
    if (aimed >= 0 && ctx.enemies.alive[aimed] === 1) return aimed;
    const radius = 28;
    const n = ctx.hash.query(ctx.px, ctx.pz, radius, ctx.scratch);
    let best = -1;
    let bestD2 = radius * radius;
    for (let i = 0; i < n; i++) {
      const enemy = ctx.scratch[i];
      if (ctx.enemies.alive[enemy] === 0) continue;
      const dx = ctx.enemies.x[enemy] - ctx.px;
      const dz = ctx.enemies.z[enemy] - ctx.pz;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) {
        bestD2 = d2;
        best = enemy;
      }
    }
    return best;
  }

  private movePlayer(ctx: WeaponContext, player: Player, toX: number, toZ: number): boolean {
    const hit = ctx.resolveMovement(player.x, player.z, toX, toZ, player.radius, this.moveOut);
    player.x = this.moveOut.x;
    player.z = this.moveOut.z;
    return hit;
  }

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
      const dealt = resolvedDamage(damage * ctx.stats.musouPowerMul, en.boss[j] === 1, en.groggy[j] === 1, 'musou');
      this.lastCastDamage += dealt;
      const died = en.damageAt(j, dealt);
      if (knockback > 0) {
        const d = Math.sqrt(d2) || 1;
        en.push(j, dx / d, dz / d, knockback);
      }
      if (died) ctx.onKill(j);
    }
  }

  private stunAll(ctx: WeaponContext, cx: number, cz: number, radius: number, dur: number): void {
    const en = ctx.enemies;
    const n = ctx.hash.query(cx, cz, radius, ctx.scratch);
    for (let c = 0; c < n; c++) {
      const j = ctx.scratch[c];
      if (en.alive[j] === 0 || en.boss[j] === 1) continue;
      if (en.stun[j] < dur) en.stun[j] = dur;
    }
  }

  private capsule(ctx: WeaponContext, ax: number, az: number, dx: number, dz: number, len: number, w: number, damage: number): void {
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
      const t = clampSeg(en.x[j], en.z[j], ax, az, bx, bz);
      const px = ax + (bx - ax) * t;
      const pz = az + (bz - az) * t;
      const ex = en.x[j] - px;
      const ez = en.z[j] - pz;
      if (ex * ex + ez * ez > hitR * hitR) continue;
      const dealt = resolvedDamage(damage * ctx.stats.musouPowerMul, en.boss[j] === 1, en.groggy[j] === 1, 'musou');
      this.lastCastDamage += dealt;
      const died = en.damageAt(j, dealt);
      en.push(j, dx, dz, 6);
      if (died) ctx.onKill(j);
    }
  }
}

function clampSeg(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  if (len2 <= 0) return 0;
  let t = ((px - ax) * dx + (pz - az) * dz) / len2;
  if (t < 0) t = 0;
  else if (t > 1) t = 1;
  return t;
}
