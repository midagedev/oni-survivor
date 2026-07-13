import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('c:' + m.text()); });
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1600);
const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const clearLevels = async () => {
  for (let i = 0; i < 60; i++) {
    const s = await p.evaluate(() => window.__GAME_TEST__.stats);
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(60);
  }
};
await hook('selectHero', 'zhangfei'); // 장팔사모(최강 넉백) 시작
await hook('setBossFlags', true, true, true);
for (const w of ['guandao', 'halberd', 'zhangba']) await hook('giveWeapon', w);
await hook('setTime', 340);
// 개활지(남쪽)로 이동해 대군을 끌어모은 뒤 멈춰 서서 부채꼴 넉백 관찰
await p.keyboard.down('s'); await p.waitForTimeout(2600); await p.keyboard.up('s');
await clearLevels();
await p.waitForTimeout(500);
// fps 샘플 (2초)
const fps = [];
for (let i = 0; i < 10; i++) { await p.waitForTimeout(200); fps.push(await p.evaluate(() => window.__DEBUG__.info())); }
const s = await p.evaluate(() => window.__GAME_TEST__.stats);
await p.screenshot({ path: OUT + '/kb_test.png' });
const avg = (k) => Math.round(fps.reduce((a, x) => a + x[k], 0) / fps.length);
console.log(JSON.stringify({ alive: s.alive, fps: avg('fps'), calls: avg('calls'), errs: errs.slice(0, 6) }));
await b.close();
