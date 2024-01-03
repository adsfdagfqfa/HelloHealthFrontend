import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    server: {
        proxy: {
          '/check': {
            target: 'http://localhost:8080',
            // target: 'http://49.235.103.189:8070',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/check/, '')
          }
        }
    }
})
