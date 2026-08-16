<template>
  <div class="q-pa-none q-ma-none">
    <q-btn flat class="q-pl-xs q-pr-none" @click="subscribir">
      <q-avatar size="26px">
        <q-img v-if="foto_64" :src="foto_64" />
        <img v-else src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <!-- <span class="q-ml-xs ellipsis" style="max-width: 9em;">{{ datos.username }}</span>
      <q-icon name="arrow_drop_down" size="xs" />
      <q-tooltip>Perfil</q-tooltip> -->
      <span class="q-ml-xs ellipsis" style="max-width: 9em;"> {{ datos.username }} </span>
      <q-badge v-if="store.chatUnreadCount > 0" color="red" rounded floating :label="chatUnreadLabel" />
      <q-tooltip> Perfil </q-tooltip>
      <q-menu>
        <div class="row no-wrap" style="min-width: 320px">

          <!-- Columna izquierda: info + acciones -->
          <div class="column q-pa-md" style="min-width: 160px; flex: 1">
            <div class="text-subtitle2 text-weight-medium q-mb-xs">Mi Perfil</div>
            <q-separator class="q-mb-sm" />
            <div class="text-body2 q-mb-xs">{{ datos.usuario }}</div>
            <div class="text-caption" style="opacity:.6">{{ parseFecha(datos.last_login) }}</div>
            <div class="text-caption text-primary q-mb-md">{{ datos.roles }}</div>

            <q-toggle
              v-model="store.thema_cuaderno"
              color="primary"
              dense
              unchecked-icon="brightness_7"
              checked-icon="dark_mode"
              label="Tema cuaderno"
              class="text-caption q-mb-sm"
            />

            <q-btn flat no-caps icon="edit" label="Editar perfil" align="left" v-close-popup @click="openEdit()" />
            <q-btn class="q-mt-xs" color="primary" label="Abrir chat" outline icon="chat" square size="sm" v-close-popup stretch @click="openChat()">
              <q-badge v-if="store.chatUnreadCount > 0" color="red" rounded floating :label="chatUnreadLabel" />
            </q-btn>
            <extension_btn />
          </div>

          <q-separator vertical />

          <!-- Columna derecha: avatar + salir -->
          <div class="column items-center justify-between q-pa-md" style="min-width: 110px">
            <q-avatar size="80px">
              <q-img v-if="foto_64" :src="foto_64" spinner-color="white" />
              <img v-else src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-caption text-center q-mt-sm q-mb-md" style="white-space: nowrap; opacity:.7">
              {{ datos.username }}
            </div>
            <q-btn outline no-caps color="negative" icon="logout" label="Salir" v-close-popup @click="logout()" />
          </div>

        </div>
      </q-menu>
    </q-btn>

    <EditarPerfil ref="refEditarPerfil"/>
    <ChatModal ref="refChatModal" />
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLoginStore } from 'src/stores/auth/user';
import PerfilService from 'stores/auth/services/perfilService'
import EditarPerfil from './editar_perfil.vue'
import extension_btn from 'src/components/app/ext/perfil/extension_btn.vue';
import ChatModal from 'src/components/auth/chat/chat_modal.vue';
import ChatsService from 'src/stores/auth/services/chatsService';
import { parseFecha, toHomePath } from 'src/stores/auth/utils';
import { useRouter } from 'vue-router';
import { getThemeDark } from 'src/boot/theme';

export default {
  components:{ EditarPerfil,extension_btn,ChatModal },
  setup () {
    const datos = ref<any>({})
    const store = useLoginStore()
    const perfilService = new PerfilService();
    const chatsService = new ChatsService();
    const refEditarPerfil = ref()
    const refChatModal = ref()
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

    const openChat = () => {
      refChatModal.value.open()
    }

    const chatUnreadLabel = computed(() => store.chatUnreadCount > 99 ? '99+' : String(store.chatUnreadCount))

    const setThemaCuaderno = () => {
      store.setThemaCuaderno(store.thema_cuaderno)
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
      void loadChatUnreadCount(us.id)
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

    const loadChatUnreadCount = async (userId: string | number) => {
      if (!userId) return
      try {
        const res:any = await chatsService.chats_no_leidos(userId)
        store.setChatUnreadCount(Number(res?.chats_no_leidos || 0))
      } catch {
        store.setChatUnreadCount(0)
      }
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
      openChat,
      store,
      refEditarPerfil,
      refChatModal,
      foto_64,
      parseFecha,
      subscribir,
      setThemaCuaderno,
      chatUnreadLabel
    }
  }
}
</script>
