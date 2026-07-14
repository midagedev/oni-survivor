import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', e => errs.push('P:'+e.message));
p.on('console', m => { if (m.type()==='error') errs.push('C:'+m.text()); });
await p.goto('http://localhost:4173/threesur/', { waitUntil: 'networkidle' });
await p.mouse.click(640,360); await p.waitForTimeout(1400);
const hook=(fn,...a)=>p.evaluate(({fn,a})=>window.__GAME_TEST__[fn](...a),{fn,a});
const stats=()=>p.evaluate(()=>window.__GAME_TEST__.stats);
const hp=()=>p.evaluate(()=>{const m=document.body.innerText.match(/(\d+)\s*\/\s*(\d+)/);return m?+m[1]:null;});
const pos=async()=>{const s=await stats();return {x:s.map.playerX, z:s.map.playerZ, alive:s.alive};};
const clr=async()=>{for(let i=0;i<60;i++){const s=await stats();if(s.state!=='levelup')break;await p.keyboard.press('Digit1');await p.waitForTimeout(40);}};

// ===== 넛지 격리 측정: 정지·무적off. 보스(원소) 유도 독구체·화살비는 정지 표적에 명중 → 넛지.
// 접촉은 위치 변화 없음(확인됨) → 정지 중 위치 점프 = 오직 투사체 넛지 =====
await hook('selectHero','huangzhong');
await hook('setInvulnerable',0);
await hook('setTime',300);
await p.waitForTimeout(1800); await clr();
let prev = await pos();
let pathLen = 0, hits = 0, maxJump = 0, prevHp = await hp();
const startX = prev.x, startZ = prev.z;
const t0 = Date.now();
let shotFx = false;
while (Date.now() - t0 < 15000) {
  await p.waitForTimeout(40);
  await clr();
  const cur = await pos();
  const d = Math.hypot(cur.x - prev.x, cur.z - prev.z);
  pathLen += d;
  if (d > maxJump) maxJump = d;
  prev = cur;
  const h = await hp();
  if (h != null && prevHp != null && h < prevHp) { hits++; if (!shotFx) { await p.screenshot({ path: `${OUT}/w44_nudge_hit.png` }); shotFx = true; } }
  if (h != null) prevHp = h;
}
const drift = Math.hypot(prev.x - startX, prev.z - startZ);
const nudgeMeasured = { hits, pathLen: +pathLen.toFixed(2), avgPerHit: +(pathLen / Math.max(1, hits)).toFixed(3), maxSampleJump: +maxJump.toFixed(3), netDrift: +drift.toFixed(2) };

// ===== 조작 방해 여부: 피격 중 우측 이동 2s 이동거리 (넛지가 이동을 막지 않는지) =====
await hook('selectHero','huangzhong');
await hook('setInvulnerable',0);
await hook('setTime',300);
await p.waitForTimeout(1500); await clr();
const mStart = await pos();
await p.keyboard.down('ArrowRight');
const mt = Date.now();
while (Date.now() - mt < 2000) { await p.waitForTimeout(200); await clr(); }
await p.keyboard.up('ArrowRight');
const mEnd = await pos();
const moveDist = Math.hypot(mEnd.x - mStart.x, mEnd.z - mStart.z);

console.log(JSON.stringify({
  nudge: nudgeMeasured,
  moveUnderFire: { dist: +moveDist.toFixed(2), note: '피격 받으며 우측 2s 이동' },
  theoreticalNudgePerHit: '~0.30m (strength 2.4 / decay 8)',
  errs: errs.slice(0,6),
}, null, 2));
await b.close();
