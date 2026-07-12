import { chromium } from '@playwright/test';
const b = await chromium.launch({ headless: false });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
p.on('pageerror', e => console.log('pageerror:', e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const fps = await p.evaluate(() => new Promise(res => {
  let n = 0; const t0 = performance.now();
  const tick = () => { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(tick); else res(n / 2); };
  requestAnimationFrame(tick);
}));
// 15초간 WASD 랜덤 이동하며 생존
const keys = ['w','a','s','d'];
for (let i = 0; i < 10; i++) {
  const k = keys[Math.floor(Math.random() * 4)];
  await p.keyboard.down(k);
  await p.waitForTimeout(1200);
  await p.keyboard.up(k);
}
await p.screenshot({ path: '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/headed1.png' });
const hud = await p.evaluate(() => Array.from(document.querySelectorAll('div')).map(d => d.textContent).filter(t => t && (/^\d\d:\d\d$/.test(t) || t.startsWith('처치'))));
console.log(JSON.stringify({ fps, hud }));
await p.waitForTimeout(8000);
await p.screenshot({ path: '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/headed2.png' });
const hud2 = await p.evaluate(() => Array.from(document.querySelectorAll('div')).map(d => d.textContent).filter(t => t && (/^\d\d:\d\d$/.test(t) || t.startsWith('처치'))));
console.log(JSON.stringify({ hud2 }));
await b.close();
