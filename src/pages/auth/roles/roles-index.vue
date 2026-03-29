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
          <q-icon name="shield" color="primary" size="sm" />
          <span class="text-subtitle1 text-weight-medium">Roles</span>
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
import RolesService from 'src/stores/auth/services/rolesService'
import { columns } from './utils'
import { parseFecha } from 'stores/auth/utils'
import Botonera from './botonera-opt.vue'
import Registrar from './registrar-upd.vue'

const rolesService = new RolesService()
const rows = ref([])
const filter = ref('')
const loading = ref(false)
const refRegistrar = ref()

const getdatos = async () => {
  loading.value = true
  rows.value = []
  const r: any = await rolesService.roles()
  if (r && r.roles) rows.value = r.roles
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
