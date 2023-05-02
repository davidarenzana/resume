<script setup lang="ts">
  const { t } = useI18n()
  const location = `${t('city')} - ${t('postalCode')}, ${t('country')}`
</script>

<template>
  <div>
    <div class="profilecontent__list">
      <a :href="`tel:${t('phoneNoSpaces')}`"
        ><BaseTextIcon
          icon="phone"
          :text="t('phone')"
      /></a>

      <a :href="`mailto:${t('email')}`">
        <BaseTextIcon
          icon="email"
          :text="t('email')"
        />
      </a>
      <address>
        <BaseTextIcon
          icon="address"
          :text="t('address')"
        />
        <BaseTextIcon
          icon="location"
          :text="location"
        />
      </address>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .profilecontent__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > a {
      text-decoration: none;
    }
  }

  address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
