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
  name: 'ToolCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--card-background);
  padding: 19px;
  text-align: center;
  gap: 8px;
}

.tool-icon {
  object-fit: contain;
}

.tool-name {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: var(--text-color);
}

.tool-description {
  font-size: 10px;
  line-height: 100%;
  color: var(--muted-text);
}
</style>
