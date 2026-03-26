/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'
import NotisService from 'src/stores/auth/services/notisService'
import { mostrarAviso } from './avisos/avisos'
import { eventBus } from './event_bus'

const xsesionkey_name = process.env.XSESIONKEY_NAME || ''
const xsesion_time = process.env.XSESION_TIME || ''
const xsesion_label = process.env.XSESION_LABEL || ''
const xdatauser_name = process.env.XDATAUSER_NAME || ''
const xmenus_name = process.env.XMENUS_NAME || ''
const xdatauser_rolunidad = process.env.XDATAUSER_ROLUNIDAD || ''
const xthema_cuaderno = process.env.XTHEMA_CUADERNO || ''
const xlast_dark_state = process.env.LAST_DARK_STATE || ''
const notisService = new NotisService()

const get_storage_name_plain = (clave: string) => {
  const r = localStorage.getItem(clave)
  if (r) return atob(r)
  return null
}
const get_storage_name_number = (clave: string): number => {
  const r = localStorage.getItem(clave)
  if (r) return parseInt(r)
  return 0
}
const get_storage_name_bool = (clave: string): boolean => {
  const r = localStorage.getItem(clave)
  let res = false
  if (r) res = r == 'true'
  return res
}
const get_storage_name = (clave: string, defecto = '') => {
  const r = localStorage.getItem(clave)
  if (r) return JSON.parse(atob(r))
  return defecto
}

const notis = async () => {
  const r: any = await notisService.notificaciones()
  if (r && r.notificaciones && r.notificaciones.length > 0) {
    void mostrarAviso(r.notificaciones)
  }
}

export const useLoginStore = defineStore('userstore', {
  state: () => ({
    sessionkey: ref(get_storage_name_plain(xsesionkey_name)),
    sessiontime: ref(get_storage_name_number(xsesion_time)),
    dataUser: ref(get_storage_name(xdatauser_name, '{}')),
    rolUnidad: ref(get_storage_name(xdatauser_rolunidad, '{}')),
    menus: ref(get_storage_name(xmenus_name, '[]')),
    tiempoSession: ref(get_storage_name_plain(xsesion_label)),
    ws_noti_status: ref(''),
    ws_total_conectados: ref(''),
    ws_conectados: ref(''),
    loading_menus: ref(false),
    notify_data: {},
    thema_cuaderno: ref(get_storage_name_bool(xthema_cuaderno)),
    last_dark_state: ref(get_storage_name_bool(xlast_dark_state)),
  }),
  getters: {
    getSessionKey: (state) => computed(() => state.sessionkey),
    getSessionTime: (state) => computed(() => state.sessiontime),
    getDataUser: (state) => computed(() => state.dataUser),
    getMenus: (state) => computed(() => state.menus),
    getTiempoSession: (state) => computed(() => state.tiempoSession),
    getWsNoti: (state) => computed(() => state.ws_noti_status),
    getWsTotalContectados: (state) => computed(() => state.ws_total_conectados),
    getWsContectados: (state) => computed(() => state.ws_conectados),
    getNotifyData: (state) => computed(() => state.notify_data),
    getThemaCuaderno: (state) => computed(() => state.thema_cuaderno),
    getLastDarkstate: (state) => computed(() => state.last_dark_state),
  },
  actions: {
    setSessionKey(xskey?: string, recreate = true) {
      this.sessionkey = null
      /*
      en el mainlayout se usa el if
      esto causa un efecto de reload :)
      <q-page-container >
        <Login v-if="!store.dataUser.usuario" />
        <router-view v-else />
      </q-page-container>
      */
      if (!xskey) {
        this.clearStore(true)
      } else {
        this.setNewSessionKey(xskey)
      }
      if (recreate) this.dataUser = {}
    },
    setNewSessionKey(xskey: string) {
      localStorage.setItem(xsesionkey_name, btoa(xskey))
      this.sessionkey = xskey
    },
    setNewSessionTime(xskey: number) {
      localStorage.setItem(xsesion_time, xskey + '')
      this.sessiontime = xskey

      const now = new Date()
      now.setMinutes(now.getMinutes() + xskey)

      const hours = String(now.getHours()).padStart(2, '0')
      const mins = String(now.getMinutes()).padStart(2, '0')
      const secs = String(now.getSeconds()).padStart(2, '0')

      const tiempo_end = `${hours}:${mins}:${secs}`

      this.tiempoSession = tiempo_end
      localStorage.setItem(xsesion_label, btoa(tiempo_end))
    },
    setUser(user: any) {
      localStorage.setItem(xdatauser_name, btoa(JSON.stringify(user)))
      this.dataUser = user
    },
    setMenus(menus: any) {
      localStorage.setItem(xmenus_name, btoa(JSON.stringify(menus)))
      this.menus = menus
    },
    setLoadingMenus(f: boolean) {
      this.loading_menus = f
    },
    setWsNoti(e: string) {
      this.ws_noti_status = e
      if (e == 'connected') void notis()
    },
    setWsTotalConectados(e: string) {
      this.ws_total_conectados = e
    },
    setWsConectados(e: string) {
      this.ws_conectados = e
    },
    setRolUnidad(rolunidad: any) {
      localStorage.setItem(xdatauser_rolunidad, btoa(JSON.stringify(rolunidad)))
      this.rolUnidad = rolunidad
    },
    setNotifyData(data: any) {
      this.notify_data = data
    },
    setThemaCuaderno(xskey: boolean) {
      localStorage.setItem(xthema_cuaderno, xskey + '')
      // this.thema_cuaderno = xskey

      let metaThemeColor = document.querySelector('.grid-themex')
      if (!metaThemeColor) metaThemeColor = document.querySelector('.grid-theme')
      if (metaThemeColor) {
        const tc = metaThemeColor.classList.contains('grid-themex')
        if (tc) {
          metaThemeColor.classList.remove('grid-themex')
          metaThemeColor.classList.add('grid-theme')
        } else {
          metaThemeColor.classList.add('grid-themex')
          metaThemeColor.classList.remove('grid-theme')
        }
      }
    },
    setLastDarkstate(xskey: boolean) {
      localStorage.setItem(xlast_dark_state, xskey + '')
      this.last_dark_state = xskey
    },
    clearStore(reload = true) {
      localStorage.removeItem(process.env.COOKIE_THEME_NAME + '')
      localStorage.removeItem(process.env.XDATAUSER_ROLUNIDAD + '')
      localStorage.removeItem(process.env.XSESION_TIME + '')
      localStorage.removeItem(process.env.XSESIONKEY_NAME + '')
      localStorage.removeItem(process.env.XSESION_LABEL + '')
      localStorage.removeItem(process.env.XDATAUSER_NAME + '')
      localStorage.removeItem(process.env.XMENUS_NAME + '')
      localStorage.removeItem(process.env.XTHEMA_CUADERNO + '')
      localStorage.removeItem(process.env.X_CLIMA + '')
      // this.setRolUnidad(null)

      eventBus.emit('on_logout', { reload: reload })

      if (reload) {
        window.location.reload()
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot))
}
