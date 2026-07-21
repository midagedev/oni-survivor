// 캐릭터 고유 성장 계보의 단일 진실 공급원.
// 런에서는 다른 대원의 호흡을 배우지 않고, 이 계보의 형/분기/비전만 성장한다.

export interface TechniqueForm {
  name: string;
  hanja: string;
}

export interface LineageModifiers {
  damageMul: number;
  cooldownMul: number;
  speedMul: number;
  maxHpMul: number;
  rangeMul: number;
  areaMul: number;
  dmgReduction: number;
  projectileBonus: number;
  musouPowerMul: number;
  musouChargeMul: number;
}

export interface LineageBranch {
  id: string;
  name: string;
  hanja: string;
  desc: string;
  effect: string;
  mods: Partial<LineageModifiers>;
}

export interface LineageFork {
  // 이 레벨로 오를 때 두 갈래 중 하나를 선택한다.
  targetLevel: 3 | 6;
  title: string;
  branches: readonly [LineageBranch, LineageBranch];
}

export interface UltimateProfile {
  name: string;
  hanja: string;
  desc: string;
  duration: number;
  enemyTimeScale: number;
  crest: string;
  color: string;
}

export interface HeroSkillTree {
  heroId: string;
  lineage: string;
  hanja: string;
  accent: string;
  signatureWeapon: string;
  forms: readonly [TechniqueForm, TechniqueForm, TechniqueForm, TechniqueForm, TechniqueForm, TechniqueForm, TechniqueForm, TechniqueForm];
  forks: readonly [LineageFork, LineageFork];
  secret: {
    weaponId: string;
    // 비전 각성 조건이 아니라 이 계보와 잘 맞는 공용 수련 추천이다.
    synergyPassiveId: string;
    name: string;
    hanja: string;
    desc: string;
  };
  ultimate: UltimateProfile;
}

const form = (name: string, hanja: string): TechniqueForm => ({ name, hanja });
const branch = (
  id: string,
  name: string,
  hanja: string,
  desc: string,
  effect: string,
  mods: Partial<LineageModifiers>,
): LineageBranch => ({ id, name, hanja, desc, effect, mods });

export const SUPPORT_WEAPON_IDS = ['orbit', 'caltrop', 'poison', 'twinring'] as const;

export const HERO_SKILL_TREES: Record<string, HeroSkillTree> = {
  tanjiro: {
    heroId: 'tanjiro', lineage: '물과 태양의 계보', hanja: '水日ノ系譜', accent: '#ff8748', signatureWeapon: 'spear',
    forms: [
      form('제1형 · 수면 베기', '壱ノ型 水面斬り'), form('제2형 · 물방아', '弐ノ型 水車'),
      form('제3형 · 유유춤', '参ノ型 流流舞い'), form('제4형 · 들이친 파도', '肆ノ型 打ち潮'),
      form('제5형 · 가뭄의 단비', '伍ノ型 干天の慈雨'), form('제6형 · 비틀린 소용돌이', '陸ノ型 ねじれ渦'),
      form('제10형 · 생생유전', '拾ノ型 生生流転'), form('수일 연무 · 완성', '水日円環'),
    ],
    forks: [
      { targetLevel: 3, title: '물의 흐름을 정한다', branches: [
        branch('tanjiro_flow', '끊기지 않는 물결', '連流', '유유춤의 호흡을 이어 공격 간격과 이동을 부드럽게 만든다.', '쿨다운 -8% · 이동속도 +5%', { cooldownMul: 0.92, speedMul: 1.05 }),
        branch('tanjiro_sun', '태양의 기억', '日輪', '상처를 감수하고도 전진하는 불꽃의 호흡으로 위력을 끌어낸다.', '공격력 +10% · 범위 +5%', { damageMul: 1.1, areaMul: 1.05 }),
      ] },
      { targetLevel: 6, title: '이어질 춤을 완성한다', branches: [
        branch('tanjiro_dragon', '생생유전', '水龍', '연속되는 참격을 수룡의 궤적으로 키운다.', '사거리 +10% · 공격력 +7%', { rangeMul: 1.1, damageMul: 1.07 }),
        branch('tanjiro_resonance', '원무 공명', '円舞', '히노카미 카구라의 호흡을 오의와 공명시킨다.', '오의 충전 +15% · 오의 위력 +22%', { musouChargeMul: 1.15, musouPowerMul: 1.22 }),
      ] },
    ],
    secret: { weaponId: 'hinokami', synergyPassiveId: 'horseshoe', name: '히노카미 카구라 · 원무', hanja: '日暈ノ龍', desc: '물의 궤적이 태양의 원환으로 이어지는 전방 연속참' },
    ultimate: { name: '히노카미 카구라 · 연속 원무', hanja: '円舞連斬', desc: '불꽃의 궤적을 닫아 태양의 용으로 돌파한다.', duration: 4.2, enemyTimeScale: 0.42, crest: '陽', color: '#ff7540' },
  },
  tomioka: {
    heroId: 'tomioka', lineage: '고요한 물의 계보', hanja: '静水ノ系譜', accent: '#4faeff', signatureWeapon: 'guandao',
    forms: [
      form('제1형 · 수면 베기', '壱ノ型 水面斬り'), form('제2형 · 물방아', '弐ノ型 水車'),
      form('제3형 · 유유춤', '参ノ型 流流舞い'), form('제4형 · 들이친 파도', '肆ノ型 打ち潮'),
      form('제6형 · 비틀린 소용돌이', '陸ノ型 ねじれ渦'), form('제7형 · 물방울 파문 찌르기', '漆ノ型 雫波紋突き'),
      form('제10형 · 생생유전', '拾ノ型 生生流転'), form('수경지심 · 완성', '水鏡止心'),
    ],
    forks: [
      { targetLevel: 3, title: '물의 호흡을 가다듬는다', branches: [
        branch('tomioka_still', '고요의 간격', '静間', '움직임을 줄이고 적의 빈틈을 더 넓게 끊는다.', '받는 피해 -6% · 범위 +8%', { dmgReduction: 0.06, areaMul: 1.08 }),
        branch('tomioka_current', '흐르는 검선', '流水', '짧은 간격으로 물결 참격을 겹친다.', '쿨다운 -9% · 사거리 +6%', { cooldownMul: 0.91, rangeMul: 1.06 }),
      ] },
      { targetLevel: 6, title: '나기에 이르는 길', branches: [
        branch('tomioka_counter', '수면의 반격', '水鏡', '고요 속에서 버티며 강한 반격의 순간을 만든다.', '공격력 +8% · 받는 피해 -5%', { damageMul: 1.08, dmgReduction: 0.05 }),
        branch('tomioka_nagi', '나기 공명', '凪心', '오의의 정적을 오래 유지하고 중심을 지킨다.', '오의 충전 +12% · 오의 위력 +18%', { musouChargeMul: 1.12, musouPowerMul: 1.18 }),
      ] },
    ],
    secret: { weaponId: 'zhanma', synergyPassiveId: 'armor', name: '제11형 · 나기', hanja: '拾壱ノ型 凪', desc: '다가오는 공격을 고요한 수면 안에서 끊어내는 절대 방어' },
    ultimate: { name: '제11형 · 나기', hanja: '拾壱ノ型 凪', desc: '거센 폭발 대신 닿는 적을 고요 속에서 절단한다.', duration: 4, enemyTimeScale: 0.2, crest: '水', color: '#4faeff' },
  },
  nezuko: {
    heroId: 'nezuko', lineage: '폭혈의 계보', hanja: '爆血ノ系譜', accent: '#ff5d9e', signatureWeapon: 'fire',
    forms: [
      form('혈귀의 발차기', '鬼脚'), form('혈흔 새기기', '血印'), form('지연 점화', '遅燃'), form('폭혈', '爆血'),
      form('혈염 지대', '血炎陣'), form('혈흔 연쇄', '連血'), form('홍련 재생', '紅蓮再生'), form('폭혈 제어 · 완성', '爆血制御'),
    ],
    forks: [
      { targetLevel: 3, title: '폭혈의 성질을 정한다', branches: [
        branch('nezuko_chain', '혈흔 전염', '血伝', '폭혈의 흔적이 더 넓은 적 무리로 번진다.', '범위 +12% · 사거리 +6%', { areaMul: 1.12, rangeMul: 1.06 }),
        branch('nezuko_regen', '귀의 재생', '鬼癒', '강인한 생명력으로 근접 전투를 버틴다.', '최대체력 +12% · 받는 피해 -4%', { maxHpMul: 1.12, dmgReduction: 0.04 }),
      ] },
      { targetLevel: 6, title: '혈염의 끝을 선택한다', branches: [
        branch('nezuko_inferno', '업화의 발차기', '業火脚', '첫 타격과 점화의 폭발력을 함께 높인다.', '공격력 +12% · 범위 +6%', { damageMul: 1.12, areaMul: 1.06 }),
        branch('nezuko_burst', '폭혈 공명', '爆血心', '표식의 연쇄 점화를 오의로 압축한다.', '오의 충전 +16% · 오의 위력 +20%', { musouChargeMul: 1.16, musouPowerMul: 1.2 }),
      ] },
    ],
    secret: { weaponId: 'chibi', synergyPassiveId: 'wine', name: '폭혈 업화', hanja: '爆血業火', desc: '전방의 혈흔을 차례로 점화하는 혈염 해일' },
    ultimate: { name: '폭혈 · 연쇄점화', hanja: '爆血連鎖', desc: '흩어진 혈흔을 차례로 피워 적만 불태운다.', duration: 4.4, enemyTimeScale: 0.48, crest: '血', color: '#ff5d9e' },
  },
  kanroji: {
    heroId: 'kanroji', lineage: '사랑의 계보', hanja: '恋ノ系譜', accent: '#ff75b7', signatureWeapon: 'love',
    forms: [
      form('유연검 기초', '柔剣'), form('제1형 · 첫사랑의 전율', '壱ノ型 初恋のわななき'),
      form('제2형 · 번뇌하는 사랑', '弐ノ型 懊悩巡る恋'), form('제3형 · 사랑 고양이 소나기', '参ノ型 恋猫しぐれ'),
      form('탄성 회수', '恋輪'), form('제5형 · 흔들리는 사랑·난조', '伍ノ型 揺らめく恋情・乱れ爪'),
      form('제6형 · 고양이발 사랑바람', '陸ノ型 猫足恋風'), form('연검 궤도 · 완성', '恋軌完成'),
    ],
    forks: [
      { targetLevel: 3, title: '채찍검의 리듬을 정한다', branches: [
        branch('kanroji_agile', '고양이발', '猫足', '가볍게 파고들며 공격과 이동의 박자를 당긴다.', '이동속도 +8% · 쿨다운 -7%', { speedMul: 1.08, cooldownMul: 0.93 }),
        branch('kanroji_whip', '유연한 연정', '柔恋', '검끝의 탄성과 휘어지는 범위를 키운다.', '범위 +13% · 사거리 +8%', { areaMul: 1.13, rangeMul: 1.08 }),
      ] },
      { targetLevel: 6, title: '사랑의 검선을 완성한다', branches: [
        branch('kanroji_strength', '괴력의 회수', '恋力', '되감기는 검끝에 괴력을 싣는다.', '공격력 +12% · 최대체력 +6%', { damageMul: 1.12, maxHpMul: 1.06 }),
        branch('kanroji_dance', '연정 공명', '恋舞', '오의의 S자 궤적을 더 강하게 이어 붙인다.', '오의 충전 +14% · 오의 위력 +20%', { musouChargeMul: 1.14, musouPowerMul: 1.2 }),
      ] },
    ],
    secret: { weaponId: 'love_secret', synergyPassiveId: 'censer', name: '요동하는 연정', hanja: '恋情乱舞', desc: '손끝에서 끊기지 않는 대형 S자 채찍검 연격' },
    ultimate: { name: '사랑의 호흡 · 요동하는 연정', hanja: '恋情乱舞', desc: '휘어지는 검선을 겹쳐 길 전체를 되감는다.', duration: 4.8, enemyTimeScale: 0.56, crest: '恋', color: '#ff75b7' },
  },
  shinobu: {
    heroId: 'shinobu', lineage: '벌레와 독의 계보', hanja: '蟲毒ノ系譜', accent: '#be7cff', signatureWeapon: 'crossbow',
    forms: [
      form('나비의 춤 · 장난', '蝶ノ舞 戯れ'), form('벌 어금니의 춤 · 참된 나부낌', '蜂牙ノ舞 真靡き'),
      form('독 조합 · 등꽃', '藤毒調合'), form('잠자리의 춤 · 복안육각', '蜻蛉ノ舞 複眼六角'),
      form('독꽃 중첩', '毒華'), form('지네의 춤 · 백족사복', '蜈蚣ノ舞 百足蛇腹'),
      form('약점 연속 찌르기', '弱点連突'), form('등꽃 독 조합 · 완성', '藤毒完成'),
    ],
    forks: [
      { targetLevel: 3, title: '독침의 목적을 정한다', branches: [
        branch('shinobu_boss', '벌의 일점', '蜂牙', '한 점을 반복 관통해 강적의 독 중첩을 빠르게 쌓는다.', '공격력 +9% · 사거리 +10%', { damageMul: 1.09, rangeMul: 1.1 }),
        branch('shinobu_cloud', '나비의 산개', '蝶群', '공격 간격을 줄여 더 많은 적에게 독을 묻힌다.', '쿨다운 -10% · 범위 +7%', { cooldownMul: 0.9, areaMul: 1.07 }),
      ] },
      { targetLevel: 6, title: '독의 완성형을 고른다', branches: [
        branch('shinobu_compound', '복안육각', '六毒', '독의 배합을 강화해 직접 피해와 지속 압박을 높인다.', '공격력 +11% · 사거리 +6%', { damageMul: 1.11, rangeMul: 1.06 }),
        branch('shinobu_bloom', '독화 공명', '毒蝶', '오의의 여섯 독침을 독꽃 폭발로 연결한다.', '오의 충전 +18% · 오의 위력 +18%', { musouChargeMul: 1.18, musouPowerMul: 1.18 }),
      ] },
    ],
    secret: { weaponId: 'yuanrong', synergyPassiveId: 'vermilion', name: '지네의 춤 · 백족사복', hanja: '百足蛇腹', desc: '좁은 약점에 독침을 연속으로 꽂아 독꽃을 피운다' },
    ultimate: { name: '잠자리의 춤 · 복안육각', hanja: '複眼六角', desc: '여섯 약점을 초고속으로 찌르고 독꽃을 피운다.', duration: 3.4, enemyTimeScale: 0.38, crest: '蟲', color: '#be7cff' },
  },
  kanao: {
    heroId: 'kanao', lineage: '꽃과 시각의 계보', hanja: '花眼ノ系譜', accent: '#ff7895', signatureWeapon: 'baiyu',
    forms: [
      form('꽃의 호흡 · 기초', '花ノ呼吸'), form('제2형 · 어영매', '弐ノ型 御影梅'),
      form('꽃잎 추적', '追花'), form('제4형 · 홍화의', '肆ノ型 紅花衣'),
      form('제5형 · 헛된 작약', '伍ノ型 徒の芍薬'), form('제6형 · 소용돌이 복숭아', '陸ノ型 渦桃'),
      form('약점 관찰', '観眼'), form('동체시력 · 극', '観眼極'),
    ],
    forks: [
      { targetLevel: 3, title: '꽃잎의 검로를 고른다', branches: [
        branch('kanao_guard', '어영매', '御影梅', '몸 주변을 도는 꽃잎으로 근접 압박을 흘린다.', '범위 +10% · 받는 피해 -5%', { areaMul: 1.1, dmgReduction: 0.05 }),
        branch('kanao_arc', '홍화의', '紅花衣', '넓고 정확한 곡선참으로 먼 적을 쫓는다.', '사거리 +12% · 공격력 +7%', { rangeMul: 1.12, damageMul: 1.07 }),
      ] },
      { targetLevel: 6, title: '눈에 새길 마지막 형', branches: [
        branch('kanao_precision', '약점 개안', '観眼', '위험을 감수하고 빈틈에 더 강한 한 칼을 넣는다.', '공격력 +13% · 쿨다운 -4%', { damageMul: 1.13, cooldownMul: 0.96 }),
        branch('kanao_vermilion', '피안주안 공명', '朱眼', '극한의 동체시력을 오의 한 칼에 집중한다.', '오의 충전 +12% · 오의 위력 +26%', { musouChargeMul: 1.12, musouPowerMul: 1.26 }),
      ] },
    ],
    secret: { weaponId: 'bamen', synergyPassiveId: 'warbook', name: '종의 형 · 피안주안', hanja: '終ノ型 彼岸朱眼', desc: '시간이 느려진 틈에 약점 하나를 가르는 정밀 꽃 참격' },
    ultimate: { name: '종의 형 · 피안주안', hanja: '彼岸朱眼', desc: '세상이 느려진 순간 단 하나의 빈틈을 벤다.', duration: 3.2, enemyTimeScale: 0.16, crest: '花', color: '#ff7895' },
  },
  rengoku: {
    heroId: 'rengoku', lineage: '불꽃의 계보', hanja: '炎ノ系譜', accent: '#ff8a34', signatureWeapon: 'cavalry',
    forms: [
      form('제1형 · 부지화', '壱ノ型 不知火'), form('제2형 · 상승염천', '弐ノ型 昇り炎天'),
      form('제3형 · 기염만상', '参ノ型 気炎万象'), form('제4형 · 성염의 파도', '肆ノ型 盛炎のうねり'),
      form('제5형 · 염호', '伍ノ型 炎虎'), form('화염 회랑', '炎廊'),
      form('불멸의 투지', '不滅闘気'), form('불꽃의 투지 · 완성', '炎心完成'),
    ],
    forks: [
      { targetLevel: 3, title: '불꽃의 전진을 정한다', branches: [
        branch('rengoku_charge', '부지화 돌파', '不知火', '한 줄의 화염 길을 빠르게 뚫는다.', '이동속도 +7% · 사거리 +10%', { speedMul: 1.07, rangeMul: 1.1 }),
        branch('rengoku_tiger', '염호의 송곳니', '炎虎', '불호랑이의 위력과 폭발 범위를 키운다.', '공격력 +12% · 범위 +7%', { damageMul: 1.12, areaMul: 1.07 }),
      ] },
      { targetLevel: 6, title: '마지막 불꽃을 선택한다', branches: [
        branch('rengoku_guard', '성염의 파도', '盛炎', '불꽃의 벽으로 버티며 돌파할 길을 만든다.', '최대체력 +8% · 받는 피해 -5%', { maxHpMul: 1.08, dmgReduction: 0.05 }),
        branch('rengoku_ninth', '연옥 공명', '玖炎', '모든 호흡을 제9형의 한 번의 돌진에 싣는다.', '오의 충전 +10% · 오의 위력 +28%', { musouChargeMul: 1.1, musouPowerMul: 1.28 }),
      ] },
    ],
    secret: { weaponId: 'rengoku_secret', synergyPassiveId: 'armor', name: '오의 · 제9형 연옥', hanja: '奥義 玖ノ型 煉獄', desc: '거대한 화염 회랑을 한 번에 돌파하는 필사의 전진참' },
    ultimate: { name: '오의 · 제9형 연옥', hanja: '玖ノ型 煉獄', desc: '한 줄의 길을 불태우며 끝까지 돌파한다.', duration: 3.8, enemyTimeScale: 0.52, crest: '炎', color: '#ff8a34' },
  },
  zenitsu: {
    heroId: 'zenitsu', lineage: '벽력의 계보', hanja: '雷ノ系譜', accent: '#ffe15a', signatureWeapon: 'thunder',
    forms: [
      form('제1형 · 벽력일섬', '壱ノ型 霹靂一閃'), form('벽력일섬 · 연속', '霹靂一閃 連'),
      form('벽력일섬 · 육련', '霹靂一閃 六連'), form('벽력일섬 · 팔련', '霹靂一閃 八連'),
      form('벽력일섬 · 신속', '霹靂一閃 神速'), form('번개 호흡 극한', '雷息極'),
      form('납도 호흡 · 무음', '納刀無音'), form('벽력일섬 · 극', '霹靂極'),
    ],
    forks: [
      { targetLevel: 3, title: '섬광의 대상을 정한다', branches: [
        branch('zenitsu_six', '육련', '六連', '서로 다른 적을 잇는 여섯 번의 섬광을 단련한다.', '쿨다운 -9% · 사거리 +8%', { cooldownMul: 0.91, rangeMul: 1.08 }),
        branch('zenitsu_eight', '팔련', '八連', '한 적을 몰아붙이는 반복 돌파의 위력을 높인다.', '공격력 +11% · 범위 +5%', { damageMul: 1.11, areaMul: 1.05 }),
      ] },
      { targetLevel: 6, title: '단 한 번의 번개를 완성한다', branches: [
        branch('zenitsu_godspeed', '신속', '神速', '납도와 방출 사이를 극단적으로 줄인다.', '쿨다운 -10% · 이동속도 +8%', { cooldownMul: 0.9, speedMul: 1.08 }),
        branch('zenitsu_thunder_god', '화뢰신 공명', '火雷神', '모든 번개를 용형의 최종 일섬에 압축한다.', '오의 충전 +12% · 오의 위력 +30%', { musouChargeMul: 1.12, musouPowerMul: 1.3 }),
      ] },
    ],
    secret: { weaponId: 'tianfa', synergyPassiveId: 'talismanho', name: '제7형 · 화뢰신', hanja: '漆ノ型 火雷神', desc: '용형 번개가 조준선 하나를 끝까지 가르는 초고속 돌파' },
    ultimate: { name: '벽력일섬 · 육련', hanja: '霹靂一閃 六連', desc: '여섯 섬광의 궤적을 남긴 뒤 한 번에 납도한다.', duration: 2.5, enemyTimeScale: 0.12, crest: '雷', color: '#ffe15a' },
  },
  inosuke: {
    heroId: 'inosuke', lineage: '짐승의 계보', hanja: '獣ノ系譜', accent: '#75d9e8', signatureWeapon: 'zhangba',
    forms: [
      form('제1엄니 · 꿰뚫기', '壱ノ牙 穿ち抜き'), form('제2엄니 · 베어가르기', '弐ノ牙 切り裂き'),
      form('제3엄니 · 뜯어발기기', '参ノ牙 喰い裂き'), form('제4엄니 · 갈기갈기 베기', '肆ノ牙 切細裂き'),
      form('제5엄니 · 미친 찢기', '伍ノ牙 狂い裂き'), form('제7형 · 공간식각', '漆ノ型 空間識覚'),
      form('제8형 · 폭렬맹진', '捌ノ型 爆裂猛進'), form('공간 감각 · 극', '空間識極'),
    ],
    forks: [
      { targetLevel: 3, title: '두 엄니의 사냥법을 고른다', branches: [
        branch('inosuke_fangs', '교차 엄니', '双牙', '두 칼의 교차 간격을 좁혀 정면을 찢는다.', '공격력 +10% · 쿨다운 -5%', { damageMul: 1.1, cooldownMul: 0.95 }),
        branch('inosuke_hunt', '야생의 추적', '獣走', '무리의 냄새를 따라 더 넓고 빠르게 파고든다.', '이동속도 +9% · 범위 +9%', { speedMul: 1.09, areaMul: 1.09 }),
      ] },
      { targetLevel: 6, title: '공간식각의 결론', branches: [
        branch('inosuke_rush', '폭렬맹진', '猛進', '직선 돌진과 넉백을 공격력으로 밀어붙인다.', '공격력 +12% · 최대체력 +6%', { damageMul: 1.12, maxHpMul: 1.06 }),
        branch('inosuke_spatial', '공간식각 공명', '空識', '가장 빽빽한 사냥터를 오의가 더 빨리 찾는다.', '오의 충전 +18% · 오의 위력 +18%', { musouChargeMul: 1.18, musouPowerMul: 1.18 }),
      ] },
    ],
    secret: { weaponId: 'beast_secret', synergyPassiveId: 'horseshoe', name: '폭렬 공간식각', hanja: '爆裂空間識覚', desc: '적이 밀집한 길을 지그재그로 찢고 X자로 끝내는 쌍검 난무' },
    ultimate: { name: '짐승의 호흡 · 공간식각', hanja: '空間識覚', desc: '가장 빽빽한 사냥길을 찾아 쌍검으로 찢는다.', duration: 4, enemyTimeScale: 0.66, crest: '獣', color: '#75d9e8' },
  },
  tokito: {
    heroId: 'tokito', lineage: '안개의 계보', hanja: '霞ノ系譜', accent: '#8be0e8', signatureWeapon: 'mist',
    forms: [
      form('제1형 · 수천원하', '壱ノ型 垂天遠霞'), form('제2형 · 여덟 겹 안개', '弐ノ型 八重霞'),
      form('제3형 · 하산의 물보라', '参ノ型 霞散の飛沫'), form('제4형 · 이류 베기', '肆ノ型 移流斬り'),
      form('제5형 · 하운의 바다', '伍ノ型 霞雲の海'), form('제6형 · 달의 하소', '陸ノ型 月の霞消'),
      form('잔상 보법', '霞歩'), form('안개 보법 · 무영', '霞歩無影'),
    ],
    forks: [
      { targetLevel: 3, title: '안개의 실체를 숨긴다', branches: [
        branch('tokito_layers', '여덟 겹 안개', '八重霞', '잔상을 늘려 넓은 전장을 교란한다.', '범위 +11% · 사거리 +7%', { areaMul: 1.11, rangeMul: 1.07 }),
        branch('tokito_shift', '이류 순보', '移流', '실제 칼날의 공격 주기와 이동을 빠르게 한다.', '쿨다운 -10% · 이동속도 +7%', { cooldownMul: 0.9, speedMul: 1.07 }),
      ] },
      { targetLevel: 6, title: '보이지 않는 한 칼', branches: [
        branch('tokito_unseen', '무영참', '無影', '무해한 잔상 뒤의 실제 칼날을 더 날카롭게 만든다.', '공격력 +12% · 사거리 +8%', { damageMul: 1.12, rangeMul: 1.08 }),
        branch('tokito_obscure', '몽롱 공명', '朧心', '느림과 빠름의 차이를 오의에 집중한다.', '오의 충전 +15% · 오의 위력 +22%', { musouChargeMul: 1.15, musouPowerMul: 1.22 }),
      ] },
    ],
    secret: { weaponId: 'mist_secret', synergyPassiveId: 'talismanho', name: '제7형 · 몽롱', hanja: '漆ノ型 朧', desc: '무해한 잔상 사이에 실제 절단선 하나만 숨기는 안개 순보' },
    ultimate: { name: '제7형 · 몽롱', hanja: '漆ノ型 朧', desc: '모든 잔상이 사라진 뒤 실제 칼날 하나만 남는다.', duration: 4.6, enemyTimeScale: 0.28, crest: '霞', color: '#8be0e8' },
  },
  uzui: {
    heroId: 'uzui', lineage: '음률과 폭발의 계보', hanja: '音律ノ系譜', accent: '#ffc85a', signatureWeapon: 'sound',
    forms: [
      form('폭약 쌍도', '爆薬双刀'), form('제1형 · 굉', '壱ノ型 轟'), form('폭명 3박', '爆鳴三拍'),
      form('제4형 · 향참무간', '肆ノ型 響斬無間'), form('악보 분석', '譜面分析'),
      form('제5형 · 명현주주', '伍ノ型 鳴弦奏々'), form('박자 해독', '拍子解読'), form('악보 분석 · 완성', '譜面完成'),
    ],
    forks: [
      { targetLevel: 3, title: '폭명의 박자를 정한다', branches: [
        branch('uzui_roar', '굉', '轟', '세 번째 강박의 폭발 범위와 위력을 키운다.', '공격력 +10% · 범위 +9%', { damageMul: 1.1, areaMul: 1.09 }),
        branch('uzui_guard', '향참무간', '響斬', '회전하는 쌍도로 빠르게 다음 박자를 준비한다.', '쿨다운 -9% · 받는 피해 -4%', { cooldownMul: 0.91, dmgReduction: 0.04 }),
      ] },
      { targetLevel: 6, title: '전장의 악보를 완성한다', branches: [
        branch('uzui_score', '명현주주', '鳴弦', '박자를 놓치지 않고 폭발을 더 멀리 잇는다.', '사거리 +10% · 이동속도 +6%', { rangeMul: 1.1, speedMul: 1.06 }),
        branch('uzui_finale', '악보 공명', '譜面', '세 박자의 피날레를 오의에 정확히 맞춘다.', '오의 충전 +16% · 오의 위력 +22%', { musouChargeMul: 1.16, musouPowerMul: 1.22 }),
      ] },
    ],
    secret: { weaponId: 'sound_secret', synergyPassiveId: 'vermilion', name: '악보 완성 · 폭음참', hanja: '譜面完成 爆音斬', desc: '전방 세 지점을 짧음·짧음·강함의 박자로 연결 폭파' },
    ultimate: { name: '악보 완성 · 폭음참', hanja: '譜面完成', desc: '전장의 리듬을 읽고 정확한 세 박자로 끝낸다.', duration: 4.5, enemyTimeScale: 0.52, crest: '音', color: '#ffc85a' },
  },
  sanemi: {
    heroId: 'sanemi', lineage: '폭풍의 계보', hanja: '風嵐ノ系譜', accent: '#69e38e', signatureWeapon: 'wind',
    forms: [
      form('제1형 · 진선풍·삭풍', '壱ノ型 塵旋風・削ぎ'), form('제2형 · 조조·시나토 바람', '弐ノ型 爪々・科戸風'),
      form('제3형 · 청람풍수', '参ノ型 晴嵐風樹'), form('제4형 · 상승사진람', '肆ノ型 昇上砂塵嵐'),
      form('제5형 · 목고풍', '伍ノ型 木枯らし颪'), form('제6형 · 흑풍연람', '陸ノ型 黒風烟嵐'),
      form('제7형 · 경풍·천구풍', '漆ノ型 勁風・天狗風'), form('태풍 검로 · 완성', '颱風剣路'),
    ],
    forks: [
      { targetLevel: 3, title: '칼바람의 방향을 정한다', branches: [
        branch('sanemi_crescent', '목고풍', '木枯', '겹초승달을 더 멀리 펼쳐 전방을 넓게 벤다.', '사거리 +11% · 범위 +8%', { rangeMul: 1.11, areaMul: 1.08 }),
        branch('sanemi_rush', '진선풍', '塵旋風', '거칠게 파고들며 공격 간격을 당긴다.', '쿨다운 -8% · 이동속도 +8%', { cooldownMul: 0.92, speedMul: 1.08 }),
      ] },
      { targetLevel: 6, title: '폭풍의 회랑을 연다', branches: [
        branch('sanemi_blackwind', '흑풍연람', '黒風', '근거리 칼바람을 압축해 더 강하게 방출한다.', '공격력 +13% · 범위 +5%', { damageMul: 1.13, areaMul: 1.05 }),
        branch('sanemi_typhoon', '태풍 공명', '台風', '모든 바람을 전진하는 오의 회랑으로 모은다.', '오의 충전 +13% · 오의 위력 +25%', { musouChargeMul: 1.13, musouPowerMul: 1.25 }),
      ] },
    ],
    secret: { weaponId: 'wind_secret', synergyPassiveId: 'warbook', name: '제9형 · 이다텐 태풍', hanja: '玖ノ型 韋駄天台風', desc: '조준 방향으로 넓어지는 세 겹 칼바람의 전진 회랑' },
    ultimate: { name: '바람의 호흡 · 폭풍연참', hanja: '暴風連斬', desc: '칼바람을 한 방향으로 밀어붙여 회랑을 연다.', duration: 4.2, enemyTimeScale: 0.56, crest: '風', color: '#69e38e' },
  },
  himejima: {
    heroId: 'himejima', lineage: '바위와 사슬의 계보', hanja: '岩鎖ノ系譜', accent: '#d3b06a', signatureWeapon: 'stone',
    forms: [
      form('철구와 도끼', '鉄球斧'), form('제1형 · 사문암·쌍극', '壱ノ型 蛇紋岩・双極'),
      form('제2형 · 천면쇄', '弐ノ型 天面砕き'), form('제3형 · 암구의 피부', '参ノ型 岩軀の膚'),
      form('사슬 공명', '鎖響'), form('제4형 · 유문암·속정', '肆ノ型 流紋岩・速征'),
      form('귀환 강타', '帰鎚'), form('사슬 공명 · 완성', '鎖響完成'),
    ],
    forks: [
      { targetLevel: 3, title: '사슬의 무게를 배분한다', branches: [
        branch('himejima_guard', '암구의 피부', '岩軀', '단단히 버티며 철구의 넓은 착탄을 준비한다.', '최대체력 +10% · 받는 피해 -6%', { maxHpMul: 1.1, dmgReduction: 0.06 }),
        branch('himejima_chain', '사문암 쌍극', '双極', '철구와 도끼의 왕복 거리를 더 길게 잇는다.', '사거리 +12% · 공격력 +7%', { rangeMul: 1.12, damageMul: 1.07 }),
      ] },
      { targetLevel: 6, title: '철구와 도끼를 맞물린다', branches: [
        branch('himejima_impact', '천면쇄', '天砕', '착탄점의 충격과 넉백을 더 넓게 퍼뜨린다.', '공격력 +11% · 범위 +10%', { damageMul: 1.11, areaMul: 1.1 }),
        branch('himejima_prayer', '연쇄 공명', '鎖祷', '염주 호흡을 가다듬어 오의의 세 타격을 잇는다.', '오의 충전 +15% · 오의 위력 +20%', { musouChargeMul: 1.15, musouPowerMul: 1.2 }),
      ] },
    ],
    secret: { weaponId: 'stone_secret', synergyPassiveId: 'armor', name: '제5형 · 와륜·형부', hanja: '伍ノ型 瓦輪刑部', desc: '철구·사슬·도끼가 서로 다른 궤도로 맞물리는 삼단 강타' },
    ultimate: { name: '바위의 호흡 · 연쇄 강타', hanja: '岩鎖連撃', desc: '철구, 사슬, 도끼를 하나의 무거운 궤도로 잇는다.', duration: 4.8, enemyTimeScale: 0.42, crest: '岩', color: '#d3b06a' },
  },
};

export function skillTreeFor(heroId: string): HeroSkillTree {
  return HERO_SKILL_TREES[heroId] ?? HERO_SKILL_TREES.tanjiro;
}

export function branchFor(heroId: string, branchId: string): LineageBranch | undefined {
  const tree = HERO_SKILL_TREES[heroId];
  if (!tree) return undefined;
  for (const fork of tree.forks) {
    const found = fork.branches.find((b) => b.id === branchId);
    if (found) return found;
  }
  return undefined;
}

export function aggregateLineageModifiers(heroId: string, branchIds: readonly string[]): LineageModifiers {
  const out: LineageModifiers = {
    damageMul: 1,
    cooldownMul: 1,
    speedMul: 1,
    maxHpMul: 1,
    rangeMul: 1,
    areaMul: 1,
    dmgReduction: 0,
    projectileBonus: 0,
    musouPowerMul: 1,
    musouChargeMul: 1,
  };
  for (const id of branchIds) {
    const mods = branchFor(heroId, id)?.mods;
    if (!mods) continue;
    if (mods.damageMul !== undefined) out.damageMul *= mods.damageMul;
    if (mods.cooldownMul !== undefined) out.cooldownMul *= mods.cooldownMul;
    if (mods.speedMul !== undefined) out.speedMul *= mods.speedMul;
    if (mods.maxHpMul !== undefined) out.maxHpMul *= mods.maxHpMul;
    if (mods.rangeMul !== undefined) out.rangeMul *= mods.rangeMul;
    if (mods.areaMul !== undefined) out.areaMul *= mods.areaMul;
    if (mods.dmgReduction !== undefined) out.dmgReduction += mods.dmgReduction;
    if (mods.projectileBonus !== undefined) out.projectileBonus += mods.projectileBonus;
    if (mods.musouPowerMul !== undefined) out.musouPowerMul *= mods.musouPowerMul;
    if (mods.musouChargeMul !== undefined) out.musouChargeMul *= mods.musouChargeMul;
  }
  return out;
}

export function signatureOwner(weaponId: string): string | undefined {
  for (const tree of Object.values(HERO_SKILL_TREES)) {
    if (tree.signatureWeapon === weaponId || tree.secret.weaponId === weaponId) return tree.heroId;
  }
  return undefined;
}

const ZENITSU_THUNDER_GOD_ULTIMATE: UltimateProfile = {
  name: '제7형 · 화뢰신',
  hanja: '漆ノ型 火雷神',
  desc: '여섯 연격을 버리고 용형 번개 한 줄에 모든 호흡을 압축한다.',
  duration: 2.2,
  enemyTimeScale: 0.1,
  crest: '雷',
  color: '#ffe15a',
};

// 분기 선택이 오의의 이름과 실제 연출까지 바꾸는 단일 조회점.
export function ultimateFor(heroId: string, branchIds: readonly string[] = []): UltimateProfile {
  if (heroId === 'zenitsu' && branchIds.includes('zenitsu_thunder_god')) {
    return ZENITSU_THUNDER_GOD_ULTIMATE;
  }
  return skillTreeFor(heroId).ultimate;
}
