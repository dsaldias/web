<template>
  <q-linear-progress v-if="!showing" dark rounded indeterminate class="q-mt-xs" color="green" size="xs" />
  <div class="q-pa-xl column items-center" v-show="showing" style="display: flex;align-items: center;justify-content: center;min-height: 100vh;">
    <q-card class="neon-card neon-card--purple" square flat bordered >
      <q-card-section class="text-center q-pb-none">
        <h5 class="q-mb-none q-mt-sm neon-logo">Acceder al sistema</h5>
        <app_login_logo />
        <q-menu touch-position context-menu>
          <q-list dense style="min-width: 100px">
            <q-item clickable @click="clearsite()">
              <q-item-section>Clear site data</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-card-section>

      <q-card-section class="q-mt-none q-pt-none q-px-xl">
        <q-form @submit="onSubmit()" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model.trim="username" label="Nombre de usuario" lazy-rules dense :color="$q.dark.isActive ? 'orange' : 'primary'" :rules="[(val) => (val && val.length > 0) || 'dato obligatorio']" >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input filled :type="pwd" v-model.trim="clave" label="Clave de acceso" lazy-rules dense :color="$q.dark.isActive ? 'orange' : 'primary'" :rules="[(val) => (val && val.length > 0) || 'dato obligatorio']" >
            <template v-slot:prepend>
              <q-icon name="key" />
            </template>
            <template v-slot:append>
              <q-btn flat dense size="small" @click="changePWD()">
                <q-icon name="visibility" />
              </q-btn>
            </template>
          </q-input>

          <div class="column items-center">
            <q-linear-progress v-if="loading" dark rounded indeterminate color="secondary" class="q-mb-sm" />
            <q-btn class="neon-btn-primary" :disable="loading" icon="person" stretch outline square label="Ingresar" type="submit" color="green" />
          </div>
        </q-form>

        <div class="row text-right" v-if="accept_oauth">
          <div class="col-12">
            <q-btn flat class="q-mt-md q-pr-xs" size="sm" color="grey" :loading="loading" @click="googleLogin()" >
              <q-icon name="hive" size="xs" left></q-icon>
              Acceder con Google
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import LoginService from 'stores/auth/services/loginService'
import app_login_logo from 'src/components/app/ext/logo/app_login_logo.vue'
import { useLoginStore } from 'stores/auth/user'
import { cargarMenus } from 'src/stores/auth/menus'
import { useRouter } from 'vue-router'
import { mostrarNotifyError } from 'src/stores/auth/utils'

const username = ref<any>('')
const clave = ref<any>('')
const loading = ref(false)
// cuando se hace logout sale pantallazo del login
// con showing retrasamos la visualizacion
const showing = ref(false)
const service = new LoginService()
const useLogin = useLoginStore()
const pwd = ref<any>('password')
const accept_oauth = ref<any>(false)
const router = useRouter()
const $q = useQuasar()

const onSubmit = async (u = null, p = null) => {
  useLogin.clearStore(false)
  loading.value = true
  let user = username.value
  let pass = clave.value
  if (u) user = u
  if (p) pass = p

  const lo = {
    username: user,
    password: pass,
  }

  const res: any = await service.login(lo)
  loading.value = false

  if (res.login) {
    const l = res.login
    useLogin.setSessionKey(l.session_key)
    useLogin.setNewSessionTime(l.session_time)
    const menuItemsAgrupados = cargarMenus(l.me.menus)
    useLogin.setMenus(menuItemsAgrupados)
    useLogin.setUser(l.me)

    setTimeout(() => void reload(), 50)
  }
}

const reload = async () => {
  await router.push('/')
  window.location.href = window.location.href.split('?')[0] + '?welcome=' + new Date().getTime();
  // window.location.reload()
}

const changePWD = () => (pwd.value == 'text' ? (pwd.value = 'password') : (pwd.value = 'text'))

const googleLogin = async () => {
  loading.value = true
  const { loginGoogle } = await import('stores/auth/firebaseauth')
  const d = await loginGoogle()
  if (d && d.user) {
    const res: any = await service.createOauth(d.user)
    if (res && res.createOauth) {
      await onSubmit(d.user.username, d.user.password)
    }
  } else {
    mostrarNotifyError(d.err)
  }
  loading.value = false
}

const onReset = () => {
  username.value = null
  clave.value = null
}

const clearsite = () => {
  localStorage.clear()
  location.reload()
}

onBeforeMount(() => {
  $q.dark.set(true)
})

onUnmounted(() => {
  const v = useLogin.last_dark_state;
  $q.dark.set(v)
})

onMounted(() => {
  useLogin.clearStore(false)
  accept_oauth.value = process.env.ACCEPT_OAUTH
  setTimeout(() => {
    showing.value = true
  }, 700);
})
</script>
