<script setup lang="ts">
  const { t } = useI18n()
</script>

<template>
  <header>
    <img
      src="/img/david-arenzana-hernandez.jpeg"
      alt="David Arenzana Hernandez"
    />
    <div class="theheader__content">
      <h1 class="color-blue">
        {{ t('firstName') }}
        <span class="color-lighter-gray font-200">{{ t('lastName') }}</span>
      </h1>
      <p class="theheader__job color-blue">{{ t('job') }}</p>
      <hr />
      <ul class="theheader__links">
        <li>
          <a
            :href="t('linkedin')"
            target="_blank"
          >
            <BaseTextIcon
              icon="linkedin"
              :text="t('linkedin')"
            />
          </a>
        </li>
        <li>
          <a
            :href="t('github')"
            target="_blank"
          >
            <BaseTextIcon
              icon="github"
              :text="t('github')"
            />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 4rem;
  }

  @media (min-width: 768px) {
    header {
      grid-template-columns: 300px 1fr;
    }
  }

  .theheader__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid var(--lighter-gray-color);
  }

  .theheader__job {
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .theheader__links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
    padding-left: 0;
    margin-top: 2rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1080px) {
    .theheader__links {
      gap: 3rem;
    }
  }
</style>
