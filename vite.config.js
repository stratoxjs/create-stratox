import { fileURLToPath, URL } from 'node:url'
import { normalizePath, defineConfig } from 'vite'
//import path from 'path';

/*
const rootDir = fileURLToPath(new URL('./src', import.meta.url));
console.log(path.resolve(__dirname, './src/templates/views')+'/');
*/

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080
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
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
