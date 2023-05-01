<template>
  <footer>
    <hr />
    <div class="footer__content">
      <p>©2023, made with vue</p>
      <img
        src="vue-logo.svg"
        alt="Vue Logo"
        width="18"
        height="18"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    width: 100%;
    max-width: 1080px;
    margin-top: 2rem;
  }
  .footer__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 0.9rem;
      margin: 0;
    }
  }
</style>
