<template>
  <q-dialog v-model="alert" persistent style="width: min(560px, 95vw); max-width: 95vw">
    <q-card flat bordered style="width: 100%">

      <q-card-section class="row items-center q-py-sm q-px-md">
        <q-icon name="confirmation_number" color="primary" class="q-mr-sm" />
        <span class="text-subtitle1 text-weight-medium">Nuevo ticket</span>
        <q-space />
        <q-btn flat round dense icon="close" @click="close()" />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-input
          v-model.trim="problema"
          outlined
          dense
          label="Describe el problema"
          placeholder="máximo 512 caracteres"
          type="textarea"
          rows="10"
          counter
          :rules="[(val) => val_pro(val)]"
        />
      </q-card-section>

      <q-separator />

      <q-card-actions align="right" class="q-pa-sm">
        <q-btn flat no-caps :loading="loading" label="Cerrar" color="negative" @click="close()" />
        <q-btn unelevated no-caps :loading="loading" label="Reportar" icon="send" color="primary" @click="select()" />
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
