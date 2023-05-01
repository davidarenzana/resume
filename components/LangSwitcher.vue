<script lang="ts" setup>
  // const { locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="langswitcher">
    <nuxt-link
      :to="switchLocalePath('es')"
      active-class="active"
      >ES</nuxt-link
    >
    <nuxt-link
      active-class="active"
      :to="switchLocalePath('ca')"
      >CA</nuxt-link
    >
  </div>
</template>

<style lang="scss" scoped>
  .langswitcher {
    width: 100%;
    max-width: 1080px;

    a {
      text-decoration: none;
      padding: 0 1rem;
    }

    a + a {
      border-left: 1px solid var(--lighter-gray-color);
    }
    :hover {
      font-weight: 400;
    }
  }
  .active {
    color: var(--blue-color);
    font-weight: 400;
  }
</style>
