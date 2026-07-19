// 이벤트 내레이션 + 미니보스 별칭 (한/영).
// 귀멸의 칼날 세계관: 세력 전환(떠돌이 혈귀→하현→상현→십이귀월), 무한성 관문, 무한 미니보스.
// 순수 데이터. 노출은 기존 경로(hud.quote)만 사용 — 노출 빈도는 늘리지 않는다(절제).
import { getLang } from '../core/i18n';

interface Line {
  ko: string;
  en: string;
}

const pick = (l: Line): string => (getLang() === 'en' ? l.en : l.ko);

// 세력 전환 내레이션 — spawner.onWave의 faction.id 기준. 시작 세력(떠돌이 혈귀)은 배너/내레이션 없이 진입.
const FACTION: Record<string, Line> = {
  lower: {
    ko: '무한성의 하늘이 핏빛으로 물든다. 하현의 혈귀가 몰려온다.',
    en: 'The sky of the Infinity Castle bleeds red — the Lower Moons close in.',
  },
  upper: {
    ko: '공기가 얼어붙는다. 상현의 혈귀가 모습을 드러낸다.',
    en: 'The air freezes over — the Upper Moons reveal themselves.',
  },
  kizuki: {
    ko: '달이 열둘로 갈라진다. 십이귀월이 강림한다.',
    en: 'The moon splits into twelve — the Twelve Kizuki descend.',
  },
};

// 무한성 관문 세트피스 출현 내레이션(런 1회).
const HULAO: Line = {
  ko: '무한성의 거대한 관문이 솟아오른다. 칼끝에 살기가 맺힌다.',
  en: 'The great gate of the Infinity Castle rises — bloodlust clings to the blade.',
};

// 무한 모드 미니보스 별칭 — 재대면하는 적을 알아보는 관찰 톤(3인칭). MINIBOSS_CYCLE 키 기준.
const MINIBOSS_HAIL: Record<string, Line> = {
  gyutaro: {
    ko: '유곽을 지배했던 그 남매의 오라비가 다시 낫을 든다.',
    en: 'That brother of the pleasure-district siblings takes up his sickle again.',
  },
  daki: {
    ko: '팔중 오비를 두른 그 여귀가 다시 거리를 활보한다.',
    en: 'That she-demon of the eightfold obi prowls the streets once more.',
  },
  hantengu: {
    ko: '넷으로 갈라지는 그 겁쟁이가 또다시 나타난다.',
    en: 'That coward who splits into four appears yet again.',
  },
  kaigaku: {
    ko: '번개를 훔친 그 배신자가 다시 칼을 뽑는다.',
    en: 'That traitor who stole the lightning draws his blade again.',
  },
  handemon: {
    ko: '손의 원한을 품은 그 혈귀가 또 기어 나온다.',
    en: 'That demon of grasping hands crawls out once more.',
  },
};

// 세력 전환 내레이션(현재 언어). 시작 세력/미정의 세력은 빈 문자열.
export function factionNarration(factionId: string): string {
  const l = FACTION[factionId];
  return l ? pick(l) : '';
}

// 무한성 관문 출현 내레이션(현재 언어).
export function hulaoNarration(): string {
  return pick(HULAO);
}

// 무한 미니보스 별칭(현재 언어). 톤 안 맞는 키는 빈 문자열(폴백은 기존 appear 대사).
export function minibossHail(id: string): string {
  const l = MINIBOSS_HAIL[id];
  return l ? pick(l) : '';
}
