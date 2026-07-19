// 플레이어블 장수 정의. 고유 보너스는 stats 기본값(장수 base)으로 접힌다.
export interface HeroDef {
  id: string;
  name: string; // 한글 이름
  hanja: string; // 한자 표기
  sheet: 'sgrade';
  charIndex: number; // sgrade 시트 내 캐릭터 인덱스
  portrait?: string;
  baseHp: number;
  baseSpeed: number; // m/s
  // 고유 보너스 (시작 스탯 배수)
  speedMul: number;
  damageMul: number;
  maxHpMul: number;
  cooldownMul: number;
  rangeMul: number; // 사거리/투사체 속도 (황충)
  dmgTakenMul: number; // 받는 피해 배수 (여포 1.25)
  startWeapon: string;
  bonusText: string; // 고유 보너스 설명(UI)
  musou: string; // 무쌍난무 종류 키
}

export const HEROES: Record<string, HeroDef> = {
  zhaoyun: {
    id: 'zhaoyun',
    name: '탄지로',
    hanja: '竈門炭治郎',
    sheet: 'sgrade',
    charIndex: 17,
    portrait: 'tanjiro',
    baseHp: 100,
    baseSpeed: 5.2,
    speedMul: 1.1, // 이동속도 +10%
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'spear',
    bonusText: '이동속도 +10% (전집중 호흡)',
    musou: 'zhaoyun',
  },
  guanyu: {
    id: 'guanyu',
    name: '토미오카 기유',
    hanja: '冨岡義勇',
    sheet: 'sgrade',
    charIndex: 5,
    portrait: 'tomioka',
    baseHp: 110,
    baseSpeed: 4.9,
    speedMul: 1,
    damageMul: 1.15, // 공격력 +15%
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'guandao',
    bonusText: '공격력 +15% (물의 호흡)',
    musou: 'guanyu',
  },
  zhangfei: {
    id: 'zhangfei',
    name: '카마도 네즈코',
    hanja: '竈門禰豆子',
    sheet: 'sgrade',
    charIndex: 15,
    portrait: 'nezuko',
    baseHp: 100,
    baseSpeed: 4.8,
    speedMul: 1,
    damageMul: 1,
    maxHpMul: 1.25, // 최대체력 +25%
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'zhangba',
    bonusText: '최대체력 +25% (혈귀술)',
    musou: 'zhangfei',
  },
  zhugeliang: {
    id: 'zhugeliang',
    name: '칸로지 미츠리',
    hanja: '甘露寺蜜璃',
    sheet: 'sgrade',
    charIndex: 19,
    portrait: 'kanroji',
    baseHp: 90,
    baseSpeed: 4.9,
    speedMul: 1,
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 0.9, // 쿨다운 -10%
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'baiyu',
    bonusText: '쿨다운 -10% (사랑의 호흡)',
    musou: 'zhugeliang',
  },
  huangzhong: {
    id: 'huangzhong',
    name: '코쵸우 시노부',
    hanja: '胡蝶しのぶ',
    sheet: 'sgrade',
    charIndex: 6,
    portrait: 'shinobu',
    baseHp: 95,
    baseSpeed: 4.9,
    speedMul: 1,
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1.2, // 사거리/투사체속도 +20%
    dmgTakenMul: 1,
    startWeapon: 'crossbow',
    bonusText: '사거리·투사체속도 +20% (벌레의 호흡)',
    musou: 'huangzhong',
  },
  sunshangxiang: {
    id: 'sunshangxiang',
    name: '아카자',
    hanja: '猗窩座',
    sheet: 'sgrade',
    charIndex: 20,
    portrait: 'akaza',
    baseHp: 90,
    baseSpeed: 5.3,
    speedMul: 1.1, // 이동속도 +10%
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1.15, // 사거리·투사체속도 +15% (궁술)
    dmgTakenMul: 1,
    startWeapon: 'twinring', // 쌍륜 雙輪 (roster.ts TwinringWeapon)
    bonusText: '사거리·투사체속도 +15%, 이동속도 +10% (파괴살)',
    musou: 'sunshangxiang',
  },
  lvbu: {
    id: 'lvbu',
    name: '렌고쿠 쿄쥬로',
    hanja: '煉獄杏壽郎',
    sheet: 'sgrade',
    charIndex: 10,
    portrait: 'rengoku',
    baseHp: 120,
    baseSpeed: 5.0,
    speedMul: 1,
    damageMul: 1.25, // 공격력 +25%
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1.25, // 받는 피해 +25%
    startWeapon: 'halberd',
    bonusText: '공격력 +25%, 받는 피해 +25% (화염의 호흡)',
    musou: 'lvbu',
  },
};
