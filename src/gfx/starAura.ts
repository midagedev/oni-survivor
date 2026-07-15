import {
  Scene,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  AdditiveBlending,
  Vector2,
} from 'three';
import { SPRITE_TILT, SPRITE_WORLD_H } from './sprites';

// 군신 사당 버프 오라 — "흐르는 네온 테두리"(오너 요청 전면 교체).
// 버프(공격/이속/무쌍) 지속 30초 동안 플레이어 스프라이트 윤곽을 감싸는 네온 프레임을 표시한다.
// 색(청록↔자홍↔보라 사이버 네온)이 테두리를 타고 흐르고, 밝은 스윕이 윤곽을 한 바퀴 돈다.
// 중앙은 완전 투명 → 플레이어 스프라이트가 그대로 보인다. 절제 원칙: 블룸 임계 근처까지만, 화이트아웃 금지.
//  · 스프라이트와 동일한 tilt(SPRITE_TILT)·발 정렬로 co-planar 프레임을 세워 어느 각도서든 윤곽에 밀착.
//  · 둥근 사각 SDF의 테두리 밴드만 발광(중앙 투명), 밴드 색 = 각도+시간 기반 흐르는 네온.
// active=false 시 0.4s 페이드아웃 후 정지. 자체 시계, 매프레임 할당 0. update/reset 시그니처 불변.

const FADE_IN = 0.25;
const FADE_OUT = 0.4;
// 프레임 쿼드: SDF 밴드(윤곽선)가 스프라이트(폭 1.8·높이 2.4) 바로 바깥을 감싸도록 크기 설정.
// 밴드 half-extent ≈ uSize/2 - INSET → (0.98, 1.28)로 몸통(±0.9, 0~2.4) 살짝 밖. 글로우 여유로 INSET 확보.
const FRAME_W = 2.32;
const FRAME_H = 2.92;
const FRAME_CY = SPRITE_WORLD_H * 0.5; // 스프라이트 중앙 높이(1.2)에 프레임 중심 정렬

export class StarAura {
  private readonly mesh: Mesh;
  private readonly mat: ShaderMaterial;
  private time = 0;
  private vis = 0; // 0..1 페이드

  constructor(scene: Scene) {
    const geo = new PlaneGeometry(1, 1); // 중심 원점 유닛 쿼드(스케일·틸트·위치는 런타임)
    this.mat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAlpha: { value: 0 },
        uSize: { value: new Vector2(FRAME_W, FRAME_H) },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform float uAlpha;
        uniform vec2 uSize;
        varying vec2 vUv;
        // 둥근 사각 SDF(부호거리). b=half-extent, r=코너 반경.
        float sdRoundBox(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b + r;
          return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
        }
        // 사이버 네온 팔레트: 청록→자홍→보라 순환.
        vec3 neon(float t) {
          t = fract(t) * 3.0;
          vec3 c0 = vec3(0.15, 0.95, 1.05); // 청록
          vec3 c1 = vec3(1.05, 0.22, 0.9);  // 자홍
          vec3 c2 = vec3(0.6, 0.32, 1.05);  // 보라
          if (t < 1.0) return mix(c0, c1, smoothstep(0.0, 1.0, t));
          if (t < 2.0) return mix(c1, c2, smoothstep(0.0, 1.0, t - 1.0));
          return mix(c2, c0, smoothstep(0.0, 1.0, t - 2.0));
        }
        void main() {
          vec2 P = (vUv - 0.5) * uSize;       // 실제 뷰 단위(중심 0)
          vec2 b = uSize * 0.5 - vec2(0.18);  // 밴드가 훑을 둥근사각 half-extent(몸통 바로 바깥)
          float d = sdRoundBox(P, b, 0.5);    // 둥근 코너
          float core = smoothstep(0.09, 0.0, abs(d));         // 밝은 네온 라인
          float halo = smoothstep(0.34, 0.06, abs(d)) * 0.42; // 넓고 은은한 네온 글로우
          float band = core + halo;
          if (band < 0.01) discard;           // 중앙(d<<0)·먼바깥(d>0)은 투명 → 플레이어 안 가림
          // 흐르는 색: 둘레 각도 + 시간 → 팔레트가 프레임을 타고 회전.
          float a = atan(P.y, P.x) / 6.2831853 + 0.5;
          vec3 col = neon(a + uTime * 0.22);
          // 밝은 스윕: 둘레의 한 점이 시간에 따라 이동하며 국소 하이라이트.
          float sd = abs(fract(a - uTime * 0.42 + 0.5) - 0.5); // 래핑 둘레거리
          float sweep = smoothstep(0.13, 0.0, sd);
          float glow = band * (0.6 + sweep * 0.8); // 기본 네온 + 스윕 하이라이트
          // 게인 1.45로 코어만 블룸(임계 0.88) 살짝 태워 "버프 중" 확실히, 밴드가 얇아 블로우아웃 없음.
          vec3 outc = (col + vec3(0.4) * sweep) * glow * 1.45;
          gl_FragColor = vec4(outc, glow * uAlpha);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: false, // 플레이어 윤곽 위/주위에 항상 표시(가림 없이)
    });
    this.mesh = new Mesh(geo, this.mat);
    this.mesh.scale.set(FRAME_W, FRAME_H, 1);
    this.mesh.rotation.x = SPRITE_TILT; // 스프라이트와 동일하게 카메라 각도만큼 눕힘 → 윤곽 밀착
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    this.mesh.renderOrder = 5; // 스프라이트(2) 위에 발광
    scene.add(this.mesh);
  }

  reset(): void {
    this.time = 0;
    this.vis = 0;
    this.mesh.visible = false;
  }

  // dt: 프레임 시간. x,z: 플레이어 좌표. active: 사당 버프 활성 여부.
  // active=false여도 vis>0인 동안(페이드아웃) 계속 그린다. 시그니처·배선 불변.
  update(dt: number, x: number, z: number, active: boolean): void {
    if (dt > 0.1) dt = 0.1; // 탭 복귀 등 큰 점프 클램프
    this.vis = active
      ? Math.min(1, this.vis + dt / FADE_IN)
      : Math.max(0, this.vis - dt / FADE_OUT);
    if (this.vis <= 0.001 && !active) {
      this.mesh.visible = false;
      return;
    }
    this.time += dt;
    this.mesh.position.set(x, FRAME_CY, z); // 지면 위 스프라이트 중앙 높이에 정렬
    this.mesh.visible = true;
    this.mat.uniforms.uTime.value = this.time;
    this.mat.uniforms.uAlpha.value = this.vis;
  }
}
