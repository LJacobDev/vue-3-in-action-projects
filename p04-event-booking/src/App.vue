<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue';
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="i in 8"
        :key="i"
        title="Vue Conference 2024"
        when="Sept 1 2024"
        description="Learn and become Vue"
        @register="console.log('registered!')"
      />
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <BookingItem v-for="i in 3" :key="i" label="Vue Conference 2024"/>
  </main>
</template>
