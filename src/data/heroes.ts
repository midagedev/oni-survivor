// 플레이어블 장수 정의 (Phase 1은 조운만 사용, 구조는 확장 가능)
export interface HeroDef {
  id: string;
  name: string; // 한글 이름
  sheet: 'sgrade';
  charIndex: number; // 시트 내 캐릭터 인덱스
  baseHp: number;
  baseSpeed: number; // m/s
  // 고유 보너스 (시작 스탯 배수)
  speedMul: number;
  damageMul: number;
  maxHpMul: number;
  cooldownMul: number;
  startWeapon: string;
}

export const HEROES: Record<string, HeroDef> = {
  zhaoyun: {
    id: 'zhaoyun',
    name: '조운',
    sheet: 'sgrade',
    charIndex: 17,
    baseHp: 100,
    baseSpeed: 5.2,
    speedMul: 1.1, // 이동속도 +10%
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 1,
    startWeapon: 'spear',
  },
};
