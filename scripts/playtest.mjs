import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', e => errs.push(e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);
const hudText = async () => p.evaluate(() => Array.from(document.querySelectorAll('div')).map(d => d.textContent).filter(t => t && (/^\d\d:\d\d$/.test(t) || /^처치 \d+$/.test(t) || /^Lv \d+$/.test(t))));
// 30초 생존 플레이 (원형으로 돌며 카이팅)
const keys = ['w','d','s','a'];
for (let i = 0; i < 15; i++) {
  const k = keys[i % 4];
  await p.keyboard.down(k);
  await p.waitForTimeout(1000);
  await p.keyboard.up(k);
  if (i === 5) await p.screenshot({ path: OUT + '/play1.png' });
  // 레벨업 카드가 떠 있으면 1번 선택
  const hasCard = await p.evaluate(() => !!Array.from(document.querySelectorAll('div')).find(d => d.textContent === '1' || (d.textContent||'').includes('선택')));
  if (hasCard) await p.keyboard.press('Digit1');
}
await p.screenshot({ path: OUT + '/play2.png' });
console.log(JSON.stringify({ hud: await hudText(), errs: errs.slice(0,5) }));
await b.close();
