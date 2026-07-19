import { defineConfig } from 'vite';

export default defineConfig({
  base: '/oni-survivor/',
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1500,
  },
});
