import { Scene } from 'three';
import type { Atlas } from '../gfx/atlas';
import type { CameraRig } from '../gfx/camera';
import type { Input } from '../core/input';
import { Ground } from '../gfx/ground';
import { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { EffectsSystem } from '../gfx/effects';
import { ParticleSystem } from '../gfx/particles';
import { DamageText } from '../gfx/damageText';
import { Labels } from '../gfx/labels';
import { Player } from './player';
import { EnemyPool, ENEMY_CAP, SHEET_SGRADE, SHEET_APRIORITY } from './enemies';
import { Spawner } from './spawner';
import { SpatialHash } from './collision';
import { GemPool } from './pickups';
import { ProjectilePool } from './projectiles';
import { ZonePool } from './zones';
import { EnemyProjectilePool } from './enemyProjectiles';
import { TreasurePool } from './treasure';
import { Combo } from './combo';
import { Musou } from './musou';
import { Boss } from './boss';
import type { Weapon, WeaponContext } from './weapons/types';
import { createWeapon } from './weapons/roster';
import { LevelUp } from './levelup';
import type { CardView } from './levelup';
import { Hud } from '../ui/hud';
import type { HudState } from '../ui/hud';
import { HEROES } from '../data/heroes';
import { WEAPON_DEFS, EVOLUTIONS } from '../data/weapons';
import { PASSIVE_DEFS, PASSIVE_BY_ID } from '../data/passives';
import { rng } from '../core/rng';

type State = 'play' | 'levelup' | 'paused' | 'dead' | 'victory';

const MAX_WEAPONS = 6;
const MAX_PASSIVES = 6;
const REROLL_COST = 50;
const RUN_LENGTH = 600; // 10분

type Choice =
  | { kind: 'newWeapon'; id: string }
  | { kind: 'upWeapon'; id: string }
  | { kind: 'newPassive'; id: string }
  | { kind: 'upPassive'; id: string }
  | { kind: 'reward'; id: 'heal' | 'gold' | 'xp' };

// 씬 상태머신 훅: Phase 3에서 Title→Select→Run→Result가 이 위에 붙는다.
export class Run {
  readonly scene = new Scene();

  private readonly rig: CameraRig;
  private readonly input: Input;
  private readonly atlas: Atlas;

  private readonly ground: Ground;
  private readonly soldiersR: InstancedSpriteRenderer;
  private readonly variantsR: InstancedSpriteRenderer;
  private readonly sgradeR: InstancedSpriteRenderer;
  private readonly apriorityR: InstancedSpriteRenderer;
  private readonly shadowR: ShadowRenderer;
  private readonly effects: EffectsSystem;
  private readonly particles: ParticleSystem;
  private readonly damageText: DamageText;
  private readonly labels: Labels;

  private readonly player: Player;
  private readonly enemies = new EnemyPool();
  private readonly spawner: Spawner;
  private readonly hash = new SpatialHash();
  private readonly gems: GemPool;
  private readonly projectiles: ProjectilePool;
  private readonly zones: ZonePool;
  private readonly enemyProj: EnemyProjectilePool;
  private readonly treasure: TreasurePool;
  private weapons: Weapon[];
  private passives: Record<string, number> = {};

  private readonly combo: Combo;
  private readonly musou: Musou;
  private readonly boss: Boss;

  private readonly hud = new Hud();
  private readonly levelup = new LevelUp();
  private readonly overlay: HTMLDivElement;

  private state: State = 'play';
  private gameTime = 0;
  private kills = 0;
  private level = 1;
  private xp = 0;
  private nextXp = 5 + 1 * 10;
  private pendingLevels = 0;
  private gold = 0;
  private bossFlags = { b3: false, b6: false, b9: false };
  private frameKills = 0;
  private rerolledThisLevel = false;

  // 히트스탑: 시뮬 dt만 스케일, 연출/카메라는 실제 dt 유지 (game-feel)
  private timeScale = 1;
  private hitstopRemaining = 0;

  // 무쌍 포스트 연출 (main이 읽어 파이프라인에 전달)
  musouStrength = 0;
  renderTime = 0;

  private readonly scratch: number[] = [];
  private readonly ctx: WeaponContext;
  private readonly damageFlash: HTMLDivElement;
  private curChoices: Choice[] = [];

  constructor(atlas: Atlas, rig: CameraRig, input: Input) {
    this.atlas = atlas;
    this.rig = rig;
    this.input = input;

    this.ground = new Ground(this.scene);
    this.soldiersR = new InstancedSpriteRenderer(atlas.soldiers, ENEMY_CAP);
    this.variantsR = new InstancedSpriteRenderer(atlas.variants, ENEMY_CAP);
    this.sgradeR = new InstancedSpriteRenderer(atlas.sgrade, 48);
    this.apriorityR = new InstancedSpriteRenderer(atlas.apriority, 48);
    this.shadowR = new ShadowRenderer(ENEMY_CAP + 1);
    this.scene.add(
      this.soldiersR.mesh,
      this.variantsR.mesh,
      this.sgradeR.mesh,
      this.apriorityR.mesh,
      this.shadowR.mesh,
    );

    this.effects = new EffectsSystem(this.scene);
    this.particles = new ParticleSystem(this.scene);
    this.damageText = new DamageText(this.scene);
    this.labels = new Labels(this.scene);
    this.gems = new GemPool(this.scene);
    this.projectiles = new ProjectilePool(this.scene);
    this.zones = new ZonePool(this.scene);
    this.enemyProj = new EnemyProjectilePool(this.scene);
    this.treasure = new TreasurePool(this.scene);

    const hero = HEROES.zhaoyun;
    this.player = new Player(atlas, hero);
    this.scene.add(this.player.mesh);
    this.spawner = new Spawner(atlas, this.enemies);
    this.weapons = [createWeapon(hero.startWeapon)];

    this.combo = new Combo(
      (text) => this.hud.banner(text, '#e8c667', 60),
      () => this.hud.punchCombo(),
    );
    this.musou = new Musou(hero.musou, () => this.hud.banner('無雙', '#ffe9a8', 120, 1200));
    this.boss = new Boss(atlas, (name, hanja) =>
      this.hud.banner(`${name} 등장 ${hanja}`, '#e85c4a', 44, 1800),
    );

    // 재사용 무기 컨텍스트 (프레임당 할당 회피)
    this.ctx = {
      dt: 0,
      gameTime: 0,
      px: 0,
      pz: 0,
      faceX: 0,
      faceZ: 1,
      hash: this.hash,
      enemies: this.enemies,
      effects: this.effects,
      damageText: this.damageText,
      projectiles: this.projectiles,
      zones: this.zones,
      particles: this.particles,
      stats: this.player.stats,
      rng,
      onKill: (i: number) => this.handleKill(i),
      scratch: this.scratch,
    };

    // 낙뢰 화면 미세 플래시 훅
    this.effects.screenFlash = (i: number) => this.flashScreen(i);

    this.overlay = document.createElement('div');
    this.overlay.style.cssText = [
      'position:fixed',
      'inset:0',
      'display:none',
      'flex-direction:column',
      'align-items:center',
      'justify-content:center',
      'gap:16px',
      'background:rgba(6,7,12,0.8)',
      'z-index:35',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
      'text-align:center',
    ].join(';');
    document.body.appendChild(this.overlay);

    // 피격/사망 데미지 비네트 (붉은 방사형)
    this.damageFlash = document.createElement('div');
    this.damageFlash.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'opacity:0',
      'z-index:30',
      'background:radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(180,30,24,0.85) 100%)',
    ].join(';');
    document.body.appendChild(this.damageFlash);
  }

  private flashDamage(peak: number, durationMs: number): void {
    this.damageFlash.animate([{ opacity: peak }, { opacity: 0 }], {
      duration: durationMs,
      easing: 'ease-out',
    });
  }

  // 낙뢰/무쌍 순간 흰 화면 미세 플래시 (WAAPI 짧게)
  private flashScreen(intensity: number): void {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:31;background:rgba(200,220,255,1);';
    document.body.appendChild(el);
    el.animate([{ opacity: intensity }, { opacity: 0 }], { duration: 120, easing: 'ease-out' }).onfinish =
      () => el.remove();
  }

  private hitstop(durationMs: number, scale = 0.05): void {
    this.hitstopRemaining = Math.max(this.hitstopRemaining, durationMs / 1000);
    this.timeScale = scale;
  }

  start(): void {
    this.restart();
  }

  private restart(): void {
    this.enemies.reset();
    this.gems.reset();
    this.projectiles.reset();
    this.zones.reset();
    this.enemyProj.reset();
    this.treasure.reset();
    this.labels.reset();
    this.spawner.reset();
    this.combo.reset();
    this.musou.reset();
    this.boss.active = false;
    this.boss.idx = -1;
    this.passives = {};
    this.player.reset(this.passives);
    this.weapons = [createWeapon(this.player.hero.startWeapon)];
    this.gameTime = 0;
    this.kills = 0;
    this.level = 1;
    this.xp = 0;
    this.nextXp = 5 + 1 * 10;
    this.pendingLevels = 0;
    this.gold = 0;
    this.bossFlags = { b3: false, b6: false, b9: false };
    this.timeScale = 1;
    this.hitstopRemaining = 0;
    this.musouStrength = 0;
    this.state = 'play';
    this.overlay.style.display = 'none';
  }

  update(dt: number): void {
    this.renderTime += dt;

    // 상태 전환 입력
    if (this.state === 'dead' || this.state === 'victory') {
      if (this.input.consumePressed('KeyR')) this.restart();
      return;
    }
    if (this.state === 'levelup') {
      if (this.input.consumePressed('Digit1')) this.pickCard(0);
      else if (this.input.consumePressed('Digit2')) this.pickCard(1);
      else if (this.input.consumePressed('Digit3')) this.pickCard(2);
      return;
    }
    if (this.input.consumePressed('Escape') || this.input.consumePressed('KeyP')) {
      this.togglePause();
    }
    if (this.state === 'paused') return;

    // 무쌍 발동
    if (this.input.consumePressed('Space') && this.musou.activate()) {
      this.rig.addTrauma(0.5);
      this.flashScreen(0.35);
    }

    // 히트스탑: 실제 시간 감쇠, 시뮬 dt만 스케일
    if (this.hitstopRemaining > 0) {
      this.hitstopRemaining -= dt;
      if (this.hitstopRemaining <= 0) this.timeScale = 1;
    }
    const gdt = dt * this.timeScale;
    const edt = gdt * this.musou.enemyTimeScale; // 적 전용 dt (무쌍 슬로우)
    this.frameKills = 0;

    // === 시뮬레이션 ===
    this.gameTime += gdt;
    this.player.musouInvuln = this.musou.active;
    this.player.update(gdt, this.input);

    // 보스 스케줄
    this.checkBossSpawn();

    this.spawner.update(edt, this.gameTime, this.player.x, this.player.z);
    this.spawner.setBossActive(this.boss.active);

    // 분리용 해시 (이동 전)
    this.hash.clear();
    this.enemies.insertAll(this.hash);
    this.enemies.update(edt, this.player.x, this.player.z, this.hash, this.enemyProj);

    // ctx 갱신
    this.ctx.dt = gdt;
    this.ctx.gameTime = this.gameTime;
    this.ctx.px = this.player.x;
    this.ctx.pz = this.player.z;
    this.ctx.faceX = this.player.faceX;
    this.ctx.faceZ = this.player.faceZ;

    // 보스 패턴 (적 dt)
    this.ctx.dt = edt;
    this.boss.update(edt, this.ctx, this.enemyProj, this.player.x, this.player.z);
    this.ctx.dt = gdt;

    // 이동 후 해시 재구성 (무기/접촉 판정)
    this.hash.clear();
    this.enemies.insertAll(this.hash);

    // 무기
    for (let i = 0; i < this.weapons.length; i++) this.weapons[i].update(this.ctx);
    this.projectiles.update(
      gdt, this.player.x, this.player.z, this.enemies, this.hash,
      this.damageText, this.ctx.onKill, this.particles, this.scratch,
    );
    this.zones.update(gdt, this.enemies, this.hash, this.damageText, this.ctx.onKill, this.particles, this.scratch);

    // 무쌍 난무 (실제 dt로 진행, 종료 시 마무리 충격파)
    this.ctx.dt = dt;
    this.musou.update(dt, this.ctx, this.player);
    this.ctx.dt = gdt;

    // 적 투사체 (적 dt)
    this.enemyProj.update(edt, this.player.x, this.player.z, this.player.radius, this.onPlayerHit);

    // 접촉 대미지
    this.contactDamage();

    // 대량 처치 히트스탑
    if (this.frameKills >= 8) {
      this.hitstop(30, 0.08);
      this.rig.addTrauma(0.35);
    }

    // 픽업
    this.gems.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onCollect);
    this.treasure.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onTreasure);

    // 연출 (실제 dt)
    this.combo.update(gdt);
    this.effects.update(dt);
    this.particles.update(dt);
    this.damageText.update(dt);
    this.ground.update(dt, this.player.x, this.player.z);
    this.rig.update(dt, this.player.x, this.player.z);

    // 무쌍 포스트 연출 세기 부드럽게
    const target = this.musou.active ? 0.9 : 0;
    this.musouStrength += (target - this.musouStrength) * Math.min(1, dt * 6);

    // 렌더 버퍼
    this.renderSprites();
    this.updateLabels();

    // 레벨업 대기
    if (this.pendingLevels > 0 && this.state === 'play') this.showNextLevelUp();

    // 종료 판정
    if (this.player.dead) this.enterDead();
    else if (this.gameTime >= RUN_LENGTH) this.enterVictory();

    this.hud.update(this.buildHudState());
  }

  private buildHudState(): HudState {
    return {
      time: this.gameTime,
      kills: this.kills,
      level: this.level,
      xp: this.xp,
      nextXp: this.nextXp,
      hp: this.player.hp,
      maxHp: this.player.maxHp,
      musouPct: this.musou.gauge,
      musouReady: this.musou.ready,
      combo: this.combo.count,
      bossActive: this.boss.active,
      bossName: this.boss.name,
      bossHanja: this.boss.hanja,
      bossFrac: this.boss.hpFrac(this.ctx),
    };
  }

  private checkBossSpawn(): void {
    if (this.boss.active) return;
    if (!this.bossFlags.b3 && this.gameTime >= 180) {
      this.bossFlags.b3 = true;
      this.boss.spawn('yuanshao', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
    } else if (!this.bossFlags.b6 && this.gameTime >= 360) {
      this.bossFlags.b6 = true;
      this.boss.spawn('dongzhuo', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
    } else if (!this.bossFlags.b9 && this.gameTime >= 540) {
      this.bossFlags.b9 = true;
      this.boss.spawn('lvbu', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
    }
  }

  private renderSprites(): void {
    this.shadowR.begin();
    this.shadowR.push(this.player.x, this.player.z, this.player.radius * 1.6);
    this.enemies.render(
      this.atlas, this.soldiersR, this.variantsR, this.sgradeR, this.apriorityR, this.shadowR,
    );
    this.shadowR.end();
    this.gems.render();
    this.projectiles.render(this.renderTime);
    this.zones.render(this.renderTime);
    this.enemyProj.render(this.renderTime);
    this.treasure.render();
  }

  // 엘리트/보스 머리 위 이름표 갱신 (specials 리스트 사용, 죽은 항목 지연 제거)
  private updateLabels(): void {
    const en = this.enemies;
    const sp = en.specials;
    this.labels.begin();
    for (let k = sp.length - 1; k >= 0; k--) {
      const i = sp[k];
      if (en.alive[i] === 0 || en.labels[i] === null) {
        sp.splice(k, 1);
        continue;
      }
      this.labels.place(en.labels[i]!, en.x[i], en.scale[i] * 1.05, en.z[i]);
    }
    this.labels.end();
  }

  private contactDamage(): void {
    const px = this.player.x;
    const pz = this.player.z;
    const n = this.hash.query(px, pz, this.player.radius + 1.8, this.scratch);
    let maxDmg = 0;
    for (let c = 0; c < n; c++) {
      const j = this.scratch[c];
      if (this.enemies.alive[j] === 0) continue;
      const dx = px - this.enemies.x[j];
      const dz = pz - this.enemies.z[j];
      const rr = this.player.radius + this.enemies.radius[j];
      if (dx * dx + dz * dz <= rr * rr) {
        if (this.enemies.damage[j] > maxDmg) maxDmg = this.enemies.damage[j];
      }
    }
    if (maxDmg > 0 && this.player.takeDamage(maxDmg * 0.5)) {
      this.hitstop(70, 0.05);
      this.rig.addTrauma(0.5);
      this.flashDamage(0.45, 320);
      this.musou.addHit();
    }
  }

  private readonly onPlayerHit = (dmg: number): boolean => {
    if (this.player.takeDamage(dmg)) {
      this.rig.addTrauma(0.4);
      this.flashDamage(0.4, 300);
      this.musou.addHit();
    }
    return true;
  };

  private handleKill(i: number): void {
    const en = this.enemies;
    const x = en.x[i];
    const z = en.z[i];
    if (en.boss[i] === 1) {
      // 보스 처치: 대형 폭발 + 보물상자 + 큰 보상
      this.particles.burst(x, z, 2.6, 1.6, 0.7, 60, 8);
      this.effects.spawnRing(x, z, 16, 2.4, 1.6, 0.8, 0.7);
      this.effects.spawnRing(x, z, 10, 2.2, 1.2, 2.0, 0.5);
      this.treasure.spawn(x, z, true);
      this.hitstop(120, 0.05);
      this.rig.addTrauma(0.9);
      this.flashScreen(0.4);
      this.hud.banner('討伐', '#e8c667', 90, 1600);
      this.gold += Math.round(300 * this.player.stats.goldMul);
      this.kills++;
      en.kill(i);
      return;
    }
    if (en.elite[i] === 1) {
      this.particles.burst(x, z, 2.4, 1.4, 0.7, 26, 6);
      this.effects.spawnRing(x, z, 6, 2.2, 1.6, 0.8, 0.5);
      this.treasure.spawn(x, z, false);
      this.hitstop(60, 0.06);
      this.rig.addTrauma(0.4);
      this.gold += Math.round(50 * this.player.stats.goldMul);
      this.kills++;
      en.kill(i);
      return;
    }
    // 일반: 사망 파티클 버스트(적 틴트) + 젬
    this.particles.burst(x, z, 2.2 * en.tr[i], 1.3 * en.tg[i], 0.5 * en.tb[i], 14, 4.5);
    this.gems.spawn(x, z, en.gemValue[i]);
    this.gold += this.player.stats.goldMul; // 소량 누적(리롤용)
    this.kills++;
    this.frameKills++;
    const bonus = this.combo.onKill();
    if (bonus > 0) this.xp += bonus * this.player.stats.xpMul;
    this.musou.addKill(this.combo.count);
    this.rig.punchFov(-0.5); // 미세 펀치줌
    en.kill(i);
  }

  private readonly onCollect = (value: number): void => {
    this.xp += value * this.player.stats.xpMul;
    this.particles.emit(this.player.x, 1.0, this.player.z, 0, 1.5, 0, 0.4, 0.8, 2.2, 0.7, 0.4, 3, 0.9);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = 5 + this.level * 10;
      this.pendingLevels++;
      this.hud.punchLevel();
    }
  };

  // 보물상자 획득: 진화 우선, 없으면 고급 보상.
  private readonly onTreasure = (boss: boolean): void => {
    this.effects.spawnRing(this.player.x, this.player.z, 5, 2.6, 2.0, 0.8, 0.5);
    const evo = this.tryEvolve();
    if (evo) {
      this.hud.banner(`진화! ${evo}`, '#ff9a3c', 56, 1800);
      return;
    }
    // 고급 보상: 회복 + 골드 + 경험치
    this.player.heal(this.player.maxHp * (boss ? 0.6 : 0.35));
    this.gold += Math.round((boss ? 200 : 80) * this.player.stats.goldMul);
    this.xp += (boss ? this.nextXp * 1.5 : this.nextXp * 0.6) * this.player.stats.xpMul;
    this.hud.banner(boss ? '보물 寶物' : '보상 報償', '#9affc0', 48, 1400);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = 5 + this.level * 10;
      this.pendingLevels++;
    }
  };

  // 진화 가능하면 실행하고 진화 무기 이름 반환, 아니면 null.
  private tryEvolve(): string | null {
    for (const rule of EVOLUTIONS) {
      const w = this.weapons.find((x) => x.id === rule.from);
      if (!w || w.level < 8) continue;
      if ((this.passives[rule.passive] ?? 0) < 1) continue;
      if (this.weapons.some((x) => x.id === rule.to)) continue;
      const idx = this.weapons.indexOf(w);
      this.weapons[idx] = createWeapon(rule.to);
      this.projectiles.clearOrbits(); // 팔진도 진화 대비 정리
      this.effects.spawnRing(this.player.x, this.player.z, 9, 2.8, 1.6, 2.4, 0.8);
      return WEAPON_DEFS[rule.to].name;
    }
    return null;
  }

  // === 레벨업 카드 ===
  private showNextLevelUp(): void {
    if (this.pendingLevels <= 0) {
      this.state = 'play';
      return;
    }
    this.pendingLevels--;
    this.state = 'levelup';
    this.rerolledThisLevel = false;
    this.openCards();
  }

  private openCards(): void {
    this.curChoices = this.buildChoices();
    const views = this.curChoices.map((c) => this.cardView(c));
    this.levelup.open(
      views,
      Math.floor(this.gold),
      !this.rerolledThisLevel && this.gold >= REROLL_COST,
      (i) => this.pickCard(i),
      () => this.reroll(),
    );
  }

  private reroll(): void {
    if (this.rerolledThisLevel || this.gold < REROLL_COST) return;
    this.gold -= REROLL_COST;
    this.rerolledThisLevel = true;
    this.openCards();
  }

  private buildChoices(): Choice[] {
    const pool: Choice[] = [];
    for (const w of this.weapons) {
      if (w.level < 8 && WEAPON_DEFS[w.id] && !WEAPON_DEFS[w.id].evolution) {
        pool.push({ kind: 'upWeapon', id: w.id });
      }
    }
    for (const id in this.passives) {
      const def = PASSIVE_BY_ID[id];
      if (def && this.passives[id] < def.maxLevel) pool.push({ kind: 'upPassive', id });
    }
    if (this.weapons.length < MAX_WEAPONS) {
      for (const id in WEAPON_DEFS) {
        const def = WEAPON_DEFS[id];
        if (def.evolution) continue;
        if (this.weapons.some((w) => w.id === id)) continue;
        pool.push({ kind: 'newWeapon', id });
      }
    }
    if (Object.keys(this.passives).length < MAX_PASSIVES) {
      for (const def of PASSIVE_DEFS) {
        if (this.passives[def.id] === undefined) pool.push({ kind: 'newPassive', id: def.id });
      }
    }
    // 셔플 후 3개
    for (let i = pool.length - 1; i > 0; i--) {
      const j = rng.int(i + 1);
      const t = pool[i];
      pool[i] = pool[j];
      pool[j] = t;
    }
    const out = pool.slice(0, 3);
    while (out.length < 3) {
      const r = (['heal', 'gold', 'xp'] as const)[out.length % 3];
      out.push({ kind: 'reward', id: r });
    }
    return out;
  }

  private cardView(c: Choice): CardView {
    if (c.kind === 'newWeapon') {
      const d = WEAPON_DEFS[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc, tag: '무기 · 신규', accent: '#e8c667' };
    }
    if (c.kind === 'upWeapon') {
      const d = WEAPON_DEFS[c.id];
      const w = this.weapons.find((x) => x.id === c.id)!;
      return { title: d.name, hanja: d.hanja, desc: d.desc, tag: `무기 강화 Lv${w.level}→${w.level + 1}`, accent: '#e8a94a' };
    }
    if (c.kind === 'newPassive') {
      const d = PASSIVE_BY_ID[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc(1), tag: '패시브 · 신규', accent: '#7ec8ff' };
    }
    if (c.kind === 'upPassive') {
      const d = PASSIVE_BY_ID[c.id];
      const lvl = this.passives[c.id];
      return { title: d.name, hanja: d.hanja, desc: d.desc(lvl + 1), tag: `패시브 Lv${lvl}→${lvl + 1}`, accent: '#7ec8ff' };
    }
    // reward
    const map = {
      heal: { title: '재정비', hanja: '再整備', desc: '체력 50% 회복' },
      gold: { title: '군자금', hanja: '軍資金', desc: '골드 +200' },
      xp: { title: '병법 수련', hanja: '兵法修鍊', desc: '경험치 대량 획득' },
    };
    const m = map[c.id];
    return { title: m.title, hanja: m.hanja, desc: m.desc, tag: '보상', accent: '#9affc0' };
  }

  private pickCard(index: number): void {
    if (!this.levelup.active && this.state !== 'levelup') return;
    const c = this.curChoices[index];
    if (!c) return;
    this.applyChoice(c);
    this.levelup.close();
    this.showNextLevelUp();
  }

  private applyChoice(c: Choice): void {
    if (c.kind === 'newWeapon') {
      this.weapons.push(createWeapon(c.id));
    } else if (c.kind === 'upWeapon') {
      const w = this.weapons.find((x) => x.id === c.id);
      if (w) w.level = Math.min(8, w.level + 1);
    } else if (c.kind === 'newPassive') {
      this.passives[c.id] = 1;
      this.player.recomputeStats(this.passives);
    } else if (c.kind === 'upPassive') {
      this.passives[c.id]++;
      this.player.recomputeStats(this.passives);
    } else {
      if (c.id === 'heal') this.player.heal(this.player.maxHp * 0.5);
      else if (c.id === 'gold') this.gold += 200;
      else this.xp += this.nextXp * 0.9 * this.player.stats.xpMul;
    }
  }

  private togglePause(): void {
    if (this.state === 'play') {
      this.state = 'paused';
      this.overlay.innerHTML =
        '<div style="color:#e8c667;font-size:30px;letter-spacing:6px;">일시정지 一時停止</div>' +
        '<div style="color:#b8bcc8;font-size:15px;">Esc / P 로 계속</div>';
      this.overlay.style.display = 'flex';
    } else if (this.state === 'paused') {
      this.state = 'play';
      this.overlay.style.display = 'none';
    }
  }

  private enterDead(): void {
    this.state = 'dead';
    this.flashDamage(0.9, 600);
    this.rig.addTrauma(0.8);
    this.overlay.innerHTML =
      '<div style="color:#e85c4a;font-size:64px;letter-spacing:10px;text-shadow:0 0 20px rgba(232,92,74,0.6);">戰死</div>' +
      '<div style="color:#f0e4c0;font-size:22px;letter-spacing:3px;">전사</div>' +
      `<div style="color:#c9cdda;font-size:17px;margin-top:8px;">${this.statLine()}</div>` +
      '<div style="color:#8a8f9c;font-size:15px;margin-top:14px;">R 키로 재시작</div>';
    this.overlay.style.display = 'flex';
  }

  private enterVictory(): void {
    this.state = 'victory';
    this.rig.addTrauma(0.5);
    this.overlay.innerHTML =
      '<div style="color:#ffe9a8;font-size:60px;letter-spacing:12px;text-shadow:0 0 24px rgba(255,233,168,0.7);">天下統一</div>' +
      '<div style="color:#f0e4c0;font-size:24px;letter-spacing:4px;">천하통일</div>' +
      `<div style="color:#c9cdda;font-size:17px;margin-top:10px;">${this.statLine()}</div>` +
      '<div style="color:#8a8f9c;font-size:15px;margin-top:14px;">R 키로 재시작</div>';
    this.overlay.style.display = 'flex';
  }

  private statLine(): string {
    const mm = Math.floor(this.gameTime / 60);
    const ss = Math.floor(this.gameTime % 60);
    const time = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    return `생존 ${time} · 처치 ${this.kills} · Lv ${this.level} · 골드 ${Math.floor(this.gold)}`;
  }

  // === 테스트 훅 (main.ts에서 window.__GAME_TEST__로 노출) ===
  testSetTime(sec: number): void {
    this.gameTime = sec;
  }
  testGiveWeapon(id: string): void {
    if (!WEAPON_DEFS[id]) return;
    const w = this.weapons.find((x) => x.id === id);
    if (w) {
      w.level = 8;
    } else {
      if (this.weapons.length >= MAX_WEAPONS) this.weapons.pop();
      const nw = createWeapon(id);
      nw.level = 8;
      this.weapons.push(nw);
    }
  }
  testGivePassive(id: string, level = 5): void {
    if (!PASSIVE_BY_ID[id]) return;
    this.passives[id] = Math.min(PASSIVE_BY_ID[id].maxLevel, level);
    this.player.recomputeStats(this.passives);
  }
  testForceLevel(): void {
    this.xp += this.nextXp;
    this.onCollect(0);
  }
  testFillMusou(): void {
    this.musou.gauge = 100;
  }
  testActivateMusou(): void {
    this.musou.gauge = 100;
    this.musou.activate();
  }
  testAddGold(n: number): void {
    this.gold += n;
  }
  testSpawnBoss(type: string): void {
    if (!this.boss.active) this.boss.spawn(type, this.gameTime / 60, this.ctx, this.player.x, this.player.z);
  }
  testTreasure(boss = false): void {
    this.onTreasure(boss);
  }
  // 시간 점프 테스트용: 이전 보스 등장을 완료 처리(중복 스폰 방지)
  testSetBossFlags(b3: boolean, b6: boolean, b9: boolean): void {
    this.bossFlags = { b3, b6, b9 };
  }
  get testStats() {
    return {
      time: this.gameTime,
      kills: this.kills,
      level: this.level,
      alive: this.enemies.aliveCount,
      weapons: this.weapons.map((w) => `${w.id}:${w.level}`),
      passives: { ...this.passives },
      musou: this.musou.gauge,
      bossActive: this.boss.active,
      state: this.state,
    };
  }
}
