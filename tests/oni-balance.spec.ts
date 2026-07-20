import { expect, test, type Page } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

declare global {
  interface Window {
    __GAME_TEST__?: {
      selectHero?(id: string): void;
      giveWeapon?(id: string, level?: number): void;
      givePassive?(id: string, level?: number): void;
      setInvulnerable?(seconds?: number): void;
      setBossFlags?(b3: boolean, b6: boolean, b9: boolean): void;
      setTime?(seconds: number): void;
      spawnBoss?(id: string): void;
      cullNonBoss?(): void;
      advanceSimulation?(seconds?: number): void;
      readonly stats?: { time: number; state: string; bossActive: boolean; bossHp01: number };
      readonly result?: { victory: boolean; time: number } | null;
    };
    __THREE_GAME_DIAGNOSTICS__?: { readonly ready: boolean };
    __THREE_GAME_TEST_HOOKS__?: { seed?(value: number): void };
  }
}

async function prepare(
  page: Page,
  weapons: Array<[string, number]>,
  time: number,
  boss: string,
): Promise<number> {
  await page.evaluate(({ weapons, time, boss }) => {
    const game = window.__GAME_TEST__;
    if (!game) throw new Error('__GAME_TEST__ missing');
    game.selectHero?.('tanjiro');
    game.setInvulnerable?.(180);
    for (const [id, level] of weapons) game.giveWeapon?.(id, level);
    game.givePassive?.('talismanho', 3);
    game.setBossFlags?.(true, true, true);
    game.setTime?.(time);
    game.spawnBoss?.(boss);
  }, { weapons, time, boss });
  await page.waitForFunction(() => window.__GAME_TEST__?.stats?.bossActive === true);
  return page.evaluate(() => window.__GAME_TEST__?.stats?.time ?? 0);
}

async function measureTtk(page: Page, finalBoss: boolean, capSeconds: number): Promise<number> {
  const started = await page.evaluate(() => window.__GAME_TEST__?.stats?.time ?? 0);
  const wallDeadline = Date.now() + 120_000;
  while (Date.now() < wallDeadline) {
    const sample = await page.evaluate(() => ({
      stats: (() => {
        window.__GAME_TEST__?.cullNonBoss?.();
        window.__GAME_TEST__?.advanceSimulation?.(0.25);
        return window.__GAME_TEST__?.stats;
      })(),
      result: window.__GAME_TEST__?.result,
      complete: (window as unknown as { __THREE_GAME_DIAGNOSTICS__?: { state?: { complete?: boolean } } })
        .__THREE_GAME_DIAGNOSTICS__?.state?.complete === true,
    }));
    const stats = sample.stats;
    if (stats?.state === 'levelup') await page.keyboard.press('Digit1');
    if (finalBoss ? (sample.result?.victory || sample.complete || stats?.state === 'victory') : stats?.bossActive === false) {
      return (sample.result?.time ?? stats?.time ?? started) - started;
    }
    if ((stats?.time ?? started) - started >= capSeconds) break;
  }
  // 마지막 샘플 경계에서 처치된 경우 onEnd/result 커밋까지 기다려 레이스를 제거한다.
  await page.waitForFunction(
    (isFinal) => isFinal
      ? window.__GAME_TEST__?.result?.victory === true
        || window.__GAME_TEST__?.stats?.state === 'victory'
      : window.__GAME_TEST__?.stats?.bossActive === false,
    finalBoss,
    { timeout: 15_000 },
  ).catch(() => undefined);
  const tail = await page.evaluate(() => ({
    stats: window.__GAME_TEST__?.stats,
    result: window.__GAME_TEST__?.result,
    complete: (window as unknown as { __THREE_GAME_DIAGNOSTICS__?: { state?: { complete?: boolean } } })
      .__THREE_GAME_DIAGNOSTICS__?.state?.complete === true,
  }));
  if (finalBoss ? (tail.result?.victory || tail.complete || tail.stats?.state === 'victory') : tail.stats?.bossActive === false) {
    return (tail.result?.time ?? tail.stats?.time ?? started) - started;
  }
  return Infinity;
}

test('representative builds keep early and final boss TTK in readable envelopes', async ({ page }, testInfo) => {
  test.setTimeout(220_000);
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto('./', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.ready === true);
  await page.evaluate(() => window.__THREE_GAME_TEST_HOOKS__?.seed?.(20260720));

  await prepare(page, [['spear', 4], ['crossbow', 3], ['baiyu', 2]], 180, 'enmu');
  const enmuTtk = await measureTtk(page, false, 70);

  await prepare(page, [
    ['spear', 6], ['crossbow', 5], ['baiyu', 5], ['cavalry', 5], ['mist', 4], ['sound', 4],
  ], 540, 'muzan');
  const muzanTtk = await measureTtk(page, true, 100);

  const report = {
    seed: 20260720,
    unit: 'in-game seconds',
    headlessFpsReported: false,
    early: { boss: 'enmu', encounterMinute: 3, ttk: enmuTtk, target: [20, 65] },
    final: { boss: 'muzan', encounterMinute: 9, ttk: muzanTtk, target: [25, 90] },
    errors,
  };
  const path = testInfo.outputPath('oni-balance-report.json');
  await writeFile(path, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  await testInfo.attach('oni-balance-report.json', { path, contentType: 'application/json' });

  expect(enmuTtk).toBeGreaterThanOrEqual(20);
  expect(enmuTtk).toBeLessThanOrEqual(65);
  expect(muzanTtk).toBeGreaterThanOrEqual(25);
  expect(muzanTtk).toBeLessThanOrEqual(90);
  expect(errors).toEqual([]);
});
