export declare const sql_roles = "\nroles {\n  id\n  nombre\n  descripcion\n  jerarquia\n  fecha_registro\n  menus\n  permisos\n  usuarios\n}\n";
export default class RolesService {
    roles(): Promise<unknown>;
    rol_by_id(id: string): Promise<unknown>;
    update_rol(input: any): Promise<unknown>;
    create_rol(input: any): Promise<unknown>;
}
