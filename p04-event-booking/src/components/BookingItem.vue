<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import RoundButton from '@/components/RoundButton.vue'
defineProps({
  label: String
})
</script>

<template>
  <SectionedCard>
    <div class="flex justify-between">
      <div>{{ label }}</div>
      <RoundButton variant="danger">Cancel</RoundButton>
    </div>
  </SectionedCard>
</template>
