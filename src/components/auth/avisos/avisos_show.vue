<template>
  <q-dialog v-model="alert" persistent square>
    <q-card class="neon-card neon-card--gold" style="min-width: 500px">
      <q-card-section class="row items-center q-pb-xs">
        <q-avatar size="26px">
          <img src="https://cdn-icons-png.flaticon.com/512/559/559384.png" />
        </q-avatar>
        <div class="q-ml-sm text-h6 neon-logo">AVISOS Y NOTIFICACIONES DEL SISTEMA:</div>
        <q-space />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-separator size="xs" class="q-py-none" />

        <ul>
          <li v-for="(a, i) in notis" :key="i">
            <div class="neon-subtitle">
              <small>
                <i>
                  este mensaje se muestra desde el {{ parseFecha(a.desde) }} hasta el
                  {{ parseFecha(a.hasta) }}
                </i>
              </small>
            </div>
            <span v-html="a.mensaje"></span>
          </li>
        </ul>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="aceptar" square icon="check" color="positive" @click="handleCancel()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { parseFecha } from 'src/stores/auth/utils'
import { ref } from 'vue'

const alert = ref(false)
const notis = ref<any>([])
let resolvePromise: any

const open = (xnotis: any) => {
  notis.value = xnotis
  alert.value = true

  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

const handleCancel = () => {
  alert.value = false
  resolvePromise(false)
}

defineExpose({
  open,
})
</script>
