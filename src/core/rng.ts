// 경량 결정론적 난수 (mulberry32). 프레임당 할당 없이 재사용.
export class Rng {
  private s: number;

  constructor(seed = (Math.random() * 0xffffffff) >>> 0) {
    this.s = seed >>> 0;
  }

  // 0..1
  next(): number {
    this.s = (this.s + 0x6d2b79f5) | 0;
    let t = Math.imul(this.s ^ (this.s >>> 15), 1 | this.s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  // min..max
  range(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  // 0..n-1 정수
  int(n: number): number {
    return (this.next() * n) | 0;
  }
}

// 전역 공용 인스턴스 (연출용 랜덤)
export const rng = new Rng();
