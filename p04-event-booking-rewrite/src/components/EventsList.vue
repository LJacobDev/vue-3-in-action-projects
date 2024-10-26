<script setup>
import { ref, onMounted } from 'vue'

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
    <div>Failed to load events: {{ error }}</div>
    <div>Please try again</div>
    <!-- add a retry button here once a generic styled button 'RoundedButton' component has been made -->
  </template>
  <template v-else>
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
</template>
