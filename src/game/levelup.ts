// 레벨업 3택 카드 오버레이 (먹빛 배경 + 금색 헤어라인). 무기/패시브 획득·강화.
// run이 후보 카드를 만들어 전달하고, 선택/리롤을 콜백으로 돌려받는 프레젠터.
export interface CardView {
  title: string; // 이름
  hanja: string;
  desc: string; // 효과 설명
  tag: string; // 분류 (무기 신규/강화, 패시브, 진화, 보상)
  accent: string; // 강조색
}

export class LevelUp {
  private readonly root: HTMLDivElement;
  private readonly cardEls: HTMLDivElement[] = [];
  private readonly rerollBtn: HTMLDivElement;
  private onPick: ((index: number) => void) | null = null;
  private onReroll: (() => void) | null = null;
  private count = 0;
  active = false;

  constructor() {
    this.root = document.createElement('div');
    this.root.style.cssText = [
      'position:fixed',
      'inset:0',
      'display:none',
      'align-items:center',
      'justify-content:center',
      'background:rgba(6,7,12,0.86)',
      'z-index:40',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');

    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:16px;';

    const title = document.createElement('div');
    title.innerHTML = '레벨 업 — 하나를 택하라 <span style="font-size:18px;opacity:0.7;">選一</span>';
    title.style.cssText =
      'color:#e8c667;font-size:26px;letter-spacing:4px;text-shadow:0 0 12px rgba(232,198,103,0.5);';
    wrap.appendChild(title);

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:18px;flex-wrap:wrap;justify-content:center;';
    for (let i = 0; i < 3; i++) {
      const card = document.createElement('div');
      card.style.cssText = [
        'width:210px',
        'min-height:184px',
        'padding:22px 16px',
        'background:linear-gradient(180deg,#14151d,#0a0b11)',
        'border:1px solid #6b5a2e',
        'border-radius:10px',
        'box-shadow:0 0 18px rgba(232,198,103,0.12),inset 0 0 0 1px rgba(232,198,103,0.12)',
        'cursor:pointer',
        'display:flex',
        'flex-direction:column',
        'align-items:center',
        'gap:12px',
        'transition:transform 0.08s,border-color 0.12s',
      ].join(';');
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.borderColor = '#e8c667';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.borderColor = '#6b5a2e';
      });
      const idx = i;
      card.addEventListener('click', () => this.pick(idx));
      row.appendChild(card);
      this.cardEls.push(card);
    }
    wrap.appendChild(row);

    const bottom = document.createElement('div');
    bottom.style.cssText = 'display:flex;align-items:center;gap:20px;margin-top:4px;';
    const hint = document.createElement('div');
    hint.textContent = '1 · 2 · 3 키로도 선택';
    hint.style.cssText = 'color:#8a8f9c;font-size:13px;letter-spacing:2px;';
    bottom.appendChild(hint);

    this.rerollBtn = document.createElement('div');
    this.rerollBtn.style.cssText = [
      'padding:8px 16px',
      'border:1px solid #6b5a2e',
      'border-radius:6px',
      'color:#e8c667',
      'font-size:14px',
      'cursor:pointer',
      'letter-spacing:1px',
    ].join(';');
    this.rerollBtn.addEventListener('click', () => {
      if (this.onReroll) this.onReroll();
    });
    bottom.appendChild(this.rerollBtn);
    wrap.appendChild(bottom);

    this.root.appendChild(wrap);
    document.body.appendChild(this.root);
  }

  open(cards: CardView[], gold: number, canReroll: boolean, onPick: (index: number) => void, onReroll: () => void): void {
    this.onPick = onPick;
    this.onReroll = onReroll;
    this.count = cards.length;
    for (let i = 0; i < this.cardEls.length; i++) {
      const el = this.cardEls[i];
      const c = cards[i];
      if (c) {
        el.style.display = 'flex';
        el.style.borderColor = c.accent;
        el.innerHTML =
          `<div style="color:${c.accent};font-size:12px;letter-spacing:2px;opacity:0.85;">${c.tag}</div>` +
          `<div style="color:#f0e4c0;font-size:20px;letter-spacing:1px;">${c.title}</div>` +
          `<div style="color:${c.accent};font-size:15px;opacity:0.9;">${c.hanja}</div>` +
          `<div style="color:#d8dae2;font-size:14px;line-height:1.4;">${c.desc}</div>` +
          `<div style="margin-top:auto;color:#5a6070;font-size:24px;">${i + 1}</div>`;
      } else {
        el.style.display = 'none';
      }
    }
    this.rerollBtn.textContent = `리롤 (50G) · 보유 ${gold}G`;
    this.rerollBtn.style.opacity = canReroll ? '1' : '0.4';
    this.rerollBtn.style.pointerEvents = canReroll ? 'auto' : 'none';
    this.root.style.display = 'flex';
    this.active = true;
  }

  pick(index: number): void {
    if (!this.active || index >= this.count) return;
    this.active = false;
    this.root.style.display = 'none';
    const cb = this.onPick;
    this.onPick = null;
    this.onReroll = null;
    if (cb) cb(index);
  }

  close(): void {
    this.active = false;
    this.root.style.display = 'none';
  }
}
