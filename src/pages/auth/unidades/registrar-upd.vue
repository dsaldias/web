<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 600px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section class="row items-center q-pb-xs">
          <div class="text-h6">{{ input.id ? 'Editar' : 'Registrar' }}</div>
          <q-space />
          <q-btn flat v-close-popup> <b>x</b> </q-btn>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row q-col-gutter-xs">
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.nombre" label="nombre:" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
              <q-input outlined type="number" v-model.number="input.orden" label="orden:" dense lazy-rules :rules="[
                  (val) => (val !== null && val !== '') || 'campo obligatorio',
                  (val) => (val >= 0 && val < 100) || 'debe ser mayor a cero',
                ]"
              />
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.descripcion" label="descripcion:" type="textarea" rows="5" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-btn color="grey" icon="fmd_good" dense square outline @click="openGeo()">
                Ubicacion geografica
              </q-btn> 
              <small class="q-pl-md"> {{ input.latitud }} {{ input.longitud }} </small>
            </div>
          </div>
          
          
        </q-card-section>

        <q-card-actions align="right">
          <q-btn outline :loading="loading" label="aceptar" square icon="check" type="submit" color="positive" />
          <q-btn outline :disable="loading" label="cerrar" square icon="close" color="negative" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>

    <Geo ref="refGeo" />
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import Geo from 'components/auth/geo/geo_modalbk.vue'
import UnidadesService from 'src/stores/auth/services/unidadesService'
import { toast1 } from 'src/stores/auth/utils'

const alert = ref(false)
const loading = ref(false)
const input = ref<any>({})
const unidadesService = new UnidadesService()
const refGeo = ref()

const emit = defineEmits(['sucess'])

const open = (row?: any) => {
  alert.value = true
  input.value = {}

  if (row) {
    input.value.id = row.id
    input.value.nombre = row.nombre
    input.value.descripcion = row.descripcion
    input.value.orden = row.orden
    input.value.latitud = row.latitud
    input.value.longitud = row.longitud
  }
}

const openGeo = async () => {
  const lt = input.value.latitud
  const ln = input.value.longitud
  const { lat, lng } = await refGeo.value.open(lt, ln)
  input.value.latitud = lat
  input.value.longitud = lng
}

const onSubmit = () => {
  if (input.value.id) void actualizar()
  else void registrar()
}

const actualizar = async () => {
  loading.value = true
  const r: any = await unidadesService.update_unidad(input.value)
  loading.value = false
  if (r.update_unidad) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.update_unidad)
  }
}

const registrar = async () => {
  loading.value = true
  const r: any = await unidadesService.create_unidad(input.value)
  loading.value = false
  if (r.create_unidad) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.create_unidad)
  }
}

defineExpose({
  open,
})
</script>
