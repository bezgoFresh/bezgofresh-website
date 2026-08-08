<template>
  <div>
    <HomeHero />
    <HomeNoStores />
    <HomeAbout />
    <HomeCategories />
    <HomeStats />
    <HomeHowToOrder />
    <HomeCommunity />
    <HomeFeatures />
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, WHATSAPP_URL } from '~/data/site'

useSeoMeta({
  title: 'bezgoFresh | meat & seafood delivery',
  description: 'bezgoFresh, your premier fish & meat delivery service. Fresh selections with swift delivery, straight from trusted local butchers to your doorstep in Palakkad.',
  ogTitle: 'bezgoFresh | Fish & Meat Delivery Service',
  ogDescription: 'Fresh fish & meat delivered from trusted local butchers straight to your doorstep. Order on WhatsApp.',
  ogImage: '/images/og.png'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'bezgoFresh',
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'bezgoFresh',
        image: `${SITE_URL}/images/og.png`,
        url: SITE_URL,
        telephone: '+91 85902 56794',
        priceRange: '₹₹',
        description: 'Fresh fish and meat delivered from trusted local butchers straight to your doorstep in Palakkad.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '04 Opp. Shadi Mahal, near Town Square Club',
          addressLocality: 'Palakkad',
          addressRegion: 'Kerala',
          postalCode: '678014',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 10.7867,
          longitude: 76.6548
        },
        areaServed: 'Palakkad',
        sameAs: ['https://www.instagram.com/bezgofresh/', 'https://www.twitter.com/bezgoFresh/', 'https://linkedin.com/company/Bezgofresh/']
      })
    }
  ]
})
</script>
