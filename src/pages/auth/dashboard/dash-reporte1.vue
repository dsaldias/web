<template>
  <div class="q-mt-lg">
    <div class="row text-center justify-center q-col-gutter-xs" id="tuto_reporte1">
      <div class="col-xs-6 col-sm-3 col-lg-2 col-xl-1 neon-fade-in neon-fade-in--d1" v-for="(r, i) in reporte1" :key="i">
        <q-card class="neon-card neon-card--cyan" square flat :style="colores">
          <q-card-section class="q-px-none q-py-xs">
            <div class="neon-subtitle">{{ r.nombre }}</div>
            <div class="text-subtitle2">{{ r.valor }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DashboardService from 'src/stores/auth/services/dashboardService'
import {Dark} from 'quasar'

const dashboardService = new DashboardService()
const reporte1 = ref<any[]>([])

const get = async () => {
  const re: any = await dashboardService.reporte1()
  if (re && re.reporte1) {
    console.log('reeeee', re.reporte1)
    reporte1.value = re.reporte1
  }
}

const colores = computed(()=>{
  if(Dark.isActive){
    return {color: '#0090e9', background: 'radial-gradient(circle, #0d1a22 0%, #0f3750 100%)'}    
  }
  return {background: 'radial-gradient(circle, #ffffff 0%, #cfebfb 100%)'}    
})

onMounted(() => {
  void get()
})
</script>
