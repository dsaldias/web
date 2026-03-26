<template>
  <div class="q-pa-none">
    <q-table
      title=""
      class="my-sticky-header-table"
      dense
      :rows="rows"
      :columns="columns_gen"
      row-key="name"
    >
      <template v-slot:top-left>
        <q-btn icon="refresh" dense flat @click="listar()" />
      </template>
      <template v-slot:body-cell-index="props">
        <q-td :props="props">
          {{ props.rowIndex + 1 }}
        </q-td>
      </template>
      <template v-slot:body-cell-problema="props">
        <q-td :props="props" style="min-width: 350px">
          <p style="text-wrap: wrap">{{ props.row.problema }}</p>
        </q-td>
      </template>
      <template v-slot:body-cell-respuesta="props">
        <q-td :props="props" style="min-width: 250px">
          <p style="text-wrap: wrap">{{ props.row.respuesta }}</p>
        </q-td>
      </template>

      <template v-slot:body-cell-estado="props">
        <q-td :props="props">
          <q-banner
            dense
            inline-actions
            class="q-py-none text-center text-black"
            :style="styleEstado(props.row)"
          >
            {{ props.row.estado }}
          </q-banner>
        </q-td>
      </template>

      <template v-slot:body-cell-fecha_registro="props">
        <q-td :props="props">
          {{ parseFecha(props.row.fecha_registro) }}
        </q-td>
      </template>
      <template v-slot:body-cell-respondido="props">
        <q-td :props="props">
          {{ parseFecha(props.row.respondido) }}
        </q-td>
      </template>

      <template v-slot:body-cell-opt="props">
        <q-td :props="props">
          <q-btn size="xs" flat icon="more_vert">
            <q-menu transition-show="flip-right" fit>
              <q-list>
                <q-item dense clickable @click="verticket(props.row)">
                  <q-item-section avatar>
                    <q-icon name="visibility" size="xs" right class="q-px-none" />
                  </q-item-section>
                  <q-item-section>Ver</q-item-section>
                </q-item>
                <q-item v-if="props.row.estado != 'cerrado'"  dense clickable @click="responder(props.row)">
                  <q-item-section avatar>
                    <q-icon name="edit" size="xs" right class="q-px-none" />
                  </q-item-section>
                  <q-item-section>Responder</q-item-section>
                </q-item>
                <q-item v-if="props.row.estado != 'cerrado'"  dense clickable @click="cerrarticket(props.row)">
                  <q-item-section avatar>
                    <q-icon name="close" size="xs" right class="q-px-none" />
                  </q-item-section>
                  <q-item-section>Cerrar</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>

    <responder_ticket ref="refresponder_ticket" v-on:success="listar" />
    <retirar_ticket ref="refretirar_ticket" v-on:success="listar" />
    <ver_ticket ref="refver_ticket" />
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { columns_gen, styleEstado } from './utils'
import { /* mostrarNotifyError */ parseFecha } from 'stores/auth/utils'
import responder_ticket from './responder_ticket.vue'
import retirar_ticket from './retirar_ticket.vue'
import TicketsService from 'src/stores/auth/services/ticketsService'
import ver_ticket from './ver_ticket.vue'

const rows = ref([{}])
const refresponder_ticket = ref()
const refretirar_ticket = ref()
const refver_ticket = ref()
const ticketsService = new TicketsService()

const listar = async () => {
  const q = {}
  const r: any = await ticketsService.all_tickets(q)
  if (r && r.all_tickets) {
    rows.value = r.all_tickets
  }
}

const responder = (row: any) => {
  /* if (row.estado != 'cliente' && row.estado != 'pendiente') {
    mostrarNotifyError('estado no disponible')
    return
  } */
  refresponder_ticket.value.open(row)
}

const verticket = (row: any) => {
  refver_ticket.value.open(row)
}

const cerrarticket = (row: any) => {
  refretirar_ticket.value.open(row)
}

onMounted(() => {
  void listar()
  console.log('mis tickets')
})
</script>
