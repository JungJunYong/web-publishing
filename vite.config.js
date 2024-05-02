import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
    plugins: [
        react(),
        dynamicImport()],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: (chunkInfo)=>{
                    const name = chunkInfo.name.toLowerCase()
                    return `pages/${name}/${name}.js`
                },
                assetFileNames: (chunkInfo)=>{
                    const name = chunkInfo.name.toLowerCase().split('.')[0];
                    return `pages/${name}/${name}.[ext]`
                },
            },
        }
    }
})