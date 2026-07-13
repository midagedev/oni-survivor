import {
  Scene,
  Sprite,
  SpriteMaterial,
  CanvasTexture,
  PlaneGeometry,
  BoxGeometry,
  MeshBasicMaterial,
  Object3D,
  DoubleSide,
  Vector3,
  ShaderMaterial,
  AdditiveBlending,
  InstancedMesh,
  InstancedBufferAttribute,
  DynamicDrawUsage,
} from 'three';
import { castleRenderData } from '../game/battlefieldMap';
import type { CastleBanner } from '../game/battlefieldMap';

// 맵 오브젝트/랜드마크용 표식 레이어.
// (1) 지면 발광 원반(상시 글로우), (2) 이름표, (3) 근접 상호작용 힌트를 한데 묶어
// begin → glow/name/hint* → end 패턴으로 프레임마다 재사용한다(할당 0).

const CV_W = 288;
const CV_H = 72;

interface TextStyle {
  font: string;
  fill: string;
  stroke: string;
  strokeW: number;
  scale: number;
}

const NAME_STYLE: TextStyle = {
  font: 'bold 30px "Nanum Myeongjo","Times New Roman",serif',
  fill: '#f0e0a0',
  stroke: 'rgba(0,0,0,0.92)',
  strokeW: 6,
  scale: 1.35,
};

const HINT_STYLE: TextStyle = {
  font: 'bold 27px "Nanum Myeongjo","Times New Roman",serif',
  fill: '#c8ecff',
  stroke: 'rgba(0,0,0,0.88)',
  strokeW: 6,
  scale: 1.18,
};

// 구역 진입 이름표(크고 금빛, 페이드 인). 성곽 구역 상단에 배너처럼 뜬다.
const TITLE_STYLE: TextStyle = {
  font: 'bold 32px "Nanum Myeongjo","Times New Roman",serif',
  fill: '#ffe6a2',
  stroke: 'rgba(0,0,0,0.94)',
  strokeW: 7,
  scale: 2.35,
};

const BANNER_FOG_COLOR = new Vector3(0.00018, 0.00026, 0.0008);
const BANNER_FOG_DENSITY = 0.019;

interface TextSlot {
  sprite: Sprite;
  mat: SpriteMaterial;
  tex: CanvasTexture;
  ctx: CanvasRenderingContext2D;
  text: string;
}

// 텍스트 스프라이트 풀. 텍스트가 바뀔 때만 캔버스를 다시 그린다.
class TextSprites {
  private readonly slots: TextSlot[] = [];
  private readonly cap: number;
  private readonly style: TextStyle;
  private cursor = 0;

  constructor(scene: Scene, cap: number, style: TextStyle, renderOrder: number) {
    this.cap = cap;
    this.style = style;
    for (let i = 0; i < cap; i++) {
      const cv = document.createElement('canvas');
      cv.width = CV_W;
      cv.height = CV_H;
      const ctx = cv.getContext('2d')!;
      const tex = new CanvasTexture(cv);
      const mat = new SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
      const sprite = new Sprite(mat);
      sprite.visible = false;
      sprite.renderOrder = renderOrder;
      sprite.scale.set(style.scale * (CV_W / CV_H), style.scale, 1);
      scene.add(sprite);
      this.slots.push({ sprite, mat, tex, ctx, text: '' });
    }
  }

  begin(): void {
    this.cursor = 0;
  }

  place(text: string, x: number, y: number, z: number, alpha: number): void {
    if (this.cursor >= this.cap) return;
    const s = this.slots[this.cursor++];
    if (s.text !== text) {
      s.text = text;
      const ctx = s.ctx;
      const st = this.style;
      ctx.clearRect(0, 0, CV_W, CV_H);
      ctx.font = st.font;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = st.strokeW;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = st.stroke;
      ctx.strokeText(text, CV_W / 2, CV_H / 2);
      ctx.fillStyle = st.fill;
      ctx.fillText(text, CV_W / 2, CV_H / 2);
      s.tex.needsUpdate = true;
    }
    s.mat.opacity = alpha;
    s.sprite.position.set(x, y, z);
    s.sprite.visible = true;
  }

  end(): void {
    for (let i = this.cursor; i < this.cap; i++) this.slots[i].sprite.visible = false;
  }

  reset(): void {
    for (const s of this.slots) s.sprite.visible = false;
    this.cursor = 0;
  }
}

// 지면 발광 원반 풀(애디티브). 부드러운 방사형 감쇠 + 완만한 맥동.
class GlowBatch {
  private readonly mat: ShaderMaterial;
  private readonly matrices: Float32Array;
  private readonly colors: Float32Array;
  private readonly seeds: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly seedAttr: InstancedBufferAttribute;
  private readonly mesh: InstancedMesh;
  private readonly cap: number;
  private w = 0;

  constructor(scene: Scene, cap: number) {
    this.cap = cap;
    const geo = new PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.colors = new Float32Array(cap * 3);
    this.seeds = new Float32Array(cap);
    this.colAttr = new InstancedBufferAttribute(this.colors, 3);
    this.seedAttr = new InstancedBufferAttribute(this.seeds, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.seedAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aSeed', this.seedAttr);
    this.mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float soft = smoothstep(1.0, 0.12, r);
          if (soft <= 0.002) discard;
          float pulse = 0.8 + 0.2 * sin(uTime * 2.3 + vSeed * 6.283);
          float b = soft * soft * pulse;
          gl_FragColor = vec4(vColor * b, b * 0.55);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.mesh = new InstancedMesh(geo, this.mat, cap);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.w = 0;
  }

  push(x: number, z: number, radius: number, r: number, g: number, b: number): void {
    if (this.w >= this.cap) return;
    const i = this.w++;
    const m = i * 16;
    const d = radius * 2;
    this.matrices[m] = d;
    this.matrices[m + 5] = 1;
    this.matrices[m + 10] = d;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = 0.06;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
    const c = i * 3;
    this.colors[c] = r;
    this.colors[c + 1] = g;
    this.colors[c + 2] = b;
    this.seeds[i] = (Math.floor(x * 3.1 + z * 7.7) & 63) / 64;
  }

  end(time: number): void {
    this.mat.uniforms.uTime.value = time;
    this.mesh.count = this.w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.seedAttr.needsUpdate = true;
  }

  reset(): void {
    this.w = 0;
    this.mesh.count = 0;
  }
}

// 성곽 성문·군영 깃발. 버텍스 셰이더 사인파로 펄럭이는 천 + 어두운 깃대.
// 정적 배치(성곽은 상시 지형) — 데이터 버전이 바뀔 때만 인스턴스를 다시 굽고, 매 프레임 uTime만 갱신.
class BannerBatch {
  private readonly cloth: InstancedMesh;
  private readonly poles: InstancedMesh;
  private readonly clothMat: ShaderMaterial;
  private readonly seeds: Float32Array;
  private readonly cols: Float32Array;
  private readonly seedAttr: InstancedBufferAttribute;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly dummy = new Object3D();
  private readonly cap: number;
  private version = -1;

  constructor(scene: Scene, cap = 24) {
    this.cap = cap;
    const clothGeo = new PlaneGeometry(1, 1, 14, 3);
    clothGeo.translate(0.5, 0.5, 0); // 로컬 원점 = 깃대쪽 하단, +X로 자유단, +Y로 위
    this.seeds = new Float32Array(cap);
    this.cols = new Float32Array(cap * 3);
    this.seedAttr = new InstancedBufferAttribute(this.seeds, 1);
    this.colAttr = new InstancedBufferAttribute(this.cols, 3);
    this.seedAttr.setUsage(DynamicDrawUsage);
    this.colAttr.setUsage(DynamicDrawUsage);
    clothGeo.setAttribute('aSeed', this.seedAttr);
    clothGeo.setAttribute('aColor', this.colAttr);
    this.clothMat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uFogColor: { value: BANNER_FOG_COLOR.clone() },
        uFogDensity: { value: BANNER_FOG_DENSITY },
      },
      vertexShader: /* glsl */ `
        attribute float aSeed;
        attribute vec3 aColor;
        uniform float uTime;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vColor = aColor;
          vec3 p = position;
          float t = uTime + aSeed * 6.2831;
          float amp = p.x; // 깃대(0)에서 자유단(1)으로 갈수록 진폭 증가
          float w = sin(p.x * 6.5 - t * 5.5) * 0.17 * amp
                  + sin(p.x * 3.0 - t * 3.2 + 1.3) * 0.09 * amp;
          p.z += w;
          p.y += sin(p.x * 4.5 - t * 4.8) * 0.05 * amp;
          vShade = 0.66 + 0.28 * cos(p.x * 6.5 - t * 5.5); // 사인 기울기로 가짜 음영
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vec3 col = vColor * vShade;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: DoubleSide,
      transparent: false,
      depthWrite: true,
      depthTest: true,
    });
    this.cloth = new InstancedMesh(clothGeo, this.clothMat, cap);
    this.cloth.count = 0;
    this.cloth.frustumCulled = false;
    this.cloth.renderOrder = 1;
    this.cloth.instanceMatrix.setUsage(DynamicDrawUsage);

    const poleGeo = new BoxGeometry(1, 1, 1);
    poleGeo.translate(0, 0.5, 0); // 바닥 피벗
    const poleMat = new MeshBasicMaterial({ color: 0x241d19, toneMapped: true });
    this.poles = new InstancedMesh(poleGeo, poleMat, cap);
    this.poles.count = 0;
    this.poles.frustumCulled = false;
    this.poles.instanceMatrix.setUsage(DynamicDrawUsage);

    scene.add(this.cloth);
    scene.add(this.poles);
  }

  private rebuild(defs: CastleBanner[]): void {
    const n = Math.min(defs.length, this.cap);
    for (let i = 0; i < n; i++) {
      const d = defs[i];
      // 깃대
      this.dummy.position.set(d.x, 0, d.z);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.scale.set(0.16, d.poleH, 0.16);
      this.dummy.updateMatrix();
      this.poles.setMatrixAt(i, this.dummy.matrix);
      // 천(깃대 상단에 부착)
      this.dummy.position.set(d.x, d.poleH - d.h - 0.15, d.z);
      this.dummy.rotation.set(0, d.ry, 0);
      this.dummy.scale.set(d.w, d.h, 1);
      this.dummy.updateMatrix();
      this.cloth.setMatrixAt(i, this.dummy.matrix);
      this.seeds[i] = (i * 0.37) % 1;
      this.cols[i * 3] = d.r;
      this.cols[i * 3 + 1] = d.g;
      this.cols[i * 3 + 2] = d.b;
    }
    this.cloth.count = n;
    this.poles.count = n;
    this.cloth.instanceMatrix.needsUpdate = true;
    this.poles.instanceMatrix.needsUpdate = true;
    this.seedAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
  }

  update(time: number): void {
    if (castleRenderData.bannerVersion !== this.version) {
      this.version = castleRenderData.bannerVersion;
      this.rebuild(castleRenderData.banners);
    }
    this.clothMat.uniforms.uTime.value = time;
  }
}

// 지면 글로우 + 이름표 + 근접 힌트를 묶은 표식 레이어.
export class MarkerLayer {
  private readonly glow: GlowBatch;
  private readonly names: TextSprites;
  private readonly hints: TextSprites;
  private readonly titles: TextSprites;
  private readonly banners: BannerBatch;
  private time = 0;

  constructor(scene: Scene, glowCap = 24, nameCap = 18, hintCap = 6) {
    this.glow = new GlowBatch(scene, glowCap);
    this.names = new TextSprites(scene, nameCap, NAME_STYLE, 11);
    this.hints = new TextSprites(scene, hintCap, HINT_STYLE, 12);
    this.titles = new TextSprites(scene, 2, TITLE_STYLE, 13);
    this.banners = new BannerBatch(scene);
  }

  begin(time: number): void {
    this.time = time;
    this.glow.begin();
    this.names.begin();
    this.hints.begin();
    // 성곽 깃발(정적) 애니 + 구역 이름표(페이드). run.ts 수정 없이 castleRenderData로 구동.
    this.banners.update(time);
    this.titles.begin();
    const t = castleRenderData.title;
    if (t.alpha > 0.02) this.titles.place(t.text, t.x, t.y, t.z, Math.min(1, t.alpha));
  }

  glowAt(x: number, z: number, radius: number, r: number, g: number, b: number): void {
    this.glow.push(x, z, radius, r, g, b);
  }

  name(text: string, x: number, y: number, z: number): void {
    this.names.place(text, x, y, z, 1);
  }

  // 근접 힌트: 맥동 알파로 눈에 띄게.
  hint(text: string, x: number, y: number, z: number): void {
    const a = 0.62 + 0.38 * Math.sin(this.time * 5.2);
    this.hints.place(text, x, y, z, a);
  }

  end(): void {
    this.glow.end(this.time);
    this.names.end();
    this.hints.end();
    this.titles.end();
  }

  reset(): void {
    this.glow.reset();
    this.names.reset();
    this.hints.reset();
    this.titles.reset();
    // 깃발은 정적 성곽 지형이라 런 재시작에도 유지(reset하지 않음).
  }
}
