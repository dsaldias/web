<template>
  <div>
    <h5>Hola mundo</h5>
    {{ todos }}
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import DemoService from 'src/stores/app/services/demoService'
import { onMounted, ref } from 'vue'

const demoService = new DemoService()
const todos = ref()

onMounted(async () => {
  const r: any = await demoService.todos()
  if (r.todos) todos.value = r.todos

  const nuevo: any = {}
  nuevo.text = ''
  nuevo.userId = ''
  const c: any = await demoService.createTodo(nuevo)
  console.log('cccc', c.createTodo)
})
</script>
