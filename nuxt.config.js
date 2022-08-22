export default {
  head: {
    title: 'LibConsumer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  styleResources: {
    sass: ['./node_modules/AzgraNuxtLibrary/assets/sass/_variables.sass']
  },

  css: ['./node_modules/AzgraNuxtLibrary/assets/sass/index.sass'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    'AzgraNuxtLibrary/nuxt',
    'nuxt-typed-vuex'
  ],

  modules: ['@nuxtjs/i18n'],

  i18n: {
    differentDomains: false,
    defaultLocale: 'cs',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'i18n/',
    locales: [
      {
        code: 'cs',
        file: 'cs-CZ.json',
        iso: 'cs-CZ'
      }
    ],
    detectBrowserLanguage: false
  },

  build: {
    transpile: [/AzgraNuxtLibrary/, /^element-ui/]
  }
};
