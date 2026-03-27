export declare const encriptarString: (textoPlano: string) => Promise<{
    textoCifradoBase64: string;
    ivBase64: string;
} | null>;
