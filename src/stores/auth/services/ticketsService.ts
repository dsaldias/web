/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, mutar } from 'stores/auth/server'

export default class TicketsService {
  async all_tickets(q: any) {
    const sql = `
      query all_tickets($q:QueryTickets!){
        all_tickets(q:$q){
          id
          usuario_id
          usuario
          problema
          estado
          fecha_registro
          respuesta
          soporte
          soporte_id
          respondido
        }
      }
    `
    return await query(sql, { q: q })
      .then((d) => d)
      .catch((e) => e)
  }
  async mis_tickets() {
    const sql = `
      query mis_tickets{
        mis_tickets{
          id
          usuario_id
          usuario
          problema
          estado
          fecha_registro
          respuesta
          soporte
          soporte_id
          respondido
        }
      }
    `
    return await query(sql, {})
      .then((d) => d)
      .catch((e) => e)
  }
  async ver_ticket(id: string) {
    const sql = `
    query ver_ticket($id:ID!){
      ver_ticket(id:$id){
        id
        usuario_id
        problema
        estado
        fecha_registro
        respuestas{
          id
          tickets_id
          usuario_id
          respuesta
          fecha_registro
        }
      }
    }
    `
    return await query(sql, { id: id })
      .then((d) => d)
      .catch((e) => e)
  }

  async create_ticket(input: any) {
    const sql = `
    mutation create_ticket($input:NewTicket!){
      create_ticket(input:$input){
        id
        usuario_id
        estado
        fecha_registro
      }
    }
    `
    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }

  async update_ticket(input: any) {
    const sql = `
    mutation update_ticket($input:NewTicketRespuesta!){
      update_ticket(input:$input){
        id
        usuario_id
        problema
      }
    }
    `
    return await mutar(sql, { input: input })
      .then((d) => d)
      .catch((e) => e)
  }
  async cerrar_ticket(id: any) {
    const sql = `
    mutation cerrar_ticket($id:ID!){
      cerrar_ticket(id:$id){
        id
        estado
      }
    }
    `
    return await mutar(sql, { id: id })
      .then((d) => d)
      .catch((e) => e)
  }
}
