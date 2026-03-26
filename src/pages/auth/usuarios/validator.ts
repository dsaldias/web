/* eslint-disable @typescript-eslint/no-explicit-any */

export const val_password = (val: string, input: any): any => {
  if (!val && !input.id) return 'datos obligatorio'
  if (!val && input.id) return true
  if (val.length > 64) return 'maximo 64 caracteres'
}

export const val_direccion = (val: string): any => {
  if (!val) return true
  if (val.length > 100) return 'maximo 100 caracteres'
}

export const val_correo = (val: string): any => {
  if (!val) return true
  if (val.length > 100) return 'maximo 100 caracteres'
}

export const val_celular = (val: string): any => {
  if (!val) return true
  if (val.length > 20) return 'maximo 20 caracteres'
}

export const val_documento = (val: string): any => {
  if (!val) return true
  if (val.length > 20) return 'maximo 20 caracteres'
}

export const val_apellido2 = (val: string): any => {
  if (!val) return true
  if (val.length > 30) return 'maximo 30 caracteres'
}
