/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp, h } from 'vue'
import { Quasar } from 'quasar'
import Relogin from 'src/components/auth/login/re-login.vue'

let opened = false
export const mostrarRelogin = async () => {
  if (opened) return
  opened = true

  const container = document.createElement('div')
  container.id = 'relogin'

  const app = createApp({
    render() {
      return h(Relogin, {
        ref: 'reloginComponent',
      })
    },
  })

  app.use(Quasar, {
    config: {},
    plugins: {},
  })

  const instancia = app.mount(container)

  const d: any = instancia.$refs.reloginComponent

  if (d) await d.open()

  container.remove()
  app.unmount()
  opened = false
}
