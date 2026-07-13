import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const TAG = process.env.TAG || 'before';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const sizes = [[1280,600],[900,700],[390,844]];
for (const [w,h] of sizes) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: w<500, isMobile: w<500 });
  const p = await ctx.newPage();
  const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(500);
  // 조운 선택 → 런 → 긴 카드 유도(무기 여러개 + 강제 레벨업)
  await p.getByText('출진 出陣', { exact: true }).click().catch(()=>{});
  await p.waitForTimeout(300);
  await p.locator('.hero-card').first().click().catch(()=>{});
  await p.waitForTimeout(700);
  await p.evaluate(() => { try { window.__GAME_TEST__.giveWeapon('guandao'); window.__GAME_TEST__.givePassive('armor',4);} catch(e){} });
  await p.evaluate(() => window.__GAME_TEST__?.levelUp?.());
  await p.waitForTimeout(500);
  // 레벨업 오버레이 상태 + 이탈 측정
  const info = await p.evaluate(() => {
    const wrap = document.querySelector('.levelup-wrap') || document.querySelector('[style*="z-index:40"] > div') || null;
    const ov = document.querySelector('.levelup-overlay') || Array.from(document.querySelectorAll('div')).find(d=>getComputedStyle(d).zIndex==='40');
    const r = ov ? ov.getBoundingClientRect() : null;
    // reroll 버튼 텍스트 요소 위치
    const reroll = Array.from(document.querySelectorAll('div')).find(d=>(d.textContent||'').includes('리롤'));
    const rr = reroll ? reroll.getBoundingClientRect() : null;
    return { hasOverlay: !!ov, vh: window.innerHeight, rerollBottom: rr? Math.round(rr.bottom):null, rerollVisible: rr? (rr.bottom<=window.innerHeight && rr.top>=0):null };
  });
  console.log(`${w}x${h}:`, JSON.stringify(info), errs[0]||'');
  await p.screenshot({ path: `${OUT}/p3_levelup_${TAG}_${w}x${h}.png` });
  await ctx.close();
}
await b.close();
