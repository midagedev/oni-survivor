// 보스 등장/처치 1줄 대사 (한/영). 배너 옆 짧은 위압 대사 — 40자 이내.
// 원천: three-kingdoms-mud gunungjeon q4 메인 퀘스트 스레드 + 인물 카드(cards/<id>.json voices)의
//   서사 톤을 보스별 전역에 매칭해 발췌·번안. 정사/연의의 대표 일화를 압축.
//   전역 매칭: 관도=원소 · 동탁의 난=동탁/여포/하후돈 · 강동=손책 · 적벽=주유 · 완성=전위 ·
//   하비 함진영=고순 · 한중 정군산=하후연 · 형주=여몽 · 이릉=육손 · 북벌=사마의.
// 순수 데이터. phase2 보스 로스터(#35)가 소비.
// #49 보강: 등장/처치 풀을 2줄로 넓혀 반복 노출 시 다양성 확보(노출 빈도는 불변 — 각 이벤트 1줄).
import { getLang } from '../core/i18n';

export interface BossLine {
  appear: { ko: string; en: string }[];
  death: { ko: string; en: string }[];
}

export const BOSS_LINES: Record<string, BossLine> = {
  yuanshao: {
    appear: [
      { ko: '하북의 대군이다. 관도의 둑을 넘을 성싶으냐.', en: 'The host of Hebei. Think you to cross the Guandu dike?' },
      { ko: '사세삼공의 이름 앞이다. 무릎이 먼저 꺾일 것이다.', en: 'Four generations of ministers stand here — your knees break first.' },
    ],
    death: [
      { ko: '군세는 컸으나… 내 결단이 늦었구나.', en: 'My armies were vast… my resolve came too late.' },
      { ko: '옳은 쪽을 고를 하루가… 이제는 없구나.', en: 'The day left to choose the right side… is gone.' },
    ],
  },
  dongzhuo: {
    appear: [
      { ko: '낙양을 불사른 이 몸이 두렵지 않으냐!', en: 'I burned Luoyang to ash. Do you not fear me?' },
      { ko: '폐립도 내 뜻이었다. 네 목숨도 그러하리라.', en: 'I unmade emperors at will — your life is no different.' },
    ],
    death: [
      { ko: '재로 세운 권세가… 재로 돌아가는가.', en: 'Power raised from ash… returns to ash.' },
      { ko: '미오의 곳간이… 나보다 오래 남겠구나.', en: 'The granaries of Mei… will outlast me.' },
    ],
  },
  lvbu: {
    appear: [
      { ko: '천하의 여포다. 나를 당할 자 있거든 나오라!', en: 'I am Lü Bu. Let any who can match me step forth!' },
      { ko: '방천극의 무게를 재려는 눈이 또 하나 늘었군.', en: 'Another pair of eyes come to weigh my halberd.' },
    ],
    death: [
      { ko: '적토마여… 나를 두고 어디로 가느냐.', en: 'Red Hare… where do you go, leaving me behind?' },
      { ko: '가까이 둔 칼이… 끝내 나를 겨눴는가.', en: 'The blade I kept close… turned on me at last.' },
    ],
  },
  xiahoudun: {
    appear: [
      { ko: '부모의 눈을 화살째 삼킨 하후돈이다!', en: 'Xiahou Dun — I swallowed my own eye, arrow and all!' },
      { ko: '내 한 발은 주공 막사 앞에 박혔다. 물러서지 않는다.', en: 'My foot is planted before my lord’s tent — I do not retreat.' },
    ],
    death: [
      { ko: '남은 한 눈에… 주공의 깃발이 흐려진다.', en: 'In my one eye… my lord’s banner grows dim.' },
      { ko: '막사 앞… 첫 한 발을 이제야 뒤로 떼는가.', en: 'Before the tent… now at last my foot steps back.' },
    ],
  },
  sunce: {
    appear: [
      { ko: '강동은 내가 세웠다. 소패왕의 창을 받아라!', en: 'I forged Jiangdong. Take the Little Conqueror’s spear!' },
      { ko: '낡은 부곡이 노를 잡았다. 새 깃발이 그 뒤를 친다!', en: 'Old retainers man the oars — the new banner strikes behind!' },
    ],
    death: [
      { ko: '강동을 아우에게… 손권, 뒤를 맡긴다.', en: 'Jiangdong to my brother… Sun Quan, hold it.' },
      { ko: '너무 빨리 열린 문이… 나를 삼키는구나.', en: 'The gate that opened too fast… swallows me now.' },
    ],
  },
  simayi: {
    appear: [
      { ko: '죽은 공명도 산 중달을 이기지 못했다.', en: 'Even dead Kongming never bested the living Zhongda.' },
      { ko: '낙엽은 담 밑까지 몰아 한 번에 거둔다.', en: 'I sweep the leaves to the wall, then take them all at once.' },
    ],
    death: [
      { ko: '때를 기다린 내가… 그 때에 잡히는구나.', en: 'I who waited for the hour… am seized by it.' },
      { ko: '아껴 둔 북소리를… 끝내 울리지 못했다.', en: 'The war-drum I hoarded… I never got to sound.' },
    ],
  },
  zhouyu: {
    appear: [
      { ko: '적벽에 동남풍이 분다. 불바다를 보아라!', en: 'The southeast wind rises at Chibi. Behold the inferno!' },
      { ko: '묶인 배는 한 덩이 장작이다. 불씨 하나면 된다.', en: 'Chained ships are one great pyre — a single spark will do.' },
    ],
    death: [
      { ko: '하늘이 주유를 내고 어찌 공명을 냈는가…', en: 'Heaven bore Yu — why then did it bear Liang?' },
      { ko: '음이 틀렸다… 이 한 줄이 불길의 길을 바꾸는가.', en: 'A false note… does this one string turn the fire’s path?' },
    ],
  },
  dianwei: {
    appear: [
      { ko: '주공께는 손대지 못한다. 이 문은 전위가 막는다!', en: 'None shall touch my lord. Dian Wei bars this gate!' },
      { ko: '문은 좁아야 좋다. 한 사람만 들면 한 사람만 막는다.', en: 'A narrow gate is best — one enters, one is stopped.' },
    ],
    death: [
      { ko: '이 문만은… 내 주검으로 막으리라.', en: 'This gate alone… I hold with my corpse.' },
      { ko: '떨리는 팔로도… 다섯 걸음은 지켰다.', en: 'Even with trembling arms… I held the five paces.' },
    ],
  },
  gaoshun: {
    appear: [
      { ko: '함진영이 나선다. 무너지되 물러서지 않는다.', en: 'The Trap-Breaker Camp advances. We fall, never retreat.' },
      { ko: '일곱 줄이다. 한 줄이 비면 그 자리부터 진다.', en: 'Seven ranks. Where one empties, there we lose.' },
    ],
    death: [
      { ko: '여포공을 따라… 하비에서 스러지는가.', en: 'Following Lord Lü… I fade at Xiapi.' },
      { ko: '끊긴 줄 하나… 그게 나였구나.', en: 'One broken rank… and it was mine.' },
    ],
  },
  xiahouyuan: {
    appear: [
      { ko: '사흘에 오백 리, 질풍의 하후연이다!', en: 'Five hundred li in three days — Xiahou Yuan the gale!' },
      { ko: '성을 보면 늦는다. 나는 성 밖 길목을 친다!', en: 'Eye the walls and you’re late — I strike the road beyond!' },
    ],
    death: [
      { ko: '정군산 안개 속에… 목이 가벼워졌다.', en: 'In the mist of Dingjun… my head has gone light.' },
      { ko: '한 번 보고 친 길이… 내 뒤를 비웠구나.', en: 'The road I struck on sight… left my own rear bare.' },
    ],
  },
  lumeng: {
    appear: [
      { ko: '흰 옷으로 강을 건넜다. 형주는 이미 오의 것.', en: 'In white robes I crossed the river. Jing is Wu’s now.' },
      { ko: '병이라 적은 문서가 먼저 강을 건넜다.', en: 'A letter feigning illness crossed the river first.' },
    ],
    death: [
      { ko: '관공의 원혼이… 나를 부르는구나.', en: 'The wronged spirit of Lord Guan… calls me.' },
      { ko: '늦게 잡은 책도… 여기서 덮이는가.', en: 'The book I took up late… closes here.' },
    ],
  },
  luxun: {
    appear: [
      { ko: '서생이라 얕보았느냐. 이릉의 불줄을 받아라!', en: 'You scorned a scholar? Take the fire-line of Yiling!' },
      { ko: '더운 바람이 먼저 일하게 두었다. 긴 영채가 탄다.', en: 'I let the hot wind work first — the long camp burns.' },
    ],
    death: [
      { ko: '촉을 삼킨 불도… 끝내 재만 남기는구나.', en: 'Even the fire that ate Shu… leaves only ash.' },
      { ko: '얇은 종이로 눌렀으나… 나도 눌리는구나.', en: 'I pressed with thin paper… now I too am pressed.' },
    ],
  },
};

// 현재 언어로 보스 대사 조회(풀에서 1줄 랜덤). 없으면 빈 문자열.
// 등장/처치 이벤트당 1줄 노출은 그대로 — 풀만 넓혀 재대면 시 반복감을 줄인다.
export function bossLine(id: string, kind: 'appear' | 'death'): string {
  const b = BOSS_LINES[id];
  if (!b) return '';
  const pool = b[kind];
  if (!pool || pool.length === 0) return '';
  const l = pool[Math.floor(Math.random() * pool.length)];
  return getLang() === 'en' ? l.en : l.ko;
}
