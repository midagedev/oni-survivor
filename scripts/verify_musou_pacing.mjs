import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message.slice(0, 60)));
await p.goto('http://localhost:4173/threesur/', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(1800);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__?.[fn]?.(...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__?.stats);
const clr = async () => { for (let i = 0; i < 45; i++) { const s = await stats(); if (!s || s.state !== 'levelup') break; await p.keyboard.press('Digit1'); await p.waitForTimeout(30); } };
await hook('selectHero', 'guanyu'); await p.waitForTimeout(400);
await hook('setInvulnerable', 99999);
await hook('setTime', 300); await p.waitForTimeout(800); await clr();
for (const w of ['halberd', 'fire', 'orbit', 'thunder', 'crossbow']) await hook('giveWeapon', w);
await clr();
// 이동 유지(카이팅) + 만충 시 즉시 발동 → 발동 간격 측정
const activations = [];
let lastReady = false;
const t0 = Date.now();
let dir = 0;
const keys = ['d', 's', 'a', 'w'];
await p.keyboard.down(keys[0]);
while (Date.now() - t0 < 150000) {
  const s = await stats();
  if (!s) break;
  if (s.state === 'levelup') { await clr(); continue; }
  const ready = (s.musouGauge ?? 0) >= 100;
  if (ready && !lastReady) {
    activations.push((Date.now() - t0) / 1000);
    await p.keyboard.press('Space'); // 즉시 발동 → 다음 만충까지가 주기
  }
  lastReady = ready && false; // Space 후 게이지 0 → 다음 만충 재감지
  // 8초마다 방향 전환(카이팅)
  if (Math.floor((Date.now() - t0) / 8000) % 4 !== dir) {
    await p.keyboard.up(keys[dir]);
    dir = Math.floor((Date.now() - t0) / 8000) % 4;
    await p.keyboard.down(keys[dir]);
  }
  await p.waitForTimeout(150);
}
const intervals = activations.slice(1).map((t, i) => +(t - activations[i]).toFixed(1));
console.log(JSON.stringify({ activations: activations.map((t) => +t.toFixed(1)), intervals, errs: errs.slice(0, 2) }));
await b.close();
