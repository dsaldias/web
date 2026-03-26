<template>
  <div>
    <dashReporte1 v-if="is_dash_auth_r1" />
    <dashReporte2 v-if="is_dash_auth_r2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dashReporte1 from './dash-reporte1.vue'
import dashReporte2 from './dash-reporte2.vue'

const is_dash_auth_r1 = ref(process.env.SHOW_DASH_REPORTE1)
const is_dash_auth_r2 = ref(process.env.SHOW_DASH_REPORTE2)
</script>
