<script setup lang="ts">
// const { t } = useI18n()

defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>