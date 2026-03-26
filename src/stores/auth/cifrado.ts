/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConfig } from 'src/config'

/* function generarClaveBase64() {
  const claveBytes = crypto.getRandomValues(new Uint8Array(32)) // Clave AES-256 (32 bytes)
  return uint8ArrayToBase64String(claveBytes)
} */

function uint8ArrayToBase64String(uint8Array: any) {
  return btoa(String.fromCharCode.apply(null, uint8Array))
}

function base64StringToUint8Array(base64String: string) {
  const binaryString = atob(base64String)
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes
}

export const encriptarString = async (textoPlano: string) => {
  /* const a = generarClaveBase64()
  console.log('aaaa', a) */

  const claveBase64 = getConfig().decodePassKey
  // console.log('claveBase64', claveBase64)

  try {
    const claveBytes = base64StringToUint8Array(claveBase64)
    const clave = await crypto.subtle.importKey(
      'raw',
      claveBytes,
      { name: 'AES-CBC', length: 256 },
      false,
      ['encrypt', 'decrypt'],
    )

    const iv = crypto.getRandomValues(new Uint8Array(16)) // IV de 16 bytes para AES
    const textoPlanoBytes = new TextEncoder().encode(textoPlano)

    const textoCifradoBuffer = await crypto.subtle.encrypt(
      { name: 'AES-CBC', iv: iv },
      clave,
      textoPlanoBytes,
    )

    const textoCifradoBytes = new Uint8Array(textoCifradoBuffer)

    const textoCifradoBase64 = uint8ArrayToBase64String(textoCifradoBytes)
    const ivBase64 = uint8ArrayToBase64String(iv)

    return {
      textoCifradoBase64: textoCifradoBase64,
      ivBase64: ivBase64,
    }
  } catch (error) {
    console.error('Error al encriptar:', error)
    return null
  }
}
