// manifest.json 구조 타입 (public/assets/sprites/manifest.json 원본과 일치)
export interface VariantBlock {
  c: number; // 블록 컬럼 인덱스 (픽셀 원점 x = c*192)
  r: number; // 블록 로우 인덱스 (픽셀 원점 y = r*256)
  v: string; // 색상 변형 이름
}

export interface SheetDef {
  file: string;
  cols: number;
  rows: number;
  chars: Record<string, number>;
}

export interface VariantsDef {
  file: string;
  cols: number;
  rows: number;
  blockCols: number;
  blockRows: number;
  variants: Record<string, VariantBlock[]>;
}

export interface SpriteManifest {
  cell: { w: number; h: number };
  content: { w: number; h: number; anchor: string };
  directions: string[];
  frames: string[];
  sheets: {
    sgrade: SheetDef;
    apriority: SheetDef;
    soldiers: SheetDef;
    soldiersVariants: VariantsDef;
  };
  names: Record<string, string>;
}

// 방향 인덱스 (manifest.directions 순서)
export const DIR_SOUTH = 0;
export const DIR_WEST = 1;
export const DIR_EAST = 2;
export const DIR_NORTH = 3;

// 셀 규격
export const CELL_W = 48;
export const CELL_H = 64;
