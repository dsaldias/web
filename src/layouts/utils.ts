/* eslint-disable @typescript-eslint/no-explicit-any */

export const colorWs = (str: string) => {
  const d: any = {
    connected: 'green',
    closed: 'negative',
    error: 'red',
    connecting: 'orange',
  }
  return d[str]
}
