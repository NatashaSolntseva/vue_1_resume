<template>
  <div class="certificate-card">
    <img class="certificate-logo" :src="logo" :alt="organization" />
    <div class="certificate-wrapper">
      <div class="certificate-content">
        <p class="certificate-organization">{{ organization }}</p>
        <h4 class="certificate-title">{{ title }}</h4>
      </div>
      <div class="certificate-date">
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificateCard',
  props: {
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    organization: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.certificate-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
  padding: 16px 23px;
}

.certificate-logo {
  width: 43px;
  height: 43px;
  object-fit: contain;
  margin-right: 16px;
}

.certificate-wrapper {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.certificate-title {
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  color: var(--text-color);
}

.certificate-organization {
  font-size: 14px;
  line-height: 18px;
  color: var(--muted-text);
  margin: 4px 0 0;
}

.certificate-date {
  font-size: 12px;
  line-height: 16px;
  color: var(--secondary-color);
  text-align: right;
}

@media (max-width: 1000px) {
  .certificate-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
