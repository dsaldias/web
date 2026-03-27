import {
  type ApolloClientOptions,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { Kind, OperationTypeNode } from 'graphql'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { useLoginStore } from 'stores/auth/user'
import { setContext } from '@apollo/client/link/context'

const mainLink = setContext((_, { headers }) => {
  const store = useLoginStore()
  const rolunidad = store.rolUnidad
  const r_id = rolunidad.rol ? rolunidad.rol.id : null
  const u_id = rolunidad.unidad ? rolunidad.unidad.id : null
  const skey = store.sessionkey

  return {
    headers: {
      ...headers,
      unidad: u_id,
      rol: r_id,
      sessionkey: skey,
    },
  }
})

// SE CREO ESTO PORQQUE EL WEBSOCKET ES COMPARTIDO
// POR MAS QUE TENGAN client_id DIFERENTES
// ENTONCES SI SE CIERRA UNO, SE CIERRAN AMBOS
export function getClientOptionsApp(url: string, url_wa: string) {

  const subscriptionLink = new GraphQLWsLink(
    createClient({
      url: url_wa,
      lazy: true,
      // no funka la reconeccion :( la sol lo hice notificaciones.ts
      // usando setTimeout
      /* retryAttempts: Infinity,
      retryWait: (attempt) => {
        const maxDelay = 600000
        const delay = Math.min(1000 * 2 ** attempt, maxDelay)
        return new Promise((resolve) => setTimeout(resolve, delay))
      }, */
      on: {
        connected: () => {
          console.log('Connected to WebSocketApp')
        },
        closed: () => {
          console.log('WebSocketApp connection closed')
        },
        error: (err) => {
          console.error('WebSocketApp error:', err)
        },
        connecting: () => {
          console.log('Reconnecting to WebSocketApp...')
        },
      },
    }),
  )

  const httpLink = mainLink.concat(
    createHttpLink({
      uri: url,
      headers: {
        authorization: `Bearer `,
      },
      credentials: 'include' // mandar cookie
    }),
  )

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query)

      return (
        definition.kind === Kind.OPERATION_DEFINITION &&
        definition.operation === OperationTypeNode.SUBSCRIPTION
      )
    },
    subscriptionLink,
    httpLink,
  )

  return <ApolloClientOptions<unknown>>Object.assign(
    // General options.
    <ApolloClientOptions<unknown>>{
      link,

      cache: new InMemoryCache(),
    },

    // Specific Quasar mode options.
    process.env.MODE === 'spa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'ssr'
      ? {
          //
        }
      : {},
    process.env.MODE === 'pwa'
      ? {
          //
        }
      : {},
    process.env.MODE === 'bex'
      ? {
          //
        }
      : {},
    process.env.MODE === 'cordova'
      ? {
          //
        }
      : {},
    process.env.MODE === 'capacitor'
      ? {
          //
        }
      : {},
    process.env.MODE === 'electron'
      ? {
          //
        }
      : {},

    // dev/prod options.
    process.env.DEV
      ? {
          //
        }
      : {},
    process.env.PROD
      ? {
          //
        }
      : {},

    // For ssr mode, when on server.
    process.env.MODE === 'ssr' && process.env.SERVER
      ? {
          ssrMode: true,
        }
      : {},
    // For ssr mode, when on client.
    process.env.MODE === 'ssr' && process.env.CLIENT
      ? {
          ssrForceFetchDelay: 100,
        }
      : {},
  )
}
