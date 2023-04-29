<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  social: string
}>()
</script>

<template>
  <div class="baseTextIcon__container">
    <img :src="`icon-${social}.svg`" :alt="social" width="18" height="18">
    <span>{{ t(social) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.baseTextIcon__container {
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;
}
</style>