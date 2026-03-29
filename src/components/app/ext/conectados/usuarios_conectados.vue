<template>
  <q-dialog v-model="alert" persistent style="width: min(560px, 95vw); max-width: 95vw">
    <q-card flat bordered style="width: 100%" class="q-py-md">

      <!-- Header -->
      <q-card-section class="row items-center q-py-sm q-px-md">
        <q-icon name="people" color="primary" class="q-mr-sm" />
        <span class="text-subtitle1 text-weight-medium">Usuarios conectados</span>
        <q-space />
        <q-btn flat round dense icon="close" @click="handleCancel()" />
      </q-card-section>

      <q-separator />

      <q-card-section class="q-pa-none q-mb-md">
        <q-table
          :rows="usuarios"
          :columns="columns"
          row-key="id"
          dense
          flat
          hide-pagination
          :rows-per-page-options="[0]"
          separator="horizontal"
        >
          <template v-slot:body-cell-ind="props">
            <q-td :props="props" class="text-caption" style="opacity:.5">
              {{ props.rowIndex + 1 }}
            </q-td>
          </template>
          <template v-slot:body-cell-usuario="props">
            <q-td :props="props">
              {{ props.row.nombres }} {{ props.row.apellido1 }} {{ props.row.apellido2 }}
            </q-td>
          </template>
          <template v-slot:body-cell-last_login="props">
            <q-td :props="props" class="text-caption" style="opacity:.7">
              {{ parseFecha(props.row.last_login) }}
            </q-td>
          </template>
        </q-table>
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import UsuariosService from 'src/stores/auth/services/usuariosService'
import { parseFecha } from 'src/stores/auth/utils'

const alert = ref(false)
const loading = ref(false)
const usuarios = ref<any>([])
const usuariosService = new UsuariosService()
const columns = <any>[
  { name: 'ind', label: '#', field: 'ind', align: 'left' },
  { name: 'usuario', label: 'Usuario', field: 'usuario', align: 'left' },
  { name: 'last_login', label: 'Ultimo acceso', field: 'last_login', align: 'left' },
  { name: 'conexiones', label: 'Conexiones', field: 'conexiones', align: 'left' },
]

const open = () => {
  usuarios.value = []
  alert.value = true

  void listar()
}

const listar = async () => {
  loading.value = true
  const res: any = await usuariosService.usuarios_conectados()
  loading.value = false
  if (res && res.usuarios_conectados) {
    usuarios.value = res.usuarios_conectados
  }
}

const handleCancel = () => {
  alert.value = false
}

defineExpose({
  open,
})
</script>
