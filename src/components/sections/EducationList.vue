<template>
  <div class="education-list">
    <EducationCard
      v-for="(item, index) in education"
      :key="index"
      :logo="item.logo"
      :institution="item.institution"
      :degree="item.degree"
      :period="item.period"
      :percentage="item.percentage"
    />
  </div>
</template>

<script setup lang="ts">
import EducationCard from '@/components/items/EducationCard.vue'
import type { Education } from '@/constants/content/education'

defineProps<{
  education: Education[]
}>()
</script>

<style scoped>
.education-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
