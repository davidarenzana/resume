<script setup lang="ts">
  defineProps<{
    hobby: string
  }>()
</script>

<template>
  <div class="hobbycard">
    <div class="hobbycard__icon">
      <img
        :src="`/icons/icon-${hobby}.svg`"
        :alt="hobby"
        height="36"
        width="36"
      />
    </div>
    <p>{{ hobby }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .hobbycard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .hobbycard__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dashed var(--blue-color);
      border-radius: 36px;
      width: 72px;
      height: 72px;
    }

    p {
      margin: 0;
    }
  }
</style>
