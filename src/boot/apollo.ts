import { boot } from 'quasar/wrappers'
import { AuthPlugin } from 'src/plugin'

export default boot(({ app }) => {
  app.use(AuthPlugin, {
    graphqlAuth: process.env.GRAPHQL_AUTH + '',
    graphqlApp: process.env.GRAPHQL_APP + '',
    wss: process.env.GRAPHQL_WSS + '',
    wssApp: process.env.GRAPHQL_WSS_APP + '',
    decodePassKey: process.env.DECODE_PASS_KEY + '',
  })
})
