// Demon Slayer Character Dialogue Database (English)
// Used for title screen quotes and character selection details.

export interface DialoguePack {
  name: string;
  select: string;
  lines: string[];
}

export const DIALOGUE: Record<string, DialoguePack> = {
  zhaoyun: {
    name: "Tanjiro",
    select: "Tanjiro Kamado, ready to slay demons!",
    lines: [
      "Let's go, Nezuko! We must stick together!",
      "Don't give up! Do not bend! Set your heart ablaze!",
      "Become water! Water Breathing First Form: Water Surface Slash!",
      "Hinokami Kagura: Clear Blue Sky!",
      "Humans can heal their hearts even when they get hurt!",
      "At dawn I adjust my breathing and begin my training.",
      "At noon I check on Nezuko's wooden box.",
      "At dusk I receive orders for the next mission.",
      "At night I track down demons with my Nichirin sword.",
    ],
  },
  guanyu: {
    name: "Giyu",
    select: "Even at the cost of my life, please delay Nezuko's judgment.",
    lines: [
      "Do not give others the right to decide your life or death!",
      "Water flows to purify all. So does the tip of my blade.",
      "I am not worthy of standing as the Water Hashira.",
      "Sabito... I should have died in your place...",
      "Water Breathing Eleventh Form: Lull (凪)!",
      "I speak little. A word once spoken cannot be recalled.",
      "At dawn I sharpen my blade and count the bonds that passed through me.",
      "At noon I stand tall with no shame before my path.",
      "At dusk I wipe the long steel and calm my heart.",
      "At night I have never forsaken the righteousness of my comrades.",
    ],
  },
  zhangfei: {
    name: "Nezuko",
    select: "Mmh... Mmh! (Brother, I will fight with you!)",
    lines: [
      "Mmh-! (Blood Demon Art: Exploding Blood!)",
      "Mmh-mmh! (Humans are my family. Demons are the enemy.)",
      "Mmh! (Don't hurt my brother!)",
      "Mmh-mmh! (I dislike the wisteria scent... but I will stay by my brother.)",
      "Mmh! (I want to walk under the sunlight...)",
      "Mmh-mmh! (If my brother fights, I will fight too.)",
      "At dawn I listen to my brother's breathing from inside the box.",
      "At noon I feel my brother running through the darkness of the box.",
      "At dusk I get ready to step under the starlight.",
      "At night I kick the demons who target my brother.",
    ],
  },
  zhugeliang: {
    name: "Tamayo",
    select: "The medicine to turn demons back to humans will be completed.",
    lines: [
      "Blood Demon Art: Magical Aroma of Illusion!",
      "I have searched for ways to defeat demons without harming humans.",
      "Muzan... I will personally send you to hell.",
      "Yushiro, let us make the medicine together.",
      "As a doctor and a human, I will walk the path of atonement.",
      "At dawn I examine demon cells under a microscope.",
      "At noon I brew herbal medicines in the quiet study.",
      "At dusk I wait for the daylight to fade completely.",
      "At night I check the state of chemical synthesis with my art.",
    ],
  },
  huangzhong: {
    name: "Shinobu",
    select: "Insect Breathing, Butterfly Dance: Caprice!",
    lines: [
      "I won't kill you with cuts, I'll just apply a painless poison.",
      "Sister... I will carry on your dream of peace.",
      "The poison extracted from wisteria will surge through your veins.",
      "I am not angry. See? I am always smiling.",
      "Will there be a day when humans and demons get along?",
      "At dawn I adjust the temperature of the poison kiln.",
      "At noon I treat the wounded at the Butterfly Mansion.",
      "At dusk I polish my poison needle to a fine point.",
      "At night I hunt down demons like a silent butterfly.",
    ],
  },
  lvbu: {
    name: "Kyojuro",
    select: "Set your heart ablaze. Go beyond your limits!",
    lines: [
      "Tasty! Tasty! Tasty!",
      "Mother, the duty of those born strong is to aid the weak.",
      "As long as I draw breath, no one in this train shall die!",
      "Flame Breathing Ninth Form: Rengoku!",
      "Live with your head held high. Do not fall.",
      "At dawn I compose my mind in the maple forest.",
      "At noon I share bentos with fellow slayers.",
      "At dusk I polish the blade that will protect the weak.",
      "At night I guard the path of the Mugen Train.",
    ],
  },
  sunshangxiang: {
    name: "Akaza",
    select: "Become a demon. Reach the peak of martial arts with me!",
    lines: [
      "The strong survive, the weak die. This is the law.",
      "Destructive Death: Compass Needle... I see your battle spirit!",
      "Kyojuro, you are too valuable to die like this!",
      "Bring me a stronger opponent! Come at me!",
      "My fists have no limits. They pierce the void!",
      "At dawn I throw punches to reach the peak of martial arts.",
      "At noon I close my eyes and meditate on battle spirit.",
      "At dusk I watch the red sunset and wander through old memories.",
      "At night I duel with the strongest to the death.",
    ],
  },
  liubei: {
    name: "Urokodaki",
    select: "Too slow! Stay focused!",
    lines: [
      "The core of water breathing is to flow with the stream.",
      "I will wait until you split the giant training boulder.",
      "I guarantee that these two siblings will never harm humans.",
      "You returned... Thank you for coming back alive.",
      "Pass the final trial. Survive the traps of Mt. Sagiri.",
      "At dawn I adjust training traps on Mt. Sagiri.",
      "At noon I strictly correct Tanjiro's form.",
      "At dusk I pray for the protective blessing of the ward mask.",
      "At night I write letters thinking of the siblings' future.",
    ],
  },
  caocao: {
    name: "Sabito",
    select: "If you were born a man, endure the pain!",
    lines: [
      "Your effort is not enough. Practice until your body remembers!",
      "Giyu... must live. He must survive to become the Water Hashira.",
      "The resolve hidden under the mask cries at the tip of your sword.",
      "I will watch over you. Until you split that rock.",
      "Death is not sad; it only points to a lack of resolve.",
      "At dawn I announce the start of training in the fog.",
      "At noon I rush Tanjiro's gaps with a wooden sword.",
      "At dusk I quietly watch Giyu from behind.",
      "At night I guard Mt. Sagiri where spirits dwell.",
    ],
  },
  zhouyu: {
    name: "Yushiro",
    select: "Do not be rude to Tamayo-sama!",
    lines: [
      "Tamayo-sama is beautiful. She is beautiful today and tomorrow!",
      "My Blood Demon Art conceals vision and creates barriers.",
      "Tanjiro, do not stand too close to Tamayo-sama.",
      "We must hide. We have to evade Muzan's trackers.",
      "I would gladly give my life for Tamayo-sama!",
      "At dawn I organize Tamayo-sama's research logs.",
      "At noon I double-check the sunlight shields.",
      "At dusk I refresh the concealing talismans at the entrance.",
      "At night I brew tea for Tamayo-sama and guard her.",
    ],
  },
  zhangliao: {
    name: "Inosuke",
    select: "Pig rush! Pig rush! Here I come!",
    lines: [
      "Hey, Monjiro! Duel with me!",
      "Beast Breathing Third Form: Rip and Devour!",
      "I am the King of the Mountain! All beasts follow me!",
      "Chipping my blades with a rock to make them serrated is my style!",
      "Do not speak weakly! There is no way but to get stronger!",
      "At dawn I race with the beasts of the mountain.",
      "At noon I wash my boar mask in the river.",
      "At dusk I chip my Nichirin swords with stones.",
      "At night I sniff out the aura of the strongest demon.",
    ],
  },
  yuanshao: {
    name: "Doma",
    select: "I am the leader of the Eternal Paradise Cult. Let me guide you to paradise.",
    lines: [
      "Humans are so pitiful, always suffering from emotions.",
      "Is my ice fan not beautiful? Breathing this frost freezes your lungs.",
      "After all, human emotions are nothing but illusions.",
      "Shinobu-chan... don't hate me, let us live together inside me forever.",
      "Muzan-sama is grand. Disobeying him is a sad thing.",
      "At dawn I listen to the prayers of my cult followers.",
      "At noon I watch frost lotuses bloom in the ice garden.",
      "At dusk I order preparations for the cult banquet.",
      "At night I select a follower and enjoy a quiet feast.",
    ],
  },
  dongzhuo: {
    name: "Enmu",
    select: "I will show you a happy dream. A sweet dream you will never wake from...",
    lines: [
      "Human hearts are like glass, shattering so easily.",
      "Did you meet your family in the dream? Too bad it was all fake.",
      "Merged with the Mugen Train, no one can stop my body!",
      "Watching the despair on slayers' faces is so delightful!",
      "Fall into a deeper sleep... Whispers of Forced Unconscious Sleep!",
      "At dawn I adjust my spirit within the train's framework.",
      "At noon I seek spiritual cores inside passengers' dreams.",
      "At dusk I stoke the engine fire to speed up the train.",
      "At night I release sleep gas to control all cabins.",
    ],
  },
  xiahoudun: {
    name: "Akaza",
    select: "Technique Development: Compass Needle!",
    lines: [
      "Come closer! Your spirit excites my compass!",
      "Only strength gives value to existence. The weak deserve to die!",
      "Let us fight and grow stronger for hundreds of years!",
      "Destructive Death: Air Type... My shockwaves tear the atmosphere!",
      "Humans age and die. Why refuse to become a demon?",
      "At dawn I refine my punches to shatter the air.",
      "At noon I clear my mind to sharpen my compass needle.",
      "At dusk I fuel my will to fight under the red sky.",
      "At night I cross the battlefield to hunt down Hashiras.",
    ],
  },
  sunce: {
    name: "Kokushibo",
    select: "Moon Breathing... Open your eyes, Nichirin sword.",
    lines: [
      "My sword is cold like the moon, distorting space itself.",
      "Behold the pinnacle of swordsmanship refined over 500 years.",
      "My brother... Yoriichi... why did they only bless you...",
      "Demon slayer swordsmanship cannot match mine.",
      "Moon Breathing Sixteenth Form: Moonbow, Half-Moon Night!",
      "At dawn I align the demonic eyes on my blade.",
      "At noon I recall duels with my brother centuries ago.",
      "At dusk I raise my blade as the moon halo rises.",
      "At night I command the Upper Ranks and strike down intruders.",
    ],
  },
  simayi: {
    name: "Rui",
    select: "Do not interfere with my family's bonds.",
    lines: [
      "The ties of family connected by spider silk are absolute.",
      "A family member who fails their role has no value.",
      "My threads are harder than steel, easily slicing blades.",
      "Tanjiro, hand over your sister's bond to me!",
      "Cutting Thread Cage... I will bind you in red silk forever.",
      "At dawn I conceal my domain with dew on the webs.",
      "At noon I rest hanging upside down in the spider web.",
      "At dusk I discipline my family using fear.",
      "At night I trap slayers entering Mt. Natagumo with threads.",
    ],
  },
};

export function pack(id: string): DialoguePack | null {
  return DIALOGUE[id] ?? null;
}

export function dialogueSelect(id: string): string {
  return pack(id)?.select ?? '';
}

export function pickLine(id: string, index: number): string {
  const d = pack(id);
  if (!d || d.lines.length === 0) return '';
  return d.lines[((index % d.lines.length) + d.lines.length) % d.lines.length];
}

export function randomLine(id: string, rand: () => number = Math.random): string {
  const d = pack(id);
  if (!d || d.lines.length === 0) return '';
  return d.lines[Math.floor(rand() * d.lines.length)];
}

export function anyRandomLine(rand: () => number = Math.random): { id: string; name: string; line: string } {
  const ids = Object.keys(DIALOGUE);
  const id = ids[Math.floor(rand() * ids.length)];
  const d = pack(id) ?? DIALOGUE[id];
  return { id, name: d.name, line: d.lines[Math.floor(rand() * d.lines.length)] ?? d.select };
}
