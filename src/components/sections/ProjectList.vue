<template>
  <div class="project-list">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :icon="project.icon"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :link-icon="project.linkIcon"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/items/ProjectCard.vue'
import type { Project } from '@/constants/content/projects'

defineProps<{
  projects: Project[]
}>()
</script>

<style scoped>
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  border-radius: 8px;
  overflow: hidden;
}
@media (max-width: 500px) {
  .project-list {
    grid-template-columns: 1fr;
  }
}
</style>
