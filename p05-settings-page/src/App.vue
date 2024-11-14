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
    <h1 class="text-2xl mb-4">Settings Page</h1>
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :current-tab="currentTab" :tab="tab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <!-- Thie KeepAlive is currently not needed, because the state that the component uses is handled in a composable rather than in the component itself, however it is placed here because it was part of a lesson about various built-in components like KeepAlive and what they are used for  -->
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </FadeTransition>
  </main>
</template>

