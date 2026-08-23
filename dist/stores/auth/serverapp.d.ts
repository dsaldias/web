export interface Opciones {
    showNotyError: boolean;
}
export declare const defectoOps: Opciones;
export declare function mutar(sql: any, variables?: any, opciones?: Opciones): Promise<unknown>;
export declare function query(sql: any, variables?: any, opciones?: Opciones): Promise<unknown>;
