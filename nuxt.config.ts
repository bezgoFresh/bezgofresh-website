export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;600;700&family=Questrial&display=swap' }
      ]
    }
  }
})
