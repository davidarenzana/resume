import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Site',
      meta: [{ name: 'description', content: 'My amazing site.' }],
    },
  },

  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    },
  ],

  css: ['@/assets/main.css'],

  // @ts-ignore
  modules: ['@nuxtjs/i18n'],

  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'ca', iso: 'ca-ES', name: 'Català', file: 'ca.json' },
    ],
    defaultLocale: 'es',
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  ssr: true,
})
