<template>
  <SectionedCard>
    <div class="space-y-4 items-center flex flex-col">
      <slot />
      <RoundButton @click="retry" v-if="retry"> Retry </RoundButton>
    </div>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import RoundButton from '@/components/RoundButton.vue';
defineProps({
    retry : {
        Type : Function,
        Required : false
    }
})

</script>
