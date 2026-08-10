<template>
  <div>
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, EMAIL, PHONE_INTL, SOCIALS } from '~/data/site'

const route = useRoute()

const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'geo.region', content: 'IN-KL' },
    { name: 'geo.placename', content: 'Palakkad, Kerala' },
    { name: 'geo.position', content: '10.7867;76.6548' },
    { name: 'ICBM', content: '10.7867, 76.6548' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'bezgoFresh',
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        description: 'Fresh fish and meat delivered straight from trusted local butchers to your doorstep in Palakkad.',
        email: EMAIL,
        telephone: `+${PHONE_INTL}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Palakkad',
          addressRegion: 'Kerala',
          addressCountry: 'IN'
        },
        sameAs: SOCIALS.map((s) => s.url)
      })
    }
  ]
})
</script>

<style scoped></style>
