// 공용 지원 장비 해금 — heroUnlocks 패턴 재사용. 메타 진행 루프.
// 해금형 장비는 지원 풀에서 제외되고, 조건 달성 시 편입 + 토스트 + 도감 갱신.
// 해금 조건은 모두 기존 SaveData 필드에서 파생(단조 증가) → 별도 저장 없이도 판정 가능.
// SaveData의 unlockedWeapons는 도감/토스트용 캐시.
//
// i18n 무접촉 원칙: 신규 무기의 ko/en 이름·설명은 이 파일(NEW_WEAPONS)에 병기하고,
// 배선 스니펫에서 WEAPON_DEFS / WEAPON_DESC_EN / NAME_EN에 병합한다.

import type { WeaponDef } from './weapons';
import { getLang } from '../core/i18n';

// SaveData의 구조적 부분집합 — loadSave() 결과를 그대로 넘길 수 있다.
export interface WeaponUnlockProgress {
  totalKills: number; // 누적 처치 수 (save.totalKills)
  best: { time: number }; // 한 런 최고 생존 시간(초) (save.best.time)
  bosses: string[]; // 처치한 보스 도감 (save.bosses)
}

// 해금형 지원 장비 id (표시 순서). 여기 없는 지원 장비는 항상 해금.
export const WEAPON_UNLOCK_ORDER = ['caltrop', 'poison'];

// 조건 임계치
const CALTROP_KILLS = 1000; // 철질려: 누적 1,000킬
const POISON_SURVIVE = 480; // 독천: 한 런 8분(480초)+ 생존

export function isWeaponUnlocked(id: string, p: WeaponUnlockProgress): boolean {
  switch (id) {
    case 'caltrop':
      return p.totalKills >= CALTROP_KILLS;
    case 'poison':
      return p.best.time >= POISON_SURVIVE;
    default:
      return true; // 그 외 무기는 기본 해금
  }
}

// 해금형 무기 중 조건을 충족한 id 목록 (토스트 diff용).
export function unlockedWeaponIds(p: WeaponUnlockProgress): string[] {
  return WEAPON_UNLOCK_ORDER.filter((id) => isWeaponUnlocked(id, p));
}

// 도감/토스트 조건 텍스트 (ko/en). 미해금 무기의 진행도 노출.
export function weaponUnlockText(id: string, p: WeaponUnlockProgress): string {
  const en = getLang() === 'en';
  switch (id) {
    case 'caltrop': {
      const k = Math.min(CALTROP_KILLS, Math.floor(p.totalKills));
      return en ? `Total kills ${k}/${CALTROP_KILLS}` : `누적 처치 ${k}/${CALTROP_KILLS}`;
    }
    case 'poison': {
      const sec = Math.min(POISON_SURVIVE, Math.floor(p.best.time));
      const time = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      return en ? `Best survival ${time} / 8:00` : `최고 생존 ${time} / 8:00`;
    }
    default:
      return '';
  }
}

// 신규 무기 메타데이터. roster.ts가 아래를 자체 병합한다(둘 다 export된 가변 객체):
//   WEAPON_DEFS[id]      = def           (data/weapons.ts, 카드/도감/공유카드 공통)
//   WEAPON_DESC_EN[id]   = descEn        (core/i18n.ts, 영문 카드 설명)
// 영문 무기명 NAME_EN.weapon[id]만 비공개라 리드가 수동 2줄 추가(배선 스니펫 참조).
// twinring(등꽃 투척륜)은 해금 조건 없음(WEAPON_UNLOCK_ORDER 미포함 → isWeaponUnlocked 기본 true).
export interface NewWeaponMeta {
  def: WeaponDef;
  nameEn: string;
  descEn: string;
}

export const NEW_WEAPONS: Record<string, NewWeaponMeta> = {
  caltrop: {
    def: {
      id: 'caltrop',
      name: '등나무 가시',
      hanja: '藤棘',
      maxLevel: 8,
      desc: '이동 경로에 등나무 가시 설치 · 접촉 시 폭발 + 둔화',
    },
    nameEn: 'Wisteria Thorns',
    descEn: 'Wisteria thorns along your path; blast + slow on contact',
  },
  poison: {
    def: {
      id: 'poison',
      name: '등나무 독안개',
      hanja: '藤毒霧',
      maxLevel: 8,
      desc: '최다 밀집 지점에 등나무 독안개 · 지속 피해',
    },
    nameEn: 'Wisteria Miasma',
    descEn: 'Wisteria miasma on the densest cluster; damage over time',
  },
  twinring: {
    def: {
      id: 'twinring',
      name: '등꽃 투척륜',
      hanja: '藤投輪',
      maxLevel: 8,
      desc: '귀살대 공용 등꽃 투척구 · 왕복하며 2회 관통 타격',
    },
    nameEn: 'Wisteria Throwing Rings',
    descEn: 'Corps support rings; pierce twice on the round trip',
  },
};
