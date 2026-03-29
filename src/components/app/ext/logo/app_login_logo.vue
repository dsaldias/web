<template>
  <!-- PUEDES USAR ESTE ARCHIVO Y MODIFICARLO A TU GUSTO -->
  <div class="text-center q-pt-none q-pb-sm">
    <q-img :src="logo" alt="logo" style="width: 100px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const logo = ref(process.env.APP_LOGO)
</script>
