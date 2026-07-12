// 적 아키타입 기본 스탯 (soldiers 시트 기준). variant는 색변형만 다름.
export interface EnemyType {
  id: string;
  charIndex: number; // soldiers 시트 캐릭터 인덱스 (= 색변형 아키타입 키)
  hp: number;
  speed: number; // m/s
  radius: number; // 충돌 반경 (m)
  damage: number; // 접촉 대미지 (초당)
  gemValue: number; // 드랍 젬 경험치
  worldScale: number; // 스프라이트 크기 배수
}

export const ENEMY_TYPES: Record<string, EnemyType> = {
  worker: {
    id: 'worker',
    charIndex: 7,
    hp: 6,
    speed: 1.6,
    radius: 0.45,
    damage: 6,
    gemValue: 1,
    worldScale: 1,
  },
  runner: {
    id: 'runner',
    charIndex: 9,
    hp: 4,
    speed: 3.2,
    radius: 0.4,
    damage: 5,
    gemValue: 1,
    worldScale: 0.95,
  },
  guard: {
    id: 'guard',
    charIndex: 8,
    hp: 14,
    speed: 1.9,
    radius: 0.55,
    damage: 8,
    gemValue: 5,
    worldScale: 1.1,
  },
};
