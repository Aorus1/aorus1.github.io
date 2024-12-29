import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                projects: resolve(__dirname, 'projects.html')
            }
        },
        assetsDir: 'assets',
        // Don't add hashes to asset filenames
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})