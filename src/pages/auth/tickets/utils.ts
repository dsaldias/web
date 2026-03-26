/* eslint-disable @typescript-eslint/no-explicit-any */

export const columns: any = [
  { name: 'index', field: 'index', label: '' },
  { name: 'id', field: 'id', label: 'Nro.' },
  { name: 'problema', field: 'problema', label: 'problema', align: 'left' },
  { name: 'estado', field: 'estado', label: 'estado' },
  { name: 'respuesta', field: 'respuesta', label: 'respuesta', align: 'left' },
  { name: 'fecha_registro', field: 'fecha_registro', label: 'registrado' },
  { name: 'respondido', field: 'respondido', label: 'respondido' },
  { name: 'opt', field: 'opt', label: '' },
]

export const columns_gen: any = [
  { name: 'index', field: 'index', label: '' },
  { name: 'id', field: 'id', label: 'ID' },
  { name: 'usuario', field: 'usuario', label: 'usuario' },
  { name: 'problema', field: 'problema', label: 'problema', align: 'left' },
  { name: 'estado', field: 'estado', label: 'estado' },
  { name: 'respuesta', field: 'respuesta', label: 'respuesta', align: 'left' },
  { name: 'fecha_registro', field: 'fecha_registro', label: 'registrado' },
  { name: 'respondido', field: 'respondido', label: 'respondido' },
  { name: 'opt', field: 'opt', label: '' },
]

export const columnas = (more_datos: boolean): any => {
  if (more_datos)
    return ['index', 'id', 'problema', 'estado', 'respuesta', 'fecha_registro', 'respondido', 'opt']
  else return ['id', 'problema', 'estado', 'respuesta', 'opt']
}

export const styleEstado = (item: any) => {
  const bgs: any = {
    pendiente: 'background: #c1c1c1',
    cliente: 'background: #c7af6c',
    soporte: 'background: #afc7e0',
    cerrado: 'background:#980000;color:white!important',
  }
  return bgs[item.estado]
}
