<script setup lang="ts">

//define props for what the current active tab is by name, as well as what name this tab is called, and what this tab should display in the UI
defineProps<{
    currentTab: string;
    tab: {
        name: string;
        display: string;
    }
}>();

//a click event will be emitted by this tab but it doesn't need a typed parameter so it gets an empty array
defineEmits<{
    click: []
}>()

</script>

<template>
    Link
</template>