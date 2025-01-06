<template>
  <ul>
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
import SocialItem from "../shared/SocialItem.vue";

export default {
  name: "SocialList",
  components: {
    SocialItem,
  },
  props: {
    socials: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
