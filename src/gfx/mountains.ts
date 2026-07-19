import {
  Group,
  BufferGeometry,
  Float32BufferAttribute,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  CylinderGeometry,
  CanvasTexture,
  RepeatWrapping,
  ClampToEdgeWrapping,
  SRGBColorSpace,
  Color,
} from 'three';
import { Rng } from '../core/rng';

function makeRidgeProfile(rng: Rng, octaves: number): (theta: number) => number {
  const harm: { freq: number; amp: number; phase: number }[] = [];
  for (let o = 0; o < octaves; o++) {
    harm.push({
      freq: 2 + o * 3 + rng.int(3), // 0, 1, or 2
      amp: Math.pow(0.62, o) * rng.range(0.7, 1.0),
      phase: rng.range(0, Math.PI * 2),
    });
  }
  let peak = 0;
  for (const h of harm) peak += h.amp;
  return (theta: number) => {
    let v = 0;
    for (const h of harm) v += h.amp * Math.sin(h.freq * theta + h.phase);
    const n = (v / peak) * 0.5 + 0.5;
    return Math.pow(n, 1.15);
  };
}

function buildRidgeLayer(
  radius: number,
  crestBase: number,
  crestSpan: number,
  profile: (theta: number) => number,
  segments: number,
): { mesh: Mesh; mat: MeshBasicMaterial } {
  const skirtY = -40;
  const pos: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const th = t * Math.PI * 2;
    const x = Math.cos(th) * radius;
    const z = Math.sin(th) * radius;
    const topY = crestBase + profile(th) * crestSpan;
    pos.push(x, skirtY, z); // bottom
    pos.push(x, topY, z);   // top
  }
  for (let i = 0; i < segments; i++) {
    const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
    idx.push(a, c, b, b, c, d);
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mat = new MeshBasicMaterial({ side: DoubleSide, fog: true });
  const mesh = new Mesh(geo, mat);
  mesh.name = 'ridge';
  return { mesh, mat };
}

function makeMistTexture(): CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0.0, 'rgba(255,255,255,0)');
  grad.addColorStop(0.42, 'rgba(255,255,255,0.95)');
  grad.addColorStop(0.62, 'rgba(255,255,255,1)');
  grad.addColorStop(1.0, 'rgba(255,255,255,0.55)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 128);
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 26; i++) {
    const x = Math.random() * 512;
    const y = 20 + Math.random() * 70;
    const rr = 24 + Math.random() * 60;
    const rg = g.createRadialGradient(x, y, 0, x, y, rr);
    rg.addColorStop(0, `rgba(0,0,0,${0.15 + Math.random() * 0.3})`);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = rg;
    g.beginPath(); g.arc(x, y, rr, 0, Math.PI * 2); g.fill();
  }
  const tex = new CanvasTexture(c);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.repeat.set(4, 1);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function buildMistBand(
  radius: number,
  yCenter: number,
  halfHeight: number,
  tex: CanvasTexture,
): { mesh: Mesh; mat: MeshBasicMaterial } {
  const geo = new CylinderGeometry(radius, radius, halfHeight * 2, 96, 1, true);
  const mat = new MeshBasicMaterial({
    map: tex, transparent: true, side: DoubleSide,
    depthWrite: false, fog: true, opacity: 0.85,
  });
  const mesh = new Mesh(geo, mat);
  mesh.position.y = yCenter;
  mesh.name = 'mist';
  mesh.renderOrder = 2;
  return { mesh, mat };
}

export class Mountains {
  readonly group: Group;
  private readonly layers: { mesh: Mesh; mat: MeshBasicMaterial }[] = [];
  private readonly mists: { mesh: Mesh; mat: MeshBasicMaterial }[] = [];

  constructor(seed = 91117) {
    this.group = new Group();
    this.group.name = 'mountains';

    const specs = [
      { r: 168, base: 12, span: 26, oct: 6 },
      { r: 232, base: 20, span: 34, oct: 5 },
      { r: 305, base: 30, span: 46, oct: 5 },
      { r: 388, base: 44, span: 60, oct: 4 },
      { r: 470, base: 60, span: 80, oct: 4 },
    ];

    specs.forEach((s, i) => {
      const rng = new Rng(seed + i * 1013);
      const profile = makeRidgeProfile(rng, s.oct);
      const L = buildRidgeLayer(s.r, s.base, s.span, profile, 160);
      L.mesh.renderOrder = -10 + i;
      this.group.add(L.mesh);
      this.layers.push(L);
    });

    const mistTex = makeMistTexture();
    this.mists = [
      buildMistBand(190, 26, 18, mistTex),
      buildMistBand(300, 44, 24, mistTex.clone() as CanvasTexture),
    ];
    this.mists.forEach((m) => this.group.add(m.mesh));
  }

  setPalette(nearHex: number, farHex: number, mistHex: number, mistOpacity: number): void {
    const near = new Color(nearHex);
    const far = new Color(farHex);
    this.layers.forEach((L, i) => {
      const t = this.layers.length > 1 ? i / (this.layers.length - 1) : 0;
      L.mat.color.copy(near).lerp(far, t);
    });
    const mc = new Color(mistHex);
    this.mists.forEach((m, i) => {
      m.mat.color.copy(mc);
      m.mat.opacity = mistOpacity * (i === 0 ? 1 : 0.85);
    });
  }
}
