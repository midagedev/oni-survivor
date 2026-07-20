import { expect, test, type Page } from '@playwright/test';
import { writeFile } from 'node:fs/promises';
import { PNG } from 'pngjs';

type GameHooks = {
  seed(value: number): void;
  setState(name: string): void;
  setPausedForScreenshot(paused: boolean): void;
  setReducedMotion?(enabled: boolean): void;
  hideDebugUi?(hidden: boolean): void;
};

type GameDiagnostics = {
  readonly frame: number;
  readonly ready: boolean;
  readonly state: {
    scene: string;
    phase: string;
    score: number;
    player: { x: number; z: number };
    performance?: Record<string, number>;
  };
};

declare global {
  interface Window {
    __THREE_GAME_TEST_HOOKS__?: GameHooks;
    __THREE_GAME_DIAGNOSTICS__?: GameDiagnostics;
    __GAME_TEST__?: {
      showProjectiles?(): void;
      showTechniques?(): void;
      setPlayerPosition?(x: number, z: number): void;
      setObjective?(objective: { title: string; sub?: string; color?: string } | null): void;
      setQaFrozen?(frozen: boolean): void;
    };
  }
}

const TECHNIQUE_FILES = [
  'technique-atlas.png',
] as const;

function watchRuntime(page: Page) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const criticalNetworkErrors: string[] = [];

  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('response', (response) => {
    const url = response.url();
    if (response.status() >= 400 && /\/assets\/techniques\/|\.(?:js|css)(?:\?|$)/.test(url)) {
      criticalNetworkErrors.push(`${response.status()} ${url}`);
    }
  });
  page.on('requestfailed', (request) => {
    const url = request.url();
    if (/\/assets\/techniques\/|\.(?:js|css)(?:\?|$)/.test(url)) {
      criticalNetworkErrors.push(`${request.failure()?.errorText ?? 'request failed'} ${url}`);
    }
  });

  return { consoleErrors, pageErrors, criticalNetworkErrors };
}

async function openReadyGame(page: Page): Promise<void> {
  await page.goto('./', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.ready === true);
  await expect(page.locator('#loading')).toHaveCount(0);
  await expect(page.locator('#app canvas').first()).toBeVisible();
}

function inspectPng(buffer: Buffer) {
  const png = PNG.sync.read(buffer);
  const unique = new Set<number>();
  let opaque = 0;
  let brightChroma = 0;
  let minLuma = 255;
  let maxLuma = 0;
  const pixels = png.width * png.height;
  const stride = Math.max(1, Math.floor(Math.sqrt(pixels / 24_000)));
  let sampled = 0;

  for (let y = 0; y < png.height; y += stride) {
    for (let x = 0; x < png.width; x += stride) {
      const i = (y * png.width + x) * 4;
      const r = png.data[i];
      const g = png.data[i + 1];
      const b = png.data[i + 2];
      const a = png.data[i + 3];
      sampled++;
      if (a > 245) opaque++;
      if (a < 16) continue;
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      minLuma = Math.min(minLuma, luma);
      maxLuma = Math.max(maxLuma, luma);
      if (Math.max(r, g, b) > 170 && Math.max(r, g, b) - Math.min(r, g, b) > 55) brightChroma++;
      unique.add(((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4));
    }
  }

  return {
    width: png.width,
    height: png.height,
    sampled,
    opaqueRatio: opaque / sampled,
    quantizedColors: unique.size,
    luminanceRange: maxLuma - minLuma,
    brightChromaSamples: brightChroma,
  };
}

test('active play renders premium technique art without runtime errors', async ({ page }, testInfo) => {
  const runtime = watchRuntime(page);
  await openReadyGame(page);

  await page.waitForFunction(
    (expected) => {
      const loaded = new Set(
        performance
          .getEntriesByType('resource')
          .map((entry) => entry.name.split('/').pop() ?? '')
          .filter((name) => expected.includes(name)),
      );
      return loaded.size === expected.length;
    },
    [...TECHNIQUE_FILES],
  );

  await page.evaluate((seed) => {
    const hooks = window.__THREE_GAME_TEST_HOOKS__;
    if (!hooks) throw new Error('__THREE_GAME_TEST_HOOKS__ is missing');
    hooks.seed(seed);
    hooks.setReducedMotion?.(true);
    hooks.hideDebugUi?.(true);
    hooks.setState('stress');
  }, 20260720);

  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.scene === 'run');
  // Keep this active rather than showing the pause menu. We store evidence instead of
  // pixel-comparing WebGL output, whose antialiasing differs across GPU/SwiftShader hosts.
  await page.waitForTimeout(180);

  const canvas = page.locator('#app canvas').first();
  const canvasBox = await canvas.boundingBox();
  expect(canvasBox?.width ?? 0).toBeGreaterThan(300);
  expect(canvasBox?.height ?? 0).toBeGreaterThan(300);

  const canvasPng = await canvas.screenshot();
  const pixels = inspectPng(canvasPng);
  expect(pixels.opaqueRatio).toBeGreaterThan(0.94);
  expect(pixels.quantizedColors).toBeGreaterThan(24);
  expect(pixels.luminanceRange).toBeGreaterThan(35);
  expect(pixels.brightChromaSamples).toBeGreaterThan(10);

  const project = testInfo.project.name;
  const screenshotPath = testInfo.outputPath(`active-play-${project}.png`);
  await page.screenshot({ path: screenshotPath, animations: 'disabled' });
  await testInfo.attach(`active-play-${project}`, { path: screenshotPath, contentType: 'image/png' });

  const loadedTechniqueFiles = await page.evaluate((expected) =>
    performance
      .getEntriesByType('resource')
      .map((entry) => entry.name.split('/').pop() ?? '')
      .filter((name) => expected.includes(name)),
    [...TECHNIQUE_FILES],
  );
  expect(new Set(loadedTechniqueFiles)).toEqual(new Set(TECHNIQUE_FILES));

  const diagnostics = await page.evaluate(() => {
    const d = window.__THREE_GAME_DIAGNOSTICS__;
    if (!d) return null;
    const { fps: _headlessFps, ...renderBudget } = d.state.performance ?? {};
    return { frame: d.frame, state: { ...d.state, performance: renderBudget } };
  });
  const evidence = {
    seed: 20260720,
    headlessFpsReported: false,
    project,
    viewport: page.viewportSize(),
    state: 'stress',
    loadedTechniqueFiles: [...new Set(loadedTechniqueFiles)].sort(),
    canvas: pixels,
    diagnostics,
    runtime,
  };
  const evidencePath = testInfo.outputPath(`visual-evidence-${project}.json`);
  await writeFile(evidencePath, `${JSON.stringify(evidence, null, 2)}\n`, 'utf8');
  await testInfo.attach(`visual-evidence-${project}.json`, { path: evidencePath, contentType: 'application/json' });

  // 맵 확장 증거는 넓은 데스크톱 프레임에서 세 목적지를 각각 실제 좌표로 방문해 남긴다.
  if (project === 'desktop') {
    const journeyScenes = [
      {
        id: 'wisteria-village', x: 0, z: 76,
        title: '밤의 여정 2/4 · 등꽃 마을', sub: '피난처에 도착해 등꽃 결계 아래에서 회복하세요',
      },
      {
        id: 'mugen-train', x: 58, z: 26,
        title: '밤의 여정 3/4 · 무한열차', sub: '탈선한 객차 사이의 승객을 구출하세요',
      },
      {
        id: 'infinity-gate', x: 0, z: -11,
        title: '밤의 여정 4/4 · 무한성 관문', sub: '최후의 관문에 집결해 무잔과의 결전을 준비하세요',
      },
    ] as const;
    for (const stop of journeyScenes) {
      await page.evaluate(({ x, z }) => window.__GAME_TEST__?.setPlayerPosition?.(x, z), stop);
      await page.waitForTimeout(420);
      await page.evaluate(({ title, sub }) => {
        window.__GAME_TEST__?.setQaFrozen?.(true);
        window.__GAME_TEST__?.setObjective?.({ title, sub, color: '#e8c667' });
      }, stop);
      const stopPath = testInfo.outputPath(`journey-${stop.id}.png`);
      await page.screenshot({ path: stopPath, animations: 'disabled' });
      await testInfo.attach(`journey-${stop.id}`, { path: stopPath, contentType: 'image/png' });
      await page.evaluate(() => window.__GAME_TEST__?.setQaFrozen?.(false));
    }
  }

  // Exercise the standard freeze/resume contract after preserving the active-play evidence.
  await page.evaluate(() => window.__THREE_GAME_TEST_HOOKS__?.setPausedForScreenshot(true));
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'paused');
  await page.evaluate(() => window.__THREE_GAME_TEST_HOOKS__?.setPausedForScreenshot(false));
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');

  expect(runtime.consoleErrors).toEqual([]);
  expect(runtime.pageErrors).toEqual([]);
  expect(runtime.criticalNetworkErrors).toEqual([]);
});

test('technique showcase produces deterministic motion evidence', async ({ page }, testInfo) => {
  test.setTimeout(45_000);
  const runtime = watchRuntime(page);
  await openReadyGame(page);

  // Each panel begins from the same seeded run and freezes at a later authored-technique
  // age. Freezing before capture prevents screenshot latency from aging or removing VFX.
  const sampleAgesMs = [100, 420, 740, 1060] as const;
  for (let frame = 0; frame < sampleAgesMs.length; frame++) {
    await page.evaluate(async ({ ageMs, seed }) => {
      const hooks = window.__THREE_GAME_TEST_HOOKS__;
      const game = window.__GAME_TEST__;
      if (!hooks || !game?.setQaFrozen) throw new Error('motion evidence hooks are missing');
      hooks.seed(seed);
      hooks.setReducedMotion?.(true);
      hooks.hideDebugUi?.(true);
      hooks.setState('stress');
      await new Promise<void>((resolve) => window.setTimeout(resolve, ageMs));
      game.setQaFrozen(true);
    }, { ageMs: sampleAgesMs[frame], seed: 20260720 });

    const motionPath = testInfo.outputPath(`technique-motion-${String(frame + 1).padStart(2, '0')}.png`);
    await page.screenshot({
      path: motionPath,
      animations: 'disabled',
      clip: { x: 240, y: 150, width: 1120, height: 650 },
    });
    await page.evaluate(() => window.__GAME_TEST__?.setQaFrozen?.(false));
  }

  expect(runtime.consoleErrors).toEqual([]);
  expect(runtime.pageErrors).toEqual([]);
  expect(runtime.criticalNetworkErrors).toEqual([]);
});
