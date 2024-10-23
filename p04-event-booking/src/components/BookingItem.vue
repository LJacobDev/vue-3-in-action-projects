<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import RoundButton from '@/components/RoundButton.vue'
import { LoaderCircle, Check, Loader } from 'lucide-vue-next'

import { computed } from 'vue'

const props = defineProps({
  label: String,
  status: String
})

const pending = computed(() => props.status === 'pending')
const icon = computed(() => pending.value ? LoaderCircle : Check)

defineEmits(['cancelBooking'])
</script>

<template>
  <SectionedCard>
    <div class="flex justify-between">
      <div class="flex space-x-4">
        <div>{{ label }}</div>
        <div><component :is="icon" :class="{'animate-spin':pending}"/></div>
      </div>
      <RoundButton variant="danger" @click="$emit('cancelBooking')">Cancel</RoundButton>
    </div>
  </SectionedCard>
</template>
