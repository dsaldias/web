<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <q-header :class="$q.dark.isActive?'dark-hea':'bg-primary'">
      <q-toolbar class="text-toolbar">
        <q-btn v-if="store.dataUser.usuario" flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

        <app_logo />
        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs && store.dataUser.usuario" xto="toHome()" @click="toHomeR()" >
          <app_name /> 
        </q-btn>
        <q-badge rounded :color="colorWs(store.ws_noti_status)" id="tuto_icon_ws" @dblclick="openConectados()">
          <span v-if="$q.screen.width > 600"> {{ store.ws_total_conectados }} conexiones </span>
          <span v-else> {{ store.ws_total_conectados }} </span>
          <q-tooltip class="bg-purple">
            <span>Estado de notificaciones ({{ store.ws_conectados }}) </span>
          </q-tooltip>
        </q-badge>

        <q-space />
        <RolUnidad v-if="store.dataUser.usuario" id="tuto_rol_select"/>
        <q-toggle v-model="$q.dark.isActive" :color="$q.dark?'black':'white'" unchecked-icon="brightness_7" checked-icon="dark_mode" id="tuto_mode_dark"/>
        <small v-if="store.dataUser.usuario && show_time" v-html="store.tiempoSession" title="fin de sesion" id="tuto_hora_session"> </small>
        <BtnPerfil v-if="store.dataUser.usuario" id="tuto_btn_perfil" />
      </q-toolbar>
    </q-header>

    <q-drawer v-if="store.dataUser.usuario" v-model="leftDrawerOpen" show-if-above bordered :breakpoint="700" :width="240" >
      <q-scroll-area class="fit">
        <q-list padding id="tuto_menu_element">
          <q-item class="justify-center">
            <q-avatar v-if="foto_64">
              <q-img :src="foto_64" spinner-color="white" />
            </q-avatar>
          </q-item> 
          <q-linear-progress v-if="store.loading_menus" dark size="xs" indeterminate color="secondary" class="q-ma-none q-pa-none" />

          <template v-for="t in store.menus">
            <template v-for="(link, i) in t" :key="link.text">
              
              <q-item v-ripple clickable :to="link.path" active-class="text-secondary">
                <q-item-section avatar>
                  <!-- <q-icon :color="link.color" :name="link.icon" /> -->
                  <q-icon :color="$q.dark.isActive?'grey':link.color" :name="link.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ link.label }}</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-avatar size="md" icon="arrow_right" />
                </q-item-section>
              </q-item>

              <q-separator v-if="Number(i) + 1 == t.length" class="q-my-md" />
            </template>
          </template>

          <!-- <q-expansion-item dense dense-toggle expand-separator icon="perm_identity" label="Ajustes" >
            <q-item v-ripple clickable active-class="text-secondary">
              <q-item-section avatar>
                <q-icon class="q-ml-lg" color="link.color" name="settings" />
              </q-item-section>
              <q-item-section>
                <q-item-label> jejeje </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar size="md" icon="arrow_right" />
              </q-item-section>
            </q-item>
          </q-expansion-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer> 

    <EdgeLight ref="edgeLightRef" />
    <usuarios_conectados v-if="showConectados" ref="refusuarios_conectados" />

    <!-- en el set setSessionKey() se usa cuando relogin -->
    <q-page-container >
      <Login v-if="!store.dataUser.usuario" />
      <router-view v-else /> 
      <FabButton />
    </q-page-container>
  </q-layout>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { defineAsyncComponent, nextTick, ref, watch, /* onMounted, */ onBeforeMount } from 'vue'
import { useLoginStore } from 'stores/auth/user'
import { colorWs } from './utils'
import { useRouter } from 'vue-router'
import PerfilService from 'stores/auth/services/perfilService'
import BtnPerfil from 'components/auth/perfil/boton_perfil.vue'
import RolUnidad from 'components/auth/roles/roles-select.vue'
import FabButton from './fabs/FabButton.vue'
import { toHomePath } from 'src/stores/auth/utils'
import app_name from 'src/components/app/ext/name/app_name.vue'
import app_logo from 'src/components/app/ext/logo/app_logo.vue'
import EdgeLight from 'components/auth/EdgeLight.vue'
import { edgeLightSignal } from 'stores/auth/notificaciones'

const leftDrawerOpen = ref(false)
const store = useLoginStore()
const perfilService = new PerfilService()
const show_time = ref(process.env.SHOW_TIME_LABEL)
const show_landing = ref(process.env.SHOW_LANDING_PAGE)
const foto_64 = ref('')
const refusuarios_conectados = ref()
const router = useRouter() 
const Login = defineAsyncComponent(() => import('pages/auth/login/login-index.vue'))
const usuarios_conectados = defineAsyncComponent(
  () => import('src/components/app/ext/conectados/usuarios_conectados.vue'),
)
const showConectados = ref(false)
const pendingOpenConectados = ref(false)
const edgeLightRef = ref<InstanceType<typeof EdgeLight>>()

watch(edgeLightSignal, () => edgeLightRef.value?.trigger())

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)

const toHomeR = async () => {
  const r = toHomePath()
  await router.push(r)
  window.location.reload()
}

const getFoto = async () => {
  foto_64.value = ''
  const data = store.dataUser
  const us = data.usuario
  if (!us) return
  const url = us.foto_url
  if (!url) return
  const res: any = await perfilService.get_imagen(url)
  if (res && res.get_imagen) foto_64.value = res.get_imagen
}

const openConectados = () => {
  showConectados.value = true
  if (refusuarios_conectados.value) {
    refusuarios_conectados.value.open()
    return
  }
  pendingOpenConectados.value = true
  void nextTick()
}

watch(
  () => store.dataUser?.usuario,
  async (usuario) => {
    if (usuario) await getFoto()
  },
)

watch(
  () => refusuarios_conectados.value,
  (val) => {
    if (val && pendingOpenConectados.value) {
      pendingOpenConectados.value = false
      val.open()
    }
  },
)

onBeforeMount(async ()=>{
  if (show_landing.value && !store.dataUser.usuario) {
    await router.push('/principal.html')
  }
})

/* onMounted(async () => {
  if (show_landing.value && !store.dataUser.usuario) {
    await router.push('/principal.html')
  }
}) */
</script>
