<script setup>
// defineProps({
//   label: String
// })
defineEmits(['click'])
</script>

<template>
  <button
    @click="$emit('click')"
    class="text-sm font-medium border border-gray-300 rounded-full px-3 py 1 hover:bg-gray-100"
  >
    <slot></slot>
  </button>
</template>
