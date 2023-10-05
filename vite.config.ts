import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path from 'path'
import { url } from 'inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": path.resolve(__dirname, "src/components"),
    }
  }
})
