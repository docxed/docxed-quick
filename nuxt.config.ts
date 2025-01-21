// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-quasar-ui', '@vueuse/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: ['@/assets/css/quasar.variables.sass'],
  quasar: {
    plugins: ['LocalStorage'],
    config: {
      brand: {
        primary: '#9c27b0',
        secondary: '#ff4081',
        accent: '#1976d2',
        dark: '#1d1d1d',
        positive: '#21ba45',
        negative: '#ff4b4b',
        info: '#31ccec',
        warning: '#f2c037',
      },
      dark: 'auto',
    },
    components: {
      defaults: {},
    },
  },
  app: {
    baseURL: '/docxed-quick/',
    buildAssetsDir: 'assets',
  },
})
