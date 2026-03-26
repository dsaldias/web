import { query } from 'stores/auth/server'

export default class MenusService {
  async menus() {
    const sql = `
      query menus {
        menus {
          id
          label
          path
          icon
          grupo
          orden
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }
}
