<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import RoundButton from '@/components/RoundButton.vue'
defineProps({
  label: String,
  status: String
});
defineEmits(['cancelBooking']);
</script>

<template>
  <SectionedCard>
    <div class="flex justify-between">
      <div class="flex space-x-4">
        <div>{{ label }}</div>
        <div>{{ status }}</div>
      </div>
      <RoundButton variant="danger" @click="$emit('cancelBooking')">Cancel</RoundButton>
    </div>
  </SectionedCard>
</template>
