<template>
  <div class="app">
    <ProfileSidebar />
    <ContentMain />
  </div>
</template>

<script setup lang="ts">
import ProfileSidebar from '@/components/layout/ProfileSidebar.vue'
import ContentMain from '@/components/layout/ContentMain.vue'
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }
}
</style>
