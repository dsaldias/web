<template>
  <q-dialog v-model="alert" persistent style="width: min(700px, 95vw); max-width: 95vw">
    <q-card flat bordered style="width: 100%">
      <q-form @submit="onSubmit">

        <!-- Header -->
        <q-card-section class="row items-center q-py-sm q-px-md">
          <q-icon :name="input.id ? 'edit' : 'notifications'" color="primary" class="q-mr-sm" />
          <span class="text-subtitle1 text-weight-medium">{{ input.id ? 'Editar notificación' : 'Registrar notificación' }}</span>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>

        <q-separator />

        <q-card-section class="column q-gutter-md">
          <q-editor
            v-model="input.mensaje"
            :definitions="definicion"
            :toolbar="toolbar($q)"
          />

          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <q-input
                outlined
                type="datetime-local"
                v-model.trim="input.desde"
                label="Desde"
                dense
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                outlined
                type="datetime-local"
                v-model="input.hasta"
                label="Hasta"
                dense
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']"
              />
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
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import NotisService from 'src/stores/auth/services/notisService'
import {
  ajustarFechaLocal,
  // ajustarFechaUTC,
  mostrarNotifyError,
  toast1,
} from 'src/stores/auth/utils'
import { toolbar } from './utils'

const alert = ref(false)
const loading = ref(false)
const input = ref<any>({})
const notisService = new NotisService()
const emit = defineEmits(['sucess'])
const definicion = ref<any>({
  bold: { label: 'Bold', icon: undefined, tip: 'Negritas' },
})

const open = (row?: any) => {
  alert.value = true
  input.value = {}
  input.value.mensaje = ''
  input.value.desde = ajustarFechaLocal(new Date())

  if (row) {
    const xrow = JSON.parse(JSON.stringify(row))
    input.value.id = xrow.id
    input.value.mensaje = xrow.mensaje
    input.value.desde = ajustarFechaLocal(new Date(xrow.desde))
    input.value.hasta = ajustarFechaLocal(new Date(xrow.hasta))
  }
}

/* const onSubmit = () => {
  if (input.value.mensaje.length == 0) {
    mostrarNotifyError('escriba el mensaje')
    return
  }
  const offsetMinutes = new Date().getTimezoneOffset()
  const offsetHours = -offsetMinutes / 60

  const date = new Date(input.value.desde)
  const date2 = new Date(input.value.hasta)
  input.value.desde = ajustarFechaUTC(date, offsetHours)
  input.value.hasta = ajustarFechaUTC(date2, offsetHours)

  if (input.value.id) void actualizar()
  else void registrar()
} */

const onSubmit = () => {
  if (input.value.mensaje.length == 0) {
    mostrarNotifyError('escriba el mensaje')
    return
  }

  input.value.desde = new Date(input.value.desde).toISOString()
  input.value.hasta = new Date(input.value.hasta).toISOString()

  if (input.value.id) void actualizar()
  else void registrar()
}

const actualizar = async () => {
  loading.value = true
  const r: any = await notisService.update_notificacion(input.value)
  loading.value = false
  if (r.update_notificacion) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.update_notificacion)
  }
}

const registrar = async () => {
  loading.value = true
  const r: any = await notisService.crear_notificacion(input.value)
  loading.value = false
  if (r.crear_notificacion) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.crear_notificacion)
  }
}

defineExpose({
  open,
})
</script>
