import { WEAPON_DEFS } from './weapons';
import { getLang, ACH_EN } from '../core/i18n';

// 업적/칭호 정의 (DESIGN §10). RunResult + 누적 저장값으로 순수 판정.
// save.ts 스키마에 직접 의존하지 않도록 구조적 컨텍스트만 받는다(연결은 Phase 3/리드).
export interface AchievementCtx {
  victory: boolean;
  kills: number;
  maxCombo: number;
  time: number; // 생존 초
  level: number;
  bosses: string[]; // 이번 런에서 처치한 보스 id
  weapons: { id: string; level: number }[];
  noHitTime?: number; // 최대 무피격 지속(초) — 있으면 사용
  totalKills?: number; // 누적 킬(저장값)
  totalWins?: number; // 누적 승리 수
  endless?: boolean; // 무한 모드 여부
}

export interface Achievement {
  id: string;
  name: string; // 칭호 (한글)
  hanja: string;
  desc: string;
  priority: number; // 공유 카드 대표 칭호 선정 우선순위(클수록 우선)
  legacy?: boolean; // 구버전에서 획득한 경우에만 표시하는 영속 ID
  check: (c: AchievementCtx) => boolean;
}

function evolutionCount(weapons: { id: string; level: number }[]): number {
  let n = 0;
  for (const w of weapons) if (WEAPON_DEFS[w.id]?.evolution) n++;
  return n;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_win',
    name: '무한성의 정복자',
    hanja: '無限城征服',
    desc: '무잔을 처치하고 첫 승리',
    priority: 60,
    check: (c) => c.victory,
  },
  {
    id: 'slay_muzan',
    name: '무잔 토벌',
    hanja: '無慘討伐',
    desc: '최종보스 무잔 처치',
    priority: 80,
    check: (c) => c.bosses.includes('muzan'),
  },
  {
    id: 'thousand_cut',
    name: '천귀참',
    hanja: '千鬼斬',
    desc: '한 런에서 혈귀 1,000마리 처치',
    priority: 55,
    check: (c) => c.kills >= 1000,
  },
  {
    id: 'five_hundred_cut',
    name: '오백귀참',
    hanja: '五百鬼斬',
    desc: '한 런에서 혈귀 500마리 처치',
    priority: 35,
    check: (c) => c.kills >= 500,
  },
  {
    id: 'invincible',
    name: '투명한 세계',
    hanja: '透明世界',
    desc: '3분간 무피격 유지',
    priority: 65,
    check: (c) => (c.noHitTime ?? 0) >= 180,
  },
  {
    id: 'master_smith',
    name: '천하명장',
    hanja: '天下名匠',
    desc: '구버전에서 진화 무기 3종 완성',
    priority: 60,
    legacy: true,
    check: () => false,
  },
  {
    id: 'secret_heir',
    name: '비전 계승자',
    hanja: '秘傳繼承',
    desc: '캐릭터 고유 계보의 비전 해방',
    priority: 70,
    check: (c) => evolutionCount(c.weapons) >= 1,
  },
  {
    id: 'combo_master',
    name: '호흡의 달인',
    hanja: '呼吸達人',
    desc: '최대 콤보 500 돌파',
    priority: 50,
    check: (c) => c.maxCombo >= 500,
  },
  {
    id: 'veteran',
    name: '주(柱)의 그릇',
    hanja: '柱之器',
    desc: '누적 혈귀 10,000마리 처치',
    priority: 45,
    check: (c) => (c.totalKills ?? 0) >= 10000,
  },
  {
    id: 'all_bosses',
    name: '십이귀월 토벌자',
    hanja: '十二鬼月討伐',
    desc: '한 런에서 세 보스 모두 처치',
    priority: 75,
    check: (c) => c.bosses.includes('muzan') && c.bosses.length >= 3,
  },
  {
    id: 'high_level',
    name: '문양의 발현자',
    hanja: '痣發現',
    desc: '레벨 40 도달',
    priority: 40,
    check: (c) => c.level >= 40,
  },
  {
    id: 'endless_walker',
    name: '무한의 추격자',
    hanja: '無限追擊',
    desc: '무한 모드에서 15분 생존',
    priority: 85,
    check: (c) => !!c.endless && c.time >= 900,
  },
  {
    id: 'survivor',
    name: '귀살대의 대원',
    hanja: '鬼殺隊員',
    desc: '5분 이상 생존',
    priority: 20,
    check: (c) => c.time >= 300,
  },
];

export const ACHIEVEMENT_BY_ID: Record<string, Achievement> = {};
for (const a of ACHIEVEMENTS) ACHIEVEMENT_BY_ID[a.id] = a;

// 이번 런에서 조건을 만족한 업적 id 목록.
export function evaluateAchievements(ctx: AchievementCtx): string[] {
  const out: string[] = [];
  for (const a of ACHIEVEMENTS) if (a.check(ctx)) out.push(a.id);
  return out;
}

// 획득 업적 중 공유 카드에 표시할 대표 칭호(우선순위 최고). 없으면 '무명'. 이름은 언어별, 한자 공통.
export function bestTitle(earnedIds: string[]): { name: string; hanja: string } {
  let best: Achievement | null = null;
  for (const id of earnedIds) {
    const a = ACHIEVEMENT_BY_ID[id];
    if (a && (!best || a.priority > best.priority)) best = a;
  }
  const en = getLang() === 'en';
  if (!best) return { name: en ? 'Unranked Slayer' : '무명의 대원', hanja: '無名隊士' };
  return { name: en ? ACH_EN[best.id]?.name ?? best.name : best.name, hanja: best.hanja };
}
