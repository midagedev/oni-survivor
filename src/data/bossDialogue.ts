// 보스 등장/처치 1줄 대사 (한/영). 배너 옆 짧은 위압 대사 — 40자 이내.
// 귀멸의 칼날 십이귀월/혈귀 각자의 성격·서사에 맞춘 대사. 원작 톤을 압축.
// 순수 데이터. run.ts 보스 등장/처치 이벤트가 소비.
// 등장/처치 풀을 2줄로 넓혀 재대면 시 반복감을 줄인다(이벤트당 1줄 노출).
import { getLang } from '../core/i18n';

export interface BossLine {
  appear: { ko: string; en: string }[];
  death: { ko: string; en: string }[];
}

export const BOSS_LINES: Record<string, BossLine> = {
  // 상현 2 · 도마 — 만세극락교 교주, 감정 없는 위선
  doma: {
    appear: [
      { ko: '슬픔도 아픔도 없는 극락으로 인도해 줄게.', en: 'Let me guide you to a paradise with no sorrow, no pain.' },
      { ko: '화내면 못써~ 웃으면서 죽는 게 최고란다.', en: 'Now now, no anger — smiling as you die is best.' },
    ],
    death: [
      { ko: '어라, 지는 건가. 뭐, 아무 느낌도 없지만.', en: 'Oh, am I losing? Well, I feel nothing anyway.' },
      { ko: '시노부 양… 내 안에서 함께 있어줄 거지?', en: 'Shinobu dear… you\'ll stay inside me, won\'t you?' },
    ],
  },
  // 하현 1 · 엔무 — 꿈을 지배하는 무한열차의 혈귀
  enmu: {
    appear: [
      { ko: '행복한 꿈을 꾸게 해줄게. 영원히 깨지 않는…', en: 'I\'ll give you a happy dream. One you never wake from…' },
      { ko: '잠들어라… 강제 혼도 수면 최면!', en: 'Sleep now… Forced Unconsciousness Hypnosis!' },
    ],
    death: [
      { ko: '무잔 님… 저는 아직 쓸모가 있는데…', en: 'Lord Muzan… I am still of use to you…' },
      { ko: '이 달콤한 꿈도… 끝이란 말인가.', en: 'Even this sweet dream… must end.' },
    ],
  },
  // 최종보스 · 키부츠지 무잔 — 천 년을 산 혈귀의 시조
  muzan: {
    appear: [
      { ko: '천 년을 산 나를, 하루살이가 막겠다는 것이냐.', en: 'A mayfly dares to stop me, who has lived a thousand years?' },
      { ko: '나는 완전한 생물이다. 무릎을 꿇어라.', en: 'I am the perfect being. Kneel before me.' },
    ],
    death: [
      { ko: '이럴 리 없다… 태양만, 태양만 아니었다면!', en: 'Impossible… if only, if only not for the sun!' },
      { ko: '누군가… 태양을 극복해 다오…', en: 'Someone… overcome the sun for me…' },
    ],
  },
  // 상현 3 · 아카자 — 강함만을 추앙하는 격투가
  akaza: {
    appear: [
      { ko: '술식 전개. 파괴살 — 나침(羅針)!', en: 'Technique deployed. Destructive Death: Compass Needle!' },
      { ko: '더 강해져라! 너도 혈귀가 되면 되잖아!', en: 'Grow stronger! Just become a demon like me!' },
    ],
    death: [
      { ko: '코유키… 나는 이제 싸우지 않아.', en: 'Koyuki… I won\'t fight anymore.' },
      { ko: '결국… 아무것도 지키지 못했군.', en: 'In the end… I protected nothing.' },
    ],
  },
  // 상현 1 · 코쿠시보 — 달의 호흡, 요리이치의 형
  kokushibo: {
    appear: [
      { ko: '달의 호흡… 눈을 떠라, 일륜의 검이여.', en: 'Moon Breathing… awaken, blade of the sun.' },
      { ko: '오백 년을 갈고닦은 참격을 받아라.', en: 'Receive the slash I honed for five centuries.' },
    ],
    death: [
      { ko: '요리이치… 나는 대체 무엇을 위해…', en: 'Yoriichi… what was it all for…' },
      { ko: '그저 형이 되고 싶었을 뿐인데…', en: 'I only wished to be a good elder brother…' },
    ],
  },
  // 하현 5 · 루이 — 거미줄로 가족을 엮는 혈귀
  rui: {
    appear: [
      { ko: '내 가족의 인연을 방해하지 마라.', en: 'Do not interfere with my family\'s bonds.' },
      { ko: '각혈선혈… 붉은 실로 영원히 묶어주마.', en: 'Cutting Thread Cage… bound in red thread forever.' },
    ],
    death: [
      { ko: '진짜 가족의 인연은… 이런 게 아니었나.', en: 'A true family bond… was not this, was it.' },
      { ko: '아버지… 어머니… 미안해요…', en: 'Father… Mother… I\'m sorry…' },
    ],
  },
  // 상현 5 · 교코 — 도자기 항아리에 깃든 예술광
  gyokko: {
    appear: [
      { ko: '내 예술을 감상할 영광을 주지.', en: 'I grant you the honor of viewing my art.' },
      { ko: '물속에서 도망칠 수 있을 것 같으냐?', en: 'Do you think you can flee within the water?' },
    ],
    death: [
      { ko: '이 몸은 완벽한 예술인데… 어째서…', en: 'I am perfect art… so why…' },
      { ko: '무잔 님… 상현의 자리를 지키지 못해…', en: 'Lord Muzan… I could not keep my Upper Rank…' },
    ],
  },
  // 상현 6 · 규타로 — 남매 혈귀의 오빠
  gyutaro: {
    appear: [
      { ko: '우리 남매를 이길 수 있을 것 같아?', en: 'You think you can beat us siblings?' },
      { ko: '혈귀술… 비혈경(飛血鏡) 원환(圓環)!', en: 'Blood Demon Art: Flying Blood Sickle Circle!' },
    ],
    death: [
      { ko: '다키… 오빠가 미안하다…', en: 'Ume… your brother is sorry…' },
      { ko: '지옥이라도… 남매는 함께다.', en: 'Even in hell… we go together.' },
    ],
  },
  // 상현 6 · 다키 — 규타로의 여동생
  daki: {
    appear: [
      { ko: '감히 이 다키 님한테 대드는 거야?', en: 'You dare defy me, the great Daki?' },
      { ko: '팔중 오비로 갈기갈기 찢어주지!', en: 'My eight sashes will tear you to shreds!' },
    ],
    death: [
      { ko: '오빠… 나 무서워… 어디 있어…', en: 'Big brother… I\'m scared… where are you…' },
      { ko: '혼자 두지 마… 오빠…', en: 'Don\'t leave me alone… brother…' },
    ],
  },
  // 상현 4 · 한텐구 — 감정마다 분열하는 겁쟁이 혈귀
  hantengu: {
    appear: [
      { ko: '무섭다, 무서워! …아니, 이건 분노다!', en: 'Scary, so scary! …No — this is rage!' },
      { ko: '나는 약하다… 그러니 넷으로 나뉘어 친다!', en: 'I am weak… so I split into four and strike!' },
    ],
    death: [
      { ko: '용서를… 나는 아무 잘못도 없다!', en: 'Mercy… I have done nothing wrong!' },
      { ko: '가짜였나… 진짜 몸은 어디에…', en: 'A decoy again… where is the true body…' },
    ],
  },
  // 상현 6(후임) · 카이가쿠 — 번개의 호흡, 젠이츠의 형제자
  kaigaku: {
    appear: [
      { ko: '번개의 호흡… 나는 젠이츠 따위와 다르다.', en: 'Thunder Breathing… I am nothing like Zenitsu.' },
      { ko: '칠형까지 익힌 나야말로 최강이다!', en: 'I mastered all seven forms — I am the strongest!' },
    ],
    death: [
      { ko: '스승님… 나는 왜 항상 이 모양인가…', en: 'Master… why am I always like this…' },
      { ko: '젠이츠… 네가… 나보다…', en: 'Zenitsu… you… surpassed me…' },
    ],
  },
  // 최초의 시련 · 손 혈귀(手鬼) — 우로코다키의 제자들을 삼킨 원한
  handemon: {
    appear: [
      { ko: '우로코다키의 냄새가 난다… 미워, 미워!', en: 'I smell Urokodaki… I hate it, I hate it!' },
      { ko: '손이다… 너도 내 손아귀에 잡아주마!', en: 'Hands… I\'ll grab you in my hands too!' },
    ],
    death: [
      { ko: '형아… 무서워… 손 잡아줘…', en: 'Big brother… I\'m scared… hold my hand…' },
      { ko: '잘못했어요… 이제 안 그럴게요…', en: 'I\'m sorry… I won\'t do it again…' },
    ],
  },
};

// 현재 언어로 보스 대사 조회(풀에서 1줄 랜덤). 없으면 빈 문자열.
export function bossLine(id: string, kind: 'appear' | 'death'): string {
  const b = BOSS_LINES[id];
  if (!b) return '';
  const pool = b[kind];
  if (!pool || pool.length === 0) return '';
  const l = pool[Math.floor(Math.random() * pool.length)];
  return getLang() === 'en' ? l.en : l.ko;
}
