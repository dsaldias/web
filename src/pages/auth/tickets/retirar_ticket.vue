<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 630px">
      <q-card-section class="row items-center q-pb-xs">
        <div class="text-h6">Cerrar el ticket</div>
        <q-space />
        <q-btn flat v-close-popup> <b>x</b> </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-separator class="q-mt-none q-mb-lg" />
        <p>
          Al cerrar el ticket <b>{{ item.id }}</b> ya no estara disponible para dar soporte
        </p>
      </q-card-section>

      <q-card-actions :align="'right'">
        <q-btn flat :loading="loading" label="Cerrar ticket" color="red" @click="select()" />
        <q-btn flat :loading="loading" label="volver" color="grey" @click="close()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import TicketsService from 'src/stores/auth/services/ticketsService'
import { toast1 } from 'src/stores/auth/utils'

const emit = defineEmits(['success'])
const alert = ref(false)
const loading = ref(false)
const item = ref<any>({})
const ticketsService = new TicketsService()

const open = (row: any) => {
  alert.value = true
  item.value = row
}

const select = async () => {
  loading.value = true
  const r: any = await ticketsService.cerrar_ticket(item.value.id)
  if (r && r.cerrar_ticket) {
    toast1('ticket cerrado')
    emit('success')
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
