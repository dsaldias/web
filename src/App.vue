<template>
  <router-view />
</template>

<script setup lang="ts">
import { iniciarSubscripcion, detenerSubscripcion } from 'src/stores/auth/notificaciones'
import { onBeforeUnmount, onMounted } from 'vue'

const handleBeforeUnload = () => {
  console.log('cerrando....')
  detenerSubscripcion()
}

onMounted(() => {
  iniciarSubscripcion()
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>
