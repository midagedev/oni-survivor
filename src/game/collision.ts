// 균일 그리드(셀 2m) 스페이셜 해시. 프레임마다 clear→insert*→query.
// query는 재사용 배열에 후보 인덱스를 채워 반환(할당 회피).
const CELL = 2;
const OFF = 4096; // 좌표 인코딩 오프셋 (음수 셀 대응)
const STRIDE = 8192;

function keyOf(cx: number, cz: number): number {
  return (cx + OFF) * STRIDE + (cz + OFF);
}

export class SpatialHash {
  private readonly buckets = new Map<number, number[]>();
  private readonly used: number[] = [];

  clear(): void {
    const used = this.used;
    for (let i = 0; i < used.length; i++) {
      const b = this.buckets.get(used[i]);
      if (b) b.length = 0;
    }
    used.length = 0;
  }

  insert(index: number, x: number, z: number): void {
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    const k = keyOf(cx, cz);
    let b = this.buckets.get(k);
    if (b === undefined) {
      b = [];
      this.buckets.set(k, b);
    }
    if (b.length === 0) this.used.push(k);
    b.push(index);
  }

  // (x,z) 중심 반경 r을 덮는 셀들의 후보 인덱스를 out에 채우고 개수 반환.
  query(x: number, z: number, r: number, out: number[]): number {
    const minx = Math.floor((x - r) / CELL);
    const maxx = Math.floor((x + r) / CELL);
    const minz = Math.floor((z - r) / CELL);
    const maxz = Math.floor((z + r) / CELL);
    let n = 0;
    for (let cx = minx; cx <= maxx; cx++) {
      for (let cz = minz; cz <= maxz; cz++) {
        const b = this.buckets.get(keyOf(cx, cz));
        if (b === undefined) continue;
        for (let i = 0; i < b.length; i++) {
          out[n++] = b[i];
        }
      }
    }
    return n;
  }
}

// (px,pz)에서 maxR 이내 가장 가까운 살아있는 적 인덱스. 없으면 -1.
export function findNearestEnemy(
  enemies: { alive: Uint8Array; x: Float32Array; z: Float32Array },
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

// 점 p가 선분 a→b에서 떨어진 거리의 제곱. 부채꼴/캡슐 판정에 재사용.
export function distToSegmentSq(
  px: number,
  pz: number,
  ax: number,
  az: number,
  bx: number,
  bz: number,
): number {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  if (t < 0) t = 0;
  else if (t > 1) t = 1;
  const cx = ax + dx * t;
  const cz = az + dz * t;
  const ex = px - cx;
  const ez = pz - cz;
  return ex * ex + ez * ez;
}
