// Helpers
import * as vite from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';

const madoc = ['dev:madoc', 'build:madoc'].includes(process.env.npm_lifecycle_event);

const config = {
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'VueKonami',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    watch: false,
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['lcov', 'text']
    }
  }
};

export default vite.defineConfig(madoc ? {
  ...config,
  build: {
    ...config.build,
    emptyOutDir: false,
    outDir: './public/assets',
    lib: {
      ...config.build.lib,
      fileName: 'vue-konami',
      formats: ['es']
    }
  }
} : config);
