<template>
  <div>
    <q-btn size="xs" flat icon="more_vert">
      <q-menu transition-show="flip-right" fit>
        <q-list>
          <q-item
            v-for="(b, i) in botones"
            :key="i"
            dense
            clickable
            @click="clickbtn(b.flag, props)"
          >
            <q-item-section avatar>
              <q-icon :name="b.icon" size="xs" right class="q-px-none" />
            </q-item-section>
            <q-item-section>{{ b.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
defineProps({
  props: { type: Object },
})

const emit = defineEmits(['clicked'])

const botones = [
  // { text: 'Ver', icon: 'visibility', flag: 'ver' },
  { text: 'Editar', icon: 'edit', flag: 'editar' },
]

const clickbtn = (flag: string, row: any) => {
  emit('clicked', flag, row.row)
}
</script>
