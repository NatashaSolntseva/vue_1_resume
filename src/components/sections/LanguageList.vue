<template>
  <ul>
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
import LanguageItem from "../shared/LanguageItem.vue";

export default {
  name: "LanguageList",
  components: {
    LanguageItem,
  },
  props: {
    languages: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  // mounted() {
  //   console.log("Languages prop received:", this.languages);
  // },
};
</script>

<style scoped></style>
