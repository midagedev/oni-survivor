import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const OUT = process.env.OUT || '/private/tmp/threesur-auto-aim-qa';
const URL = process.env.URL || 'http://localhost:5188/';
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const errors = [];
const heroes = [
  ['zhaoyun', 'spear'],
  ['guanyu', 'guandao'],
  ['zhangfei', 'zhangba'],
  ['zhugeliang', 'baiyu'],
  ['huangzhong', 'crossbow'],
  ['lvbu', 'halberd'],
];
const results = [];

for (const [hero, weapon] of heroes) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', (error) => errors.push(`${hero}: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${hero} console: ${message.text()}`);
  });
  page.on('response', (response) => {
    if (response.status() >= 400 && response.url().includes('/assets/projectiles/')) {
      errors.push(`${hero} asset ${response.status()}: ${response.url()}`);
    }
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate((id) => window.__GAME_TEST__.selectHero(id), hero);
  await page.evaluate(() => window.__GAME_TEST__.setBossFlags(true, true, true));
  await page.waitForTimeout(180);
  const before = await page.evaluate(() => window.__GAME_TEST__.stats.autoAim.count);
  const alreadyHasTarget = await page.evaluate(() => window.__GAME_TEST__.stats.autoAim.target >= 0);
  if (!alreadyHasTarget) await page.evaluate(() => window.__GAME_TEST__.spawnPattern('charge'));
  await page.waitForFunction(
    (count) => window.__GAME_TEST__.stats.autoAim.target >= 0 && window.__GAME_TEST__.stats.autoAim.count > count,
    before,
    { timeout: 2800 },
  );
  const stats = await page.evaluate(() => window.__GAME_TEST__.stats);
  const dot = stats.autoAim.x * stats.autoAim.lastX + stats.autoAim.z * stats.autoAim.lastZ;
  await page.screenshot({ path: `${OUT}/${hero}-${weapon}.png` });
  results.push({
    hero,
    expectedWeapon: weapon,
    autoAim: stats.autoAim,
    dot,
    render: await page.evaluate(() => window.__DEBUG__.info()),
  });
  await page.close();
}

const checks = {
  everyHeroTargets: results.every((result) => result.autoAim.target >= 0),
  everyBaseWeaponFires: results.every((result) => result.autoAim.lastWeapon === result.expectedWeapon),
  attacksFollowNearest: results.every((result) => result.dot > 0.72),
  renderBudget: results.every((result) => result.render.calls <= 120 && result.render.tris <= 200000),
  noErrors: errors.length === 0,
};

console.log(JSON.stringify({ checks, results, errors }, null, 2));
await browser.close();
if (Object.values(checks).some((value) => !value)) process.exitCode = 1;
