<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 630px">
      <q-card-section class="row items-center q-pb-xs">
        <div class="text-h6">Selecciona la unidad y asigne el rol </div>
        <q-space />
        <q-btn flat v-close-popup> <b>x</b> </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none"> 
        <q-separator class="q-mt-none q-mb-lg" />
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12 col-sm-5">
            <b class="text-primary">Seleccione una unidad:</b>
            <q-table :rows="unidades" :columns="columns_unidades" flat dense square hide-pagination :rows-per-page-options="[0]" row-key="id" selection="multiple" v-model:selected="unidades_select" />
          </div>

          <div class="col-xs-12 col-sm-7">
            <b class="text-primary">Asigne un rol:</b>
            <q-table :rows="roles" :columns="columns_roles" flat dense square hide-pagination :rows-per-page-options="[0]" row-key="id" selection="single" v-model:selected="roles_select" />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="select()" />
        <q-btn flat label="cerrar" color="primary" @click="close()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import { columns_unidades, columns_roles } from './utils'
import { Notify } from 'quasar'

const alert = ref(false)
const unidades = ref([])
const roles = ref([])
const unidades_select = ref()
const roles_select = ref()
let resolvePromise: any

const open = (unis: any, rls: any) => {
  alert.value = true
  unidades_select.value = []
  unidades.value = unis
  roles.value = rls
  roles_select.value = []

  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

const select = () => {
  if (unidades_select.value.length == 0 || roles_select.value.length == 0) {
    Notify.create({ message: 'seleccione', color: 'orange', timeout: 500 })
    return
  }

  const us = unidades_select.value
  const r = roles_select.value[0]

  resolvePromise({ us, r })
  alert.value = false
}

const close = () => {
  resolvePromise()
  alert.value = false
}

defineExpose({
  open,
})
</script>
