<template>
  <div class="tool-list">
    <ToolCard
      v-for="(tool, index) in tools"
      :key="index"
      :icon="tool.icon"
      :name="tool.name"
      :description="tool.description"
    />
  </div>
</template>

<script>
import ToolCard from "@/components/shared/ToolCard.vue";

export default {
  name: "ToolList",
  components: {
    ToolCard,
  },
  props: {
    tools: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.tool-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}
</style>
