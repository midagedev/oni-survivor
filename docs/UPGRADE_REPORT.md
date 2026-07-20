# 귀멸 서바이버 — Night Bloom 고도화 보고서

## Game design brief

좋아하는 귀살대원을 골라 캐릭터 고유 호흡법으로 밤의 네 임무를 잇고, 새벽 압박 속에서 무잔을 직접 토벌하는 10분 내외의 액션 서바이버다. 목표 감정은 빠르고 화려하지만 읽을 수 있는 전투, 팬이 즉시 알아보는 기술 실루엣, 고압 전투 뒤의 짧은 회복이다.

## Core loop

이동·대시·무쌍 타이밍으로 적과 목적지를 정렬한다 → 자동 호흡 공격으로 혈귀를 베고 젬·골드를 회수한다 → 3택 성장과 명기로 빌드를 완성한다 → 연속 임무와 3/6/9분 보스를 돌파한다 → 무잔 처치로 승리한다. 10:00은 자동 승리가 아니라 새벽 최종 압박과 1회 회복 비트다.

## Level/encounter plan

- 0–2분: 사기리산 바위 수련. 근처 체류가 아니라 실제 공격 발동으로 바위 내구도를 깎는다.
- 2–4분: 등꽃 마을. 도달 시 전원 회복, 12초 가호, 다음 동선 제공.
- 4–7분: 무한열차 탈선 현장. 생존자 확보, 경험치와 보물상자.
- 7–9분: 무한성 관문. 최종 회복·무쌍 충전, 성 공방전과 연결.
- 9분 이후: 무잔전. 10분이 지나도 무잔이 살아 있으면 계속되며 처치만 승리로 인정한다.

## Skill-loading ledger

- `threejs-game-director`: 전체 단계 오케스트레이션과 최종 증거 계약.
- `threejs-gameplay-systems`: 게임 디자인, 전투/맵/밸런스, 고정 스텝 결정.
- `threejs-aaa-graphics-builder`: 시각 점수표, 기술 아트·렌더 예산, 읽기 쉬운 VFX.
- `threejs-game-ui-designer`: HUD, 모바일 safe area, 44px 이상 터치 타깃.
- `threejs-debug-profiler`: 렌더 진단, 메모리/드로우콜, 업데이트 수명주기.
- `threejs-qa-release`: 시각 하네스, 봇 플레이, 실패/재시작, 릴리스 검증.
- `threejs-3d-generator`, `threejs-image-generator`, `threejs-audio-generator`: 자산 경로를 검토하고 credential probe 수행.
- `imagegen`: 13종 캐릭터별 기술 원화를 직접 생성하고 크로마 제거·투명 PNG 정규화.
- `browser:control-in-app-browser`: 데스크톱/모바일 실제 화면 상호작용과 시각 점검.

## Reference ledger

- `/Users/hckim/repo/threesur`: atlas/instancing/pooling 파이프라인만 참고. Three Kingdoms 원화·중국풍 월드·레트로 투사체를 그대로 재사용하지 않았다.
- 기존 `oni-survivor` 캐릭터 시트와 초상: 플레이 거리에서 이미 귀살대 캐릭터 가독성이 좋아 유지.
- threejs skill reference: premium scorecard, model/render/shader, game feel, UI, profiling, visual harness, bot playtest 체크리스트를 모두 적용.

## Phase ledger

- Gameplay systems: 4단계 여정, 맵 랜드마크, 실제 바위 타격, 보스 순서, 무잔 승리, 무피격 기록, 보스 피해 정책, 캐릭터 예산 조정.
- AAA graphics: 13종 호흡 원화, Normal alpha + 약한 bloom 보조, 인스턴스 풀, 중국풍 잔재 랜드마크 재구성.
- UI: 모바일 pause, safe-area, HUD 충돌 제거, 목표/대사/배너 스택, 44px 리롤.
- Debug/profile: 대형 미사용 시트 제거, 고정 60Hz 시뮬레이션, 표준 진단 훅, 렌더 예산 측정.
- QA/release: build, visual test harness, bot, 승리 조건, TTK, desktop/mobile 증거.

## External asset sourcing

### Credential probe output

```text
TRIPO_API_KEY=MISSING
GEMINI_API_KEY=MISSING
ELEVENLABS_API_KEY=MISSING
```

- 3D generator: Tripo credential이 없어 호출하지 않았다. 고정 탑다운 카메라와 기존 픽셀 캐릭터에는 새 GLB보다 2D 시그니처 기술 원화가 더 높은 화면 기여도를 가진다고 판단했다.
- Image generator: 설치형 Gemini generator는 credential 부재로 차단됐지만, 사용자가 이미지 직접 생성을 명시해 내장 OpenAI image generator로 모두 직접 제작했다.
- Audio generator: ElevenLabs credential 부재. 기존 `public/assets/audio/bgm-title.mp3`, `bgm-battle.mp3`, `bgm-boss.mp3`, `bgm-siege.mp3`, 승패 징글과 WebAudio SFX/컴프레서/크로스페이드를 유지·검증했다.

### Chosen sources

- Hero/player: 기존 귀살대 픽셀 시트와 캐릭터 초상 유지.
- Technique VFX: `public/assets/techniques/*.png` 13개, 모두 직접 생성한 1024×1024 투명 sRGBA 4프레임 시트. 용도는 물·화염·번개·사랑·태양·혈염·벌레·꽃·짐승·안개·바람·음·바위 호흡.
- World/sky/background: 절차 지면/산/꽃잎을 유지하고 바위 수련터, 등꽃 마을, 무한열차 잔해, 무한성 관문을 공유 지오메트리로 재구성.
- Materials/textures/decals: 기존 toon/ground shader, 원형 데칼, 텔레그래프를 절제된 보조층으로 유지. 생성 원화가 공격의 불투명 코어를 담당한다.
- 전체 정규화 결과와 대표 프레임은 `docs/TECHNIQUE_SPRITES.png`, 캡처 기반 모션 분석은 `docs/TECHNIQUE_MOTION_ANALYSIS.md`에 정리했다.

## Technical art

### Render budget

- 스트레스 데스크톱: **52 draw calls, 18,912 triangles, 84 geometries, 44 textures**.
- 스트레스 모바일: **51 draw calls, 18,742 triangles, 84 geometries, 40 textures**.
- 목표 예산: desktop 300 calls/750k tris/60 textures, mobile 150 calls/300k tris/40 textures 이하.
- 8064×4096 미사용 variant 시트 요청을 제거해 GPU 업로드/디코드 약 126MiB와 모바일 4096px 폭 위험을 제거했다.
- 꽃잎은 desktop 600, touch/mobile 240, reduced-motion 96. PiP는 모바일·Save-Data·저사양·reduced-motion에서 할당 자체를 생략한다.
- 13개 4프레임 원본 시트는 빌드 아카이브로 유지하되 런타임은 2048×2048 `technique-atlas.png` 하나만 요청한다. `aCell` 인스턴스 속성으로 52셀을 고르고, 모든 테마가 body 1 draw + glow 1 draw를 공유한다.
- 고정 60Hz 시뮬레이션이 저FPS에서 여러 번 진행돼도 적·투사체 인스턴스 버퍼는 실제 브라우저 화면당 한 번만 다시 쓴다.

### VFX readability

- RGB 임계값 추론을 제거하고 `TechniqueTheme`을 캐릭터/무기/무쌍/동료가 명시한다.
- Normal alpha 원화가 읽히는 본체이고 additive glow는 최대 0.18, 기존 메시 폴백은 원화 준비 후 낮은 광량의 보조층이다.
- sRGB 아틀라스의 GPU 선형화를 존중해 이중 감마를 제거했고 additive RGB에 알파를 중복 곱하지 않아 중간톤과 잔광이 보존된다.
- `beginFrame → gameplay emission → update/end` 순서로 고쳐 방출 직후 커서가 초기화되던 수명주기 버그를 제거했다.
- 공격 텔레그래프, 피해 코어, 잔상 순서를 분리하고 무쌍 외 화면 전체 플래시를 제한했다.

## Gameplay systems and balance evidence

- 보스 슬롯: 3분 `enmu/rui/gyokko`, 6분 `doma/akaza/kokushibo`, 9분 `muzan`.
- 단일 `damagePolicy.ts`: melee/projectile/orbit/zone/special/musou/companion 프로필과 공통 그로기 정책.
- 근접 보스 판정의 숨은 +20m/각도 무시를 제거했다.
- 무이치로 다중 캡슐은 lane damage를 정규화했고 시노부 처치 장판은 proc-from-proc 차단 + 0.65초 내부 쿨다운을 가진다.
- 희귀 패시브는 일반 카드의 0.28 가중치이며 중복 없는 가중 추첨을 사용한다.
- 교메이/렌고쿠 등 극단 EHP 차이를 역할 예산 안으로 낮췄다.
- TTK measured evidence: `tests/oni-balance.spec.ts`가 인게임 시간으로 엔무/무잔을 측정하며 headless FPS는 주장하지 않는다.

## Physics engine

- Physics engine choice: Rapier를 추가하지 않고 현재 장르에 맞는 spatial-hash + 원/캡슐/단순 벽 collider를 유지했다.
- Timestep: requestAnimationFrame 렌더와 분리한 고정 1/60초, 한 화면 최대 5 simulation step으로 저FPS 슬로모션과 spiral을 동시에 억제한다.
- Collider diagnostics: 맵 재구성 전후 집 수 25→25, 네 여정 landmark 조회 성공, `playerInsideWall`, wall hit, active collider 수가 표준 진단에 노출된다.

## UI/HUD

- 390×844에서 슬롯 우측 138px, 타이머 좌측 153.2px으로 비겹침.
- 모바일 pause 48×48, 리롤 194.6×44, safe-area와 가로 화면 좌측 정보 레일.
- 의미가 불분명하던 모바일 `無` 버튼은 한국어 `극 / 필살`과 `필살기` 접근성 이름으로 바꿨다.
- 플레이어 스프라이트는 충돌 반경을 유지한 채 3.2 world-unit로 키우고, 대표 기술은 전방으로 오프셋해 원화가 주인공을 가리지 않게 했다.
- 월드 이름표는 25px/1.08 scale로 줄였고 꽃잎의 크기·밝기·알파를 낮춰 야간 화면의 흰색 번짐을 줄였다.
- blur/pagehide/visibility/pointercancel에서 조이스틱 상태를 해제한다.
- 목표·보스바·대사·배너가 동적 오프셋과 overshoot gutter로 서로 가리지 않는다.

## Visual test harness and QA/release

- Build: `npm run build` TypeScript + Vite production build 통과. 94 modules, JS 1,060.14kB/gzip 300.93kB.
- Full regression: 독립 QA 포트에서 Playwright **7/7 통과**(desktop 5 + mobile 2, 총 3.0분).
- Visual test harness: 고정 seed 20260720, desktop 1440×900 + mobile 390×844, 런타임 technique atlas 로드, canvas 비공백/색상/명암 검증. 세 여정 랜드마크도 실제 좌표로 이동해 캡처했다.
- Motion evidence: 매 패널을 동일 seed로 재시작하고 t+0.10/0.42/0.74/1.06초에서 루프를 고정한 4프레임 스트립으로 기술 시간 변화를 검증한다.
- Bot playtest: **545 frames**, WASD 6구간 **19.97m**, 처치 +3, softlock window 0, 패배 확인, 실제 재시작 버튼 성공.
- Victory regression: 601초를 넘겨도 진행 상태를 유지하고 무잔 처치 뒤에만 결과 화면으로 전환한다.
- Balance regression: 인게임 시간 TTK 엔무 **30.11초**(허용 20–65), 무잔 **66.30초**(허용 25–90).
- Console error 0, page error 0, 핵심 network error 0.
- 영구 증거: `docs/qa/active-play-desktop.png`, `active-play-mobile.png`, `technique-motion-strip.png`, 여정 3장, `fail-retry.png`, visual/bot/balance JSON.
- Pixel evidence: 데스크톱/모바일 canvas opaque ratio, quantized colors, luminance range, bright chroma sample을 JSON attachment로 기록한다.

## Premium AAA visual scorecard

| Category | Score (0–3) | Evidence |
| --- | ---: | --- |
| Art direction | 2 | 야간 청색·금색 UI와 13종 호흡 색 문법. 픽셀 월드와 회화형 기술의 밀도 차이는 남음 |
| Hero/player | 2 | 확대된 캐릭터와 금빛 외곽선으로 위치·실루엣 명확. 물 효과가 일부 겹침 |
| Obstacles/enemies | 2 | 수련 바위·목책·열차 잔해·성문을 구분. 적 종류 증거는 제한적 |
| Rewards/interactables | 2 | 바위 수련·등꽃 회복·열차·성문 목표와 방향/거리 마커 |
| World/environment | 2 | 네 지역 랜드마크는 구별됨. 일부 빈 지면과 반복 텍스처가 남음 |
| Materials/textures | 2 | 기술·건물 디테일은 좋음. 캐릭터·배경·VFX 화풍 편차가 남음 |
| Lighting/render | 2 | 목표·캐릭터 국소광 분리. 일부 평면적 깊이감이 남음 |
| VFX/motion | 3 | 13종 고유 실루엣과 4프레임에서 확인한 투사체 이동·지속 효과 |
| UI/HUD | 3 | 한국어 중심 목표 UI, 모바일 필살 버튼, safe-area와 정보 위계 |
| Performance evidence | 3 | 52/51 calls, 18.9k/18.7k tris, 44/40 textures, 오류 0 |
| Average | **2.3** | 전 항목 2 이상, 목표 게이트 통과 |

### Measured evidence

위 render metrics, screenshot/pixel JSON, 봇 이동/softlock, TTK JSON을 사용한다. Headless FPS는 성능 근거에서 제외한다.

### Fresh-eyes review

최종 desktop/mobile 활성 전투, 세 랜드마크, 13종 기술 시트, 4프레임 모션 스트립을 코드 변경에 참여하지 않은 검토자가 독립 평가했다. **평균 2.3/3.0, 전 항목 2 이상, automatic failure 없음**으로 계획의 시각 게이트를 통과했다. 최고점은 VFX/motion, UI/HUD, performance evidence였다.

### Automatic failures

확인된 자동 실패 없음: 기본 primitive hero 없음, 핵심 자산 404 없음, 콘솔/page/network error 없음, 모바일 HUD 치명 겹침 없음, 무잔 자동승리 없음. 최종 fresh-eyes gate에서도 동일하게 판정했다.

## Residual risk

- 실제 iPhone Safari의 노치와 주소창 축소 동작은 시뮬레이션 외 실기기 확인이 남는다.
- 시각 골든은 WebGL 안티앨리어싱 차이 때문에 바이너리 비교 대신 고정 seed 스크린샷 + 픽셀 지표를 쓴다.
- 전 캐릭터/전 진화 조합의 통계적 10분 시뮬레이션은 대표 엔무·무잔 회귀보다 범위가 크므로, 장기 밸런스 텔레메트리가 생기면 추가 조정이 필요하다.
- 픽셀 캐릭터/건물과 회화형 기술의 픽셀 밀도, 빈 지면의 중간 크기 소품, 물 기술의 부분 가림은 후속 아트 패스의 우선순위다.
- 원작 팬 프로젝트의 배포 권리/상표 검토는 코드 품질 범위 밖이며 공개 배포 전 별도 확인이 필요하다.
