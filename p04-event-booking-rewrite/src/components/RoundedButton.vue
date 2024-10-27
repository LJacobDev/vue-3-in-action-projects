<script setup>
defineEmits(['click'])
</script>
<template>
  <button
    class="px-4 py-2 rounded-lg w-30 h-12 bg-green-200 font-thin"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
