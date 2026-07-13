import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(700);
const scene = () => p.evaluate(() => window.__GAME_TEST__?.scene);
// 런 진입 보장 (최대 5회 재시도)
for (let attempt=0; attempt<5; attempt++){
  const s = await scene();
  if (s === 'run') break;
  if (s === 'title') { await p.getByText('출진 出陣',{exact:true}).click().catch(()=>{}); await p.waitForTimeout(400); }
  // select 화면이면 첫 카드
  await p.locator('.hero-card').first().click().catch(()=>{});
  await p.waitForTimeout(700);
}
console.log('scene before combat:', await scene());
await p.evaluate(() => { const g=window.__GAME_TEST__; if(!g)return; try{g.giveWeapon('crossbow');g.giveWeapon('baiyu');g.giveWeapon('thunder');g.setBossFlags(true,true,false);g.setTime(180);}catch(e){console.log('hookerr',String(e));} });
for (let i=0;i<6;i++){ const k=['d','s','a','w'][i%4]; await p.keyboard.down(k); await p.waitForTimeout(350); await p.keyboard.up(k); }
await p.waitForTimeout(300);
const st = await p.evaluate(()=>window.__GAME_TEST__?.stats);
console.log('stats:', JSON.stringify(st));
await p.screenshot({ path: OUT + '/p3_projectiles_combat.png' });
await b.close();
