import { query } from 'stores/auth/server'

export default class PermisosService {
  async permisos() {
    const sql = `
      query permisos {
        permisos {
          metodo
          nombre
          descripcion
          grupo
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }
}
