<template>
  <q-page class="q-pa-sm">
    <q-table
      :rows="rows"
      :columns="columns"
      flat
      bordered
      dense
      :filter="filter"
      :loading="loading"
      row-key="id"
      hide-pagination
      :rows-per-page-options="[0]"
      separator="horizontal"
    >
      <template v-slot:top>
        <div class="row items-center full-width q-gutter-x-sm">
          <q-icon name="notifications" color="primary" size="sm" />
          <span class="text-subtitle1 text-weight-medium">Notificaciones</span>
          <q-btn icon="refresh" flat round dense @click="getdatos()">
            <q-tooltip>Recargar</q-tooltip>
          </q-btn>

          <q-space />

          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Buscar..."
            clearable
            style="width: 200px"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-btn
            label="Registrar"
            icon="add"
            color="primary"
            unelevated
            @click="onclick('new', null)"
          />
        </div>
      </template>

      <template v-slot:body-cell-index="props">
        <q-td :props="props" class="text-caption" style="opacity:.5">
          {{ props.rowIndex + 1 }}
        </q-td>
      </template>

      <template v-slot:body-cell-mensaje="props">
        <q-td :props="props">
          <p class="q-my-none" style="text-wrap: initial; list-style: none" v-html="props.row.mensaje"></p>
        </q-td>
      </template>

      <template v-slot:body-cell-desde="props">
        <q-td :props="props" class="text-caption" style="opacity:.7">
          {{ parseFecha(props.row.desde) }}
        </q-td>
      </template>

      <template v-slot:body-cell-hasta="props">
        <q-td :props="props" class="text-caption" style="opacity:.7">
          {{ parseFecha(props.row.hasta) }}
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_registro="props">
        <q-td :props="props" class="text-caption" style="opacity:.7">
          {{ parseFecha(props.row.fecha_registro) }}
        </q-td>
      </template>

      <template v-slot:body-cell-opt="props">
        <q-td :props="props" auto-width>
          <Botonera :props="props" v-on:clicked="onclick" />
        </q-td>
      </template>
    </q-table>

    <Registrar ref="refRegistrar" v-on:sucess="getdatos" />
  </q-page>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NotisService from 'src/stores/auth/services/notisService'
import { columns } from './utils'
import { parseFecha } from 'stores/auth/utils'
import Botonera from './botonera-opt.vue'
import Registrar from './registrar-upd.vue'

const notisService = new NotisService()
const rows = ref([])
const filter = ref('')
const loading = ref(false)
const refRegistrar = ref()

const getdatos = async () => {
  loading.value = true
  rows.value = []
  const r: any = await notisService.notificaciones()
  if (r && r.notificaciones) rows.value = r.notificaciones
  loading.value = false
}

const onclick = (flag: string, row: any) => {
  if (flag == 'editar') {
    refRegistrar.value.open(row)
  } else if (flag == 'new') {
    refRegistrar.value.open(row)
  }
}

onMounted(async () => {
  await getdatos()
})
</script>
