import type { PlayerStats } from '../game/player';

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
    name: '적토마 편자',
    hanja: '赤兔蹄鐵',
    maxLevel: 5,
    desc: (l) => `이동속도 +${l * 8}%`,
    apply: (s, l) => {
      s.speedMul *= 1 + 0.08 * l;
    },
  },
  {
    id: 'armor',
    name: '현철갑주',
    hanja: '玄鐵甲冑',
    maxLevel: 5,
    desc: (l) => `받는 피해 -${l * 8}%`,
    apply: (s, l) => {
      s.dmgReduction = Math.min(0.8, s.dmgReduction + 0.08 * l);
    },
  },
  {
    id: 'warbook',
    name: '병법서',
    hanja: '兵法書',
    maxLevel: 5,
    desc: (l) => `경험치 +${l * 8}%`,
    apply: (s, l) => {
      s.xpMul *= 1 + 0.08 * l;
    },
  },
  {
    id: 'wine',
    name: '백주',
    hanja: '白酒',
    maxLevel: 5,
    desc: (l) => `최대체력 +${l * 10}%, 재생 ${(l * 0.8).toFixed(1)}/s`,
    apply: (s, l) => {
      s.maxHpMul *= 1 + 0.1 * l;
      s.hpRegen += 0.8 * l;
    },
  },
  {
    id: 'seal',
    name: '전국옥새',
    hanja: '傳國玉璽',
    maxLevel: 5,
    desc: (l) => `골드 획득 +${l * 10}%`,
    apply: (s, l) => {
      s.goldMul *= 1 + 0.1 * l;
    },
  },
  {
    id: 'censer',
    name: '향로',
    hanja: '香爐',
    maxLevel: 5,
    desc: (l) => `픽업 반경 +${l * 15}%`,
    apply: (s, l) => {
      s.pickupMul *= 1 + 0.15 * l;
    },
  },
  {
    id: 'talismanho',
    name: '호부',
    hanja: '護符',
    maxLevel: 5,
    desc: (l) => `쿨다운 -${(100 * (1 - Math.pow(0.95, l))).toFixed(0)}%`,
    apply: (s, l) => {
      s.cooldownMul *= Math.pow(0.95, l);
    },
  },
  {
    id: 'vermilion',
    name: '주작깃발',
    hanja: '朱雀旗',
    maxLevel: 3,
    rare: true,
    desc: (l) => `투사체 +${l}`,
    apply: (s, l) => {
      s.projectileBonus += l;
    },
  },
];

export const PASSIVE_BY_ID: Record<string, PassiveDef> = {};
for (const p of PASSIVE_DEFS) PASSIVE_BY_ID[p.id] = p;
