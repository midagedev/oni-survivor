// 낙양 공방전(DESIGN 20) 문자열 — 성주 대사 + 배너 4종 + 퀘스트 훅. 한/영 병기.
// 원천: 성주 화웅 華雄 — 동탁의 선봉장, 사수관(호로관)을 지키다 연의 '온주참화웅'으로 관우에게 참수.
//   낙양성 성문을 지키는 위압적 무장의 톤으로 bossDialogue.ts q4 문체에 맞춰 번안.
// 순수 데이터. SiegeSystem/run 배선이 소비(i18n.ts 무접촉 — getLang만 참조).
import { getLang } from '../core/i18n';

interface Line {
  ko: string;
  en: string;
}

// 성주 인물 식별자(boss.ts BOSS_DEFS 키와 일치).
export const LORD_ID = 'huaxiong';
const LORD_NAME: Line = { ko: '화웅', en: 'Hua Xiong' };

// 등장 대사(풀에서 1줄 노출) + 처치 대사(풀에서 1줄). #49 보강: huaxiong.json voices 발췌·손질.
// MUD 전용어('군표' 등)는 제거하고 관문 수비장의 위압 톤으로 번안.
const LORD_APPEAR: Line[] = [
  { ko: '낙양은 상국(相國)께서 지키라 명하신 성. 한 걸음도 들이지 못한다!',
    en: 'Luoyang is the fortress the Chancellor bade me hold — not one step further!' },
  { ko: '화웅의 목을 노린 자, 모두 관문 앞의 흙이 되었다.',
    en: 'All who sought Hua Xiong’s head became dust before this pass.' },
  { ko: '연합의 깃발이 많다 한들, 한 길목은 한 줄 창병이면 막는다.',
    en: 'However many your banners — one pass needs but one line of spears.' },
  { ko: '호로관 바람은 칼끝에 붙어도, 피 묻은 날을 닦지는 못한다.',
    en: 'The Hulao wind clings to my blade, yet wipes no blood from it.' },
];
const LORD_DEATH: Line[] = [
  { ko: '이 화웅이… 끝내 성문 앞에서 스러지는가.',
    en: 'So Hua Xiong falls… here at the gate at last.' },
  { ko: '관문 앞 흙이 된 이름들에… 내 이름도 얹히는가.',
    en: 'To the names turned to dust before this pass… mine is added.' },
];

// 성 최초 접근 시 hud.quote용 퀘스트 훅(화자는 선택 장수 — run 배선에서 이름 주입).
const QUEST_HOOK: Line = {
  ko: '낙양성에 동탁의 잔당이 웅거하고 있다. 성문을 부수고 성주의 목을 취하라.',
  en: 'Dong Zhuo’s remnants hold Luoyang. Break the gates and take the lord’s head.',
};

// 배너 4종 — 한자 병기 포맷 유지(run의 hud.banner에 그대로 전달).
const BANNERS: Record<'capture' | 'counter' | 'defended' | 'fallen', Line> = {
  capture: { ko: '낙양 입성 洛陽入城', en: 'Luoyang Taken 洛陽入城' },
  counter: { ko: '낙양 탈환군 來襲', en: 'Reclaimers Strike 洛陽奪還軍來襲' },
  defended: { ko: '낙양 사수 洛陽死守', en: 'Luoyang Held 洛陽死守' },
  fallen: { ko: '낙양 함락 洛陽陷落', en: 'Luoyang Fallen 洛陽陷落' },
};

const pick = (l: Line): string => (getLang() === 'en' ? l.en : l.ko);

export function lordName(): string {
  return pick(LORD_NAME);
}
// index 미지정(음수)이면 풀에서 랜덤 1줄, 지정 시 순환 조회(QA 결정론 검증용).
export function lordAppearLine(index = -1): string {
  const n = LORD_APPEAR.length;
  const i = index < 0 ? Math.floor(Math.random() * n) : index % n;
  return pick(LORD_APPEAR[i]);
}
export function lordDeathLine(index = -1): string {
  const n = LORD_DEATH.length;
  const i = index < 0 ? Math.floor(Math.random() * n) : index % n;
  return pick(LORD_DEATH[i]);
}
export function siegeQuestLine(): string {
  return pick(QUEST_HOOK);
}
export function siegeBanner(key: 'capture' | 'counter' | 'defended' | 'fallen'): string {
  return pick(BANNERS[key]);
}
