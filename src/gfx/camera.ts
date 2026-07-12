import { PerspectiveCamera, Vector3 } from 'three';

// 상방 55° 내려보기, 부드러운 추적, 트라우마 기반 셰이크.
// 스프라이트 빌보드가 뷰 방향과 수직이 되도록 기울기 계산에 공유한다.
export const ELEVATION = (55 * Math.PI) / 180;
const DISTANCE = 24;
const OFF_Y = DISTANCE * Math.sin(ELEVATION);
const OFF_Z = DISTANCE * Math.cos(ELEVATION);
const LOOK_Y = 1.1; // 플레이어 몸통 높이를 바라봄
const FOLLOW_RATE = 9; // 추적 강도

// 트라우마 기반 셰이크 튜닝 (game-feel: trauma² 곡선 + 하드캡 + 선형 감쇠)
const TRAUMA_DECAY = 1.5; // 초당 트라우마 감쇠
const MAX_OFFSET = 1.1; // 최대 셰이크 위치 오프셋(월드 단위, 카메라 원거리 보정)
const MAX_ROLL = 0.08; // 최대 롤(라디안)

// 결정론적 값 노이즈 [-1,1]. 축별 시드로 독립성 유지, 누적 시간 구동.
function pseudoNoise(t: number, seed: number): number {
  const x = Math.sin(t * 12.9898 + seed * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
}

const BASE_FOV = 40;

export class CameraRig {
  readonly camera: PerspectiveCamera;
  private readonly sx = { x: 0, z: 0 }; // 스무딩된 추적 중심
  private trauma = 0;
  private time = 0;
  private inited = false;
  private fovPunch = 0; // 가산 FOV(도) — 처치 시 미세 펀치줌
  private readonly look = new Vector3();

  constructor() {
    this.camera = new PerspectiveCamera(BASE_FOV, window.innerWidth / window.innerHeight, 0.1, 300);
  }

  onResize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // 트라우마 누적 (0..1). shake 세기는 trauma^2로 비선형.
  addTrauma(amount: number): void {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  // FOV 펀치(도). 처치 순간 미세 펄스(음수 = 살짝 당김).
  punchFov(degrees: number): void {
    this.fovPunch = Math.max(-3, Math.min(3, this.fovPunch + degrees));
  }

  update(dt: number, targetX: number, targetZ: number): void {
    this.time += dt;
    if (!this.inited) {
      this.sx.x = targetX;
      this.sx.z = targetZ;
      this.inited = true;
    }
    const k = 1 - Math.exp(-FOLLOW_RATE * dt);
    this.sx.x += (targetX - this.sx.x) * k;
    this.sx.z += (targetZ - this.sx.z) * k;

    // FOV 펀치 감쇠 (~180ms 시정수)
    if (Math.abs(this.fovPunch) > 0.001) {
      this.fovPunch *= Math.exp(-dt / 0.18);
      if (Math.abs(this.fovPunch) < 0.001) this.fovPunch = 0;
      this.camera.fov = BASE_FOV + this.fovPunch;
      this.camera.updateProjectionMatrix();
    }

    // 기본 트랜스폼
    this.camera.position.set(this.sx.x, OFF_Y, this.sx.z + OFF_Z);
    this.look.set(this.sx.x, LOOK_Y, this.sx.z);
    this.camera.lookAt(this.look);

    // 기본 트랜스폼 이후 셰이크 적용 (trauma² 곡선, 누적 시간 노이즈)
    this.trauma = Math.max(0, this.trauma - TRAUMA_DECAY * dt);
    if (this.trauma > 0) {
      const shake = this.trauma * this.trauma;
      const f = this.time * 32;
      this.camera.position.x += MAX_OFFSET * shake * pseudoNoise(f, 1);
      this.camera.position.y += MAX_OFFSET * shake * pseudoNoise(f, 2);
      this.camera.rotation.z += MAX_ROLL * shake * pseudoNoise(f, 3);
    }
  }
}
