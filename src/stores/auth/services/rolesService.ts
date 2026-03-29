/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, mutar } from 'stores/auth/server'

export const sql_roles = `
roles {
  id
  nombre
  descripcion
  jerarquia
  fecha_registro
  menus
  permisos
  usuarios
}
`

export default class RolesService {
  async roles() {
    const sql = `
      query roles {
        ${sql_roles}
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }

  // los mismos campos de menus y permisos se usan al editar el rol
  // al agregar o quitar un campo, probar el editar rol
  async rol_by_id(id: string) {
    const sql = `
      query rol_by_id($id: ID!) {
        rol_by_id(id: $id) {
          id
          nombre
          descripcion
          jerarquia
          permisos {
            metodo
            nombre
          }
          menus {
            id
            label
            path
            padre_id
          }
        }
      }
    `

    return await query(sql, { id: id })
      .then((d) => d)
      .catch((e) => e)
  }

  async update_rol(input: any) {
    const sql = `
      mutation update_rol($input: UpdateRol!) {
        update_rol(input: $input) {
          id
          nombre
        }
      }
    `

    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async create_rol(input: any) {
    const sql = `
      mutation create_rol($input: NewRol!) {
        create_rol(input: $input) {
          id
          nombre
        }
      }
    `

    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }
}
