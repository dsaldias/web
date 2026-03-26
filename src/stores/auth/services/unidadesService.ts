/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, mutar } from 'stores/auth/server'

export default class UnidadesService {
  async unidades() {
    const sql = `
      query unidades {
        unidades {
          id
          nombre
          descripcion
          orden
          latitud
          longitud
          fecha_registro
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }

  async create_unidad(input: any) {
    const sql = `
      mutation create_unidad($input: NewUnidad!) {
        create_unidad(input: $input) {
          id
          nombre
        }
      }
    `

    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async update_unidad(input: any) {
    const sql = `
      mutation update_unidad($input: UpdUnidad!) {
        update_unidad(input: $input) {
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
