import type { CameraRig } from './camera';

// 시네마틱 카메라 연출 오케스트레이터 (#14).
// "차분한 기본 + 순간의 과감함". run이 이벤트 훅을 한 줄씩 호출하면 여기서 타임라인을
// 굴려 CameraRig에 시네마틱 포즈(궤도/고도/줌/프레이밍 오프셋)와 임펄스를 밀어넣는다.
//
// 빌보드 제약: 스프라이트는 -ELEVATION 고정 기울기라 궤도(azimuth)를 크게 돌리면 뒤틀린다.
//  → 무쌍 궤도 스윕은 소폭(≤~23°)·짧게, 보스 등장은 궤도 대신 프레이밍 오프셋(트럭)으로,
//    보스 처치만 예외적으로 큰 궤도(짧은 드라마 비트)를 준다.
//
// 모든 타이밍은 실제(real) dt 기반 — 히트스탑/무쌍 슬로우 중에도 연출이 살아있어야 한다.

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const clamp01 = (t: number): number => (t < 0 ? 0 : t > 1 ? 1 : t);
const smoothstep = (a: number, b: number, x: number): number => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

// 무쌍 지속 포즈 상수
const MUSOU_DASH_TIME = 0.4; // 대시-인 시간
const MUSOU_DASH_ZOOM = -0.15; // 대시-인 최대 줌인
const MUSOU_HOLD_ZOOM = -0.08; // 지속 줌인
const MUSOU_LOW_ELEV = -0.11; // 낮은 앵글 고도 오프셋(rad, ≈-6.3°)
const MUSOU_SWEEP_AZI = 0.4; // 궤도 스윕 최대각(rad, ≈23°)
const MUSOU_SWEEP_TIME = 0.6; // 스윕 도달 시간
const MUSOU_RETURN_TIME = 1.1; // 스윕 복귀 완료 시각(발동 후)
const MUSOU_DRIFT_AMP = 0.07; // 지속 드리프트 진폭(rad, ≈4°)
const MUSOU_DRIFT_W = 0.9; // 드리프트 각속도 → 피크 ≈3.6°/s
const MUSOU_END_TIME = 0.45; // 종료 시 포즈 복귀(윈드다운) 시간

// 킬캠 상수
const KILLCAM_DUR = 0.7;
const KILLCAM_ZOOM = -0.13; // 최대 줌인 -13% (오너: 드물게, 대신 임팩트 있게)
const KILLCAM_COOLDOWN = 32; // 희소성 유지 — 런당 손에 꼽는 모먼트

// 보스 등장 팬(프레이밍 오프셋 트럭) 상수
const BOSS_PAN_DUR = 1.0;
const BOSS_PAN_REACH = 9; // 보스 방향으로 최대 평행이동(월드)
const BOSS_PAN_ZOOM = 0.1; // 팬 중 줌아웃(+10%, 상황 파악)

// 보스 처치 상수 (예외적 대형 궤도 — 짧은 드라마 비트)
const BOSS_DEATH_DUR = 1.2;
const BOSS_DEATH_AZI = 0.62; // ≈35° 궤도
const BOSS_DEATH_ZOOM = -0.12; // 줌인
const BOSS_DEATH_REACH = 6; // 처치 지점으로 프레이밍 오프셋

// 동료 합류 팬 (보스 팬의 경량판 — #16.1: 짧고 작게, 우선순위 최하)
const ALLY_PAN_DUR = 0.7;
const ALLY_PAN_REACH = 4; // 합류 방향 평행이동(월드) — 보스 9의 경량판
const ALLY_PAN_ZOOM = 0.05; // 팬 중 미세 줌아웃(+5%) — 보스 팬(+10%)의 절반

export class Cinematics {
  private readonly rig: CameraRig;
  private readonly onReplay: (() => void) | null;

  // 무쌍
  private musouActive = false;
  private musouT = 0;
  private musouEndT = -1; // 윈드다운 경과(-1=비활성)
  private endAzi = 0; // 윈드다운 시작 포즈 스냅샷
  private endElev = 0;
  private endZoom = 0;

  // 킬캠
  private killcamT = -1;
  private killcamCooldown = 0;

  // 보스 등장 팬
  private panT = -1;
  private panDirX = 0;
  private panDirZ = 0;

  // 보스 처치
  private deathT = -1;
  private deathDirX = 0;
  private deathDirZ = 0;

  // 동료 합류 팬 (경량, 우선순위 최하)
  private allyT = -1;
  private allyDirX = 0;
  private allyDirZ = 0;

  // 킬캠 비네트 DOM (카메라 측 연출 — 렌더러/run 배선 불필요)
  private readonly vignette: HTMLDivElement;

  // PiP 리플레이 트리거 (main이 소비 → pipeline.playReplay). onReplay 콜백이 없을 때만 사용.
  private replayPending = false;

  constructor(rig: CameraRig, onReplay?: () => void) {
    this.rig = rig;
    this.onReplay = onReplay ?? null;
    this.vignette = document.createElement('div');
    this.vignette.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'opacity:0',
      'z-index:29',
      'background:radial-gradient(ellipse at center, rgba(0,0,0,0) 34%, rgba(6,4,10,0.9) 100%)',
    ].join(';');
    document.body.appendChild(this.vignette);
  }

  // === 공개 이벤트 훅 (run에서 한 줄씩 호출) ===

  // 무쌍 발동: 대시-인 줌 + 궤도 스윕 시작, 지속 낮은 앵글 + 드리프트 진입.
  onMusouStart(): void {
    this.musouActive = true;
    this.musouT = 0;
    this.musouEndT = -1;
    this.killcamT = -1; // 무쌍 중 킬캠 금지 → 진행 중 킬캠 즉시 취소
    this.rig.addTrauma(0.35);
    this.rig.punchFov(-2.5); // 순간 당김
  }

  // 무쌍 종료: 강한 펀치줌 + 셰이크, 지속 포즈 윈드다운.
  onMusouEnd(): void {
    if (!this.musouActive) return;
    const p = this.musouPose(this.musouT);
    this.endAzi = p.azi;
    this.endElev = p.elev;
    this.endZoom = p.zoom;
    this.musouActive = false;
    this.musouEndT = 0;
    this.rig.cinematic(-0.11); // 펀치줌(줌인 킥, 지수 감쇠)
    this.rig.punchFov(4.5);
    this.rig.addTrauma(0.6);
  }

  // 대량 퇴치 킬캠: 단일 타격 대량 처치/콤보 이정표. 쿨다운 + 무쌍 중 금지.
  onMassKill(_n: number): void {
    if (this.musouActive || this.musouEndT >= 0) return;
    if (this.killcamCooldown > 0 || this.killcamT >= 0) return;
    this.killcamT = 0;
    this.killcamCooldown = KILLCAM_COOLDOWN;
    this.rig.addTrauma(0.25);
    // 비네트 펄스(빠르게 조였다 풀림)
    this.vignette.animate(
      [{ opacity: 0 }, { opacity: 0.95, offset: 0.22 }, { opacity: 0.6, offset: 0.55 }, { opacity: 0 }],
      { duration: KILLCAM_DUR * 1000, easing: 'ease-out' },
    );
  }

  // 보스 등장: 보스 방향으로 프레이밍 팬 + 줌아웃 후 복귀 (스킵 가능).
  onBossSpawn(dirX: number, dirZ: number): void {
    const l = Math.hypot(dirX, dirZ) || 1;
    this.panDirX = dirX / l;
    this.panDirZ = dirZ / l;
    this.panT = 0;
  }

  // 보스 처치: 확정 대형 궤도 + 줌인 + PiP 리플레이 트리거.
  onBossDeath(dirX: number, dirZ: number): void {
    const l = Math.hypot(dirX, dirZ) || 1;
    this.deathDirX = dirX / l;
    this.deathDirZ = dirZ / l;
    this.deathT = 0;
    this.panT = -1; // 등장 팬 잔여 취소
    if (this.onReplay) this.onReplay();
    else this.replayPending = true;
  }

  // 동료 합류(#16.1): 합류 방향으로 짧은 경량 팬 + 미세 줌(0.7s). 전투 수치 무변경.
  // 우선순위 최하 — 무쌍/보스/킬캠 시네마틱이 진행 중이면 발동하지 않고 양보한다.
  // 비차단: 플레이(이동/공격)는 그대로 유지되고 프레이밍만 살짝 트럭 후 복귀하므로 별도 스킵 불필요.
  onAllyJoin(dirX: number, dirZ: number): void {
    if (this.musouActive || this.musouEndT >= 0 || this.panT >= 0 || this.deathT >= 0 || this.killcamT >= 0) return;
    const l = Math.hypot(dirX, dirZ) || 1;
    this.allyDirX = dirX / l;
    this.allyDirZ = dirZ / l;
    this.allyT = 0;
  }

  // 대시: 짧고 강한 줌인 킥 (run의 대시 훅에서 호출 — 선택).
  onDash(): void {
    this.rig.cinematic(-0.1);
    this.rig.punchFov(2);
  }

  // 보스 등장 팬 진행 중이면 스킵 대기(아무 입력). run이 입력 감지 시 skip() 호출.
  get wantsSkipInput(): boolean {
    return this.panT >= 0;
  }

  skip(): void {
    if (this.panT >= 0) this.panT = -1;
    if (this.allyT >= 0) this.allyT = -1;
  }

  // main이 매 프레임 소비: true면 pipeline.playReplay() 호출. (onReplay 콜백 미주입 시 경로)
  consumeReplayTrigger(): boolean {
    if (!this.replayPending) return false;
    this.replayPending = false;
    return true;
  }

  reset(): void {
    this.musouActive = false;
    this.musouEndT = -1;
    this.killcamT = -1;
    this.killcamCooldown = 0;
    this.panT = -1;
    this.deathT = -1;
    this.allyT = -1;
    this.replayPending = false;
    this.rig.setCinematicPose(0, 0, 0, 0, 0);
  }

  // === 프레임 갱신 (rig.update 직전에 호출) ===
  update(dt: number): void {
    if (this.killcamCooldown > 0) this.killcamCooldown -= dt;

    let azi = 0;
    let elev = 0;
    let zoom = 0;
    let offX = 0;
    let offZ = 0;

    // --- 무쌍 지속/윈드다운 ---
    if (this.musouActive) {
      this.musouT += dt;
      const p = this.musouPose(this.musouT);
      azi += p.azi;
      elev += p.elev;
      zoom += p.zoom;
    } else if (this.musouEndT >= 0) {
      this.musouEndT += dt;
      const k = easeInOutCubic(clamp01(this.musouEndT / MUSOU_END_TIME));
      azi += this.endAzi * (1 - k);
      elev += this.endElev * (1 - k);
      zoom += this.endZoom * (1 - k);
      if (this.musouEndT >= MUSOU_END_TIME) this.musouEndT = -1;
    }

    // --- 킬캠 줌인 펄스 (궤도 없음 → 가독성 유지) ---
    if (this.killcamT >= 0) {
      this.killcamT += dt;
      const t = this.killcamT / KILLCAM_DUR;
      const env = smoothstep(0, 0.18, t) * (1 - smoothstep(0.55, 1, t));
      zoom += KILLCAM_ZOOM * env;
      if (this.killcamT >= KILLCAM_DUR) this.killcamT = -1;
    }

    // --- 보스 등장 팬 (프레이밍 오프셋 트럭 + 줌아웃) ---
    if (this.panT >= 0) {
      this.panT += dt;
      const t = this.panT / BOSS_PAN_DUR;
      // 0→0.5 도달(easeOut), 0.5→1 복귀(easeInOut) 하는 산 모양 엔벨로프
      const env = t < 0.5 ? easeOutCubic(t / 0.5) : 1 - easeInOutCubic((t - 0.5) / 0.5);
      offX += this.panDirX * BOSS_PAN_REACH * env;
      offZ += this.panDirZ * BOSS_PAN_REACH * env;
      zoom += BOSS_PAN_ZOOM * env;
      if (this.panT >= BOSS_PAN_DUR) this.panT = -1;
    }

    // --- 보스 처치 (대형 궤도 + 줌인 + 처치지점 프레이밍) ---
    if (this.deathT >= 0) {
      this.deathT += dt;
      const t = this.deathT / BOSS_DEATH_DUR;
      const env = t < 0.45 ? easeOutCubic(t / 0.45) : 1 - easeInOutCubic((t - 0.45) / 0.55);
      azi += BOSS_DEATH_AZI * env;
      zoom += BOSS_DEATH_ZOOM * env;
      offX += this.deathDirX * BOSS_DEATH_REACH * env;
      offZ += this.deathDirZ * BOSS_DEATH_REACH * env;
      if (this.deathT >= BOSS_DEATH_DUR) this.deathT = -1;
    }

    // --- 동료 합류 팬 (경량 트럭 + 미세 줌아웃, 산 모양 엔벨로프) ---
    // 우선순위 최하: 무쌍/보스/킬캠 시네마틱이 도중에 시작되면 즉시 양보(취소).
    if (this.allyT >= 0) {
      if (this.musouActive || this.musouEndT >= 0 || this.panT >= 0 || this.deathT >= 0 || this.killcamT >= 0) {
        this.allyT = -1;
      } else {
        this.allyT += dt;
        const t = this.allyT / ALLY_PAN_DUR;
        const env = t < 0.5 ? easeOutCubic(t / 0.5) : 1 - easeInOutCubic((t - 0.5) / 0.5);
        offX += this.allyDirX * ALLY_PAN_REACH * env;
        offZ += this.allyDirZ * ALLY_PAN_REACH * env;
        zoom += ALLY_PAN_ZOOM * env;
        if (this.allyT >= ALLY_PAN_DUR) this.allyT = -1;
      }
    }

    this.rig.setCinematicPose(azi, elev, zoom, offX, offZ);
  }

  // 무쌍 지속 포즈: 발동 후 경과 t(초)에서 (궤도/고도/줌).
  private musouPose(t: number): { azi: number; elev: number; zoom: number } {
    // 줌: 대시-인(0..0.4) → 완화(0.4..0.9) → 지속
    let zoom: number;
    if (t < MUSOU_DASH_TIME) {
      zoom = MUSOU_DASH_ZOOM * easeOutCubic(t / MUSOU_DASH_TIME);
    } else if (t < 0.9) {
      const k = easeInOutCubic((t - MUSOU_DASH_TIME) / (0.9 - MUSOU_DASH_TIME));
      zoom = MUSOU_DASH_ZOOM + (MUSOU_HOLD_ZOOM - MUSOU_DASH_ZOOM) * k;
    } else {
      zoom = MUSOU_HOLD_ZOOM;
    }
    // 고도: 낮은 앵글로 0.5s 하강 후 유지
    const elev = MUSOU_LOW_ELEV * easeOutCubic(clamp01(t / 0.5));
    // 궤도: 스윕 아웃(0..0.6) → 복귀(0.6..1.1) → 지속 드리프트
    let azi: number;
    if (t < MUSOU_SWEEP_TIME) {
      azi = MUSOU_SWEEP_AZI * easeOutCubic(t / MUSOU_SWEEP_TIME);
    } else if (t < MUSOU_RETURN_TIME) {
      const k = easeInOutCubic((t - MUSOU_SWEEP_TIME) / (MUSOU_RETURN_TIME - MUSOU_SWEEP_TIME));
      azi = MUSOU_SWEEP_AZI * (1 - k);
    } else {
      azi = MUSOU_DRIFT_AMP * Math.sin((t - MUSOU_RETURN_TIME) * MUSOU_DRIFT_W);
    }
    return { azi, elev, zoom };
  }
}
