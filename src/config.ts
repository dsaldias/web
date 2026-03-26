export interface AuthConfig {
  graphqlAuth: string
  graphqlApp: string
  wss: string
  wssApp: string
  decodePassKey: string
}

let _config: AuthConfig | null = null

export function setConfig(config: AuthConfig) {
  _config = config
}

export function getConfig(): AuthConfig {
  if (!_config) {
    throw new Error('[dsaldias/auth-web] Plugin no inicializado. Llama app.use(AuthPlugin, config) en tu boot file.')
  }
  return _config
}
