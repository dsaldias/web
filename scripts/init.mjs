#!/usr/bin/env node
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const cwd = process.cwd()
const ok  = (msg) => console.log(`✅ ${msg}`)
const warn = (msg) => console.log(`⚠️  ${msg} ya existe, no se sobrescribe`)
const err  = (msg) => console.error(`❌ ${msg}`)

function escribir(relPath, content, force = false) {
  const abs = join(cwd, relPath)
  if (existsSync(abs) && !force) { warn(relPath); return }
  const dir = abs.substring(0, abs.lastIndexOf('/'))
  mkdirSync(dir, { recursive: true })
  writeFileSync(abs, content, 'utf-8')
  ok(relPath)
}

// ─── App.vue ────────────────────────────────────────────────────────────────
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

// ─── boot/auth.ts ───────────────────────────────────────────────────────────
const bootAuth = `import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@dsaldias/auth-web'
import '@dsaldias/auth-web/style'

export default boot(({ app }) => {
  app.use(AuthPlugin, {
    graphqlAuth:   process.env.GRAPHQL_AUTH   + '',
    graphqlApp:    process.env.GRAPHQL_APP    + '',
    wss:           process.env.GRAPHQL_WSS    + '',
    wssApp:        process.env.GRAPHQL_WSS_APP + '',
    decodePassKey: process.env.DECODE_PASS_KEY + '',
  })
})
`

// ─── router/rutas-app.ts ────────────────────────────────────────────────────
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

// ─── router/routes.ts ───────────────────────────────────────────────────────
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

// ─── .env ───────────────────────────────────────────────────────────────────
const env = `# URLs del servidor RBAC (github.com/dsaldias/server)
GRAPHQL_AUTH=https://auth.sladia.site/query_auth
GRAPHQL_APP=https://auth.sladia.site/query
GRAPHQL_WSS=wss://auth.sladia.site/ws
GRAPHQL_WSS_APP=wss://auth.sladia.site/ws_app
GRAPHQL_SSE_APP=https://auth.sladia.site/sse

# Debe coincidir con DECODE_PASS_KEY del .env del servidor
DECODE_PASS_KEY=Lf5puh9aSuWEmh9Hx1ctoGSn8Qb5kYnn5lM+RBi7e3c=

# Features
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
`

// ─── Parchear quasar.config.ts ───────────────────────────────────────────────
function patchQuasarConfig() {
  const configPath = join(cwd, 'quasar.config.ts')
  if (!existsSync(configPath)) {
    err('quasar.config.ts no encontrado — agrega auth al array boot manualmente')
    return
  }
  let content = readFileSync(configPath, 'utf-8')
  if (content.includes("'auth'")) {
    warn("quasar.config.ts ya tiene boot 'auth'")
    return
  }
  // Busca boot: [ con cualquier contenido y agrega 'auth' al inicio
  content = content.replace(
    /boot:\s*\[/,
    "boot: [\n      'auth',"
  )
  writeFileSync(configPath, content, 'utf-8')
  ok("quasar.config.ts — boot 'auth' agregado")
}

// ─── Ejecutar ────────────────────────────────────────────────────────────────
console.log('\n🚀 Inicializando proyecto con @dsaldias/auth-web...\n')

escribir('src/App.vue',                   appVue,  true) // siempre reemplaza el default de Quasar
escribir('src/boot/auth.ts',              bootAuth)
escribir('src/router/rutas-app.ts',       rutasApp)
escribir('src/router/routes.ts',          routes, true) // siempre reemplaza el default de Quasar
escribir('.env',                           env)
patchQuasarConfig()

console.log(`
✨ Listo. Próximos pasos:

  1. Completa DECODE_PASS_KEY en .env (debe coincidir con el servidor)
  2. Ajusta las URLs en .env si tu servidor corre en otro puerto/host
  3. quasar dev -m pwa

  Tus rutas propias van en:  src/router/rutas-app.ts
  Tus páginas propias van en: src/pages/app/
`)
