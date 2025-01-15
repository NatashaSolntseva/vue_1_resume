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

<script setup lang="ts">
import CertificateCard from '@/components/items/CertificateCard.vue'
import type { Certificate } from '@/constants/content/certificates'

defineProps<{
  certificates: Certificate[]
}>()
</script>

<style scoped>
.certificate-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  margin-left: 23px;
}

@media (max-width: 1000px) {
  .certificate-list {
    margin-left: 0px;
  }
}
</style>
