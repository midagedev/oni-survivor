import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import fs from 'fs';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const TAG = process.env.TAG || 'before';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
const missing = [];
p.on('response', (r) => { if (r.status() === 404 && /projectiles|assets/.test(r.url())) missing.push(r.url().split('/').pop()); });
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1800);
const hasHooks = await p.evaluate(() => !!window.__GAME_TEST__);
const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
if (hasHooks) {
  await hook('selectHero', 'huangzhong'); // 제갈연노(연사 화살) 시작
  await hook('setBossFlags', true, true, true);
  for (const w of ['crossbow', 'baiyu', 'thunder', 'cavalry']) await hook('giveWeapon', w);
  await hook('setTime', 340); // 궁수+책사 다수 → 적탄도 함께
  const keys = ['d', 's', 'a', 'w'];
  for (let i = 0; i < 10; i++) { await p.keyboard.down(keys[i % 4]); await p.waitForTimeout(650); await p.keyboard.up(keys[i % 4]); }
  const s = await p.evaluate(() => window.__GAME_TEST__.stats);
  await p.keyboard.down('d');
  await p.waitForTimeout(2600); // 콤보 배너 페이드 대기
  await p.screenshot({ path: `${OUT}/proj_${TAG}.png` });
  await p.keyboard.up('d');
  // 투사체 밀집 중앙 크롭 6배
  const png = PNG.sync.read(fs.readFileSync(`${OUT}/proj_${TAG}.png`));
  const sx = 440, sy = 210, sw = 400, sh = 300, sc = 3;
  const out = new PNG({ width: sw * sc, height: sh * sc });
  for (let y = 0; y < out.height; y++) for (let x = 0; x < out.width; x++) {
    const si = ((sy + (y / sc | 0)) * png.width + (sx + (x / sc | 0))) * 4;
    const di = (y * out.width + x) * 4;
    out.data[di] = png.data[si]; out.data[di + 1] = png.data[si + 1]; out.data[di + 2] = png.data[si + 2]; out.data[di + 3] = 255;
  }
  fs.writeFileSync(`${OUT}/proj_${TAG}_zoom.png`, PNG.sync.write(out));
  console.log(JSON.stringify({ hasHooks, alive: s.alive, missing404: [...new Set(missing)], errs: errs.slice(0, 6) }));
} else {
  console.log(JSON.stringify({ hasHooks, note: 'hooks blocked (prod build?)', errs: errs.slice(0, 6) }));
}
await b.close();
