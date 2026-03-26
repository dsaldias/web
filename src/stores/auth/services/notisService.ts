/* eslint-disable @typescript-eslint/no-explicit-any */
import { mutar, query } from 'stores/auth/server'

export default class NotisService {
  async notificaciones() {
    const sql = `
      query notificaciones{
        notificaciones{id mensaje creado_por_id desde hasta fecha_registro}
      }
    `
    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }

  async crear_notificacion(input: any) {
    const sql = `
      mutation crear_notificacion($input:NewNotificacion!){
        crear_notificacion(input:$input){id mensaje}
      }
    `
    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async update_notificacion(input: any) {
    const sql = `
      mutation update_notificacion($input:UpdNotificacion!){
        update_notificacion(input:$input){id mensaje}
      }
    `
    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }
}
