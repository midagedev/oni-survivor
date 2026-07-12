// 무기 메타데이터 + 진화 규칙. 실제 동작은 game/weapons/roster.ts.
export interface WeaponDef {
  id: string;
  name: string; // 한글
  hanja: string;
  maxLevel: number;
  desc: string; // 카드 설명
  evolution?: boolean;
}

export const WEAPON_DEFS: Record<string, WeaponDef> = {
  spear: { id: 'spear', name: '용담창', hanja: '龍膽槍', maxLevel: 8, desc: '전방 관통 찌르기' },
  guandao: { id: 'guandao', name: '청룡언월도', hanja: '靑龍偃月刀', maxLevel: 8, desc: '전방 부채꼴 참격' },
  zhangba: { id: 'zhangba', name: '장팔사모', hanja: '丈八蛇矛', maxLevel: 8, desc: '전후 동시 찌르기 + 넉백' },
  baiyu: { id: 'baiyu', name: '백우선', hanja: '白羽扇', maxLevel: 8, desc: '호밍 부적 투사체' },
  crossbow: { id: 'crossbow', name: '제갈연노', hanja: '諸葛連弩', maxLevel: 8, desc: '최근접 적 자동 연사' },
  fire: { id: 'fire', name: '화계', hanja: '火計', maxLevel: 8, desc: '발밑 화염 장판' },
  thunder: { id: 'thunder', name: '천뢰', hanja: '天雷', maxLevel: 8, desc: '적 머리 위 낙뢰' },
  orbit: { id: 'orbit', name: '팔진도', hanja: '八陣圖', maxLevel: 8, desc: '주위 회전 태극 오브' },
  halberd: { id: 'halberd', name: '방천화극', hanja: '方天畵戟', maxLevel: 8, desc: '360° 회전 휩쓸기' },
  cavalry: { id: 'cavalry', name: '서량철기', hanja: '西涼鐵騎', maxLevel: 8, desc: '기마 돌격 소환' },
  // 진화
  zhanma: { id: 'zhanma', name: '참마검', hanja: '斬馬劍', maxLevel: 8, desc: '회전 참격파 발사', evolution: true },
  bamen: { id: 'bamen', name: '팔문금쇄진', hanja: '八門金鎖陣', maxLevel: 8, desc: '관통 부적 폭풍', evolution: true },
  chibi: { id: 'chibi', name: '적벽업화', hanja: '赤壁業火', maxLevel: 8, desc: '전진하는 화염 해일', evolution: true },
  tianfa: { id: 'tianfa', name: '천벌뇌정', hanja: '天罰雷霆', maxLevel: 8, desc: '적간 연쇄 번개', evolution: true },
  yuanrong: { id: 'yuanrong', name: '원융노', hanja: '元戎弩', maxLevel: 8, desc: '전방위 연사', evolution: true },
};

// 진화: 기반 무기 Lv8 + 지정 패시브 보유 → 엘리트 보물상자에서 진화.
export interface EvolutionRule {
  from: string; // 기반 무기 id
  passive: string; // 필요 패시브 id
  to: string; // 진화 무기 id
}

export const EVOLUTIONS: EvolutionRule[] = [
  { from: 'guandao', passive: 'armor', to: 'zhanma' },
  { from: 'baiyu', passive: 'warbook', to: 'bamen' },
  { from: 'fire', passive: 'wine', to: 'chibi' },
  { from: 'thunder', passive: 'talismanho', to: 'tianfa' },
  { from: 'crossbow', passive: 'vermilion', to: 'yuanrong' },
];
