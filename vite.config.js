import { fileURLToPath, URL } from 'node:url'
import { normalizePath, defineConfig } from 'vite'
import stratoxVitePlugin from '@stratox/core/stratox-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //port: 8080
  },
  plugins: [
    stratoxVitePlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'stratox/src/Stratox': fileURLToPath(new URL('./packages/stratox/src/Stratox.js', import.meta.url)),
      'stratox/src/StratoxBuilder': fileURLToPath(new URL('./packages/stratox/src/StratoxBuilder.js', import.meta.url)),
      '@stratox/pilot': fileURLToPath(new URL('./packages/StratoxPilot/src/index.js', import.meta.url)),
      '@stratox/core': fileURLToPath(new URL('./packages/core/src/index.js', import.meta.url)),
      '@stratox/tailwind': fileURLToPath(new URL('./packages/StratoxTailwind/src/index.js', import.meta.url))
      //'@stratox/component': fileURLToPath(new URL('./packages/StratoxComponents/src/index.js', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: [
      'stratox/src/Stratox',
      '@stratox/pilot',
      '@stratox/core',
    ],
  },
  test: {
    environment: 'jsdom',
    exclude: [
      'node_modules',
      'packages'
    ],
  },
  startoxSSG: {
    paths: [
      '/',
      '/about',
      '/contact'
    ]
  }
})