import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'}
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    {src: "swiper/dist/css/swiper.css"}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/vue-swiper.js", ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', '~/plugins/vue-swiper'],
    postcss: [
      require('postcss-px2rem')({
        remUnit: 64
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
