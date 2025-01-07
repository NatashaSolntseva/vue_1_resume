<template>
  <li class="social-item">
    <img class="social-icon" :src="icon" :alt="label" />
    <div class="social-content">
      <span class="social-label">{{ label }}</span>
      <a :href="link" class="social-value" target="_blank" rel="noopener noreferrer">
        {{ value }}
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SocialItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.social-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.social-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  object-fit: contain;
}

.social-content {
  display: flex;
  flex-direction: column;
}

.social-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--muted-text);
}

.social-value {
  font-family: 'DMSans';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-color);
  text-decoration: none;
}

.social-value:hover {
  text-decoration: underline;
}
</style>
