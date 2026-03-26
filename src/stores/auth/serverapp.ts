/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@vue/apollo-composable'
import { watch } from 'vue'
import { parseErrors, parseTextError } from './utils'
import { mostrarRelogin } from './relogin'
import gql from 'graphql-tag'
import graphqlQueryCompress from 'graphql-query-compress'

export interface Opciones {
  showNotyError: boolean
}

export const defectoOps: Opciones = {
  showNotyError: true,
}

export function mutar(sql: any, variables: any = {}, opciones: Opciones = defectoOps) {
  return new Promise((resolve, reject) => {
    const sqlMinifiedString = graphqlQueryCompress(sql)
    sql = gql(sqlMinifiedString)

    const {
      mutate: envio,
      onDone,
      error,
    } = useMutation(sql, {
      variables: { ...variables },
      fetchPolicy: 'no-cache',
      clientId: 'cliente_app',
    })

    let settled = false
    const cleanup = () => {
      stopError()
    }
    const finishResolve = (value: any) => {
      if (settled) return
      settled = true
      cleanup()
      resolve(value)
    }
    const finishReject = (value: any) => {
      if (settled) return
      settled = true
      cleanup()
      reject(value)
    }

    const stopError = watch(error, () => {
      verificar_exp(error)

      finishReject(error.value)
      if (opciones.showNotyError) {
        parseTextError(error.value?.message)
        // mostrarNotifyError(error.value?.message)
      }
    })

    onDone((res) => {
      //resolve(data);
      if (res.errors) {
        if (opciones.showNotyError) parseErrors(res.errors)
        finishReject(res.errors)
      } else finishResolve(res.data)
    })

    void envio()
  })
}

export function query(sql: any, variables: any = {}, opciones: Opciones = defectoOps) {
  return new Promise((resolve, reject) => {
    const sqlMinifiedString = graphqlQueryCompress(sql)
    sql = gql(sqlMinifiedString)

    const { error, result, stop } = useQuery(sql, variables, {
      fetchPolicy: 'no-cache',
      clientId: 'cliente_app',
    })

    let settled = false
    const cleanup = () => {
      stopError()
      stopResult()
      stop?.()
    }
    const finishResolve = (value: any) => {
      if (settled) return
      settled = true
      cleanup()
      resolve(value)
    }
    const finishReject = (value: any) => {
      if (settled) return
      settled = true
      cleanup()
      reject(value)
    }

    const stopError = watch(error, () => {
      verificar_exp(error)

      finishReject(error.value)
      if (opciones.showNotyError) {
        // mostrarNotifyError(error.value?.message)
        parseTextError(error.value?.message)
      }
    })

    const stopResult = watch(result, () => {
      finishResolve(result.value)
    })
  })
}

const verificar_exp = (error: any) => {
  const s = (error.value?.message + '').includes('Su sessión expiró hace')
  const t = (error.value?.message + '').includes('proporcione un token')
  if (s || t) {
    void mostrarRelogin()
  }
}
