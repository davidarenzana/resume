<script setup lang="ts">
  defineProps<{
    title: String
    date: String
    location: String
  }>()
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="studiescard__linedate">
      <img
        src="/icons/icon-line.svg"
        width="32"
        height="32"
      />
      <p class="color-lighter-gray">{{ date }}</p>
    </div>
    <p>{{ location }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .studiescard__linedate {
    display: flex;
    align-items: center;
    gap: 1rem;

    > p {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      margin: 0;
    }
  }
</style>
