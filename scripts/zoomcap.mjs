import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import fs from 'fs';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = 'http://localhost:5188/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(2500); // 몇 마리 접근
await p.screenshot({ path: OUT + '/zoom_full.png' });
await b.close();

// 중앙 부근(플레이어 주위 적) 크롭 후 6배 확대(nearest)
const png = PNG.sync.read(fs.readFileSync(OUT + '/zoom_full.png'));
const sx = 520, sy = 250, sw = 240, sh = 200, scale = 5;
const out = new PNG({ width: sw * scale, height: sh * scale });
for (let y = 0; y < out.height; y++) for (let x = 0; x < out.width; x++) {
  const srcX = sx + Math.floor(x / scale);
  const srcY = sy + Math.floor(y / scale);
  const si = (srcY * png.width + srcX) * 4;
  const di = (y * out.width + x) * 4;
  out.data[di] = png.data[si];
  out.data[di + 1] = png.data[si + 1];
  out.data[di + 2] = png.data[si + 2];
  out.data[di + 3] = 255;
}
fs.writeFileSync(OUT + '/zoom_crop.png', PNG.sync.write(out));
console.log('done');
