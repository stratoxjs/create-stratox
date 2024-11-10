import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import stratoxVitePlugin from '@stratox/core/stratox-vite-plugin'

export default defineConfig({
    server: {
        //port: 8080
    },
    plugins: [
        stratoxVitePlugin()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})