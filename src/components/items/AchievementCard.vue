<template>
  <div class="achievement-card">
    <div class="achievement-list-marker"></div>
    <div class="achievement-container">
      <div class="achievement-main">
        <div class="achievement-header">
          <span
            class="achievement-date"
            :class="{ 'achievement-date--highlight': date === 'Present' }"
          >
            {{ date }}
          </span>
          <img class="location-icon" src="@/assets/icons/location_small.svg" alt="icon" />
          <span v-if="location" class="achievement-location">{{ location }}</span>
          <span v-if="mode" class="achievement-location">{{ mode }}</span>
        </div>
        <div class="achievement-content">
          <img class="achievement-icon" :src="icon" :alt="title" />
          <div class="achievement-details">
            <p class="achievement-role">{{ role }}</p>
            <h4 class="achievement-title">{{ title }}</h4>
          </div>
        </div>
      </div>
      <p class="achievement-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementCard',
  props: {
    date: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false,
      default: ''
    },
    mode: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    role: {
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
.achievement-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.achievement-list-marker {
  flex: 0 0 6px;
  height: 6px;
  background-color: var(--text-color);
  border-radius: 50%;
  margin-left: 9px;
  margin-top: 3px;
}

.achievement-container {
  display: flex;
  gap: 16px;
}

.achievement-main {
  flex: 0 0 243px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.achievement-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  line-height: 100%;
}

.achievement-date {
  color: #47516b;
}

.achievement-date--highlight {
  background-color: var(--highlight-background);
  color: var(--highlight-text);
  padding: 3px;
  border-radius: 4px;
}

.location-icon {
  width: 12px;
  height: 12px;
  object-fit: contain;
}

.achievement-location {
  color: var(--muted-text);
}

.achievement-content {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.achievement-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.achievement-details {
  flex: 1;
}

.achievement-title {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: var(--text-color);
}

.achievement-role {
  font-size: 12px;
  line-height: 16px;
  color: var(--muted-text);
  margin: 4px 0;
}

.achievement-description {
  flex: 1;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 1%;
  color: var(--muted-text);
}

@media (max-width: 1000px) {
  .achievement-container {
    display: flex;
    flex-direction: column;
  }

  .achievement-main {
    flex: 0 0 auto;
  }
}
</style>
