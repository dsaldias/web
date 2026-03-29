<template>
  <!-- PUEDES USAR ESTE ARCHIVO Y MODIFICARLO A TU GUSTO -->
  <q-img :src="logo" alt="logo" style="height: 20px; width: 20px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const logo = ref(process.env.APP_LOGO)
</script>
