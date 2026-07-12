import {
  Scene,
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  AdditiveBlending,
} from 'three';

interface ThrustSlot {
  mesh: Mesh;
  mat: ShaderMaterial;
  age: number;
  dur: number;
  active: boolean;
}

// 무기 시각 이펙트 풀. Phase 1은 찌르기(용담창) 스트릭만; Phase 2 확장 지점.
export class EffectsSystem {
  private readonly thrusts: ThrustSlot[] = [];
  private readonly cap: number;
  private cursor = 0;

  constructor(scene: Scene, cap = 24) {
    this.cap = cap;
    const geo = new PlaneGeometry(1, 1, 1, 1);
    geo.rotateX(-Math.PI / 2); // 지면과 평행하게 눕힘
    geo.translate(0.5, 0, 0); // 로컬 원점(플레이어)에서 +X 방향으로 뻗음

    for (let i = 0; i < cap; i++) {
      const mat = new ShaderMaterial({
        uniforms: { uAlpha: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uAlpha;
          varying vec2 vUv;
          void main() {
            float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
            float along = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.6, 1.0, vUv.x));
            float b = pow(max(across, 0.0), 1.6) * along;
            vec3 col = vec3(0.7, 0.95, 1.7) * b * 2.2;
            gl_FragColor = vec4(col, b * uAlpha);
          }
        `,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
        depthTest: true,
      });
      const mesh = new Mesh(geo, mat);
      mesh.visible = false;
      mesh.frustumCulled = false;
      mesh.renderOrder = 4;
      scene.add(mesh);
      this.thrusts.push({ mesh, mat, age: 0, dur: 0.15, active: false });
    }
  }

  // 플레이어 위치에서 (dirX,dirZ) 방향으로 길이 length, 폭 width의 찌르기.
  spawnThrust(px: number, pz: number, dirX: number, dirZ: number, length: number, width: number): void {
    const slot = this.thrusts[this.cursor];
    this.cursor = (this.cursor + 1) % this.cap;
    slot.age = 0;
    slot.dur = 0.15;
    slot.active = true;
    slot.mesh.visible = true;
    slot.mesh.position.set(px, 1.0, pz);
    // 로컬 +X를 (dirX,dirZ)로 향하게: rotY(theta), +X→(cosθ,0,-sinθ)
    slot.mesh.rotation.y = Math.atan2(-dirZ, dirX);
    slot.mesh.scale.set(length, 1, width);
    slot.mat.uniforms.uAlpha.value = 1;
  }

  update(dt: number): void {
    for (let i = 0; i < this.cap; i++) {
      const s = this.thrusts[i];
      if (!s.active) continue;
      s.age += dt;
      const t = s.age / s.dur;
      if (t >= 1) {
        s.active = false;
        s.mesh.visible = false;
        s.mat.uniforms.uAlpha.value = 0;
        continue;
      }
      // 빠르게 뻗으며 페이드
      const grow = 0.7 + 0.3 * Math.min(1, t * 3);
      s.mesh.scale.x = s.mesh.scale.x; // 길이 유지
      s.mat.uniforms.uAlpha.value = (1 - t) * grow;
    }
  }
}
