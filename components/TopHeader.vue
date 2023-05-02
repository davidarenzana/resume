<template>
  <div class="topheader">
    <LangSwitcher />
    <ColorSwitcher />
  </div>
</template>

<style scoped>
  .topheader {
    display: flex;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--lighter-gray-color);
    width: 100%;
    background-color: var(--white-color);
    opacity: 0.9;
  }

  .dark .topheader {
    background-color: var(--black-color);
  }
</style>
