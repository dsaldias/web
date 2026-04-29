<template>
  <q-page class="q-pa-md q-mb-xl">
    <q-expansion-item 
      id="tuto_video_tutorial"
      v-if="is_tuto"
      v-model="expanded"
      class="neon-card neon-card--gold" 
      :header-class="$q.dark.isActive?'text-green':'text-primary'"
      icon="video_library"
      label="Ver el video tutorial"
      caption="Haz click aqui para ver un video tutorial del sistema"
    >
      <q-card class="neon-card neon-card--gold">
        <q-card-section class="text-center">
          <iframe
            v-if="expanded"
            ref="refIFrame"
            :width="width"
            :height="height"
            :src="video_url"
            title=""
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <dashAuth />
    <dashApp v-if="is_dash_app" />
    <component :is="consumerDash" v-if="consumerDash" />
  </q-page>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, inject } from 'vue'
import type { Component } from 'vue'
import dashAuth from './dash-auth.vue'
import dashApp from 'src/pages/app/dashboard/dash-app.vue'

const consumerDash = inject<Component | null>('authDashComponent', null)

const expanded = ref(false)
const is_tuto = ref(process.env.SHOW_TUTO_VIDEO)
const is_dash_app = ref(process.env.SHOW_DASH_APP)
const video_url = ref<string>(process.env.TUTO_VIDEO_URL + '')
const refIFrame = ref()
const width = ref('100%')
const height = ref(0)

const size = () => {
  if (!refIFrame.value) {
    return
  }

  width.value = '100%'
  if (refIFrame.value.offsetWidth > 1080) {
    width.value = '80%'
  }

  const ancho = refIFrame.value.offsetWidth
  const alto = (ancho * 9) / 16
  height.value = alto
}

watch(
  () => expanded.value,
  () => {
    setTimeout(() => size(), 300)
  },
)

onMounted(() => {
  window.addEventListener('resize', size)
})

onUnmounted(() => {
  window.removeEventListener('resize', size)
})
</script>
