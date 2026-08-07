<template>
  <div>
    <PageHero
      eyebrow="About Us"
      title="Who is bezgoFresh?"
      subtitle="A busy professional's shortcut to fresh fish and meat, delivered from trusted local butchers."
    />

    <section class="section">
      <div class="container about__inner">
        <UiReveal class="about__media">
          <img :src="aboutImage" alt="Packing fresh meat at bezgoFresh" loading="lazy" />
        </UiReveal>
        <UiReveal>
          <p class="eyebrow">Our story</p>
          <h2 class="section-title">Fresh meat, without the trip to the market</h2>
          <p class="section-sub">
            bezgoFresh partners with local butchers and fishmongers who meet our quality standards, then delivers their freshest selection straight to your doorstep. No stores, just speed.
          </p>
          <p class="section-sub">
            Whether you're a busy professional, a growing family, or someone who simply values the taste of genuinely fresh produce, we make it convenient to eat well every single day.
          </p>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary about__cta">
            <UiIcon name="whatsapp" :size="20" />
            Order on WhatsApp
          </a>
        </UiReveal>
      </div>
    </section>

    <section class="section-tint section">
      <div class="container">
        <UiReveal class="about__values-head">
          <p class="eyebrow">What we stand for</p>
          <h2 class="section-title">Our promise to you</h2>
        </UiReveal>
        <div class="about__values">
          <UiReveal v-for="value in VALUES" :key="value.title" class="about__value">
            <UiIcon :name="value.icon" :size="26" />
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </UiReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '~/data/site'

const aboutImage = '/images/about-poster.jpg'

useSeoMeta({
  title: 'About Us | bezgoFresh',
  description: 'Learn how bezgoFresh connects you with trusted local butchers and fishmongers, delivering fresh fish and meat straight to your doorstep.'
})

const VALUES = [
  { icon: 'leaf', title: 'Quality first', text: 'Every vendor is vetted and every batch is checked against strict freshness standards before it reaches you.' },
  { icon: 'truck', title: 'Speed that matters', text: 'Order in minutes and get doorstep delivery while your food is still at its freshest.' },
  { icon: 'user', title: 'Local economy', text: 'We help local butchers and fishmongers grow by unlocking a bigger, more convenient customer base.' },
  { icon: 'check', title: 'Convenience built in', text: 'No apps, no queues, no traffic. Just a WhatsApp message away from a fresh plate.' }
]
</script>

<style scoped>
.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}

.about__media {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.about__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.about__cta {
  margin-top: 30px;
}

.about__values-head {
  margin-bottom: 40px;
}

.about__values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.about__value {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 22px;
}

.about__value svg {
  color: var(--teal);
  margin-bottom: 16px;
}

.about__value h3 {
  font-family: var(--font-heading);
  font-size: 17px;
  margin-bottom: 8px;
}

.about__value p {
  font-size: 14.5px;
  color: var(--ink-soft);
}

@media (max-width: 900px) {
  .about__inner {
    grid-template-columns: 1fr;
  }

  .about__values {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .about__values {
    grid-template-columns: 1fr;
  }
}
</style>
