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

    const loop = new Loop((dt) => {
      input.poll();
      run.update(dt);
      pipeline.render();
      input.endFrame();
    });
    loop.start();
  })
  .catch((err) => {
    console.error(err);
    loading.innerHTML =
      '<div style="color:#e85c4a;font-size:22px;">로드 실패</div>' +
      `<div style="font-size:13px;color:#b8bcc8;max-width:80vw;">${String(err)}</div>`;
  });
