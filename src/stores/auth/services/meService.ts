/* eslint-disable @typescript-eslint/no-explicit-any */
import { query } from 'stores/auth/server'

export default class MeService {
  async me(input: any) {
    const sql = `
      query me($input: InputMe!) {
        me(input: $input) {
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
          }
          roles {
            rol {
              id
              nombre
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
    `

    return await query(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }
}
