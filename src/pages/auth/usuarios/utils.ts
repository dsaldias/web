/* eslint-disable @typescript-eslint/no-explicit-any */

export const columns: any = [
  { name: 'index', field: 'index', label: '#' },
  { name: 'id', field: 'id', label: 'ID' },
  { name: 'foto_url', field: 'foto_url', label: 'img' },
  { name: 'nombres', field: 'nombres', label: 'nombres' },
  { name: 'apellido1', field: 'apellido1', label: 'apellido1' },
  { name: 'apellido2', field: 'apellido2', label: 'apellido2' },
  { name: 'documento', field: 'documento', label: 'documento' },
  { name: 'celular', field: 'celular', label: 'celular' },
  { name: 'correo', field: 'correo', label: 'correo' },
  { name: 'sexo', field: 'sexo', label: 'sexo' },
  { name: 'direccion', field: 'direccion', label: 'direccion' },
  { name: 'username', field: 'username', label: 'username' },
  { name: 'estado', field: 'estado', label: 'estado' },
  { name: 'oauth_id', field: 'oauth_id', label: 'oauth_id' },
  { name: 'latitud', field: 'latitud', label: 'latitud' },
  { name: 'longitud', field: 'longitud', label: 'longitud' },
  { name: 'conexiones', field: 'conexiones', label: 'conexiones' },
  { name: 'last_login', field: 'last_login', label: 'last_login' },
  { name: 'fecha_update', field: 'fecha_update', label: 'fecha_update' },
  { name: 'fecha_registro', field: 'fecha_registro', label: 'fecha_registro' },
  { name: 'opt', field: 'opt', label: '' },
]

export const columnas = (more_datos: boolean): any => {
  if (more_datos)
    return [
      'index',
      'id',
      'foto_url',
      'nombres',
      'apellido1',
      'apellido2',
      'documento',
      'celular',
      'correo',
      'sexo',
      'direccion',
      'username',
      'last_login',
      'fecha_registro',
      'fecha_update',
      'estado',
      'conexiones',
      'latitud',
      'longitud',
      'opt',
    ]
  else return ['index','foto_url', 'nombres', 'apellido1', 'apellido2', 'last_login', 'conexiones', 'opt']
}

export const columns_roles: any = [
  { name: 'nombre', field: 'nombre', label: 'rol', align: 'left' },
  { name: 'menus', field: 'menus', label: 'menus', align: 'left' },
  { name: 'permisos', field: 'permisos', label: 'permisos', align: 'left' },
  { name: 'usuarios', field: 'usuarios', label: 'usuarios', align: 'left' },
]

export const columns_unidades: any = [
  { name: 'nombre', field: 'nombre', label: 'unidad', align: 'left' },
]

export const columns_permisos: any = [
  { name: 'nombre', field: 'nombre', label: '', align: 'left' },
  { name: 'metodo', field: 'metodo', label: 'metodo', align: 'left' },
  { name: 'grupo', field: 'grupo', label: 'grupo', align: 'left' },
]

export const columns_menus: any = [
  { name: 'label', field: 'label', label: '', align: 'left' },
  { name: 'path', field: 'path', label: 'path', align: 'left' },
]

export const columns_rolunidad: any = [
  { name: 'unidad', field: 'unidad', label: 'unidad', align: 'left' },
  { name: 'rol', field: 'rol', label: 'rol', align: 'left' },
  { name: 'opt', field: 'opt', label: '' },
]
