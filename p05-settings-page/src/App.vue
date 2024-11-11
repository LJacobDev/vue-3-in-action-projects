<script setup lang="ts">
import TabLink from '@/components/TabLink.vue';
import type { Tab, TabKey } from './types';
import { ref } from 'vue';

const currentTab = ref<TabKey>('General');

const tabs: Tab[] = [
  {
    key: 'General',
    display: 'General',
  },
  {
    key: 'Privacy',
    display: 'Privacy',
  },
  {
    key: 'Notifications',
    display: 'Notifications',
  },
];
</script>

<template>

    Settings Page
    <ul class="flex">
        <li v-for="tab in tabs" :key="tab.key">
            <TabLink :current-tab="currentTab" :tab="tab"></TabLink>
        </li>
    </ul>
</template>
