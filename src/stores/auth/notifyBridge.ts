/* eslint-disable @typescript-eslint/no-explicit-any */
let _notify: ((opts: any) => void) | null = null

export const setNotifyBridge = (fn: (opts: any) => void) => {
  _notify = fn
}

export const notifyCreate = (opts: any) => {
  _notify?.(opts)
}
