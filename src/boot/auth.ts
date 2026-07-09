import { defineBoot } from '@quasar/app-vite'
import { AuthPlugin } from '@dsaldias/auth-web'
import '@dsaldias/auth-web/style'

// Opcional: componente propio que se renderiza en el dashboard principal
// import MiDashboard from 'src/pages/app/dashboard/mi-dashboard.vue'

export default defineBoot(({ app }) => {
  // Opcional: pasar un componente propio al dashboard
  // app.provide('authDashComponent', MiDashboard)

  app.use(AuthPlugin, {
    graphqlAuth:     process.env.GRAPHQL_AUTH       + '',
    graphqlApp:      process.env.GRAPHQL_APP        + '',
    wss:             process.env.GRAPHQL_WSS        + '',
    wssApp:          process.env.GRAPHQL_WSS_APP    + '',
    decodePassKey:   process.env.DECODE_PASS_KEY    + '',
    cookieThemeName: process.env.COOKIE_THEME_NAME  + '',
  })
})
