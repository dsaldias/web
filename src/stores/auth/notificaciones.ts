/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'
import gql from 'graphql-tag'
import { Notify } from 'quasar'
import { subs } from 'src/stores/auth/serverws'

const msg = ref('')
const subscriptionRef: any = ref(null)
export const edgeLightSignal = ref(0)
// Variable para controlar el timeout
const retryTimeout: any = ref(null)

// Define la suscripción GraphQL
const NOTIFICACIONES_SUBS = gql`
  subscription notificaciones_subs {
    notificaciones_subs {
      title
      data_json
    }
  }
`

// Función para iniciar la suscripción
const iniciarSubscripcion = () => {
  // console.log('iniciarSubscripcion')
  if (retryTimeout.value) {
    clearTimeout(retryTimeout.value)
    retryTimeout.value = null
  }

  if (subscriptionRef.value) {
    subscriptionRef.value.unsubscribe() // Cerrar cualquier suscripción activa anterior
  }

  subscriptionRef.value = subs(NOTIFICACIONES_SUBS).subscribe({
    next(result: any) {
      const notificacion = result.data.notificaciones_subs
      // console.log('Notificación recibida:', notificacion)
      const dt = notificacion.data_json
      let datos = null
      let color = 'orange'
      let tipo = ''
      const datanot: any = {
        message: notificacion.title,
        position: 'top-right',
        type: 'positive',
        progress: true,
        progressClass: 'bg-white text-white',
      }
      if ((dt + '').startsWith('{')) {
        const p = JSON.parse(dt)
        datos = p['datos']
        color = p['color']
        tipo = p['tipo']

        if (color) {
          delete datanot.type
          datanot.color = color
        }
        void datitos(datos)
      }

      // Mostrar la notificación
      if (tipo != 'conectados') {
        Notify.create(datanot)
        edgeLightSignal.value++
      }

      if (tipo == 'conectados') {
        void setconectadosTxt(datos)
      }
    },
    error(err) {
      // console.error('Error en la suscripción:', err)
      msg.value = err.message || 'Error en la suscripción'
      // Reintentar con backoff exponencial
      // const delay = Math.min(3000 * (subscriptionRef.value?.retryCount || 1), 30000) // Máximo 30 segundos
      const delay = 15000
      retryTimeout.value = setTimeout(iniciarSubscripcion, delay)
      if (subscriptionRef.value) {
        subscriptionRef.value.retryCount = (subscriptionRef.value?.retryCount || 0) + 1
      }
    },
  })
}

const datitos = async (datos: any) => {
  if (!datos) return
  const { useLoginStore } = await import('./user')
  const store = useLoginStore()
  store.setNotifyData(datos)
}

const setconectadosTxt = async (datos: any) => {
  const { useLoginStore } = await import('./user')
  const store = useLoginStore()
  // store.setWsTotalConectados(title)
  store.setWsTotalConectados(datos.total_conectados)
  store.setWsConectados(datos.conectados)
}

// Limpieza de la suscripción (puedes llamarla cuando lo necesites)
const detenerSubscripcion = () => {
  if (subscriptionRef.value) {
    subscriptionRef.value.unsubscribe()
    subscriptionRef.value = null
  }
  if (retryTimeout.value) {
    clearTimeout(retryTimeout.value)
  }
}

export { iniciarSubscripcion, detenerSubscripcion }
