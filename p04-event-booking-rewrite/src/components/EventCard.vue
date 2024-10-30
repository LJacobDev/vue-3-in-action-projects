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
      <marquee behavior="" direction="">
        <h3 class="text-2xl">{{ event.eventName }}</h3>
      </marquee>
    </template>
    <template #time>
      <marquee behavior="" direction="">
        <h3 class="text-2xl">{{ event.when }}</h3>
      </marquee>
    </template>
    <template #default>
      <marquee behavior="" direction="">
        <div class="p-4 flex justify-between items-center">
          <h3 class="text-2xl mx-auto">{{ event.location }}</h3>
          <RoundedButton class="mr-6" @click="registerBooking(event)">
            Register
          </RoundedButton>
        </div>
      </marquee>
    </template>
    <template #footer>
      <marquee behavior="" direction="">
        <h3 class="text-xl text-left">{{ event.description }}</h3>
      </marquee>
    </template>
  </SectionedCard>
</template>
