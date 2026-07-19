import type { WeaponContext } from './weapons/types';
import type { Player } from './player';
import { PK_ARROW, PK_BUTTERFLY } from './projectiles';

const DURATION = 5.0;
const ENEMY_SLOW = 0.3;

// 대원별 문장 한자 + 테마 광원 색 — 각 호흡법의 정체성.
const CREST: Record<string, { char: string; r: number; g: number; b: number }> = {
  tanjiro: { char: '陽', r: 2.6, g: 1.0, b: 0.3 },   // 히노카미 카구라 — 태양
  tomioka: { char: '水', r: 0.4, g: 1.2, b: 2.4 },   // 물의 호흡
  nezuko: { char: '血', r: 2.4, g: 0.5, b: 0.9 },    // 폭혈 — 혈염
  kanroji: { char: '恋', r: 2.4, g: 0.7, b: 1.4 },   // 사랑의 호흡
  shinobu: { char: '蟲', r: 1.5, g: 0.7, b: 2.2 },   // 벌레의 호흡
  kanao: { char: '花', r: 2.2, g: 0.6, b: 1.0 },     // 꽃의 호흡
  rengoku: { char: '炎', r: 2.6, g: 0.8, b: 0.2 },   // 화염의 호흡
  zenitsu: { char: '雷', r: 2.4, g: 2.0, b: 0.4 },   // 번개의 호흡
  inosuke: { char: '獣', r: 1.0, g: 1.6, b: 1.9 },   // 짐승의 호흡
  tokito: { char: '霞', r: 1.2, g: 1.8, b: 2.0 },    // 안개의 호흡
  uzui: { char: '音', r: 2.2, g: 1.6, b: 0.6 },      // 음의 호흡
  sanemi: { char: '風', r: 0.5, g: 1.9, b: 1.0 },    // 바람의 호흡
  himejima: { char: '岩', r: 1.6, g: 1.3, b: 0.7 },  // 바위의 호흡
  default: { char: '滅', r: 1.5, g: 1.4, b: 1.0 },
};

// 무쌍 게이지 + 대원별 오의. 킬 +1%, 피격 +3%, 콤보 가속. Space로 발동.
// 발동 5초: 적 시간 0.3배(적 dt만), 플레이어 무적, 대원별 호흡 오의, 종료 대형 충격파.
export class Musou {
  gauge = 0; // 0..100
  active = false;
  chargeMul = 1; // 사당 '무쌍 충전' 버프 시 2 (run이 매 프레임 세팅)
  private killRate = 0; // 최근 킬/초 EMA (몰살 구간 충전 체감)
  private chargeLockT = 0; // 종료 후 킬 충전 잠금(연속 체이닝 방지)
  private timer = 0;
  private tick = 0;
  private stormAngle = 0;
  private dashIdx = 0;
  private dashTimer = 0;
  private initDone = false;
  private introDone = false; // 발동 연출(문장/광원) 1회
  public heroMusou: string;
  private readonly onActivateFx: () => void; // 발동 연출(한자/사운드)

  constructor(heroMusou: string, onActivateFx: () => void) {
    this.heroMusou = heroMusou;
    this.onActivateFx = onActivateFx;
  }

  setHero(musouKey: string): void {
    this.heroMusou = musouKey;
  }

  reset(): void {
    this.gauge = 0;
    this.active = false;
    this.timer = 0;
    this.tick = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
    this.initDone = false;
    this.introDone = false;
    this.chargeMul = 1;
    this.killRate = 0;
    this.chargeLockT = 0;
  }

  get ready(): boolean {
    return this.gauge >= 100;
  }

  get enemyTimeScale(): number {
    return this.active ? ENEMY_SLOW : 1;
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
    this.active = true;
    this.timer = DURATION;
    this.tick = 0;
    this.stormAngle = 0;
    this.dashIdx = 0;
    this.dashTimer = 0;
    this.initDone = false;
    this.introDone = false;
    this.gauge = 0;
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

    // 발동 문장 데칼(1회) + 테마 광원이 플레이어를 따라다님.
    const crest = CREST[this.heroMusou] ?? CREST.default;
    if (!this.introDone) {
      this.introDone = true;
      ctx.effects.spawnCrest(player.x, player.z, crest.char, crest.r, crest.g, crest.b, DURATION);
    }
    ctx.effects.spawnMusouLight?.(player.x, player.z, crest.r * 0.32, crest.g * 0.32, crest.b * 0.32, 6.5, 0.07);

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

    if (this.timer <= 0) {
      this.active = false;
      this.chargeLockT = 6;
      // 마무리 대폭발: 시차 3중 충격파 + 대형 링 + 전 화면 대미지
      ctx.effects.spawnTripleShock(player.x, player.z, 30, crest.r, crest.g, crest.b);
      ctx.effects.spawnRing(player.x, player.z, 26, crest.r, crest.g, crest.b, 0.7);
      ctx.effects.spawnMusouLight?.(player.x, player.z, crest.r * 0.6, crest.g * 0.6, crest.b * 0.6, 15, 0.5);
      this.aoe(ctx, player.x, player.z, 30, 400 * ctx.stats.damageMul, 6);
      return true;
    }
    return false;
  }

  // 공통 회전 참격 폭풍(색 지정 폴백/기반).
  private runCommon(ctx: WeaponContext, player: Player, r: number, g: number, b: number): void {
    if (this.tick > 0) return;
    this.tick = 0.1;
    this.stormAngle += 0.9;
    const dx = Math.cos(this.stormAngle);
    const dz = Math.sin(this.stormAngle);
    ctx.effects.spawnSlashArc(player.x, player.z, dx, dz, 7, 1.3, r, g, b, 0.24);
    this.aoe(ctx, player.x, player.z, 7.5, 60 * ctx.stats.damageMul, 0);
  }

  // 탄지로 — 히노카미 카구라·원무: 회전하는 태양 화염륜 + 3방향 화염 참격
  private runTanjiro(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.09;
    this.stormAngle += 0.7;
    ctx.effects.spawnTechniqueMesh('sun', player.x, 0.45, player.z, this.stormAngle, 8, 1.0, 8, 2.6, 1.0, 0.3, 0.9);
    for (let k = 0; k < 3; k++) {
      const a = this.stormAngle + (k / 3) * Math.PI * 2;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 8, 0.8, 2.6, 1.0, 0.3, 0.22);
    }
    ctx.particles.burst(player.x, player.z, 2.6, 1.0, 0.3, 6, 3);
    this.aoe(ctx, player.x, player.z, 8.5, 66 * ctx.stats.damageMul, 5);
  }

  // 기유 — 물의 호흡·나기: 자신을 중심으로 감도는 거대 물 소용돌이
  private runTomioka(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.06;
    this.stormAngle += 0.55;
    const dx = Math.cos(this.stormAngle);
    const dz = Math.sin(this.stormAngle);
    ctx.effects.spawnSlashArc(player.x, player.z, dx, dz, 9.5, 1.5, 0.4, 1.2, 2.4, 0.2);
    ctx.effects.spawnTechniqueMesh('water', player.x, 0.3, player.z, this.stormAngle, 9, 1.0, 9, 0.4, 1.2, 2.4, 0.7);
    ctx.particles.waterSplash(player.x + dx * 8, player.z + dz * 8, 8);
    this.aoe(ctx, player.x, player.z, 9.5, 55 * ctx.stats.damageMul, 5);
  }

  // 네즈코 — 폭혈: 전방위 핏빛 폭발 + 지속 혈염 장판
  private runNezuko(ctx: WeaponContext, player: Player): void {
    if (!this.initDone) {
      this.initDone = true;
      ctx.effects.spawnTripleShock(player.x, player.z, 28, 2.4, 0.5, 0.9);
      ctx.effects.spawnTechniqueMesh('blood', player.x, 0.2, player.z, 0, 12, 1.0, 12, 2.4, 0.4, 0.9, 0.8);
      this.aoe(ctx, player.x, player.z, 30, 90 * ctx.stats.damageMul, 10);
    }
    if (this.tick > 0) return;
    this.tick = 0.35;
    ctx.zones.spawn(player.x, player.z, 10, 0.5, 40 * ctx.stats.damageMul, 2.4, 0.4, 0.9);
    ctx.effects.spawnRing(player.x, player.z, 13, 2.4, 0.5, 0.9, 0.4);
    this.aoe(ctx, player.x, player.z, 24, 60 * ctx.stats.damageMul, 3);
  }

  // 미츠리 — 사랑의 호흡: 유연한 채찍검이 회전하며 광범위를 휘감음
  private runKanroji(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.07;
    this.stormAngle += 0.9;
    for (let k = 0; k < 2; k++) {
      const a = this.stormAngle + k * Math.PI;
      ctx.effects.spawnTechniqueMesh('ribbon', player.x, 0.4, player.z, a, 9, 0.9, 9, 2.4, 0.7, 1.4, 0.85);
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 9, 0.5, 2.4, 0.7, 1.4, 0.2);
    }
    this.aoe(ctx, player.x, player.z, 9.5, 58 * ctx.stats.damageMul, 4);
  }

  // 시노부 — 벌레의 호흡: 전방위 독나비 폭풍 + 독 장판
  private runShinobu(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.1;
    this.stormAngle += 0.5;
    const count = 10;
    const d = 22 * ctx.stats.damageMul;
    for (let k = 0; k < count; k++) {
      const a = this.stormAngle + (k / count) * Math.PI * 2;
      ctx.projectiles.spawn(
        player.x, player.z, Math.cos(a), Math.sin(a), 15, d, 0.5, 3, 1.6,
        PK_BUTTERFLY, 1.3, 0.5, 2.0, 1.5, 0.9,
      );
    }
    ctx.particles.butterflyPoison(player.x, player.z, 8);
    if (this.dashTimer <= 0) {
      this.dashTimer = 0.6;
      ctx.zones.spawn(player.x, player.z, 8, 0.7, 30 * ctx.stats.damageMul, 0.4, 1.2, 0.5);
    }
    this.aoe(ctx, player.x, player.z, 6, 30 * ctx.stats.damageMul, 2);
  }

  // 카나오 — 꽃의 호흡·피안주안: 집중 참격 원 + 방사 나비
  private runKanao(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.1;
    this.stormAngle += 0.7;
    for (let k = 0; k < 3; k++) {
      const a = this.stormAngle + (k / 3) * Math.PI * 2;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 7, 0.7, 2.2, 0.6, 1.0, 0.2);
    }
    this.aoe(ctx, player.x, player.z, 7.5, 60 * ctx.stats.damageMul, 4);
    if (this.dashTimer <= 0) {
      this.dashTimer = 0.7;
      const count = 10;
      const d = 26 * ctx.stats.damageMul;
      for (let k = 0; k < count; k++) {
        const a = this.stormAngle + (k / count) * Math.PI * 2;
        ctx.projectiles.spawn(
          player.x, player.z, Math.cos(a), Math.sin(a), 16, d, 0.5, 3, 1.5,
          PK_BUTTERFLY, 2.0, 0.6, 1.4, 1.5, 0.9,
        );
      }
    }
  }

  // 렌고쿠 — 화염의 호흡·연옥: 조작 가능한 무적 화염 돌진(이동은 run의 입력) + 화염벽
  private runRengoku(ctx: WeaponContext, player: Player): void {
    ctx.particles.dust(player.x, player.z);
    if (this.tick > 0) return;
    this.tick = 0.28;
    ctx.effects.spawnFireWall(player.x, player.z, player.faceX, player.faceZ, 6, 1.5, 0.5);
    ctx.effects.spawnTechniqueMesh('flame', player.x, 0.5, player.z, Math.atan2(-player.faceZ, player.faceX), 6, 1.2, 3, 2.6, 0.8, 0.2, 0.85);
    ctx.effects.spawnRing(player.x, player.z, 2.6, 2.6, 0.9, 0.3, 0.3);
    this.aoe(ctx, player.x, player.z, 7, 85 * ctx.stats.damageMul * 2.3, 6);
  }

  // 젠이츠 — 벽력일섬·육련: 가장 가까운 적으로 번개 순보하며 참격 연쇄
  private runZenitsu(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.14;
    const t = ctx.enemies.randomAlive();
    if (t < 0) { this.runCommon(ctx, player, 2.4, 2.0, 0.4); return; }
    const x = ctx.enemies.x[t];
    const z = ctx.enemies.z[t];
    const dx = x - player.x;
    const dz = z - player.z;
    const dd = Math.hypot(dx, dz) || 1;
    ctx.effects.spawnChainArc(player.x, player.z, x, z, 2.6, 2.2, 0.5);
    // 적 바로 앞으로 순보(무적)
    player.x = x - (dx / dd) * 1.4;
    player.z = z - (dz / dd) * 1.4;
    player.faceX = dx / dd;
    player.faceZ = dz / dd;
    ctx.effects.spawnLightning(x, z, 2.6, 2.2, 0.5, 5);
    ctx.effects.spawnTechniqueMesh('thunder', player.x, 0.4, player.z, Math.atan2(-dz, dx), 4, 1.0, 1.2, 2.6, 2.2, 0.5, 0.9);
    ctx.particles.lightningSpark(x, z, 10);
    this.aoe(ctx, x, z, 4.2, 92 * ctx.stats.damageMul, 3);
  }

  // 이노스케 — 짐승의 호흡: 8방향 광란 이도류 돌격 + 손톱 참격
  private runInosuke(ctx: WeaponContext, player: Player): void {
    this.runCommon(ctx, player, 1.0, 1.6, 1.9); // 주변 난도질 유지
    if (this.dashTimer > 0) return;
    this.dashTimer = 0.45;
    const a = (this.dashIdx / 8) * Math.PI * 2 + this.stormAngle * 0.1;
    this.dashIdx++;
    const dx = Math.cos(a);
    const dz = Math.sin(a);
    player.x += dx * 3.4;
    player.z += dz * 3.4;
    player.faceX = dx;
    player.faceZ = dz;
    ctx.effects.spawnTechniqueMesh('claw', player.x, 0.4, player.z, Math.atan2(-dz, dx), 4, 1.0, 2, 1.0, 1.5, 1.8, 0.9);
    this.capsule(ctx, player.x, player.z, dx, dz, 9, 1.3, 90 * ctx.stats.damageMul);
  }

  // 무이치로 — 안개의 호흡: 적 사이를 순보하며 다중 참격(안개 잔상)
  private runTokito(ctx: WeaponContext, player: Player): void {
    if (this.dashTimer > 0) {
      if (this.tick <= 0) {
        this.tick = 0.1;
        this.aoe(ctx, player.x, player.z, 6, 40 * ctx.stats.damageMul, 2);
      }
      return;
    }
    this.dashTimer = 0.3;
    const t = ctx.enemies.randomAlive();
    const tx = t >= 0 ? ctx.enemies.x[t] : player.x + (Math.random() - 0.5) * 12;
    const tz = t >= 0 ? ctx.enemies.z[t] : player.z + (Math.random() - 0.5) * 12;
    const dx = tx - player.x;
    const dz = tz - player.z;
    const dd = Math.hypot(dx, dz) || 1;
    for (let s = 0; s < 3; s++) ctx.effects.spawnFlameTrail(player.x - (dx / dd) * s * 1.5, player.z - (dz / dd) * s * 1.5, 1.2, 1.8, 2.0);
    player.x = tx;
    player.z = tz;
    player.faceX = dx / dd;
    player.faceZ = dz / dd;
    ctx.effects.spawnSlashArc(player.x, player.z, dx / dd, dz / dd, 6, 1.4, 1.2, 1.8, 2.0, 0.2);
    this.aoe(ctx, player.x, player.z, 6, 72 * ctx.stats.damageMul, 3);
  }

  // 우즈이 — 음의 호흡·보허무: 폭발 리듬 충격파(본체 + 주변 2발)
  private runUzui(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.5; // 리듬
    ctx.effects.spawnTripleShock(player.x, player.z, 12, 2.2, 1.6, 0.6);
    ctx.effects.spawnRing(player.x, player.z, 10, 2.2, 1.6, 0.6, 0.4);
    ctx.effects.spawnFlash(player.x, player.z, 2.2, 1.6, 0.6, 6);
    this.aoe(ctx, player.x, player.z, 12, 110 * ctx.stats.damageMul, 8);
    for (let m = 0; m < 2; m++) {
      const a = Math.random() * Math.PI * 2;
      const r = 5 + Math.random() * 8;
      const mx = player.x + Math.cos(a) * r;
      const mz = player.z + Math.sin(a) * r;
      ctx.effects.spawnRing(mx, mz, 5, 2.2, 1.4, 0.5, 0.3);
      this.aoe(ctx, mx, mz, 5, 70 * ctx.stats.damageMul, 4);
    }
  }

  // 사네미 — 바람의 호흡: 회오리 참격 폭풍(2엽 회전 + 확산 링)
  private runSanemi(ctx: WeaponContext, player: Player): void {
    if (this.tick > 0) return;
    this.tick = 0.07;
    this.stormAngle += 1.1;
    for (let k = 0; k < 2; k++) {
      const a = this.stormAngle + k * Math.PI;
      ctx.effects.spawnSlashArc(player.x, player.z, Math.cos(a), Math.sin(a), 8, 1.0, 0.5, 1.9, 1.0, 0.2);
    }
    ctx.effects.spawnRing(player.x, player.z, 7 + (this.stormAngle % 2), 0.5, 1.9, 1.0, 0.15);
    this.aoe(ctx, player.x, player.z, 8.5, 52 * ctx.stats.damageMul, 5);
  }

  // 히메지마 — 바위의 호흡: 전 화면 스턴 후 철구+도끼 강타 연타
  private runHimejima(ctx: WeaponContext, player: Player): void {
    if (!this.initDone) {
      this.initDone = true;
      this.stunAll(ctx, player.x, player.z, 30, 3.0);
      ctx.effects.spawnTripleShock(player.x, player.z, 28, 1.6, 1.3, 0.7);
      this.aoe(ctx, player.x, player.z, 30, 100 * ctx.stats.damageMul, 12);
    }
    if (this.tick > 0) return;
    this.tick = 0.45; // 강타 리듬
    const a = Math.random() * Math.PI * 2;
    const r = 4 + Math.random() * 10;
    const mx = player.x + Math.cos(a) * r;
    const mz = player.z + Math.sin(a) * r;
    ctx.effects.spawnRing(mx, mz, 6, 1.6, 1.3, 0.7, 0.4);
    ctx.effects.spawnFlash(mx, mz, 1.6, 1.3, 0.7, 5);
    for (let k = 0; k < 10; k++) {
      const aa = (k / 10) * Math.PI * 2;
      ctx.particles.dust(mx + Math.cos(aa) * 2, mz + Math.sin(aa) * 2);
    }
    this.aoe(ctx, mx, mz, 7, 120 * ctx.stats.damageMul, 6);
    this.aoe(ctx, player.x, player.z, 24, 40 * ctx.stats.damageMul, 2);
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
      const died = en.damageAt(j, damage);
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
      const died = en.damageAt(j, damage);
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
