<template>
  <Teleport to="body">
    <ul class="notification-list">
      <TransitionGroup>
        <li class="notification-item" v-for="notification in notifications" :key="notification.id">
          <div>
            <div>{{ notification.message }}</div>
          </div>
          <button class="notification-ack-button" @click="removeNotification(notification.id)">
            OK
          </button>
        </li>
      </TransitionGroup>
    </ul>
  </Teleport>
</template>

<script setup lang="ts">
import useNotifications from '@/composables/useNotifications';

const { notifications, removeNotification } = useNotifications();
</script>

<style scoped>
.v-leave-to {
  opacity: 0;
}

.v-leave-active {
  transition: opacity .5s ease-in;
}
</style>
