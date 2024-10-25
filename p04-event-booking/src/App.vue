<script setup>
//import components that will be used in the layout
import EventList from '@/components/EventList.vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'

//import composables that will offer data objects, state and functions
import useBookings from '@/composables/useBookings.js'

//import onMounted lifecycle hook so that an action can be done as soon as the app is mounted
import { onMounted } from 'vue'

//retrieve bookings variables and functions from the useBookings composable
const { bookings, loading, fetchBookings, cancelBooking } = useBookings()

onMounted(() => {
  fetchBookings()
})
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList />
    <h2 class="text-2xl font-medium">Your Bookings</h2>
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
  </main>
</template>
