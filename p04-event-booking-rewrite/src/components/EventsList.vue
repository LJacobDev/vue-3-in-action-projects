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
      <h3 class="text-2xl">{{ event.eventName }}</h3>
    </div>
    <div>
      <h3 class="text-2xl">{{ event.when }}</h3>
    </div>
    <div>
      <h3 class="text-xl">{{ event.description }}</h3>
    </div>
    <div>
      <h3 class="text-2xl">{{ event.location }}</h3>
    </div>
    <button class="px-4 py-2 rounded-lg w-30 h-12 bg-green-200 font-thin">
      Register
    </button>
  </div>
</template>
