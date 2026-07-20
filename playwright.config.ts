import { defineConfig } from '@playwright/test';

// 서로 다른 QA 작업이 병렬로 실행돼도 개발 서버 포트가 충돌하지 않게 오버라이드 가능하게 둔다.
const QA_PORT = Number(process.env.QA_PORT ?? 4179);
const QA_ORIGIN = `http://127.0.0.1:${QA_PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  timeout: 30_000,
  expect: { timeout: 7_000 },
  outputDir: 'test-results',
  reporter: [['list']],
  use: {
    baseURL: `${QA_ORIGIN}/oni-survivor/`,
    locale: 'ko-KR',
    headless: true,
    actionTimeout: 5_000,
    navigationTimeout: 15_000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      testMatch: /oni-(visual|bot|balance)\.spec\.ts/,
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
      },
    },
    {
      name: 'mobile',
      testMatch: /oni-visual\.spec\.ts/,
      use: {
        browserName: 'chromium',
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 1,
        hasTouch: true,
        isMobile: true,
      },
    },
  ],
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${QA_PORT} --strictPort`,
    url: `${QA_ORIGIN}/oni-survivor/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
