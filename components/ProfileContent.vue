<script setup lang="ts">
  const { t } = useI18n()
  const location = `${t('city')} - ${t('postalCode')}, ${t('country')}`
</script>

<template>
  <div>
    <p>{{ t('profileDescription') }}</p>
    <div class="profilecontent__list">
      <BaseTextIcon
        icon="phone"
        :text="t('phone')"
      />
      <BaseTextIcon
        icon="email"
        :text="t('email')"
      />
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
