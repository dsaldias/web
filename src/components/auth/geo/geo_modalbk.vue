<template>
  <q-dialog v-model="alert" persistent square>
    <q-card flat bordered vv-on:click="checkClickSession()" style="min-width: 300px; width: 500px">
      <q-card-section class="q-pb-none">
        <div class="text-h6 q-my-none">Ubicacion geografica</div>
      </q-card-section>

      <q-card-section class="q-py-none">
        <LMap
          v-if="showMap"
          ref="refmap"
          :useGlobalLeaflet="false"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 50vh; width: 100%"
          @click="handleMapClick"
        >
          <LTileLayer :url="url" :attribution="attribution" />
          <LMarker :lat-lng="markerLatLng"></LMarker>
        </LMap>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-mt-md" :align="'right'">
          <q-linear-progress v-if="loading" dark rounded indeterminate color="secondary" class="q-mb-sm" />
          <q-btn class="q-mr-xs" label="limpiar" color="negative" icon="close" square flat @click="limpiar()" />
          <q-btn label="cerrar" color="positive" icon="check" square outline @click="cerrar()" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// import click from 'src/shared/session';
import { Notify } from 'quasar'

const LMap = defineAsyncComponent(async () => {
  const mod = await import('@vue-leaflet/vue-leaflet')
  return mod.LMap
})
const LTileLayer = defineAsyncComponent(async () => {
  const mod = await import('@vue-leaflet/vue-leaflet')
  return mod.LTileLayer
})
const LMarker = defineAsyncComponent(async () => {
  const mod = await import('@vue-leaflet/vue-leaflet')
  return mod.LMarker
})

export default {
  components: { LMap, LMarker, LTileLayer },
  setup(_, { emit }) {
    const alert = ref(false)
    const loading = ref(false)
    const refmap = ref()
    const markerLatLng = ref<any>([])
    const zoom = ref(14.2)
    const center = ref<any>([-21.528098, -64.730105])
    const url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    const attribution = ref(
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    )
    const mapOptions = ref({
      zoomSnap: 0.5,
    })
    const showMap = ref(false)
    let resolvePromise: any

    const open = (lat = null, lon = null) => {
      alert.value = true
      console.log('ssss', lat, lon)

      if (lat && lon) {
        markerLatLng.value = [lat, lon]
      }

      void import('leaflet/dist/leaflet.css').then(() => {
        setTimeout(() => {
          showMap.value = true
          console.log('refMap', refmap.value)
        }, 600)
      })

      return new Promise((resolve) => {
        resolvePromise = resolve
      })
    }

    const handleMapClick = (event: any) => {
      const { lat, lng } = event.latlng
      markerLatLng.value = [lat, lng]

      emit('onpin', lat, lng)
      resolvePromise({ lat, lng })
      Notify.create({
        message: 'Aceptado',
        color: 'orange',
        timeout: 400,
        position: 'top',
        icon: 'fmd_good',
      })
    }

    const limpiar = () => {
      emit('onpin', null, null)
      resolvePromise(null, null)
      cerrar()
    }

    const cerrar = () => (alert.value = false)

    return {
      alert,
      loading,
      zoom,
      center,
      url,
      attribution,
      mapOptions,
      showMap,
      refmap,
      markerLatLng,
      // checkClickSession: click.setup().checkClickSession,
      open,
      cerrar,
      handleMapClick,
      limpiar,
    }
  },
}
</script>
