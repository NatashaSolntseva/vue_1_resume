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

<script>
import SocialItem from '@/components/shared/SocialItem.vue'

export default {
  name: 'SocialList',
  components: {
    SocialItem
  },
  props: {
    socials: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
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
