import { c as mutar, l as query } from "./user-jN3O9LXh.js";
//#region src/stores/auth/services/usuariosService.ts
var sql_usuarios = `
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
`;
var UsuariosService = class {
	async usuarios(input) {
		return await query(`
      query usuarios($input: QueryUsuarios!) {
        ${sql_usuarios}
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async usuarios_conectados() {
		return await query(`
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
    `, {}).then((d) => d).catch((e) => e);
	}
	async usuario_by_id(id) {
		return await query(`
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
    `, { id }).then((d) => d).catch((e) => e);
	}
	async create_usuario(input) {
		return await mutar(`
      mutation create_usuario($input: NewUsuario!) {
        create_usuario(input: $input) {
          id
          nombres
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
	async update_usuario(input) {
		return await mutar(`
      mutation update_usuario($input: UpdateUsuario!) {
        update_usuario(input: $input) {
          id
          nombres
        }
      }
    `, { input }).then((d) => d).catch((e) => e);
	}
};
//#endregion
export { sql_usuarios as n, UsuariosService as t };
