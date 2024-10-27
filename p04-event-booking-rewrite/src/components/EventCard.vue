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
      <h3 class="text-xl">{{ event.description }}</h3>
    </div>
    <template #footer>
      <div class="p-4 flex justify-between">
        <h3 class="text-2xl">{{ event.location }}</h3>
        <RoundedButton @click="console.log('clicked register')">
          Register
        </RoundedButton>
      </div>
    </template>
  </SectionedCard>
</template>
