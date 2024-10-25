<script setup>
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'

//retrieve bookings variables and functions from the useBookings composable
import useBookings from '@/composables/useBookings'
const { bookings, loading, bookingError, fetchBookings, cancelBooking } = useBookings()

//import onMounted lifecycle hook so that an action can be done as soon as the app is mounted
import { onMounted } from 'vue'
import ErrorCard from '@/components/ErrorCard.vue'

onMounted(() => {
  fetchBookings()
})
</script>

<template>
  <section v-if="bookingError">
    <ErrorCard :retry="fetchBookings"> Could not load bookings </ErrorCard>
  </section>
  <section v-else class="grid grid-cols-1 gap-4">
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
