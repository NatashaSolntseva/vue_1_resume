<template>
  <li class="contact-item">
    <img class="contact-icon" :src="icon" :alt="label" />
    <div class="contact-content">
      <span class="contact-label">{{ label }}</span>
      <a
        v-if="link"
        :href="link"
        class="contact-value"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ value }}
      </a>
      <span v-else class="contact-value">{{ value }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.contact-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  object-fit: contain;
}

.contact-content {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--muted-text);
}

.contact-value {
  font-family: "DMSans";
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-color);
  text-decoration: none;
}

.contact-value:hover {
  text-decoration: underline;
}
</style>
