export declare const auth: import('@firebase/auth').Auth;
export declare const loginGoogle: () => Promise<{
    user: {
        nombres: any;
        celular: any;
        correo: any;
        username: any;
        password: any;
    };
    err: null;
} | {
    user: null;
    err: any;
}>;
