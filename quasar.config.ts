// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig((ctx) => {
  return {
    boot: ['auth'],

    css: ['app.scss', 'auth-web.scss', 'tuto_driver.scss'],

    extras: [
      'roboto-font',
      'material-icons',
    ],

    build: {
      extendViteConf(viteConf) {
        if (!viteConf.resolve) { viteConf.resolve = {} }
        // Redirect bare @apollo/client → @apollo/client/core so Rollup does not
        // pull in React-specific code. Sub-paths like @apollo/client/link/* are
        // left untouched because the regex only matches the exact bare import.
        const existingAlias = viteConf.resolve.alias
        const aliasArray = Array.isArray(existingAlias)
          ? existingAlias
          : Object.entries(existingAlias || {}).map(([find, replacement]) => ({ find, replacement }))
        viteConf.resolve.alias = [
          ...aliasArray,
          { find: /^@apollo\/client$/, replacement: '@apollo/client/core' },
        ]
      },

      // __DEV__ is referenced by the @dsaldias/auth-web dist bundle.
      rawDefine: { __DEV__: String(ctx.dev) },

      target: {
        browser: 'baseline-widely-available',
        node: 'node22',
      },

      typescript: {
        strict: true,
        vueShim: true,
      },

      vueRouterMode: 'history',

      // ✏️  Personaliza aquí según tu proyecto:
      // publicPath: '/mi-app/',
      // distDir: 'dist/spa',

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: true,
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: false,
    },

    framework: {
      config: {},
      plugins: ['Notify', 'Cookies', 'Meta'],
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'app',
      },
    },

    bex: {
      extraScripts: [],
    },
  }
})
