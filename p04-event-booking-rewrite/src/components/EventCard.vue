<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import RoundedButton from '@/components/RoundedButton.vue'

import useBookings from '@/composables/useBookings'
const { registerBooking } = useBookings()

defineProps({
  event: {
    Type: Object,
    Required: true,
  },
})
</script>

<template>
  <SectionedCard>
    <template #title>
      <h3 class="text-2xl">{{ event.eventName }}</h3>
    </template>
    <template #time>
      <h3 class="text-2xl">{{ event.when }}</h3>
    </template>
    <template #default>
      <div class="p-4 flex justify-between items-center">
        <h3 class="text-2xl mx-auto">{{ event.location }}</h3>
        <RoundedButton class="mr-6" @click="registerBooking(event)">
          Register
        </RoundedButton>
      </div>
    </template>
    <template #footer>
      <h3 class="text-xl text-left">{{ event.description }}</h3>
    </template>
  </SectionedCard>
</template>
