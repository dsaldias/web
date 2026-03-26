/* eslint-disable @typescript-eslint/no-explicit-any */
import { query } from 'stores/auth/server'

export default class PerfilService {
  async update_perfil(input: any) {
    const sql = `
      mutation update_perfil($input: UpdatePerfil!) {
        update_perfil(input: $input) {
          id
        }
      }
    `
    return await query(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async get_imagen(url: string) {
    const sql = `
      query get_imagen($url: String!) {
        get_imagen(url: $url)
      }
    `
    return await query(sql, { url: url })
      .then((d) => d)
      .catch((e) => e)
  }
}
