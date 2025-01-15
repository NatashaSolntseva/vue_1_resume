<template>
  <div class="achievement-list">
    <AchievementCard
      v-for="(achievement, index) in achievements"
      :key="index"
      :date="achievement.date"
      :location="achievement.location"
      :mode="achievement.mode"
      :icon="achievement.icon"
      :title="achievement.title"
      :role="achievement.role"
      :description="achievement.description"
    />
  </div>
</template>

<script setup lang="ts">
import AchievementCard from '@/components/items/AchievementCard.vue'
import type { Achievement } from '@/constants/content/achievements'

defineProps<{
  achievements: Achievement[]
}>()
</script>

<style scoped>
.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
