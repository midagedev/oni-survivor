// #49 W2~W4 QA — 칭호(訓章) 조건 분기 + 결과 화면 렌더(ko/en, 승/패) + 화웅 4줄 순환 + 콘솔/오버플로우.
// 2파트:
//   Part 1 (순수 함수): esbuild로 epithets.ts/siegeData.ts/i18n.ts를 번들→node 동적 import.
//     pickEpithet 조건 분기(kills/보스/콤보/낙양/승리·초승/폴백) + lordAppearLine 4줄·lordDeathLine 2줄 순환.
//   Part 2 (실제 렌더): 격리 vite preview(:5197, --use-angle=metal)로 결과 화면 도달 →
//     .result-epithet 렌더/텍스트/오버플로우/콘솔에러 확인(승리 ko·en + 패배 ko).
// 실행: node scripts/qa_w49b.mjs   (dist 필요 — 사전에 npm run build)
import { build } from 'esbuild';
import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';

const ROOT = '/Users/hckim/repo/threesur';
const SCRATCH = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
mkdirSync(SCRATCH, { recursive: true });
const results = { part1: {}, part2: {}, pass: true };
const fail = (msg) => { results.pass = false; results.errors ??= []; results.errors.push(msg); };

// ───────── Part 1: 순수 함수 (esbuild 번들 → import) ─────────
const entry = `${SCRATCH}/w49b_entry.ts`;
writeFileSync(entry, `
export { pickEpithet, epithetText, EPITHETS } from '${ROOT}/src/data/epithets';
export { lordAppearLine, lordDeathLine } from '${ROOT}/src/data/siegeData';
export { setLang } from '${ROOT}/src/core/i18n';
`);
const outfile = `${SCRATCH}/w49b_bundle.mjs`;
await build({ entryPoints: [entry], bundle: true, format: 'esm', outfile, platform: 'browser', logLevel: 'silent' });
const m = await import(`file://${outfile}?t=${Date.now()}`);

// 최소 SaveData(총승수만 사용). 기본 totalWins=5 → first_unify 미발동.
const save = (o = {}) => ({ totalWins: 5, ...o });
const base = { victory: false, kills: 0, maxCombo: 0, level: 1, time: 0, bosses: [], masterworks: [], endless: false };
const pick = (o, s = save()) => m.pickEpithet({ ...base, ...o }, s);

const cases = [
  ['fallback',      pick({}),                                           'altar_count'],
  ['kills1000',     pick({ kills: 1200 }),                              'ilgidangcheon'],
  ['luoyang_held',  pick({ luoyang: 'held' }),                          'luoyang_held'],
  ['luoyang_fallen',pick({ luoyang: 'fallen' }),                        'fallen_gate'],
  ['captured',      pick({ luoyang: 'captured' }),                      'gate_breaker'],
  ['wuchao',        pick({ bosses: ['a', 'b', 'c'], maxCombo: 320 }),   'wuchao_fire'],
  ['three_champ',   pick({ bosses: ['a', 'b', 'c'], maxCombo: 100 }),   'three_champions'],
  ['dongzhuo',      pick({ bosses: ['dongzhuo'] }),                     'yangren_gate'],
  ['yuanshao',      pick({ bosses: ['yuanshao'] }),                     'baima_banner'],
  ['first_unify',   pick({ victory: true }, save({ totalWins: 1 })),    'first_unify'],
  ['victory_r1',    pick({ victory: true }, save({ totalWins: 9 })),    'unified'],
  ['combo300',      pick({ maxCombo: 300 }),                            'combo_sweep'],
  ['masterworks3',  pick({ masterworks: ['x', 'y', 'z'] }),             'masterworks_bearer'],
];
results.part1.epithets = {};
for (const [name, ep, want] of cases) {
  const got = ep ? ep.id : null;
  const ok = got === want;
  results.part1.epithets[name] = { got, want, ok };
  if (!ok) fail(`pickEpithet[${name}] got=${got} want=${want}`);
}
// 우선순위: 최고 rarity 승리(luoyang_held r3가 gate_breaker r2보다 우선)
const prio = pick({ luoyang: 'held', bosses: ['dongzhuo'] });
results.part1.priority = { got: prio?.id, rarity: prio?.rarity };
if (prio?.id !== 'luoyang_held') fail(`priority: expected luoyang_held(r3), got ${prio?.id}`);

// epithetText ko/en
m.setLang('ko'); const koTxt = m.epithetText(prio);
m.setLang('en'); const enTxt = m.epithetText(prio);
results.part1.epithetText = { ko: koTxt, en: enTxt };
if (!koTxt || !enTxt || koTxt === enTxt) fail('epithetText ko/en not distinct');

// 화웅 LORD_APPEAR 4줄 / LORD_DEATH 2줄 순환 (deterministic index)
m.setLang('ko');
const appear = [0, 1, 2, 3].map((i) => m.lordAppearLine(i));
const death = [0, 1].map((i) => m.lordDeathLine(i));
m.setLang('en');
const appearEn0 = m.lordAppearLine(0);
results.part1.huaxiong = { appearCount: new Set(appear).size, deathCount: new Set(death).size, appear, koVsEn: appear[0] !== appearEn0 };
if (new Set(appear).size !== 4) fail(`LORD_APPEAR distinct=${new Set(appear).size} (want 4)`);
if (new Set(death).size !== 2) fail(`LORD_DEATH distinct=${new Set(death).size} (want 2)`);
if (appear[0] === appearEn0) fail('LORD_APPEAR ko==en (i18n not applied)');
m.setLang('ko');

// ───────── Part 2: 결과 화면 실제 렌더 (격리 preview) ─────────
const PORT = 5197;
const BASE = `http://localhost:${PORT}/threesur/`;
const srv = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: ROOT, stdio: 'ignore' });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
// preview 리슨 대기
let up = false;
for (let i = 0; i < 40 && !up; i++) {
  await wait(400);
  try { const r = await fetch(BASE); up = r.ok; } catch { /* retry */ }
}
if (!up) { fail('preview server not up'); }

const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const consoleErrors = [];

// 결과 화면 도달 후 .result-epithet 검사. lang: 'ko'|'en', mode: 'win'|'lose'.
async function reachResult(lang, mode, shot) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => consoleErrors.push(`[${lang}/${mode}] ${e.message}`));
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(`[${lang}/${mode}] c:${msg.text()}`); });
  await page.addInitScript((lg) => { try { localStorage.setItem('threesur-lang', lg); } catch { /* */ } }, lang);
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const H = (fn, ...a) => page.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
  const scene = () => page.evaluate(() => window.__GAME_TEST__.scene);
  const rstate = () => page.evaluate(() => window.__GAME_TEST__.stats?.state);

  await H('selectHero', 'guanyu');
  await page.waitForTimeout(500);
  if (mode === 'win') {
    await H('setInvulnerable', 9999);
    await H('setTime', 599.9);
  } else {
    await H('killPlayer');
  }
  // 결과 도달까지: 레벨업 카드가 뜨면 Digit1로 소진하며 승리 크로스 유도.
  for (let i = 0; i < 40 && (await scene()) !== 'result'; i++) {
    if ((await rstate()) === 'levelup') { await page.keyboard.press('Digit1'); }
    await page.waitForTimeout(200);
  }
  const reached = (await scene()) === 'result';
  await page.waitForTimeout(400); // 결과 화면 페이드 완료

  const ep = await page.evaluate(() => {
    const e = document.querySelector('.result-epithet');
    if (!e) return null;
    const name = e.querySelector('.ep-name')?.textContent ?? '';
    const label = e.querySelector('.ep-label')?.textContent ?? '';
    const r = e.getBoundingClientRect();
    return { label, name, right: r.right, left: r.left, width: r.width };
  });
  const shotPath = `${SCRATCH}/${shot}.png`;
  await page.screenshot({ path: shotPath });
  await ctx.close();
  return { reached, ep, shot: shotPath };
}

if (up) {
  results.part2.win_ko = await reachResult('ko', 'win', 'w49b_win_ko');
  results.part2.win_en = await reachResult('en', 'win', 'w49b_win_en');
  results.part2.lose_ko = await reachResult('ko', 'lose', 'w49b_lose_ko');

  for (const [k, v] of Object.entries(results.part2)) {
    if (!v.reached) fail(`part2[${k}] did not reach result screen`);
    else if (!v.ep) fail(`part2[${k}] no .result-epithet rendered`);
    else {
      if (!v.ep.name || v.ep.name.length < 3) fail(`part2[${k}] epithet name empty`);
      if (v.ep.right > 1280 || v.ep.left < 0) fail(`part2[${k}] epithet overflows viewport (l=${v.ep.left} r=${v.ep.right})`);
    }
  }
}
results.part2.consoleErrors = consoleErrors;
if (consoleErrors.length) fail(`console errors: ${consoleErrors.length}`);

await browser.close();
srv.kill('SIGTERM');

console.log(JSON.stringify(results, null, 2));
process.exit(results.pass ? 0 : 1);
