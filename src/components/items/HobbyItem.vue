<template>
  <li class="hobby-item">
    <img class="hobby-icon" :src="icon" :alt="label" />
    <span class="hobby-label">{{ label }}</span>
  </li>
</template>

<script>
export default {
  name: 'HobbyItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hobby-item {
  display: flex;
  align-items: center;
}

.hobby-icon {
  width: 34px;
  height: 34px;
  margin-right: 16px;
  object-fit: contain;
}

.hobby-label {
  font-family: var(--font-main);
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-color);
}
</style>
