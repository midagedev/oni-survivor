import {
  Mesh,
  MeshBasicMaterial,
  NearestFilter,
  NormalBlending,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  Texture,
  TextureLoader,
} from 'three';

export const ATTACK_SPEAR = 0;
export const ATTACK_GUANDAO = 1;
export const ATTACK_ZHANGBA = 2;
export const ATTACK_HALBERD = 3;
export type AttackSpriteKind = 0 | 1 | 2 | 3;

interface AttackSlot {
  mesh: Mesh;
  material: MeshBasicMaterial;
  age: number;
  duration: number;
  scaleX: number;
  scaleZ: number;
  active: boolean;
}

const NAMES = ['attack-spear', 'attack-guandao', 'attack-zhangba', 'attack-halberd'] as const;

function loadTexture(name: string): Texture {
  const texture = new TextureLoader().load(`${import.meta.env.BASE_URL}assets/projectiles/${name}.png`);
  texture.colorSpace = SRGBColorSpace;
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.generateMipmaps = false;
  return texture;
}

// 근접 기본 공격의 생성 도트 원화를 기존 Three.js 후광 위에 짧게 얹는다.
export class RetroAttackSpriteFx {
  private readonly pools: AttackSlot[][] = [[], [], [], []];
  private readonly cursors = new Uint8Array(4);

  constructor(scene: Scene) {
    const centered = new PlaneGeometry(1, 1);
    centered.rotateX(-Math.PI * 0.5);
    const anchored = centered.clone();
    anchored.translate(0.5, 0, 0);
    for (let kind = 0; kind < 4; kind++) {
      const texture = loadTexture(NAMES[kind]);
      const geometry = kind === ATTACK_SPEAR ? anchored : centered;
      for (let i = 0; i < 8; i++) {
        const material = new MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0,
          blending: NormalBlending,
          depthWrite: false,
          depthTest: true,
          toneMapped: false,
        });
        const mesh = new Mesh(geometry, material);
        mesh.visible = false;
        mesh.frustumCulled = false;
        mesh.renderOrder = 5;
        scene.add(mesh);
        this.pools[kind].push({ mesh, material, age: 0, duration: 0.2, scaleX: 1, scaleZ: 1, active: false });
      }
    }
  }

  spawn(
    kind: AttackSpriteKind,
    x: number,
    z: number,
    dirX: number,
    dirZ: number,
    scaleX: number,
    scaleZ: number,
    duration: number,
  ): void {
    const pool = this.pools[kind];
    const cursor = this.cursors[kind];
    this.cursors[kind] = (cursor + 1) % pool.length;
    const slot = pool[cursor];
    slot.age = 0;
    slot.duration = duration;
    slot.scaleX = scaleX;
    slot.scaleZ = scaleZ;
    slot.active = true;
    slot.mesh.visible = true;
    slot.mesh.position.set(x, 0.72, z);
    slot.mesh.rotation.y = Math.atan2(-dirZ, dirX);
    slot.mesh.scale.set(scaleX * 0.88, 1, scaleZ * 0.88);
    slot.material.opacity = 1;
  }

  update(dt: number): void {
    for (const pool of this.pools) {
      for (const slot of pool) {
        if (!slot.active) continue;
        slot.age += dt;
        const t = slot.age / slot.duration;
        if (t >= 1) {
          slot.active = false;
          slot.mesh.visible = false;
          continue;
        }
        const ease = 1 - (1 - t) * (1 - t);
        const scale = 0.88 + ease * 0.16;
        slot.mesh.scale.set(slot.scaleX * scale, 1, slot.scaleZ * scale);
        slot.material.opacity = Math.min(1, (1 - t) * 1.7);
      }
    }
  }
}
