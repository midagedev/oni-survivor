export interface WeaponDef {
  id: string;
  name: string;
  hanja: string;
  maxLevel: number;
  desc: string;
  evolution?: boolean;
}

export const WEAPON_DEFS: Record<string, WeaponDef> = {
  spear: { id: 'spear', name: '물의 호흡', hanja: '水の呼吸', maxLevel: 8, desc: '물줄기 관통 찌르기' },
  guandao: { id: 'guandao', name: '물의 호흡 · 나기', hanja: '凪', maxLevel: 8, desc: '수면 부채꼴 참격' },
  zhangba: { id: 'zhangba', name: '짐승의 호흡', hanja: '獣の呼吸', maxLevel: 8, desc: '쌍 엄니 전후 찢기' },
  baiyu: { id: 'baiyu', name: '혈귀술 · 매혹의 연기', hanja: '惑血の香', maxLevel: 8, desc: '유도 혈귀 투사체' },
  crossbow: { id: 'crossbow', name: '벌레의 호흡', hanja: '蟲の呼吸', maxLevel: 8, desc: '독침 자동 연사' },
  fire: { id: 'fire', name: '혈귀술 · 폭혈', hanja: '爆血', maxLevel: 8, desc: '핏빛 화염 장판' },
  thunder: { id: 'thunder', name: '번개의 호흡 · 벽력일섬', hanja: '霹靂一閃', maxLevel: 8, desc: '초고속 연쇄 참격' },
  orbit: { id: 'orbit', name: '등나무꽃 수호', hanja: '藤の花', maxLevel: 8, desc: '회전 등꽃 수호구' },
  halberd: { id: 'halberd', name: '파괴살 · 나식', hanja: '破壊殺·羅針', maxLevel: 8, desc: '360° 공권 충격파' },
  cavalry: { id: 'cavalry', name: '화염의 호흡 · 염호', hanja: '炎の呼吸·炎虎', maxLevel: 8, desc: '불호랑이 돌격' },
  // 진화
  zhanma: { id: 'zhanma', name: '물의 호흡 · 십일식', hanja: '拾壱ノ型·凪', maxLevel: 8, desc: '수류 회전 참격파', evolution: true },
  bamen: { id: 'bamen', name: '등나무꽃 결계', hanja: '藤の花の結界', maxLevel: 8, desc: '관통 등꽃 부적 폭풍', evolution: true },
  chibi: { id: 'chibi', name: '혈귀술 · 폭혈 난무', hanja: '爆血亂舞', maxLevel: 8, desc: '전진하는 핏빛 화염 해일', evolution: true },
  tianfa: { id: 'tianfa', name: '번개의 호흡 · 육연', hanja: '霹靂一閃·六連', maxLevel: 8, desc: '적간 연쇄 낙뢰', evolution: true },
  yuanrong: { id: 'yuanrong', name: '벌레의 호흡 · 백화요란', hanja: '百花繚亂', maxLevel: 8, desc: '전방위 독침 난사', evolution: true },
};

export interface EvolutionRule {
  from: string;
  passive: string;
  to: string;
}

export const EVOLUTIONS: EvolutionRule[] = [
  { from: 'guandao', passive: 'armor', to: 'zhanma' },
  { from: 'baiyu', passive: 'warbook', to: 'bamen' },
  { from: 'fire', passive: 'wine', to: 'chibi' },
  { from: 'thunder', passive: 'talismanho', to: 'tianfa' },
  { from: 'crossbow', passive: 'vermilion', to: 'yuanrong' },
];
