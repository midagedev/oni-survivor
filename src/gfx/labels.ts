import { Scene, Sprite, SpriteMaterial, CanvasTexture } from 'three';

interface LabelSlot {
  sprite: Sprite;
  mat: SpriteMaterial;
  tex: CanvasTexture;
  ctx: CanvasRenderingContext2D;
  text: string;
}

const CV_W = 256;
const CV_H = 64;

// 엘리트/보스 머리 위 이름표 풀 (월드 공간 스프라이트). 프레임마다 begin→place*→end.
export class Labels {
  private readonly slots: LabelSlot[] = [];
  private readonly cap: number;
  private cursor = 0;

  constructor(scene: Scene, cap = 10) {
    this.cap = cap;
    for (let i = 0; i < cap; i++) {
      const cv = document.createElement('canvas');
      cv.width = CV_W;
      cv.height = CV_H;
      const ctx = cv.getContext('2d')!;
      const tex = new CanvasTexture(cv);
      const mat = new SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
      const sprite = new Sprite(mat);
      sprite.visible = false;
      sprite.renderOrder = 11;
      sprite.scale.set(1.5 * (CV_W / CV_H), 1.5, 1);
      scene.add(sprite);
      this.slots.push({ sprite, mat, tex, ctx, text: '' });
    }
  }

  begin(): void {
    this.cursor = 0;
  }

  place(text: string, x: number, y: number, z: number): void {
    if (this.cursor >= this.cap) return;
    const s = this.slots[this.cursor++];
    if (s.text !== text) {
      s.text = text;
      const ctx = s.ctx;
      ctx.clearRect(0, 0, CV_W, CV_H);
      ctx.font = 'bold 30px "Nanum Myeongjo","Times New Roman",serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(0,0,0,0.9)';
      ctx.strokeText(text, CV_W / 2, CV_H / 2);
      ctx.fillStyle = '#f0e0a0';
      ctx.fillText(text, CV_W / 2, CV_H / 2);
      s.tex.needsUpdate = true;
    }
    s.sprite.position.set(x, y, z);
    s.sprite.visible = true;
  }

  end(): void {
    for (let i = this.cursor; i < this.cap; i++) this.slots[i].sprite.visible = false;
  }

  reset(): void {
    for (const s of this.slots) s.sprite.visible = false;
    this.cursor = 0;
  }
}
