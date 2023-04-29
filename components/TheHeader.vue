<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header>
    <img src="/img/david-arenzana-hernandez.jpeg" alt="David Arenzana Hernandez">
    <div>
      <h1 class="color-blue">{{ t('firstName') }} <span class="color-lighter-gray font-200">{{ t('lastName') }}</span>
      </h1>
      <p class="theheader__job color-blue">{{ t('job') }}</p>
      <hr />
      <ul class="theheader__links">
        <li>
          <BaseTextIcon social="linkedin" />
        </li>
        <li>
          <BaseTextIcon social="github" />
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.theheader__job {
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 2rem;
}

.theheader__links {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  list-style-type: none;
  padding-left: 0;
  margin-top: 2rem;
}
</style>