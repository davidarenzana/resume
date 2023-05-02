<script lang="ts" setup>
  import { useColorMode } from '@vueuse/core'

  const mode = useColorMode()
</script>

<template>
  <button
    class="colorswitcher"
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
  >
    <IconSun v-if="mode === 'dark'" />
    <IconMoon v-else />
  </button>
</template>

<style lang="scss" scoped>
  .colorswitcher {
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: 24px;
      height: 24px;
      padding: 4px;
      border: 1px dashed var(--blue-color);
      border-radius: 1rem;
    }
  }

  button {
    border: 0;
    background-color: transparent;
  }
</style>
