<script setup>
import { computed, ref } from 'vue'

// Local adaptation of the Vue Bits Border Glow component.
const props = defineProps({
  glowColor: { type: String, default: '209 100% 72%' },
  borderRadius: { type: Number, default: 20 },
  glowIntensity: { type: Number, default: 0.7 },
  animated: { type: Boolean, default: false },
})

const element = ref(null)
const pointer = ref({ x: 50, y: 50 })
const isActive = ref(false)

function trackPointer(event) {
  const rect = element.value?.getBoundingClientRect()
  if (!rect) return
  pointer.value = { x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 }
}

const style = computed(() => ({
  '--glow-x': `${pointer.value.x}%`, '--glow-y': `${pointer.value.y}%`, '--glow-color': props.glowColor,
  '--glow-opacity': isActive.value || props.animated ? props.glowIntensity : 0.22,
  borderRadius: `${props.borderRadius}px`,
}))
</script>

<template>
  <div ref="element" class="border-glow" :class="{ 'border-glow--animated': animated }" :style="style"
    @pointermove="trackPointer" @pointerenter="isActive = true" @pointerleave="isActive = false">
    <slot />
  </div>
</template>

<style scoped>
.border-glow {
  position: relative;
  isolation: isolate;
}

.border-glow::before,
.border-glow::after {
  position: absolute;
  inset: -1px;
  z-index: 2;
  border-radius: inherit;
  content: '';
  pointer-events: none;
  opacity: var(--glow-opacity);
  transition: opacity .25s ease;
}

.border-glow::before {
  padding: 1.5px;
  background: radial-gradient(170px circle at var(--glow-x) var(--glow-y), hsl(var(--glow-color) / .98), hsl(var(--glow-color) / .34) 30%, transparent 66%);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
}

.border-glow::after {
  inset: -16px;
  z-index: -1;
  background: radial-gradient(150px circle at var(--glow-x) var(--glow-y), hsl(var(--glow-color) / .3), transparent 68%);
  filter: blur(10px);
  opacity: calc(var(--glow-opacity) * .7);
}

.border-glow--animated::before {
  animation: border-sweep 4s ease-in-out infinite;
}

@keyframes border-sweep {

  0%,
  100% {
    opacity: .32;
  }

  50% {
    opacity: .82;
  }
}
</style>
