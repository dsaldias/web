<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 630px">
      <q-card-section class="row items-center q-pb-xs">
        <div class="text-h6">Detalles del ticket</div>
        <q-space />
        <q-btn flat v-close-popup> <b>x</b> </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-separator class="q-mt-none q-mb-lg" />
        <p class="q-my-none"><b>Numero ticket:</b> {{ ticket.id }}</p>
        <p class="q-my-none"><b>Problema:</b> {{ ticket.problema }}</p>
        <p class="q-my-none"><b>Estado:</b> {{ ticket.estado }}</p>
        <p class="q-my-none"><b>Reportado el:</b> {{ parseFecha(ticket.fecha_registro) }}</p>
        <q-separator></q-separator>
        <small>Interaccion:</small>
        <div v-for="(r, ind) in ticket.respuestas" :key="ind">
          <p v-if="ticket.usuario_id == r.usuario_id" class="q-my-none">
            <b>yo:</b> <br />
            {{ r.respuesta }} <br />
            <small> {{ parseFecha(r.fecha_registro) }} </small>
          </p>
          <p v-else class="q-my-xs q-pl-xl text-purple">
            <b>soporte:</b> <br />
            {{ r.respuesta }} <br />
            <small> {{ parseFecha(r.fecha_registro) }} </small>
          </p>
        </div>
        <q-separator></q-separator>
      </q-card-section>

      <q-card-actions :align="'right'" class="q-pt-none">
        <q-btn flat :loading="loading" label="cerrar" color="grey" @click="close()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import TicketsService from 'src/stores/auth/services/ticketsService'
import { parseFecha } from 'src/stores/auth/utils'

const alert = ref(false)
const loading = ref(false)
const item = ref<any>({})
const ticketsService = new TicketsService()
const ticket = ref<any>({})

const open = (row: any) => {
  alert.value = true
  item.value = row
  ticket.value = {}
  void get()
}

const get = async () => {
  loading.value = true
  const r: any = await ticketsService.ver_ticket(item.value.id)
  if (r && r.ver_ticket) {
    ticket.value = r.ver_ticket
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
