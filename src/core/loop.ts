// requestAnimationFrame 기반 가변 dt 루프. dt는 최대 33ms로 클램프.
export class Loop {
  private running = false;
  private last = 0;
  private readonly cb: (dt: number) => void;

  constructor(cb: (dt: number) => void) {
    this.cb = cb;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this.tick);
  }

  stop(): void {
    this.running = false;
  }

  private tick = (now: number): void => {
    if (!this.running) return;
    let dt = (now - this.last) / 1000;
    this.last = now;
    if (dt > 0.033) dt = 0.033; // 탭 복귀 등 큰 프레임 폭주 방지
    if (dt < 0) dt = 0;
    this.cb(dt);
    requestAnimationFrame(this.tick);
  };
}
