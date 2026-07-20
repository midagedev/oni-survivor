import { getLang } from '../core/i18n';

export interface HeroUnlockProgress {
  totalKills: number;
  best: { time: number };
  bosses: string[];
  rengokuUnlocked: boolean;
}

export const HERO_UNLOCK_ORDER = [
  'tanjiro', 'kanroji', 'shinobu', // 기본 해금 3인 (탄지로, 미츠리, 시노부)
  'tomioka', 'nezuko', 'kanao', 'rengoku',
  'zenitsu', 'inosuke', 'tokito', 'uzui', 'sanemi', 'himejima',
];

export function isHeroUnlocked(id: string, progress: HeroUnlockProgress): boolean {
  switch (id) {
    case 'tanjiro':     // 탄지로
    case 'kanroji':  // 미츠리
    case 'shinobu':  // 시노부
      return true; // 기본 해금 플레이어블 3인

    case 'tomioka':      // 기유
    case 'zenitsu':     // 젠이츠
      return progress.totalKills >= 50;

    case 'nezuko':    // 네즈코
    case 'inosuke':     // 이노스케
      return progress.totalKills >= 150;

    case 'kanao': // 카나오
    case 'tokito':        // 무이치로
      return progress.best.time >= 180;

    case 'sanemi':      // 사네미
    case 'uzui':        // 텐겐
    case 'himejima':    // 교메이
      return progress.bosses.length >= 1;

    case 'rengoku':        // 쿄쥬로
      return progress.rengokuUnlocked;

    default:
      return false;
  }
}

export function unlockedHeroIds(progress: HeroUnlockProgress): string[] {
  return HERO_UNLOCK_ORDER.filter((id) => isHeroUnlocked(id, progress));
}

export function heroUnlockText(id: string, progress: HeroUnlockProgress): string {
  const en = getLang() === 'en';
  switch (id) {
    case 'tomioka':
    case 'zenitsu':
      return en
        ? `Total kills ${Math.min(50, Math.floor(progress.totalKills))}/50`
        : `누적 처치 ${Math.min(50, Math.floor(progress.totalKills))}/50`;

    case 'nezuko':
    case 'inosuke':
      return en
        ? `Total kills ${Math.min(150, Math.floor(progress.totalKills))}/150`
        : `누적 처치 ${Math.min(150, Math.floor(progress.totalKills))}/150`;

    case 'kanao':
    case 'tokito': {
      const sec = Math.min(180, Math.floor(progress.best.time));
      const time = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      return en ? `Best survival ${time} / 3:00` : `최고 생존 ${time} / 3:00`;
    }

    case 'sanemi':
    case 'uzui':
    case 'himejima':
      return en ? 'Slay 1 Twelve Kizuki Boss' : '십이귀월 보스 1회 토벌';

    case 'rengoku':
      return en ? 'Unlock at Corps Estate (5000⟡)' : '귀살대 본부에서 5000⟡ 해금';

    default:
      return '';
  }
}
