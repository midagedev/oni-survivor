import type { PlayerStats } from '../game/player';
import { getLang } from '../core/i18n';

// 패시브 정의. apply는 "레벨 L 전체 효과"를 stats에 곱/합산한다.
// (recomputeStats는 stats를 장수 base로 리셋한 뒤 각 패시브를 한 번씩 적용 → 누적 드리프트 방지)
export interface PassiveDef {
  id: string;
  name: string; // 한글
  hanja: string;
  maxLevel: number;
  rare?: boolean;
  desc: (level: number) => string;
  apply: (stats: PlayerStats, level: number) => void;
}

export const PASSIVE_DEFS: PassiveDef[] = [
  {
    id: 'horseshoe',
    name: '전집중 상시',
    hanja: '全集中·常中',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `Move speed +${l * 8}%` : `이동속도 +${l * 8}%`),
    apply: (s, l) => {
      s.speedMul *= 1 + 0.08 * l;
    },
  },
  {
    id: 'armor',
    name: '귀살대 대원복',
    hanja: '鬼殺隊服',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `Damage taken -${l * 8}%` : `받는 피해 -${l * 8}%`),
    apply: (s, l) => {
      s.dmgReduction = Math.min(0.8, s.dmgReduction + 0.08 * l);
    },
  },
  {
    id: 'warbook',
    name: '최종선별 경험',
    hanja: '最終選別',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `XP +${l * 8}%` : `경험치 +${l * 8}%`),
    apply: (s, l) => {
      s.xpMul *= 1 + 0.08 * l;
    },
  },
  {
    id: 'wine',
    name: '우코기 떡',
    hanja: '薬草餅',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `Max HP +${l * 10}%, regen ${(l * 0.8).toFixed(1)}/s` : `최대체력 +${l * 10}%, 재생 ${(l * 0.8).toFixed(1)}/s`),
    apply: (s, l) => {
      s.maxHpMul *= 1 + 0.1 * l;
      s.hpRegen += 0.8 * l;
    },
  },
  {
    id: 'seal',
    name: '주화 은행',
    hanja: '鬼殺隊銀行',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `Gold gain +${l * 10}%` : `골드 획득 +${l * 10}%`),
    apply: (s, l) => {
      s.goldMul *= 1 + 0.1 * l;
    },
  },
  {
    id: 'censer',
    name: '까마귀 통신',
    hanja: '鎹鴉',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `Pickup radius +${l * 15}%` : `픽업 반경 +${l * 15}%`),
    apply: (s, l) => {
      s.pickupMul *= 1 + 0.15 * l;
    },
  },
  {
    id: 'talismanho',
    name: '육체 강화',
    hanja: '身體强化',
    maxLevel: 5,
    desc: (l) => (getLang() === 'en' ? `Cooldown -${(100 * (1 - Math.pow(0.95, l))).toFixed(0)}%` : `쿨다운 -${(100 * (1 - Math.pow(0.95, l))).toFixed(0)}%`),
    apply: (s, l) => {
      s.cooldownMul *= Math.pow(0.95, l);
    },
  },
  {
    id: 'vermilion',
    name: '사당 축복',
    hanja: '神社の祝福',
    maxLevel: 3,
    rare: true,
    desc: (l) => (getLang() === 'en' ? `Projectiles +${l}` : `투사체 +${l}`),
    apply: (s, l) => {
      s.projectileBonus += l;
    },
  },
];

export const PASSIVE_BY_ID: Record<string, PassiveDef> = {};
for (const p of PASSIVE_DEFS) PASSIVE_BY_ID[p.id] = p;
