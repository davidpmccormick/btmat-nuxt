module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Beryl Thyer Memorial Africa Trust',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: '2FZLnBurZMDuqVZaAY0eo8YWmdqb80Tay42vJrFxVgg' },
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust is a UK charity caring for African children with Burkitt lymphoma and other cancers' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.includes,Array.prototype.find,Promise' },
      { innerHTML: `document.documentElement.classList.add('enhanced')` },
      { innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'url': 'https://btmat.org.uk',
        'name': 'Beryl Thyer Memorial Africa Trust',
        'alternateName': 'BTMAT',
        'legalName': 'Beryl Thyer Memorial Africa Trust',
        'description': 'Beryl Thyer Memorial Africa Trust is a UK charity caring for African children with Burkitt lymphoma and other cancers',
        'leiCode': '1112603',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+44 1536 518008',
          'contactType': 'customer support',
          'email': 'info@btmat.org.uk'
        },
        'address': {
          '@type': 'PostalAddress',
          'postalCode': 'NN16 9XL',
          'addressRegion': 'Northamptonshire',
          'addressLocality': 'Near Kettering',
          'streetAddress': '19 Warkton Village'
        },
        'founder': {
          '@type': 'Person',
          'familyName': 'McCormick',
          'givenName': 'Peter'
        },
        'foundingDate': '20060101T000000-0800',
        'logo': 'https://btmat.org.uk/logo.svg'
      }),
      type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  modules: [
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module'
  ],
  sitemap: {
    routes: [
      '/',
      '/news',
      '/cancer/burkitt',
      '/cancer/research',
      '/cancer/follow-up',
      '/cancer/future',
      '/cancer/other-cancers',
      '/cancer/diagnostic-and-treatment-costs',
      '/hospitals',
      '/gallery',
      '/press',
      '/about/out-work',
      '/about/beryl-thyer-memorial-africa-trust',
      '/about/founder',
      '/about/supporters',
      '/about/hq',
      '/about/south-africa',
      '/support/donate',
      '/support/work-with-us'
    ]
  },
  redirect: [
    {
      from: '^/about/the-trust',
      to: '/about/beryl-thyer-memorial-africa-trust',
      statusCode: 301
    }
  ],
  plugins: [
    {src: '~/plugins/webfont-loader.js', ssr: false},
    {src: '~/plugins/navigation.js'},
    {src: '~/plugins/ga.js', ssr: false}
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
