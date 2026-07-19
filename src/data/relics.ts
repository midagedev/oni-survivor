import type { PlayerStats } from '../game/player';
import { getLang } from '../core/i18n';

// 저주받은 유물 (DESIGN §10). risk-reward 레벨업 카드로 등장(보라색 테두리, 10% 확률, 최대 2개).
// 패시브와 동일하게 stats에 적용하되 강한 이득 + 뚜렷한 대가를 함께 준다.
// 이름/설명은 ko + en(한자는 공통). 표시 시 relicName/relicDesc로 현재 언어 선택.
export interface RelicDef {
  id: string;
  name: string;
  nameEn: string;
  hanja: string;
  desc: string;
  descEn: string;
  apply: (s: PlayerStats) => void;
}

export const RELIC_DEFS: RelicDef[] = [
  {
    id: 'seven_star',
    name: '독낫',
    nameEn: "Gyutaro's Sickle",
    hanja: '毒鎌',
    desc: '공격력 +40%, 최대 체력 -30%',
    descEn: 'Attack +40%, Max HP -30%',
    apply: (s) => {
      s.damageMul *= 1.4;
      s.maxHpMul *= 0.7;
    },
  },
  {
    id: 'bronze_decree',
    name: '무한성 비와 열쇠',
    nameEn: 'Mugen Castle Key',
    hanja: '無限城琵琶鍵',
    desc: '골드 획득 +100%, 이동속도 -15%',
    descEn: 'Gold gain +100%, Move speed -15%',
    apply: (s) => {
      s.goldMul *= 2.0;
      s.speedMul *= 0.85;
    },
  },
  {
    id: 'ox_fan',
    name: '금강엽 부채',
    nameEn: "Doma's Golden Fan",
    hanja: '鐵扇',
    desc: '쿨다운 -25%, 픽업 반경 -50%',
    descEn: 'Cooldown -25%, Pickup radius -50%',
    apply: (s) => {
      s.cooldownMul *= 0.75;
      s.pickupMul *= 0.5;
    },
  },
  {
    id: 'poison_pill',
    name: '푸른 피안화 가루',
    nameEn: 'Blue Spider Lily Powder',
    hanja: '彼岸花',
    desc: '공격력 +30%, 받는 피해 +25%',
    descEn: 'Attack +30%, Damage taken +25%',
    apply: (s) => {
      s.damageMul *= 1.3;
      s.dmgTakenMul *= 1.25;
    },
  },
  {
    id: 'blood_banner',
    name: '희귀혈 주머니',
    nameEn: 'Marechi Blood Pouch',
    hanja: '稀血',
    desc: '투사체 +2, 체력 재생 정지, 최대 체력 -15%',
    descEn: 'Projectiles +2, HP regen off, Max HP -15%',
    apply: (s) => {
      s.projectileBonus += 2;
      s.hpRegen = 0;
      s.maxHpMul *= 0.85;
    },
  },
  {
    id: 'greedy_seal',
    name: '상현의 인장',
    nameEn: 'Upper Rank Crest',
    hanja: '上弦印',
    desc: '경험치 +50%, 광역 -25%',
    descEn: 'XP +50%, Area -25%',
    apply: (s) => {
      s.xpMul *= 1.5;
      s.areaMul *= 0.75;
    },
  },
];
export const RELIC_BY_ID: Record<string, RelicDef> = {};
for (const r of RELIC_DEFS) RELIC_BY_ID[r.id] = r;

// 현재 언어의 유물 이름/설명 (한자는 별도 병기).
export function relicName(d: RelicDef): string {
  return getLang() === 'en' ? d.nameEn : d.name;
}
export function relicDesc(d: RelicDef): string {
  return getLang() === 'en' ? d.descEn : d.desc;
}

// 아직 보유하지 않은 유물 중 하나를 무작위로 반환(없으면 null). (rng: 0..1 반환 함수)
export function rollRelic(rand: () => number, ownedIds: readonly string[]): RelicDef | null {
  const pool = RELIC_DEFS.filter((r) => !ownedIds.includes(r.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(rand() * pool.length)];
}

// ============================================================================
// 명기(名器) — 보스 처치 보상 전용 양성 아이템 (DESIGN §14.2)
// 저주 유물과 달리 순수 이득(대가 없음)·상한 없음·보스 드랍 전용.
// lore는 three-kingdoms-mud named.json 안목 감정문을 1~2문장으로 축약(ko/en 병기, i18n 무접촉).
// 효과는 빌드를 굴절시키는 패시브형 — 저주 유물과 동일하게 PlayerStats에 적용된다.
export interface MasterworkDef {
  id: string;
  name: string;
  nameEn: string;
  hanja: string;
  desc: string; // 효과 요약(카드)
  descEn: string;
  lore: string; // 감정문(도감/카드 하단)
  loreEn: string;
  apply: (s: PlayerStats) => void;
}

export const MASTERWORK_DEFS: MasterworkDef[] = [
  {
    id: 'zhangba_mao',
    name: '이노스케의 이도',
    nameEn: "Inosuke's Serrated Blades",
    hanja: '雙刀',
    desc: '공격력 +20%, 광역 +15%',
    descEn: 'Attack +20%, Area +15%',
    lore: '이노스케가 멧돼지 탈을 쓰고 난전에서 거칠게 휘두르는 톱니 모양의 이도. 거친 성정만큼이나 무자비하게 살을 뜯어낸다.',
    loreEn: "A pair of serrated Nichirin blades Inosuke swings wildly. True to his beastly nature, they tear flesh apart mercilessly.",
    apply: (s) => {
      s.damageMul *= 1.2;
      s.areaMul *= 1.15;
    },
  },
  {
    id: 'qinggang_jian',
    name: '탄지로의 일륜도',
    nameEn: "Tanjiro's Black Nichirin Sword",
    hanja: '日輪刀',
    desc: '공격력 +18%, 사거리·투사체 속도 +15%',
    descEn: 'Attack +18%, Range & projectile speed +15%',
    lore: '탄지로가 쥐는 검은색 일륜도. 물의 호흡과 해의 호흡을 오가며 혈귀를 베어 가를 때 검신이 칠흑의 빛을 발한다.',
    loreEn: "A jet-black Nichirin sword held by Tanjiro. It glows with an abyssal sheen when channeling water or sun breathing forms.",
    apply: (s) => {
      s.damageMul *= 1.18;
      s.rangeMul *= 1.15;
    },
  },
  {
    id: 'wanshi_gong',
    name: '젠이츠의 일륜도',
    nameEn: "Zenitsu's Nichirin Sword",
    hanja: '雷刀',
    desc: '사거리·투사체 속도 +30%',
    descEn: 'Range & projectile speed +30%',
    lore: '젠이츠의 황금빛 일륜도. 벽력일섬의 번개 기운이 실려 순식간에 시공간을 가로지르는 신속의 참격을 퍼붓는다.',
    loreEn: "A golden Nichirin sword representing Thunder Breathing. Infused with lightning speed, it flashes through the battlefield.",
    apply: (s) => {
      s.rangeMul *= 1.3;
    },
  },
  {
    id: 'bao_dao',
    name: '렌고쿠의 코등이',
    nameEn: "Kyojuro's Flame Tsuba",
    hanja: '炎鍔',
    desc: '공격력 +28%',
    descEn: 'Attack +28%',
    lore: '염주 렌고쿠 쿄쥬로가 쓰던 불꽃 모양 코등이. 타오르는 마음가짐과 호흡을 고조시켜 공격의 파괴력을 끌어올린다.',
    loreEn: "The flame-shaped sword guard left by Kyojuro. It fuels the slayers heart, heavily amplifying breathing power.",
    apply: (s) => {
      s.damageMul *= 1.28;
    },
  },
  {
    id: 'tietai_gong',
    name: '기유의 일륜도',
    nameEn: "Giyu's Nichirin Sword",
    hanja: '水刀',
    desc: '투사체 +1, 공격력 +10%',
    descEn: 'Projectiles +1, Attack +10%',
    lore: '수주 토미오카 기유가 쥐는 청색 일륜도. 고요하고 물러서지 않는 신념의 검격으로 잔잔한 파동을 퍼트린다.',
    loreEn: "The blue Nichirin sword held by Giyu. It cuts with the absolute stillness of deep water, creating smooth shockwaves.",
    apply: (s) => {
      s.projectileBonus += 1;
      s.damageMul *= 1.1;
    },
  },
  {
    id: 'shuangtie_ji',
    name: '텐겐의 대형 이도',
    nameEn: "Tengen's Cleavers",
    hanja: '音爆刀',
    desc: '투사체 +1, 광역 +12%',
    descEn: 'Projectiles +1, Area +12%',
    lore: '음주 우즈이 텐겐의 체인으로 연결된 대형 이도. 소리의 호흡과 폭발성 참격을 흩날려 넓은 범위를 날려버린다.',
    loreEn: "Massive dual cleavers connected by a chain. Used by Tengen to trigger roaring explosions across a wide sweep.",
    apply: (s) => {
      s.projectileBonus += 1;
      s.areaMul *= 1.12;
    },
  },
  {
    id: 'lian_nu',
    name: '사네미의 일륜도',
    nameEn: "Sanemi's Nichirin Sword",
    hanja: '風刀',
    desc: '쿨다운 -20%',
    descEn: 'Cooldown -20%',
    lore: '풍주 시나즈가와 사네미의 녹색 일륜도. 거친 폭풍 같은 궤적으로 몰아치는 난무가 쉴 새 없이 휘몰아친다.',
    loreEn: "A green Nichirin sword representing Wind Breathing. Its tempestuous attacks slice in rapid, non-stop successions.",
    apply: (s) => {
      s.cooldownMul *= 0.8;
    },
  },
  {
    id: 'mingguang_kai',
    name: '귀살대 대원복',
    nameEn: 'Demon Slayer Uniform',
    hanja: '隊服',
    desc: '받는 피해 -22%',
    descEn: 'Damage taken -22%',
    lore: '귀살대원들이 착용하는 칠흑의 대원복. 특수한 가공을 거쳐 혈귀의 엄니로부터 대원을 보호하며 가볍고 튼튼하다.',
    loreEn: "Special pitch-black uniform worn by members of the Demon Slayer Corps, offering protection against demonic fangs.",
    apply: (s) => {
      s.dmgTakenMul *= 0.78;
    },
  },
  {
    id: 'sunzi_bingfa',
    name: '호흡의 비기',
    nameEn: 'Breathing Secrets',
    hanja: '呼吸秘卷',
    desc: '쿨다운 -15%, 광역 +10%',
    descEn: 'Cooldown -15%, Area +10%',
    lore: '역대 주들의 호흡 비결과 전투 비기가 적힌 두루마리. 읽은 자는 싸우기 전에 칼끝이 닿을 궤적의 틈을 포착한다.',
    loreEn: "Scrolls detailing ancient breathing mastery. Studying it sharpens focus and reveals the thread of interval.",
    apply: (s) => {
      s.cooldownMul *= 0.85;
      s.areaMul *= 1.1;
    },
  },
  {
    id: 'taigong_bingfa',
    name: '전집중 호흡법',
    nameEn: 'Total Concentration Guide',
    hanja: '全集中法',
    desc: '경험치 +35%',
    descEn: 'XP +35%',
    lore: '하루 종일 가슴에 산소를 가득 채우는 전집중 호흡의 해설서. 체내 에너지를 한계까지 끌어올려 성장 속도를 가속한다.',
    loreEn: "A master handbook on maintaining oxygen intake 24/7. It boosts cellular metabolism, hastening experience gain.",
    apply: (s) => {
      s.xpMul *= 1.35;
    },
  },
  {
    id: 'heshi_bi',
    name: '등나무꽃 주머니',
    nameEn: 'Wisteria Sachet',
    hanja: '藤香囊',
    desc: '골드 +60%, 픽업 반경 +20%',
    descEn: 'Gold +60%, Pickup radius +20%',
    lore: '혈귀들이 기피하는 등나무꽃 진액이 가득 든 향나무 주머니. 정신을 맑게 다스리고 장내를 정화하는 가호가 내린다.',
    loreEn: "A wooden sachet filled with wisteria essence. Its aroma cleanses the air, drawing gold and items closer.",
    apply: (s) => {
      s.goldMul *= 1.6;
      s.pickupMul *= 1.2;
    },
  },
  {
    id: 'yu_jue',
    name: '오니의 곡옥',
    nameEn: 'Demonic Magatama',
    hanja: '鬼勾玉',
    desc: '체력 재생 +1.5/s, 최대 체력 +12%',
    descEn: 'HP regen +1.5/s, Max HP +12%',
    lore: '오니의 왕의 세포가 깃든 차가운 푸른색 곡옥. 등골이 서늘해지는 저주가 흐르지만 육체 치유 능력을 경이롭게 돕는다.',
    loreEn: "A freezing blue magatama containing Muzan's cells. It runs cold but acts as a powerful regenerative catalyst.",
    apply: (s) => {
      s.hpRegen += 1.5;
      s.maxHpMul *= 1.12;
    },
  },
  {
    id: 'shuo',
    name: '귀살대 보급마',
    nameEn: 'Slayer Steed',
    hanja: '軍馬',
    desc: '공격력 +15%, 이동속도 +10%',
    descEn: 'Attack +15%, Move speed +10%',
    lore: '기병이 타던 사나운 명마. 렌고쿠 가문 등에서 애용하던 말로 전장의 흙바닥을 힘차게 달리며 돌진력을 더한다.',
    loreEn: "A warhorse bred for rapid responses. It speeds up exploration and gives extra strength to charges.",
    apply: (s) => {
      s.damageMul *= 1.15;
      s.speedMul *= 1.1;
    },
  },
  {
    id: 'huanshou_dao',
    name: '시노부의 하오리',
    nameEn: "Shinobu's Haori",
    hanja: '羽織',
    desc: '쿨다운 -10%, 공격력 +10%',
    descEn: 'Cooldown -10%, Attack +10%',
    lore: '나비 날개 문양이 새겨진 가벼운 하오리. 바람을 가를 때마다 독침이 더 날카롭고 유연하게 사방으로 퍼진다.',
    loreEn: "A lightweight haori adorned with butterfly wing designs. It helps poison darts slip through the air much faster.",
    apply: (s) => {
      s.cooldownMul *= 0.9;
      s.damageMul *= 1.1;
    },
  },
  {
    id: 'jiao_gong',
    name: '교메이의 염주',
    nameEn: "Gyomei's Beads",
    hanja: '數珠',
    desc: '사거리·투사체 속도 +20%, 쿨다운 -8%',
    descEn: 'Range & projectile speed +20%, Cooldown -8%',
    lore: '암주 히메지마 교메이의 무겁고 거대한 염주. 눈먼 자의 직감을 벼려내어 보이지 않는 장막 너머까지 거리를 넓힌다.',
    loreEn: "Heavy iron prayer beads belonging to Gyomei. They enhance focus, extending range beyond visual limits.",
    apply: (s) => {
      s.rangeMul *= 1.2;
      s.cooldownMul *= 0.92;
    },
  },
  {
    id: 'liangdang_kai',
    name: '귀살대 나무나막신',
    nameEn: 'Wooden Geta',
    hanja: '木屐',
    desc: '받는 피해 -10%, 이동속도 +8%',
    descEn: 'Damage taken -10%, Move speed +8%',
    lore: '대원들이 즐겨 신는 튼튼한 오동나무 나막신. 디딤발이 가벼워져 지면의 습격과 칼날을 사뿐하게 회피한다.',
    loreEn: "Sturdy wooden geta that lighten the slayers steps, making evasion and movement agile.",
    apply: (s) => {
      s.dmgReduction = Math.min(0.8, s.dmgReduction + 0.1);
      s.speedMul *= 1.08;
    },
  },
  {
    id: 'zha_jia',
    name: '오니의 강갑',
    nameEn: 'Demon Hide',
    hanja: '鬼皮',
    desc: '받는 피해 -12%, 최대 체력 +8%',
    descEn: 'Damage taken -12%, Max HP +8%',
    lore: '강력한 오니를 사냥한 후 얻은 질긴 가죽들을 겹쳐 덧댄 갑옷 조각. 오니의 살점처럼 단단히 달라붙어 방호를 제공한다.',
    loreEn: "Armor fragments pieced together from tough demon hide. It acts like a secondary, resilient skin.",
    apply: (s) => {
      s.dmgReduction = Math.min(0.8, s.dmgReduction + 0.12);
      s.maxHpMul *= 1.08;
    },
  },
  {
    id: 'zishou_jinyin',
    name: '등나무꽃 신사가마',
    nameEn: 'Shrine Palanquin',
    hanja: '神輿',
    desc: '골드 +35%, 경험치 +15%',
    descEn: 'Gold +35%, XP +15%',
    lore: '등나무꽃 신사를 모시는 영험한 의례용 가마. 축제의 북소리가 전장의 마장을 물리치고 대원들에게 자비와 수련의 축복을 싣는다.',
    loreEn: "A sacred shrine palanquin used in ceremonies. Its music dispels evil, granting coins and wisdom to slayers.",
    apply: (s) => {
      s.goldMul *= 1.35;
      s.xpMul *= 1.15;
    },
  },
  {
    id: 'yin_yin',
    name: '우부야시키의 은인',
    nameEn: 'Ubuyashiki Crest',
    hanja: '産屋敷印',
    desc: '골드 +25%, 최대 체력 +8%',
    descEn: 'Gold +25%, Max HP +8%',
    lore: '등나무꽃 문양이 음각으로 조각된 은빛 결속의 인장. 가문의 가호와 영애가 대원들의 가슴속에 끝없는 생명력을 메운다.',
    loreEn: "A silver crest engraved with the wisteria mark. It instills honor and resilience in those who carry it.",
    apply: (s) => {
      s.goldMul *= 1.25;
      s.maxHpMul *= 1.08;
    },
  },
  {
    id: 'jiuzhang_suanshu',
    name: '무잔의 피병',
    nameEn: 'Blood of Muzan',
    hanja: '無惨血',
    desc: '픽업 반경 +30%, 경험치 +15%',
    descEn: 'Pickup radius +30%, XP +15%',
    lore: '키부츠지 무잔의 저주받은 피가 극미량 든 시약병. 육체의 모든 감각과 오감을 폭발적으로 열어 자력과 흡수력을 넓힌다.',
    loreEn: "A vial holding a drop of Muzan's blood. It expands the senses, dramatically increasing magnet and XP intake.",
    apply: (s) => {
      s.pickupMul *= 1.3;
      s.xpMul *= 1.15;
    },
  },
  {
    id: 'sima_fa',
    name: '수련용 목도',
    nameEn: 'Training Bokken',
    hanja: '木刀',
    desc: '광역 +12%, 최대 체력 +10%',
    descEn: 'Area +12%, Max HP +10%',
    lore: '사콘지의 폭포 수련장 등에서 끊임없이 휘두르던 무거운 참나무 목도. 몸에 각인된 단련의 궤적이 칼날을 한층 두껍게 뿜어낸다.',
    loreEn: "A heavy oak sword used in rigorous training. The callused hands it leaves produce massive strike arcs.",
    apply: (s) => {
      s.areaMul *= 1.12;
      s.maxHpMul *= 1.1;
    },
  },
  {
    id: 'bingfa_chaolu',
    name: '귀살대 임무일지',
    nameEn: 'Slayer Chronicles',
    hanja: '任務日誌',
    desc: '경험치 +20%, 광역 +10%',
    descEn: 'XP +20%, Area +10%',
    lore: '임무를 거쳐 간 수많은 대원들의 전투 경험과 혈귀의 기믹이 기록된 책자. 선배들의 피맺힌 조언은 실전을 거칠 때 큰 격을 가르친다.',
    loreEn: "Chronicles logging combat details against various demons. The notes left by fallen elders teach valuable combat insight.",
    apply: (s) => {
      s.xpMul *= 1.2;
      s.areaMul *= 1.1;
    },
  },
  {
    id: 'baiyu_pei',
    name: '액막이 가면',
    nameEn: 'Ward Mask',
    hanja: '厄除面',
    desc: '체력 재생 +1/s, 이동속도 +8%',
    descEn: 'HP regen +1/s, Move speed +8%',
    lore: '사콘지가 제자들의 액운을 막기 위해 깎아 만든 여우 모양 목가면. 재앙을 비껴가고 착용자의 상처를 부드럽게 감싸 치료한다.',
    loreEn: "A hand-carved fox mask given by Sakonji to ward off misfortune. It heals wounds and lightens the steps.",
    apply: (s) => {
      s.hpRegen += 1.0;
      s.speedMul *= 1.08;
    },
  },
  {
    id: 'shuanghuan_pei',
    name: '네즈코의 재갈',
    nameEn: "Nezuko's Bamboo Gag",
    hanja: '竹筒',
    desc: '쿨다운 -12%, 사거리·투사체 속도 +10%',
    descEn: 'Cooldown -12%, Range & projectile speed +10%',
    lore: '네즈코가 입에 물고 있는 곧은 대나무 재갈. 인간을 공격하지 않고 이성을 유지하겠다는 강력한 절제와 다짐의 물건.',
    loreEn: "The bamboo gag Nezuko wears in her mouth. It stands as a symbol of restraint, calming thoughts and cooling skills.",
    apply: (s) => {
      s.cooldownMul *= 0.88;
      s.rangeMul *= 1.1;
    },
  },
];
export const MASTERWORK_BY_ID: Record<string, MasterworkDef> = {};
for (const m of MASTERWORK_DEFS) MASTERWORK_BY_ID[m.id] = m;

export function masterworkName(d: MasterworkDef): string {
  return getLang() === 'en' ? d.nameEn : d.name;
}
export function masterworkDesc(d: MasterworkDef): string {
  return getLang() === 'en' ? d.descEn : d.desc;
}
export function masterworkLore(d: MasterworkDef): string {
  return getLang() === 'en' ? d.loreEn : d.lore;
}

// 도감 보유 판정(save 영속 기반 — 도감은 런 밖에서 열림). 획득한 명기 def를 표시 순서대로 반환.
// save를 직접 import하지 않도록 구조적 타입만 받는다(SaveData가 masterworks: string[] 보유).
export function ownedMasterworks(save: { masterworks: readonly string[] }): MasterworkDef[] {
  return MASTERWORK_DEFS.filter((m) => save.masterworks.includes(m.id));
}
export function isMasterworkOwned(id: string, save: { masterworks: readonly string[] }): boolean {
  return save.masterworks.includes(id);
}

// 미보유 명기 중 최대 count개를 무작위로 반환(3택 카드용). ownedIds 제외, 중복 없음.
export function rollMasterworks(rand: () => number, ownedIds: readonly string[], count: number): MasterworkDef[] {
  const pool = MASTERWORK_DEFS.filter((m) => !ownedIds.includes(m.id));
  // Fisher-Yates 부분 셔플
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const t = pool[i];
    pool[i] = pool[j];
    pool[j] = t;
  }
  return pool.slice(0, Math.max(0, count));
}
