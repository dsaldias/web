export interface Opciones {
    showNotyError: boolean;
}
export declare const defectoOps: Opciones;
export declare function parseErrors(lista: any): void;
export declare function mostrarNotifyError(mensaje: string | undefined, sleep?: number): void;
export declare function toast1(mensaje: string): void;
export declare const parseTextError: (t: any) => void;
export declare const parseTextErrorWs: (t: any) => void;
export declare function parseFecha(f?: any, hours?: boolean): string;
export declare const ajustarFechaUTC: (date: Date, offset: number) => string;
export declare const ajustarFechaLocal: (date: Date) => string;
export declare const toHomePath: () => string;
export declare const chartAreaBorder: {
    id: string;
    beforeDraw(chart: any, args: any, options: any): void;
};
