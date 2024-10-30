<script setup>
import { onMounted } from 'vue'

import useBookings from '@/composables/useBookings'
const { bookings, fetchBookings, deleteBooking } = useBookings()

import SectionedCard from '@/components/SectionedCard.vue'
import RoundedButton from '@/components/RoundedButton.vue'

onMounted(() => {
  fetchBookings()
})
</script>

<template>
  <template v-if="bookings.length">
    <div v-for="booking in bookings" :key="booking.id">
      <SectionedCard>
        <template #default>
          <div class="flex justify-around items-center">
            <div class="text-2xl font-bold">
              {{ booking.eventName }}
            </div>
            <div class="text-2xl font-bold">
              {{ booking.status }}
            </div>

            <RoundedButton @click="deleteBooking(booking)"
              >Cancel</RoundedButton
            >
          </div>
        </template>
      </SectionedCard>
    </div>
  </template>
  <template v-else>
    <div class="text-xl">No bookings have been made yet</div>
  </template>
</template>
