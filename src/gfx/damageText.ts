import { Scene, Sprite, SpriteMaterial, CanvasTexture } from 'three';

interface TextSlot {
  sprite: Sprite;
  mat: SpriteMaterial;
  tex: CanvasTexture;
  ctx: CanvasRenderingContext2D;
  life: number;
  dur: number;
  active: boolean;
}

const CV_W = 128;
const CV_H = 72;

// 캔버스 텍스트 스프라이트 풀. 떠오르며 페이드. 크리티컬은 크고 노랗게.
export class DamageText {
  private readonly slots: TextSlot[] = [];
  private readonly cap: number;
  private cursor = 0;

  constructor(scene: Scene, cap = 56) {
    this.cap = cap;
    for (let i = 0; i < cap; i++) {
      const cv = document.createElement('canvas');
      cv.width = CV_W;
      cv.height = CV_H;
      const ctx = cv.getContext('2d')!;
      const tex = new CanvasTexture(cv);
      const mat = new SpriteMaterial({
        map: tex,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      });
      const sprite = new Sprite(mat);
      sprite.visible = false;
      sprite.renderOrder = 10;
      scene.add(sprite);
      this.slots.push({ sprite, mat, tex, ctx, life: 0, dur: 0.75, active: false });
    }
  }

  spawn(value: number, x: number, y: number, z: number, crit = false): void {
    const s = this.slots[this.cursor];
    this.cursor = (this.cursor + 1) % this.cap;
    const ctx = s.ctx;
    ctx.clearRect(0, 0, CV_W, CV_H);
    const text = Math.max(1, Math.round(value)).toString();
    ctx.font = crit ? 'bold 46px "Times New Roman", serif' : 'bold 34px "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(0,0,0,0.85)';
    ctx.strokeText(text, CV_W / 2, CV_H / 2);
    ctx.fillStyle = crit ? '#ffe14d' : '#ffffff';
    ctx.fillText(text, CV_W / 2, CV_H / 2);
    s.tex.needsUpdate = true;

    const scale = crit ? 1.9 : 1.25;
    s.sprite.scale.set(scale * (CV_W / CV_H), scale, 1);
    s.sprite.position.set(x + (Math.random() * 0.5 - 0.25), y, z);
    s.sprite.visible = true;
    s.life = crit ? 0.95 : 0.75;
    s.dur = s.life;
    s.mat.opacity = 1;
    s.active = true;
  }

  update(dt: number): void {
    for (let i = 0; i < this.cap; i++) {
      const s = this.slots[i];
      if (!s.active) continue;
      s.life -= dt;
      if (s.life <= 0) {
        s.active = false;
        s.sprite.visible = false;
        continue;
      }
      const t = 1 - s.life / s.dur;
      s.sprite.position.y += dt * 1.8;
      s.mat.opacity = 1 - t * t;
    }
  }
}
