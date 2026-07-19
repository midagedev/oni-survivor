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
  spear: { id: 'spear', name: '물의 호흡', hanja: '水の呼吸', maxLevel: 8, desc: '전방 관통 물의 참격' },
  guandao: { id: 'guandao', name: '잔잔한 물결', hanja: '凪', maxLevel: 8, desc: '전방 넓은 부채꼴 참격' },
  zhangba: { id: 'zhangba', name: '짐승의 호흡', hanja: '獣の呼吸', maxLevel: 8, desc: '전후방 송곳니 참격' },
  baiyu: { id: 'baiyu', name: '꽃의 호흡', hanja: '花の呼吸', maxLevel: 8, desc: '유도하는 붉은 꽃잎 참격' },
  crossbow: { id: 'crossbow', name: '벌레의 호흡', hanja: '蟲の呼吸', maxLevel: 8, desc: '가장 가까운 적 자동 독침' },
  fire: { id: 'fire', name: '혈귀술 폭혈격', hanja: '爆血擊', maxLevel: 8, desc: '전방 발차기 참격 후 폭혈 장판 형성' },
  thunder: { id: 'thunder', name: '번개의 호흡', hanja: '雷の呼吸', maxLevel: 8, desc: '신속의 일격 무작위 낙뢰' },
  orbit: { id: 'orbit', name: '등꽃 부적', hanja: '藤の護符', maxLevel: 8, desc: '주위를 도는 등꽃 수호구' },
  halberd: { id: 'halberd', name: '파괴살', hanja: '破壊殺', maxLevel: 8, desc: '360° 전방위 충격파 난무' },
  cavalry: { id: 'cavalry', name: '화염의 호흡', hanja: '炎の呼吸', maxLevel: 8, desc: '돌진하는 불호랑이 소환' },
  love: { id: 'love', name: '사랑의 호흡', hanja: '恋の呼吸', maxLevel: 8, desc: '유연한 채찍검 광역 참격' },
  mist: { id: 'mist', name: '안개의 호흡', hanja: '霞の呼吸', maxLevel: 8, desc: '전방 순보 다중 찌르기' },
  sound: { id: 'sound', name: '음의 호흡', hanja: '音の呼吸', maxLevel: 8, desc: '전방 폭약 폭명 충격파' },
  wind: { id: 'wind', name: '바람의 호흡', hanja: '風の呼吸', maxLevel: 8, desc: '회오리 참격과 칼바람 참격파' },
  stone: { id: 'stone', name: '바위의 호흡', hanja: '岩の呼吸', maxLevel: 8, desc: '전방 철구 강타 충격파' },
  // 진화
  zhanma: { id: 'zhanma', name: '십일의 형 나기', hanja: '拾壱ノ型 凪', maxLevel: 8, desc: '회전하는 푸른 물 참격파 발사', evolution: true },
  bamen: { id: 'bamen', name: '등꽃 결계', hanja: '藤結界', maxLevel: 8, desc: '관통하는 등꽃 기운 폭풍', evolution: true },
  chibi: { id: 'chibi', name: '폭혈 업화', hanja: '爆血業火', maxLevel: 8, desc: '전진하는 혈폭풍 해일', evolution: true },
  tianfa: { id: 'tianfa', name: '벽력일섬 신속', hanja: '霹靂一閃·神速', maxLevel: 8, desc: '적 사이를 전이하는 번개', evolution: true },
  yuanrong: { id: 'yuanrong', name: '나비의 춤 화살비', hanja: '蝶ノ舞·嵐', maxLevel: 8, desc: '전방위 독침 투사체 폭풍', evolution: true },
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
