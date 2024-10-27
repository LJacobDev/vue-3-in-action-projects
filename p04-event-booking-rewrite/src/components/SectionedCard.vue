<script setup>
import RoundedCard from '@/components/RoundedCard.vue'
</script>
<template>
  <RoundedCard>
    <div class="border-b border-black py-2">
      <slot name="title" />
    </div>
    <div class="border-b border-black py-2">
      <slot name="time" />
    </div>
    <slot />
    <div class="border-t border-black py-2 px-4">
      <slot name="footer" />
    </div>
  </RoundedCard>
</template>
