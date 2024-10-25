<script setup>
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'

//retrieve bookings variables and functions from the useBookings composable
import useBookings from '@/composables/useBookings'
const { bookings, loading, fetchBookings, cancelBooking } = useBookings()

//import onMounted lifecycle hook so that an action can be done as soon as the app is mounted
import { onMounted } from 'vue'

onMounted(() => {
  fetchBookings()
})
</script>

<template>
  <section class="grid grid-cols-1 gap-4">
    <template v-if="!loading">
      <BookingItem
        v-for="booking in bookings"
        :key="booking.id"
        :label="booking.eventTitle"
        :status="booking.status"
        @cancel-booking="cancelBooking(booking)"
      />
    </template>
    <template v-else>
      <LoadingBookingItem v-for="i in 4" :key="i" />
    </template>
  </section>
</template>
