<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header>
    <img src="/img/david-arenzana-hernandez.jpeg" alt="David Arenzana Hernandez">
    <div>
      <h1>{{ t('firstName') }}</h1>
      <ul>
        <li>{{ t('linkedin') }}</li>
        <li>{{ t('github') }}</li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex
}
</style>