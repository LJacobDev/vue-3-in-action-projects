<script setup>
defineProps({
  title: String,
  when: String,
  description: String
})
defineEmits(['register'])

import RoundButton from '@/components/RoundButton.vue';
</script>

<template>
  <div class="border border-gray-300 bg-white rounded-md">
    <h3 class="p-4 font-medium text-xl border-b border-gray-300">{{ title }}</h3>
    <p class="p-4 border-b border-gray-300">{{ when }}</p>
    <p class="p-4">{{ description }}</p>
    <section class="flex justify-end p-4">
      <RoundButton @click="$emit('register')">
        Register
      </RoundButton>
    </section>
  </div>
</template>