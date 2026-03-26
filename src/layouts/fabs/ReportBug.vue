<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 630px">
      <q-card-section class="row items-center q-pb-xs">
        <div class="text-h6">Sacar Nuevo Ticket</div>
        <q-space />
        <q-btn flat v-close-popup> <b>x</b> </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-separator class="q-mt-none q-mb-lg" />

        <q-input
          v-model.trim="problema"
          outlined
          square
          dense
          label="Describa el problema aqui:"
          placeholder="no mas de 512 caracteres"
          type="textarea"
          rows="12"
          cols="50"
          counter
          :rules="[(val) => val_pro(val)]"
        ></q-input>
      </q-card-section>

      <q-card-actions :align="'right'">
        <q-btn flat :loading="loading" label="cerrar" color="grey" @click="close()" />
        <q-btn flat :loading="loading" label="Reportar" color="green" @click="select()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import TicketsService from 'src/stores/auth/services/ticketsService'
import { mostrarNotifyError, toast1 } from 'src/stores/auth/utils'

const alert = ref(false)
const loading = ref(false)
const problema = ref('')
const ticketsService = new TicketsService()

const val_pro = (val: any): any => {
  // if (!val) return true
  if (!val) return 'dato obligatorio'
  if (val.length > 512) return 'maximo 512 caracteres'
}

const open = () => {
  problema.value = ''
  alert.value = true
}

const select = async () => {
  if (!problema.value) return
  if (problema.value.length > 512) {
    mostrarNotifyError('reducir el texto')
    return
  }
  const input = {
    problema: problema.value,
  }
  loading.value = true
  const r: any = await ticketsService.create_ticket(input)
  if (r && r.create_ticket) {
    toast1('Tu numero de ticket es: ' + r.create_ticket.id)
    alert.value = false
  }
  loading.value = false
}

const close = () => {
  alert.value = false
}

defineExpose({
  open,
})
</script>
