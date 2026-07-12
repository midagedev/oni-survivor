import type { SpatialHash } from '../collision';
import type { EnemyPool } from '../enemies';
import type { EffectsSystem } from '../../gfx/effects';
import type { DamageText } from '../../gfx/damageText';
import type { PlayerStats } from '../player';

// 무기 update에 전달되는 프레임 컨텍스트. Phase 2에서 필드 추가로 확장.
export interface WeaponContext {
  dt: number;
  px: number;
  pz: number;
  faceX: number; // 플레이어 바라보는 방향(단위)
  faceZ: number;
  hash: SpatialHash;
  enemies: EnemyPool;
  effects: EffectsSystem;
  damageText: DamageText;
  stats: PlayerStats;
  // 적 처치 시 호출(파티클/젬/킬 카운트는 run이 처리)
  onKill: (index: number) => void;
  // 후보 인덱스 재사용 배열 (할당 회피)
  scratch: number[];
}

// 모든 무기 공통 인터페이스. Phase 2에서 무기 로스터가 이 형태로 붙는다.
export interface Weapon {
  readonly id: string;
  level: number;
  update(ctx: WeaponContext): void;
}
