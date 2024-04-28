import { fileURLToPath, URL } from 'node:url'
import { normalizePath, defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        //port: 8080
    },
    plugins: [
    ],
    build: {
        rollupOptions: {
            output: {
                chunkFileNames(assetInfo) {
                    const pathToFile = normalizePath(assetInfo.facadeModuleId)
                    if (/\/src\/templates\/views\/.*\.js$/.test(pathToFile)) {
                        return 'assets/views/[name].js'
                    }
                    return 'assets/[name]-[hash].js'
                },
            },
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                // Example option to remove console statements
                drop_console: true,
            },
            format: {
                // Terser format options 
                // Example option to remove comments
                comments: false,
            },
            mangle: {
                // Terser mangle options (optional)
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})