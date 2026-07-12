export interface HudState {
  time: number;
  kills: number;
  level: number;
  xp: number;
  nextXp: number;
  hp: number;
  maxHp: number;
  musouPct: number; // 0..100
  musouReady: boolean;
  combo: number;
  bossActive: boolean;
  bossName: string;
  bossHanja: string;
  bossFrac: number;
}

// 전투 HUD: 타이머/킬/레벨/XP/HP + 무쌍 게이지 + 콤보 + 보스 HP 바 + 배너.
export class Hud {
  private readonly timerEl: HTMLDivElement;
  private readonly killsEl: HTMLDivElement;
  private readonly levelEl: HTMLDivElement;
  private readonly xpFill: HTMLDivElement;
  private readonly hpFill: HTMLDivElement;
  private readonly hpText: HTMLDivElement;
  private readonly musouWrap: HTMLDivElement;
  private readonly musouFill: HTMLDivElement;
  private readonly musouHint: HTMLDivElement;
  private readonly comboEl: HTMLDivElement;
  private readonly bossWrap: HTMLDivElement;
  private readonly bossFill: HTMLDivElement;
  private readonly bossName: HTMLDivElement;
  private readonly bannerLayer: HTMLDivElement;
  private lastCombo = 0;
  private wasReady = false;

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

    const xpBar = document.createElement('div');
    xpBar.style.cssText =
      'width:min(70vw,520px);height:7px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.3);border-radius:4px;overflow:hidden;';
    this.xpFill = document.createElement('div');
    this.xpFill.style.cssText =
      'height:100%;width:0%;background:linear-gradient(90deg,#5aa9ff,#a9d4ff);box-shadow:0 0 8px rgba(120,180,255,0.7);';
    xpBar.appendChild(this.xpFill);
    top.appendChild(xpBar);

    // 보스 HP 바
    this.bossWrap = document.createElement('div');
    this.bossWrap.style.cssText =
      'display:none;flex-direction:column;align-items:center;gap:3px;margin-top:8px;';
    this.bossName = document.createElement('div');
    this.bossName.style.cssText =
      'color:#e85c4a;font-size:18px;letter-spacing:3px;text-shadow:0 0 10px rgba(232,92,74,0.6);';
    this.bossWrap.appendChild(this.bossName);
    const bossBar = document.createElement('div');
    bossBar.style.cssText =
      'width:min(80vw,640px);height:14px;background:rgba(20,10,10,0.85);border:1px solid rgba(232,92,74,0.5);border-radius:4px;overflow:hidden;';
    this.bossFill = document.createElement('div');
    this.bossFill.style.cssText =
      'height:100%;width:100%;background:linear-gradient(90deg,#8a1f16,#e85c4a,#e8c667);box-shadow:0 0 10px rgba(232,92,74,0.6);transition:width 0.1s;';
    bossBar.appendChild(this.bossFill);
    this.bossWrap.appendChild(bossBar);
    top.appendChild(this.bossWrap);

    document.body.appendChild(top);

    // 하단: 무쌍 게이지 + HP 바
    const bottom = document.createElement('div');
    bottom.style.cssText = [
      'position:fixed',
      'bottom:22px',
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

    // 무쌍 게이지
    this.musouWrap = document.createElement('div');
    this.musouWrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:2px;';
    this.musouHint = document.createElement('div');
    this.musouHint.style.cssText =
      'color:#e8c667;font-size:12px;letter-spacing:2px;opacity:0;transition:opacity 0.2s;';
    this.musouHint.innerHTML = '무쌍 無雙 — Space';
    this.musouWrap.appendChild(this.musouHint);
    const musouBar = document.createElement('div');
    musouBar.style.cssText =
      'width:min(46vw,320px);height:9px;background:rgba(28,22,10,0.85);border:1px solid rgba(232,198,103,0.4);border-radius:5px;overflow:hidden;';
    this.musouFill = document.createElement('div');
    this.musouFill.style.cssText =
      'height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667,#fff2c0);box-shadow:0 0 8px rgba(232,198,103,0.7);';
    musouBar.appendChild(this.musouFill);
    this.musouWrap.appendChild(musouBar);
    bottom.appendChild(this.musouWrap);

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

    // 콤보 카운터 (우측)
    this.comboEl = document.createElement('div');
    this.comboEl.style.cssText = [
      'position:fixed',
      'right:28px',
      'top:38%',
      'display:none',
      'flex-direction:column',
      'align-items:center',
      'pointer-events:none',
      'z-index:20',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
      'text-shadow:0 0 12px rgba(232,198,103,0.5)',
    ].join(';');
    document.body.appendChild(this.comboEl);

    // 배너 레이어 (마일스톤/경고/무쌍 한자)
    this.bannerLayer = document.createElement('div');
    this.bannerLayer.style.cssText = [
      'position:fixed',
      'inset:0',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'pointer-events:none',
      'z-index:32',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');
    document.body.appendChild(this.bannerLayer);
  }

  update(s: HudState): void {
    const mm = Math.floor(s.time / 60);
    const ss = Math.floor(s.time % 60);
    this.timerEl.textContent = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    this.killsEl.textContent = `처치 ${s.kills}`;
    this.levelEl.textContent = `Lv ${s.level}`;
    this.xpFill.style.width = `${Math.min(100, (s.xp / s.nextXp) * 100)}%`;
    this.hpFill.style.width = `${Math.max(0, (s.hp / s.maxHp) * 100)}%`;
    this.hpText.textContent = `${Math.ceil(s.hp)} / ${Math.round(s.maxHp)}`;

    // 무쌍
    this.musouFill.style.width = `${Math.min(100, s.musouPct)}%`;
    if (s.musouReady && !this.wasReady) {
      this.musouHint.style.opacity = '1';
      this.musouWrap.animate(
        [{ filter: 'brightness(1)' }, { filter: 'brightness(1.8)' }, { filter: 'brightness(1)' }],
        { duration: 900, iterations: Infinity },
      );
    } else if (!s.musouReady && this.wasReady) {
      this.musouHint.style.opacity = '0';
      this.musouWrap.getAnimations().forEach((a) => a.cancel());
    }
    this.wasReady = s.musouReady;

    // 콤보
    if (s.combo >= 3) {
      this.comboEl.style.display = 'flex';
      this.comboEl.innerHTML =
        `<div style="color:#f0e4c0;font-size:52px;line-height:1;">${s.combo}</div>` +
        `<div style="color:#e8c667;font-size:16px;letter-spacing:2px;">連 킬</div>`;
      if (s.combo !== this.lastCombo) this.punchCombo();
    } else {
      this.comboEl.style.display = 'none';
    }
    this.lastCombo = s.combo;

    // 보스 바
    if (s.bossActive) {
      this.bossWrap.style.display = 'flex';
      this.bossName.textContent = `${s.bossName} ${s.bossHanja}`;
      this.bossFill.style.width = `${Math.max(0, s.bossFrac * 100)}%`;
    } else {
      this.bossWrap.style.display = 'none';
    }
  }

  punchLevel(): void {
    this.levelEl.animate(
      [
        { transform: 'scale(1.35)', color: '#e8c667' },
        { transform: 'scale(1)', color: '#c9cdda' },
      ],
      { duration: 260, easing: 'ease-out' },
    );
  }

  punchCombo(): void {
    this.comboEl.animate(
      [{ transform: 'scale(1.3)' }, { transform: 'scale(1)' }],
      { duration: 140, easing: 'ease-out' },
    );
  }

  // 중앙 배너 (마일스톤/경고). size px, color, 지속 ms.
  banner(text: string, color: string, sizePx: number, durationMs = 1400): void {
    const el = document.createElement('div');
    el.textContent = text;
    el.style.cssText = [
      'position:absolute',
      `color:${color}`,
      `font-size:${sizePx}px`,
      'letter-spacing:6px',
      `text-shadow:0 0 24px ${color}`,
      'white-space:nowrap',
    ].join(';');
    this.bannerLayer.appendChild(el);
    const anim = el.animate(
      [
        { transform: 'scale(0.6)', opacity: 0 },
        { transform: 'scale(1.1)', opacity: 1, offset: 0.2 },
        { transform: 'scale(1)', opacity: 1, offset: 0.75 },
        { transform: 'scale(1.05)', opacity: 0 },
      ],
      { duration: durationMs, easing: 'ease-out' },
    );
    anim.onfinish = () => el.remove();
  }
}
