<template>
  <q-dialog v-model="alert" persistent square>
    <q-card xstyle="min-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section class="row items-center q-pb-xs">
          <div class="text-h6">{{ input.id ? 'Editar' : 'Registrar' }}</div>
          <q-space />
          <q-btn flat v-close-popup> <b>x</b> </q-btn>
        </q-card-section>

        <q-card-section class="q-py-none">
          <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-lg-6">
              <q-input outlined v-model.trim="input.nombre" label="nombre:" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
              <q-input outlined v-model.trim="input.descripcion" label="descripcion:" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
              <q-input outlined type="number" v-model.number="input.jerarquia" label="jerarquia:" dense lazy-rules :rules="[   (val) => (val !== null && val !== '') || 'campo obligatorio',   (val) => (val >= 0 && val < 100) || 'debe ser mayor a cero', ]" />
            </div>

            <div class="col-xs-12 col-lg-6">
              <q-list bordered class="rounded-borders">
                <q-expansion-item expand-separator icon="perm_identity" label="Menus para este rol" class="bg-primary" caption="obligatorio" dense dark >
                  <q-table :rows="menus" :columns="columns_menus" flat dense square :loading="loading_menus" hide-pagination :rows-per-page-options="[0]" row-key="id" selection="multiple" v-model:selected="menus_select" />
                </q-expansion-item>

                <q-separator />

                <q-expansion-item expand-separator icon="perm_identity" label="Permisos para este rol" class="bg-primary" caption="obligatorio" dense dark >
                  <q-table :rows="permisos" :columns="columns_permisos" flat dense square :loading="loading_permisos" hide-pagination :rows-per-page-options="[0]" row-key="metodo" selection="multiple" v-model:selected="permisos_select" />
                </q-expansion-item>
              </q-list>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn outline :loading="loading" label="aceptar" square icon="check" type="submit" color="positive" />
          <q-btn outline :disable="loading" label="cerrar" square icon="close" color="negative" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import PermisosService from 'src/stores/auth/services/permisosService'
import MenusService from 'src/stores/auth/services/menusService'
import RolesService from 'src/stores/auth/services/rolesService'
import { columns_permisos, columns_menus } from './utils'
import { mostrarNotifyError, toast1 } from 'src/stores/auth/utils'

const alert = ref(false)
const loading = ref(false)
const loading_permisos = ref(false)
const loading_menus = ref(false)
const input = ref<any>({})
const permisosService = new PermisosService()
const menusService = new MenusService()
const rolesService = new RolesService()
const permisos = ref([])
const menus = ref([])
const permisos_select = ref([])
const menus_select = ref([])

const emit = defineEmits(['sucess'])

const open = async (row?: any) => {
  alert.value = true
  input.value = {}
  menus.value = []
  permisos.value = []
  permisos_select.value = []
  menus_select.value = []

  void getpermisos()
  await getmenus()

  if (row) {
    input.value.id = row.id
    input.value.nombre = row.nombre
    input.value.descripcion = row.descripcion
    input.value.jerarquia = row.jerarquia
    void getrol(row.id)
  }
}

const getpermisos = async () => {
  loading_permisos.value = true
  const r: any = await permisosService.permisos()
  if (r && r.permisos) permisos.value = r.permisos
  loading_permisos.value = false
}

const getmenus = async () => {
  loading_menus.value = true
  const r: any = await menusService.menus()
  if (r && r.menus) menus.value = r.menus
  loading_menus.value = false
}

const getrol = async (id: string) => {
  loading.value = true
  const r: any = await rolesService.rol_by_id(id)
  if (r && r.rol_by_id) {
    menus_select.value = r.rol_by_id.menus
    permisos_select.value = r.rol_by_id.permisos
  }
  loading.value = false
}

const onSubmit = () => {
  const permis = permisos_select.value.map((x: any) => x.metodo)
  const mens = menus_select.value.map((x: any) => parseInt(x.id))
  if (mens.length == 0) {
    mostrarNotifyError('seleccione un menu')
    return
  }
  if (permis.length == 0) {
    mostrarNotifyError('seleccione un permiso')
    return
  }
  input.value.permisos = permis
  input.value.menus = mens
  if (input.value.id) void actualizar()
  else void registrar()
}

const actualizar = async () => {
  loading.value = true
  const r: any = await rolesService.update_rol(input.value)
  loading.value = false
  if (r.update_rol) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.update_rol)
  }
}

const registrar = async () => {
  loading.value = true
  const r: any = await rolesService.create_rol(input.value)
  loading.value = false
  if (r.create_rol) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.create_rol)
  }
}

defineExpose({
  open,
})
</script>
