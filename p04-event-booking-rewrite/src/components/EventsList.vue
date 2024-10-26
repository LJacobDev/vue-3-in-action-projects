<script setup>
import { ref, onMounted } from 'vue'

const events = ref([])
const eventsUrl = 'http://localhost:3001/events'

//connect to ds.json with fetch statement and retrieve evengs, assigning them into events.value for rendering
onMounted(() => {
  fetchEvents(eventsUrl)
})

const fetchEvents = async url => {
  try {
    const response = await fetch(url)
    events.value = await response.json()
  } catch (e) {
    alert(`Failed to fetch events: ${e}`)
  }
}
</script>

<template>
  <div v-for="event in events" :key="event.id">
    <div>
      {{ event.eventName }}
    </div>
    <div>
      {{ event.when }}
    </div>
    <div>
      {{ event.description }}
    </div>
    <div>
      {{ event.location }}
    </div>
  </div>
</template>
