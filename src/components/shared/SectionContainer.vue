<template>
  <div class="section-container">
    <div class="section-header">
      <div class="section-circle">
        <div class="section-dot"></div>
      </div>
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.section-container {
  position: relative;
  border-left: 2px solid var(--divider-color);
  padding-bottom: 51px;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
}

.section-circle {
  position: absolute;
  top: 0;
  left: -18px;
  width: 32px;
  height: 32px;
  background: var(--white-color);
  box-shadow:
    0px 2px 8px rgba(0, 0, 0, 0.05),
    0px 12px 48px rgba(0, 0, 0, 0.04),
    inset 0px 2px 2px rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.section-dot {
  width: 9px;
  height: 9px;
  background: var(--background-dark);
  border-radius: 50%;
}

.section-title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: var(--text-color);
  margin-left: 50px;
}

.section-content {
  padding: 16px 0 0 50px;
}

@media (max-width: 1000px) {
  .section-content {
    padding: 16px 0 0 30px;
  }
}
</style>
