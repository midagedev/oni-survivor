// 동적 광원 필드. 씬에 실제 Three.js 광원이 없으므로(전부 언릿),
// 폭발/낙뢰/화염/무쌍이 남기는 점광원을 유니폼 배열로 셰이더에 주입해
// 지면·적·플레이어가 "실제로 빛을 받는" 것처럼 색을 가산한다.
//
// 유니폼 홀더 객체({value})를 여러 머티리얼이 참조로 공유한다 → update 한 번으로 전부 갱신.
// 매 프레임 살아있는 광원을 배열 앞쪽으로 압축하고 uLightCount만 갱신(셰이더 루프 조기 종료).

import type { TechniqueTheme } from './techniqueSprites';

export const MAX_LIGHTS = 12;

// 표면 셰이더(스프라이트/지면 onBeforeCompile)가 공유하는 GLSL.
export const LIGHT_PARS_FRAG = /* glsl */ `
  #define MAX_LIGHTS ${MAX_LIGHTS}
  uniform vec3 uLightPos[MAX_LIGHTS];
  uniform vec3 uLightColor[MAX_LIGHTS];
  uniform float uLightRadius[MAX_LIGHTS];
  uniform int uLightCount;
  varying vec2 vWorldXZ;
  vec3 sampleLights() {
    vec3 s = vec3(0.0);
    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= uLightCount) break;
      vec2 d = vWorldXZ - uLightPos[i].xz;
      float dist = length(d);
      float a = clamp(1.0 - dist / uLightRadius[i], 0.0, 1.0);
      s += uLightColor[i] * a * a;
    }
    // 겹친 폭발/무쌍 광원이 무한 가산되어 화면이 하얗게 타지 않도록 소프트 상한.
    return min(s, vec3(1.25));
  }
`;

export const LIGHT_PARS_VERT = /* glsl */ `varying vec2 vWorldXZ;`;

export interface LightUniforms {
  uLightPos: { value: Float32Array };
  uLightColor: { value: Float32Array };
  uLightRadius: { value: Float32Array };
  uLightCount: { value: number };
}

export type TechniqueLightKind = 'moving' | 'impact' | 'ultimate';

const KIND_MOVING = 0;
const KIND_IMPACT = 1;
const KIND_ULTIMATE = 2;
const MAX_TECHNIQUE_CANDIDATES = 64;

const TECHNIQUE_LIGHT_COLOR: Record<TechniqueTheme, readonly [number, number, number, number]> = {
  // RGB + relative energy. Water/mist intentionally stay soft so they tint instead of bleaching.
  water: [0.2, 0.8, 1.65, 0.34],
  flame: [1.8, 0.45, 0.08, 0.82],
  sun: [1.9, 0.72, 0.1, 0.9],
  thunder: [1.8, 1.45, 0.22, 0.92],
  love: [1.45, 0.35, 0.9, 0.46],
  butterfly: [0.9, 0.38, 1.45, 0.42],
  flower: [1.35, 0.4, 0.68, 0.4],
  beast: [0.42, 0.74, 0.92, 0.34],
  blood: [1.7, 0.18, 0.48, 0.76],
  mist: [0.46, 0.78, 0.9, 0.22],
  wind: [0.22, 0.9, 0.4, 0.34],
  sound: [1.45, 0.78, 0.18, 0.66],
  stone: [0.72, 0.5, 0.24, 0.36],
};

function kindCode(kind: TechniqueLightKind): number {
  if (kind === 'moving') return KIND_MOVING;
  if (kind === 'impact') return KIND_IMPACT;
  return KIND_ULTIMATE;
}

export class LightField {
  private readonly px = new Float32Array(MAX_LIGHTS);
  private readonly py = new Float32Array(MAX_LIGHTS);
  private readonly pz = new Float32Array(MAX_LIGHTS);
  private readonly cr = new Float32Array(MAX_LIGHTS);
  private readonly cg = new Float32Array(MAX_LIGHTS);
  private readonly cb = new Float32Array(MAX_LIGHTS);
  private readonly rad = new Float32Array(MAX_LIGHTS);
  private readonly life = new Float32Array(MAX_LIGHTS);
  private readonly maxLife = new Float32Array(MAX_LIGHTS);
  private readonly prio = new Uint8Array(MAX_LIGHTS); // 무쌍 광원(전투 광원에 밀려나지 않음)
  private readonly kind = new Uint8Array(MAX_LIGHTS);

  // Projectile/technique lights are frame candidates, not Three.js PointLights and not persistent
  // allocations. The best few are selected into the same shader uniforms as transient impacts.
  private readonly tx = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly ty = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tz = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tr = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tg = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tb = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly trad = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tintensity = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tpriority = new Float32Array(MAX_TECHNIQUE_CANDIDATES);
  private readonly tkind = new Uint8Array(MAX_TECHNIQUE_CANDIDATES);
  private techniqueCount = 0;
  private techniqueFrameOpen = false;
  private focusX = 0;
  private focusZ = 0;

  // Fixed scratch selection. Each kind owns a non-overlapping range, enforcing its strict budget.
  private readonly selectedUsed = new Uint8Array(MAX_LIGHTS);
  private readonly selectedScore = new Float32Array(MAX_LIGHTS);
  private readonly selectedX = new Float32Array(MAX_LIGHTS);
  private readonly selectedY = new Float32Array(MAX_LIGHTS);
  private readonly selectedZ = new Float32Array(MAX_LIGHTS);
  private readonly selectedR = new Float32Array(MAX_LIGHTS);
  private readonly selectedG = new Float32Array(MAX_LIGHTS);
  private readonly selectedB = new Float32Array(MAX_LIGHTS);
  private readonly selectedRadius = new Float32Array(MAX_LIGHTS);

  readonly uLightPos = { value: new Float32Array(MAX_LIGHTS * 3) };
  readonly uLightColor = { value: new Float32Array(MAX_LIGHTS * 3) };
  readonly uLightRadius = { value: new Float32Array(MAX_LIGHTS) };
  readonly uLightCount = { value: 0 };

  private readonly movingBudget: number;
  private readonly impactBudget: number;
  private readonly ultimateBudget: number;
  private readonly capActive: number;

  constructor(mobile = false) {
    this.movingBudget = mobile ? 1 : 2;
    this.impactBudget = mobile ? 3 : 6;
    this.ultimateBudget = mobile ? 1 : 2;
    this.capActive = this.movingBudget + this.impactBudget + this.ultimateBudget;
  }

  // 새 광원 방출. life가 짧을수록 순간 섬광, 길수록 잔광.
  // 죽은 슬롯 우선 → 없으면 잔여수명 최소 슬롯 교체. 단, 일반 광원은 무쌍(prio) 슬롯을 밀어내지 않는다.
  spawn(
    x: number,
    y: number,
    z: number,
    r: number,
    g: number,
    b: number,
    radius: number,
    life: number,
    prio = false,
    kind: TechniqueLightKind = prio ? 'ultimate' : 'impact',
  ): void {
    let slot = -1;
    let min = Infinity;
    for (let i = 0; i < MAX_LIGHTS; i++) {
      if (this.life[i] <= 0) { slot = i; break; }
      // 일반 광원은 prio 슬롯을 교체 후보에서 제외(무쌍 광원 보호)
      if (!prio && this.prio[i] === 1) continue;
      if (this.life[i] < min) { min = this.life[i]; slot = i; }
    }
    if (slot < 0) return; // 모든 슬롯이 보호됨(일반 광원 드롭)
    this.px[slot] = x;
    this.py[slot] = y;
    this.pz[slot] = z;
    this.cr[slot] = r;
    this.cg[slot] = g;
    this.cb[slot] = b;
    this.rad[slot] = radius;
    this.life[slot] = life;
    this.maxLife[slot] = life;
    this.prio[slot] = prio ? 1 : 0;
    this.kind[slot] = kindCode(kind);
  }

  // Call once before projectile/effect submission. The focus point makes selection favor lights the
  // player can actually see and care about; update() consumes the submitted candidates.
  beginTechniqueFrame(focusX: number, focusZ: number): void {
    this.focusX = focusX;
    this.focusZ = focusZ;
    this.techniqueCount = 0;
    this.techniqueFrameOpen = true;
  }

  submitTechniqueLight(
    x: number,
    y: number,
    z: number,
    r: number,
    g: number,
    b: number,
    radius: number,
    intensity = 1,
    kind: TechniqueLightKind = 'moving',
    priority = 0,
  ): void {
    if (!this.techniqueFrameOpen) this.techniqueFrameOpen = true;
    let slot = this.techniqueCount;
    if (slot < MAX_TECHNIQUE_CANDIDATES) {
      this.techniqueCount++;
    } else {
      // Saturation is bounded. Replace the weakest submitted candidate so a late ultimate/impact
      // cannot be starved by a dense projectile stream.
      let weakest = 0;
      let weakestScore = Infinity;
      for (let i = 0; i < MAX_TECHNIQUE_CANDIDATES; i++) {
        const score = this.tpriority[i] + this.tintensity[i] * 2 + this.trad[i] * 0.03 + this.tkind[i] * 3;
        if (score < weakestScore) {
          weakestScore = score;
          weakest = i;
        }
      }
      const incomingScore = priority + intensity * 2 + radius * 0.03 + kindCode(kind) * 3;
      if (incomingScore <= weakestScore) return;
      slot = weakest;
    }
    this.tx[slot] = x;
    this.ty[slot] = y;
    this.tz[slot] = z;
    this.tr[slot] = r;
    this.tg[slot] = g;
    this.tb[slot] = b;
    this.trad[slot] = Math.max(radius, 0.01);
    this.tintensity[slot] = Math.max(intensity, 0);
    this.tpriority[slot] = priority;
    this.tkind[slot] = kindCode(kind);
  }

  // Theme helper for the common projectile path. Warm styles carry more energy; water/mist remain
  // low intensity. Radius still comes from actual gameplay size, so visuals follow mechanics.
  submitTechniqueThemeLight(
    theme: TechniqueTheme,
    x: number,
    z: number,
    radius: number,
    intensity = 1,
    kind: TechniqueLightKind = 'moving',
    priority = 0,
    y = 0.72,
  ): void {
    const profile = TECHNIQUE_LIGHT_COLOR[theme];
    const energy = profile[3] * intensity;
    this.submitTechniqueLight(
      x, y, z,
      profile[0], profile[1], profile[2],
      radius, energy, kind, priority,
    );
  }

  update(dt: number): void {
    this.selectedUsed.fill(0);
    this.selectedScore.fill(-Infinity);
    for (let i = 0; i < MAX_LIGHTS; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) continue;
      // 잔광 감쇠(제곱으로 스냅감). 짧은 섬광일수록 확 꺼진다.
      const f = this.life[i] / this.maxLife[i];
      const k = f * f;
      const strength = Math.max(this.cr[i], this.cg[i], this.cb[i]) * k;
      const score = this.score(this.px[i], this.pz[i], this.rad[i], strength, this.prio[i] * 6);
      this.consider(
        this.kind[i], score,
        this.px[i], this.py[i], this.pz[i],
        this.cr[i] * k, this.cg[i] * k, this.cb[i] * k, this.rad[i],
      );
    }

    for (let i = 0; i < this.techniqueCount; i++) {
      const intensity = this.tintensity[i];
      if (intensity <= 0) continue;
      const score = this.score(
        this.tx[i], this.tz[i], this.trad[i], intensity,
        this.tpriority[i] + this.tkind[i] * 1.5,
      );
      this.consider(
        this.tkind[i], score,
        this.tx[i], this.ty[i], this.tz[i],
        this.tr[i] * intensity, this.tg[i] * intensity, this.tb[i] * intensity,
        this.trad[i],
      );
    }

    const pos = this.uLightPos.value;
    const col = this.uLightColor.value;
    const rd = this.uLightRadius.value;
    let n = 0;
    for (let i = 0; i < this.capActive; i++) {
      if (this.selectedUsed[i] === 0) continue;
      const o3 = n * 3;
      pos[o3] = this.selectedX[i];
      pos[o3 + 1] = this.selectedY[i];
      pos[o3 + 2] = this.selectedZ[i];
      col[o3] = this.selectedR[i];
      col[o3 + 1] = this.selectedG[i];
      col[o3 + 2] = this.selectedB[i];
      rd[n] = this.selectedRadius[i];
      n++;
    }
    this.uLightCount.value = n;
    this.techniqueCount = 0;
    this.techniqueFrameOpen = false;
  }

  private score(x: number, z: number, radius: number, strength: number, priority: number): number {
    const distance = Math.hypot(x - this.focusX, z - this.focusZ);
    return priority + strength * 2.2 + radius * 0.035 - distance * 0.018;
  }

  private consider(
    kind: number,
    score: number,
    x: number,
    y: number,
    z: number,
    r: number,
    g: number,
    b: number,
    radius: number,
  ): void {
    let start: number;
    let count: number;
    if (kind === KIND_MOVING) {
      start = 0;
      count = this.movingBudget;
    } else if (kind === KIND_IMPACT) {
      start = this.movingBudget;
      count = this.impactBudget;
    } else {
      start = this.movingBudget + this.impactBudget;
      count = this.ultimateBudget;
    }

    let slot = -1;
    let weakest = Infinity;
    for (let i = start; i < start + count; i++) {
      if (this.selectedUsed[i] === 0) {
        slot = i;
        break;
      }
      if (this.selectedScore[i] < weakest) {
        weakest = this.selectedScore[i];
        slot = i;
      }
    }
    if (slot < 0 || (this.selectedUsed[slot] === 1 && score <= this.selectedScore[slot])) return;
    this.selectedUsed[slot] = 1;
    this.selectedScore[slot] = score;
    this.selectedX[slot] = x;
    this.selectedY[slot] = y;
    this.selectedZ[slot] = z;
    this.selectedR[slot] = r;
    this.selectedG[slot] = g;
    this.selectedB[slot] = b;
    this.selectedRadius[slot] = radius;
  }

  uniforms(): LightUniforms {
    return {
      uLightPos: this.uLightPos,
      uLightColor: this.uLightColor,
      uLightRadius: this.uLightRadius,
      uLightCount: this.uLightCount,
    };
  }

  reset(): void {
    this.life.fill(0);
    this.prio.fill(0);
    this.kind.fill(0);
    this.techniqueCount = 0;
    this.techniqueFrameOpen = false;
    this.uLightCount.value = 0;
  }

  get activeCount(): number {
    return this.uLightCount.value;
  }

  get techniqueCandidateCount(): number {
    return this.techniqueCount;
  }

  get budgets(): Readonly<{ moving: number; impact: number; ultimate: number; total: number }> {
    return {
      moving: this.movingBudget,
      impact: this.impactBudget,
      ultimate: this.ultimateBudget,
      total: this.capActive,
    };
  }
}
