import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// Build de librería — separado del build de Quasar (quasar build)
// Uso: vite build --config vite.config.lib.ts
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src'],
      exclude: ['src/pages', 'src/router', 'src/boot', 'src/stores/app'],
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      stores: resolve(__dirname, 'src/stores'),
      components: resolve(__dirname, 'src/components'),
      layouts: resolve(__dirname, 'src/layouts'),
      pages: resolve(__dirname, 'src/pages'),
      boot: resolve(__dirname, 'src/boot'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AuthWeb',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // Todo lo que el proyecto consumidor ya tiene instalado va aquí
      external: [
        'vue',
        'pinia',
        'vue-router',
        'quasar',
        /^quasar\/.*/,
        '@apollo/client',
        /^@apollo\/client\/.*/,
        '@vue/apollo-composable',
        'graphql',
        'graphql-ws',
        'graphql-query-compress',
        'firebase/app',
        'firebase/auth',
        /^firebase\/.*/,
        'crypto-js',
        'jwt-decode',
        'axios',
        'leaflet',
        '@vue-leaflet/vue-leaflet',
        'chart.js',
        'vue-chart-3',
        'driver.js',
      ],
    },
    // No minificar para que sea debuggeable en proyectos consumidores
    minify: false,
  },
})
