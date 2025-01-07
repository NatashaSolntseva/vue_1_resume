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

<script>
import AchievementCard from '@/components/shared/AchievementCard.vue'

export default {
  name: 'AchievementList',
  components: {
    AchievementCard
  },
  props: {
    achievements: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
