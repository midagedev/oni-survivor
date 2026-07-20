import {
  Scene,
  PlaneGeometry,
  InstancedMesh,
  InstancedBufferAttribute,
  ShaderMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
} from 'three';
import { ENEMY_CAP, type EnemyPool } from './enemies';
import { distToSegmentSq, type SpatialHash } from './collision';
import type { DamageText } from '../gfx/damageText';
import type { ParticleSystem } from '../gfx/particles';
import type { EffectsSystem } from '../gfx/effects';
import {
  TECHNIQUE_VISUALS,
  techniqueThemeFromId,
  techniqueThemeId,
  type TechniqueSpriteRenderer,
  type TechniqueTheme,
} from '../gfx/techniqueSprites';
import {
  ArrowMeshBatch,
  GlowMeshBatch,
  makeSlashGeometry,
  makeOrbGeometry,
  makeCrystalGeometry,
  makeCavalryGeometry,
  makeWaterStreamGeometry,
  makeButterflyGeometry,
  makeFlameDragonGeometry,
  makeCompassGeometry,
  makeThornGeometry,
  makeBloodLotusGeometry,
} from '../gfx/meshProjectiles';
import type { LightUniforms } from '../gfx/lightField';
import { resolvedDamage } from './damagePolicy';

const CAP = 384;
const HITMAX = 16; // 관통 시 중복 타격 방지용 최근 타격 목록 크기
const POISON_DURATION = 3;
const POISON_TICK = 0.5;
const POISON_STACK_MAX = 4;

// 시각 종류 — 0~5는 후광 셰이더가 kind 분기로 직접 처리, 6+는 캐릭터 시그니처 3D 메시.
export const PK_ARROW = 0;
export const PK_TALISMAN = 1;
export const PK_SLASHWAVE = 2;
export const PK_ORB = 3;
export const PK_CAVALRY = 4;
export const PK_FIRE_ARROW = 5; // 원융노(진화) 화염 화살
// 귀멸 캐릭터 시그니처 투사체 메시 (meshProjectiles 지오메트리 연결)
export const PK_WATER = 6; // 물의 호흡 — 유선형 물결 참격파 (탄지로/기유)
export const PK_BUTTERFLY = 7; // 벌레의 호흡 — 팔랑이는 독나비 (시노부/카나오)
export const PK_FLAME = 8; // 화염의 호흡 — 불꽃 용 아크 돌격 (쿄쥬로)
export const PK_COMPASS = 9; // 파괴살 — 나침반 충격파 링 (아카자계)
export const PK_THORN = 10; // 등꽃/사랑 — 회전하는 등가시 결정 (미츠리)
export const PK_LOTUS = 11; // 혈귀술 — 핏빛 연꽃 결정 (네즈코/유도 꽃망울)

// 플레이어 투사체 풀. SoA 시뮬 + 지면정렬 발광 쿼드 InstancedMesh 렌더.
// 관통/유도/궤도(팔진도)/기마(서량철기) 모드를 하나로 처리.
export class ProjectilePool {
  private readonly x = new Float32Array(CAP);
  private readonly z = new Float32Array(CAP);
  // 고속 투사체의 스윕 판정·거리 기반 잔상을 위한 직전 위치.
  private readonly prevX = new Float32Array(CAP);
  private readonly prevZ = new Float32Array(CAP);
  private readonly vx = new Float32Array(CAP);
  private readonly vz = new Float32Array(CAP);
  private readonly life = new Float32Array(CAP);
  private readonly invDur = new Float32Array(CAP);
  private readonly damage = new Float32Array(CAP);
  private readonly radius = new Float32Array(CAP);
  private readonly pierce = new Int16Array(CAP);
  private readonly homing = new Uint8Array(CAP);
  private readonly turn = new Float32Array(CAP);
  private readonly kind = new Uint8Array(CAP);
  private readonly cr = new Float32Array(CAP);
  private readonly cg = new Float32Array(CAP);
  private readonly cb = new Float32Array(CAP);
  private readonly len = new Float32Array(CAP);
  private readonly wid = new Float32Array(CAP);
  private readonly hy = new Float32Array(CAP);
  private readonly mode = new Uint8Array(CAP); // 0 직진 / 1 궤도
  private readonly oAng = new Float32Array(CAP);
  private readonly oRad = new Float32Array(CAP);
  private readonly oVel = new Float32Array(CAP);
  private readonly atkT = new Float32Array(CAP);
  private readonly dusty = new Uint8Array(CAP);
  private readonly technique = new Uint8Array(CAP);
  private readonly trailT = new Float32Array(CAP);
  private readonly trailDistance = new Float32Array(CAP);
  private readonly poisonPower = new Float32Array(CAP);
  private readonly alive = new Uint8Array(CAP);
  private readonly hits = new Int32Array(CAP * HITMAX);
  private readonly hitN = new Uint8Array(CAP);
  private readonly free = new Int32Array(CAP);
  private freeTop = 0;

  // 벌레의 호흡 독은 적 풀을 수정하지 않고 이 시스템이 소유한다. 적 슬롯이 죽는 즉시
  // 상태를 비워 재사용된 슬롯에 독이 새어 들어가지 않게 한다.
  private readonly poisonTimer = new Float32Array(ENEMY_CAP);
  private readonly poisonTick = new Float32Array(ENEMY_CAP);
  private readonly poisonStacks = new Uint8Array(ENEMY_CAP);
  private readonly poisonBase = new Float32Array(ENEMY_CAP);

  private readonly mesh: InstancedMesh;
  private readonly matArr: Float32Array;
  private readonly colArr: Float32Array;
  private readonly kindArr: Float32Array;
  private readonly fadeArr: Float32Array;
  private readonly colAttr: InstancedBufferAttribute;
  private readonly kindAttr: InstancedBufferAttribute;
  private readonly fadeAttr: InstancedBufferAttribute;
  private readonly arrows: ArrowMeshBatch;
  private readonly slashes: GlowMeshBatch;
  private readonly orbs: GlowMeshBatch;
  private readonly crystals: GlowMeshBatch;
  private readonly cavalries: GlowMeshBatch;
  // 귀멸 캐릭터 시그니처 투사체 메시 배치
  private readonly waters: GlowMeshBatch;
  private readonly butterflies: GlowMeshBatch;
  private readonly flames: GlowMeshBatch;
  private readonly compasses: GlowMeshBatch;
  private readonly thorns: GlowMeshBatch;
  private readonly lotuses: GlowMeshBatch;
  private readonly sigBatches: GlowMeshBatch[]; // begin/end 일괄 처리용

  constructor(scene: Scene, light: LightUniforms) {
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;

    const geo = new PlaneGeometry(1, 1, 1, 1);
    geo.rotateX(-Math.PI / 2); // XZ 평면에 눕힘 (중심 원점)
    this.colArr = new Float32Array(CAP * 3);
    this.kindArr = new Float32Array(CAP);
    this.fadeArr = new Float32Array(CAP);
    this.colAttr = new InstancedBufferAttribute(this.colArr, 3);
    this.kindAttr = new InstancedBufferAttribute(this.kindArr, 1);
    this.fadeAttr = new InstancedBufferAttribute(this.fadeArr, 1);
    this.colAttr.setUsage(DynamicDrawUsage);
    this.fadeAttr.setUsage(DynamicDrawUsage);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aKind', this.kindAttr);
    geo.setAttribute('aFade', this.fadeAttr);

    const mat = new ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aKind;
        attribute float aFade;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vec2 p = vUv - 0.5;
          float along = vUv.x;      // 0..1 (진행 방향 +X)
          float across = abs(p.y) * 2.0;
          float b = 0.0;
          if (vKind < 0.5) {
            // 화살: 뾰족한 머리 + 꼬리 스트릭
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          } else if (vKind < 1.5) {
            // 부적: 부드러운 발광 블롭 + 짧은 꼬리 + 룬 깜빡임
            float blob = smoothstep(0.6, 0.0, length(p));
            float tailg = smoothstep(0.0, 0.6, along) * smoothstep(1.0, 0.4, across);
            float flick = 0.75 + 0.25 * sin(uTime * 20.0 + vUv.x * 6.0);
            b = (blob + tailg * 0.4) * flick;
          } else if (vKind < 2.5) {
            // 참격파: 넓은 크레센트 밴드
            float band = smoothstep(1.0, 0.2, across) * smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.8, 1.0, along));
            b = band * 1.2;
          } else if (vKind < 3.5) {
            // 태극 오브: 이중 소용돌이 발광 구슬
            float r = length(p) * 2.0;
            float disc = smoothstep(1.0, 0.0, r);
            float swirl = 0.5 + 0.5 * sin(atan(p.y, p.x) * 2.0 + uTime * 6.0 + r * 4.0);
            b = disc * (0.6 + 0.5 * swirl);
          } else if (vKind < 4.5) {
            // 기마 돌격: 길고 강한 스트릭
            float body = smoothstep(1.0, 0.2, across);
            float streak = smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.7, 1.0, along) * 0.5);
            b = body * streak * 1.3;
          } else {
            // 화염 화살(원융노): 화살형 후광
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          }
          if (b <= 0.001) discard;
          // 생성 스프라이트가 본체를 담당한다. 이 셰이더는 뒤쪽 후광/속도선만 얇게 맡는다.
          // 강도를 낮춰 전방위 다발 무기(뇌·화·음·암)가 중심에서 후광을 겹쳐도
          // 별 모양으로 화이트아웃되지 않게 한다(additive 중첩 완화).
          gl_FragColor = vec4(vColor * b * 0.13, b * vFade * 0.07);
        }
      `,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.mesh = new InstancedMesh(geo, mat, CAP);
    this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.renderOrder = 4;
    this.matArr = this.mesh.instanceMatrix.array as Float32Array;
    scene.add(this.mesh);

    // 화살 계열은 스프라이트 대신 진짜 3D 메시로(부피감 + 광원 수광).
    this.arrows = new ArrowMeshBatch(scene, CAP, light);
    this.slashes = new GlowMeshBatch(scene, makeSlashGeometry(), CAP, light);
    this.orbs = new GlowMeshBatch(scene, makeOrbGeometry(), CAP, light);
    this.crystals = new GlowMeshBatch(scene, makeCrystalGeometry(), CAP, light);
    this.cavalries = new GlowMeshBatch(scene, makeCavalryGeometry(), CAP, light);
    // 귀멸 시그니처 메시: 각 무기가 캐릭터 호흡법에 맞는 3D 투사체를 발사.
    const SIG = 128; // 시그니처 투사체는 동시 상한이 낮아 별도 소형 풀
    this.waters = new GlowMeshBatch(scene, makeWaterStreamGeometry(), SIG, light);
    this.butterflies = new GlowMeshBatch(scene, makeButterflyGeometry(), SIG, light);
    this.flames = new GlowMeshBatch(scene, makeFlameDragonGeometry(), SIG, light);
    this.compasses = new GlowMeshBatch(scene, makeCompassGeometry(), SIG, light);
    this.thorns = new GlowMeshBatch(scene, makeThornGeometry(), SIG, light);
    this.lotuses = new GlowMeshBatch(scene, makeBloodLotusGeometry(), SIG, light);
    this.sigBatches = [this.waters, this.butterflies, this.flames, this.compasses, this.thorns, this.lotuses];
  }

  get object(): InstancedMesh {
    return this.mesh;
  }

  reset(): void {
    this.alive.fill(0);
    this.poisonTimer.fill(0);
    this.poisonTick.fill(0);
    this.poisonStacks.fill(0);
    this.poisonBase.fill(0);
    for (let i = 0; i < CAP; i++) this.free[i] = CAP - 1 - i;
    this.freeTop = CAP;
  }

  private acquire(): number {
    if (this.freeTop === 0) return -1;
    return this.free[--this.freeTop];
  }

  // 직진/유도 투사체 발사.
  spawn(
    x: number,
    z: number,
    dirX: number,
    dirZ: number,
    speed: number,
    damage: number,
    radius: number,
    pierce: number,
    life: number,
    kind: number,
    r: number,
    g: number,
    b: number,
    len: number,
    wid: number,
    homing = false,
    turn = 6,
    dusty = false,
    technique: TechniqueTheme | null = null,
    poisonPower = 0,
  ): void {
    const i = this.acquire();
    if (i < 0) return;
    this.x[i] = x;
    this.z[i] = z;
    this.prevX[i] = x;
    this.prevZ[i] = z;
    this.vx[i] = dirX * speed;
    this.vz[i] = dirZ * speed;
    this.life[i] = life;
    this.invDur[i] = 1 / life;
    this.damage[i] = damage;
    this.radius[i] = radius;
    this.pierce[i] = pierce;
    this.homing[i] = homing ? 1 : 0;
    this.turn[i] = turn;
    this.kind[i] = kind;
    this.cr[i] = r;
    this.cg[i] = g;
    this.cb[i] = b;
    this.len[i] = len;
    this.wid[i] = wid;
    this.hy[i] = kind === PK_SLASHWAVE ? 0.7 : kind === PK_ORB ? 0.9 : 1.0;
    this.mode[i] = 0;
    this.dusty[i] = dusty ? 1 : 0;
    this.technique[i] = techniqueThemeId(technique);
    this.trailT[i] = 0;
    this.trailDistance[i] = 0;
    this.poisonPower[i] = poisonPower;
    this.hitN[i] = 0;
    this.alive[i] = 1;
  }

  // 궤도 오브 (팔진도). 플레이어를 중심으로 공전.
  spawnOrbit(angle: number, radius: number, angVel: number, damage: number, r: number, g: number, b: number, size: number): void {
    const i = this.acquire();
    if (i < 0) return;
    this.mode[i] = 1;
    this.oAng[i] = angle;
    this.oRad[i] = radius;
    this.oVel[i] = angVel;
    this.damage[i] = damage;
    this.radius[i] = size * 0.6;
    this.kind[i] = PK_THORN; // 등꽃 수호구 — 회전하는 등가시 결정
    this.cr[i] = r;
    this.cg[i] = g;
    this.cb[i] = b;
    this.len[i] = size;
    this.wid[i] = size;
    this.hy[i] = 0.9;
    this.atkT[i] = 0;
    this.x[i] = 0;
    this.z[i] = 0;
    this.prevX[i] = 0;
    this.prevZ[i] = 0;
    this.life[i] = 1;
    this.invDur[i] = 0;
    this.dusty[i] = 0;
    this.technique[i] = 0;
    this.trailT[i] = 0;
    this.trailDistance[i] = 0;
    this.poisonPower[i] = 0;
    this.alive[i] = 1;
  }

  clearOrbits(): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 1 && this.mode[i] === 1) {
        this.alive[i] = 0;
        this.free[this.freeTop++] = i;
      }
    }
  }

  // 궤도 오브의 대미지/반경/각속도를 매 프레임 최신 스탯으로 갱신(각도는 유지).
  refreshOrbits(damage: number, radius: number, angVel: number): void {
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 1 && this.mode[i] === 1) {
        this.damage[i] = damage;
        this.oRad[i] = radius;
        this.oVel[i] = angVel;
      }
    }
  }

  countOrbits(): number {
    let n = 0;
    for (let i = 0; i < CAP; i++) if (this.alive[i] === 1 && this.mode[i] === 1) n++;
    return n;
  }

  private tryHit(
    i: number,
    enemies: EnemyPool,
    hash: SpatialHash,
    damageText: DamageText,
    onKill: (idx: number) => void,
    scratch: number[],
    orbitPulse: boolean,
    particles: ParticleSystem,
    effects: EffectsSystem,
  ): void {
    const px = this.x[i];
    const pz = this.z[i];
    const isOrbit = this.mode[i] === 1;
    const ax = isOrbit ? px : this.prevX[i];
    const az = isOrbit ? pz : this.prevZ[i];
    const travel = Math.hypot(px - ax, pz - az);
    const qx = (ax + px) * 0.5;
    const qz = (az + pz) * 0.5;
    const rq = this.radius[i] + 0.7 + travel * 0.5;
    const n = hash.query(qx, qz, rq, scratch);
    const base = i * HITMAX;
    for (let c = 0; c < n; c++) {
      const j = scratch[c];
      if (enemies.alive[j] === 0) continue;
      const dx = enemies.x[j] - px;
      const dz = enemies.z[j] - pz;
      const rr = this.radius[i] + enemies.radius[j];
      if (isOrbit) {
        if (dx * dx + dz * dz > rr * rr) continue;
      } else if (distToSegmentSq(enemies.x[j], enemies.z[j], ax, az, px, pz) > rr * rr) {
        continue;
      }
      if (isOrbit) {
        if (!orbitPulse) continue;
      } else {
        // 관통: 이미 때린 적 스킵
        let dup = false;
        const cnt = this.hitN[i];
        for (let h = 0; h < cnt; h++) {
          if (this.hits[base + h] === j) {
            dup = true;
            break;
          }
        }
        if (dup) continue;
        // 기록 상한 뒤에는 새 대상 피해도 멈춰 동일 슬롯이 겹친 적을 재타격하지 않게 한다.
        // 16명 관통이면 한 발의 군중 제어 역할은 충분하고 보스 TTK도 안정적이다.
        if (cnt >= HITMAX) continue;
        this.hits[base + this.hitN[i]++] = j;
      }
      const isBoss = enemies.boss[j] === 1;
      const dmg = resolvedDamage(
        this.damage[i], isBoss, enemies.groggy[j] === 1, isOrbit ? 'orbit' : 'projectile',
      );
      let died = enemies.damageAt(j, dmg);
      damageText.spawn(dmg, enemies.x[j], enemies.scale[j] * 0.7, enemies.z[j], false);
      const theme = techniqueThemeFromId(this.technique[i]);
      particles.projectileImpact(
        enemies.x[j], enemies.z[j], this.cr[i], this.cg[i], this.cb[i], this.kind[i], theme ?? undefined,
      );
      if (theme !== null) {
        const profile = TECHNIQUE_VISUALS[theme];
        effects.submitTechniqueLight?.(
          theme,
          enemies.x[j],
          enemies.z[j],
          Math.max(profile.lightRadius, this.radius[i] * 3.2),
          theme === 'thunder' ? 1.2 : 0.92,
          'impact',
          enemies.boss[j] === 1 ? 2.5 : 1.2,
        );
      }
      const kk = this.kind[i];
      if (kk === PK_SLASHWAVE || kk === PK_WATER) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 1.5, this.cr[i], this.cg[i], this.cb[i], 0.2);
      } else if (isOrbit && orbitPulse) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 0.75, this.cr[i], this.cg[i], this.cb[i], 0.18);
      } else if (kk === PK_CAVALRY || kk === PK_FLAME) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 1.9, 2.4, 0.9, 0.3, 0.24);
      } else if (kk === PK_COMPASS) {
        effects.spawnRing(enemies.x[j], enemies.z[j], 1.2, this.cr[i], this.cg[i], this.cb[i], 0.16);
      }
      // 벌레의 호흡: 찌르기 자체는 작고 빠르지만 3초 독이 중첩된다. 4중첩에 도달하면
      // 즉시 작은 독꽃이 피며 스택을 소모하므로 연사/보스전에서도 무한 누적하지 않는다.
      if (!died && this.poisonPower[i] > 0) {
        died = this.applyPoison(
          j, this.poisonPower[i], enemies, damageText, particles, effects,
        );
      }
      // 기술별 넉백: 화염 돌진=강하게 쓸어냄, 물/참격파=중간, 오브=접촉 시 살짝
      if (!died) {
        if (kk === PK_CAVALRY || kk === PK_FLAME || kk === PK_SLASHWAVE || kk === PK_WATER) {
          const sp = Math.hypot(this.vx[i], this.vz[i]) || 1;
          const strong = kk === PK_CAVALRY || kk === PK_FLAME;
          enemies.push(j, this.vx[i] / sp, this.vz[i] / sp, strong ? 7 : 3);
        } else if (isOrbit) {
          const dx = enemies.x[j] - px;
          const dz = enemies.z[j] - pz;
          const d = Math.hypot(dx, dz) || 1;
          enemies.push(j, dx / d, dz / d, 2);
        }
      }
      if (died) onKill(j);
      if (!isOrbit) {
        this.pierce[i]--;
        if (this.pierce[i] < 0) {
          this.kill(i);
          return;
        }
      }
    }
  }

  private applyPoison(
    enemy: number,
    power: number,
    enemies: EnemyPool,
    damageText: DamageText,
    particles: ParticleSystem,
    effects: EffectsSystem,
  ): boolean {
    this.poisonTimer[enemy] = POISON_DURATION;
    this.poisonTick[enemy] = this.poisonStacks[enemy] === 0
      ? POISON_TICK
      : Math.min(this.poisonTick[enemy], POISON_TICK);
    this.poisonBase[enemy] = Math.max(this.poisonBase[enemy], power);
    const stacks = Math.min(POISON_STACK_MAX, this.poisonStacks[enemy] + 1);
    this.poisonStacks[enemy] = stacks;
    particles.butterflyPoison(enemies.x[enemy], enemies.z[enemy], 2 + stacks);
    if (stacks < POISON_STACK_MAX) return false;

    const bloomRaw = this.poisonBase[enemy] * 0.7;
    const bloom = resolvedDamage(
      bloomRaw, enemies.boss[enemy] === 1, enemies.groggy[enemy] === 1, 'special',
    );
    const died = enemies.damageAt(enemy, bloom);
    damageText.spawn(bloom, enemies.x[enemy], enemies.scale[enemy] * 0.82, enemies.z[enemy], true);
    effects.spawnRing(enemies.x[enemy], enemies.z[enemy], 1.6, 1.45, 0.55, 2.2, 0.24);
    effects.spawnFlash(enemies.x[enemy], enemies.z[enemy], 1.35, 0.45, 2.1, 1.15);
    particles.butterflyPoison(enemies.x[enemy], enemies.z[enemy], 10);
    this.clearPoison(enemy);
    return died;
  }

  private clearPoison(enemy: number): void {
    this.poisonTimer[enemy] = 0;
    this.poisonTick[enemy] = 0;
    this.poisonStacks[enemy] = 0;
    this.poisonBase[enemy] = 0;
  }

  private updatePoison(
    dt: number,
    enemies: EnemyPool,
    damageText: DamageText,
    onKill: (idx: number) => void,
    particles: ParticleSystem,
  ): void {
    for (let j = 0; j < ENEMY_CAP; j++) {
      if (enemies.alive[j] === 0) {
        if (this.poisonTimer[j] > 0) this.clearPoison(j);
        continue;
      }
      if (this.poisonTimer[j] <= 0 || this.poisonStacks[j] === 0) continue;
      this.poisonTimer[j] -= dt;
      this.poisonTick[j] -= dt;
      if (this.poisonTick[j] > 0) {
        if (this.poisonTimer[j] <= 0) this.clearPoison(j);
        continue;
      }
      this.poisonTick[j] += POISON_TICK;
      const raw = this.poisonBase[j] * 0.12 * this.poisonStacks[j];
      const dealt = resolvedDamage(
        raw, enemies.boss[j] === 1, enemies.groggy[j] === 1, 'special',
      );
      const died = enemies.damageAt(j, dealt);
      damageText.spawn(dealt, enemies.x[j], enemies.scale[j] * 0.58, enemies.z[j], false);
      particles.butterflyPoison(enemies.x[j], enemies.z[j], Math.min(5, this.poisonStacks[j] + 1));
      if (died) {
        this.clearPoison(j);
        onKill(j);
      } else if (this.poisonTimer[j] <= 0) {
        this.clearPoison(j);
      }
    }
  }

  private kill(i: number): void {
    this.alive[i] = 0;
    this.free[this.freeTop++] = i;
  }

  update(
    dt: number,
    px: number,
    pz: number,
    enemies: EnemyPool,
    hash: SpatialHash,
    damageText: DamageText,
    onKill: (idx: number) => void,
    particles: ParticleSystem,
    effects: EffectsSystem,
    scratch: number[],
  ): void {
    this.updatePoison(dt, enemies, damageText, onKill, particles);
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      if (this.mode[i] === 1) {
        // 궤도 오브
        this.prevX[i] = this.x[i];
        this.prevZ[i] = this.z[i];
        this.oAng[i] += this.oVel[i] * dt;
        this.x[i] = px + Math.cos(this.oAng[i]) * this.oRad[i];
        this.z[i] = pz + Math.sin(this.oAng[i]) * this.oRad[i];
        this.atkT[i] -= dt;
        const pulse = this.atkT[i] <= 0;
        if (pulse) this.atkT[i] = 0.3;
        this.trailT[i] -= dt;
        if (this.trailT[i] <= 0) {
          particles.projectileTrail(
            this.x[i], this.z[i], 0, 0, this.cr[i], this.cg[i], this.cb[i], this.kind[i],
          );
          this.trailT[i] = 0.09;
        }
        this.tryHit(i, enemies, hash, damageText, onKill, scratch, pulse, particles, effects);
        this.submitMovingLight(i, effects);
        continue;
      }
      // 유도
      if (this.homing[i]) {
        const t = findNearest(enemies, hash, this.x[i], this.z[i], 9, scratch);
        if (t >= 0) {
          const dx = enemies.x[t] - this.x[i];
          const dz = enemies.z[t] - this.z[i];
          const d = Math.hypot(dx, dz) || 1;
          const sp = Math.hypot(this.vx[i], this.vz[i]);
          const k = Math.min(1, this.turn[i] * dt);
          this.vx[i] += (dx / d * sp - this.vx[i]) * k;
          this.vz[i] += (dz / d * sp - this.vz[i]) * k;
        }
      }
      this.prevX[i] = this.x[i];
      this.prevZ[i] = this.z[i];
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.submitMovingLight(i, effects);
      if (this.dusty[i]) particles.dust(this.x[i], this.z[i]);
      this.emitDistanceTrail(i, particles, effects);
      this.tryHit(i, enemies, hash, damageText, onKill, scratch, false, particles, effects);
      if (this.alive[i] === 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) this.kill(i);
    }
  }

  private submitMovingLight(i: number, effects: EffectsSystem): void {
    const theme = techniqueThemeFromId(this.technique[i]);
    if (theme === null) return;
    const profile = TECHNIQUE_VISUALS[theme];
    const radius = Math.min(
      9,
      Math.max(profile.lightRadius * 0.72, this.len[i] * 1.05, this.wid[i] * 2.4),
    );
    const intensity = theme === 'flame' || theme === 'thunder' || theme === 'sun'
      ? 0.86
      : theme === 'mist'
        ? 0.42
        : 0.62;
    effects.submitTechniqueLight?.(
      theme, this.x[i], this.z[i], radius, intensity, 'moving', this.mode[i] === 1 ? 0.6 : 0,
    );
  }

  // 시간 간격 대신 이동 거리를 기준으로 잔상을 찍는다. 저FPS에서도 궤적에 구멍이 생기지 않고,
  // 고FPS에서 같은 자리에 점이 과밀해지는 현상도 막는다.
  private emitDistanceTrail(i: number, particles: ParticleSystem, effects: EffectsSystem): void {
    const ax = this.prevX[i];
    const az = this.prevZ[i];
    const bx = this.x[i];
    const bz = this.z[i];
    const dx = bx - ax;
    const dz = bz - az;
    const moved = Math.hypot(dx, dz);
    if (moved <= 0.0001) return;
    const kk = this.kind[i];
    const theme = techniqueThemeFromId(this.technique[i]);
    if (theme !== null) {
      effects.spawnTechniqueTrail(
        theme, ax, az, bx, bz,
        Math.max(0.32, this.wid[i] * 0.68),
        theme === 'mist' ? 0.34 : theme === 'butterfly' ? 0.48 : 0.62,
        i * 1.73 + this.life[i] * 7.5,
        Math.max(0.28, this.hy[i] - 0.55),
      );
    }
    const spacing = kk === PK_FLAME || kk === PK_CAVALRY
      ? 0.48
      : kk === PK_ARROW || kk === PK_FIRE_ARROW
        ? 0.88
        : kk === PK_BUTTERFLY
          ? 0.7
          : kk === PK_SLASHWAVE || kk === PK_WATER
            ? 0.56
            : 0.66;
    let acc = this.trailDistance[i] + moved;
    let emitted = 0;
    while (acc >= spacing && emitted < 4) {
      const behind = acc - spacing;
      const t = Math.max(0, Math.min(1, 1 - behind / moved));
      particles.projectileTrail(
        ax + dx * t, az + dz * t, this.vx[i], this.vz[i],
        this.cr[i], this.cg[i], this.cb[i], kk, theme ?? undefined,
      );
      acc -= spacing;
      emitted++;
    }
    // 긴 프레임 스파이크에서 파티클 폭주를 막되 다음 프레임의 위상은 보존한다.
    this.trailDistance[i] = acc % spacing;
  }

  render(time: number, techniques?: TechniqueSpriteRenderer): void {
    (this.mesh.material as ShaderMaterial).uniforms.uTime.value = time;
    this.arrows.begin();
    this.slashes.begin();
    this.orbs.begin();
    this.crystals.begin();
    this.cavalries.begin();
    for (const batch of this.sigBatches) batch.begin();
    let w = 0;
    for (let i = 0; i < CAP; i++) {
      if (this.alive[i] === 0) continue;
      const m = w * 16;
      let theta: number;
      let sx: number;
      let sz: number;
      if (this.mode[i] === 1 || this.kind[i] === PK_ORB) {
        theta = time * 3; // 오브는 자체 회전
        sx = this.len[i];
        sz = this.wid[i];
      } else {
        theta = Math.atan2(-this.vz[i], this.vx[i]);
        sx = this.len[i];
        sz = this.wid[i];
      }
      const ct = Math.cos(theta);
      const st = Math.sin(theta);
      this.matArr[m] = ct * sx;
      this.matArr[m + 1] = 0;
      this.matArr[m + 2] = -st * sx;
      this.matArr[m + 3] = 0;
      this.matArr[m + 4] = 0;
      this.matArr[m + 5] = 1;
      this.matArr[m + 6] = 0;
      this.matArr[m + 7] = 0;
      this.matArr[m + 8] = st * sz;
      this.matArr[m + 9] = 0;
      this.matArr[m + 10] = ct * sz;
      this.matArr[m + 11] = 0;
      this.matArr[m + 12] = this.x[i];
      this.matArr[m + 13] = this.hy[i];
      this.matArr[m + 14] = this.z[i];
      this.matArr[m + 15] = 1;
      const c = w * 3;
      this.colArr[c] = this.cr[i];
      this.colArr[c + 1] = this.cg[i];
      this.colArr[c + 2] = this.cb[i];
      this.kindArr[w] = this.kind[i];
      // 수명 끝/시작 페이드 (직진만)
      let fade = 1;
      if (this.mode[i] === 0) {
        const lt = this.life[i] * this.invDur[i];
        fade = Math.min(1, lt * 4) * Math.min(1, (1 - lt) * 6 + 0.3);
      }
      const theme = techniqueThemeFromId(this.technique[i]);
      let authored = false;
      if (theme !== null && techniques !== undefined) {
        const profile = TECHNIQUE_VISUALS[theme];
        const directional = profile.projection !== 'impact';
        let artX: number;
        let artZ: number;
        let artPx = this.x[i];
        let artPz = this.z[i];
        if (directional && this.mode[i] === 0) {
          artX = this.len[i] * 1.45;
          artZ = Math.max(this.wid[i] * 1.75, 1.35);
          // 생성 원화는 로컬 +X로 흐르고 머리가 u≈0.84에 있다. 충돌 중심을 그 머리에
          // 맞추기 위해 그림의 중심만 뒤로 당긴다(물리 좌표/조준 방향은 그대로 유지).
          const speed = Math.hypot(this.vx[i], this.vz[i]) || 1;
          const back = artX * (profile.anchorU - 0.5);
          artPx -= this.vx[i] / speed * back;
          artPz -= this.vz[i] / speed * back;
        } else {
          // 연꽃·혈화·돌·음파 같은 충격/방사형 그림은 투사체 길이로 억지로 늘이지 않는다.
          const square = Math.max(this.wid[i] * 1.9, 1.65);
          artX = square;
          artZ = square;
        }
        const lifeT = this.mode[i] === 0 ? Math.max(0, Math.min(1, this.life[i] * this.invDur[i])) : 0.5;
        const progress = 1 - lifeT;
        const artFrame = progress < 0.12
          ? 0
          : lifeT < 0.16
            ? 3
            : 1 + (Math.floor(time * profile.fps + i * 0.73) & 1);
        authored = techniques.push(
          theme,
          artPx, this.hy[i] + 0.075, artPz, theta,
          artX, artZ, fade * 0.98, 0.055, artFrame,
        );
      }
      const accentScale = authored ? 0.54 : 1;
      const accentFade = authored ? fade * 0.16 : fade;
      this.fadeArr[w] = authored ? fade * 0.2 : fade;

      const k = this.kind[i];
      if (k === PK_WATER) {
        // 생성 원화가 본체, 물결 메시가 낮은 높이의 볼륨 악센트만 담당한다.
        this.waters.push(
          this.x[i], this.hy[i] + 0.28, this.z[i], theta,
          this.len[i] * accentScale, accentScale, this.wid[i] * 1.35 * accentScale,
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      } else if (k === PK_BUTTERFLY) {
        // 독침 원화 아래에만 작은 나비 실루엣을 남긴다.
        const flap = 1.0 + Math.sin(time * 20 + i * 1.7) * 0.45;
        this.butterflies.push(
          this.x[i], this.hy[i] + 0.4 + Math.sin(time * 10 + i) * 0.16, this.z[i], theta,
          this.wid[i] * 1.7 * accentScale, flap * 1.05 * accentScale, this.wid[i] * 1.7 * accentScale,
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      } else if (k === PK_FLAME) {
        // 불호랑이 원화 아래에 절제한 화염 체적만 유지한다.
        this.flames.push(
          this.x[i], this.hy[i] + 0.5, this.z[i], theta,
          this.len[i] * 0.9 * accentScale, 1.35 * accentScale, this.wid[i] * 1.35 * accentScale,
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      } else if (k === PK_COMPASS) {
        // 파괴살: 지면 위에서 회전하며 날아가는 나침반 충격파 파편(작고 또렷하게)
        this.compasses.push(
          this.x[i], this.hy[i] + 0.12, this.z[i], time * 5.0,
          this.len[i] * 0.5, 1.0, this.len[i] * 0.5,
          this.cr[i] * 0.7, this.cg[i] * 0.7, this.cb[i] * 0.7, fade * 0.85,
        );
      } else if (k === PK_THORN) {
        // 등꽃/사랑: 자체 회전하는 등가시 결정
        this.thorns.push(
          this.x[i], this.hy[i] + 0.3, this.z[i], theta + time * 4.5,
          this.len[i], this.len[i], this.wid[i],
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      } else if (k === PK_LOTUS) {
        // 혈귀술: 부드럽게 회전하는 핏빛 연꽃 결정
        this.lotuses.push(
          this.x[i], this.hy[i] + 0.3, this.z[i], time * 3.0,
          this.len[i] * 0.95 * accentScale, this.len[i] * 0.95 * accentScale, this.wid[i] * 0.95 * accentScale,
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      } else if (k === PK_ARROW || k === PK_FIRE_ARROW) {
        // 3D 화살 메시: 스프라이트 본체를 대체(후광 쿼드는 유지).
        this.arrows.push(
          this.x[i], this.hy[i] + 0.2, this.z[i], theta,
          this.len[i] * 1.05, Math.max(this.wid[i], 0.5) * 1.05,
          this.cr[i], this.cg[i], this.cb[i], fade,
        );
      } else if (k === PK_SLASHWAVE) {
        // 3D 검기 메시
        this.slashes.push(
          this.x[i], this.hy[i] + 0.2, this.z[i], theta,
          this.len[i] * accentScale, accentScale, this.wid[i] * accentScale,
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      } else if (k === PK_ORB) {
        // 3D 구체 메시
        this.orbs.push(
          this.x[i], this.hy[i] + 0.2, this.z[i], theta,
          this.len[i], this.len[i], this.wid[i],
          this.cr[i], this.cg[i], this.cb[i], fade,
        );
      } else if (k === PK_TALISMAN) {
        // 3D 크리스탈/부적 메시 (회전 추가)
        this.crystals.push(
          this.x[i], this.hy[i] + 0.2, this.z[i], theta + time * 4.0,
          this.len[i] * 0.8, this.len[i] * 0.8, this.wid[i] * 0.8,
          this.cr[i], this.cg[i], this.cb[i], fade,
        );
      } else if (k === PK_CAVALRY) {
        // 3D 기마(화염 돌격) 원뿔 메시
        this.cavalries.push(
          this.x[i], this.hy[i] + 0.5, this.z[i], theta,
          this.len[i] * 0.8 * accentScale, 1.2 * accentScale, this.wid[i] * 1.2 * accentScale,
          this.cr[i], this.cg[i], this.cb[i], accentFade,
        );
      }
      w++;
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.kindAttr.needsUpdate = true;
    this.fadeAttr.needsUpdate = true;
    this.arrows.end();
    this.slashes.end();
    this.orbs.end();
    this.crystals.end();
    this.cavalries.end();
    for (const batch of this.sigBatches) batch.end();
  }
}

// projectiles 내부 전용 최근접(유도 타게팅). collision.findNearestEnemy와 동일 로직.
function findNearest(
  enemies: EnemyPool,
  hash: SpatialHash,
  px: number,
  pz: number,
  maxR: number,
  scratch: number[],
): number {
  const n = hash.query(px, pz, maxR, scratch);
  let best = -1;
  let bestD = maxR * maxR;
  for (let c = 0; c < n; c++) {
    const j = scratch[c];
    if (enemies.alive[j] === 0) continue;
    const dx = enemies.x[j] - px;
    const dz = enemies.z[j] - pz;
    const d2 = dx * dx + dz * dz;
    if (d2 < bestD) {
      bestD = d2;
      best = j;
    }
  }
  return best;
}
