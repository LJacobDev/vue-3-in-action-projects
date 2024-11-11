<script setup lang="ts">
import type { Tab, TabKey } from '@/types';
import { computed } from 'vue';

//define props for what the current active tab is by name, and give it a tab type which will have a name for what this tab is called, and what this tab should display in the UI
const props = defineProps<{
  currentTab: TabKey;
  tab: Tab;
}>();

//a click event will be emitted by this tab but it doesn't need a typed parameter so it gets an empty array
defineEmits<{
  click: [];
}>();

const isActive = computed(() => {
  return props.currentTab === props.tab.key;
});
</script>

<template>
  <button
    @click="$emit('click')"
    :class="{
      'p-4 border-b-2': true,
      'border-b-blue-600 text-blue-600 ': isActive,
      'border-transparent': !isActive,
    }"
  >
    {{ tab.display }}
  </button>
</template>
