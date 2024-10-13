<script setup>
import RoundedCard from '@/components/RoundedCard.vue'
defineProps({
  label: String
})
</script>

<template>
  <RoundedCard>
    <div class="p-4">
      {{ label }}
    </div>
  </RoundedCard>
</template>
