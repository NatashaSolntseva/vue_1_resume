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

<script>
import ContactItem from '@/components/shared/ContactItem.vue'

export default {
  name: 'ContactList',
  components: {
    ContactItem
  },
  props: {
    contacts: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
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
