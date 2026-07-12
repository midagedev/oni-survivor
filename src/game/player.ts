import type { Atlas } from '../gfx/atlas';
import { cellUvOffset } from '../gfx/atlas';
import { SpriteQuad, dirFromVelocity } from '../gfx/sprites';
import type { Input } from '../core/input';
import type { HeroDef } from '../data/heroes';
import { CELL_W } from '../data/spriteManifest';

export interface PlayerStats {
  damageMul: number;
  cooldownMul: number;
  speedMul: number;
  maxHpMul: number;
  pickupMul: number;
}

const ANIM_FPS = 8;
const INVULN = 0.5;
const FLASH_DECAY = 6;
export const PLAYER_RADIUS = 0.5;

export class Player {
  x = 0;
  z = 0;
  hp: number;
  maxHp: number;
  readonly stats: PlayerStats;

  // 바라보는 방향(단위 벡터). 무기 발사 방향으로 사용.
  faceX = 0;
  faceZ = 1;

  invuln = 0;
  private flash = 0;
  private dir = 0;
  private frame = 0;
  private animTime = 0;
  private moving = false;

  private readonly baseSpeed: number;
  private readonly baseHp: number;
  private readonly blockPx: number;
  private readonly quad: SpriteQuad;
  private readonly atlas: Atlas;
  private readonly hero: HeroDef;
  private readonly uv = { u: 0, v: 0 };

  constructor(atlas: Atlas, hero: HeroDef) {
    this.atlas = atlas;
    this.hero = hero;
    this.quad = new SpriteQuad(atlas.sgrade);
    this.baseSpeed = hero.baseSpeed;
    this.baseHp = hero.baseHp;
    this.stats = {
      damageMul: hero.damageMul,
      cooldownMul: hero.cooldownMul,
      speedMul: hero.speedMul,
      maxHpMul: hero.maxHpMul,
      pickupMul: 1,
    };
    this.maxHp = this.baseHp * this.stats.maxHpMul;
    this.hp = this.maxHp;
    this.blockPx = hero.charIndex * 4 * CELL_W;
  }

  get mesh() {
    return this.quad.mesh;
  }

  get radius(): number {
    return PLAYER_RADIUS;
  }

  reset(): void {
    this.x = 0;
    this.z = 0;
    // 스탯을 장수 기본값으로 복원 (이전 판 업그레이드 제거)
    this.stats.damageMul = this.hero.damageMul;
    this.stats.cooldownMul = this.hero.cooldownMul;
    this.stats.speedMul = this.hero.speedMul;
    this.stats.maxHpMul = this.hero.maxHpMul;
    this.stats.pickupMul = 1;
    this.maxHp = this.baseHp * this.stats.maxHpMul;
    this.hp = this.maxHp;
    this.invuln = 0;
    this.flash = 0;
    this.faceX = 0;
    this.faceZ = 1;
  }

  update(dt: number, input: Input): void {
    const mx = input.move.x;
    const mz = input.move.z;
    const len = Math.hypot(mx, mz);
    this.moving = len > 0;
    if (this.moving) {
      const nx = mx / len;
      const nz = mz / len;
      this.faceX = nx;
      this.faceZ = nz;
      const sp = this.baseSpeed * this.stats.speedMul;
      this.x += nx * sp * dt;
      this.z += nz * sp * dt;
      this.dir = dirFromVelocity(nx, nz, this.dir);
      this.animTime += dt;
      this.frame = ((this.animTime * ANIM_FPS) | 0) % 4;
    } else {
      this.dir = dirFromVelocity(this.faceX, this.faceZ, this.dir);
      this.frame = 0;
    }

    if (this.invuln > 0) this.invuln -= dt;
    if (this.flash > 0) {
      this.flash -= dt * FLASH_DECAY;
      if (this.flash < 0) this.flash = 0;
    }

    cellUvOffset(this.atlas.sgrade, this.blockPx, 0, this.dir, this.frame, this.uv);
    this.quad.setUv(this.uv.u, this.uv.v);
    this.quad.setFlash(this.flash);
    this.quad.setPosition(this.x, 0, this.z);
  }

  // 접촉 피해. 무적 중이면 무시하고 false.
  takeDamage(dmg: number): boolean {
    if (this.invuln > 0) return false;
    this.hp -= dmg;
    if (this.hp < 0) this.hp = 0;
    this.invuln = INVULN;
    this.flash = 1;
    return true;
  }

  get dead(): boolean {
    return this.hp <= 0;
  }

  // 최대체력 증가 시 현재 체력도 비율만큼 보정
  raiseMaxHp(factor: number): void {
    const ratio = this.hp / this.maxHp;
    this.stats.maxHpMul *= factor;
    this.maxHp = this.baseHp * this.stats.maxHpMul;
    this.hp = this.maxHp * ratio;
  }
}
