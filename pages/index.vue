<script setup lang="ts">
const { t, tm } = useI18n()
function normalize([v]: string[]) {
  return v
}
const studies = tm('studies')
</script>

<template>
  <div>
    <header>
      <h1>{{ t('title') }}</h1>
      <ul>
        <li v-for="item in studies" :key="item">{{ item.title({ normalize }) }}</li>
      </ul>
    </header>
    <aside>sidebar</aside>
    <main>content</main>
  </div>
</template>

<style lang="scss" scoped></style>

