<script setup lang="ts">
  defineProps<{
    icon: string
    text: string
  }>()
</script>

<template>
  <div class="baseTextIcon__container">
    <img
      :src="`/icons/icon-${icon}.svg`"
      :alt="text"
      width="18"
      height="18"
    />
    <span>{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .baseTextIcon__container {
    display: flex;
    gap: 0.5rem;

    img {
      margin-top: 5px;
    }
  }
</style>
