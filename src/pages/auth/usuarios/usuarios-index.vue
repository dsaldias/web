<template>
  <q-page class="q-pa-sm">
    <q-table
      :rows="rows"
      :columns="columns"
      :visible-columns="visibleColumns"
      flat
      bordered
      dense
      :filter="filter"
      :loading="loading"
      row-key="id"
      :rows-per-page-options="[100,200,500,1000]"
      separator="horizontal"
    >
      <template v-slot:top>
        <div class="row items-center full-width q-gutter-x-sm">
          <!-- Título -->
          <q-icon name="manage_accounts" color="primary" size="sm" />
          <span class="text-subtitle1 text-weight-medium">Usuarios</span>
          <q-btn icon="refresh" flat round dense @click="getdatos()">
            <q-tooltip>Recargar</q-tooltip>
          </q-btn>

          <q-toggle
            v-model="more_datos"
            @update:model-value="visibleColumns = columnas(more_datos)"
            color="orange"
            label="más datos"
            dense
          />

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

          <q-select
            v-model="rol"
            :options="roles"
            option-label="nombre"
            dense
            outlined
            clearable
            label="Filtrar por rol"
            style="width: 180px"
          />

          <q-btn
            label="Registrar"
            icon="person_add"
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

      <template v-slot:body-cell-foto_url="props">
        <q-td :props="props">
          <q-avatar size="22px" v-if="props.row.foto64">
            <img :src="props.row.foto64" alt="perfil" />
          </q-avatar>
          <q-avatar size="22px" color="primary" text-color="white" icon="person" font-size="12px" v-else />
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_registro="props">
        <q-td :props="props" class="text-caption" style="opacity:.7">
          {{ parseFecha(props.row.fecha_registro) }}
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_update="props">
        <q-td :props="props" class="text-caption" style="opacity:.7">
          {{ parseFecha(props.row.fecha_update) }}
        </q-td>
      </template>

      <template v-slot:body-cell-last_login="props">
        <q-td :props="props" class="text-caption" style="opacity:.7">
          {{ parseFecha(props.row.last_login) }}
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
import PerfilService from 'stores/auth/services/perfilService' 
import UsuariosRolesService from 'src/stores/auth/services/usuariosRolesService'
import { columns, columnas } from './utils'
import { parseFecha } from 'stores/auth/utils'
import Botonera from './botonera-opt.vue'
import Registrar from './registrar-upd.vue' 

const perfilService = new PerfilService() 
const usrolsService = new UsuariosRolesService();
const rows = ref([])
const filter = ref('')
const loading = ref(false)
const more_datos = ref(false)
const refRegistrar = ref()
const visibleColumns = ref([])
const roles = ref([])
const rol = ref()

const getdatos = async () => {
  loading.value = true
  rows.value = []
  const q: any = {}
  q.rol = rol.value ? rol.value.id : null; 
  roles.value = [];
  const r: any = await usrolsService.roles_y_usuarios(q)
  
  if(r && r.roles){
    roles.value = r.roles;
  }

  if (r && r.usuarios) {
    const us = r.usuarios
    for (let i = 0; i < us.length; i++) {
      us[i].foto64 = ''
    }
    rows.value = us
    cargarImagenes()
  }
  loading.value = false
} 

const cargarImagenes = () => {
  for (let i = 0; i < rows.value.length; i++) {
    void getFoto(rows.value[i])
  }
}
const getFoto = async (us: any) => {
  const url = us.foto_url
  if (!url) return url
  const res: any = await perfilService.get_imagen(url)
  if (res && res.get_imagen) us.foto64 = res.get_imagen
}

const onclick = (flag: string, row: any) => {
  if (flag == 'editar') {
    refRegistrar.value.open(row)
  } else if (flag == 'new') {
    refRegistrar.value.open(row)
  }
}

onMounted(async () => {
  rol.value = null
  visibleColumns.value = columnas(more_datos.value)
  await getdatos()
})
</script>
