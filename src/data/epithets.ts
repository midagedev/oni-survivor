// 칭호(訓章) — 이번 전투의 결과에 붙는 한 줄 칭호. 결과 화면 1줄 노출(업적 title과 별개).
// 귀멸의 칼날 세계관 칭호를 이번 런의 조건에 매칭해 붙인다.
//   무한성 공방전 결과(점령/사수/함락)·처치 혈귀·콤보·일륜도·킬 수·무한 도달 등 RunResult+save 필드로 판정.
// 순수 데이터/함수. i18n.ts 무접촉(getLang만 참조). screens.ts가 pickEpithet+epithetText 소비,
//   save 누적은 main.ts 배선(스니펫). 노출은 결과 화면 1줄뿐 — 신규 UI/토스트 없음(절제).
import { getLang } from '../core/i18n';
import type { SaveData } from '../core/save';

// 무한성 공방전 도달 결과. run이 siegeEvents에서 파생해 RunResult에 채운다(배선 스니펫).
export type MugenOutcome = 'none' | 'captured' | 'held' | 'fallen';

// pickEpithet이 읽는 런 결과의 최소 형태. RunResult가 구조적으로 대입 가능해야 하며,
// luoyang(무한성 공방전 결과 필드)은 RunResult 배선 전에도 tsc가 통과하도록 옵셔널로 둔다.
export interface EpithetContext {
  victory: boolean;
  kills: number;
  maxCombo: number;
  level: number;
  time: number;
  bosses: string[];
  masterworks: string[];
  endless: boolean;
  luoyang?: MugenOutcome; // 무한성 공방전 결과(RunResult 필드명 유지)
}

export interface Epithet {
  id: string;
  ko: string;
  en: string;
  rarity: 1 | 2 | 3; // 3=희귀. pickEpithet은 만족 칭호 중 최고 rarity 1개(동률은 배열 우선순위).
  cond: (r: EpithetContext, save: SaveData) => boolean;
}

// 배열 순서 = 동률 rarity의 결정론적 우선순위(앞선 항목 우선). rarity 내림차순으로 나열.
export const EPITHETS: Epithet[] = [
  // ── 희귀(3) ──
  {
    id: 'mugen_conquered', ko: '무한성을 정복한 자', en: 'Conqueror of Mugen Castle', rarity: 3,
    cond: (r) => r.luoyang === 'held',
  },
  {
    id: 'lone_thousand_slayer', ko: '홀로 천 마리 혈귀를 벤 자', en: 'Slayer of a Thousand Demons, Alone', rarity: 3,
    cond: (r) => r.kills >= 1000,
  },
  {
    id: 'endless_field', ko: '끝나지 않는 사냥에 남은 자', en: 'One Who Remained in the Endless Hunt', rarity: 3,
    cond: (r) => r.endless,
  },
  {
    id: 'flame_night', ko: '불꽃의 밤을 가른 자', en: 'One Who Cut Through the Night of Flames', rarity: 3,
    cond: (r) => r.bosses.length >= 3 && r.maxCombo >= 300,
  },
  {
    id: 'first_dawn', ko: '처음으로 여명을 맞이한 자', en: 'First to Greet the Dawn', rarity: 3,
    cond: (r, save) => r.victory && save.totalWins <= 1,
  },
  // ── 드묾(2) ──
  {
    id: 'gate_breaker', ko: '무한성의 문을 부순 자', en: 'Breaker of the Mugen Gate', rarity: 2,
    cond: (r) => r.luoyang === 'captured' || r.luoyang === 'held',
  },
  {
    id: 'fallen_gate', ko: '무너지는 무한성에서 살아남은 자', en: 'Survivor of the Collapsing Castle', rarity: 2,
    cond: (r) => r.luoyang === 'fallen',
  },
  {
    id: 'three_kizuki', ko: '세 귀월을 꺾은 자', en: 'Feller of Three Kizuki', rarity: 2,
    cond: (r) => r.bosses.length >= 3,
  },
  {
    id: 'combo_sweep', ko: '한 호흡에 베어낸 자', en: 'One Breath, One Sweep', rarity: 2,
    cond: (r) => r.maxCombo >= 300,
  },
  {
    id: 'masterworks_bearer', ko: '세 자루 일륜도를 벼려낸 자', en: 'Forger of Three Nichirin Blades', rarity: 2,
    cond: (r) => r.masterworks.length >= 3,
  },
  {
    id: 'enmu_dream', ko: '엔무의 꿈을 깨뜨린 자', en: 'One Who Shattered Enmu’s Dream', rarity: 2,
    cond: (r) => r.bosses.includes('enmu'),
  },
  {
    id: 'doma_ice', ko: '도우마의 얼음을 녹인 자', en: 'One Who Melted Doma’s Ice', rarity: 2,
    cond: (r) => r.bosses.includes('doma'),
  },
  // ── 흔함(1) ──
  {
    id: 'lived_to_morning', ko: '살아서 아침을 맞은 자', en: 'One Who Lived to See Morning', rarity: 1,
    cond: (r) => r.victory,
  },
  {
    id: 'ash_road', ko: '혈귀의 잿길을 헤치고 나아간 자', en: 'One Who Waded Through Demon Ash', rarity: 1,
    cond: (r) => r.kills >= 500,
  },
  {
    id: 'one_masterwork', ko: '일륜도 한 자루를 벼린 자', en: 'Bearer of a Single Nichirin Blade', rarity: 1,
    cond: (r) => r.masterworks.length >= 1,
  },
  {
    // 폴백 — 조건 없이 항상 참. 어떤 런에도 최소 한 칭호가 붙도록.
    id: 'joined_corps', ko: '귀살대에 이름을 올린 자', en: 'One Whose Name Joined the Corps', rarity: 1,
    cond: () => true,
  },
];

// 조건 만족 칭호 중 최고 rarity 1개. 동률은 EPITHETS 배열 순서(먼저 오는 것) — 결정론적.
export function pickEpithet(r: EpithetContext, save: SaveData): Epithet | null {
  let best: Epithet | null = null;
  for (const e of EPITHETS) {
    if (!e.cond(r, save)) continue;
    if (!best || e.rarity > best.rarity) best = e; // 엄격 비교 → 동률 시 앞선 항목 유지
  }
  return best;
}

// 현재 언어의 칭호 문자열.
export function epithetText(e: Epithet): string {
  return getLang() === 'en' ? e.en : e.ko;
}
