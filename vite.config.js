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
          '/spring': {
            target: 'http://49.235.103.189:8085',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/spring/, '')
          },
          '/FlashService' : {
            // target: 'http://localhost:8085',
            target: 'http://49.235.103.189:8085',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/FlashService/, '')

          },
          '/loginService':{
            target: 'http://8.130.77.190:8081',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/loginService/, '')
          },
          '/userInfoService':{
            // target: 'http://localhost:8085',
            target: 'http://8.130.77.190:8080',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/userInfoService/, '')
          },
          '/toDoListService':{
            //target: 'http://localhost:9099',
            target: 'http://8.130.78.60:9099',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/toDoListService/, '')
          },
        }
    }
})
