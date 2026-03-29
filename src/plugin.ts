import 'src/css/club-neon.css'
import type { App } from 'vue'
import { watch, effectScope } from 'vue'
import { ApolloClient } from '@apollo/client/core'
import { ApolloClients, provideApolloClients } from '@vue/apollo-composable'
import { Dark, Cookies } from 'quasar'
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

    // Inicializar dark mode desde cookie
    // const cookieName = config.cookieThemeName || 'quasar-theme-auth'
    const cookieName = process.env.COOKIE_THEME_NAME || ''
    const cookieOpts = { expires: 365, path: '/' }
    Dark.set(Cookies.get(cookieName) === 'true')
    effectScope(true).run(() => {
      watch(
        () => Dark.isActive,
        (val) => {
          Cookies.set(cookieName, String(val), cookieOpts);
          const metaThemeColor = document.querySelector('meta[name=theme-color]')
          if (metaThemeColor) {
            const pColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
            const color = val ? '#040b25' : pColor
            metaThemeColor.setAttribute('content', color)
            window.alert(color)
          }
         },
      )
    })
  },
}
