<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
defineProps({
  label: String
})
</script>

<template>
  <SectionedCard>
      {{ label }}
  </SectionedCard>
</template>
