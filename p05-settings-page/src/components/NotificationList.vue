<template>
  <ul>
    <li>
        <div v-for="notification in notifications" :key="notification.id">
          <div>{{notification.message}}</div>
        </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import useNotifications from '@/composables/useNotifications';

const { notifications } = useNotifications();
</script>
