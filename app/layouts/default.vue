<template>
  <div>
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />

    <a
      class="whatsapp-float"
      :href="WHATSAPP_URL"
      target="_blank"
      rel="noopener"
      aria-label="Order on WhatsApp"
    >
      <UiIcon name="whatsapp" :size="30" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { WHATSAPP_URL, SITE_URL, EMAIL, PHONE_INTL, SOCIALS } from '~/data/site'

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

<style scoped>
.whatsapp-float {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  transition: transform 0.18s ease;
}

.whatsapp-float:hover {
  transform: translateY(-3px) scale(1.04);
}
</style>
