module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BTMAT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust | Caring for African children with cancer' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.includes,Array.prototype.find,Promise' },
      { innerHTML: `document.documentElement.classList.add('enhanced')` }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  modules: [
    '@nuxtjs/sentry'
  ],
  plugins: [
    {src: '~/plugins/webfont-loader.js', ssr: false},
    {src: '~/plugins/navigation.js'}
  ],
  sentry: {
    dsn: 'https://dfda62d8d7b849d28eeed952e5edd2c7:da9df06b4d774989b0b639fb611a3ebe@sentry.io/284042'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#009688', height: '2px' },
  /*
  ** Add global styles
  */
  css: [
    '~/assets/styles/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
