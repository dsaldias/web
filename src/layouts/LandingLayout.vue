<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-0">
    <q-header :class="$q.dark.isActive?'dark-hea':'bg-primary'">
      <q-toolbar>
        <q-btn v-if="store.dataUser.usuario" flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

        <app_logo />
        <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
          <app_name /> 
        </q-btn>

        <q-space />
        <q-toggle v-model="$q.dark.isActive" color="white" unchecked-icon="brightness_7" checked-icon="dark_mode" />

        <q-btn v-if="env.SHOW_LOGIN_BUTTON" flat no-caps no-wrap class="q-ml-xs" to="/login">
          <q-icon name="person"></q-icon>
          <q-tooltip> Ingresar al sistema </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container> 
      <Landing />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from 'stores/auth/user'
import Landing from 'components/auth/landing/landing-index.vue'
import app_name from 'src/components/app/ext/name/app_name.vue'
import app_logo from 'src/components/app/ext/logo/app_logo.vue'

const leftDrawerOpen = ref(false)
const store = useLoginStore()
const env = process.env

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)
</script>
