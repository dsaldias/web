/* eslint-disable @typescript-eslint/no-explicit-any */
import { query } from 'stores/auth/server'
import { sql_roles } from './rolesService'
import { sql_usuarios } from './usuariosService'

export default class UsuariosRolesService {
  async roles_y_usuarios(queryUsuarios: any) {
    const sql = `
      query roles_y_usuarios($input: QueryUsuarios!) {
        roles: ${sql_roles}
        usuarios: ${sql_usuarios}
      }
    `

    return await query(sql, { input: queryUsuarios })
      .then((d) => d)
      .catch((e) => e)
  }
}
