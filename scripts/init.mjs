#!/usr/bin/env node
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), '..')

const cwd = process.cwd()
const ok   = (msg) => console.log(`  ✅ ${msg}`)
const warn = (msg) => console.log(`  ⚠️  ${msg}`)
const info = (msg) => console.log(`  ℹ️  ${msg}`)

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escribir(relPath, content, force = false) {
  const abs = join(cwd, relPath)
  if (existsSync(abs) && !force) { warn(`${relPath} ya existe, no se sobrescribe`); return }
  const dir = abs.substring(0, abs.lastIndexOf('/'))
  mkdirSync(dir, { recursive: true })
  writeFileSync(abs, content, 'utf-8')
  ok(relPath)
}

function detectPkgManager() {
  if (existsSync(join(cwd, 'yarn.lock')))      return 'yarn'
  if (existsSync(join(cwd, 'pnpm-lock.yaml'))) return 'pnpm'
  return 'npm'
}

// ─── Templates ───────────────────────────────────────────────────────────────

const appVue = `<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { iniciarSubscripcion, detenerSubscripcion } from '@dsaldias/auth-web'

onMounted(() => iniciarSubscripcion())
onBeforeUnmount(() => detenerSubscripcion())
</script>
`

const bootAuth = `import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@dsaldias/auth-web'
import '@dsaldias/auth-web/style'

export default boot(({ app }) => {
  app.use(AuthPlugin, {
    graphqlAuth:     process.env.GRAPHQL_AUTH       + '',
    graphqlApp:      process.env.GRAPHQL_APP        + '',
    wss:             process.env.GRAPHQL_WSS        + '',
    wssApp:          process.env.GRAPHQL_WSS_APP    + '',
    decodePassKey:   process.env.DECODE_PASS_KEY    + '',
    cookieThemeName: process.env.COOKIE_THEME_NAME  + '',
  })
})
`

const rutasApp = `import type { RouteRecordRaw } from 'vue-router'

// Agrega aquí las rutas de tu aplicación
// Estas se montan dentro del MainLayout (requieren autenticación)
export const rutasApp: RouteRecordRaw[] = [
  // {
  //   path: '/mi-modulo',
  //   component: () => import('pages/app/mi-modulo/index.vue'),
  // },
]
`

const routes = `import type { RouteRecordRaw } from 'vue-router'
import {
  MainLayout,
  LandingLayout,
  LoginView,
  UsuariosIndex,
  RolesIndex,
  UnidadesIndex,
  TicketsIndex,
  NotisIndex,
  DashAuthIndex,
} from '@dsaldias/auth-web'
import { rutasApp } from './rutas-app'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '',          component: DashAuthIndex },
      { path: '/roles',    component: RolesIndex },
      { path: '/unidades', component: UnidadesIndex },
      { path: '/usuarios', component: UsuariosIndex },
      { path: '/avisos',   component: NotisIndex },
      { path: '/tickets',  component: TicketsIndex },
      ...rutasApp,
    ],
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/principal.html',
    component: LandingLayout,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
]

export default routes
`

const env = `ENV=prod

# export PATH="$(yarn global bin):$PATH"
# icongenie generate -m spa -i cseiiLogo512.png
#

GRAPHQL_AUTH=http://localhost:8038/query_auth
GRAPHQL_APP=http://localhost:8038/query
GRAPHQL_WSS=ws://localhost:8038/ws
GRAPHQL_WSS_APP=ws://localhost:8038/ws_app
GRAPHQL_SSE_APP=http://localhost:8038/sse

DECODE_PASS_KEY=Lf5puh9aSuWEmh9Hx1ctoGSn8Qb5kYnn5lM+RBi7e3c=
NOTIFICACIONES_SUBS=si
SHOW_TIME_LABEL=si
SHOW_LANDING_PAGE=si
SHOW_TUTO_VIDEO=si
SHOW_DASH_REPORTE1=si
SHOW_DASH_REPORTE2=si
SHOW_DASH_APP=si
ACCEPT_OAUTH=si
KEEP_CLIMA=
SHOW_ROL_SELECT=si
SHOW_LOGIN_BUTTON=si
APP_NAME=Authx
APP_LOGO=wapiton.png

TUTO_VIDEO_URL='https://www.youtube.com/embed/4lbOl3r2dQA?autoplay=1&start=12&rel=0&loop=1&playlist=4lbOl3r2dQA'
SHOW_TOUR_TUTO=1

COOKIE_THEME_NAME=quasar-theme-auth_x
XDATAUSER_ROLUNIDAD=xrolunidad_auth_x
XSESIONKEY_NAME=xskey-auth_x
XSESION_TIME=xskeytime-auth_x
XSESION_LABEL=xskeylabel-auth_x
XDATAUSER_NAME=xdataUser-auth_x
XMENUS_NAME=xmenus-auth_x
XTHEMA_CUADERNO=xthema_cuarderno-auth_x
X_CLIMA=xclima-auth_x
API_MAPS=AIzaSyD2muOLjhasMAyrYPsn-jNkNMCmmIdP86A
LAST_DARK_STATE=quasar-last-dark-state_x

#
# INGRESA TUS VARIABLES A PARTIR DE AQUI :)
#

# GRAPHQL_AUTH=https://auth.sladia.site/query_auth
# GRAPHQL_APP=https://auth.sladia.site/query
# GRAPHQL_WSS=wss://auth.sladia.site/ws
# GRAPHQL_WSS_APP=wss://auth.sladia.site/ws_app
# GRAPHQL_SSE_APP=https://auth.sladia.site/sse
`

// ─── Patch quasar.config.ts ───────────────────────────────────────────────────

function patchQuasarConfig() {
  const configPath = join(cwd, 'quasar.config.ts')
  if (!existsSync(configPath)) {
    warn('quasar.config.ts no encontrado — revisa que estés en la raíz de un proyecto Quasar')
    return
  }
  let src = readFileSync(configPath, 'utf-8')
  let changed = false

  // 1. boot: add 'auth'
  if (!src.includes("'auth'")) {
    src = src.replace(/boot\s*:\s*\[\s*\]/, "boot: ['auth']")
    ok("quasar.config.ts → boot 'auth' agregado")
    changed = true
  } else {
    warn("quasar.config.ts → boot 'auth' ya existe")
  }

  // 2. framework.plugins: ensure Notify, Cookies, Meta
  const requiredPlugins = ['Notify', 'Cookies', 'Meta']
  for (const plugin of requiredPlugins) {
    if (src.includes(`'${plugin}'`) || src.includes(`"${plugin}"`)) continue

    // Try to append to existing plugins array (handles single-line and multi-line)
    const pluginsMatch = src.match(/plugins\s*:\s*\[/)
    if (pluginsMatch) {
      src = src.replace(
        /plugins\s*:\s*\[([^\]]*)\]/,
        (_m, inner) => `plugins: [${inner.trimEnd()}${inner.trim() ? ', ' : ''}'${plugin}']`
      )
      ok(`quasar.config.ts → plugin '${plugin}' agregado`)
    } else {
      // No plugins key — add it inside framework: {}
      const fwMatch = src.match(/framework\s*:\s*\{/)
      if (fwMatch) {
        src = src.replace(/framework\s*:\s*\{/, `framework: {\n      plugins: ['${plugin}'],`)
        ok(`quasar.config.ts → plugins: ['${plugin}'] creado en framework`)
      } else {
        warn(`quasar.config.ts → no se pudo agregar plugin '${plugin}': no hay framework ni plugins key`)
      }
    }
    changed = true
  }

  // 3. css array: ensure auth-web.scss and tuto_driver.scss are included
  // Quasar resolves css entries relative to src/css/, so just use the filename
  const requiredCss = ['auth-web.scss', 'tuto_driver.scss']
  for (const cssFile of requiredCss) {
    if (!src.includes(cssFile)) {
      // If there's a css array, append; otherwise add one
      if (/css\s*:\s*\[/.test(src)) {
        src = src.replace(
          /css\s*:\s*\[([^\]]*)\]/,
          (_m, inner) => `css: [${inner.trimEnd()}${inner.trim() ? ', ' : ''}'${cssFile}']`
        )
      } else {
        src = src.replace(/build\s*:\s*\{/, `build: {\n      css: ['${cssFile}'],`)
      }
      ok(`quasar.config.ts → css '${cssFile}' agregado`)
      changed = true
    } else {
      warn(`quasar.config.ts → css '${cssFile}' ya existe`)
    }
  }

  // 4. Apollo alias — redirects bare @apollo/client → @apollo/client/core to avoid
  //    Rollup pulling in React-specific code. Uses regex find so sub-paths are untouched.
  const apolloMarker = "@apollo/client/core'"
  if (src.includes(apolloMarker) || src.includes('@apollo/client/core"')) {
    warn('quasar.config.ts → alias Apollo ya existe')
  } else {
    const aliasBody = [
      `if (!viteConf.resolve) { viteConf.resolve = {} }`,
      `const existingAlias = viteConf.resolve.alias`,
      `const aliasArray = Array.isArray(existingAlias)`,
      `  ? existingAlias`,
      `  : Object.entries(existingAlias || {}).map(([find, replacement]) => ({ find, replacement }))`,
      `viteConf.resolve.alias = [`,
      `  ...aliasArray,`,
      `  { find: /^@apollo\\/client$/, replacement: '@apollo/client/core' },`,
      `]`,
    ].join('\n        ')

    // Case A: uncommented extendViteConf already exists — replace its entire body
    const evMatch = src.match(/extendViteConf\s*\(\s*(\w+)\s*\)\s*\{/)
    if (evMatch && !src.slice(0, evMatch.index).trimEnd().endsWith('//')) {
      const param = evMatch[1]
      src = src.replace(
        /extendViteConf\s*\(\s*\w+\s*\)\s*\{[\s\S]*?\n\s*\},/,
        `extendViteConf(${param}) {\n        ${aliasBody.replace(/viteConf/g, param)}\n      },`
      )
      ok('quasar.config.ts → alias Apollo inyectado en extendViteConf existente')
    } else {
      // Case B: no extendViteConf — add one inside build: {
      const newBlock = [
        `extendViteConf(viteConf) {`,
        `        ${aliasBody}`,
        `      },`,
      ].join('\n      ')
      src = src.replace(/build\s*:\s*\{/, `build: {\n      ${newBlock}`)
      ok('quasar.config.ts → extendViteConf con alias Apollo agregado')
    }
    changed = true
  }

  // 5. rawDefine: ensure __DEV__ is defined (required by @dsaldias/auth-web dist)
  if (src.includes('__DEV__')) {
    warn('quasar.config.ts → rawDefine __DEV__ ya existe')
  } else {
    if (/^\s*rawDefine\s*:\s*\{/m.test(src)) {
      // Uncommented rawDefine exists — append __DEV__ into it
      src = src.replace(
        /rawDefine\s*:\s*\{([^}]*)\}/,
        (_m, inner) => `rawDefine: {${inner.trimEnd()}${inner.trim() ? ', ' : ''  }__DEV__: String(ctx.dev) }`,
      )
      ok('quasar.config.ts → __DEV__ agregado a rawDefine existente')
    } else if (/\/\/\s*rawDefine\s*:/.test(src)) {
      // Commented rawDefine line — replace preserving indentation
      src = src.replace(
        /([ \t]*)\/\/\s*rawDefine\s*:.*\n/,
        (_, indent) => `${indent}rawDefine: { __DEV__: String(ctx.dev) },\n`,
      )
      ok('quasar.config.ts → rawDefine __DEV__ agregado (descomentado)')
    } else {
      // No rawDefine at all — inject inside build: {
      src = src.replace(/build\s*:\s*\{/, `build: {\n      rawDefine: { __DEV__: String(ctx.dev) },`)
      ok('quasar.config.ts → rawDefine __DEV__ agregado')
    }
    changed = true
  }

  // 6. Ensure defineConfig callback receives ctx param (needed for rawDefine)
  if (!src.match(/defineConfig\s*\(\s*\(\s*ctx\b/)) {
    // Replace (_ctx), (/* ctx */), or anonymous () with (ctx)
    src = src.replace(
      /defineConfig\s*\(\s*\(\s*(?:_ctx|\/\*[^*]*\*\/\s*)?\s*\)\s*=>/,
      'defineConfig((ctx) =>'
    )
    ok('quasar.config.ts → parámetro ctx agregado a defineConfig')
    changed = true
  }

  if (changed) writeFileSync(configPath, src, 'utf-8')
}

// ─── Install missing peer deps ────────────────────────────────────────────────

function installPeerDeps() {
  const pkgPath = join(cwd, 'package.json')
  if (!existsSync(pkgPath)) return
  const pkg    = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  const have   = new Set(Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }))
  const needed = ['@apollo/client@3.7.17', '@vue/apollo-composable', 'graphql', 'graphql-ws']
  const missing = needed.filter(p => !have.has(p))
  if (!missing.length) { ok('dependencias Apollo ya instaladas'); return }

  const pm  = detectPkgManager()
  const add = pm === 'npm' ? 'install' : 'add'
  info(`Instalando con ${pm}: ${missing.join(', ')}`)
  execSync(`${pm} ${add} ${missing.join(' ')}`, { stdio: 'inherit', cwd })
  ok('dependencias Apollo instaladas')
}

// ─── Copy CSS files ──────────────────────────────────────────────────────────

function copyStyles() {
  const cssDir = join(cwd, 'src/css')
  mkdirSync(cssDir, { recursive: true })

  const files = [
    { src: 'quasar.variables.scss', dest: 'quasar.variables.scss', force: true },
    { src: 'app.scss',              dest: 'auth-web.scss',          force: false },
    { src: 'tuto_driver.scss',      dest: 'tuto_driver.scss',       force: false },
  ]

  for (const f of files) {
    const srcPath  = join(pkgRoot, 'src/css', f.src)
    const destPath = join(cssDir, f.dest)
    if (!existsSync(srcPath)) { warn(`src/css/${f.src} no encontrado en el paquete`); continue }
    if (existsSync(destPath) && !f.force) { warn(`src/css/${f.dest} ya existe, no se sobrescribe`); continue }
    writeFileSync(destPath, readFileSync(srcPath, 'utf-8'), 'utf-8')
    ok(`src/css/${f.dest}`)
  }
}

// ─── Patch index.html ────────────────────────────────────────────────────────

function patchIndexHtml() {
  const htmlPath = join(cwd, 'index.html')
  if (!existsSync(htmlPath)) { warn('index.html no encontrado'); return }
  let src = readFileSync(htmlPath, 'utf-8')
  const marker = 'name="theme-color"'
  if (src.includes(marker)) { warn('index.html → theme-color ya existe'); return }
  src = src.replace(
    /<\/head>/,
    '    <meta name="theme-color" content="#054287" />\n  </head>'
  )
  writeFileSync(htmlPath, src, 'utf-8')
  ok('index.html → theme-color agregado')
}

// ─── Run ─────────────────────────────────────────────────────────────────────

console.log('\n🚀  Inicializando proyecto con @dsaldias/auth-web...\n')
console.log('── Archivos ─────────────────────────────────────────')

escribir('src/App.vue',            appVue,  true)  // siempre reemplaza el default de Quasar
escribir('src/boot/auth.ts',       bootAuth)
escribir('src/router/rutas-app.ts', rutasApp)
escribir('src/router/routes.ts',   routes,  true)  // siempre reemplaza el default de Quasar
escribir('.env',                   env)

console.log('\n── Estilos ──────────────────────────────────────────')
copyStyles()

console.log('\n── quasar.config.ts ─────────────────────────────────')
patchQuasarConfig()

console.log('\n── index.html ───────────────────────────────────────')
patchIndexHtml()

console.log('\n── Dependencias Apollo ──────────────────────────────')
installPeerDeps()

console.log(`
────────────────────────────────────────────────────
✨  Listo. Próximos pasos:

    1. Ajusta las URLs en .env si tu servidor corre en otro host
    2. quasar dev -m pwa

  Tus rutas van en:   src/router/rutas-app.ts
  Tus páginas van en: src/pages/app/
────────────────────────────────────────────────────
`)
