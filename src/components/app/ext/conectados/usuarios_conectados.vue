<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 500px" class="q-pa-md">
      <q-card-section class="row items-center q-pb-xs">
        <div class="q-ml-sm text-h6">Usuarios conectados:</div>
        <q-space />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-separator size="xs" class="q-py-none" />

        <q-table
          :rows="usuarios"
          :columns="columns"
          row-key="id"
          dense
          flat
          square
          hide-pagination
          :rows-per-page-options="[0]"
        >
          <template v-slot:body-cell-usuario="props">
            <q-td :props="props">
              {{ props.row.nombres }} {{ props.row.apellido1 }} {{ props.row.apellido2 }}
            </q-td>
          </template>
          <template v-slot:body-cell-ind="props">
            <q-td :props="props">
              {{ props.rowIndex + 1 }}
            </q-td>
          </template>
          <template v-slot:body-cell-last_login="props">
            <q-td :props="props">
              {{ parseFecha(props.row.last_login) }}
            </q-td>
          </template>
        </q-table>
      </q-card-section>

      <q-card-actions :align="'center'">
        <q-btn
          :loading="loading"
          flat
          label="cerrar"
          no-caps
          square
          icon="check"
          color="positive"
          @click="handleCancel()"
        />
      </q-card-actions>
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
