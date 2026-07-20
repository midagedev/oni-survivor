import {
  AdditiveBlending,
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedMesh,
  LinearFilter,
  LinearMipmapLinearFilter,
  NormalBlending,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  TextureLoader,
} from 'three';

export const TECHNIQUE_THEMES = [
  'water',
  'flame',
  'thunder',
  'love',
  'sun',
  'blood',
  'butterfly',
  'flower',
  'beast',
  'mist',
  'wind',
  'sound',
  'stone',
] as const;

export type TechniqueTheme = (typeof TECHNIQUE_THEMES)[number];
export type TechniqueProjection = 'ribbon' | 'head' | 'impact';
export type TechniqueTrail = 'flow' | 'streak' | 'veil' | 'gust' | 'pulse';

export interface TechniqueVisualProfile {
  projection: TechniqueProjection;
  trail: TechniqueTrail;
  /** Authored leading point inside one cell. Moving collision centers are aligned to this point. */
  anchorU: number;
  fps: number;
  lightRadius: number;
}

/**
 * Art/runtime contract shared by gameplay and rendering. Moving art is authored along local +X;
 * impact art stays centered. Keeping this data explicit prevents a radial decal from being stretched
 * into a projectile simply because it shares the same elemental theme.
 */
export const TECHNIQUE_VISUALS: Readonly<Record<TechniqueTheme, TechniqueVisualProfile>> = {
  water: { projection: 'ribbon', trail: 'flow', anchorU: 0.84, fps: 13, lightRadius: 4.8 },
  flame: { projection: 'head', trail: 'streak', anchorU: 0.84, fps: 16, lightRadius: 6.4 },
  thunder: { projection: 'head', trail: 'streak', anchorU: 0.84, fps: 20, lightRadius: 7.2 },
  love: { projection: 'ribbon', trail: 'flow', anchorU: 0.5, fps: 11, lightRadius: 4.7 },
  sun: { projection: 'impact', trail: 'pulse', anchorU: 0.5, fps: 12, lightRadius: 7.4 },
  blood: { projection: 'impact', trail: 'pulse', anchorU: 0.5, fps: 12, lightRadius: 6.2 },
  butterfly: { projection: 'head', trail: 'streak', anchorU: 0.84, fps: 18, lightRadius: 4.2 },
  flower: { projection: 'ribbon', trail: 'flow', anchorU: 0.5, fps: 11, lightRadius: 4.4 },
  beast: { projection: 'impact', trail: 'pulse', anchorU: 0.5, fps: 15, lightRadius: 4.2 },
  mist: { projection: 'ribbon', trail: 'veil', anchorU: 0.84, fps: 10, lightRadius: 4.8 },
  wind: { projection: 'ribbon', trail: 'gust', anchorU: 0.84, fps: 13, lightRadius: 5.4 },
  sound: { projection: 'impact', trail: 'pulse', anchorU: 0.5, fps: 12, lightRadius: 6.6 },
  stone: { projection: 'impact', trail: 'pulse', anchorU: 0.5, fps: 10, lightRadius: 4.4 },
};

const THEME_IDS: Record<TechniqueTheme, number> = {
  water: 1,
  flame: 2,
  thunder: 3,
  love: 4,
  sun: 5,
  blood: 6,
  butterfly: 7,
  flower: 8,
  beast: 9,
  mist: 10,
  wind: 11,
  sound: 12,
  stone: 13,
};

const FRAMES_PER_THEME = 4;
const ATLAS_GRID = 8;
const ONE_SHOT_CAP = 32 * TECHNIQUE_THEMES.length;
const DYNAMIC_CAP = 384;
const TOTAL_CAP = ONE_SHOT_CAP + DYNAMIC_CAP;

export function techniqueThemeId(theme: TechniqueTheme | null): number {
  return theme === null ? 0 : THEME_IDS[theme];
}

export function techniqueThemeFromId(id: number): TechniqueTheme | null {
  return id > 0 && id <= TECHNIQUE_THEMES.length ? TECHNIQUE_THEMES[id - 1] : null;
}

function cellFor(theme: TechniqueTheme, frame: number): number {
  const themeIndex = THEME_IDS[theme] - 1;
  return themeIndex * FRAMES_PER_THEME + Math.max(0, Math.min(3, frame | 0));
}

interface RenderBatch {
  mesh: InstancedMesh;
  matrices: Float32Array;
  alpha: Float32Array;
  cell: Float32Array;
  alphaAttr: InstancedBufferAttribute;
  cellAttr: InstancedBufferAttribute;
  cursor: number;
}

/**
 * Semantic technique art shared by melee splashes and moving projectiles.
 *
 * The previous implementation created a body/glow pair for every theme (up to 26 draw calls) and
 * sampled one static 4x4 atlas cell. The 8x8 atlas now contains four authored frames per technique;
 * per-instance cell attributes let every theme share one body draw and one glow draw.
 */
export class TechniqueSpriteRenderer {
  private readonly active = new Uint8Array(ONE_SHOT_CAP);
  private readonly theme = new Uint8Array(ONE_SHOT_CAP);
  private readonly age = new Float32Array(ONE_SHOT_CAP);
  private readonly duration = new Float32Array(ONE_SHOT_CAP);
  private readonly x = new Float32Array(ONE_SHOT_CAP);
  private readonly y = new Float32Array(ONE_SHOT_CAP);
  private readonly z = new Float32Array(ONE_SHOT_CAP);
  private readonly theta = new Float32Array(ONE_SHOT_CAP);
  private readonly scaleX = new Float32Array(ONE_SHOT_CAP);
  private readonly scaleZ = new Float32Array(ONE_SHOT_CAP);
  private readonly alpha = new Float32Array(ONE_SHOT_CAP);
  private readonly glow = new Float32Array(ONE_SHOT_CAP);
  private readonly spin = new Float32Array(ONE_SHOT_CAP);
  private readonly growth = new Float32Array(ONE_SHOT_CAP);
  private poolCursor = 0;
  private time = 0;
  private loaded = false;

  private readonly body: RenderBatch;
  private readonly glowBatch: RenderBatch;

  constructor(scene: Scene) {
    const texture = new TextureLoader().load(
      `${import.meta.env.BASE_URL}assets/techniques/technique-atlas.png`,
      () => { this.loaded = true; },
    );
    texture.colorSpace = SRGBColorSpace;
    texture.magFilter = LinearFilter;
    texture.minFilter = LinearMipmapLinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = 4;

    const makeGeometry = (): {
      geometry: PlaneGeometry;
      alpha: Float32Array;
      cell: Float32Array;
      alphaAttr: InstancedBufferAttribute;
      cellAttr: InstancedBufferAttribute;
    } => {
      const geometry = new PlaneGeometry(1, 1);
      geometry.rotateX(-Math.PI * 0.5);
      const alpha = new Float32Array(TOTAL_CAP);
      const cell = new Float32Array(TOTAL_CAP);
      const alphaAttr = new InstancedBufferAttribute(alpha, 1);
      const cellAttr = new InstancedBufferAttribute(cell, 1);
      alphaAttr.setUsage(DynamicDrawUsage);
      cellAttr.setUsage(DynamicDrawUsage);
      geometry.setAttribute('aAlpha', alphaAttr);
      geometry.setAttribute('aCell', cellAttr);
      return { geometry, alpha, cell, alphaAttr, cellAttr };
    };

    const vertexShader = /* glsl */ `
      attribute float aAlpha;
      attribute float aCell;
      varying vec2 vUv;
      varying float vAlpha;
      void main() {
        const float GRID = ${ATLAS_GRID.toFixed(1)};
        float col = mod(aCell, GRID);
        float rowFromTop = floor(aCell / GRID);
        vec2 origin = vec2(col / GRID, (GRID - 1.0 - rowFromTop) / GRID);
        vUv = origin + uv / GRID;
        vAlpha = aAlpha;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }
    `;

    const bodyGeo = makeGeometry();
    const bodyMaterial = new ShaderMaterial({
      uniforms: { uMap: { value: texture } },
      vertexShader,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        varying vec2 vUv;
        varying float vAlpha;
        void main() {
          vec4 texel = texture2D(uMap, vUv);
          float a = texel.a * vAlpha;
          if (a < 0.025) discard;
          // SRGBColorSpace uploads this atlas as SRGB8_ALPHA8, so texture2D already returns
          // linear RGB. Applying another pow() here crushed every painted midtone.
          gl_FragColor = vec4(max(texel.rgb, vec3(0.0)), a);
          #include <colorspace_fragment>
        }
      `,
      transparent: true,
      blending: NormalBlending,
      depthWrite: false,
      depthTest: true,
      toneMapped: false,
    });
    this.body = this.makeBatch(scene, bodyGeo, bodyMaterial, 6);

    const glowGeo = makeGeometry();
    const glowMaterial = new ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uTexel: { value: 1 / 2048 },
      },
      vertexShader,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float uTexel;
        varying vec2 vUv;
        varying float vAlpha;
        void main() {
          vec4 texel = texture2D(uMap, vUv);
          float spread = max(max(
            texture2D(uMap, vUv + vec2(uTexel * 2.0, 0.0)).a,
            texture2D(uMap, vUv - vec2(uTexel * 2.0, 0.0)).a
          ), max(
            texture2D(uMap, vUv + vec2(0.0, uTexel * 2.0)).a,
            texture2D(uMap, vUv - vec2(0.0, uTexel * 2.0)).a
          ));
          float a = max(texel.a, spread * 0.62) * vAlpha;
          if (a < 0.018) discard;
          vec3 color = max(texel.rgb, vec3(0.08, 0.1, 0.13));
          // AdditiveBlending uses SrcAlpha: keep RGB straight-alpha here. Multiplying RGB by
          // a as well would square the already restrained glow opacity and make it disappear.
          gl_FragColor = vec4(color, min(1.0, a * 0.72));
          #include <colorspace_fragment>
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      toneMapped: false,
    });
    this.glowBatch = this.makeBatch(scene, glowGeo, glowMaterial, 5);
  }

  private makeBatch(
    scene: Scene,
    data: {
      geometry: PlaneGeometry;
      alpha: Float32Array;
      cell: Float32Array;
      alphaAttr: InstancedBufferAttribute;
      cellAttr: InstancedBufferAttribute;
    },
    material: ShaderMaterial,
    renderOrder: number,
  ): RenderBatch {
    const mesh = new InstancedMesh(data.geometry, material, TOTAL_CAP);
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    mesh.frustumCulled = false;
    mesh.count = 0;
    mesh.renderOrder = renderOrder;
    scene.add(mesh);
    return {
      mesh,
      matrices: mesh.instanceMatrix.array as Float32Array,
      alpha: data.alpha,
      cell: data.cell,
      alphaAttr: data.alphaAttr,
      cellAttr: data.cellAttr,
      cursor: 0,
    };
  }

  reset(): void {
    this.active.fill(0);
    this.poolCursor = 0;
    this.body.mesh.count = 0;
    this.glowBatch.mesh.count = 0;
  }

  isReady(_theme: TechniqueTheme): boolean {
    return this.loaded;
  }

  spawn(
    theme: TechniqueTheme,
    x: number,
    y: number,
    z: number,
    theta: number,
    scaleX: number,
    scaleZ: number,
    duration = 0.28,
    alpha = 0.95,
    glow = 0.08,
    spin = 0,
    growth = 0.1,
  ): void {
    const i = this.poolCursor;
    this.poolCursor = (i + 1) % ONE_SHOT_CAP;
    this.active[i] = 1;
    this.theme[i] = THEME_IDS[theme] - 1;
    this.age[i] = 0;
    this.duration[i] = Math.max(0.06, duration);
    this.x[i] = x;
    this.y[i] = y;
    this.z[i] = z;
    this.theta[i] = theta;
    this.scaleX[i] = scaleX;
    this.scaleZ[i] = scaleZ;
    this.alpha[i] = alpha;
    this.glow[i] = glow;
    this.spin[i] = spin;
    this.growth[i] = growth;
  }

  update(dt: number): void {
    this.time += dt;
    for (let i = 0; i < ONE_SHOT_CAP; i++) {
      if (this.active[i] === 0) continue;
      this.age[i] += dt;
      if (this.age[i] >= this.duration[i]) this.active[i] = 0;
    }
  }

  begin(): void {
    this.body.cursor = 0;
    this.glowBatch.cursor = 0;
    if (!this.loaded) return;
    for (let i = 0; i < ONE_SHOT_CAP; i++) {
      if (this.active[i] === 0) continue;
      const t = Math.min(0.9999, this.age[i] / this.duration[i]);
      const fadeIn = Math.min(1, t * 12 + 0.16);
      const fadeOut = Math.min(1, (1 - t) * 3.4);
      const fade = fadeIn * fadeOut * this.alpha[i];
      const scale = 1 + this.growth[i] * t;
      const theme = TECHNIQUE_THEMES[this.theme[i]];
      this.push(
        theme,
        this.x[i],
        this.y[i],
        this.z[i],
        this.theta[i] + this.spin[i] * this.age[i],
        this.scaleX[i] * scale,
        this.scaleZ[i] * scale,
        fade,
        this.glow[i],
        Math.floor(t * FRAMES_PER_THEME),
      );
    }
  }

  push(
    theme: TechniqueTheme,
    x: number,
    y: number,
    z: number,
    theta: number,
    scaleX: number,
    scaleZ: number,
    alpha = 1,
    glow = 0.06,
    frame = Math.floor(this.time * TECHNIQUE_VISUALS[theme].fps) % FRAMES_PER_THEME,
  ): boolean {
    if (!this.loaded || this.body.cursor >= TOTAL_CAP) return false;
    const atlasCell = cellFor(theme, frame);
    this.write(this.body, x, y, z, theta, scaleX, scaleZ, alpha, atlasCell);
    if (glow > 0.001 && this.glowBatch.cursor < TOTAL_CAP) {
      this.write(
        this.glowBatch,
        x,
        y - 0.018,
        z,
        theta,
        scaleX * 1.075,
        scaleZ * 1.075,
        Math.min(0.18, glow) * alpha,
        atlasCell,
      );
    }
    return true;
  }

  private write(
    batch: RenderBatch,
    x: number,
    y: number,
    z: number,
    theta: number,
    scaleX: number,
    scaleZ: number,
    alpha: number,
    atlasCell: number,
  ): void {
    const i = batch.cursor++;
    writeMatrix(batch.matrices, i, x, y, z, theta, scaleX, scaleZ);
    batch.alpha[i] = alpha;
    batch.cell[i] = atlasCell;
  }

  end(): void {
    this.finishBatch(this.body);
    this.finishBatch(this.glowBatch);
  }

  private finishBatch(batch: RenderBatch): void {
    batch.mesh.count = batch.cursor;
    batch.mesh.instanceMatrix.needsUpdate = true;
    batch.alphaAttr.needsUpdate = true;
    batch.cellAttr.needsUpdate = true;
  }
}

function writeMatrix(
  out: Float32Array,
  index: number,
  x: number,
  y: number,
  z: number,
  theta: number,
  scaleX: number,
  scaleZ: number,
): void {
  const m = index * 16;
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  out[m] = ct * scaleX;
  out[m + 1] = 0;
  out[m + 2] = -st * scaleX;
  out[m + 3] = 0;
  out[m + 4] = 0;
  out[m + 5] = 1;
  out[m + 6] = 0;
  out[m + 7] = 0;
  out[m + 8] = st * scaleZ;
  out[m + 9] = 0;
  out[m + 10] = ct * scaleZ;
  out[m + 11] = 0;
  out[m + 12] = x;
  out[m + 13] = y;
  out[m + 14] = z;
  out[m + 15] = 1;
}
