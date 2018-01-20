module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BTMAT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.includes,Array.prototype.find,Promise' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/lxm7jly.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#009688', height: '5px' },
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
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.scss[2].options.data = '@import "./assets/styles/utilities/variables";';
        }
      });
    }
  },
  plugins: [{src: '~/plugins/navigation.js'}]
};
