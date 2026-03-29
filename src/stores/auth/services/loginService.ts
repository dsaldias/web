/* eslint-disable @typescript-eslint/no-explicit-any */
import { mutar } from 'stores/auth/server'
import { encriptarString } from '../cifrado'

export default class LoginService {
  async login(input: any) {
    const pw: any = await encriptarString(input.password)
    input.password = pw.textoCifradoBase64
    input.iv64 = pw.ivBase64

    const sql = `
      mutation login($input: NewLogin!) {
        login(input: $input) {
          session_time
          session_key
          me {
            usuario {
              id
              nombres
              apellido1
              apellido2
              documento
              celular
              correo
              sexo
              direccion
              username
              estado
              foto_url
              last_login
              oauth_id
              oauth_id
              conexiones
            }
            menus {
              id
              label
              path
              icon
              color
              grupo
              orden
              padre_id
            }
            roles {
              rol {
                id
                nombre
                jerarquia
              }
              unidad {
                id
                nombre
              }
            }
            permisos_sueltos {
              metodo
              nombre
            }
          }
        }
      }
    `

    const v = {
      input: input,
    }
    return await mutar(sql, v)
      .then((d) => d)
      .catch((e) => e)
  }

  async createOauth(input: any) {
    const sql = `
      mutation createOauth($input: NewUsuarioOauth!) {
        createOauth(input: $input) {
          id
        }
      }
    `

    const v = { input: input }
    return await mutar(sql, v)
      .then((d) => d)
      .catch((e) => e)
  }
}
