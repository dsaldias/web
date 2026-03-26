<template>
  <q-page class="q-pa-xs">
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
    >
      <template v-slot:top-left>
        <b>Usuarios</b>
        <q-btn icon="refresh" dense flat @click="getdatos()" />
        <q-toggle
          v-model="more_datos"
          @update:model-value="visibleColumns = columnas(more_datos)"
          color="orange"
          label="mostrar otros datos"
          class="q-my-none"
        />
      </template>

      <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="buscar..." clearable>
          <template v-slot:append>
            <q-icon size="xs" name="search" />
          </template>
        </q-input>
        <q-select v-model="rol" :options="roles" option-label="nombre" dense clearable />
        <q-btn color="green" icon="add" outline square @click="onclick('new', null)">
          registrar
        </q-btn> 
      </template>

      <template v-slot:body-cell-index="props">
        <q-td :props="props">
          {{ props.rowIndex + 1 }}
        </q-td>
      </template>
      <template v-slot:body-cell-foto_url="props">
        <q-td :props="props">
          <img v-if="props.row.foto64" :src="props.row.foto64" alt="perfil" style="max-width: 22px" />
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_registro="props">
        <q-td :props="props">
          {{ parseFecha(props.row.fecha_registro) }}
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_update="props">
        <q-td :props="props">
          {{ parseFecha(props.row.fecha_update) }}
        </q-td>
      </template>

      <template v-slot:body-cell-last_login="props">
        <q-td :props="props">
          {{ parseFecha(props.row.last_login) }}
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
