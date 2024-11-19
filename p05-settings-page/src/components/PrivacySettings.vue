<template>
  <div>
    <h2 class="text-xl mb-4">Privacy Settings</h2>
    <form class="space-y-4">
      <div class="flex space-x-2">
        <input type="checkbox" id="searchIndexing" v-model="privacy.searchEngineIndexing"/>
        <label for="searchIndexing">Search Engine Indexing</label>
      </div>
      <div>
        <label class="mb-2">Profile Visibility</label>
        <select v-model="privacy.visibility">
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
      <button @click.prevent class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { privacy } = useSettings();
</script>
