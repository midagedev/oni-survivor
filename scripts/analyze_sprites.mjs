import { PNG } from 'pngjs';
import fs from 'fs';
for (const f of ['soldiers.png', 'sgrade.png', 'apriority.png', 'protagonist.png', 'soldiers-variants.png']) {
  const path = 'public/assets/sprites/' + f;
  if (!fs.existsSync(path)) continue;
  const png = PNG.sync.read(fs.readFileSync(path));
  const { width, height, data } = png;
  const bins = { a0: 0, low: 0, mid: 0, high: 0, a255: 0 };
  let pr = 0, pg = 0, pb = 0, pc = 0;
  let edgeOpaque = 0, edgeBright = 0;
  const A = (x, y) => (x < 0 || y < 0 || x >= width || y >= height) ? 0 : data[(y * width + x) * 4 + 3];
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4; const a = data[i + 3];
    if (a === 0) bins.a0++; else if (a < 128) bins.low++; else if (a <= 200) bins.mid++; else if (a < 255) bins.high++; else bins.a255++;
    if (a >= 100 && a < 250) { pr += data[i]; pg += data[i + 1]; pb += data[i + 2]; pc++; }
    if (a >= 200) {
      const nbTrans = A(x - 1, y) < 40 || A(x + 1, y) < 40 || A(x, y - 1) < 40 || A(x, y + 1) < 40;
      if (nbTrans) { edgeOpaque++; if (data[i] + data[i + 1] + data[i + 2] > 620) edgeBright++; }
    }
  }
  console.log(f, JSON.stringify({
    size: `${width}x${height}`, bins,
    partialAlphaAvgRGB: pc ? [Math.round(pr / pc), Math.round(pg / pc), Math.round(pb / pc), 'n=' + pc] : 'none',
    edgeOpaque, edgeBrightPct: edgeOpaque ? Math.round(100 * edgeBright / edgeOpaque) + '%' : '0%',
  }));
}
