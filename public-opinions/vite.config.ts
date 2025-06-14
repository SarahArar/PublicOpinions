import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: command === 'serve',  // ✅ makes it work only in dev
      watchFiles: true,
    }),
  ],
}));
