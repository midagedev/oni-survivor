// #52 (1) 성벽 가림: 플레이어를 성벽에 밀착 → 상반신이 가려지지 않는지.
//     (2) 대시 텔레그래프: 화웅 대시 예고 사각형과 실제 돌진 방향 일치 확인.
import { chromium } from '@playwright/test';
const URL = process.env.URL || 'http://localhost:5204/threesur/';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(1600);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);

await hook('selectHero', 'zhaoyun'); await p.waitForTimeout(500);
await hook('setInvulnerable', 999999); await hook('setTime', 30);
await p.waitForTimeout(400);

// (1) 남성문 성벽(z=-28, 수평)의 벽 구간(x=12, 게이트 회피)에 밀착. 플레이어는 벽 남쪽(카메라 측).
await hook('setPlayerPosition', 12, -26.6);
await p.waitForTimeout(500);
await p.screenshot({ path: `${OUT}/wall_south.png` });
// 동쪽 세로 성벽(x=22, z=-48)에도 밀착
await hook('setPlayerPosition', 20.4, -44);
await p.waitForTimeout(500);
await p.screenshot({ path: `${OUT}/wall_east.png` });

// (2) 대시 텔레그래프 정렬: 화웅 소환, 플레이어 이동시키며 예고→돌진 캡처.
await hook('setPlayerPosition', 0, 0);
await p.waitForTimeout(300);
await hook('spawnBoss', 'huaxiong');
await p.waitForTimeout(800);
// 여러 사이클 캡처 — 예고(사각형)와 돌진 순간을 잡기 위해 연속 촬영하며 플레이어 좌우 이동
let shot = 0;
for (let i = 0; i < 40; i++) {
  // 플레이어를 좌우로 흔들어 윈드업 중 재조준 유혹(고정 방향이면 예고=돌진 유지)
  await hook('setPlayerPosition', (i % 2 === 0 ? 8 : -8), 6);
  const s = await stats();
  if (s.state === 'levelup') { await p.keyboard.press('Digit1'); continue; }
  if (i % 4 === 0 && shot < 6) { await p.screenshot({ path: `${OUT}/dash_${shot}.png` }); shot++; }
  await p.waitForTimeout(140);
}
console.log(JSON.stringify({ done: true, shots: shot, errCount: errs.length, errs: errs.slice(0, 4) }, null, 2));
await b.close();
