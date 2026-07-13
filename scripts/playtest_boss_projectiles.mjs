import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = process.env.OUT || '/private/tmp/threesur-boss-projectile-qa';
const URL = process.env.URL || 'http://localhost:5188/threesur/';
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];
const cases = [
  { id: 'yuanshao', kinds: [0, 3], captureDelay: 600 },
  { id: 'dongzhuo', kinds: [2, 5], captureDelay: 600 },
  { id: 'lvbu', kinds: [4], captureDelay: 600 },
];
const results = [];

for (const boss of cases) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', (error) => errors.push(`${boss.id}: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${boss.id} console: ${message.text()}`);
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.__GAME_TEST__.selectHero('zhaoyun'));
  await page.evaluate(() => window.__GAME_TEST__.setBossFlags(true, true, true));
  await page.evaluate(() => window.__GAME_TEST__.setInvulnerable(30));
  await page.evaluate((id) => window.__GAME_TEST__.spawnBoss(id), boss.id);

  const maxima = [0, 0, 0, 0, 0, 0];
  let captured = false;
  for (let tick = 0; tick < 70; tick++) {
    await page.waitForTimeout(100);
    const counts = await page.evaluate(() => window.__GAME_TEST__.stats.enemyProjectileKinds);
    counts.forEach((count, kind) => { maxima[kind] = Math.max(maxima[kind], count); });
    if (!captured && boss.kinds.every((kind) => counts[kind] > 0)) {
      await page.waitForTimeout(boss.captureDelay);
      await page.screenshot({ path: `${OUT}/${boss.id}-projectiles.png` });
      captured = true;
    }
  }
  const passed = boss.kinds.every((kind) => maxima[kind] > 0);
  results.push({ boss: boss.id, expectedKinds: boss.kinds, maxima, captured, passed });
  await page.close();
}

console.log(JSON.stringify({ results, errors }, null, 2));
await browser.close();
if (errors.length || results.some((result) => !result.passed || !result.captured)) process.exit(1);
