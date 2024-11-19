<template>
  <div>
    <h2 class="text-xl mb-4">Notification Settings</h2>
    <form class="space-y-4">
      <div class="flex gap-2">
        <input type="checkbox" id="email" v-model="notifications.email" />
        <label for="email">Email</label>
      </div>
      <div class="flex gap-2">
        <input type="checkbox" id="sms" v-model="notifications.sms"/>
        <label for="sms">SMS</label>
      </div>
      <button @click.prevent class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
</script>
