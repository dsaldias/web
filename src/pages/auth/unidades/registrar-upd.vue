<template>
  <q-dialog v-model="alert" persistent style="width: min(620px, 95vw); max-width: 95vw">
    <q-card flat bordered style="width: 100%">
      <q-form @submit="onSubmit">

        <!-- Header -->
        <q-card-section class="row items-center q-py-sm q-px-md">
          <q-icon :name="input.id ? 'edit' : 'account_tree'" color="primary" class="q-mr-sm" />
          <span class="text-subtitle1 text-weight-medium">{{ input.id ? 'Editar unidad' : 'Registrar unidad' }}</span>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6 column q-gutter-sm">
              <q-input outlined v-model.trim="input.nombre" label="Nombre" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
              <q-input outlined type="number" v-model.number="input.orden" label="Orden" dense lazy-rules :rules="[
                  (val) => (val !== null && val !== '') || 'campo obligatorio',
                  (val) => (val >= 0 && val < 100) || 'debe ser mayor a cero',
                ]"
              />
              <div class="row items-center q-gutter-x-sm">
                <q-btn color="primary" icon="fmd_good" flat @click="openGeo()">
                  Ubicación
                </q-btn>
                <span class="text-caption" style="opacity:.6">{{ input.latitud }} {{ input.longitud }}</span>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.descripcion" label="Descripción" type="textarea" rows="5" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="q-pa-sm">
          <q-btn flat :disable="loading" label="Cerrar" icon="close" color="negative" v-close-popup />
          <q-btn unelevated :loading="loading" label="Guardar" icon="check" type="submit" color="positive" />
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
