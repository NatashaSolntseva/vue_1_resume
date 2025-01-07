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
  gap: 8px;
  grid-template-columns: repeat(15, 1fr);
  border-radius: 8px;
  overflow: hidden;
}

.tool-list > *:nth-child(1) {
  grid-column: 1/6;
  grid-row: 1/2;
}
.tool-list > *:nth-child(2) {
  grid-column: 6/11;
  grid-row: 1/2;
}
.tool-list > *:nth-child(3) {
  grid-column: 11/16;
  grid-row: 1/2;
}
.tool-list > *:nth-child(4) {
  grid-column: 1/4;
  grid-row: 2/3;
}
.tool-list > *:nth-child(5) {
  grid-column: 4/7;
  grid-row: 2/3;
}
.tool-list > *:nth-child(6) {
  grid-column: 7/10;
  grid-row: 2/3;
}
.tool-list > *:nth-child(7) {
  grid-column: 10/13;
  grid-row: 2/3;
}
.tool-list > *:nth-child(8) {
  grid-column: 13/16;
  grid-row: 2/3;
}
</style>
