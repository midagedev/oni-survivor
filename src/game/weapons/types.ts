import type { SpatialHash } from '../collision';
import type { EnemyPool } from '../enemies';
import type { EffectsSystem } from '../../gfx/effects';
import type { DamageText } from '../../gfx/damageText';
import type { PlayerStats } from '../player';
import type { ProjectilePool } from '../projectiles';
import type { ZonePool } from '../zones';
import type { ParticleSystem } from '../../gfx/particles';
import type { Rng } from '../../core/rng';

// 무기 update에 전달되는 프레임 컨텍스트.
export interface WeaponContext {
  dt: number;
  gameTime: number;
  px: number;
  pz: number;
  faceX: number; // 플레이어 바라보는 방향(단위)
  faceZ: number;
  hash: SpatialHash;
  enemies: EnemyPool;
  effects: EffectsSystem;
  damageText: DamageText;
  projectiles: ProjectilePool;
  zones: ZonePool;
  particles: ParticleSystem;
  stats: PlayerStats;
  rng: Rng;
  // 적 처치 시 호출(파티클/젬/킬 카운트는 run이 처리)
  onKill: (index: number) => void;
  // 후보 인덱스 재사용 배열 (할당 회피)
  scratch: number[];
}

// 모든 무기 공통 인터페이스.
export interface Weapon {
  readonly id: string;
  level: number;
  update(ctx: WeaponContext): void;
}
