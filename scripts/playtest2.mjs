import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = process.env.URL || 'http://localhost:5188/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);

const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const clearLevels = async () => {
  for (let i = 0; i < 40; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1');
    await p.waitForTimeout(90);
  }
};

// 강력한 빌드 구성 + 시간 스킵
for (const w of ['guandao', 'thunder', 'fire', 'orbit', 'halberd', 'crossbow']) await hook('giveWeapon', w);
for (const [id, lv] of [['horseshoe', 5], ['armor', 5], ['censer', 5], ['vermilion', 3]]) await hook('givePassive', id, lv);
await hook('addGold', 500);
await hook('setTime', 360);

// 대량 전투 축적 (원형 이동)
const keys = ['d', 's', 'a', 'w'];
for (let i = 0; i < 10; i++) {
  const k = keys[i % 4];
  await p.keyboard.down(k);
  await p.waitForTimeout(900);
  await p.keyboard.up(k);
}
await clearLevels();
await p.keyboard.down('d');
await p.screenshot({ path: OUT + '/p2_massbattle.png' });
await p.keyboard.up('d');
const s1 = await stats();

// 무쌍 발동 장면 (레벨업 정리 후 즉시 캡처)
await hook('activateMusou');
await p.waitForTimeout(450);
await p.screenshot({ path: OUT + '/p2_musou.png' });
await p.waitForTimeout(5000); // 무쌍 종료(마무리 충격파)
await clearLevels();

// 진화 장면 (언월도 Lv8 + 현철갑주 → 참마검)
await hook('giveWeapon', 'guandao');
await hook('givePassive', 'armor', 5);
await hook('treasure', false);
await p.waitForTimeout(350);
await p.screenshot({ path: OUT + '/p2_evolve.png' });
const s2 = await stats();
await clearLevels();

// 보스 등장 (여포) — 북쪽에서 진입하므로 플레이어가 다가가 화면에 담는다
await hook('spawnBoss', 'lvbu');
await p.keyboard.down('w');
for (let i = 0; i < 5; i++) { await p.waitForTimeout(350); await clearLevels(); }
await p.keyboard.up('w');
await clearLevels();
await p.screenshot({ path: OUT + '/p2_boss.png' });
const s3 = await stats();

// 레벨업 카드
await hook('levelUp');
await p.waitForTimeout(400);
await p.screenshot({ path: OUT + '/p2_levelup.png' });

console.log(JSON.stringify({ massbattle: s1, evolve: s2.weapons, boss: s3, errs: errs.slice(0, 8) }, null, 2));
await b.close();
