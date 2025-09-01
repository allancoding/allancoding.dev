export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Allan Coding!' },
        { property: 'og:description', content: 'Allancoding the cool coder!' },
        { property: 'og:url', content: 'https://allancoding.dev/' },
        { property: 'og:image', content: 'https://allancoding.dev/logos/allancoding.png' },
        { name: 'description', content: 'Allancoding the cool coder!' },
        { name: 'theme-color', content: '#00ff00' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    '~/assets/css/main.css'
  ],
  
  modules: ["nuxt-typedjs", "@nuxt/icon", '@nuxt/image'],
  plugins: [
    '~/plugins/matrixEffect.client.js',
    '~/plugins/scrollToTop.client.js',
    '~/plugins/title.js'
  ],
})
