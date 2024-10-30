<script setup>
import EventsList from '@/components/EventsList.vue'
import BookingsList from '@/components/BookingsList.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="p-4 text-center space-y-8">
    <h1 class="text-5xl"><marquee>Events</marquee></h1>
    <h2 class="text-3xl">All Events</h2>
    <EventsList />
    <h2 class="text-3xl">Events You're Registered To</h2>
    <BookingsList />
    <TheFooter />
  </div>
</template>
