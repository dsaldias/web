<template>
  <q-page class="q-pa-sm">
    <q-tabs
      v-model="tab"
      active-color="primary"
      indicator-color="primary"
      align="left"
      dense
    >
      <q-tab name="mails" icon="confirmation_number" label="Mis tickets" />
      <q-tab name="alarms" icon="local_activity" label="Tickets general" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails" class="q-pa-none">
        <tickets_1 />
      </q-tab-panel>

      <q-tab-panel name="alarms" class="q-pa-none">
        <tickets_2 />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import tickets_1 from './tickets_1.vue'
import tickets_2 from './tickets_2.vue'

const tab = ref('mails')
</script>
