const restApiUrl = 'https://newsapi.org/'
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'News' || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Prime KOL' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-api-query',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en',
          },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'languages/',
        vueI18n: {
          fallbackLocale: 'en',
        },
        seo: false,
      },
    ],
  ],

  axios: {
    baseURL: restApiUrl,
    prefix: '/v2',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}
