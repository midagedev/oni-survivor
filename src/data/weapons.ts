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
  hinokami: { id: 'hinokami', name: '히노카미 카구라 · 원무', hanja: '日暈ノ龍', maxLevel: 8, desc: '물의 궤적을 태양의 원환으로 잇는 전방 연속참', evolution: true },
  zhanma: { id: 'zhanma', name: '십일의 형 나기', hanja: '拾壱ノ型 凪', maxLevel: 8, desc: '고요한 물의 방어권으로 적탄과 접근 공격을 지운다', evolution: true },
  beast_secret: { id: 'beast_secret', name: '폭렬 공간식각', hanja: '爆裂空間識覚', maxLevel: 8, desc: '적이 밀집한 길을 찢고 X자로 마무리하는 쌍검 난무', evolution: true },
  bamen: { id: 'bamen', name: '종의 형 · 피안주안', hanja: '終ノ型 彼岸朱眼', maxLevel: 8, desc: '약점을 추적해 한 점으로 수렴하는 정밀 꽃 참격', evolution: true },
  chibi: { id: 'chibi', name: '폭혈 업화', hanja: '爆血業火', maxLevel: 8, desc: '전진하는 혈폭풍 해일', evolution: true },
  tianfa: { id: 'tianfa', name: '벽력일섬 신속', hanja: '霹靂一閃·神速', maxLevel: 8, desc: '전방을 한 번에 꿰뚫는 용형 번개 단일 궤적', evolution: true },
  yuanrong: { id: 'yuanrong', name: '지네의 춤 · 백족사복', hanja: '百足蛇腹', maxLevel: 8, desc: '약점을 연속 관통해 독꽃을 피우는 고속 독침', evolution: true },
  rengoku_secret: { id: 'rengoku_secret', name: '오의 · 제9형 연옥', hanja: '奥義 玖ノ型 煉獄', maxLevel: 8, desc: '거대한 화염 회랑을 돌파하는 필사의 전진참', evolution: true },
  love_secret: { id: 'love_secret', name: '요동하는 연정', hanja: '恋情乱舞', maxLevel: 8, desc: '끊기지 않는 대형 S자 채찍검 연격', evolution: true },
  mist_secret: { id: 'mist_secret', name: '제7형 · 몽롱', hanja: '漆ノ型 朧', maxLevel: 8, desc: '잔상 사이에 실제 절단선 하나를 숨기는 안개 순보', evolution: true },
  sound_secret: { id: 'sound_secret', name: '악보 완성 · 폭음참', hanja: '譜面完成 爆音斬', maxLevel: 8, desc: '전방 세 지점을 정확한 세 박자로 연결 폭파', evolution: true },
  wind_secret: { id: 'wind_secret', name: '제9형 · 이다텐 태풍', hanja: '玖ノ型 韋駄天台風', maxLevel: 8, desc: '조준 방향으로 넓어지는 세 겹 칼바람 회랑', evolution: true },
  stone_secret: { id: 'stone_secret', name: '제5형 · 와륜·형부', hanja: '伍ノ型 瓦輪刑部', maxLevel: 8, desc: '철구·사슬·도끼가 맞물리는 삼단 강타', evolution: true },
};

// 비전 각성: 자기 고유 무기 Lv8 + 두 계보 분기 완성 → 보물상자에서 각성.
export interface EvolutionRule {
  heroId: string; // 다른 캐릭터가 이 비전을 훔쳐 배우지 못하도록 소유권 고정
  from: string; // 기반 무기 id
  to: string; // 진화 무기 id
}

export const EVOLUTIONS: EvolutionRule[] = [
  { heroId: 'tanjiro', from: 'spear', to: 'hinokami' },
  { heroId: 'tomioka', from: 'guandao', to: 'zhanma' },
  { heroId: 'nezuko', from: 'fire', to: 'chibi' },
  { heroId: 'kanroji', from: 'love', to: 'love_secret' },
  { heroId: 'shinobu', from: 'crossbow', to: 'yuanrong' },
  { heroId: 'kanao', from: 'baiyu', to: 'bamen' },
  { heroId: 'rengoku', from: 'cavalry', to: 'rengoku_secret' },
  { heroId: 'zenitsu', from: 'thunder', to: 'tianfa' },
  { heroId: 'inosuke', from: 'zhangba', to: 'beast_secret' },
  { heroId: 'tokito', from: 'mist', to: 'mist_secret' },
  { heroId: 'uzui', from: 'sound', to: 'sound_secret' },
  { heroId: 'sanemi', from: 'wind', to: 'wind_secret' },
  { heroId: 'himejima', from: 'stone', to: 'stone_secret' },
];
