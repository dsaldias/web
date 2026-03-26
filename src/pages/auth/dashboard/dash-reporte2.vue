<template>
  <div class="row" id="tuto_reporte2">
    <div class="col-xs-12 col-md-6">
      HOLIS
      <LineChart
        ref="refLineChart"
        class="q-mt-xl"
        :chartData="testData"
        :options="options"
        :plugins="[chartAreaBorder]"
      />
    </div>
    <div class="col-xs-12 col-md-6">
      <LineChart
        ref="refLineChart2"
        class="q-mt-xl"
        :chartData="testData2"
        :options="options2"
        :plugins="[chartAreaBorder]"
      />
    </div>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import DashboardService from 'src/stores/auth/services/dashboardService'
import { LineChart } from 'vue-chart-3'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Dark } from 'quasar'
import { chartAreaBorder } from 'src/stores/auth/utils'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
)
Chart.register(ChartDataLabels)
const dashboardService = new DashboardService()
const refLineChart = ref()
const refLineChart2 = ref()

const options = ref({
  responsive: true,
  scales: {},
  plugins: {
    legend: {
      position: 'top',
      labels: {
        padding: 0,
        boxHeight: 0,
        boxWidth: 0,
      },
    },
    title: {
      display: true,
      text: 'Cantidad de accesos en los ultimos 30 dias',
    },
    datalabels: {
      color: '#012044',
      backgroundColor: '#ffffff00',
      borderRadius: 20,
      offset: 8,
      clamp: false,
      anchor: 'end',
      align: 'top',
      clip: false,
    },
  },
})

const options2 = ref({
  responsive: true,
  scales: {},
  plugins: {
    legend: {
      position: 'top',
      labels: {
        padding: 0,
        boxHeight: 0,
        boxWidth: 0,
      },
    },
    title: {
      display: true,
      text: 'Cantidad de accesos en los ultimos 365 dias',
    },
    datalabels: {
      color: '#012044',
      backgroundColor: '#ffffff00',
      borderRadius: 20,
      offset: 8,
      clamp: false,
      anchor: 'end',
      align: 'top',
      clip: false,
    },
  },
})

const testData = {
  labels: [''],
  datasets: [
    {
      label: '',
      data: [0],
      fill: false,
      borderColor: 'rgb(0, 155, 172)',
      tension: 0.2,
      backgroundColor: ['#009bac'],
    },
  ],
}

const testData2 = {
  labels: [''],
  datasets: [
    {
      label: '',
      data: [0],
      fill: false,
      borderColor: 'rgb(0, 155, 172)',
      tension: 0.2,
      backgroundColor: ['#009bac'],
    },
  ],
}

const get = async () => {
  const res: any = await dashboardService.reporte2()
  if (res && res.reporte2) {
    const txts: string[] = []
    const envios: number[] = []
    res.reporte2.forEach((x: any) => {
      txts.push(x.fecha_str)
      envios.push(x.valor)
    })
    txts.push('')

    refLineChart.value.chartInstance.data.labels = txts
    refLineChart.value.chartInstance.data.datasets[0].data = envios
    refLineChart.value.chartInstance.update()
  }

  if (res && res.reporte2b) {
    const txts: string[] = []
    const envios: number[] = []
    res.reporte2b.forEach((x: any) => {
      txts.push(x.mes)
      envios.push(x.valor)
    })
    txts.push('')

    refLineChart2.value.chartInstance.data.labels = txts
    refLineChart2.value.chartInstance.data.datasets[0].data = envios
    refLineChart2.value.chartInstance.update()
  }
}

const theme = () => {
  const color = Dark.isActive ? '#7e7e7e' : '#012044'
  options.value.plugins.datalabels.color = color
  options2.value.plugins.datalabels.color = color
  refLineChart.value?.chartInstance?.update()
  refLineChart2.value?.chartInstance?.update()
}

watch(
  () => Dark.isActive,
  () => theme(),
)

onMounted(() => {
  void get()
  theme()
})
</script>
