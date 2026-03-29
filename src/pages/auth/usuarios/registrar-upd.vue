<template>
  <q-dialog v-model="alert" persistent full-width style="max-width: 98vw">
    <q-card flat bordered>
      <q-form @submit="onSubmit">

        <!-- Header -->
        <q-card-section class="row items-center q-py-sm q-px-md">
          <q-icon :name="input.id ? 'edit' : 'person_add'" color="primary" class="q-mr-sm" />
          <span class="text-subtitle1 text-weight-medium">{{ input.id ? 'Editar usuario' : 'Registrar usuario' }}</span>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pt-sm">
          <div class="row q-col-gutter-md">

            <!-- Col 1: datos personales -->
            <div class="col-xs-12 col-lg-4 col-sm-6">
              <div class="text-caption text-weight-medium text-primary q-mb-xs" style="letter-spacing:.05em; text-transform:uppercase">
                Datos personales
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-sm-9 items-center">
                  <q-img class="zoomer rounded-borders" v-if="foto_64" :src="foto_64" spinner-color="white" style="max-height:120px; object-fit:cover" />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <q-input outlined v-model.trim="input.nombres" label="* Nombres" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <q-input outlined v-model.trim="input.apellido1" label="* Apellido 1" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <q-input outlined v-model.trim="input.apellido2" label="Apellido 2" dense lazy-rules counter :rules="[(val) => val_apellido2(val)]" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input outlined v-model.trim="input.username" label="* Username" dense lazy-rules counter :rules="[(val) => (val && val.length > 0) || 'campo obligatorio']" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input outlined v-model.trim="input.password" label="* Password" dense lazy-rules counter :rules="[(val) => val_password(val, input)]" />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <q-input outlined v-model.trim="input.documento" label="Documento" dense lazy-rules counter :rules="[(val) => val_documento(val)]" />
                </div>
                <div class="col-xs-12 col-sm-4">
                  <q-input outlined v-model.trim="input.celular" label="Celular" dense lazy-rules counter :rules="[(val) => val_celular(val)]" />
                </div>
                <div class="col-xs-12 col-sm-4 row items-center q-gutter-x-sm">
                  <span class="text-caption text-weight-medium">Sexo:</span>
                  <q-radio v-model="input.sexo" val="F" label="F" dense />
                  <q-radio v-model="input.sexo" val="M" label="M" dense />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input outlined v-model.trim="input.correo" label="Correo" dense lazy-rules counter :rules="[(val) => val_correo(val)]" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input outlined v-model.trim="input.direccion" label="Dirección" dense lazy-rules counter :rules="[(val) => val_direccion(val)]" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-file clearable v-model="foto_file" dense accept="image/*" :disable="loading" outlined color="primary" label="Foto de perfil (máx. 2MB)" max-file-size="2097152" @update:model-value="filevalue($event)" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="photo_camera" />
                    </template>
                  </q-file>
                </div>
                <div class="col-xs-12 col-sm-6 row items-center q-gutter-x-xs">
                  <q-btn color="primary" icon="fmd_good" dense flat @click="openGeo()">
                    Ubicación
                  </q-btn>
                  <span class="text-caption" style="opacity:.6"> {{ input.latitud }} {{ input.longitud }} </span>
                </div>
              </div>
            </div>

            <!-- Col 2: unidad y rol -->
            <div class="col-xs-12 col-lg-4 col-sm-6">
              <div class="text-caption text-weight-medium text-primary q-mb-xs" style="letter-spacing:.05em; text-transform:uppercase">
                Unidad y Rol
              </div>
              <q-btn unelevated color="primary" icon="add_home_work" class="q-mb-sm" @click="openrolunidad()">
                Asignar unidad y rol
              </q-btn>
              <q-list bordered separator class="rounded-borders">
                <q-expansion-item expand-separator icon="home_work" label="Unidades → Rol" caption="obligatorio" dense default-opened header-class="text-primary">
                  <q-table :rows="rol_unidades" :columns="columns_rolunidad" flat dense hide-pagination :rows-per-page-options="[0]" row-key="id">
                    <template v-slot:body-cell-opt="props">
                      <q-td :props="props" auto-width>
                        <q-btn flat dense icon="delete_outline" color="negative" @click="quitrolunidad(props.row)" />
                      </q-td>
                    </template>
                  </q-table>
                </q-expansion-item>
              </q-list>
            </div>

            <!-- Col 3: permisos y menús -->
            <div class="col-xs-12 col-lg-4 col-sm-6">
              <div class="text-caption text-weight-medium text-primary q-mb-xs" style="letter-spacing:.05em; text-transform:uppercase">
                Permisos globales
              </div>
              <q-list bordered separator class="rounded-borders">
                <q-expansion-item expand-separator icon="admin_panel_settings" label="Permisos" caption="opcional" dense header-class="text-primary">
                  <q-table :rows="permisos" :columns="columns_permisos" flat dense :loading="loading_permisos" hide-pagination :rows-per-page-options="[0]" row-key="metodo" selection="multiple" v-model:selected="permisos_select" />
                </q-expansion-item>
                <q-expansion-item expand-separator icon="folder_shared" label="Menús" caption="opcional" dense header-class="text-primary">
                  <q-table :rows="menus" :columns="columns_menus" flat dense :loading="loading_menus" hide-pagination :rows-per-page-options="[0]" row-key="id" selection="multiple" v-model:selected="menus_select" />
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

    <RolUnidad ref="refRolUnidad" />
    <Geo ref="refGeo" />
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import RolesService from 'src/stores/auth/services/rolesService'
import UnidadesService from 'src/stores/auth/services/unidadesService'
import PermisosService from 'src/stores/auth/services/permisosService'
import MenusService from 'src/stores/auth/services/menusService'
import UsuariosService from 'src/stores/auth/services/usuariosService'
import RolUnidad from './rol-unidad-select.vue'
import PerfilService from 'src/stores/auth/services/perfilService'
import Geo from 'components/auth/geo/geo_modalbk.vue'
import { columns_permisos, columns_menus, columns_rolunidad } from './utils'
import { init_zoomer } from 'stores/auth/zoomer'
import {
  val_apellido2,
  val_celular,
  val_correo,
  val_direccion,
  val_documento,
  val_password,
} from './validator'
import { mostrarNotifyError, toast1 } from 'src/stores/auth/utils'

const alert = ref(false)
const loading = ref(false)
const loading_roles = ref(false)
const loading_unidades = ref(false)
const loading_permisos = ref(false)
const loading_menus = ref(false)
const input = ref<any>({})
const refRolUnidad = ref()
const refGeo = ref()
const rolesService = new RolesService()
const unidadesService = new UnidadesService()
const permisosService = new PermisosService()
const menusService = new MenusService()
const usuariosService = new UsuariosService()
const perfilService = new PerfilService()

const roles = ref([])
const unidades = ref([])
const permisos = ref([])
const menus = ref([])
const rol_unidades = ref<any>([])
const roles_select = ref([])
const permisos_select = ref<any>([])
const menus_select = ref<any>([])
const foto_file = ref()
const foto_64 = ref('')

const emit = defineEmits(['sucess'])

const open = (row?: any) => {
  alert.value = true
  input.value = {}
  permisos_select.value = []
  roles_select.value = []
  menus_select.value = []
  rol_unidades.value = []
  foto_file.value = null
  foto_64.value = ''

  void getroles()
  void getunidades()
  void getpermisos()
  void getmenus()

  if (row) {
    input.value.id = row.id
    input.value.nombres = row.nombres
    input.value.apellido1 = row.apellido1
    input.value.apellido2 = row.apellido2
    input.value.documento = row.documento
    input.value.celular = row.celular
    input.value.sexo = row.sexo
    input.value.correo = row.correo
    input.value.username = row.username
    void getuserdata(row.id)
  }
}

const getroles = async () => {
  loading_roles.value = true
  const r: any = await rolesService.roles()
  if (r && r.roles) roles.value = r.roles
  loading_roles.value = false
}

const getpermisos = async () => {
  loading_permisos.value = true
  const r: any = await permisosService.permisos()
  if (r && r.permisos) permisos.value = r.permisos
  loading_permisos.value = false
}

const getunidades = async () => {
  loading_unidades.value = true
  const r: any = await unidadesService.unidades()
  if (r && r.unidades) unidades.value = r.unidades
  loading_unidades.value = false
}

const getmenus = async () => {
  loading_menus.value = true
  const r: any = await menusService.menus()
  if (r && r.menus) menus.value = r.menus
  loading_menus.value = false
}

const quitrolunidad = (row: any) => {
  const r = row.rol_id
  const u = row.unidad_id
  rol_unidades.value = rol_unidades.value.filter((x: any) => x.rol_id != r || x.unidad_id != u)
}

const filevalue = (file: any) => {
  if (file) {
    const reader = new FileReader()
    reader.onload = function (e) {
      if (e.target) {
        input.value.foto64 = e.target.result
      }
    }
    reader.readAsDataURL(file)
  } else {
    input.value.foto64 = null
  }
}

const onRejected = (rejectedEntries: any) => {
  const mf = rejectedEntries[0].failedPropValidation
  mostrarNotifyError(`${rejectedEntries.length} no cumple la restriccion: ${mf}`)
}

const getuserdata = async (id: string) => {
  loading.value = true
  const r: any = await usuariosService.usuario_by_id(id)
  const row = r.usuario_by_id
  input.value.nombres = row.nombres
  input.value.apellido1 = row.apellido1
  input.value.apellido2 = row.apellido2
  input.value.documento = row.documento
  input.value.celular = row.celular
  input.value.sexo = row.sexo
  input.value.correo = row.correo
  input.value.username = row.username
  input.value.latitud = row.latitud
  input.value.longitud = row.longitud
  row.roles.forEach((x: any) => {
    const ru: any = {}
    ru.rol = x.rol_name
    ru.unidad = x.unidad_name
    ru.rol_id = x.rol_id
    ru.unidad_id = x.unidad_id
    rol_unidades.value.push(ru)
  })
  row.permisos_sueltos.forEach((x: any) => {
    permisos_select.value.push({ metodo: x.metodo })
  })
  row.menus_sueltos.forEach((x: any) => {
    menus_select.value.push({ id: x.id })
  })
  loading.value = false
  void getFoto(row)
  // console.log('rrrr', row)
}

const getFoto = async (us: any) => {
  const url = us.foto_url
  if (!url) return url
  const res: any = await perfilService.get_imagen(url)
  if (res && res.get_imagen) foto_64.value = res.get_imagen
  init_zoomer()
}

const openGeo = async () => {
  const lt = input.value.latitud
  const ln = input.value.longitud
  const { lat, lng } = await refGeo.value.open(lt, ln)
  input.value.latitud = lat
  input.value.longitud = lng
}

const openrolunidad = async () => {
  const { us, r } = await refRolUnidad.value.open(unidades.value, roles.value)
  
  us.forEach((u:any)=>{
    const ru: any = {}
    ru.rol = r.nombre
    ru.unidad = u.nombre
    ru.rol_id = r.id
    ru.unidad_id = u.id
    const ex = rol_unidades.value.find((x: any) => x.unidad_id == u.id)
    if (ex) {
      mostrarNotifyError('no se permite duplicados: '+u.nombre)
    } else {
      rol_unidades.value.push(ru)
    }
  })
  
}

const onSubmit = () => {
  const permis = permisos_select.value.map((x: any) => x.metodo)
  const mens = menus_select.value.map((x: any) => x.id)
  const rolunis = rol_unidades.value.map((x: any) => ({
    rol_id: x.rol_id,
    unidad_id: x.unidad_id,
  }))
  if (rolunis.length == 0) {
    mostrarNotifyError('seleccione unidad con rol')
    return
  }
  const s = input.value.sexo
  const ss = s != '' && s != 'F' && s != 'M'
  if (ss) {
    mostrarNotifyError('el sexo debe ser F o M')
    return
  }
  input.value.roles = rolunis
  input.value.permisos_sueltos = permis
  input.value.menus_sueltos = mens

  if (input.value.id) void actualizar()
  else void registrar()
}

const actualizar = async () => {
  loading.value = true
  const r: any = await usuariosService.update_usuario(input.value)
  loading.value = false
  if (r.update_usuario) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.update_usuario)
  }
}

const registrar = async () => {
  loading.value = true
  const r: any = await usuariosService.create_usuario(input.value)
  loading.value = false
  if (r.create_usuario) {
    toast1('accion ejecutada exitosamente')
    alert.value = false
    emit('sucess', r.create_usuario)
  }
}

defineExpose({
  open,
})
</script>
