<script setup>
    import RoundedCard from '@/components/RoundedCard.vue';
    defineProps({
        label: String,
    });
</script>

<template>
    <RoundedCard>
        {{label}}
    </RoundedCard>
</template>
