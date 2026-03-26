<!-- <template>
  <div>
    <h5>Pagina del cliente</h5>
  </div>
</template>
<script setup lang="ts"></script> -->

<template>
  <!-- ══════════════════════════════════════════
       NIGHTFLOW · Dashboard Principal
       Requiere: clubes-neon.css importado globalmente
       Fuentes: https://fonts.googleapis.com/css2?family=Exo+2:wght@700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap
  ══════════════════════════════════════════ -->
  <q-layout view="hHh LpR fFf" class="neon-layout">
    <!-- ─── HEADER / NAVBAR ─── -->
    <q-header class="neon-header" elevated>
      <q-toolbar style="min-height: 56px; padding: 0 20px; gap: 12px">
        <!-- Logo -->
        <div class="row items-center no-wrap q-mr-md">
          <q-icon name="music_note" color="pink" size="22px" class="q-mr-xs" />
          <span class="neon-logo">NIGHTFLOW</span>
          <span class="neon-logo-badge">AR</span>
        </div>

        <!-- Tabs de navegación -->
        <q-tabs v-model="activeTab" class="neon-nav-tabs" no-caps dense style="flex: 1">
          <q-tab
            v-for="item in navItems"
            :key="item.name"
            :name="item.name"
            :icon="item.icon"
            :label="item.label"
          />
        </q-tabs>

        <q-space />

        <!-- Info usuario -->
        <div class="neon-user-info q-mr-sm">
          <span class="neon-username">Admin</span>
          <span class="neon-caja-label">Caja: $0</span>
        </div>

        <q-avatar class="neon-avatar" size="38px" icon="person" />
      </q-toolbar>
    </q-header>

    <!-- ─── CONTENIDO PRINCIPAL ─── -->
    <q-page-container>
      <q-page style="padding: 28px 24px; max-width: 1200px; margin: 0 auto">
        <!-- Título de página -->
        <div class="q-mb-lg neon-fade-in">
          <h1 class="neon-title q-ma-none">Dashboard</h1>
          <p class="neon-subtitle q-ma-none">Vista general de la noche de hoy</p>
        </div>

        <!-- ─── MÉTRICAS KPI ─── -->
        <div class="row q-col-gutter-md q-mb-lg">
          <!-- Reservas Hoy -->
          <div class="col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d1">
            <q-card class="neon-card neon-card--purple" flat>
              <q-card-section class="row items-start justify-between no-wrap" style="padding: 20px">
                <div>
                  <div class="neon-metric-label">Reservas Hoy</div>
                  <div class="neon-metric-value">{{ metrics.reservasHoy }}</div>
                  <div class="neon-metric-delta neon-metric-delta--up">
                    <q-icon name="arrow_upward" size="12px" />
                    12% vs ayer
                  </div>
                </div>
                <div class="neon-metric-icon neon-metric-icon--purple">
                  <q-icon name="event_seat" size="22px" />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Ocupación -->
          <div class="col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d2">
            <q-card class="neon-card neon-card--cyan" flat>
              <q-card-section class="row items-start justify-between no-wrap" style="padding: 20px">
                <div>
                  <div class="neon-metric-label">Ocupación</div>
                  <div class="neon-metric-value">{{ metrics.ocupacion }}%</div>
                  <div class="neon-metric-sub">Capacidad total: {{ metrics.totalMesas }}</div>
                </div>
                <div class="neon-metric-icon neon-metric-icon--cyan">
                  <q-icon name="percent" size="22px" />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Ingresos -->
          <div class="col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d3">
            <q-card class="neon-card neon-card--green" flat>
              <q-card-section class="row items-start justify-between no-wrap" style="padding: 20px">
                <div>
                  <div class="neon-metric-label">Ingresos Est.</div>
                  <div class="neon-metric-value">$ {{ formatNumber(metrics.ingresos) }}</div>
                  <div class="neon-metric-delta neon-metric-delta--up">
                    <q-icon name="arrow_upward" size="12px" />
                    8% vs semana pasada
                  </div>
                </div>
                <div class="neon-metric-icon neon-metric-icon--green">
                  <q-icon name="attach_money" size="22px" />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- VIP Activos -->
          <div class="col-12 col-sm-6 col-lg-3 neon-fade-in neon-fade-in--d4">
            <q-card class="neon-card neon-card--gold neon-pulse-gold" flat>
              <q-card-section class="row items-start justify-between no-wrap" style="padding: 20px">
                <div>
                  <div class="neon-metric-label">VIP Activos</div>
                  <div class="neon-metric-value">{{ metrics.vipActivos }}</div>
                  <div class="neon-metric-sub">Mesas exclusivas</div>
                </div>
                <div class="neon-metric-icon neon-metric-icon--gold">
                  <q-icon name="workspace_premium" size="22px" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- ─── ACCIONES RÁPIDAS + RESERVAS RECIENTES ─── -->
        <div class="row q-col-gutter-md q-mb-lg">
          <!-- Acciones Rápidas -->
          <div class="col-12 col-md-4">
            <q-card class="neon-card" flat style="height: 100%">
              <q-card-section class="neon-card-section">
                <div class="neon-card-title q-mb-md">Acciones Rápidas</div>

                <div class="column q-gutter-sm">
                  <q-btn
                    class="neon-btn-primary full-width"
                    icon="add"
                    label="Nueva Reserva"
                    @click="openNuevaReserva"
                    no-caps
                  />
                  <q-btn
                    class="neon-btn-secondary full-width"
                    icon="visibility"
                    label="Ver Mapa de Mesas"
                    @click="activeTab = 'mesas'"
                    no-caps
                  />
                  <q-btn
                    class="neon-btn-purple full-width"
                    icon="calendar_month"
                    label="Crear Evento"
                    @click="openCrearEvento"
                    no-caps
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Reservas Recientes -->
          <div class="col-12 col-md-8">
            <q-card class="neon-card" flat>
              <q-card-section class="neon-card-section">
                <div class="row items-center justify-between q-mb-md">
                  <span class="neon-card-title">Reservas Recientes</span>
                  <span class="neon-link" @click="activeTab = 'reservas'">
                    Ver todas
                    <q-icon name="arrow_forward" size="14px" />
                  </span>
                </div>

                <!-- Tabla de reservas -->
                <q-table
                  :rows="reservasRecientes"
                  :columns="columnas"
                  class="neon-table"
                  flat
                  hide-bottom
                  :rows-per-page-options="[0]"
                  row-key="id"
                >
                  <!-- Cliente -->
                  <template #body-cell-cliente="props">
                    <q-td :props="props">
                      <div class="neon-table-name">{{ props.row.cliente }}</div>
                    </q-td>
                  </template>

                  <!-- Mesa -->
                  <template #body-cell-mesa="props">
                    <q-td :props="props">
                      <q-chip
                        :class="[
                          'neon-chip',
                          props.row.esVip ? 'neon-chip--gold' : 'neon-chip--purple',
                        ]"
                        dense
                        outline
                      >
                        <q-icon
                          v-if="props.row.esVip"
                          name="workspace_premium"
                          size="10px"
                          class="q-mr-xs"
                        />
                        {{ props.row.mesa }}
                      </q-chip>
                    </q-td>
                  </template>

                  <!-- Hora -->
                  <template #body-cell-hora="props">
                    <q-td :props="props">
                      <span class="neon-table-time">{{ props.row.hora }}</span>
                    </q-td>
                  </template>

                  <!-- Estado -->
                  <template #body-cell-estado="props">
                    <q-td :props="props">
                      <span
                        :class="['neon-badge', `neon-badge--${props.row.estado.toLowerCase()}`]"
                      >
                        {{ props.row.estado }}
                      </span>
                    </q-td>
                  </template>

                  <!-- Acción -->
                  <template #body-cell-accion="props">
                    <q-td :props="props" class="text-center">
                      <q-btn
                        class="neon-btn-icon"
                        icon="visibility"
                        flat
                        round
                        dense
                        size="sm"
                        @click="verReserva(props.row)"
                      >
                        <q-tooltip class="bg-purple-9 text-caption">Ver detalle</q-tooltip>
                      </q-btn>
                    </q-td>
                  </template>
                </q-table>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- ─── MAPA DE MESAS (demo) ─── -->
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-card class="neon-card" flat>
              <q-card-section class="neon-card-section">
                <div class="row items-center justify-between q-mb-md">
                  <span class="neon-card-title">Mapa de Mesas — Noche actual</span>
                  <div class="row items-center q-gutter-sm">
                    <span class="neon-badge neon-badge--confirmada">Disponible</span>
                    <span class="neon-badge neon-badge--cancelada">Ocupada</span>
                    <span class="neon-badge neon-badge--finalizada">Reservada</span>
                    <span class="neon-badge neon-badge--vip">VIP</span>
                  </div>
                </div>

                <!-- Mapa de mesas interactivo -->
                <div class="neon-map" style="padding: 24px; min-height: 320px">
                  <!-- Etiqueta zona -->
                  <div
                    style="
                      position: absolute;
                      top: 14px;
                      left: 20px;
                      font-size: 0.68rem;
                      color: var(--neon-text-muted);
                      text-transform: uppercase;
                      letter-spacing: 0.1em;
                    "
                  >
                    Pista Principal
                  </div>

                  <div class="row q-gutter-md" style="padding-top: 16px; flex-wrap: wrap">
                    <div
                      v-for="mesa in mesasDemo"
                      :key="mesa.id"
                      :class="[
                        'neon-table-item',
                        `neon-table-item--${mesa.estado}`,
                        mesa.esVip ? 'neon-table-item--vip' : '',
                      ]"
                      style="position: relative"
                      @click="clickMesa(mesa)"
                    >
                      <q-icon
                        :name="mesa.esVip ? 'workspace_premium' : 'table_restaurant'"
                        size="18px"
                      />
                      <span>{{ mesa.numero }}</span>
                      <q-tooltip class="bg-grey-9 text-caption">
                        {{ mesa.numero }} · {{ mesa.estado }} · Cap. {{ mesa.capacidad }}
                      </q-tooltip>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>

  <!-- ─── DIALOG: Nueva Reserva ─── -->
  <q-dialog v-model="showNuevaReserva" class="neon-dialog-card">
    <q-card style="min-width: 420px; max-width: 520px; width: 100%">
      <div class="neon-dialog-header">
        <div class="row items-center justify-between">
          <span class="neon-dialog-title">Nueva Reserva</span>
          <q-btn class="neon-btn-icon" icon="close" flat round dense v-close-popup />
        </div>
      </div>

      <q-card-section style="padding: 20px; display: flex; flex-direction: column; gap: 16px">
        <q-input
          v-model="form.cliente"
          label="Nombre del cliente"
          class="neon-input"
          outlined
          dense
        >
          <template #prepend><q-icon name="person" /></template>
        </q-input>

        <q-input v-model="form.telefono" label="Teléfono" class="neon-input" outlined dense>
          <template #prepend><q-icon name="phone" /></template>
        </q-input>

        <div class="row q-gutter-sm">
          <div class="col">
            <q-input
              v-model="form.fecha"
              label="Fecha"
              class="neon-input"
              outlined
              dense
              type="date"
            />
          </div>
          <div class="col">
            <q-input
              v-model="form.hora"
              label="Hora"
              class="neon-input"
              outlined
              dense
              type="time"
            />
          </div>
        </div>

        <q-select
          v-model="form.mesa"
          :options="opcionesMesas"
          label="Mesa"
          class="neon-input"
          outlined
          dense
          popup-content-class="neon-select-menu"
        >
          <template #prepend><q-icon name="table_restaurant" /></template>
        </q-select>

        <q-input
          v-model="form.personas"
          label="Cantidad de personas"
          class="neon-input"
          outlined
          dense
          type="number"
          min="1"
        >
          <template #prepend><q-icon name="group" /></template>
        </q-input>

        <q-input
          v-model="form.notas"
          label="Notas (opcional)"
          class="neon-input"
          outlined
          dense
          type="textarea"
          rows="2"
          autogrow
        />
      </q-card-section>

      <q-card-actions align="right" style="padding: 12px 20px 20px; gap: 10px">
        <q-btn class="neon-btn-secondary" label="Cancelar" no-caps v-close-popup />
        <q-btn class="neon-btn-primary" label="Confirmar Reserva" no-caps @click="guardarReserva" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// ── Navegación ──────────────────────────────
const activeTab = ref('dashboard')

const navItems = [
  { name: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { name: 'reservas', label: 'Reservas', icon: 'event_seat' },
  { name: 'mesas', label: 'Mesas', icon: 'table_restaurant' },
  { name: 'admin', label: 'Admin Mesas', icon: 'settings' },
  { name: 'eventos', label: 'Eventos', icon: 'star' },
]

// ── Métricas ─────────────────────────────────
const metrics = ref({
  reservasHoy: 4,
  ocupacion: 58,
  totalMesas: 58,
  ingresos: 152000,
  vipActivos: 2,
})

const formatNumber = (n: any) => new Intl.NumberFormat('es-AR').format(n)

// ── Reservas recientes ────────────────────────
const reservasRecientes = ref([
  {
    id: 1,
    cliente: 'Carlos Rodríguez',
    mesa: 'Mesa VIP 1',
    hora: '23:30',
    estado: 'confirmada',
    esVip: true,
  },
  {
    id: 2,
    cliente: 'Ana Martínez',
    mesa: 'Mesa 5',
    hora: '00:00',
    estado: 'confirmada',
    esVip: false,
  },
  {
    id: 3,
    cliente: 'Grupo Empresarial X',
    mesa: 'Mesa VIP 3',
    hora: '22:00',
    estado: 'pendiente',
    esVip: true,
  },
  {
    id: 4,
    cliente: 'Laura Sánchez',
    mesa: 'Mesa 12',
    hora: '23:00',
    estado: 'confirmada',
    esVip: false,
  },
])

const columnas: any = [
  { name: 'cliente', label: 'Cliente', field: 'cliente', align: 'left' },
  { name: 'mesa', label: 'Mesa', field: 'mesa', align: 'left' },
  { name: 'hora', label: 'Hora', field: 'hora', align: 'center' },
  { name: 'estado', label: 'Estado', field: 'estado', align: 'center' },
  { name: 'accion', label: 'Acción', field: 'accion', align: 'center' },
]

// ── Mesas demo ────────────────────────────────
const mesasDemo = ref([
  { id: 1, numero: 'Mesa 1', estado: 'disponible', esVip: false, capacidad: 4 },
  { id: 2, numero: 'Mesa 2', estado: 'ocupada', esVip: false, capacidad: 4 },
  { id: 3, numero: 'Mesa 3', estado: 'disponible', esVip: false, capacidad: 6 },
  { id: 4, numero: 'Mesa 4', estado: 'reservada', esVip: false, capacidad: 8 },
  { id: 5, numero: 'Mesa 5', estado: 'ocupada', esVip: false, capacidad: 4 },
  { id: 6, numero: 'Mesa 6', estado: 'disponible', esVip: false, capacidad: 6 },
  { id: 7, numero: 'Mesa 7', estado: 'ocupada', esVip: false, capacidad: 8 },
  { id: 8, numero: 'Mesa 8', estado: 'disponible', esVip: false, capacidad: 4 },
  { id: 9, numero: 'Mesa 9', estado: 'mantenimiento', esVip: false, capacidad: 4 },
  { id: 10, numero: 'Mesa 10', estado: 'disponible', esVip: false, capacidad: 6 },
  { id: 11, numero: 'Mesa 11', estado: 'reservada', esVip: false, capacidad: 4 },
  { id: 12, numero: 'Mesa 12', estado: 'ocupada', esVip: false, capacidad: 6 },
  { id: 13, numero: 'Mesa VIP 1', estado: 'ocupada', esVip: true, capacidad: 6 },
  { id: 14, numero: 'Mesa VIP 2', estado: 'disponible', esVip: true, capacidad: 10 },
  { id: 15, numero: 'Mesa VIP 3', estado: 'reservada', esVip: true, capacidad: 12 },
])

// ── Dialog nueva reserva ──────────────────────
const showNuevaReserva = ref(false)

const form = ref<any>({
  cliente: '',
  telefono: '',
  fecha: new Date().toISOString().slice(0, 10),
  hora: '22:00',
  mesa: null,
  personas: 2,
  notas: '',
})

const opcionesMesas = computed(() =>
  mesasDemo.value
    .filter((m) => m.estado === 'disponible')
    .map((m) => ({ label: m.numero, value: m.id })),
)

const openNuevaReserva = () => {
  showNuevaReserva.value = true
}
const openCrearEvento = () => {
  $q.notify({
    message: 'Módulo de eventos próximamente',
    icon: 'star',
    classes: 'neon-notify neon-notify--info',
  })
}

const guardarReserva = () => {
  if (!form.value.cliente || !form.value.mesa) {
    $q.notify({
      message: 'Completá los campos obligatorios',
      icon: 'warning',
      classes: 'neon-notify neon-notify--warning',
    })
    return
  }

  const mesaObj = mesasDemo.value.find((m) => m.id === form.value.mesa?.value)
  if (mesaObj) mesaObj.estado = 'reservada'

  reservasRecientes.value.unshift({
    id: Date.now(),
    cliente: form.value.cliente,
    mesa: form.value.mesa?.label ?? '',
    hora: form.value.hora,
    estado: 'pendiente',
    esVip: mesaObj?.esVip ?? false,
  })

  metrics.value.reservasHoy++

  $q.notify({
    message: `Reserva creada para ${form.value.cliente}`,
    icon: 'check_circle',
    classes: 'neon-notify neon-notify--success',
  })
  showNuevaReserva.value = false

  form.value = {
    cliente: '',
    telefono: '',
    fecha: new Date().toISOString().slice(0, 10),
    hora: '22:00',
    mesa: null,
    personas: 2,
    notas: '',
  }
}

const verReserva = (row: any) => {
  $q.notify({
    message: `Detalle de: ${row.cliente} — ${row.mesa}`,
    icon: 'info',
    classes: 'neon-notify neon-notify--info',
  })
}

const clickMesa = (mesa: any) => {
  if (mesa.estado === 'disponible') {
    form.value.mesa = { label: mesa.numero, value: mesa.id }
    showNuevaReserva.value = true
  } else {
    $q.notify({
      message: `${mesa.numero} · Estado: ${mesa.estado}`,
      icon: mesa.estado === 'ocupada' ? 'person' : 'event_seat',
      classes: `neon-notify neon-notify--${mesa.estado === 'ocupada' ? 'error' : 'info'}`,
    })
  }
}

onBeforeMount(() => {
  $q.dark.set(true)
})
onMounted(() => {
  $q.dark.set(true)
})
</script>

<style scoped>
/*
  Los estilos globales están en clubes-neon.css
  Aquí sólo van ajustes específicos de este componente.
*/
.neon-layout {
  background-color: var(--neon-bg-base);
  min-height: 100vh;
}

/* Fondo con textura sutil de puntos */
.q-page {
  background-image: radial-gradient(circle, rgba(168, 85, 247, 0.04) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* Evitar que q-card-section de Quasar pise el padding de neon-card-section */
.neon-card.q-card > .q-card__section {
  padding: 0;
}

/* Asegurar que neon-map sea relative para posicionar etiquetas */
.neon-map {
  position: relative;
}
</style>
