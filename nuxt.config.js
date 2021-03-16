export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  vue: {
    devtools: true
  },
  target: 'static',
  // mode: 'spa',
  srcDir: 'src/',
  head: {
    title: 'media-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/marked'},
    { src: '@/plugins/vue-mavon-editor', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/auth'
    'cookie-universal-nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/dotenv',
  ],
  toast: {
    position: 'top-right',
    duration: 2000
  },
  // auth: {
  //   redirect: {
  //     login: '/admin/login',
  //     logout: '/admin/login',
  //     callback: '/callback',  // コールバックURL（各プロバイダで設定したものと同じPathにする）
  //     home: '/admin/login',
  //   },
  //   strategies: {
  //     local: {
  //       token: {
  //         // property: 'token',
  //         required: false,
  //         type: false
  //       },
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' }
  //       }
  //     },
  //     auth0: {
  //       domain: 'domain.auth0.com',
  //       clientId: '....',
  //       audience: 'https://my-api-domain.com/'
  //     }
  //   }
  // },
  // router: {
  //   middleware: 'auth'
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
