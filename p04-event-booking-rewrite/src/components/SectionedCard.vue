<script setup>
import RoundedCard from '@/components/RoundedCard.vue'
</script>
<template>
  <RoundedCard>
    <div v-if="$slots.title" class="border-b border-black py-2">
      <slot name="title" />
    </div>
    <div v-if="$slots.time" class="border-b border-black py-2">
      <slot name="time" />
    </div>
    <slot />
    <div v-if="$slots.footer" class="border-t border-black py-2 px-4">
      <slot name="footer" />
    </div>
  </RoundedCard>
</template>
