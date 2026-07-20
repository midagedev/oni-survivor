import {
  Texture,
  TextureLoader,
  NearestFilter,
  SRGBColorSpace,
} from 'three';
import type { SpriteManifest, VariantBlock } from '../data/spriteManifest';
import { CELL_W, CELL_H } from '../data/spriteManifest';

// 로드된 한 시트의 텍스처 + UV 계산에 필요한 치수
export interface SheetInfo {
  texture: Texture;
  texW: number;
  texH: number;
  // 셀 하나가 차지하는 UV 크기
  cellUvW: number;
  cellUvH: number;
}

// blockPx/blockPy 원점(픽셀, top-left)과 방향/프레임으로 UV 오프셋(bottom-left)을 계산.
// three UV는 v가 아래→위이므로 뒤집는다. out에 결과를 써서 할당 없이 재사용.
export function cellUvOffset(
  sheet: SheetInfo,
  blockPx: number,
  blockPy: number,
  dir: number,
  frame: number,
  out: { u: number; v: number },
): void {
  const px = blockPx + frame * CELL_W;
  const py = blockPy + dir * CELL_H;
  out.u = px / sheet.texW;
  // 셀의 아래 변에 해당하는 v (top-left 픽셀 py 기준, 아래로 CELL_H 만큼)
  out.v = 1 - (py + CELL_H) / sheet.texH;
}

export class Atlas {
  readonly manifest: SpriteManifest;
  readonly sgrade: SheetInfo;
  readonly apriority: SheetInfo;
  readonly soldiers: SheetInfo;
  readonly variants: SheetInfo;

  constructor(
    manifest: SpriteManifest,
    sheets: { sgrade: SheetInfo; apriority: SheetInfo; soldiers: SheetInfo; variants: SheetInfo },
  ) {
    this.manifest = manifest;
    this.sgrade = sheets.sgrade;
    this.apriority = sheets.apriority;
    this.soldiers = sheets.soldiers;
    this.variants = sheets.variants;
  }

  // soldiers 기본 시트에서 아키타입 charIndex의 블록 픽셀 원점 (r=0)
  soldierBlockPx(charIndex: number): number {
    return charIndex * 4 * CELL_W; // 캐릭터 블록 = 4열
  }

  // 특정 아키타입의 색변형 블록 목록
  variantBlocks(archetype: string): VariantBlock[] {
    return this.manifest.sheets.soldiersVariants.variants[archetype] ?? [];
  }
}

function makeSheet(texture: Texture, cols: number, rows: number): SheetInfo {
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = SRGBColorSpace;
  texture.premultiplyAlpha = false;
  texture.flipY = true; // 기본값; UV 계산은 flipY=true 기준
  texture.needsUpdate = true;
  const texW = cols * CELL_W;
  const texH = rows * CELL_H;
  return {
    texture,
    texW,
    texH,
    cellUvW: CELL_W / texW,
    cellUvH: CELL_H / texH,
  };
}

export async function loadAtlas(): Promise<Atlas> {
  const base = import.meta.env.BASE_URL;
  const dir = base + 'assets/sprites/';

  const manifestRes = await fetch(dir + 'manifest.json');
  const manifest = (await manifestRes.json()) as SpriteManifest;

  const loader = new TextureLoader();
  const load = (file: string): Promise<Texture> =>
    new Promise((resolve, reject) => {
      loader.load(dir + file, resolve, undefined, reject);
    });

  const [sgradeTex, apriorityTex, soldiersTex] = await Promise.all([
    load(manifest.sheets.sgrade.file),
    load(manifest.sheets.apriority.file),
    load(manifest.sheets.soldiers.file),
  ]);

  return new Atlas(manifest, {
    sgrade: makeSheet(sgradeTex, manifest.sheets.sgrade.cols, manifest.sheets.sgrade.rows),
    apriority: makeSheet(apriorityTex, manifest.sheets.apriority.cols, manifest.sheets.apriority.rows),
    soldiers: makeSheet(soldiersTex, manifest.sheets.soldiers.cols, manifest.sheets.soldiers.rows),
    // 변형 렌더 경로는 비활성이라 별도 GPU 텍스처를 만들지 않는다. 빈 렌더러가
    // 이미 올라간 soldiers 텍스처를 공유해 API 계약만 유지한다.
    variants: makeSheet(
      soldiersTex,
      manifest.sheets.soldiersVariants.cols,
      manifest.sheets.soldiersVariants.rows,
    ),
  });
}
