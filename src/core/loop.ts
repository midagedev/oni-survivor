// requestAnimationFrame 렌더 + 고정 60Hz 시뮬레이션.
// 30fps 이하에서도 실제 시간만큼 여러 스텝을 진행해 기존 33ms 클램프의 슬로모션을 막고,
// 한 화면에는 한 번만 렌더해 저사양에서 후처리 비용이 증폭되지 않게 한다.
export class Loop {
  private running = false;
  private last = 0;
  private accumulator = 0;
  private readonly update: (dt: number) => void;
  private readonly render: (frameDt: number, alpha: number) => void;
  private readonly step: number;

  constructor(
    update: (dt: number) => void,
    render: (frameDt: number, alpha: number) => void,
    step = 1 / 60,
  ) {
    this.update = update;
    this.render = render;
    this.step = step;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    this.accumulator = 0;
    requestAnimationFrame(this.tick);
  }

  stop(): void {
    this.running = false;
  }

  private tick = (now: number): void => {
    if (!this.running) return;
    let frameDt = (now - this.last) / 1000;
    this.last = now;
    if (frameDt > 0.25) frameDt = 0.25; // 탭 복귀 폭주 방지
    if (frameDt < 0) frameDt = 0;
    this.accumulator += frameDt;
    let steps = 0;
    while (this.accumulator >= this.step && steps < 5) {
      this.update(this.step);
      this.accumulator -= this.step;
      steps++;
    }
    if (steps === 5 && this.accumulator >= this.step) this.accumulator %= this.step;
    this.render(frameDt, this.accumulator / this.step);
    requestAnimationFrame(this.tick);
  };
}
