<template>
  <div class="education-card">
    <div class="education-main-info">
      <img class="education-logo" :src="logo" :alt="institution" />
      <h4 class="education-institution">{{ institution }}</h4>
    </div>
    <div class="education-content">
      <p class="education-degree">{{ degree }}</p>
      <p class="education-period">{{ period }}</p>
      <p class="education-percentage">
        <span class="education-percentage-acent">Percentage</span> –
        {{ percentage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationCard',
  props: {
    logo: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    percentage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.education-card {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background-color: var(--card-background);
  width: 100%;
}

.education-main-info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}

.education-logo {
  width: 38px;
  height: 49px;
  object-fit: contain;
}

.education-institution {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: var(--text-color);
}

.education-content {
  display: flex;
  flex-direction: column;
  max-width: 145px;
}

.education-degree {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: var(--text-color);
}

.education-period {
  font-size: 10px;
  line-height: 100%;
  color: var(--muted-text);
}

.education-percentage {
  font-size: 12px;
  line-height: 100%;
  color: var(--muted-text);
}

.education-percentage-acent {
  color: var(--accent-color);
}
</style>
