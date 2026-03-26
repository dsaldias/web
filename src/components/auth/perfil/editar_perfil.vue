<template>
  <q-dialog v-model="alert" persistent square>
    <q-card flat bordered vv-on:click="checkClickSession()">
      <q-card-section>
        <div class="text-h6"> Editar Información Personal </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-xs justify-center">
            <div class="col-xs-12 col-sm-8 ">
              <q-img
                class="zoomer"
                v-if="foto_64" :src="foto_64"
                spinner-color="white"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.nombres" label="* Nombres:" required lazy-rules dense :rules="[(val:any) => validaciones.val_nombre(val)]" />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.apellido1" label="* Apellido 1:" required lazy-rules dense :rules="[(val) => validaciones.val_apellido1(val)]" />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.apellido2" label="Apellido 2:" dense lazy-rules :rules="[(val) => validaciones.val_apellido2(val)]" />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.celular" label="Celular:" dense lazy-rules :rules="[(val) => validaciones.val_celular(val)]" />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.correo" label="Correo:" dense lazy-rules :rules="[(val) => validaciones.val_correo(val)]" />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input outlined v-model.trim="input.documento" label="Documento:" dense lazy-rules :rules="[(val) => validaciones.val_documento(val)]" />
            </div>
            <div class="col-xs-12 col-sm-12">
              <q-input outlined v-model.trim="input.direccion" label="Direccion:" dense lazy-rules :rules="[(val) => validaciones.val_direccion(val)]" />
            </div>
            <div class="col-xs-12 col-sm-12">
              <q-radio v-model="input.sexo" val="F" label="F" />
              <q-radio v-model="input.sexo" val="M" label="M" />
            </div>

            <div class="col-xs-12 col-sm-12">
              <q-file style="min-width: 50px" clearable v-model="foto_file" dense accept="image/*" :disable="loading" square outlined color="orange" label="Seleccionar foto de perfil (2MB)" max-file-size="2097152" @update:model-value="filevalue($event)" @rejected="onRejected" >
                <template v-slot:prepend>
                  <q-icon name="upload" />
                </template>
                <q-tooltip> Seleccionar foto de perfil </q-tooltip>
              </q-file>
            </div>

            <div class="col-xs-12 col-sm-12 q-pt-md">
              <q-btn color="grey" icon="fmd_good" dense square outline @click="openGeo()"> Ubicacion geografica </q-btn>
              <small class="q-pl-md"> {{ input.latitud }} {{ input.longitud }} </small>
            </div>
          </div>

          <div vv-show="!input.oauth_id">
            <q-separator color="green" class="q-mt-md q-mb-xs" />
            <div class="row">
              <div class="col-xs-12 col-sm-12">
                <q-input outlined v-model.trim="input.password" label="Cambiar clave de acceso:" dense lazy-rules :rules="[(val:any) => validaciones.val_password_opc(val)]" hint="recuerde iniciar session con la nueva clave."/>
              </div>
            </div>
          </div>

          <div class="q-mt-md" :align="'right'">
            <q-linear-progress v-if="loading" dark rounded indeterminate color="secondary" class="q-mb-sm" />
            <q-btn :disable="loading" label="Guardar" class="q-mr-xs" icon="done" type="submit" color="positive" square outline />
            <q-btn :disable="loading" label="cerrar" color="negative" icon="close" square outline @click="cerrar()" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <Geo ref="refGeo" v-on:onpin="onpin" />
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { useLoginStore } from 'src/stores/auth/user';
import PerfilService from 'stores/auth/services/perfilService'
import MeService from 'src/stores/auth/services/meService';
import Validaciones from './validador';
import { ref } from 'vue';
import {Notify} from 'quasar'
import Geo from 'components/auth/geo/geo_modalbk.vue';
import {init_zoomer} from 'stores/auth/zoomer';

export default {
  components:{ Geo },
  setup() {
    const store = useLoginStore();
    const perfilService = new PerfilService();
    const meService = new MeService();
    const validaciones = new Validaciones();
    const loading = ref(false);
    const alert = ref(false);
    const refGeo = ref();
    const input = ref<any>({});
    const foto_file = ref();
    const foto_64 = ref('');

    const cerrar = ()=> alert.value = false;

    const open = async () => {
      alert.value = true;
      foto_file.value = null;
      foto_64.value = '';
      input.value = {};
      await me();
    };

    const me = async () => {
      console.log('editar_perfillll');
      
      loading.value = true;
      const q: any= {}
      q.unidad_id = store.rolUnidad.unidad.id
      const res:any = await meService.me(q);
      if(res && res.me){
        input.value.id = res.me.usuario.id;
        input.value.nombres = res.me.usuario.nombres;
        input.value.apellido1 = res.me.usuario.apellido1;
        input.value.apellido2 = res.me.usuario.apellido2;
        input.value.celular = res.me.usuario.celular;
        input.value.correo = res.me.usuario.correo;
        input.value.documento = res.me.usuario.documento;
        input.value.direccion = res.me.usuario.direccion;
        input.value.sexo = res.me.usuario.sexo;
        input.value.oauth_id = res.me.usuario.oauth_id;
        input.value.latitud = res.me.usuario.latitud;
        input.value.longitud = res.me.usuario.longitud;
        // input.value.password = '';
        await getFoto(res.me.usuario);
      }
      loading.value = false;
    }

    const filevalue = (file:any) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          if(e.target){
            input.value.foto64 = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      }else{
        input.value.foto64 = null;
      }
    };

    const onRejected = (rejectedEntries:any) => {
      const mf = rejectedEntries[0].failedPropValidation;
      Notify.create({
        type: 'negative',
        message: `${rejectedEntries.length} no cumple la restriccion: ${mf}`,
      });
    };

    const getFoto = async (us:any) => {
      const url = us.foto_url;
      if(!url) return url;
      const res:any = await perfilService.get_imagen(url);
      if(res && res.get_imagen) foto_64.value = res.get_imagen;
      init_zoomer();
    }

    const openGeo = () => {
      const lt = input.value.latitud;
      const ln = input.value.longitud;
      refGeo.value.open(lt,ln);
    };

    const onpin = (lat:any, lon:any) => {
      input.value.latitud = lat;
      input.value.longitud = lon;
    };

    const onSubmit = async () => {
      console.log('ssssss',input.value);
      loading.value = true;

      const obj:any = Object.assign({}, input.value);
      delete obj.oauth_id;

      const res:any = await perfilService.update_perfil(obj)
      if(res && res.update_perfil) alert.value = false;
      loading.value = false;
    }

    return {
      store,
      alert,
      loading,
      input,
      validaciones,
      foto_file,
      foto_64,
      refGeo,
      // checkClickSession: click.setup().checkClickSession,
      cerrar,
      open,
      onSubmit,
      filevalue,
      onRejected,
      openGeo,
      onpin,
    };
  },
};
</script>
