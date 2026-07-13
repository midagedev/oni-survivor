import { getLang } from '../core/i18n';

export type CompanionAttack = 'slash' | 'lightning';
// 특기(15~20s 쿨다운 광역기). 장수별 1종.
export type CompanionSpecial = 'rally' | 'triplebolt' | 'pierce' | 'firefan' | 'chargesweep';

export interface CompanionDef {
  id: string;
  name: string;
  hanja: string;
  charIndex: number;
  attack: CompanionAttack;
  damage: number;
  cooldown: number;
  special: CompanionSpecial;
  specialCd: number; // 특기 쿨다운(초)
  line: { ko: string; en: string }; // 특기 발동 대사
  cr: number; // 테마 광원/이펙트 색
  cg: number;
  cb: number;
}

// 군웅전 콘텐츠 팩의 임시동료 개념을 원군 이벤트로 축약. 장수별 한 명이 45초에 합류해 런 끝까지 돕는다.
// #22: 합류 세트피스 + 광역 기본공격 + 특기 + 무쌍 시너지로 임팩트 강화.
export const COMPANION_BY_HERO: Record<string, CompanionDef> = {
  zhaoyun: { id: 'liubei', name: '유비', hanja: '劉備', charIndex: 7, attack: 'slash', damage: 30, cooldown: 1.1, special: 'rally', specialCd: 16, line: { ko: '함께 갑시다!', en: 'Forward, together!' }, cr: 1.6, cg: 1.3, cb: 0.5 },
  guanyu: { id: 'caocao', name: '조조', hanja: '曹操', charIndex: 0, attack: 'lightning', damage: 34, cooldown: 1.45, special: 'triplebolt', specialCd: 18, line: { ko: '천하는 내 것이다', en: 'The realm is mine.' }, cr: 0.7, cg: 1.0, cb: 2.4 },
  zhangfei: { id: 'zhaoyun', name: '조운', hanja: '趙雲', charIndex: 17, attack: 'slash', damage: 32, cooldown: 1.0, special: 'pierce', specialCd: 15, line: { ko: '이 한 몸으로 뚫겠소!', en: "I'll cut clean through!" }, cr: 0.6, cg: 1.4, cb: 2.3 },
  zhugeliang: { id: 'zhouyu', name: '주유', hanja: '周瑜', charIndex: 18, attack: 'lightning', damage: 36, cooldown: 1.5, special: 'firefan', specialCd: 18, line: { ko: '적벽의 불을 보아라', en: 'Behold the flames of Chibi!' }, cr: 2.4, cg: 1.0, cb: 0.35 },
  huangzhong: { id: 'liubei', name: '유비', hanja: '劉備', charIndex: 7, attack: 'slash', damage: 30, cooldown: 1.1, special: 'rally', specialCd: 16, line: { ko: '함께 갑시다!', en: 'Forward, together!' }, cr: 1.6, cg: 1.3, cb: 0.5 },
  lvbu: { id: 'zhangliao', name: '장료', hanja: '張遼', charIndex: 16, attack: 'slash', damage: 36, cooldown: 1.05, special: 'chargesweep', specialCd: 16, line: { ko: '장료, 여기 있다!', en: 'Zhang Liao stands here!' }, cr: 1.8, cg: 1.5, cb: 0.7 },
};

export const COMPANION_JOIN_TIME = 45;

// 현재 로케일에 맞는 특기 대사(i18n.ts는 읽기만 — 편집 금지).
export function companionLine(def: CompanionDef): string {
  return getLang() === 'en' ? def.line.en : def.line.ko;
}
