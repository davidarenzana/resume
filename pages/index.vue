<script setup lang="ts">
const { tm, rt } = useI18n()
const studies = tm('studies')
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="content">
      <aside>

        <ul>
          <li v-for="item in studies" :key="item">{{ rt(item.title) }}</li>
        </ul>
      </aside>
      <main>content</main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

header,
.content {
  width: 100%;
  max-width: 1440px;
}

.content {
  display: grid;
  grid-template-columns: 400px 1fr;
}
</style>

