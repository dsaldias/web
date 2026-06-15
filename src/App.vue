<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { iniciarSubscripcion, detenerSubscripcion } from '@dsaldias/auth-web'

onMounted(() => iniciarSubscripcion())
onBeforeUnmount(() => detenerSubscripcion())
</script>
