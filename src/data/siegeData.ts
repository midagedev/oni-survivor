// 무한성 결전(DESIGN 20) 문자열 — 성주 대사 + 배너 4종 + 퀘스트 훅. 한/영 병기.
// 원천: 성주 나키메 鳴女 — 무잔을 섬기는 상현의 혈귀, 비파를 뜯어 무한성의 공간을 자유로이 재구성한다.
//   무한성 관문을 지키는 위압적 혈귀의 톤으로 bossDialogue.ts q4 문체에 맞춰 번안.
// 순수 데이터. SiegeSystem/run 배선이 소비(i18n.ts 무접촉 — getLang만 참조).
import { getLang } from '../core/i18n';

interface Line {
  ko: string;
  en: string;
}

// 성주 인물 식별자(boss.ts BOSS_DEFS 키와 일치).
export const LORD_ID = 'nakime';
const LORD_NAME: Line = { ko: '나키메', en: 'Nakime' };

// 등장 대사(풀에서 1줄 노출) + 처치 대사(풀에서 1줄). nakime 보이스 톤에 맞춰 손질.
// 관문을 지키는 수호 혈귀의 위압 톤으로 번안.
const LORD_APPEAR: Line[] = [
  { ko: '무한성은 무잔님께서 지키라 명하신 성. 한 걸음도 들이지 못한다!',
    en: 'The Infinity Castle is the fortress Lord Muzan bade me hold — not one step further!' },
  { ko: '나키메의 목을 노린 자, 모두 이 성의 미궁에 삼켜졌다.',
    en: 'All who sought Nakime’s head were swallowed by this castle’s maze.' },
  { ko: '아무리 발버둥쳐도, 비파 한 소리에 성의 길이 뒤바뀐다.',
    en: 'Struggle as you will — one note of my biwa, and the castle’s paths rearrange.' },
  { ko: '무한성엔 하늘도 땅도 없다. 오직 내 비파가 정한 길뿐.',
    en: 'In the Infinity Castle there is neither sky nor earth — only the paths my biwa decrees.' },
];
const LORD_DEATH: Line[] = [
  { ko: '이 나키메가… 끝내 제 비파 소리 안에서 스러지는가.',
    en: 'So Nakime falls… here within her own biwa’s song at last.' },
  { ko: '성에 삼켜진 이름들에… 내 이름도 얹히는가.',
    en: 'To the names this castle swallowed… mine is added.' },
];

// 성 최초 접근 시 hud.quote용 퀘스트 훅(화자는 선택 검사 — run 배선에서 이름 주입).
const QUEST_HOOK: Line = {
  ko: '무한성에 혈귀 무리가 웅거하고 있다. 관문을 부수고 성주의 목을 취하라.',
  en: 'A horde of demons holds the Infinity Castle. Break the gates and take the lord’s head.',
};

// 배너 4종 — 한자 병기 포맷 유지(run의 hud.banner에 그대로 전달).
const BANNERS: Record<'capture' | 'counter' | 'defended' | 'fallen', Line> = {
  capture: { ko: '무한성 입성 無限城入城', en: 'Infinity Castle Taken 無限城入城' },
  counter: { ko: '혈귀 무리 내습 鬼群來襲', en: 'Demon Horde Strikes 鬼群來襲' },
  defended: { ko: '무한성 사수 無限城死守', en: 'Infinity Castle Held 無限城死守' },
  fallen: { ko: '무한성 함락 無限城陷落', en: 'Infinity Castle Fallen 無限城陷落' },
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
