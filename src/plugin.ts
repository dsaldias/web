import type { App } from 'vue'
import { ApolloClient } from '@apollo/client/core'
import { ApolloClients, provideApolloClients } from '@vue/apollo-composable'
import { getClientOptions } from 'src/apollo'
import { getClientOptionsApp } from 'src/apollo/indexapp'
import { setConfig, type AuthConfig } from 'src/config'

export { type AuthConfig } from 'src/config'

export const AuthPlugin = {
  install(app: App, config: AuthConfig) {
    setConfig(config)

    const options = getClientOptions(config.graphqlAuth, config.wss)
    const apolloClient = new ApolloClient(options)

    const optionsApp = getClientOptionsApp(config.graphqlApp, config.wssApp)
    const apolloClientApp = new ApolloClient(optionsApp)

    const apolloClients: Record<string, ApolloClient<unknown>> = {
      default: apolloClient,
      cliente_ws: apolloClient,
      cliente_app: apolloClientApp,
      cliente_ws_app: apolloClientApp,
    }

    provideApolloClients(apolloClients)
    app.provide(ApolloClients, apolloClients)
  },
}
