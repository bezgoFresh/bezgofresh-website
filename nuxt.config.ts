export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  icon: {
    serverBundle: 'local',
    clientBundle: {
      icons: [
        'ph:instagram-logo-fill',
        'ph:twitter-logo-fill',
        'ph:linkedin-logo-fill',
        'ph:envelope-simple-fill',
        'ph:globe-simple-fill'
      ],
      sizeLimitKb: 0
    }
  },
  css: [
    '~/assets/css/main.css',
    '@fontsource/anton/400.css',
    '@fontsource/montserrat/400.css',
    '@fontsource/montserrat/600.css',
    '@fontsource/montserrat/700.css',
    '@fontsource/questrial/400.css'
  ],
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/know-more',
        '/call-to-reach',
        '/team',
        '/refer',
        '/tc',
        '/delivery-partner',
        '/privacy-policy',
        '/butcher'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'bezgoFresh | meat & seafood delivery',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#008080' },
        { name: 'description', content: 'bezgoFresh, your premier fish & meat delivery service. Fresh selections with swift delivery, straight from trusted local butchers to your doorstep in Palakkad.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'bezgoFresh' },
        { property: 'og:title', content: 'bezgoFresh | Fish & Meat Delivery Service' },
        { property: 'og:description', content: 'Fresh fish & meat delivered from trusted local butchers straight to your doorstep. Order on WhatsApp.' },
        { property: 'og:image', content: '/images/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
