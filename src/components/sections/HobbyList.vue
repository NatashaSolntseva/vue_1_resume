<template>
  <ul class="hobbies-list">
    <HobbyItem
      v-for="(hobby, index) in hobbies"
      :key="index"
      :icon="hobby.icon"
      :label="hobby.label"
    />
  </ul>
</template>

<script setup lang="ts">
import HobbyItem from '@/components/items/HobbyItem.vue'
import type { Hobby } from '@/constants/profile/hobbies'

defineProps<{
  hobbies: Hobby[]
}>()
</script>

<style scoped>
.hobbies-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
