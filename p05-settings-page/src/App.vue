<script setup lang="ts">
import TabLink from '@/components/TabLink.vue';
import type { Tab, TabKey } from '@/types';
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
  <main class="max-w-2xl mx-auto px-4">
    Settings Page
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink 
          :current-tab="currentTab" 
          :tab="tab"
          @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
  </main>
</template>
