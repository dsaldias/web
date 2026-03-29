<template>
  <div>
    <!-- PUEDES USAR ESTE ARCHIVO Y MODIFICARLO A TU GUSTO -->
    <q-toolbar-title shrink class="text-weight-bold neon-logo"> {{ name }} </q-toolbar-title>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref(process.env.APP_NAME)
</script>
