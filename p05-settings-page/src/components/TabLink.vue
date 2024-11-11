<script setup lang="ts">
import type { Tab } from '@/types';


//define props for what the current active tab is by name, and give it a tab type which will have a name for what this tab is called, and what this tab should display in the UI
defineProps<{
    currentTab: string;
    tab: Tab
}>();

//a click event will be emitted by this tab but it doesn't need a typed parameter so it gets an empty array
defineEmits<{
    click: []
}>()

</script>

<template>
    Link
</template>