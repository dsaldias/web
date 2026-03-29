/* eslint-disable @typescript-eslint/no-explicit-any */

export const columns: any = [
  { name: 'index', field: 'index', label: '#' },
  { name: 'id', field: 'id', label: 'ID' },
  { name: 'nombre', field: 'nombre', label: 'nombre' },
  { name: 'descripcion', field: 'descripcion', label: 'descripcion' },
  { name: 'jerarquia', field: 'jerarquia', label: 'jerarquia' },
  { name: 'menus', field: 'menus', label: 'menus' },
  { name: 'permisos', field: 'permisos', label: 'permisos' },
  { name: 'usuarios', field: 'usuarios', label: 'usuarios' },
  { name: 'fecha_registro', field: 'fecha_registro', label: 'fecha_registro' },
  { name: 'opt', field: 'opt', label: '' },
]

export const columns_permisos: any = [
  { name: 'nombre', field: 'nombre', label: '',align:'left' },
  { name: 'metodo', field: 'metodo', label: 'metodo' },
  { name: 'grupo', field: 'grupo', label: 'grupo' },
]

export const columns_menus: any = [
  { name: 'label', field: 'label', label: '', align: 'left' },
  { name: 'path', field: 'path', label: 'path', align: 'left' },
  // { name: 'padre_id', field: 'padre_id', label: 'padre_id', align: 'left' },
]
