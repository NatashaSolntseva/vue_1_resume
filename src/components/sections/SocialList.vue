<template>
  <ul class="social-list">
    <SocialItem
      v-for="(social, index) in socials"
      :key="index"
      :icon="social.icon"
      :label="social.label"
      :value="social.value"
      :link="social.link"
    />
  </ul>
</template>

<script setup lang="ts">
import SocialItem from '@/components/items/SocialItem.vue'
import type { Social } from '@/constants/profile/socials'

defineProps<{
  socials: Social[]
}>()
</script>

<style scoped>
.social-list {
  padding-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
