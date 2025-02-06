import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      enableDev: true,
      analytics: {
        id: 'G-SD0X6H9G67',
        config: {
          cookie_domain: 'astrology-to-astronomy.vercel.app',
          send_page_view: true
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  build: {
    sourcemap: true
  }
})
