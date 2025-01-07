<template>
  <div class="certificate-list">
    <CertificateCard
      v-for="(certificate, index) in certificates"
      :key="index"
      :logo="certificate.logo"
      :title="certificate.title"
      :organization="certificate.organization"
      :date="certificate.date"
    />
  </div>
</template>

<script>
import CertificateCard from '@/components/shared/CertificateCard.vue'

export default {
  name: 'CertificateList',
  components: {
    CertificateCard
  },
  props: {
    certificates: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.certificate-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}
</style>
