<template>
  <Transition name="edge">
    <div v-if="active" class="edge-light"></div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

function trigger() {
  if (timer) clearTimeout(timer)
  active.value = true
  timer = setTimeout(() => {
    active.value = false
    timer = null
  }, 3500)
}

defineExpose({ trigger })
</script>

<style scoped>
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.edge-enter-active {
  transition: opacity 0.2s ease;
}
.edge-leave-active {
  transition: opacity 0.8s ease;
}
.edge-enter-from,
.edge-leave-to {
  opacity: 0;
}

.edge-light {
  position: fixed;
  inset: 0;
  pointer-events: none;
  border-radius: 2px;
  z-index: 10000;
}

/* Tira base: siempre visible, tenue */
.edge-light::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2px;
  border: 2px solid transparent;
  transform: translateZ(0);

  background: linear-gradient(135deg, #4400cc, #0088ff, #00ccaa, #0088ff, #4400cc) border-box;

  -webkit-mask:
    linear-gradient(#000 0 0) padding-box,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0) padding-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  opacity: 0.75;
}

/* Cometa: recorre la tira e ilumina el borde al pasar */
.edge-light::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2px;
  border: 3px solid transparent;
  transform: translateZ(0);
  will-change: --angle;

  background: conic-gradient(
      from var(--angle),
      transparent 0deg,
      transparent 300deg,
      #8b00ff 322deg,
      #00ffff 342deg,
      #ffffff 352deg,
      #00ffff 358deg,
      transparent 360deg
    )
    border-box;

  -webkit-mask:
    linear-gradient(#000 0 0) padding-box,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0) padding-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  filter: blur(2px) brightness(1.4);
  animation: rotateBorder 2s linear infinite;
}

@keyframes rotateBorder {
  to {
    --angle: 360deg;
  }
}
</style>
