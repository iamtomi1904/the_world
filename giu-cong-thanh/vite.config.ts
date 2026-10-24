import {defineConfig} from 'vite';
export default defineConfig({
  publicDir: false,
  build: {
    target: 'es2022', outDir: 'public/mmorpg/client', emptyOutDir: true,
    lib: {entry: 'src/mmorpg/game.ts', formats: ['es'], fileName: () => 'game.js'},
    rollupOptions: {external: ['/auth-client.js', '/mmorpg/map-traversal.js']},
    chunkSizeWarningLimit: 1800
  }
});
