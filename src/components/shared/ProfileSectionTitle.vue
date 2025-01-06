<template>
  <h3 class="section-title">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: "ProfileSectionTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.section-title {
  font-size: 12px;
  line-height: 16px;
  color: #79819a;
  margin: 32px 0 20px;
}
</style>
