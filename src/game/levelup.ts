import type { Player } from './player';
import { rng } from '../core/rng';

interface Upgrade {
  title: string; // 한자 병기 헤드라인
  desc: string;
  apply(player: Player): void;
}

// Phase 1 스탯 업그레이드 풀. Phase 2에서 무기/패시브 카드로 교체.
const UPGRADES: Upgrade[] = [
  {
    title: '용맹 勇猛',
    desc: '대미지 +15%',
    apply: (p) => {
      p.stats.damageMul *= 1.15;
    },
  },
  {
    title: '속공 速攻',
    desc: '쿨다운 -8%',
    apply: (p) => {
      p.stats.cooldownMul *= 0.92;
    },
  },
  {
    title: '질주 疾走',
    desc: '이동속도 +8%',
    apply: (p) => {
      p.stats.speedMul *= 1.08;
    },
  },
  {
    title: '강건 剛健',
    desc: '최대체력 +20%',
    apply: (p) => {
      p.raiseMaxHp(1.2);
    },
  },
];

// 레벨업 3택 카드 오버레이 (먹빛 배경 + 금색 헤어라인).
export class LevelUp {
  private readonly root: HTMLDivElement;
  private readonly cardEls: HTMLDivElement[] = [];
  private choices: Upgrade[] = [];
  private onPick: ((u: Upgrade) => void) | null = null;
  private player: Player | null = null;
  active = false;

  constructor() {
    this.root = document.createElement('div');
    this.root.style.cssText = [
      'position:fixed',
      'inset:0',
      'display:none',
      'align-items:center',
      'justify-content:center',
      'gap:20px',
      'background:rgba(6,7,12,0.82)',
      'z-index:40',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');

    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:18px;';

    const title = document.createElement('div');
    title.textContent = '레벨 업 — 하나를 택하라';
    title.style.cssText =
      'color:#e8c667;font-size:26px;letter-spacing:4px;text-shadow:0 0 12px rgba(232,198,103,0.5);';
    wrap.appendChild(title);

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:18px;flex-wrap:wrap;justify-content:center;';
    for (let i = 0; i < 3; i++) {
      const card = document.createElement('div');
      card.style.cssText = [
        'width:200px',
        'min-height:150px',
        'padding:20px 16px',
        'background:linear-gradient(180deg,#12131b,#0a0b11)',
        'border:1px solid #6b5a2e',
        'border-radius:10px',
        'box-shadow:0 0 18px rgba(232,198,103,0.12),inset 0 0 0 1px rgba(232,198,103,0.15)',
        'cursor:pointer',
        'display:flex',
        'flex-direction:column',
        'align-items:center',
        'gap:14px',
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

    const hint = document.createElement('div');
    hint.textContent = '1 · 2 · 3 키로도 선택';
    hint.style.cssText = 'color:#8a8f9c;font-size:13px;letter-spacing:2px;';
    wrap.appendChild(hint);

    this.root.appendChild(wrap);
    document.body.appendChild(this.root);
  }

  open(player: Player, onPick: (u: Upgrade) => void): void {
    this.player = player;
    this.onPick = onPick;
    // 서로 다른 3개 롤
    const pool = UPGRADES.slice();
    this.choices = [];
    const pick = Math.min(3, pool.length);
    for (let i = 0; i < pick; i++) {
      const j = rng.int(pool.length);
      this.choices.push(pool.splice(j, 1)[0]);
    }
    for (let i = 0; i < this.cardEls.length; i++) {
      const el = this.cardEls[i];
      const u = this.choices[i];
      if (u) {
        el.style.display = 'flex';
        el.innerHTML =
          `<div style="color:#e8c667;font-size:20px;letter-spacing:2px;">${u.title}</div>` +
          `<div style="color:#d8dae2;font-size:15px;">${u.desc}</div>` +
          `<div style="margin-top:auto;color:#5a6070;font-size:26px;">${i + 1}</div>`;
      } else {
        el.style.display = 'none';
      }
    }
    this.root.style.display = 'flex';
    this.active = true;
  }

  pick(index: number): void {
    if (!this.active) return;
    const u = this.choices[index];
    if (!u || !this.player) return;
    u.apply(this.player);
    this.active = false;
    this.root.style.display = 'none';
    const cb = this.onPick;
    this.onPick = null;
    if (cb) cb(u);
  }
}
