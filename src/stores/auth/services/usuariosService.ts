/* eslint-disable @typescript-eslint/no-explicit-any */
import { mutar, query } from 'stores/auth/server'

export const sql_usuarios = `
usuarios(query: $input) {
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
  fecha_registro
  fecha_update
  estado
  last_login
  oauth_id
  foto_url
  latitud
  longitud
  conexiones
}
`

export default class UsuariosService {
  async usuarios(input: any) {
    const sql = `
      query usuarios($input: QueryUsuarios!) {
        ${sql_usuarios}
      }
    `

    return await query(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async usuarios_conectados() {
    const sql = `
      query usuarios_conectados {
        usuarios_conectados{
          id
          nombres
          apellido1
          apellido2
          documento
          celular
          correo
          sexo
          username
          fecha_registro
          estado
          last_login
          conexiones
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }

  async usuario_by_id(id: string) {
    const sql = `
      query usuario_by_id($id: ID!) {
        usuario_by_id(id: $id) {
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
          fecha_registro
          fecha_update
          estado
          last_login
          oauth_id
          foto_url
          latitud
          longitud
          conexiones
          menus_sueltos {
            id
            label
          }
          permisos_sueltos {
            metodo
            nombre
          }
          roles {
            rol_id
            unidad_id
            rol_name
            unidad_name
          }
        }
      }
    `

    return await query(sql, { id: id })
      .then((d) => d)
      .catch((e) => e)
  }

  async create_usuario(input: any) {
    const sql = `
      mutation create_usuario($input: NewUsuario!) {
        create_usuario(input: $input) {
          id
          nombres
        }
      }
    `

    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async update_usuario(input: any) {
    const sql = `
      mutation update_usuario($input: UpdateUsuario!) {
        update_usuario(input: $input) {
          id
          nombres
        }
      }
    `

    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }
}
