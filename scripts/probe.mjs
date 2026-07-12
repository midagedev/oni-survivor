import { chromium } from '@playwright/test';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const logs = [];
p.on('console', m => logs.push(m.type() + ': ' + m.text()));
p.on('pageerror', e => logs.push('pageerror: ' + e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const probe = await p.evaluate(() => new Promise(res => {
  let frames = 0;
  const t0 = performance.now();
  const tick = () => { frames++; if (performance.now() - t0 < 2000) requestAnimationFrame(tick); else res({ frames, timerText: document.querySelectorAll('div') ? Array.from(document.querySelectorAll('div')).filter(d => /^\d\d:\d\d$/.test(d.textContent||'')).map(d=>d.textContent) : [] }); };
  requestAnimationFrame(tick);
}));
await p.waitForTimeout(3000);
const timer2 = await p.evaluate(() => Array.from(document.querySelectorAll('div')).filter(d => /^\d\d:\d\d$/.test(d.textContent||'')).map(d => d.textContent));
console.log(JSON.stringify({ probe, timer2, logs: logs.slice(0,8) }, null, 1));
await b.close();
