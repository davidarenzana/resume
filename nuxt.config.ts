export default defineNuxtConfig({
  ssr: true,
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'David Arenzana - Curriculum Vitae',
      meta: [
        {
          name: 'Este soy yo, mi CV - David Arenzana',
          content:
            'Si tienes curiosidad por saber de trayectoria profesional, aquí tienes un pequeño resumen',
        },
      ],
    },
  },
  css: ['@/assets/main.css'],
})
