<template>
  <div class="q-pa-md">
    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Tu sesión ha expirado</div>
          <q-space />
          <q-btn icon="close" flat round dense @click="handleCancel" />
        </q-card-section>

        <q-card-section class="q-pt-xs">
          <p class="q-my-none text-grey">Tu acceso ha caducado</p>
          <p class="q-mt-none q-pb-md text-grey">pero no te preocupes, ¡es fácil retomarlo!!!</p>

          <q-input v-show="false" v-model.trim="username" dense />
          <q-input
            outlined
            square
            class="q-pb-xs"
            :type="pwd"
            v-model.trim="clave"
            label="Clave de acceso"
            lazy-rules
            dense
            :color="$q.dark.isActive ? 'orange' : 'primary'"
            :rules="[(val) => (val && val.length > 0) || 'dato obligatorio']"
          >
            <template v-slot:prepend>
              <q-icon name="key" />
            </template>
            <template v-slot:append>
              <q-btn flat dense size="small" @click="changePWD()">
                <q-icon name="visibility" />
              </q-btn>
            </template>
          </q-input>

          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <q-checkbox
                v-model="refresh"
                class="text-grey"
                label="recargar"
                color="green"
                checked-icon="task_alt"
                unchecked-icon="highlight_off"
                dense
                size="xs"
              />
            </div>
            <div class="col-xs-12 col-sm-8 text-right" v-if="accept_oauth">
              <q-btn
                flat
                class="q-mt-none q-pr-xs"
                size="sm"
                color="grey"
                :loading="loading"
                @click="googleLogin()"
              >
                <q-icon name="hive" size="xs" left></q-icon>
                Acceder con Google
              </q-btn>
            </div>
          </div>

          <q-btn
            :disable="loading"
            icon="person"
            label="Ingresar"
            color="green"
            class="full-width q-mt-lg"
            outline
            square
            @click="onSubmit()"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from 'src/stores/auth/user'
import LoginService from 'stores/auth/services/loginService'
import { cargarMenus } from 'src/stores/auth/menus'
import { mostrarNotifyError } from 'src/stores/auth/utils'

const dialog = ref(false)
const loading = ref(false)
const service = new LoginService()
const pwd = ref<any>('password')
const accept_oauth = ref<any>(process.env.ACCEPT_OAUTH)
const username = ref<any>('')
const clave = ref<any>('')
const refresh = ref(true)
const store = useLoginStore()
let resolvePromise: any

const open = () => {
  dialog.value = true
  username.value = store.dataUser.usuario.username

  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

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

const onSubmit = async (u = null, p = null) => {
  username.value = store.dataUser.usuario.username
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
    console.log('///', l)

    const menuItemsAgrupados = await cargarMenus(l.me.menus)
    store.setSessionKey(l.session_key, refresh.value)
    store.setNewSessionTime(l.session_time)
    store.setMenus(menuItemsAgrupados)
    store.setUser(l.me)
    resolvePromise(true)
    dialog.value = false
  }
}
const changePWD = () => (pwd.value == 'text' ? (pwd.value = 'password') : (pwd.value = 'text'))

const handleCancel = () => {
  resolvePromise(false)
  store.clearStore(true)
}

defineExpose({
  open,
})
</script>
