<template>
  <div>
    <PageHero
      eyebrow="Refer & Earn"
      title="Share the freshness, earn rewards"
      subtitle="Invite your friends and family to bezgoFresh. When they place their first order, you both get rewarded."
    />

    <section class="section">
      <div class="container refer__grid">
        <UiReveal v-for="step in STEPS" :key="step.title" class="refer__card">
          <span class="refer__number display">{{ step.number }}</span>
          <h3 class="refer__title">{{ step.title }}</h3>
          <p class="refer__text">{{ step.text }}</p>
        </UiReveal>
      </div>

      <UiReveal class="container refer__cta">
        <h2 class="section-title">Ready to start earning?</h2>
        <p class="section-sub">Share your link or reach out on WhatsApp — our team will set you up with your personal referral code.</p>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary refer__btn">
          <UiIcon name="whatsapp" :size="20" />
          Talk to us
        </a>
      </UiReveal>
    </section>
  </div>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '~/data/site'

useSeoMeta({
  title: 'Refer & Earn | bezgoFresh',
  description: 'Refer your friends to bezgoFresh and earn rewards. Fresh fish and meat delivery with perks for everyone.'
})

const STEPS = [
  { number: '01', title: 'Share bezgoFresh', text: 'Tell your friends and family about fresh, doorstep-delivered fish and meat.' },
  { number: '02', title: 'They order', text: 'Your referral places their first order on WhatsApp — it takes just minutes.' },
  { number: '03', title: 'You both earn', text: 'Both of you get rewarded with credits and exclusive offers on the next order.' }
]
</script>

<style scoped>
.refer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.refer__card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 26px;
}

.refer__number {
  font-size: 40px;
  color: var(--teal);
}

.refer__title {
  font-family: var(--font-heading);
  font-size: 18px;
  margin: 10px 0 8px;
}

.refer__text {
  font-size: 14.5px;
  color: var(--ink-soft);
}

.refer__cta {
  text-align: center;
  margin-top: 72px;
  padding: 48px 32px;
  background: var(--mint-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.refer__cta .section-title {
  margin: 0 auto;
}

.refer__cta .section-sub {
  margin: 16px auto 0;
}

.refer__btn {
  margin-top: 28px;
}

@media (max-width: 820px) {
  .refer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
