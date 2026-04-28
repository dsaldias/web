// Plugin principal — usar en el boot file del proyecto consumidor
export { AuthPlugin } from 'src/plugin'
export type { AuthConfig } from 'src/config'

// Stores y estado
export { useLoginStore } from 'src/stores/auth/user'
export * from 'src/stores/auth/menus'
export * from 'src/stores/auth/notificaciones'
export * from 'src/stores/auth/avisos/avisos'
export * from 'src/stores/auth/relogin'

// Encriptación y utilidades
export { encriptarString } from 'src/stores/auth/cifrado'
export {
  parseErrors, mostrarNotifyError, toast1,
  parseTextError, parseTextErrorWs,
  parseFecha, ajustarFechaUTC, ajustarFechaLocal,
  toHomePath, chartAreaBorder,
} from 'src/stores/auth/utils'
export * from 'src/stores/auth/event_bus'

// Wrappers Apollo — auth (query_auth / ws)
export { mutar as mutarAuth, query as queryAuth, defectoOps as defectoOpsAuth } from 'src/stores/auth/server'
export type { Opciones as OpcionesAuth } from 'src/stores/auth/server'

// Wrappers Apollo — app (query / ws_app)
export { mutar as mutarApp, query as queryApp, defectoOps as defectoOpsApp } from 'src/stores/auth/serverapp'
export type { Opciones as OpcionesApp } from 'src/stores/auth/serverapp'

// Subscripciones WebSocket — auth
export { subs as subsAuth } from 'src/stores/auth/serverws'
export type { Valores as ValoresAuth } from 'src/stores/auth/serverws'

// Subscripciones WebSocket — app
export { subs as subsApp } from 'src/stores/auth/serverwsapp'
export type { Valores as ValoresApp } from 'src/stores/auth/serverwsapp'

// Servicios GraphQL
export * from 'src/stores/auth/services/loginService'
export { default as LoginService } from 'src/stores/auth/services/loginService'
export * from 'src/stores/auth/services/meService'
export { default as MeService } from 'src/stores/auth/services/meService'
export * from 'src/stores/auth/services/perfilService'
export { default as PerfilService } from 'src/stores/auth/services/perfilService'
export * from 'src/stores/auth/services/rolesService'
export { default as RolesService } from 'src/stores/auth/services/rolesService'
export * from 'src/stores/auth/services/usuariosService'
export { default as UsuariosService } from 'src/stores/auth/services/usuariosService'
export * from 'src/stores/auth/services/usuariosRolesService'
export { default as UsuariosRolesService } from 'src/stores/auth/services/usuariosRolesService'
export * from 'src/stores/auth/services/unidadesService'
export { default as UnidadesService } from 'src/stores/auth/services/unidadesService'
export * from 'src/stores/auth/services/permisosService'
export { default as PermisosService } from 'src/stores/auth/services/permisosService'
export * from 'src/stores/auth/services/menusService'
export { default as MenusService } from 'src/stores/auth/services/menusService'
export * from 'src/stores/auth/services/notisService'
export { default as NotisService } from 'src/stores/auth/services/notisService'
export * from 'src/stores/auth/services/ticketsService'
export { default as TicketsService } from 'src/stores/auth/services/ticketsService'
export * from 'src/stores/auth/services/dashboardService'
export { default as DashboardService } from 'src/stores/auth/services/dashboardService'

// Componentes de autenticación
export { default as LoginView } from 'src/components/auth/login/LoginView.vue'
export { default as ReLogin } from 'src/components/auth/login/re-login.vue'
export { default as BtnPerfil } from 'src/components/auth/perfil/boton_perfil.vue'
export { default as EditarPerfil } from 'src/components/auth/perfil/editar_perfil.vue'
export { default as RolesSelect } from 'src/components/auth/roles/roles-select.vue'
export { default as AvisosShow } from 'src/components/auth/avisos/avisos_show.vue'
export { default as EdgeLight } from 'src/components/auth/EdgeLight.vue'

// Layouts
export { default as MainLayout } from 'src/layouts/MainLayout.vue'
export { default as LandingLayout } from 'src/layouts/LandingLayout.vue'

// Páginas del panel RBAC (usuarios, roles, unidades, tickets, etc.)
export { default as UsuariosIndex } from 'src/pages/auth/usuarios/usuarios-index.vue'
export { default as RolesIndex } from 'src/pages/auth/roles/roles-index.vue'
export { default as UnidadesIndex } from 'src/pages/auth/unidades/unidades-index.vue'
export { default as TicketsIndex } from 'src/pages/auth/tickets/tickets_index.vue'
export { default as NotisIndex } from 'src/pages/auth/notificaciones/notis-index.vue'
export { default as DashAuthIndex } from 'src/pages/auth/dashboard/dash-index-auth.vue'

// Tipos TypeScript
export type * from 'src/components/models'
