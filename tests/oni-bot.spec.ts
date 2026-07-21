import { expect, test, type Page } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

type BotSnapshot = {
  frame: number;
  scene: string;
  phase: string;
  kills: number;
  x: number;
  z: number;
};

declare global {
  interface Window {
    __THREE_GAME_TEST_HOOKS__?: {
      seed(value: number): void;
      setState(name: string): void;
      setPausedForScreenshot(paused: boolean): void;
    };
    __THREE_GAME_DIAGNOSTICS__?: {
      readonly frame: number;
      readonly ready: boolean;
      readonly state: {
        scene: string;
        phase: string;
        failed: boolean;
        complete: boolean;
        score: number;
        player: { x: number; z: number };
      };
    };
    __GAME_TEST__?: {
      setInvulnerable?(seconds?: number): void;
      killPlayer?(): void;
      killBoss?(): void;
      setTime?(seconds: number): void;
    };
  }
}

function watchRuntime(page: Page) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));
  return { consoleErrors, pageErrors };
}

async function snapshot(page: Page): Promise<BotSnapshot> {
  return page.evaluate(() => {
    const d = window.__THREE_GAME_DIAGNOSTICS__;
    if (!d) throw new Error('__THREE_GAME_DIAGNOSTICS__ is missing');
    return {
      frame: d.frame,
      scene: d.state.scene,
      phase: d.state.phase,
      kills: d.state.score,
      x: d.state.player.x,
      z: d.state.player.z,
    };
  });
}

test('WASD sweep advances the run, detects softlocks, and retries after defeat', async ({ page }, testInfo) => {
  // 전체 QA 병렬 부하에서도 결과 화면의 재출진까지 검증할 시간을 보장한다.
  test.setTimeout(90_000);
  const runtime = watchRuntime(page);
  await page.goto('./', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.ready === true);

  const seed = 20260720;
  await page.evaluate((value) => {
    const hooks = window.__THREE_GAME_TEST_HOOKS__;
    if (!hooks) throw new Error('__THREE_GAME_TEST_HOOKS__ is missing');
    hooks.seed(value);
    hooks.setState('active-play');
    window.__GAME_TEST__?.setInvulnerable?.(60);
  }, seed);
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');

  const inputScript = ['KeyW', 'KeyD', 'KeyS', 'KeyA', 'KeyW', 'KeyD'] as const;
  const samples: Array<{ key: string; before: BotSnapshot; after: BotSnapshot; distance: number }> = [];
  const softlockWindows: number[] = [];
  let distanceTravelled = 0;
  let levelupRecoveries = 0;
  const start = await snapshot(page);

  for (let i = 0; i < inputScript.length; i++) {
    const key = inputScript[i];
    const before = await snapshot(page);
    await page.keyboard.down(key);
    await page.waitForTimeout(320);
    await page.keyboard.up(key);
    await page.waitForTimeout(30);
    let after = await snapshot(page);

    // Level-up choice is a real keyboard action and keeps the scripted sweep moving.
    if (after.phase === 'levelup') {
      await page.keyboard.press('Digit1');
      await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');
      levelupRecoveries++;
      after = await snapshot(page);
    }

    const distance = Math.hypot(after.x - before.x, after.z - before.z);
    distanceTravelled += distance;
    samples.push({ key, before, after, distance });
    const framesMoved = after.frame - before.frame;
    const progressed = distance >= 0.04 || after.kills > before.kills;
    if (framesMoved >= 2 && before.phase === 'play' && after.phase === 'play' && !progressed) {
      softlockWindows.push(i);
    }
  }

  const end = await snapshot(page);
  const framesAdvanced = end.frame - start.frame;
  const killsDelta = end.kills - start.kills;

  // Explicit defeat is a test setup action; retry itself is exercised through the player-facing button.
  await page.evaluate(() => window.__GAME_TEST__?.killPlayer?.());
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.failed === true);
  const failObserved = (await snapshot(page)).scene === 'result';
  const failScreenshotPath = testInfo.outputPath('fail-retry.png');
  await page.screenshot({ path: failScreenshotPath, animations: 'disabled' });
  await testInfo.attach('fail-retry', { path: failScreenshotPath, contentType: 'image/png' });

  await page.getByRole('button', { name: /다시 출진|Sortie Again/i }).click();
  await page.waitForFunction(() => {
    const state = window.__THREE_GAME_DIAGNOSTICS__?.state;
    return state?.scene === 'run' && state.phase === 'play';
  });
  const retryState = await snapshot(page);
  const retrySucceeded = retryState.scene === 'run' && retryState.phase === 'play';

  const report = {
    seed,
    headlessFpsReported: false,
    note: 'Headless frame counts are functional evidence only; no FPS claim is made.',
    inputScript,
    framesAdvanced,
    distanceTravelled,
    killsBefore: start.kills,
    killsAfter: end.kills,
    killsDelta,
    softlockWindows,
    levelupRecoveries,
    failObserved,
    retrySucceeded,
    samples,
    runtime,
  };
  const reportPath = testInfo.outputPath('oni-bot-report.json');
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  await testInfo.attach('oni-bot-report.json', { path: reportPath, contentType: 'application/json' });

  expect(framesAdvanced).toBeGreaterThan(3);
  expect(distanceTravelled).toBeGreaterThan(0.25);
  expect(softlockWindows.length).toBeLessThanOrEqual(3);
  expect(failObserved).toBe(true);
  expect(retrySucceeded).toBe(true);
  expect(runtime.consoleErrors).toEqual([]);
  expect(runtime.pageErrors).toEqual([]);
});

test('dawn never auto-wins and Muzan defeat is the victory condition', async ({ page }) => {
  const runtime = watchRuntime(page);
  await page.goto('./', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.ready === true);

  await page.evaluate(() => {
    window.__THREE_GAME_TEST_HOOKS__?.seed(20260720);
    window.__THREE_GAME_TEST_HOOKS__?.setState('boss');
    window.__GAME_TEST__?.setTime?.(601);
  });
  await page.waitForTimeout(250);

  const atDawn = await page.evaluate(() => window.__THREE_GAME_DIAGNOSTICS__?.state);
  expect(atDawn?.scene).toBe('run');
  expect(atDawn?.phase).toBe('play');
  expect(atDawn?.complete).toBe(false);

  await page.evaluate(() => window.__GAME_TEST__?.killBoss?.());
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.complete === true);
  await expect(page.getByText(/Muzan Repelled|무잔 격퇴/i)).toBeVisible();
  expect(runtime.consoleErrors).toEqual([]);
  expect(runtime.pageErrors).toEqual([]);
});
