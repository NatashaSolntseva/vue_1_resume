<template>
  <div class="education-list">
    <EducationCard
      v-for="(item, index) in education"
      :key="index"
      :logo="item.logo"
      :institution="item.institution"
      :degree="item.degree"
      :period="item.period"
      :percentage="item.percentage"
    />
  </div>
</template>

<script>
import EducationCard from "../shared/EducationCard.vue";

export default {
  name: "EducationList",
  components: {
    EducationCard,
  },
  props: {
    education: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.education-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
  gap: 8px;
}
</style>
