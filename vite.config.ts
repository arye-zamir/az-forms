import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AzForms',
      formats: ['es'],
      fileName: 'az-forms',
    },
  },
  plugins: [vue(), dts({ tsconfigPath: './tsconfig.app.json' })],
  server: {
    port: 5050,
  },
  resolve: {
    alias: {
      'az-forms': resolve(__dirname, 'src'),
    },
  },
});
