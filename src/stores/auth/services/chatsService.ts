/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, mutar } from 'stores/auth/server'

export default class ChatsService {
  async usuarios_chat(input: any = {}) {
    const sql = `
      query usuarios($input: QueryUsuarios!) {
        usuarios(query: $input) {
          id
          nombres
          apellido1
          apellido2
        }
      }
    `
    return await query(sql, { input })
      .then((d) => d)
      .catch((e) => e)
  }

  async chats_by_user(user_id: string | number) {
    const sql = `
      query chats_by_user($user_id: ID!) {
        chats_by_user(user_id: $user_id) {
          id
          tipo
          nombre
          foto_url
          no_leidos
          ultimo_mensaje
          miembros {
            usuario_id
          }
          created_by
          fecha_registro
          fecha_update
        }
      }
    `
    return await query(sql, { user_id })
      .then((d) => d)
      .catch((e) => e)
  }

  async chats_no_leidos(user_id: string | number) {
    const sql = `
      query chats_no_leidos($user_id: ID!) {
        chats_no_leidos(user_id: $user_id)
      }
    `
    return await query(sql, { user_id })
      .then((d) => d)
      .catch((e) => e)
  }

  async chat_mensajes(conversacion_id: string | number) {
    const sql = `
      query chat_mensajes($conversacion_id: ID!) {
        chat_mensajes(conversacion_id: $conversacion_id) {
          id
          conversacion_id
          sender_id
          tipo
          texto
          created_at
          edited_at
          deleted_at
        }
      }
    `
    return await query(sql, { conversacion_id })
      .then((d) => d)
      .catch((e) => e)
  }

  async chat_enviar_mensaje(input: any) {
    const sql = `
      mutation chat_enviar_mensaje($input: ChatEnviarMensajeInput!) {
        chat_enviar_mensaje(input: $input) {
          id
          conversacion_id
          sender_id
          tipo
          texto
          created_at
          edited_at
          deleted_at
        }
      }
    `
    return await mutar(sql, { input })
      .then((d) => d)
      .catch((e) => e)
  }
}
