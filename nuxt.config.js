const graphql = require('graphql.js')
const forEach = require('lodash/forEach')

const graph = graphql("https://api.graph.cool/simple/v1/dnomak", {
  asJSON: true
})

const queryAllHumans = graph(`query {
  allHumans(orderBy: createdAt_DESC) {
    id
    name
    title
    username
    videoId
    tags {
      name
    }
    accounts {
      username
      website {
        url
        name
      }
    }
    times {
      second
      question {
        name
        nameEnglish
      }
    }
  }
}`)

module.exports = {
  head: {
    titleTemplate: '%s | dnomak.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon" type="image/png', sizes: '192x192',  hre: '"/favicon/android-icon-192x192.png' },
      { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon" type="image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/manifest.json' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: [
      { src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js', async:'async' },
      { src: '/OneSignalConfig.js' }
    ]
  },
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  loading: { color: '#12D469' },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        })
      }
    },
    loaders: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        exclude: /assets\/svg/,
        options: {
          limit: 1000,
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ],
    vendor: ['vue-i18n', 'vue-youtube-embed']
  },
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-25094721-10' }],
  ],
  plugins: [
    { src: '~/plugins/i18n' },
    { src: '~/plugins/youtube', ssr: false }
  ],
  generate: {
    async routes () {
      const urls = []
      const results = await queryAllHumans()
      forEach(results.allHumans, function (human) {
        urls.push({
          route: `/${human.username}`,
          payload: human
        })
      })
      return urls
    }
  }
}
