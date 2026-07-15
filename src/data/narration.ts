// 이벤트 내레이션 + 미니보스 별칭 (한/영). #49 W4.
// 원천: three-kingdoms-mud gunungjeon q4 스레드 stage prompt(무대 내레이션)를 1줄(≤40자)로 압축,
//   미니보스 별칭은 data/bosses.json의 전역별 별칭("정군산의 그 선봉" 류)에서 톤 맞는 것만 번안.
// 순수 데이터. 노출은 기존 경로(hud.quote)만 사용 — 세력 전환·호로관·무한 미니보스 등장의 기존 비트에
//   1줄을 얹거나(전환/호로관) 기존 등장 대사를 대체(미니보스)해 노출 빈도를 늘리지 않는다(절제).
import { getLang } from '../core/i18n';

interface Line {
  ko: string;
  en: string;
}

const pick = (l: Line): string => (getLang() === 'en' ? l.en : l.ko);

// 세력 전환 내레이션 — spawner.onWave의 faction.id 기준. 시작 세력(황건)은 배너/내레이션 없이 진입.
const FACTION: Record<string, Line> = {
  dongzhuo: {
    ko: '낙양 쪽 하늘이 낮에도 밤처럼 검다. 동탁군이 밀려온다.',
    en: 'The Luoyang sky darkens at noon — Dong Zhuo’s host presses in.',
  },
  yuanshao: {
    ko: '하북의 대군이 둑을 넘는다. 넓은 군세, 넓은 그늘.',
    en: 'Hebei’s great host crosses the dike — a wide army, a wide shadow.',
  },
  warlords: {
    ko: '깃발이 갈라진다. 이제부터는 군웅의 땅이다.',
    en: 'The banners splinter — from here, the land of warlords.',
  },
};

// 호로관 세트피스 출현 내레이션(런 1회).
const HULAO: Line = {
  ko: '호로관 성문이 솟는다. 바람이 칼끝에 붙는다.',
  en: 'The gate of Hulao rises — the wind clings to the blade.',
};

// 무한 모드 미니보스 별칭 — 재대면하는 적을 알아보는 관찰 톤(3인칭). MINIBOSS_CYCLE 키 기준.
// 등장 배너 옆 기존 appear 대사를 대체(빈도 불변)하도록 완결형 1줄로 둔다.
const MINIBOSS_HAIL: Record<string, Line> = {
  dianwei: {
    ko: '완성 문을 지킨 그 교위가 다시 나섰다.',
    en: 'That captain who held the Wancheng gate rides out again.',
  },
  gaoshun: {
    ko: '함진영을 이끈 그 진장이 다시 줄을 세운다.',
    en: 'That captain of the Trap-Breaker Camp forms his ranks anew.',
  },
  xiahouyuan: {
    ko: '정군산의 그 선봉이 또 길목을 친다.',
    en: 'That vanguard of Dingjun strikes the road once more.',
  },
  lumeng: {
    ko: '형주를 삼킨 그 도독이 흰 옷으로 다시 온다.',
    en: 'That commander who swallowed Jing comes again in white.',
  },
  luxun: {
    ko: '이릉의 그 별장이 또 불줄을 편다.',
    en: 'That lieutenant of Yiling lays out his fire-line again.',
  },
};

// 세력 전환 내레이션(현재 언어). 시작 세력/미정의 세력은 빈 문자열.
export function factionNarration(factionId: string): string {
  const l = FACTION[factionId];
  return l ? pick(l) : '';
}

// 호로관 출현 내레이션(현재 언어).
export function hulaoNarration(): string {
  return pick(HULAO);
}

// 무한 미니보스 별칭(현재 언어). 톤 안 맞는 키는 빈 문자열(폴백은 기존 appear 대사).
export function minibossHail(id: string): string {
  const l = MINIBOSS_HAIL[id];
  return l ? pick(l) : '';
}
