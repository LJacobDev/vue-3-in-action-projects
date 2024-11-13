<script setup lang="ts">
import TabLink from '@/components/TabLink.vue';
import type { Tab, TabKey } from '@/types';
import { ref, computed } from 'vue';
import GeneralSettings from './components/GeneralSettings.vue';
import PrivacySettings from './components/PrivacySettings.vue';
import NotificationSettings from './components/NotificationSettings.vue';
import FadeTransition from '@/components/FadeTransition.vue';

const currentTab = ref<TabKey>('General');

const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component,
);

const tabs: Tab[] = [
  {
    key: 'General',
    display: 'General',
    component: GeneralSettings,
  },
  {
    key: 'Privacy',
    display: 'Privacy',
    component: PrivacySettings,
  },
  {
    key: 'Notifications',
    display: 'Notifications',
    component: NotificationSettings,
  },
];
</script>

<template>
  <main class="max-w-2xl mx-auto px-4">
    <h1 class="text-2xl">Settings Page</h1>
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :current-tab="currentTab" :tab="tab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
        <component :is="currentTabComponent" />
    </FadeTransition>
  </main>
</template>

