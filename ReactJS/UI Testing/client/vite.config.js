import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import mdx from '@mdx-js/rollup'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    VitePWA({
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Bhuvi Consultants',
        short_name: 'Bhuvi Manager',
        theme_color: '#373636',
        background_color: '#ebeae7',
        display: "standalone",
        orientation: 'portrait',
        scope: "/",
        start_url: "/",
        lang: "en-US",
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: false
      },
    })
  ],
  build: {
    chunkSizeWarningLimit: 4000, // Adjust as needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lodash')) {
            return 'lodash'; // Group lodash-related modules into a 'lodash' chunk
          }
        }
      }
    }
  },
})