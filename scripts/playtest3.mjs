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
  for (let i = 0; i < 60; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1');
    await p.waitForTimeout(80);
  }
};

// 생존용 절제된 빌드 (이펙트 과밀 방지) + 9분 직전으로
await hook('givePassive', 'armor', 5);
await hook('givePassive', 'wine', 5);
await hook('giveWeapon', 'crossbow');
await hook('setBossFlags', true, true, false); // 3·6분 보스 완료 처리 → 9분 여포만 등장
await hook('setTime', 541);

// 최종보스 여포 자동 등장(540) — 북쪽에서 진입, 다가가 화면에 담기
await p.waitForTimeout(600);
await p.keyboard.down('w');
for (let i = 0; i < 8; i++) { await p.waitForTimeout(350); await clearLevels(); }
await p.keyboard.up('w');
await clearLevels();
await p.screenshot({ path: OUT + '/p3_boss_lvbu.png' });
const sb = await stats();

// 승리 화면 (10:00 도달)
await hook('setTime', 599);
await p.waitForTimeout(1600);
await p.screenshot({ path: OUT + '/p3_victory.png' });
const sv = await stats();

console.log(JSON.stringify({ boss: { boss: sb.bossActive, time: sb.time }, victory: sv.state, errs: errs.slice(0, 8) }, null, 2));
await b.close();
