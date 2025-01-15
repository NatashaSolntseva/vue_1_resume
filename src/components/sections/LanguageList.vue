<template>
  <ul class="language-list">
    <LanguageItem
      v-for="(language, index) in languages"
      :key="index"
      :icon="language.icon"
      :label="language.label"
      :level="language.level"
    />
  </ul>
</template>

<script setup lang="ts">
import LanguageItem from '@/components/items/LanguageItem.vue'
import type { Language } from '@/constants/profile/languages'

defineProps<{
  languages: Language[]
}>()
</script>

<style scoped>
.language-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
