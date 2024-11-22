<template>
  <ul>
    <li>
      <TransitionGroup>
        <div v-for="notification in notifications" :key="notification.id">
          <div>{{ notification.message }}</div>
        </div>
      </TransitionGroup>
    </li>
  </ul>
</template>

<script setup lang="ts">
import useNotifications from '@/composables/useNotifications';

const { notifications } = useNotifications();
</script>

<style scoped>
.v-leave-to {
  opacity: 0;
}

.v-leave-active {
  transition: opacity 2.5s ease-in;
}
</style>
