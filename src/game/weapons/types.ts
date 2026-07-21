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
  dashing?: boolean; // #45 19.6: 대시 중 — 근접 히트 넉백 +50% (run이 매 프레임 세팅)
  boosting?: boolean; // #45 19.6: 미니터보 부스트 중 — 근접 히트 스매시(피해+25%·넉백+50%·KO별 확정)
  aimX: number; // 최근접 적을 향한 자동 조준 방향(적이 없으면 face)
  aimZ: number;
  aimTarget: number;
  hash: SpatialHash;
  enemies: EnemyPool;
  effects: EffectsSystem;
  damageText: DamageText;
  projectiles: ProjectilePool;
  zones: ZonePool;
  particles: ParticleSystem;
  stats: PlayerStats;
  rng: Rng;
  musouActive?: boolean;
  musouKey?: string;
  // 현재 영웅이 선택한 고유 계보 분기. 서명 무기만 패턴을 바꾸는 데 사용한다.
  lineageBranches: readonly string[];
  clearEnemyProjectiles: (x: number, z: number, radius: number) => number;
  resolveMovement: (
    fromX: number,
    fromZ: number,
    toX: number,
    toZ: number,
    radius: number,
    out: { x: number; z: number },
  ) => boolean;
  // 적 처치 시 호출(파티클/젬/킬 카운트는 run이 처리)
  onKill: (index: number) => void;
  onAttack: (weaponId: string, dirX: number, dirZ: number) => void;
  // 후보 인덱스 재사용 배열 (할당 회피)
  scratch: number[];
}

// 모든 무기 공통 인터페이스.
export interface Weapon {
  readonly id: string;
  level: number;
  update(ctx: WeaponContext): void;
}
