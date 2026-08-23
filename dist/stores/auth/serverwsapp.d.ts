import { Opciones } from './utils';
import { Observable } from 'rxjs';
export interface Valores {
    data: any;
    stop: () => void;
}
export declare const subs: (sql: any, variables?: any, opciones?: Opciones) => Observable<unknown>;
