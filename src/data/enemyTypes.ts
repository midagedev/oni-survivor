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
  // 원거리 공격 (general_bow / strategist)
  ranged?: boolean;
  range?: number; // 발사 유지 사거리
  atkCd?: number; // 발사 쿨다운
  projDamage?: number;
  projSpeed?: number;
  projHoming?: boolean;
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
    speed: 3.3,
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
  general_spear: {
    id: 'general_spear',
    charIndex: 1,
    hp: 42,
    speed: 1.7,
    radius: 0.62,
    damage: 11,
    gemValue: 5,
    worldScale: 1.18,
  },
  general_blade: {
    id: 'general_blade',
    charIndex: 2,
    hp: 26,
    speed: 2.4,
    radius: 0.52,
    damage: 10,
    gemValue: 5,
    worldScale: 1.06,
  },
  general_bow: {
    id: 'general_bow',
    charIndex: 3,
    hp: 20,
    speed: 1.7,
    radius: 0.5,
    damage: 6,
    gemValue: 5,
    worldScale: 1.0,
    ranged: true,
    range: 11,
    atkCd: 2.2,
    projDamage: 8,
    projSpeed: 12,
  },
  strategist: {
    id: 'strategist',
    charIndex: 4,
    hp: 24,
    speed: 1.4,
    radius: 0.5,
    damage: 6,
    gemValue: 5,
    worldScale: 1.0,
    ranged: true,
    range: 13,
    atkCd: 2.8,
    projDamage: 11,
    projSpeed: 7,
    projHoming: true,
  },
};
