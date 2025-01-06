<template>
  <div class="tool-card">
    <img class="tool-icon" :src="icon" :alt="name" />
    <div class="tool-content">
      <h4 class="tool-name">{{ name }}</h4>
      <p class="tool-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f9fc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  gap: 8px;
}

.tool-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.tool-name {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: #2e2e48;
}

.tool-description {
  font-size: 10px;
  line-height: 100%;
  color: #79819a;
}
</style>
