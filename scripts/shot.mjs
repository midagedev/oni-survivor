import { chromium } from '@playwright/test';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type()+': '+m.text()); });
p.on('pageerror', e => errs.push('pageerror: ' + e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(3000);
await p.screenshot({ path: '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/shot1.png' });
// 키 입력 후 (혹시 시작 대기 상태)
await p.keyboard.press('Enter');
await p.keyboard.down('w');
await p.waitForTimeout(2500);
await p.keyboard.up('w');
await p.screenshot({ path: '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/shot2.png' });
console.log(JSON.stringify({ errs: errs.slice(0, 10), title: await p.title() }, null, 1));
await b.close();
