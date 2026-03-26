/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSubscription } from '@vue/apollo-composable'
import { watch } from 'vue'
import type { Opciones } from './utils'
import { defectoOps, parseErrors, parseTextErrorWs } from './utils'
import { Observable } from 'rxjs'

export interface Valores {
  data: any
  stop: () => void
}

export const subs = (sql: any, variables: any = {}, opciones: Opciones = defectoOps) => {
  return new Observable((observer) => {
    const {
      error,
      // subscription: envio,
      stop,
      onResult,
    } = useSubscription(sql, variables, {
      fetchPolicy: 'network-only',
      clientId: 'cliente_ws',
    })

    const stopError = watch(error, () => {
      if (error.value) {
        observer.error(error.value)
        if (opciones.showNotyError) {
          parseTextErrorWs(error.value?.message)
        }
      }
    })

    onResult((res) => {
      if (res.errors) {
        if (opciones.showNotyError) parseErrors(res.errors)
        observer.error(res.errors)
      } else {
        const d: Valores = {
          data: res.data,
          stop: stop,
        }
        observer.next(d)
      }
    })

    return () => {
      stopError()
      stop()
      // Cleanup logic if necessary, such as unsubscribing
      // For example, you can use a flag to stop processing new results
      // or use the `envio` subscription object to unsubscribe if it supports it
    }
  })
}
