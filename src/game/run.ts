import { Scene } from 'three';
import type { Atlas } from '../gfx/atlas';
import type { CameraRig } from '../gfx/camera';
import type { Input } from '../core/input';
import { Ground } from '../gfx/ground';
import { InstancedSpriteRenderer, ShadowRenderer } from '../gfx/sprites';
import { EffectsSystem } from '../gfx/effects';
import { ParticleSystem } from '../gfx/particles';
import { DamageText } from '../gfx/damageText';
import { Player } from './player';
import { EnemyPool, ENEMY_CAP } from './enemies';
import { Spawner } from './spawner';
import { SpatialHash } from './collision';
import { GemPool } from './pickups';
import { SpearWeapon } from './weapons/spear';
import type { Weapon, WeaponContext } from './weapons/types';
import { LevelUp } from './levelup';
import { Hud } from '../ui/hud';
import { HEROES } from '../data/heroes';

type State = 'play' | 'levelup' | 'paused' | 'dead';

// 씬 상태머신 훅: Phase 3에서 Title→Select→Run→Result가 이 위에 붙는다.
export class Run {
  readonly scene = new Scene();

  private readonly rig: CameraRig;
  private readonly input: Input;
  private readonly atlas: Atlas;

  private readonly ground: Ground;
  private readonly soldiersR: InstancedSpriteRenderer;
  private readonly variantsR: InstancedSpriteRenderer;
  private readonly shadowR: ShadowRenderer;
  private readonly effects: EffectsSystem;
  private readonly particles: ParticleSystem;
  private readonly damageText: DamageText;

  private readonly player: Player;
  private readonly enemies = new EnemyPool();
  private readonly spawner: Spawner;
  private readonly hash = new SpatialHash();
  private readonly gems: GemPool;
  private weapons: Weapon[];

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

  // 히트스탑: 시뮬 dt만 스케일, 연출/카메라는 실제 dt 유지 (game-feel)
  private timeScale = 1;
  private hitstopRemaining = 0;

  private readonly scratch: number[] = [];
  private readonly ctx: WeaponContext;
  private readonly damageFlash: HTMLDivElement;

  constructor(atlas: Atlas, rig: CameraRig, input: Input) {
    this.atlas = atlas;
    this.rig = rig;
    this.input = input;

    this.ground = new Ground(this.scene);
    this.soldiersR = new InstancedSpriteRenderer(atlas.soldiers, ENEMY_CAP);
    this.variantsR = new InstancedSpriteRenderer(atlas.variants, ENEMY_CAP);
    this.shadowR = new ShadowRenderer(ENEMY_CAP + 1);
    this.scene.add(this.soldiersR.mesh, this.variantsR.mesh, this.shadowR.mesh);

    this.effects = new EffectsSystem(this.scene);
    this.particles = new ParticleSystem(this.scene);
    this.damageText = new DamageText(this.scene);
    this.gems = new GemPool(this.scene);

    this.player = new Player(atlas, HEROES.zhaoyun);
    this.scene.add(this.player.mesh);
    this.spawner = new Spawner(atlas, this.enemies);
    this.weapons = [new SpearWeapon()];

    // 재사용 무기 컨텍스트 (프레임당 할당 회피)
    this.ctx = {
      dt: 0,
      px: 0,
      pz: 0,
      faceX: 0,
      faceZ: 1,
      hash: this.hash,
      enemies: this.enemies,
      effects: this.effects,
      damageText: this.damageText,
      stats: this.player.stats,
      onKill: (i: number) => this.handleKill(i),
      scratch: this.scratch,
    };

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

    // 피격/사망 데미지 비네트 (붉은 방사형, opacity 애니메이션으로 순간 점멸)
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

  // 데미지 플래시 점멸 (peak: 0..1)
  private flashDamage(peak: number, durationMs: number): void {
    this.damageFlash.animate([{ opacity: peak }, { opacity: 0 }], {
      duration: durationMs,
      easing: 'ease-out',
    });
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
    this.spawner.reset();
    this.player.reset();
    this.weapons = [new SpearWeapon()];
    this.gameTime = 0;
    this.kills = 0;
    this.level = 1;
    this.xp = 0;
    this.nextXp = 5 + 1 * 10;
    this.pendingLevels = 0;
    this.timeScale = 1;
    this.hitstopRemaining = 0;
    this.state = 'play';
    this.overlay.style.display = 'none';
  }

  update(dt: number): void {
    // 상태 전환 입력
    if (this.state === 'dead') {
      if (this.input.consumePressed('KeyR')) this.restart();
      return;
    }
    if (this.state === 'levelup') {
      if (this.input.consumePressed('Digit1')) this.levelup.pick(0);
      else if (this.input.consumePressed('Digit2')) this.levelup.pick(1);
      else if (this.input.consumePressed('Digit3')) this.levelup.pick(2);
      return;
    }
    if (this.input.consumePressed('Escape') || this.input.consumePressed('KeyP')) {
      this.togglePause();
    }
    if (this.state === 'paused') return;

    // 히트스탑: 실제 시간으로 감쇠, 시뮬레이션 dt만 스케일
    if (this.hitstopRemaining > 0) {
      this.hitstopRemaining -= dt;
      if (this.hitstopRemaining <= 0) this.timeScale = 1;
    }
    const gdt = dt * this.timeScale;

    // === 시뮬레이션 (play, gameplay dt) ===
    this.gameTime += gdt;
    this.player.update(gdt, this.input);
    this.spawner.update(gdt, this.gameTime, this.player.x, this.player.z);

    // 분리용 해시 (현재 위치)
    this.hash.clear();
    this.enemies.insertAll(this.hash);
    this.enemies.update(gdt, this.player.x, this.player.z, this.hash);

    // 이동 후 해시 재구성 (무기/접촉 판정용)
    this.hash.clear();
    this.enemies.insertAll(this.hash);

    // 무기
    this.ctx.dt = gdt;
    this.ctx.px = this.player.x;
    this.ctx.pz = this.player.z;
    this.ctx.faceX = this.player.faceX;
    this.ctx.faceZ = this.player.faceZ;
    for (let i = 0; i < this.weapons.length; i++) this.weapons[i].update(this.ctx);

    // 접촉 대미지
    this.contactDamage();

    // 젬 자석/획득
    this.gems.update(gdt, this.player.x, this.player.z, this.player.stats.pickupMul, this.onCollect);

    // 연출 갱신
    this.effects.update(dt);
    this.particles.update(dt);
    this.damageText.update(dt);
    this.ground.update(dt, this.player.x, this.player.z);
    this.rig.update(dt, this.player.x, this.player.z);

    // 렌더 버퍼 기록
    this.renderSprites();

    // 레벨업 대기 처리
    if (this.pendingLevels > 0 && this.state === 'play') this.showNextLevelUp();

    // 사망 체크
    if (this.player.dead) this.enterDead();

    this.hud.update(
      this.gameTime,
      this.kills,
      this.level,
      this.xp,
      this.nextXp,
      this.player.hp,
      this.player.maxHp,
    );
  }

  private renderSprites(): void {
    this.shadowR.begin();
    this.shadowR.push(this.player.x, this.player.z, this.player.radius * 1.6);
    this.enemies.render(this.atlas, this.soldiersR, this.variantsR, this.shadowR);
    this.shadowR.end();
    this.gems.render();
  }

  private contactDamage(): void {
    const px = this.player.x;
    const pz = this.player.z;
    const n = this.hash.query(px, pz, this.player.radius + 0.7, this.scratch);
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
    // 접촉 대미지(초당)를 0.5s 무적 주기로 청크 적용 → 평균 dps 유지
    // 피격은 무게감 있는 이벤트: 히트스탑 + 셰이크 + 데미지 비네트
    if (maxDmg > 0 && this.player.takeDamage(maxDmg * 0.5)) {
      this.hitstop(70, 0.05);
      this.rig.addTrauma(0.5);
      this.flashDamage(0.45, 320);
    }
  }

  private handleKill(i: number): void {
    const x = this.enemies.x[i];
    const z = this.enemies.z[i];
    const gv = this.enemies.gemValue[i];
    this.particles.burst(x, z, 2.2, 1.3, 0.5, 16, 4.5);
    this.gems.spawn(x, z, gv);
    this.enemies.kill(i);
    this.kills++;
  }

  // 젬 획득 콜백 (바운드, 할당 회피)
  private readonly onCollect = (value: number): void => {
    this.xp += value;
    // 픽업 스파클: 플레이어 위치에 작은 청색 파티클 퍼프 (은은하게)
    this.particles.burst(this.player.x, this.player.z, 0.5, 1.1, 2.2, 5, 2.2);
    while (this.xp >= this.nextXp) {
      this.xp -= this.nextXp;
      this.level++;
      this.nextXp = 5 + this.level * 10;
      this.pendingLevels++;
      this.hud.punchLevel();
    }
  };

  // 대기 중인 레벨업이 있으면 카드 하나를 열고, 없으면 플레이 재개.
  private showNextLevelUp(): void {
    if (this.pendingLevels <= 0) {
      this.state = 'play';
      return;
    }
    this.pendingLevels--;
    this.state = 'levelup';
    this.levelup.open(this.player, this.onLevelPicked);
  }

  private readonly onLevelPicked = (): void => {
    this.showNextLevelUp();
  };

  private togglePause(): void {
    if (this.state === 'play') {
      this.state = 'paused';
      this.overlay.innerHTML =
        '<div style="color:#e8c667;font-size:30px;letter-spacing:6px;">일시정지</div>' +
        '<div style="color:#b8bcc8;font-size:15px;">Esc / P 로 계속</div>';
      this.overlay.style.display = 'flex';
    } else if (this.state === 'paused') {
      this.state = 'play';
      this.overlay.style.display = 'none';
    }
  }

  private enterDead(): void {
    this.state = 'dead';
    // 사망: 강한 데미지 비네트 점멸 + 셰이크
    this.flashDamage(0.9, 600);
    this.rig.addTrauma(0.8);
    const mm = Math.floor(this.gameTime / 60);
    const ss = Math.floor(this.gameTime % 60);
    const time = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    this.overlay.innerHTML =
      '<div style="color:#e85c4a;font-size:64px;letter-spacing:10px;text-shadow:0 0 20px rgba(232,92,74,0.6);">戰死</div>' +
      '<div style="color:#f0e4c0;font-size:22px;letter-spacing:3px;">전사</div>' +
      `<div style="color:#c9cdda;font-size:17px;margin-top:8px;">생존 ${time} · 처치 ${this.kills} · Lv ${this.level}</div>` +
      '<div style="color:#8a8f9c;font-size:15px;margin-top:14px;">R 키로 재시작</div>';
    this.overlay.style.display = 'flex';
  }
}
