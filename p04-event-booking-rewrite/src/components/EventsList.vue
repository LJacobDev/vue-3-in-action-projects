<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import RoundedButton from '@/components/RoundedButton.vue'
import RoundedCard from './RoundedCard.vue'

const events = ref([])
const eventsUrl = 'http://localhost:3001/events'
const error = ref(null)

//connect to ds.json with fetch statement and retrieve evengs, assigning them into events.value for rendering
onMounted(() => {
  fetchEvents(eventsUrl)
})

const fetchEvents = async url => {
  try {
    error.value = null
    const response = await fetch(url)
    events.value = await response.json()
  } catch (e) {
    error.value = e
  }
}
</script>

<template>
  <template v-if="error">
    <RoundedCard class="bg-white flex items-center justify-around">
      <div class="text-xl">Failed to load events: {{ error }}</div>
      <RoundedButton @click="fetchEvents(eventsUrl)"> Retry </RoundedButton>
    </RoundedCard>
  </template>
  <template v-else>
    <section class="grid grid-cols-2 gap-8">
      <div v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </div>
    </section>
  </template>
</template>
