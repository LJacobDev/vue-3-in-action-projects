<script setup>
import RoundedCard from '@/components/RoundedCard.vue'
</script>
<template>
  <RoundedCard>
    <div class="border-b border-black">
      <slot name="title" />
    </div>
    <div class="border-b border-black">
      <slot name="time" />
    </div>
    <slot />
    <div class="border-t border-black">
      <slot name="footer" />
    </div>
  </RoundedCard>
</template>
