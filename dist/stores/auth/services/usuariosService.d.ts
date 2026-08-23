export declare const sql_usuarios = "\nusuarios(query: $input) {\n  id\n  nombres\n  apellido1\n  apellido2\n  documento\n  celular\n  correo\n  sexo\n  direccion\n  username\n  fecha_registro\n  fecha_update\n  estado\n  last_login\n  oauth_id\n  foto_url\n  latitud\n  longitud\n  conexiones\n}\n";
export default class UsuariosService {
    usuarios(input: any): Promise<unknown>;
    usuarios_conectados(): Promise<unknown>;
    usuario_by_id(id: string): Promise<unknown>;
    create_usuario(input: any): Promise<unknown>;
    update_usuario(input: any): Promise<unknown>;
}
