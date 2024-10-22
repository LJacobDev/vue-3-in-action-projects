<template>
  <section class="grid md:grid-cols-2 grid-cols-1 gap-8">
    <template v-if="!eventsLoading">
      <template v-if="events.length">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :when="event.date"
          :description="event.description"
          @register="$emit('registerBooking', event)"
        />
      </template>
      <template v-else>
        <div class="text-center col-span-2">
            <div>No events found</div>
            <RoundButton @click="fetchEvents">
                Retry
            </RoundButton>  
        </div>
      </template>
    </template>
    <template v-else>
      <LoadingEventCard v-for="i in 4" :key="i" />
    </template>
  </section>
</template>

<script setup>
defineEmits(['registerBooking'])

import EventCard from '@/components/EventCard.vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import RoundButton from '@/components/RoundButton.vue';

import { ref, onMounted } from 'vue'

const events = ref([])
const eventsLoading = ref(false)

const fetchEvents = async () => {
  try {
    eventsLoading.value = true
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
  } finally {
    eventsLoading.value = false
  }
}

onMounted(() => {
  fetchEvents()
})
</script>
