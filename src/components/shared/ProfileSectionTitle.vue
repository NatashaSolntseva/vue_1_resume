<template>
  <h3 class="section-title">
    {{ text }}
  </h3>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style scoped>
.section-title {
  font-size: 12px;
  line-height: 16px;
  color: var(--muted-text);
  margin: 32px 0 20px;
}
</style>
