<script setup>
defineEmits(['click'])

defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})

const variants = {
  default: 'border border-gray-300 hover:bg-gray-100',
  danger: 'bg-red-200 enabled:hover:bg-red-100 text-red-900'
}
</script>

<template>
  <button
    @click="$emit('click')"
    :class="['text-sm font-medium rounded-full px-3 py 1', variants[variant] ?? variants.default /*variants['default']*/]"
  >
    <slot></slot>
  </button>
</template>
