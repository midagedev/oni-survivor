// 보스 등장/처치 1줄 대사 (한/영). 배너 옆 짧은 위압 대사 — 40자 이내.
// 원천: three-kingdoms-mud gunungjeon q4 메인 퀘스트 스레드(황건/동탁의 난/관도/적벽/한중/
//   이릉/북벌 …)의 서사 톤을 보스별 전역에 매칭해 발췌·번안. 정사/연의의 대표 일화를 압축.
//   전역 매칭: 관도=원소 · 동탁의 난=동탁/여포/하후돈 · 강동=손책 · 적벽=주유 · 완성=전위 ·
//   하비 함진영=고순 · 한중 정군산=하후연 · 형주=여몽 · 이릉=육손 · 북벌=사마의.
// 순수 데이터. phase2 보스 로스터(#35)가 소비.
import { getLang } from '../core/i18n';

export interface BossLine {
  appear: { ko: string; en: string };
  death: { ko: string; en: string };
}

export const BOSS_LINES: Record<string, BossLine> = {
  yuanshao: {
    appear: { ko: '하북의 대군이다. 관도의 둑을 넘을 성싶으냐.', en: 'The host of Hebei. Think you to cross the Guandu dike?' },
    death: { ko: '군세는 컸으나… 내 결단이 늦었구나.', en: 'My armies were vast… my resolve came too late.' },
  },
  dongzhuo: {
    appear: { ko: '낙양을 불사른 이 몸이 두렵지 않으냐!', en: 'I burned Luoyang to ash. Do you not fear me?' },
    death: { ko: '재로 세운 권세가… 재로 돌아가는가.', en: 'Power raised from ash… returns to ash.' },
  },
  lvbu: {
    appear: { ko: '천하의 여포다. 나를 당할 자 있거든 나오라!', en: 'I am Lü Bu. Let any who can match me step forth!' },
    death: { ko: '적토마여… 나를 두고 어디로 가느냐.', en: 'Red Hare… where do you go, leaving me behind?' },
  },
  xiahoudun: {
    appear: { ko: '부모의 눈을 화살째 삼킨 하후돈이다!', en: 'Xiahou Dun — I swallowed my own eye, arrow and all!' },
    death: { ko: '남은 한 눈에… 주공의 깃발이 흐려진다.', en: 'In my one eye… my lord’s banner grows dim.' },
  },
  sunce: {
    appear: { ko: '강동은 내가 세웠다. 소패왕의 창을 받아라!', en: 'I forged Jiangdong. Take the Little Conqueror’s spear!' },
    death: { ko: '강동을 아우에게… 손권, 뒤를 맡긴다.', en: 'Jiangdong to my brother… Sun Quan, hold it.' },
  },
  simayi: {
    appear: { ko: '죽은 공명도 산 중달을 이기지 못했다.', en: 'Even dead Kongming never bested the living Zhongda.' },
    death: { ko: '때를 기다린 내가… 그 때에 잡히는구나.', en: 'I who waited for the hour… am seized by it.' },
  },
  zhouyu: {
    appear: { ko: '적벽에 동남풍이 분다. 불바다를 보아라!', en: 'The southeast wind rises at Chibi. Behold the inferno!' },
    death: { ko: '하늘이 주유를 내고 어찌 공명을 냈는가…', en: 'Heaven bore Yu — why then did it bear Liang?' },
  },
  dianwei: {
    appear: { ko: '주공께는 손대지 못한다. 이 문은 전위가 막는다!', en: 'None shall touch my lord. Dian Wei bars this gate!' },
    death: { ko: '이 문만은… 내 주검으로 막으리라.', en: 'This gate alone… I hold with my corpse.' },
  },
  gaoshun: {
    appear: { ko: '함진영이 나선다. 무너지되 물러서지 않는다.', en: 'The Trap-Breaker Camp advances. We fall, never retreat.' },
    death: { ko: '여포공을 따라… 하비에서 스러지는가.', en: 'Following Lord Lü… I fade at Xiapi.' },
  },
  xiahouyuan: {
    appear: { ko: '사흘에 오백 리, 질풍의 하후연이다!', en: 'Five hundred li in three days — Xiahou Yuan the gale!' },
    death: { ko: '정군산 안개 속에… 목이 가벼워졌다.', en: 'In the mist of Dingjun… my head has gone light.' },
  },
  lumeng: {
    appear: { ko: '흰 옷으로 강을 건넜다. 형주는 이미 오의 것.', en: 'In white robes I crossed the river. Jing is Wu’s now.' },
    death: { ko: '관공의 원혼이… 나를 부르는구나.', en: 'The wronged spirit of Lord Guan… calls me.' },
  },
  luxun: {
    appear: { ko: '서생이라 얕보았느냐. 이릉의 불줄을 받아라!', en: 'You scorned a scholar? Take the fire-line of Yiling!' },
    death: { ko: '촉을 삼킨 불도… 끝내 재만 남기는구나.', en: 'Even the fire that ate Shu… leaves only ash.' },
  },
};

// 현재 언어로 보스 대사 조회. 없으면 빈 문자열.
export function bossLine(id: string, kind: 'appear' | 'death'): string {
  const b = BOSS_LINES[id];
  if (!b) return '';
  return getLang() === 'en' ? b[kind].en : b[kind].ko;
}
