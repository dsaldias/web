<template>
  <q-select
    v-if="show"
    :options="rolesunidad"
    v-model="rol_unidad"
    label="Seleccione su rol:"
    option-label="text"
    option-value="id"
    color="secondary"
    :loading="loading"
    @update:model-value="getmesnuss"
    dark
    dense
    square
    outlined
  ></q-select>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLoginStore } from 'stores/auth/user'
import { cargarMenus } from 'src/stores/auth/menus'
import MeService from 'stores/auth/services/meService'

const rol_unidad = ref<any>(null)
const store = useLoginStore()
const meService = new MeService()
const loading = ref(false)
const show = ref(process.env.SHOW_ROL_SELECT != '')

const rolesunidad = computed(() => {
  if (!store.dataUser.roles) return []
  const rolesunidades: any = []
  store.dataUser.roles.forEach((x: any) => {
    const a: any = {}
    a.rol = x.rol
    a.unidad = x.unidad
    a.id = `${x.unidad.id}-${x.rol.id}`
    a.text = `${x.unidad.nombre} - ${x.rol.nombre}`
    rolesunidades.push(a)
  })
  return rolesunidades
})

const getmesnuss = async () => {
  if (rol_unidad.value && rol_unidad.value.unidad) {
    store.setRolUnidad(rol_unidad.value)
    const input: any = {}
    input.unidad_id = rol_unidad.value.unidad.id
    loading.value = true
    /* const p = toHomePath()
    await router.push(p) */
    store.setLoadingMenus(true)
    store.setMenus([])
    const r: any = await meService.me(input)
    if (r && r.me) {
      const menuItemsAgrupados = await cargarMenus(r.me.menus)
      store.setMenus(menuItemsAgrupados)
      store.setUser(r.me)
    }
    loading.value = false
    store.setLoadingMenus(false)
  }
}

const procesarrol = () => {
  const srol = store.rolUnidad
  if (srol && srol.rol) {
    const idrolstore = srol.rol.id
    const ex = rolesunidad.value.find((x: any) => x.rol.id == idrolstore)
    if (ex) rol_unidad.value = ex
    else rol_unidad.value = rolesunidad.value[0]
  } else {
    rol_unidad.value = rolesunidad.value[0]
  }
}

onMounted(() => {
  procesarrol()
  void getmesnuss()
})
</script>
