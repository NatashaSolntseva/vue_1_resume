<template>
  <ul class="contact-list">
    <ContactItem
      v-for="(contact, index) in contacts"
      :key="index"
      :icon="contact.icon"
      :label="contact.label"
      :value="contact.value"
      :link="contact.link"
    />
  </ul>
</template>

<script setup lang="ts">
import ContactItem from '@/components/items/ContactItem.vue'
import type { Contact } from '@/constants/profile/contacts'

defineProps<{
  contacts: Contact[]
}>()
</script>

<style scoped>
.contact-list {
  padding: 32px 20px 32px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
