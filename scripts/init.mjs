#!/usr/bin/env node
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

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

const env = `# URLs del servidor RBAC (github.com/dsaldias/server)
GRAPHQL_AUTH=https://auth.sladia.site/query_auth
GRAPHQL_APP=https://auth.sladia.site/query
GRAPHQL_WSS=wss://auth.sladia.site/ws
GRAPHQL_WSS_APP=wss://auth.sladia.site/ws_app

# Debe coincidir con DECODE_PASS_KEY del .env del servidor
DECODE_PASS_KEY=Lf5puh9aSuWEmh9Hx1ctoGSn8Qb5kYnn5lM+RBi7e3c=

# Features
NOTIFICACIONES_SUBS=si
SHOW_TIME_LABEL=si
SHOW_LANDING_PAGE=
SHOW_TUTO_VIDEO=
SHOW_DASH_REPORTE1=si
SHOW_DASH_REPORTE2=si
SHOW_DASH_APP=si
ACCEPT_OAUTH=
SHOW_ROL_SELECT=si
SHOW_LOGIN_BUTTON=si

COOKIE_THEME_NAME=quasar-theme-auth_x
XDATAUSER_ROLUNIDAD=xrolunidad_auth_x
XSESIONKEY_NAME=xskey-auth_x
XSESION_TIME=xskeytime-auth_x
XSESION_LABEL=xskeylabel-auth_x
XDATAUSER_NAME=xdataUser-auth_x
XMENUS_NAME=xmenus-auth_x
XTHEMA_CUADERNO=xthema_cuarderno-auth_x
X_CLIMA=xclima-auth_x
LAST_DARK_STATE=quasar-last-dark-state_x
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
    src = src.replace(/boot\s*:\s*\[/, "boot: [\n      'auth',")
    ok("quasar.config.ts → boot 'auth' agregado")
    changed = true
  } else {
    warn("quasar.config.ts → boot 'auth' ya existe")
  }

  // 2. framework.plugins: ensure Notify, Cookies, Meta
  const requiredPlugins = ['Notify', 'Cookies', 'Meta']
  for (const plugin of requiredPlugins) {
    if (!src.includes(`'${plugin}'`) && !src.includes(`"${plugin}"`)) {
      // Insert before closing bracket of plugins array
      src = src.replace(
        /plugins\s*:\s*\[([^\]]*)\]/,
        (match, inner) => `plugins: [${inner.trimEnd()}${inner.trim() ? ', ' : ''}'${plugin}']`
      )
      ok(`quasar.config.ts → plugin '${plugin}' agregado`)
      changed = true
    }
  }

  // 3. Apollo alias — fixes @vue/apollo-composable subpath resolution in Vite
  const apolloMarker = '@apollo/client/core/index.js'
  if (src.includes(apolloMarker)) {
    warn('quasar.config.ts → alias Apollo ya existe')
  } else {
    // Lines to inject (simple, no ??= or optional chaining)
    const aliasLines = [
      `if (!viteConf.resolve) { viteConf.resolve = {} }`,
      `        viteConf.resolve.alias = Object.assign(viteConf.resolve.alias || {}, {`,
      `          '${apolloMarker}': '@apollo/client',`,
      `        })`,
    ].join('\n        ')

    // Case A: uncommented extendViteConf already exists — inject at start of body
    // Match: extendViteConf(anyParam) { OR extendViteConf (anyParam) {
    const evMatch = src.match(/extendViteConf\s*\(\s*(\w+)\s*\)\s*\{/)
    if (evMatch && !src.slice(0, evMatch.index).trimEnd().endsWith('//')) {
      const param = evMatch[1]
      // Replace every occurrence of ??= with compatible syntax first
      src = src.replace(new RegExp(`${param}\\.resolve\\s*\\?\\?=\\s*\\{\\}`, 'g'), `if (!${param}.resolve) { ${param}.resolve = {} }`)
      src = src.replace(new RegExp(`${param}\\.resolve\\.alias\\s*\\?\\?`, 'g'), `${param}.resolve.alias ||`)
      // Inject lines at start of body
      src = src.replace(
        /extendViteConf\s*\(\s*\w+\s*\)\s*\{/,
        (m) => m + '\n        ' + aliasLines.replace(/viteConf/g, param)
      )
      ok('quasar.config.ts → alias Apollo inyectado en extendViteConf existente')
    } else {
      // Case B: no extendViteConf — add one inside build: {
      const newBlock = [
        `extendViteConf(viteConf) {`,
        `        ${aliasLines}`,
        `      },`,
      ].join('\n      ')
      src = src.replace(/build\s*:\s*\{/, `build: {\n      ${newBlock}`)
      ok('quasar.config.ts → extendViteConf con alias Apollo agregado')
    }
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
  const needed = ['@apollo/client', '@vue/apollo-composable', 'graphql', 'graphql-ws']
  const missing = needed.filter(p => !have.has(p))
  if (!missing.length) { ok('dependencias Apollo ya instaladas'); return }

  const pm  = detectPkgManager()
  const add = pm === 'npm' ? 'install' : 'add'
  info(`Instalando con ${pm}: ${missing.join(', ')}`)
  execSync(`${pm} ${add} ${missing.join(' ')}`, { stdio: 'inherit', cwd })
  ok('dependencias Apollo instaladas')
}

// ─── Run ─────────────────────────────────────────────────────────────────────

console.log('\n🚀  Inicializando proyecto con @dsaldias/auth-web...\n')
console.log('── Archivos ─────────────────────────────────────────')

escribir('src/App.vue',            appVue,  true)  // siempre reemplaza el default de Quasar
escribir('src/boot/auth.ts',       bootAuth)
escribir('src/router/rutas-app.ts', rutasApp)
escribir('src/router/routes.ts',   routes,  true)  // siempre reemplaza el default de Quasar
escribir('.env',                   env)

console.log('\n── quasar.config.ts ─────────────────────────────────')
patchQuasarConfig()

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
