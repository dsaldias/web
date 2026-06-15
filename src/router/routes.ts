import type { RouteRecordRaw } from 'vue-router'
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
import { rutasPublicasApp } from './rutas-publicas-app'

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
  ...rutasPublicasApp,
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
]

export default routes
