<script setup>
defineEmits(['click'])
</script>
<template>
  <button
    class="px-4 py-2 rounded-lg w-30 h-12 border border-black bg-green-200 font-thin"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  @apply shadow-[4px_4px_8px_rgba(50,50,50,0.8)];
}
</style>
