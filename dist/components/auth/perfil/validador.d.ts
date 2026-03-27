export default class Validaciones {
    val_nombre(val: any): any;
    val_apellido1(val: any): any;
    val_apellido2(val: any): any;
    val_documento(val: any): any;
    val_celular(val: any): any;
    val_correo(val: any): any;
    val_direccion(val: any): any;
    val_username(val: any): any;
    val_password_opc(val: any): any;
    val_password(val: any, input: any): true | "maximo 64 caracteres" | "datos obligatorio" | undefined;
}
