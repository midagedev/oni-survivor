// 모든 공격 경로가 공유하는 보스 피해 정책. 프로필은 역할 차이를 보존하되,
// 그로기 배율과 보스 판정을 한 곳에서 적용해 숨은 1x/8x 편차를 막는다.
export type DamageProfile = 'melee' | 'projectile' | 'orbit' | 'zone' | 'special' | 'musou' | 'companion';

const BOSS_MULTIPLIER: Record<DamageProfile, number> = {
  melee: 4.5,
  projectile: 6,
  orbit: 2.4,
  zone: 3,
  special: 4.25,
  musou: 5,
  companion: 2.25,
};

export function resolvedDamage(
  baseDamage: number,
  isBoss: boolean,
  groggy: boolean,
  profile: DamageProfile,
): number {
  if (!isBoss) return baseDamage;
  return baseDamage * BOSS_MULTIPLIER[profile] * (groggy ? 1.5 : 1);
}
