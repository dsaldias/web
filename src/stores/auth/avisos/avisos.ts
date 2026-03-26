/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp, h } from 'vue'
import { Quasar } from 'quasar'
import Aviso from 'src/components/auth/avisos/avisos_show.vue'

let opened = false
export const mostrarAviso = async (xnotis: any) => {
  if (opened) return
  opened = true

  const container = document.createElement('div')
  container.id = 'aviso'

  const app = createApp({
    render() {
      return h(Aviso, {
        ref: 'avisoComponent',
      })
    },
  })

  app.use(Quasar, {
    config: {},
    plugins: {},
  })

  const instancia = app.mount(container)

  const d: any = instancia.$refs.avisoComponent

  if (d) await d.open(xnotis)

  container.remove()
  app.unmount()
  opened = false
}
