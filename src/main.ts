import './style.css';
import { createRenderer, RenderPipeline } from './gfx/renderer';
import { CameraRig } from './gfx/camera';
import { Input } from './core/input';
import { Loop } from './core/loop';
import { loadAtlas } from './gfx/atlas';
import { Run } from './game/run';

const app = document.getElementById('app')!;

// 로딩 표시
const loading = document.createElement('div');
loading.id = 'loading';
loading.innerHTML =
  '<div style="font-size:30px;">일기당천 一騎當千</div>' +
  '<div style="font-size:15px;color:#b8bcc8;">전장 준비 중…</div>';
document.body.appendChild(loading);

const renderer = createRenderer(app);
const rig = new CameraRig();
const input = new Input();

// Phase 1 씬 상태머신: 로딩 완료 후 바로 Run 시작 (Phase 3에서 타이틀/선택 화면 추가).
loadAtlas()
  .then((atlas) => {
    const run = new Run(atlas, rig, input);
    const pipeline = new RenderPipeline(renderer, run.scene, rig.camera);

    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      rig.onResize(w, h);
      pipeline.setSize(w, h);
    });

    run.start();
    loading.remove();

    // 테스트 훅 (playtest 봇에서 시간 스킵/무기 지급/무쌍 발동 등 장면 연출)
    (window as unknown as { __GAME_TEST__: unknown }).__GAME_TEST__ = {
      setTime: (s: number) => run.testSetTime(s),
      giveWeapon: (id: string) => run.testGiveWeapon(id),
      givePassive: (id: string, lv?: number) => run.testGivePassive(id, lv),
      levelUp: () => run.testForceLevel(),
      fillMusou: () => run.testFillMusou(),
      activateMusou: () => run.testActivateMusou(),
      addGold: (n: number) => run.testAddGold(n),
      spawnBoss: (t: string) => run.testSpawnBoss(t),
      setBossFlags: (b3: boolean, b6: boolean, b9: boolean) => run.testSetBossFlags(b3, b6, b9),
      treasure: (boss?: boolean) => run.testTreasure(boss),
      get stats() {
        return run.testStats;
      },
    };

    // 드로우콜을 프레임 단위로 누적 측정(컴포저 다중 패스 합산)
    renderer.info.autoReset = false;
    let fpsEma = 60;
    const loop = new Loop((dt) => {
      input.poll();
      run.update(dt);
      pipeline.setMusou(run.musouStrength, run.renderTime);
      renderer.info.reset();
      pipeline.render();
      input.endFrame();
      if (dt > 0) fpsEma += (1 / dt - fpsEma) * 0.05;
    });
    loop.start();

    // 성능/디버그 계측 훅
    (window as unknown as { __DEBUG__: unknown }).__DEBUG__ = {
      info: () => ({
        fps: Math.round(fpsEma),
        calls: renderer.info.render.calls,
        tris: renderer.info.render.triangles,
        geometries: renderer.info.memory.geometries,
        textures: renderer.info.memory.textures,
      }),
    };
  })
  .catch((err) => {
    console.error(err);
    loading.innerHTML =
      '<div style="color:#e85c4a;font-size:22px;">로드 실패</div>' +
      `<div style="font-size:13px;color:#b8bcc8;max-width:80vw;">${String(err)}</div>`;
  });
