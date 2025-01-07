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

<script>
import LanguageItem from '@/components/shared/LanguageItem.vue'

export default {
  name: 'LanguageList',
  components: {
    LanguageItem
  },
  props: {
    languages: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.language-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
