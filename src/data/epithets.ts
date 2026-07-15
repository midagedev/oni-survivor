// 칭호(訓章) — 이번 전투의 결과에 붙는 한 줄 칭호. 결과 화면 1줄 노출(업적 title과 별개).
// 원천: three-kingdoms-mud gunungjeon q4 스레드 accolade.epithet(칭호)을 게임 조건에 매칭해 번안.
//   낙양 공방전 결과(점령/사수/함락)·처치 보스·콤보·명기·킬 수·무한 도달 등 RunResult+save 필드로 판정.
// 순수 데이터/함수. i18n.ts 무접촉(getLang만 참조). screens.ts가 pickEpithet+epithetText 소비,
//   save 누적은 main.ts 배선(스니펫). 노출은 결과 화면 1줄뿐 — 신규 UI/토스트 없음(절제).
import { getLang } from '../core/i18n';
import type { SaveData } from '../core/save';

// 낙양 공방전 도달 결과. run이 siegeEvents에서 파생해 RunResult에 채운다(배선 스니펫).
export type LuoyangOutcome = 'none' | 'captured' | 'held' | 'fallen';

// pickEpithet이 읽는 런 결과의 최소 형태. RunResult가 구조적으로 대입 가능해야 하며,
// luoyang은 RunResult 배선 스니펫 적용 전에도 tsc가 통과하도록 옵셔널로 둔다.
export interface EpithetContext {
  victory: boolean;
  kills: number;
  maxCombo: number;
  level: number;
  time: number;
  bosses: string[];
  masterworks: string[];
  endless: boolean;
  luoyang?: LuoyangOutcome;
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
    id: 'luoyang_held', ko: '낙양을 지킨 자', en: 'Keeper of Luoyang', rarity: 3,
    cond: (r) => r.luoyang === 'held',
  },
  {
    id: 'ilgidangcheon', ko: '일기당천 一騎當千', en: 'One Rider, a Thousand Foes', rarity: 3,
    cond: (r) => r.kills >= 1000,
  },
  {
    id: 'endless_field', ko: '끝나지 않는 전장에 남은 자', en: 'One Who Remained on the Endless Field', rarity: 3,
    cond: (r) => r.endless,
  },
  {
    id: 'wuchao_fire', ko: '오소의 밤불을 든 자', en: 'Bearer of the Wuchao Night-Fire', rarity: 3,
    cond: (r) => r.bosses.length >= 3 && r.maxCombo >= 300,
  },
  {
    id: 'first_unify', ko: '처음으로 천하를 통일한 자', en: 'First to Unify the Realm', rarity: 3,
    cond: (r, save) => r.victory && save.totalWins <= 1,
  },
  // ── 드묾(2) ──
  {
    id: 'gate_breaker', ko: '성문을 여는 자', en: 'Breaker of the Gate', rarity: 2,
    cond: (r) => r.luoyang === 'captured' || r.luoyang === 'held',
  },
  {
    id: 'fallen_gate', ko: '무너진 성문에서 살아남은 자', en: 'Survivor of the Fallen Gate', rarity: 2,
    cond: (r) => r.luoyang === 'fallen',
  },
  {
    id: 'three_champions', ko: '세 챔피언을 꺾은 자', en: 'Feller of Three Champions', rarity: 2,
    cond: (r) => r.bosses.length >= 3,
  },
  {
    id: 'combo_sweep', ko: '한 호흡에 벤 자', en: 'One Breath, One Sweep', rarity: 2,
    cond: (r) => r.maxCombo >= 300,
  },
  {
    id: 'masterworks_bearer', ko: '명기를 갖춘 자', en: 'Bearer of Masterworks', rarity: 2,
    cond: (r) => r.masterworks.length >= 3,
  },
  {
    id: 'yangren_gate', ko: '양인의 잿문을 연 자', en: 'One Who Opened the Ash-Gate of Yangren', rarity: 2,
    cond: (r) => r.bosses.includes('dongzhuo'),
  },
  {
    id: 'baima_banner', ko: '백마 둑의 큰 깃발을 붙든 자', en: 'Holder of the Great Banner at Baima', rarity: 2,
    cond: (r) => r.bosses.includes('yuanshao'),
  },
  // ── 흔함(1) ──
  {
    id: 'unified', ko: '살아 돌아온 머릿수를 센 자', en: 'One Who Counted the Living Home', rarity: 1,
    cond: (r) => r.victory,
  },
  {
    id: 'ash_road', ko: '잿길을 헤치고 나아간 자', en: 'One Who Cut Through the Ash-Road', rarity: 1,
    cond: (r) => r.kills >= 500,
  },
  {
    id: 'one_masterwork', ko: '명기 하나를 얻은 자', en: 'Finder of a Masterwork', rarity: 1,
    cond: (r) => r.masterworks.length >= 1,
  },
  {
    // 폴백 — 조건 없이 항상 참. 어떤 런에도 최소 한 칭호가 붙도록.
    id: 'altar_count', ko: '제단 아래 사람 수를 센 자', en: 'One Who Counted Heads Beneath the Altar', rarity: 1,
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
