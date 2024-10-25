<script setup>
// no longer needed once a composable was made for this
// defineEmits(['registerBooking'])

import EventCard from '@/components/EventCard.vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import SectionedCard from './SectionedCard.vue'
import RoundButton from '@/components/RoundButton.vue'

import { ref, onMounted } from 'vue'

import useBookings from '@/composables/useBookings.js'

const { registerBooking } = useBookings()

const events = ref([])
const loading = ref(false)
const error = ref(null)

const fetchEvents = async () => {
  try {
    // console.log('fetching events')
    error.value = null
    loading.value = true

    //trying to generate an error by disabling json-server was not causing an error,
    //but rather it caused this code to hang awaiting a response, so it was stuck in loading state
    //giving it a directly thrown error showed that any generated errors could be caught and shown as an error message
    // throw new Error('test error')
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
  } catch (e) {
    // console.log('error found')
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchEvents()
})
</script>

<template>
  <template v-if="error">
    <SectionedCard>
      <div class="space-y-4 items-center flex flex-col">
        <div>Error Loading Events</div>
        <RoundButton @click="fetchEvents"> Retry </RoundButton>
      </div>
    </SectionedCard>
  </template>
  <template v-else>
    <section class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <template v-if="!loading">
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :title="event.title"
            :when="event.date"
            :description="event.description"
            @register="registerBooking(event)"
          />
        </template>
        <template v-else>
          <div class="text-center col-span-2">
            <div>No events found</div>
            <RoundButton @click="fetchEvents"> Retry </RoundButton>
          </div>
        </template>
      </template>
      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </section>
  </template>
</template>

