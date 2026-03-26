<template>
  <q-page class="q-pa-xs">
    <q-table
      title="Unidades"
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
    >
      <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="buscar..." clearable>
          <template v-slot:append>
            <q-icon size="xs" name="search" />
          </template>
        </q-input>
        <q-btn color="green" icon="add" outline square @click="onclick('new', null)">
          registrar
        </q-btn>
      </template>

      <template v-slot:body-cell-index="props">
        <q-td :props="props">
          {{ props.rowIndex + 1 }}
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_registro="props">
        <q-td :props="props">
          {{ parseFecha(props.row.fecha_registro) }}
        </q-td>
      </template>

      <template v-slot:body-cell-opt="props">
        <q-td :props="props">
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
import UnidadesService from 'src/stores/auth/services/unidadesService'
import { columns } from './utils'
import { parseFecha } from 'stores/auth/utils'
import Botonera from './botonera-opt.vue'
import Registrar from './registrar-upd.vue'

const unidadesService = new UnidadesService()
const rows = ref([])
const filter = ref('')
const loading = ref(false)
const refRegistrar = ref()

const getdatos = async () => {
  loading.value = true
  rows.value = []
  const r: any = await unidadesService.unidades()
  if (r && r.unidades) rows.value = r.unidades
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
