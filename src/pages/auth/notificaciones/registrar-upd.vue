<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 600px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section class="row items-center q-pb-xs">
          <div class="text-h6">{{ input.id ? 'Editar' : 'Registrar' }}</div>
          <q-space />
          <q-btn flat v-close-popup> <b>x</b> </q-btn>
        </q-card-section>

        <q-card-section class="q-py-none">
          <div class="row q-col-gutter-sm">
            <div class="col-xs-12">
              <!-- <q-input outlined v-model.trim="input.mensaje" label="nombre:" type="textarea" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" /> -->
              <q-editor
                counter
                outlined
                v-model="input.mensaje"
                :definitions="definicion"
                :toolbar="toolbar($q)"
              />
            </div>
            <div class="col-xs-6">
              <q-input
                outlined
                type="datetime-local"
                v-model.trim="input.desde"
                label="desde:"
                dense
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']"
              />
            </div>
            <div class="col-xs-6">
              <q-input
                outlined
                type="datetime-local"
                v-model="input.hasta"
                label="hasta:"
                dense
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            outline
            :loading="loading"
            label="aceptar"
            square
            icon="check"
            type="submit"
            color="positive"
          />
          <q-btn
            outline
            :disable="loading"
            label="cerrar"
            square
            icon="close"
            color="negative"
            v-close-popup
          />
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
