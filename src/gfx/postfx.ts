import { Vector2 } from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// PostFX 팩 (#21): 단일 풀스크린 셰이더 패스.
//  - 순간: 방향성/라디얼 모션 블러(대시/무쌍/킬캠), 색수차 펄스(폭발/피격)
//  - 상시: 필름 그레인, 비네트 브리딩, 은은한 톤 그레이딩
// OutputPass 전(선형 HDR)에 삽입. 자체 시계/감쇠를 굴려 run/main 배선 없이도 상시·무쌍 파생이 동작한다.
// 모바일은 블러 6탭 생략(그레인/비네트/그레이딩만).

const PostFxShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uBlur: { value: 0 },
    uBlurDir: { value: new Vector2(0, 0) },
    uAberr: { value: 0 },
    uMobile: { value: 0 },
    uRes: { value: new Vector2(1, 1) },
    uGrain: { value: 0.035 },
    uVig: { value: 0.26 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uBlur;
    uniform vec2 uBlurDir;
    uniform float uAberr;
    uniform float uMobile;
    uniform vec2 uRes;
    uniform float uGrain;
    uniform float uVig;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      vec3 col;
      // 방향성/라디얼 모션 블러 (이벤트/무쌍, 데스크톱만)
      if (uBlur > 0.002 && uMobile < 0.5) {
        vec2 dir = (c * 0.9 + uBlurDir * 1.5) * uBlur * 0.055;
        vec3 acc = vec3(0.0);
        for (int i = 0; i < 6; i++) {
          acc += texture2D(tDiffuse, uv - dir * (float(i) / 5.0)).rgb;
        }
        col = acc / 6.0;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }
      // 색수차 펄스 (이벤트): R/B 반경 오프셋
      if (uAberr > 0.002) {
        vec2 off = c * uAberr * 0.02;
        col.r = texture2D(tDiffuse, uv + off).r;
        col.b = texture2D(tDiffuse, uv - off).b;
      }
      // 톤 그레이딩: HDR 안전한 미세 온기 곱(섀도 청록/하이라이트 웜 대비)
      col *= vec3(1.025, 1.0, 0.985);
      // 비네트 브리딩 (상시, 아주 느린 맥동)
      float breathe = uVig + 0.05 * sin(uTime * 0.6);
      float vig = 1.0 - smoothstep(0.45, 0.98, length(c)) * breathe;
      col *= vig;
      // 필름 그레인 (상시, 애니메이션)
      float g = hash(uv * uRes + fract(uTime) * 91.7);
      col += (g - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

// 컴포저에 꽂는 단일 패스 + 자체 시계/펄스 감쇠 관리.
export class PostFxController {
  readonly pass: ShaderPass;
  private readonly mobile: boolean;
  private blur = 0;
  private blurX = 0;
  private blurZ = 0;
  private aberr = 0;
  private musou = 0;
  private time = 0;
  private lastT = 0;

  constructor(mobile: boolean) {
    this.mobile = mobile;
    this.pass = new ShaderPass(PostFxShader);
    this.pass.uniforms.uMobile.value = mobile ? 1 : 0;
    this.pass.uniforms.uGrain.value = mobile ? 0.02 : 0.035;
    this.lastT = performance.now();
  }

  // 방향성 모션 블러 펄스. dx/dz=화면 방향(대시). 0,0이면 라디얼.
  pulseBlur(strength: number, dx = 0, dz = 0): void {
    if (strength > this.blur) this.blur = strength;
    const l = Math.hypot(dx, dz);
    if (l > 0.001) {
      this.blurX = dx / l;
      this.blurZ = dz / l;
    } else {
      this.blurX = 0;
      this.blurZ = 0;
    }
  }

  // 색수차 펄스(폭발/피격).
  pulseAberration(strength: number): void {
    if (strength > this.aberr) this.aberr = strength;
  }

  // 무쌍 세기(0..1). 기존 setMusou 경로로 자동 구동 → 무쌍 중 은은한 라디얼 블러+색수차.
  setMusou(strength: number): void {
    this.musou = strength < 0 ? 0 : strength > 1 ? 1 : strength;
  }

  setSize(w: number, h: number): void {
    (this.pass.uniforms.uRes.value as Vector2).set(w, h);
  }

  reset(): void {
    this.blur = 0;
    this.aberr = 0;
    this.musou = 0;
  }

  // 매 프레임 composer.render() 직전 호출: 시계 전진 + 펄스 감쇠 + 유니폼 반영.
  update(): void {
    const now = performance.now();
    let dt = (now - this.lastT) / 1000;
    this.lastT = now;
    if (dt > 0.1) dt = 0.1; // 탭 복귀 등 큰 점프 클램프
    this.time += dt;
    this.blur = this.blur > 0.01 ? this.blur * Math.exp(-dt / 0.11) : 0;
    this.aberr = this.aberr > 0.01 ? this.aberr * Math.exp(-dt / 0.16) : 0;
    // 무쌍 파생(라디얼)
    const mBlur = this.musou * 0.45;
    const mAberr = this.musou * 0.3;
    const useDir = this.blur > 0.01;
    const u = this.pass.uniforms;
    u.uBlur.value = Math.max(this.blur, mBlur);
    (u.uBlurDir.value as Vector2).set(useDir ? this.blurX : 0, useDir ? this.blurZ : 0);
    u.uAberr.value = Math.max(this.aberr, mAberr);
    u.uTime.value = this.time;
  }
}
