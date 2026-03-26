/* eslint-disable @typescript-eslint/no-explicit-any */
import { mutar, query } from 'stores/auth/serverapp'

export default class DemoService {
  async todos() {
    const sql = `
      query todos {
        todos {
          id
        }
      }
    `

    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }

  async createTodo(input: any) {
    const sql = `
      mutation createTodo($input: NewTodo!) {
        createTodo(input: $input) {
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
