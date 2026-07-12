import {
  Scene,
  Points,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';

// 사망/타격 버스트용 GPU 파티클 풀. 롤링 커서로 슬롯 재사용, 프레임당 할당 0.
export class ParticleSystem {
  private readonly points: Points;
  private readonly pos: Float32Array;
  private readonly col: Float32Array;
  private readonly life: Float32Array; // 정규화 수명 0..1 (attribute)
  private readonly vel: Float32Array; // CPU 전용
  private readonly invDur: Float32Array; // 1/지속시간 (CPU)
  private readonly posAttr: BufferAttribute;
  private readonly colAttr: BufferAttribute;
  private readonly lifeAttr: BufferAttribute;
  private readonly n: number;
  private cursor = 0;

  constructor(scene: Scene, capacity = 2400) {
    this.n = capacity;
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.vel = new Float32Array(capacity * 3);
    this.invDur = new Float32Array(capacity);

    const g = new BufferGeometry();
    this.posAttr = new BufferAttribute(this.pos, 3);
    this.colAttr = new BufferAttribute(this.col, 3);
    this.lifeAttr = new BufferAttribute(this.life, 1);
    this.posAttr.setUsage(DynamicDrawUsage);
    this.lifeAttr.setUsage(DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('aColor', this.colAttr);
    g.setAttribute('aLife', this.lifeAttr);

    const mat = new ShaderMaterial({
      uniforms: { uSize: { value: 340 } },
      vertexShader: /* glsl */ `
        attribute float aLife;
        attribute vec3 aColor;
        uniform float uSize;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (aLife > 0.0) ? uSize * aLife / max(0.1, -mv.z) : 0.0;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vLife;
        varying vec3 vColor;
        void main() {
          if (vLife <= 0.0) discard;
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor * vLife * a, 1.0);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.points = new Points(g, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 3;
    scene.add(this.points);
  }

  // 지면 위 한 지점에서 파티클 방출
  burst(
    x: number,
    z: number,
    r: number,
    g: number,
    b: number,
    count: number,
    speed: number,
  ): void {
    for (let k = 0; k < count; k++) {
      const i = this.cursor;
      this.cursor = (this.cursor + 1) % this.n;
      const p3 = i * 3;
      this.pos[p3] = x;
      this.pos[p3 + 1] = 0.7 + Math.random() * 0.8;
      this.pos[p3 + 2] = z;
      const ang = Math.random() * Math.PI * 2;
      const sp = speed * (0.3 + Math.random() * 0.9);
      this.vel[p3] = Math.cos(ang) * sp;
      this.vel[p3 + 1] = 1.5 + Math.random() * 3.0;
      this.vel[p3 + 2] = Math.sin(ang) * sp;
      this.col[p3] = r;
      this.col[p3 + 1] = g;
      this.col[p3 + 2] = b;
      this.life[i] = 1;
      this.invDur[i] = 1 / (0.3 + Math.random() * 0.35);
    }
  }

  update(dt: number): void {
    const pos = this.pos;
    const vel = this.vel;
    const life = this.life;
    const invDur = this.invDur;
    for (let i = 0; i < this.n; i++) {
      const l = life[i];
      if (l <= 0) continue;
      const nl = l - dt * invDur[i];
      life[i] = nl > 0 ? nl : 0;
      const p3 = i * 3;
      pos[p3] += vel[p3] * dt;
      pos[p3 + 1] += vel[p3 + 1] * dt;
      pos[p3 + 2] += vel[p3 + 2] * dt;
      // 감쇠 + 중력
      vel[p3] *= 0.92;
      vel[p3 + 1] = vel[p3 + 1] * 0.92 - 6 * dt;
      vel[p3 + 2] *= 0.92;
    }
    this.posAttr.needsUpdate = true;
    this.lifeAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
  }
}
