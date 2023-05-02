<script setup lang="ts">
  const { t } = useI18n()
  const location = `${t('city')} - ${t('postalCode')}, ${t('country')}`
</script>

<template>
  <div>
    <div class="profilecontent__list">
      <p>{{ t('profileDescription') }}</p>
      <a :href="`tel:${t('phoneNoSpaces')}`"
        ><BaseTextIcon
          icon="phone"
          :text="t('phone')"
      /></a>

      <a :href="`tel:${t('phoneNoSpaces')}`">
        <BaseTextIcon
          icon="email"
          :text="t('email')"
        />
      </a>
      <BaseTextIcon
        icon="address"
        :text="t('address')"
      />
      <BaseTextIcon
        icon="location"
        :text="location"
      />
    </div>
  </div>
</template>

<style scoped>
  .profilecontent__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
