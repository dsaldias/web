<template>
  <q-dialog v-model="alert" persistent style="width: min(780px, 95vw); max-width: 95vw">
    <q-card flat bordered style="width: 100%">
      <q-form @submit="onSubmit">

        <!-- Header -->
        <q-card-section class="row items-center q-py-sm q-px-md">
          <q-icon :name="input.id ? 'edit' : 'shield'" color="primary" class="q-mr-sm" />
          <span class="text-subtitle1 text-weight-medium">{{ input.id ? 'Editar rol' : 'Registrar rol' }}</span>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="row q-col-gutter-md">

            <!-- Col 1: datos del rol -->
            <div class="col-xs-12 col-lg-6">
              <div class="text-caption text-weight-medium text-primary q-mb-sm" style="letter-spacing:.05em; text-transform:uppercase">
                Datos del rol
              </div>
              <div class="column q-gutter-sm">
                <q-input outlined v-model.trim="input.nombre" label="Nombre" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
                <q-input outlined v-model.trim="input.descripcion" label="Descripción" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
                <q-input outlined type="number" v-model.number="input.jerarquia" label="Jerarquía" dense lazy-rules :rules="[(val) => (val !== null && val !== '') || 'campo obligatorio', (val) => (val >= 0 && val < 100) || 'debe ser mayor a cero']" />
              </div>
            </div>

            <!-- Col 2: menús y permisos -->
            <div class="col-xs-12 col-lg-6">
              <div class="text-caption text-weight-medium text-primary q-mb-sm" style="letter-spacing:.05em; text-transform:uppercase">
                Accesos
              </div>
              <q-list bordered separator class="rounded-borders">
                <q-expansion-item expand-separator icon="folder_shared" label="Menús para este rol" caption="obligatorio" dense default-opened header-class="text-primary">
                  <q-table :rows="menus" :columns="columns_menus" flat dense :loading="loading_menus" hide-pagination :rows-per-page-options="[0]" row-key="id" selection="multiple" v-model:selected="menus_select">
                    <template v-slot:body-cell-label="props">
                      <q-td :props="props">
                        <div v-if="!props.row.padre_id" class="row items-center q-gutter-x-xs">
                          <q-icon name="folder" color="primary" size="xs" />
                          <span class="text-weight-medium">{{ props.row.label }}</span>
                        </div>
                        <div v-else class="row items-center q-gutter-x-xs q-pl-md">
                          <q-icon name="subdirectory_arrow_right" size="xs" style="opacity:.5" />
                          <span class="text-caption">{{ props.row.label }}</span>
                        </div>
                      </q-td>
                    </template>
                  </q-table>
                </q-expansion-item>
                <q-expansion-item expand-separator icon="admin_panel_settings" label="Permisos para este rol" caption="obligatorio" dense header-class="text-primary">
                  <q-table :rows="permisos" :columns="columns_permisos" flat dense :loading="loading_permisos" hide-pagination :rows-per-page-options="[0]" row-key="metodo" selection="multiple" v-model:selected="permisos_select" />
                </q-expansion-item>
              </q-list>
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
import { ref, watch, nextTick } from 'vue'
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

let syncing = false
watch(menus_select, (newVal) => {
  if (syncing) return
  const all = menus.value as any[]
  const ids = new Set((newVal as any[]).map((x: any) => x.id))
  let result = [...(newVal as any[])]

  // Si hay un hijo seleccionado → agregar su padre si no está
  for (const item of newVal as any[]) {
    if (item.padre_id && !ids.has(item.padre_id)) {
      const parent = all.find((m: any) => m.id === item.padre_id)
      if (parent) { result.push(parent); ids.add(parent.id) }
    }
  }

  // Si un padre no tiene ningún hijo seleccionado → quitarlo
  result = result.filter((item: any) => {
    if (!item.padre_id) {
      const hijos = all.filter((m: any) => m.padre_id === item.id)
      return hijos.length === 0 || hijos.some((h: any) => ids.has(h.id))
    }
    return true
  })

  if (result.length !== (newVal as any[]).length) {
    syncing = true
    menus_select.value = result as never[]
    void nextTick(() => { syncing = false })
  }
}, { deep: true })

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

  // Validar: cada padre seleccionado debe tener al menos un hijo seleccionado
  const selectedIds = new Set((menus_select.value as any[]).map((x: any) => x.id))
  const padresSeleccionados = (menus_select.value as any[]).filter((x: any) => !x.padre_id)
  for (const padre of padresSeleccionados) {
    const tieneHijos = (menus.value as any[]).some((m: any) => m.padre_id === padre.id)
    const tieneHijoSeleccionado = (menus.value as any[]).some((m: any) => m.padre_id === padre.id && selectedIds.has(m.id))
    if (tieneHijos && !tieneHijoSeleccionado) {
      mostrarNotifyError(`El menú "${padre.label}" requiere al menos un submenú seleccionado`)
      return
    }
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
