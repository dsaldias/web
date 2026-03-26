<template>
  <q-page-sticky position="bottom-right" :offset="[18, 32]">
    <q-fab
      v-model="fabRight"
      vertical-actions-align="right"
      color="grey"
      outline
      icon="manage_accounts"
      direction="up"
    >
      <q-fab-action
        square
        label-position="left"
        color="orange"
        @click="fab_falla"
        icon="airplay"
        label="Reportar falla"
      />
    </q-fab>
  </q-page-sticky>

  <ReportBug ref="refReportBug" />
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import ReportBug from './ReportBug.vue'

const fabRight = ref(false)
const refReportBug = ref()

const fab_falla = () => {
  refReportBug.value.open()
}
</script>
