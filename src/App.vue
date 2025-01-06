<script setup lang="ts"></script>

<template>
  <div class="app">
    <ProfileSidebar />
    <ContentMain />
  </div>
</template>

<script>
import ProfileSidebar from "@/components/layout/ProfileSidebar.vue";
import ContentMain from "@/components/layout/ContentMain.vue";

export default {
  name: "App",
  components: {
    ProfileSidebar,
    ContentMain,
  },
};
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
