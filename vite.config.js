import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // ▼▼▼ 注意这里！必须加上这一行 ▼▼▼
  // 如果你的 GitHub 仓库叫 my-demo-site，这里就填 /my-demo-site/
  base: '/my-demo-site/' 
})
