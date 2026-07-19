import { getLang } from '../core/i18n';

export type CompanionAttack = 'slash' | 'lightning';
export type CompanionSpecial = 'rally' | 'triplebolt' | 'pierce' | 'firefan' | 'chargesweep';

export interface CompanionDef {
  id: string;
  name: string;
  hanja: string;
  portrait?: string; // 고해상도 원화 일러스트 파일명 (public/assets/portraits/*.webp)
  sheet?: 'sgrade' | 'apriority' | 'soldiers';
  charIndex: number;
  attack: CompanionAttack;
  damage: number;
  cooldown: number;
  special: CompanionSpecial;
  specialCd: number;
  line: { ko: string; en: string };
  cr: number;
  cg: number;
  cb: number;
}

// 주 장수별 1호 원군 (45초 합류). 100% 원화 스프라이트 명칭과 일치하도록 정밀 배선.
export const COMPANION_BY_HERO: Record<string, CompanionDef> = {
  // 탄지로 → 스승 우로코다키 사콘지
  tanjiro: { id: 'urokodaki', name: '우로코다키 사콘지', hanja: '鱗滝 左近次', portrait: 'urokodaki', sheet: 'apriority', charIndex: 10, attack: 'slash', damage: 32, cooldown: 1.1, special: 'rally', specialCd: 16, line: { ko: '판단이 늦다! 정신 차려라!', en: 'Too slow! Stay focused!' }, cr: 0.4, cg: 1.2, cb: 1.6 },
  // 기유 → 무주 토키토 무이치로
  tomioka: { id: 'tokito', name: '토키토 무이치로', hanja: '時透 無一郎', portrait: 'tokito', sheet: 'apriority', charIndex: 9, attack: 'slash', damage: 36, cooldown: 1.2, special: 'triplebolt', specialCd: 17, line: { ko: '무슨 구름이었더라... 흩어져라!', en: 'What shape was that cloud... Scatter!' }, cr: 0.6, cg: 1.5, cb: 1.8 },
  // 네즈코 → 아가츠마 젠이츠
  nezuko: { id: 'zenitsu', name: '아가츠마 젠이츠', hanja: '我妻 善逸', portrait: 'zenitsu', sheet: 'apriority', charIndex: 12, attack: 'lightning', damage: 34, cooldown: 1.0, special: 'pierce', specialCd: 15, line: { ko: '네즈코 양은 내가 지킨다!! 벽력일섬!', en: 'I will protect Nezuko-chan!! Thunderclap!' }, cr: 2.2, cg: 1.8, cb: 0.3 },
  // 미츠리 → 나비저택 칸자키 아오이
  kanroji: { id: 'aoi', name: '칸자키 아오이', hanja: '神崎 アオイ', portrait: 'kanzaki_aoi', sheet: 'apriority', charIndex: 7, attack: 'lightning', damage: 30, cooldown: 1.4, special: 'firefan', specialCd: 18, line: { ko: '약탕 준비 완료! 즉시 치료하겠어요!', en: 'Medicine ready! Healing now!' }, cr: 0.5, cg: 1.6, cb: 0.8 },
  // 시노부 → 츠구코 츠유리 카나오
  shinobu: { id: 'kanao', name: '츠유리 카나오', hanja: '栗花落 カナヲ', portrait: 'kanao', sheet: 'apriority', charIndex: 5, attack: 'slash', damage: 32, cooldown: 1.1, special: 'rally', specialCd: 16, line: { ko: '동전을 던졌어요... 함께 싸우겠어요.', en: 'I flipped a coin... I will fight with you.' }, cr: 1.6, cg: 0.8, cb: 1.2 },
  // 아카자 → 암주 히메지마 교메이
  kanao: { id: 'himejima', name: '히메지마 교메이', hanja: '悲鳴嶼 行冥', portrait: 'himejima', sheet: 'apriority', charIndex: 2, attack: 'slash', damage: 40, cooldown: 1.3, special: 'chargesweep', specialCd: 19, line: { ko: '남무아미타불... 극락왕생 하거라.', en: 'Namu Amida Butsu... Rest in peace.' }, cr: 1.8, cg: 1.2, cb: 0.5 },
  // 렌고쿠 → 하시비라 이노스케
  rengoku: { id: 'inosuke', name: '하시비라 이노스케', hanja: '嘴平 伊之助', portrait: 'inosuke', sheet: 'apriority', charIndex: 4, attack: 'slash', damage: 38, cooldown: 1.05, special: 'chargesweep', specialCd: 16, line: { ko: '저돌맹진! 저돌맹진!!', en: 'Inosuke is here! Pig rush!!' }, cr: 0.7, cg: 1.3, cb: 1.8 },
};

export const COMPANION_JOIN_TIME = 45;
export const SECOND_JOIN_TIME = 270; // 270초(4.5분) 2호 원군 난입

// 2호 원군 선발용 귀살대 기둥(주) 및 아군 동료 전체 풀
export const COMPANION_POOL: CompanionDef[] = [
  COMPANION_BY_HERO.tanjiro,   // 우로코다키
  COMPANION_BY_HERO.tomioka,    // 토키토 무이치로
  COMPANION_BY_HERO.nezuko,  // 젠이츠
  COMPANION_BY_HERO.kanroji, // 아오이
  COMPANION_BY_HERO.shinobu, // 카나오
  COMPANION_BY_HERO.kanao, // 히메지마
  COMPANION_BY_HERO.rengoku,      // 이노스케
  { id: 'uzui', name: '우즈이 텐겐', hanja: '宇髄 天元', portrait: 'uzui', sheet: 'apriority', charIndex: 11, attack: 'slash', damage: 38, cooldown: 1.15, special: 'chargesweep', specialCd: 16, line: { ko: '화려하게 가보자고!!', en: "Let's go extravagantly!!" }, cr: 1.8, cg: 1.4, cb: 0.4 },
  { id: 'sanemi', name: '시나즈가와 사네미', hanja: '不死川 実弥', portrait: 'sanemi', sheet: 'apriority', charIndex: 8, attack: 'slash', damage: 37, cooldown: 1.1, special: 'pierce', specialCd: 15, line: { ko: '혈귀 놈들, 모조리 찢어발겨주마!', en: "I'll shred every single demon!" }, cr: 0.6, cg: 1.7, cb: 0.7 },
  { id: 'kanroji', name: '칸로지 미츠리', hanja: '甘露寺 蜜璃', portrait: 'kanroji', sheet: 'apriority', charIndex: 6, attack: 'slash', damage: 35, cooldown: 1.05, special: 'rally', specialCd: 16, line: { ko: '가슴이 두근거려요! 힘낼게요!', en: "My heart is pounding! I'll do my best!" }, cr: 1.9, cg: 0.8, cb: 1.4 },
  { id: 'iguro', name: '이구로 오바나이', hanja: '伊黒 小黒', portrait: 'iguro', sheet: 'apriority', charIndex: 3, attack: 'lightning', damage: 36, cooldown: 1.2, special: 'triplebolt', specialCd: 17, line: { ko: '신용할 수 없다... 하지만 돕겠다.', en: "I don't trust you... but I'll assist." }, cr: 0.8, cg: 1.4, cb: 1.2 },
  { id: 'genya', name: '시나즈가와 겐야', hanja: '不死川 玄弥', portrait: 'genya', sheet: 'apriority', charIndex: 0, attack: 'lightning', damage: 36, cooldown: 1.3, special: 'pierce', specialCd: 16, line: { ko: '총탄으로 조져주마!', en: "I'll blow them away!" }, cr: 1.2, cg: 0.6, cb: 1.4 },
];

export function pickSecondCompanion(firstId: string, rand01: () => number): CompanionDef {
  const pool = COMPANION_POOL.filter((d) => d.id !== firstId);
  return pool[(rand01() * pool.length) | 0];
}

export function companionLine(def: CompanionDef): string {
  return getLang() === 'en' ? def.line.en : def.line.ko;
}
