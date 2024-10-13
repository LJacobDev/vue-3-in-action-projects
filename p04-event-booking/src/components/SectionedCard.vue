<template>
  <RoundedCard>
    <h3 class="p-4 font-medium text-xl border-b border-gray-300">
      <slot name="header"></slot>
    </h3>

    <div class="p-4 border-b border-gray-300">
      <slot></slot>
    </div>

    <div class="p-4">
      <slot name="footer"></slot>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from '@/components/RoundedCard.vue'
</script>
