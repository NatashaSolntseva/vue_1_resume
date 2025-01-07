<template>
  <ul>
    <HobbyItem
      v-for="(hobby, index) in hobbies"
      :key="index"
      :icon="hobby.icon"
      :label="hobby.label"
    />
  </ul>
</template>

<script>
import HobbyItem from '@/components/shared/HobbyItem.vue'

export default {
  name: 'HobbyList',
  components: {
    HobbyItem
  },
  props: {
    hobbies: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped></style>
