<template>
  <li class="language-item">
    <img class="language-icon" :src="icon" :alt="label" />
    <div class="language-content">
      <span class="language-label">{{ label }}</span>
      <span class="language-level">{{ level }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "LanguageItem",
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.language-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.language-icon {
  width: 32px;
  height: 24px;
  margin-right: 8px;
  object-fit: contain;
}

.language-content {
  display: flex;
  flex-direction: column;
}

.language-label {
  font-family: "DMSans";
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #47516b;
}

.language-level {
  font-size: 12px;
  line-height: 16px;
  color: #79819a;
}
</style>
