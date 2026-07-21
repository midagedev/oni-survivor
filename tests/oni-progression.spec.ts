import { expect, test, type Page } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

const BUILDS = {
  tanjiro: ['spear', 'hinokami'],
  tomioka: ['guandao', 'zhanma'],
  nezuko: ['fire', 'chibi'],
  kanroji: ['love', 'love_secret'],
  shinobu: ['crossbow', 'yuanrong'],
  kanao: ['baiyu', 'bamen'],
  rengoku: ['cavalry', 'rengoku_secret'],
  zenitsu: ['thunder', 'tianfa'],
  inosuke: ['zhangba', 'beast_secret'],
  tokito: ['mist', 'mist_secret'],
  uzui: ['sound', 'sound_secret'],
  sanemi: ['wind', 'wind_secret'],
  himejima: ['stone', 'stone_secret'],
} as const;

type ProgressionStats = {
  state: string;
  hero: string;
  currentChoices: Array<{ kind: string; id: string; ownerHeroId: string | null; targetLevel?: number }>;
  lineage: { branches: string[]; signatureWeapon: string; musouPowerMul: number; musouChargeMul: number };
  weaponProgress: Array<{ id: string; level: number }>;
  weapons: string[];
  musouActive: boolean;
  musouDamage: number;
  musouFinishers: number;
  bossActive: boolean;
  bossHp01: number;
  bossX: number;
  bossZ: number;
  map: { playerX: number; playerZ: number };
};

declare global {
  interface Window {
    __GAME_TEST__?: {
      selectHero?(id: string): void;
      giveWeapon?(id: string, level?: number): void;
      givePassive?(id: string, level?: number): void;
      levelUp?(): void;
      treasure?(boss?: boolean): void;
      fillMusou?(): void;
      activateMusou?(): void;
      spawnBoss?(id: string): void;
      setPlayerPosition?(x: number, z: number): void;
      advanceSimulation?(seconds?: number): void;
      setInvulnerable?(seconds?: number): void;
      openShop?(tab?: 'upgrade' | 'codex'): void;
      readonly stats?: ProgressionStats;
    };
    __THREE_GAME_DIAGNOSTICS__?: { readonly ready: boolean; readonly state: { phase: string } };
    __THREE_GAME_TEST_HOOKS__?: { seed?(value: number): void };
  }
}

async function openReady(page: Page): Promise<void> {
  await page.goto('./', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.ready === true);
}

async function forceFork(page: Page, signature: string, currentLevel: 2 | 5): Promise<ProgressionStats> {
  await page.evaluate(({ signature, currentLevel }) => {
    window.__GAME_TEST__?.giveWeapon?.(signature, currentLevel);
    window.__GAME_TEST__?.levelUp?.();
  }, { signature, currentLevel });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'levelup');
  return page.evaluate(() => window.__GAME_TEST__?.stats as ProgressionStats);
}

test('all 13 heroes only receive owned lineage forks and awaken their own secret art', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'Full 13-hero mechanics matrix runs on desktop.');
  // 13개 런의 분기·비전·오의 전체 타임라인과 마지막 Codex 증거까지 순차 검증한다.
  test.setTimeout(480_000);
  const errors: string[] = [];
  const ultimateEnvelope: Array<{ heroId: string; bossHpBefore: number; bossHpAfter: number; dealtFraction: number }> = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  await openReady(page);

  let seed = 20260721;
  for (const [heroId, [signature, secret]] of Object.entries(BUILDS)) {
    await page.evaluate(({ heroId, seed }) => {
      window.__THREE_GAME_TEST_HOOKS__?.seed?.(seed);
      window.__GAME_TEST__?.selectHero?.(heroId);
    }, { heroId, seed: seed++ });
    await page.waitForFunction((id) => window.__GAME_TEST__?.stats?.hero === id, heroId);

    // 일반 카드 풀에서도 다른 대원의 서명 기술/비전이 한 장도 섞이지 않아야 한다.
    await page.evaluate(() => window.__GAME_TEST__?.levelUp?.());
    await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'levelup');
    const ordinary = await page.evaluate(() => window.__GAME_TEST__?.stats as ProgressionStats);
    const foreignAtLevelUp = Object.entries(BUILDS)
      .filter(([id]) => id !== heroId)
      .flatMap(([, build]) => [build[0], build[1]] as string[]);
    expect(ordinary.currentChoices.some((choice) => foreignAtLevelUp.includes(choice.id))).toBe(false);
    expect(ordinary.currentChoices.every((choice) => choice.ownerHeroId === null || choice.ownerHeroId === heroId)).toBe(true);
    await page.keyboard.press('Digit1');
    await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');

    const first = await forceFork(page, signature, 2);
    expect(first.currentChoices).toHaveLength(2);
    expect(first.currentChoices.every((choice) =>
      choice.kind === 'lineageBranch' && choice.ownerHeroId === heroId && choice.targetLevel === 3,
    )).toBe(true);
    const firstCards = page.locator('.levelup-card:visible');
    await expect(firstCards).toHaveCount(2);
    expect(await firstCards.evaluateAll((cards, owner) => cards.every((card) =>
      card instanceof HTMLButtonElement
      && card.dataset.owner === owner
      && card.dataset.kind === 'branch'
      && !!card.querySelector('.lc-lineage')
      && !!card.querySelector('.lc-form')
      && !!card.querySelector('.lc-mastery'),
    ), heroId)).toBe(true);
    await page.keyboard.press('Digit1');
    await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');

    const second = await forceFork(page, signature, 5);
    expect(second.currentChoices).toHaveLength(2);
    expect(second.currentChoices.every((choice) =>
      choice.kind === 'lineageBranch' && choice.ownerHeroId === heroId && choice.targetLevel === 6,
    )).toBe(true);
    await page.keyboard.press('Digit2');
    await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');
    if (heroId === 'zenitsu') {
      await expect(page.locator('.oni-musou-button')).toHaveAttribute('aria-label', /화뢰신/);
    }

    await page.evaluate(({ signature }) => {
      window.__GAME_TEST__?.giveWeapon?.(signature, 8);
      window.__GAME_TEST__?.treasure?.(false);
    }, { signature });
    await expect.poll(() => page.evaluate(() => window.__GAME_TEST__?.stats?.weaponProgress ?? []))
      .toContainEqual({ id: secret, level: 8 });

    const final = await page.evaluate(() => window.__GAME_TEST__?.stats as ProgressionStats);
    expect(final.lineage.branches).toHaveLength(2);
    expect(final.lineage.musouPowerMul).toBeGreaterThan(1);
    expect(final.lineage.musouChargeMul).toBeGreaterThan(1);
    expect(final.weaponProgress.some((weapon) => weapon.id === secret)).toBe(true);
    const foreignSignatureIds = Object.entries(BUILDS)
      .filter(([id]) => id !== heroId)
      .flatMap(([, build]) => [build[0], build[1]] as string[]);
    expect(final.weaponProgress.some((weapon) => foreignSignatureIds.includes(weapon.id))).toBe(false);

    // 각 고유 오의의 전체 타임라인과 전용 피니셔를 실제 60Hz 시뮬레이션으로 끝까지 통과한다.
    await page.evaluate(() => {
      window.__GAME_TEST__?.setInvulnerable?.(10);
      window.__GAME_TEST__?.spawnBoss?.('enmu');
      const stats = window.__GAME_TEST__?.stats;
      if (stats) window.__GAME_TEST__?.setPlayerPosition?.(stats.bossX, stats.bossZ + 6);
      window.__GAME_TEST__?.fillMusou?.();
      window.__GAME_TEST__?.activateMusou?.();
    });
    const beforeUltimate = await page.evaluate(() => window.__GAME_TEST__?.stats as ProgressionStats);
    await page.evaluate(() => window.__GAME_TEST__?.advanceSimulation?.(6.25));
    const afterUltimate = await page.evaluate(() => window.__GAME_TEST__?.stats as ProgressionStats);
    expect(afterUltimate.musouActive).toBe(false);
    expect(afterUltimate.musouDamage).toBeGreaterThan(0);
    expect(afterUltimate.musouFinishers).toBe(1);
    const bossHpAfter = afterUltimate.bossActive ? afterUltimate.bossHp01 : 0;
    const dealtFraction = beforeUltimate.bossHp01 - bossHpAfter;
    ultimateEnvelope.push({ heroId, bossHpBefore: beforeUltimate.bossHp01, bossHpAfter, dealtFraction });
    expect(dealtFraction).toBeGreaterThan(0.04);
    expect(dealtFraction).toBeLessThan(0.9);
    expect(Math.hypot(
      afterUltimate.map.playerX - beforeUltimate.map.playerX,
      afterUltimate.map.playerZ - beforeUltimate.map.playerZ,
    )).toBeLessThan(45);
  }

  await page.evaluate(() => window.__GAME_TEST__?.openShop?.('codex'));
  await expect(page.locator('.lineage-codex-cell')).toHaveCount(13);
  expect(await page.locator('.lineage-codex-cell').evaluateAll((cells) =>
    new Set(cells.map((cell) => (cell as HTMLElement).dataset.owner)).size,
  )).toBe(13);
  const envelopePath = testInfo.outputPath('ultimate-damage-envelope.json');
  await writeFile(envelopePath, `${JSON.stringify(ultimateEnvelope, null, 2)}\n`, 'utf8');
  await testInfo.attach('ultimate-damage-envelope', { path: envelopePath, contentType: 'application/json' });
  expect(errors).toEqual([]);
});

test('portrait level-up presents accessible wide lineage cards and a named ultimate', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Portrait layout assertion runs on the mobile project.');
  await openReady(page);
  await page.evaluate(() => window.__GAME_TEST__?.selectHero?.('zenitsu'));
  const stats = await forceFork(page, 'thunder', 2);
  expect(stats.currentChoices.every((choice) => choice.ownerHeroId === 'zenitsu')).toBe(true);

  const cards = page.locator('.levelup-card:visible');
  await expect(cards).toHaveCount(2);
  const boxes = await cards.evaluateAll((nodes) => nodes.map((node) => {
    const r = node.getBoundingClientRect();
    return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width };
  }));
  expect(boxes[0].width).toBeGreaterThanOrEqual(260);
  expect(boxes[0].left).toBeGreaterThanOrEqual(0);
  expect(boxes[0].right).toBeLessThanOrEqual(390);
  expect(boxes[0].top).toBeGreaterThanOrEqual(0);
  expect(boxes[0].bottom).toBeLessThanOrEqual(844);

  const ultimateButton = page.locator('.oni-musou-button');
  await expect(ultimateButton).toHaveAttribute('aria-label', /벽력일섬 · 육련/);
  await cards.first().focus();
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'play');
  expect((await page.evaluate(() => window.__GAME_TEST__?.stats?.lineage.branches.length)) ?? 0).toBe(1);
  const hudReadability = await page.locator('.hud-lineage').evaluate((node) => {
    const title = node.querySelector('.hud-lineage-title') as HTMLElement;
    const pip = node.querySelector('.hud-lineage-rail i') as HTMLElement;
    const rect = node.getBoundingClientRect();
    return {
      top: rect.top,
      right: rect.right,
      width: rect.width,
      titlePx: Number.parseFloat(getComputedStyle(title).fontSize),
      pipPx: Number.parseFloat(getComputedStyle(pip).fontSize),
    };
  });
  expect(hudReadability.top).toBeGreaterThanOrEqual(70);
  expect(hudReadability.right).toBeLessThanOrEqual(210);
  expect(hudReadability.width).toBeGreaterThanOrEqual(160);
  expect(hudReadability.titlePx).toBeGreaterThanOrEqual(10);
  expect(hudReadability.pipPx).toBeGreaterThanOrEqual(8);

  const screenshotPath = testInfo.outputPath('lineage-levelup-mobile.png');
  await page.evaluate(() => {
    window.__GAME_TEST__?.giveWeapon?.('thunder', 5);
    window.__GAME_TEST__?.levelUp?.();
  });
  await page.waitForFunction(() => window.__THREE_GAME_DIAGNOSTICS__?.state.phase === 'levelup');
  await page.screenshot({ path: screenshotPath, animations: 'disabled' });
  await testInfo.attach('lineage-levelup-mobile', { path: screenshotPath, contentType: 'image/png' });
});
