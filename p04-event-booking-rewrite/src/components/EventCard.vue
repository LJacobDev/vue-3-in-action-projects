<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import RoundedButton from '@/components/RoundedButton.vue'

defineProps({
  event: {
    Type: Object,
    Required: true,
  },
})
</script>

<template>
  <SectionedCard>
    <template #title>
      <h3 class="text-2xl">{{ event.eventName }}</h3>
    </template>
    <template #time>
      <h3 class="text-2xl">{{ event.when }}</h3>
    </template>
    <div>
      <div class="p-4 flex justify-between items-center">
        <h3 class="text-2xl mx-auto">{{ event.location }}</h3>
        <RoundedButton class="mr-6" @click="console.log('clicked register')">
          Register
        </RoundedButton>
      </div>
    </div>
    <template #footer>
      <h3 class="text-xl text-left">{{ event.description }}</h3>
    </template>
  </SectionedCard>
</template>
