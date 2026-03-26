<template>
  <div class="q-pa-none q-ma-none">
    <q-btn flat class="q-pl-xs q-pr-none" @click="subscribir">
      <q-avatar size="26px">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      <span class="q-ml-xs ellipsis" style="max-width: 9em;"> {{ datos.username }} </span>
      <q-tooltip> Perfil </q-tooltip>
      <q-menu square >
        <div class="row no-wrap q-pa-md">
          <div class="column" style="min-width: 130px;">
            <div class="text-h6 q-mb-md">Mi Perfil</div>
            <p class="q-mt-none q-mb-xs"> {{ datos.usuario }} </p>
            <p class="q-mt-none q-mb-xs"> {{ parseFecha(datos.last_login) }} </p>
            <p class="q-mt-none q-mb-xs"> {{ datos.roles }} </p>
            <q-toggle v-model="store.thema_cuaderno" color="primary" dense unchecked-icon="brightness_7" checked-icon="dark_mode" />
            <q-btn color="green" label="Editar" outline icon="edit" square size="sm" v-close-popup stretch @click="openEdit()" />
            <extension_btn />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center" style="min-width: 99px;">
            <q-avatar size="72px" >
              <q-img v-if="foto_64" :src="foto_64" spinner-color="white" />
            </q-avatar>

            <p></p>
            <div class="text-subtitle1 q-mt-md q-mb-xs" style="white-space: nowrap"> {{ datos.usuario }} </div>

            <q-btn color="negative" label="Salir" icon="block" square outline size="sm" v-close-popup stretch @click="logout()" />
          </div>
        </div>
      </q-menu>
    </q-btn>

    <EditarPerfil ref="refEditarPerfil"/>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useLoginStore } from 'src/stores/auth/user';
import PerfilService from 'stores/auth/services/perfilService'
import EditarPerfil from './editar_perfil.vue'
import extension_btn from 'src/components/app/ext/perfil/extension_btn.vue';
import { parseFecha, toHomePath } from 'src/stores/auth/utils';
import { useRouter } from 'vue-router';
import { getThemeDark } from 'src/boot/theme';

export default {
  components:{ EditarPerfil,extension_btn },
  setup () {
    const datos = ref<any>({})
    const store = useLoginStore()
    const perfilService = new PerfilService();
    const refEditarPerfil = ref()
    const router = useRouter();
    const foto_64 = ref('');
    const unsubscribe = ref()

    const logout = async ()=> {
      const r = toHomePath()
      const isdark = getThemeDark()
      store.setLastDarkstate(isdark)
      await router.push(r);
      store.setSessionKey(undefined)
    }

    const openEdit = () => { 
      refEditarPerfil.value.open();
    }

    const cargarDatos = async () => {
      foto_64.value = '';
      let data:any = store.dataUser;
      if(typeof(data) == 'string') data = JSON.parse(data);
      if(!data.roles) return;


      const roles = data.roles.length
      const us = data.usuario;
      if(!us.apellido2) us.apellido2 = '';
      if(!us.celular) us.celular = '';
      if(!us.documento) us.documento = '';
      if(!us.correo) us.correo = '';
      datos.value.usuario = `${us.nombres} ${us.apellido1} ${us.apellido2}`;
      datos.value.documento = `${us.documento}`;
      datos.value.celular = `${us.celular}`;
      datos.value.correo = `${us.correo}`;
      datos.value.username = `${us.username}`;
      datos.value.roles = `${roles} roles.`;
      datos.value.last_login = us.last_login;
      await getFoto(data.usuario)
    }

    const getFoto = async (us:any) => {
      const url = us.foto_url;
      if(!url) return url;
      const res:any = await perfilService.get_imagen(url);
      if(res && res.get_imagen) foto_64.value = res.get_imagen;
    }

    const subscribir = () => { 
      if(unsubscribe.value) return
      unsubscribe.value = store.$subscribe((_, state) => { 
        store.setThemaCuaderno(state.thema_cuaderno)
      });
    }

    onMounted(async ()=>{
      await cargarDatos();
    })

    onUnmounted(()=>{
      if(unsubscribe.value) unsubscribe.value()
    })

    return {
      datos,
      logout,
      openEdit,
      store,
      refEditarPerfil,
      foto_64,
      parseFecha,
      subscribir
    }
  }
}
</script>
