import {
  AdditiveBlending,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  DynamicDrawUsage,
  InstancedBufferAttribute,
  InstancedMesh,
  OctahedronGeometry,
  PlaneGeometry,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LIGHT_PARS_FRAG, LIGHT_PARS_VERT, type LightUniforms } from './lightField';
import type { TechniqueTheme } from './techniqueSprites';

export type TechniqueProjection = 'ribbon' | 'head' | 'impact';

// Generated technique art remains the hero layer. This instanced, depth-safe geometry adds
// just enough parallax and surface response for a top-down camera without becoming a second body.
export class TechniqueAccentBatch {
  private readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private readonly colors: Float32Array;
  private readonly fades: Float32Array;
  private readonly colorAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly capacity: number;
  private write = 0;

  constructor(
    scene: Scene,
    geometry: BufferGeometry,
    capacity: number,
    light: LightUniforms,
    projection: TechniqueProjection,
  ) {
    this.capacity = capacity;
    // Moving heads lift toward the camera; impact geometry stays planted; ribbons skim the floor.
    if (projection === 'head') {
      geometry.rotateZ(-0.11);
      geometry.translate(0.1, 0.18, 0);
    } else if (projection === 'impact') {
      geometry.translate(0, 0.055, 0);
    } else {
      geometry.translate(0, 0.11, 0);
    }

    this.colors = new Float32Array(capacity * 3);
    this.fades = new Float32Array(capacity);
    this.colorAttr = new InstancedBufferAttribute(this.colors, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fades, 1);
    this.colorAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geometry.setAttribute('aColor', this.colorAttr);
    geometry.setAttribute('aFade', this.fadeAttr);

    const material = new ShaderMaterial({
      uniforms: { ...light },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        ${LIGHT_PARS_VERT}
        void main() {
          vColor = aColor;
          vFade = aFade;
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.68 + 0.32 * abs(dot(n, normalize(vec3(0.32, 0.88, 0.34))));
          vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vWorldXZ = world.xz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        ${LIGHT_PARS_FRAG}
        void main() {
          vec3 localLight = sampleLights();
          vec3 color = vColor * (0.82 + vShade * 0.34) + localLight * 0.08;
          gl_FragColor = vec4(color, clamp(vFade, 0.0, 1.0));
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      toneMapped: true,
    });

    this.mesh = new InstancedMesh(geometry, material, capacity);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = projection === 'head' ? 5 : 4;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.write = 0;
  }

  push(
    x: number,
    y: number,
    z: number,
    theta: number,
    sx: number,
    sy: number,
    sz: number,
    r: number,
    g: number,
    b: number,
    fade: number,
  ): void {
    if (this.write >= this.capacity) return;
    const i = this.write++;
    const m = i * 16;
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    this.matrices[m] = ct * sx;
    this.matrices[m + 1] = 0;
    this.matrices[m + 2] = -st * sx;
    this.matrices[m + 3] = 0;
    this.matrices[m + 4] = 0;
    this.matrices[m + 5] = sy;
    this.matrices[m + 6] = 0;
    this.matrices[m + 7] = 0;
    this.matrices[m + 8] = st * sz;
    this.matrices[m + 9] = 0;
    this.matrices[m + 10] = ct * sz;
    this.matrices[m + 11] = 0;
    this.matrices[m + 12] = x;
    this.matrices[m + 13] = y;
    this.matrices[m + 14] = z;
    this.matrices[m + 15] = 1;
    const c = i * 3;
    this.colors[c] = r;
    this.colors[c + 1] = g;
    this.colors[c + 2] = b;
    this.fades[i] = fade;
  }

  end(): void {
    this.mesh.count = this.write;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
  }
}

const TRAIL_STYLE: Record<TechniqueTheme, number> = {
  water: 0,
  love: 0,
  flower: 0,
  flame: 1,
  thunder: 1,
  butterfly: 1,
  mist: 2,
  wind: 3,
  sun: 4,
  blood: 4,
  beast: 4,
  sound: 4,
  stone: 4,
};

const TRAIL_COLOR: Record<TechniqueTheme, readonly [number, number, number]> = {
  water: [0.3, 1.15, 2.25],
  flame: [2.55, 0.68, 0.14],
  sun: [2.6, 1.05, 0.2],
  thunder: [2.5, 2.05, 0.38],
  love: [2.25, 0.58, 1.35],
  butterfly: [1.45, 0.58, 2.2],
  flower: [2.05, 0.58, 1.0],
  beast: [0.82, 1.28, 1.62],
  blood: [2.35, 0.34, 0.82],
  mist: [0.78, 1.28, 1.5],
  wind: [0.42, 1.46, 0.72],
  sound: [1.9, 1.2, 0.4],
  stone: [1.16, 0.88, 0.48],
};

// One draw call for all path accents. The shader changes its silhouette per theme family while
// every segment remains aligned to the actual previous/current projectile positions.
export class TechniqueTrailBatch {
  private readonly mesh: InstancedMesh;
  private readonly matrices: Float32Array;
  private readonly colors: Float32Array;
  private readonly fades: Float32Array;
  private readonly styles: Float32Array;
  private readonly phases: Float32Array;
  private readonly colorAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly styleAttr: InstancedBufferAttribute;
  private readonly phaseAttr: InstancedBufferAttribute;
  private readonly capacity: number;
  private write = 0;

  constructor(scene: Scene, capacity: number) {
    this.capacity = capacity;
    const geometry = new PlaneGeometry(1, 1, 1, 1);
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(0.5, 0, 0);
    this.colors = new Float32Array(capacity * 3);
    this.fades = new Float32Array(capacity);
    this.styles = new Float32Array(capacity);
    this.phases = new Float32Array(capacity);
    this.colorAttr = new InstancedBufferAttribute(this.colors, 3);
    this.fadeAttr = new InstancedBufferAttribute(this.fades, 1);
    this.styleAttr = new InstancedBufferAttribute(this.styles, 1);
    this.phaseAttr = new InstancedBufferAttribute(this.phases, 1);
    for (const attr of [this.colorAttr, this.fadeAttr, this.styleAttr, this.phaseAttr]) {
      attr.setUsage(DynamicDrawUsage);
    }
    geometry.setAttribute('aColor', this.colorAttr);
    geometry.setAttribute('aFade', this.fadeAttr);
    geometry.setAttribute('aStyle', this.styleAttr);
    geometry.setAttribute('aPhase', this.phaseAttr);

    const material = new ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aFade;
        attribute float aStyle;
        attribute float aPhase;
        varying vec2 vTrailUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vStyle;
        varying float vPhase;
        void main() {
          vTrailUv = uv;
          vColor = aColor;
          vFade = aFade;
          vStyle = aStyle;
          vPhase = aPhase;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vTrailUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vStyle;
        varying float vPhase;
        void main() {
          float x = vTrailUv.x;
          float y = vTrailUv.y;
          float enter = smoothstep(0.0, 0.08, x);
          float tail = pow(max(1.0 - x, 0.0), 0.72);
          float mask;
          if (vStyle < 0.5) {
            // Water/love/flower: a continuous calligraphic ribbon, not disconnected dots.
            float center = 0.5 + sin(x * 10.0 + vPhase) * 0.13 * (1.0 - x);
            float band = 1.0 - smoothstep(0.055, 0.2, abs(y - center));
            float foam = 1.0 - smoothstep(0.02, 0.075, abs(y - center - 0.16));
            mask = (band + foam * 0.38) * enter * tail;
          } else if (vStyle < 1.5) {
            // Flame/thunder/insect: narrow acceleration line with the energy concentrated at the head.
            float taper = mix(0.03, 0.18, x);
            float core = 1.0 - smoothstep(taper * 0.3, taper, abs(y - 0.5));
            float head = smoothstep(0.64, 0.98, x);
            mask = core * enter * (0.32 + head * 0.85);
          } else if (vStyle < 2.5) {
            // Mist: soft broken veils with deliberate gaps so collision remains legible.
            float veil = 1.0 - smoothstep(0.08, 0.34, abs(y - 0.5 - sin(x * 8.0 + vPhase) * 0.12));
            float breaks = smoothstep(0.15, 0.42, sin(x * 19.0 + vPhase * 1.7) * 0.5 + 0.5);
            mask = veil * breaks * enter * tail * 0.58;
          } else if (vStyle < 3.5) {
            // Wind: twin counter-flowing shear bands.
            float a = 1.0 - smoothstep(0.035, 0.11, abs(y - 0.37 - sin(x * 12.0 + vPhase) * 0.08));
            float b = 1.0 - smoothstep(0.035, 0.11, abs(y - 0.63 + sin(x * 12.0 + vPhase) * 0.08));
            mask = (a + b) * enter * tail * 0.72;
          } else {
            // Impact families: spaced pressure beats along the path, never a generic smoke ribbon.
            float pulse = pow(max(sin(x * 18.8496 + vPhase), 0.0), 5.0);
            float band = 1.0 - smoothstep(0.07, 0.28, abs(y - 0.5));
            mask = pulse * band * enter * tail * 0.65;
          }
          float alpha = clamp(mask * vFade, 0.0, 1.0);
          if (alpha < 0.012) discard;
          gl_FragColor = vec4(vColor * (0.72 + alpha * 0.42), alpha);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      toneMapped: true,
    });
    this.mesh = new InstancedMesh(geometry, material, capacity);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
    this.matrices = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);
  }

  begin(): void {
    this.write = 0;
  }

  push(
    theme: TechniqueTheme,
    x1: number,
    z1: number,
    x2: number,
    z2: number,
    width: number,
    alpha = 0.72,
    phase = 0,
    y = 0.34,
  ): void {
    if (this.write >= this.capacity) return;
    const dx = x2 - x1;
    const dz = z2 - z1;
    const length = Math.hypot(dx, dz);
    if (length < 0.02) return;
    const i = this.write++;
    const m = i * 16;
    const theta = Math.atan2(-dz, dx);
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    this.matrices[m] = ct * length;
    this.matrices[m + 1] = 0;
    this.matrices[m + 2] = -st * length;
    this.matrices[m + 3] = 0;
    this.matrices[m + 4] = 0;
    this.matrices[m + 5] = 1;
    this.matrices[m + 6] = 0;
    this.matrices[m + 7] = 0;
    this.matrices[m + 8] = st * width;
    this.matrices[m + 9] = 0;
    this.matrices[m + 10] = ct * width;
    this.matrices[m + 11] = 0;
    this.matrices[m + 12] = x1;
    this.matrices[m + 13] = y;
    this.matrices[m + 14] = z1;
    this.matrices[m + 15] = 1;
    const color = TRAIL_COLOR[theme];
    const c = i * 3;
    this.colors[c] = color[0];
    this.colors[c + 1] = color[1];
    this.colors[c + 2] = color[2];
    this.fades[i] = alpha;
    this.styles[i] = TRAIL_STYLE[theme];
    this.phases[i] = phase;
  }

  end(): void {
    this.mesh.count = this.write;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
    this.styleAttr.needsUpdate = true;
    this.phaseAttr.needsUpdate = true;
  }
}

function mergeAccentParts(parts: BufferGeometry[]): BufferGeometry {
  // Three's primitives are a mix of indexed and non-indexed geometry (notably PolyhedronGeometry).
  // Normalize them once at startup and keep only attributes the accent shader consumes.
  const compatible = parts.map((part) => {
    const geometry = part.index === null ? part : part.toNonIndexed();
    for (const name of Object.keys(geometry.attributes)) {
      if (name !== 'position' && name !== 'normal') geometry.deleteAttribute(name);
    }
    if (geometry.getAttribute('normal') === undefined) geometry.computeVertexNormals();
    return geometry;
  });
  const merged = mergeGeometries(compatible, false);
  if (merged === null) throw new Error('Technique accent geometry attributes are incompatible');
  return merged;
}

export function makeWaterRibbonAccentGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  const count = 9;
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const strip = new PlaneGeometry(0.23, 0.11 + t * 0.07);
    strip.rotateX(-Math.PI / 2);
    strip.rotateY(Math.cos(t * Math.PI * 1.35) * 0.28);
    strip.translate(-0.72 + t * 1.34, Math.sin(t * Math.PI) * 0.2, Math.sin(t * Math.PI * 1.35) * 0.28);
    parts.push(strip);
  }
  const crest = new RingGeometry(0.16, 0.28, 14, 1, -1.05, 2.15);
  crest.rotateX(-Math.PI / 2);
  crest.rotateY(-0.26);
  crest.translate(0.72, 0.2, 0.08);
  parts.push(crest);
  return mergeAccentParts(parts);
}

export function makeFlameHeadAccentGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  const core = new ConeGeometry(0.18, 0.76, 6);
  core.rotateZ(-Math.PI / 2);
  core.translate(0.48, 0.1, 0);
  parts.push(core);
  for (let i = 0; i < 4; i++) {
    const tongue = new ConeGeometry(0.055 + i * 0.012, 0.42 + i * 0.08, 5);
    tongue.rotateZ(Math.PI / 2);
    tongue.rotateX((i - 1.5) * 0.16);
    tongue.translate(-0.02 - i * 0.18, 0.04 + (i % 2) * 0.08, (i - 1.5) * 0.12);
    parts.push(tongue);
  }
  return mergeAccentParts(parts);
}

export function makeButterflyNeedleAccentGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  const shaft = new CylinderGeometry(0.018, 0.045, 1.25, 5);
  shaft.rotateZ(-Math.PI / 2);
  shaft.translate(0.1, 0.08, 0);
  parts.push(shaft);
  const tip = new ConeGeometry(0.075, 0.38, 6);
  tip.rotateZ(-Math.PI / 2);
  tip.translate(0.86, 0.08, 0);
  parts.push(tip);
  for (const side of [-1, 1]) {
    const wing = new RingGeometry(0.12, 0.3, 12, 1, -1.1, 2.2);
    wing.rotateX(-Math.PI / 2);
    wing.rotateY(side * 0.36);
    wing.translate(-0.24, 0.13, side * 0.24);
    parts.push(wing);
  }
  return mergeAccentParts(parts);
}

export function makeFlowerPetalArcGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  for (let i = 0; i < 5; i++) {
    const angle = -0.8 + i * 0.4;
    const petal = new RingGeometry(0.16, 0.38, 12, 1, -0.95, 1.9);
    petal.rotateX(-Math.PI / 2);
    petal.rotateY(angle + 0.15);
    petal.translate(-0.18 + Math.cos(angle) * 0.5, 0.04 + i * 0.035, Math.sin(angle) * 0.52);
    parts.push(petal);
  }
  const slash = new RingGeometry(0.56, 0.66, 24, 1, -0.82, 1.64);
  slash.rotateX(-Math.PI / 2);
  slash.translate(0.12, 0.12, 0);
  parts.push(slash);
  return mergeAccentParts(parts);
}

export function makeMistRibbonGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  for (let i = 0; i < 6; i++) {
    const strip = new PlaneGeometry(0.52 - i * 0.035, 0.08 + (i % 2) * 0.055);
    strip.rotateX(-Math.PI / 2);
    strip.rotateY((i % 2 === 0 ? 1 : -1) * (0.12 + i * 0.025));
    strip.translate(-0.62 + i * 0.24, 0.03 + i * 0.035, (i - 2.5) * 0.13);
    parts.push(strip);
  }
  return mergeAccentParts(parts);
}

export function makeWindBandGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  for (let i = 0; i < 3; i++) {
    const band = new RingGeometry(0.34 + i * 0.2, 0.42 + i * 0.2, 20, 1, -1.16 + i * 0.18, 2.3 - i * 0.12);
    band.rotateX(-Math.PI / 2);
    band.rotateY((i - 1) * 0.22);
    band.translate(0.08 + i * 0.12, 0.05 + i * 0.06, (i - 1) * 0.13);
    parts.push(band);
  }
  const edge = new ConeGeometry(0.06, 0.58, 5);
  edge.rotateZ(-Math.PI / 2);
  edge.translate(0.8, 0.13, -0.12);
  parts.push(edge);
  return mergeAccentParts(parts);
}

export function makeSoundBurstGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  for (let i = 0; i < 3; i++) {
    const ring = new RingGeometry(0.22 + i * 0.25, 0.27 + i * 0.25, 24);
    ring.rotateX(-Math.PI / 2);
    ring.translate(0, i * 0.06, 0);
    parts.push(ring);
  }
  for (let i = 0; i < 6; i++) {
    const angle = i / 6 * Math.PI * 2;
    const spike = new ConeGeometry(0.055, 0.38, 5);
    spike.rotateZ(-Math.PI / 2);
    spike.rotateY(angle);
    spike.translate(Math.cos(angle) * 0.83, 0.14, Math.sin(angle) * 0.83);
    parts.push(spike);
  }
  return mergeAccentParts(parts);
}

export function makeStoneImpactGeometry(): BufferGeometry {
  const parts: BufferGeometry[] = [];
  const head = new OctahedronGeometry(0.32, 0);
  head.scale(1.15, 0.9, 1.05);
  head.translate(0.5, 0.3, 0);
  parts.push(head);
  for (let i = 0; i < 5; i++) {
    const link = new SphereGeometry(0.065, 5, 4);
    link.scale(1.25, 0.7, 0.75);
    link.translate(0.18 - i * 0.19, 0.15 + Math.sin(i * 0.9) * 0.08, Math.sin(i * 1.4) * 0.11);
    parts.push(link);
  }
  const ground = new RingGeometry(0.33, 0.43, 16);
  ground.rotateX(-Math.PI / 2);
  ground.translate(0.5, 0.025, 0);
  parts.push(ground);
  return mergeAccentParts(parts);
}
