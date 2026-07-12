import { chromium } from '@playwright/test';
const args = process.argv[2] === 'gpu' ? ['--use-angle=metal', '--enable-gpu-rasterization'] : [];
const b = await chromium.launch({ args });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const info = await p.evaluate(() => new Promise(res => {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl2');
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const renderer = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'unknown';
  let n = 0; const t0 = performance.now();
  const tick = () => { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(tick); else res({ fps: n / 2, renderer }); };
  requestAnimationFrame(tick);
}));
console.log(JSON.stringify(info));
await b.close();
