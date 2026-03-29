/* eslint-disable @typescript-eslint/no-explicit-any */
import { notifyCreate } from './notifyBridge'
import { useLoginStore } from './user'

export interface Opciones {
  showNotyError: boolean
}

export const defectoOps: Opciones = {
  showNotyError: true,
}

export function parseErrors(lista: any) {
  const errores = lista.map((m: any) => m.message)
  mostrarNotifyError(errores)
}

export function mostrarNotifyError(mensaje: string | undefined, sleep = 3000) {
  notifyCreate({
    type: 'negative',
    textColor: 'white',
    icon: 'warning',
    message: mensaje || '',
    timeout: sleep,
  })
}

export function toast1(mensaje: string) {
  notifyCreate({
    type: 'positive',
    textColor: 'white',
    icon: 'check',
    message: mensaje || '',
  })
}

export const parseTextError = (t: any) => {
  if (t == 'Failed to fetch') {
    t = 'Sistema en mantenimiento'
    mostrarNotifyError(t, 1400)
  } else {
    mostrarNotifyError(t, 800)
  }
}

export const parseTextErrorWs = (t: any) => {
  if (t == 'Socket closed') {
    t = 'conexion perdida'
    mostrarNotifyError(t, 800)
  } else {
    mostrarNotifyError(t, 800)
  }
}

export function parseFecha(f?: any, hours: boolean = true): string {
  if (!f) return ''

  // const ff = f.replaceAll('Z','')
  const d = new Date(f)

  const dia = d.getDate().toString().padStart(2, '0')
  const mes = (d.getMonth() + 1).toString().padStart(2, '0')
  const anio = d.getFullYear()

  const hora = d.getHours().toString().padStart(2, '0')
  const minutos = d.getMinutes().toString().padStart(2, '0')

  const fecha = `${dia}/${mes}/${anio}`
  const tiempo = `${hora}:${minutos}`

  return hours ? `${fecha} ${tiempo}` : fecha
}

// para mandar al server
// date debe ser: 2025-04-12T09:59 yyyy-MM-ddT:HH:mm
export const ajustarFechaUTC = (date: Date, offset: number) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours() + offset * -1).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const newdesde = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
  return newdesde
}

// para mostrar en la vista convierte de utc a gmt-4
export const ajustarFechaLocal = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const newdesde = `${year}-${month}-${day}T${hours}:${minutes}`
  return newdesde
}

export const toHomePath = (): string => {
  const show_landing = process.env.SHOW_LANDING_PAGE
  const store = useLoginStore()
  let r = '/'
  if (show_landing) {
    if (store.dataUser.usuario) r = '/'
    else r = '/principal.html'
  }
  return r
}

export const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart

    ctx.save()
    // ctx.strokeStyle = options.borderColor;
    ctx.strokeStyle = '#b5d2d5'
    ctx.lineWidth = options.borderWidth
    ctx.setLineDash(options.borderDash || [])
    ctx.lineDashOffset = options.borderDashOffset
    ctx.strokeRect(left, top, width, height)
    ctx.restore()
  },
}
