import 'src/css/club-neon.css'
import type { App } from 'vue'
import { ApolloClient } from '@apollo/client/core'
import { ApolloClients, provideApolloClients } from '@vue/apollo-composable'
import { Dark, Cookies } from 'quasar'
import { getClientOptions } from 'src/apollo'
import { getClientOptionsApp } from 'src/apollo/indexapp'
import { setConfig, type AuthConfig } from 'src/config'
import { setNotifyBridge } from 'src/stores/auth/notifyBridge'

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
    const cookieName = config.cookieThemeName || 'quasar-theme-auth'
    const cookieOpts = { expires: 365, path: '/' }
    const isDark = Cookies.get(cookieName) === 'true'
    // Añadir clase inmediatamente para que el CSS dark funcione sin flash
    if (isDark) document.body.classList.add('body--dark')
    // Usar $q.dark.set() vía globalProperties — mismo path que el toggle,
    // garantiza que sea la instancia correcta de Quasar del consumidor.
    // También capturamos $q.notify para el bridge (evita problemas de resolución
    // de módulo cuando Notify se importa desde la lib vs. el consumer).
    setTimeout(() => {
      const $q = app.config.globalProperties.$q as
        | { dark: { set: (v: boolean) => void }; notify: (opts: unknown) => void }
        | undefined
      if ($q?.dark) $q.dark.set(isDark)
      else Dark.set(isDark)
      if ($q?.notify) setNotifyBridge((opts) => $q.notify(opts))
    }, 0)

    // MutationObserver: detecta el cambio de body--dark directamente en el DOM.
    // Más fiable que watch(() => Dark.isActive) cuando el plugin corre como librería
    // externa, ya que no depende del scope reactivo de Vue en install().
    const syncTheme = (isDark: boolean) => {
      Cookies.set(cookieName, String(isDark), cookieOpts)
      const meta = document.querySelector('meta[name=theme-color]')
      if (meta) {
        const primary = getComputedStyle(document.documentElement)
          .getPropertyValue('--primary')
          .trim()
        meta.setAttribute('content', isDark ? '#040b25' : primary)
      }
    }
    new MutationObserver(() => {
      syncTheme(document.body.classList.contains('body--dark'))
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] })
  },
}
