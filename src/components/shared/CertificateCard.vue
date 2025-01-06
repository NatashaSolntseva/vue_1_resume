<template>
  <div class="certificate-card">
    <img class="certificate-logo" :src="logo" :alt="organization" />
    <div class="certificate-content">
      <p class="certificate-organization">{{ organization }}</p>
      <h4 class="certificate-title">{{ title }}</h4>
    </div>
    <div class="certificate-date">
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificateCard",
  props: {
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.certificate-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-color);
  padding: 16px;
}

.certificate-card:first-child {
  border-radius: 8px 8px 0px 0px;
}

.certificate-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-right: 16px;
}

.certificate-content {
  flex: 1;
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
</style>
