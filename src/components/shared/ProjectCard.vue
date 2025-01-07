<template>
  <div class="project-card">
    <div class="project-card-header">
      <img class="project-icon" :src="icon" :alt="title" />
      <div class="project-content">
        <h4 class="project-title">{{ title }}</h4>
        <p class="project-description">{{ description }}</p>
      </div>
    </div>
    <div class="project-footer">
      <img class="project-link-icon" :src="linkIcon" alt="icon" />
      <a class="project-link" :href="link" target="_blank" rel="noopener noreferrer">
        {{ link }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    linkIcon: {
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
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--card-background);
  padding: 24px;
}

.project-card-header {
  display: flex;
  gap: 16px;
}

.project-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.project-content {
  flex: 1;
}

.project-title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: var(--text-color);
}

.project-description {
  font-size: 14px;
  line-height: 18px;
  color: var(--muted-text);
  margin-top: 4px;
}

.project-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.project-link {
  position: relative;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: var(--action-color);
  text-decoration: none;
  word-break: break-word;
}

.project-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: var(--action-color);
  transition: width 0.3s ease;
}
.project-link:hover::after {
  width: 100%;
}

@media (max-width: 500px) {
  .project-card-header {
    flex-direction: column;
    gap: 8px;
  }

  .project-footer {
    margin-top: 8px;
  }
}
</style>
