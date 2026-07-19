# 귀멸 서바이버 (滅鬼無雙) — Oni Survivor

한 명의 귀살대원으로 밀려드는 혈귀 무리를 베어내는 브라우저 뱀서라이크.
뱀파이어 서바이버의 중독 루프 × 귀멸의 칼날 호흡 오의 × Three.js 이펙트.

**Play**: https://midagedev.github.io/oni-survivor/

- 이동: WASD / 화살표 / 가상 조이스틱 (모바일)
- 무쌍난무: Space (게이지 100% — 전집중 호흡 오의)
- 십이귀월과 무한성의 무잔을 토벌하면 승리. 무기(호흡법)는 전부 자동 발동.

13명의 귀살대원이 각자의 호흡법과 무쌍 오의로 떠돌이 혈귀 → 하현 → 상현 → 십이귀월에 맞선다.

## 개발

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # 타입체크 + dist 빌드
```

기획/설계 문서: [docs/DESIGN.md](docs/DESIGN.md)

캐릭터/혈귀 스프라이트는 귀멸의 칼날 SD 캐릭터 시트를 사용한다.
`public/assets/sprites/manifest.json`이 시트 배치(캐릭터 인덱스·방향·프레임)를 정의한다.
