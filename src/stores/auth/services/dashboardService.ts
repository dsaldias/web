import { query } from 'stores/auth/server'

export default class DashboardService {
  async reporte1() {
    const sql = `
      query reporte1 {
        reporte1 {
          nombre
          valor
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }

  async reporte2() {
    const sql = `
      query reporte2 {
        reporte2 {
          fecha
          fecha_str
          valor
        }
        reporte2b {
          mes
          valor
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }
}
