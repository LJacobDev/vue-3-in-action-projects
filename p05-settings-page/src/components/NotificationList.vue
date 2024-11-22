<template>
  <ul>
    <li>
      <div v-for="notification in notifications" :key="notification.id">
        <div>Notification Message Popup</div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import useNotifications from '@/composables/useNotifications';

const { notifications } = useNotifications();
</script>
