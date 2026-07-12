// 최소 HUD: 타이머 / 킬 / 레벨 / XP바 / HP바 (DOM 오버레이)
export class Hud {
  private readonly timerEl: HTMLDivElement;
  private readonly killsEl: HTMLDivElement;
  private readonly levelEl: HTMLDivElement;
  private readonly xpFill: HTMLDivElement;
  private readonly hpFill: HTMLDivElement;
  private readonly hpText: HTMLDivElement;

  constructor() {
    const top = document.createElement('div');
    top.style.cssText = [
      'position:fixed',
      'top:10px',
      'left:0',
      'right:0',
      'display:flex',
      'flex-direction:column',
      'align-items:center',
      'gap:6px',
      'pointer-events:none',
      'z-index:20',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');

    this.timerEl = document.createElement('div');
    this.timerEl.style.cssText =
      'color:#f0e4c0;font-size:34px;letter-spacing:3px;text-shadow:0 2px 8px rgba(0,0,0,0.8);';
    this.timerEl.textContent = '00:00';
    top.appendChild(this.timerEl);

    const stats = document.createElement('div');
    stats.style.cssText = 'display:flex;gap:22px;color:#c9cdda;font-size:15px;letter-spacing:1px;';
    this.killsEl = document.createElement('div');
    this.killsEl.textContent = '처치 0';
    this.levelEl = document.createElement('div');
    this.levelEl.textContent = 'Lv 1';
    stats.appendChild(this.levelEl);
    stats.appendChild(this.killsEl);
    top.appendChild(stats);

    // XP 바
    const xpBar = document.createElement('div');
    xpBar.style.cssText =
      'width:min(70vw,520px);height:7px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.3);border-radius:4px;overflow:hidden;';
    this.xpFill = document.createElement('div');
    this.xpFill.style.cssText =
      'height:100%;width:0%;background:linear-gradient(90deg,#5aa9ff,#a9d4ff);box-shadow:0 0 8px rgba(120,180,255,0.7);';
    xpBar.appendChild(this.xpFill);
    top.appendChild(xpBar);

    document.body.appendChild(top);

    // HP 바 (하단 중앙)
    const bottom = document.createElement('div');
    bottom.style.cssText = [
      'position:fixed',
      'bottom:22px',
      'left:0',
      'right:0',
      'display:flex',
      'flex-direction:column',
      'align-items:center',
      'gap:4px',
      'pointer-events:none',
      'z-index:20',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');
    const hpBar = document.createElement('div');
    hpBar.style.cssText =
      'width:min(60vw,420px);height:16px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.35);border-radius:5px;overflow:hidden;position:relative;';
    this.hpFill = document.createElement('div');
    this.hpFill.style.cssText =
      'height:100%;width:100%;background:linear-gradient(90deg,#c0362b,#e85c4a);box-shadow:0 0 8px rgba(232,92,74,0.6);transition:width 0.12s;';
    hpBar.appendChild(this.hpFill);
    this.hpText = document.createElement('div');
    this.hpText.style.cssText =
      'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,0.9);';
    this.hpText.textContent = '100 / 100';
    hpBar.appendChild(this.hpText);
    bottom.appendChild(hpBar);
    document.body.appendChild(bottom);
  }

  update(
    timeSec: number,
    kills: number,
    level: number,
    xp: number,
    nextXp: number,
    hp: number,
    maxHp: number,
  ): void {
    const mm = Math.floor(timeSec / 60);
    const ss = Math.floor(timeSec % 60);
    this.timerEl.textContent = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    this.killsEl.textContent = `처치 ${kills}`;
    this.levelEl.textContent = `Lv ${level}`;
    this.xpFill.style.width = `${Math.min(100, (xp / nextXp) * 100)}%`;
    this.hpFill.style.width = `${Math.max(0, (hp / maxHp) * 100)}%`;
    this.hpText.textContent = `${Math.ceil(hp)} / ${Math.round(maxHp)}`;
  }

  // 레벨업 시 레벨 표시 펀치 (WAAPI)
  punchLevel(): void {
    this.levelEl.animate(
      [
        { transform: 'scale(1.35)', color: '#e8c667' },
        { transform: 'scale(1)', color: '#c9cdda' },
      ],
      { duration: 260, easing: 'ease-out' },
    );
  }
}
