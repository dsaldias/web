import type { RouteRecordRaw } from 'vue-router'
import { rutas } from './rutas'
import { rutaspublicas } from './rutas_publicas'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/roles', component: () => import('pages/auth/roles/roles-index.vue') },
      { path: '/unidades', component: () => import('pages/auth/unidades/unidades-index.vue') },
      { path: '/usuarios', component: () => import('pages/auth/usuarios/usuarios-index.vue') },
      { path: '/avisos', component: () => import('pages/auth/notificaciones/notis-index.vue') },
      { path: '/tickets', component: () => import('pages/auth/tickets/tickets_index.vue') },
      ...rutas,
    ],
  },
  {
    path: '/login',
    component: () => import('components/auth/login/LoginView.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/principal.html',
    component: () => import('layouts/LandingLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  ...rutaspublicas,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
