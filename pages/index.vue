<script setup lang="ts">
const { t } = useI18n()

</script>


<template>
  <div>
    <header>
      <h1>{{ t('hello') }}</h1>

    </header>
    <aside>sidebar</aside>
    <main>content</main>
  </div>
</template>

<style lang="scss" scoped></style>

<i18n lang="yml">

  es: 
    "hello": "Hola world!"
  
  ca: 
    "hello": "hello mon"
  

</i18n>