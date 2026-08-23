export default class ChatsService {
    usuarios_chat(input?: any): Promise<unknown>;
    chats_by_user(user_id: string | number): Promise<unknown>;
    chats_no_leidos(user_id: string | number): Promise<unknown>;
    chat_mensajes(conversacion_id: string | number): Promise<unknown>;
    chat_enviar_mensaje(input: any): Promise<unknown>;
}
