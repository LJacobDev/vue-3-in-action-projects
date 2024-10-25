<script setup>
//import components that will be used in the layout
import EventList from '@/components/EventList.vue'
import BookingList from '@/components/BookingList.vue'
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList />
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <BookingList />
  </main>
</template>
