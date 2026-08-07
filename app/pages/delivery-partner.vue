<template>
  <div>
    <PageHero
      eyebrow="Partner With Us"
      title="Become a delivery partner"
      subtitle="Earn on every delivery while bringing fresh food to your neighbourhood."
    />

    <section class="section">
      <div class="container">
        <div class="partner__row">
          <UiReveal class="partner__text">
            <p class="eyebrow">Deliver with bezgoFresh</p>
            <h2 class="section-title">Drive for us, earn daily</h2>
            <p class="section-sub">
              We're building a network of reliable delivery partners across {{ LOCATION }}. Flexible hours, regular earnings and the satisfaction of delivering genuinely fresh food.
            </p>
            <ul class="partner__list">
              <li><UiIcon name="check" :size="18" /> Flexible work hours</li>
              <li><UiIcon name="check" :size="18" /> Weekly payouts</li>
              <li><UiIcon name="check" :size="18" /> Work in your own locality</li>
              <li><UiIcon name="check" :size="18" /> Support from the bezgoFresh team</li>
            </ul>
            <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary partner__btn">
              <UiIcon name="whatsapp" :size="20" />
              Apply now
            </a>
          </UiReveal>
          <UiReveal class="partner__steps">
            <h3 class="partner__steps-title">How it works</h3>
            <div v-for="step in STEPS" :key="step" class="partner__step">
              <span class="partner__step-num display">{{ step }}</span>
              <p>{{ stepText(step) }}</p>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { LOCATION, WHATSAPP_URL } from '~/data/site'

useSeoMeta({
  title: 'Delivery Partner | bezgoFresh',
  description: 'Join bezgoFresh as a delivery partner in Palakkad. Flexible hours, weekly payouts and fresh food delivery.'
})

const STEPS = ['01', '02', '03']

function stepText(step: string) {
  const map: Record<string, string> = {
    '01': 'Send us a message on WhatsApp with "delivery partner".',
    '02': 'Complete a quick onboarding and get your first area assigned.',
    '03': 'Pick up orders from the vendor and deliver them fresh to customers.'
  }
  return map[step]
}
</script>

<style scoped>
.partner__row {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(36px, 6vw, 80px);
  align-items: start;
}

.partner__list {
  margin-top: 22px;
}

.partner__list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--ink-soft);
}

.partner__list svg {
  color: var(--teal);
}

.partner__btn {
  margin-top: 28px;
}

.partner__steps {
  background: var(--mint-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 30px;
}

.partner__steps-title {
  font-family: var(--font-heading);
  font-size: 20px;
  margin-bottom: 20px;
}

.partner__step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}

.partner__step:last-child {
  border-bottom: none;
}

.partner__step-num {
  font-size: 32px;
  color: var(--teal);
  line-height: 1;
}

.partner__step p {
  font-size: 15px;
  color: var(--ink-soft);
}

@media (max-width: 860px) {
  .partner__row {
    grid-template-columns: 1fr;
  }
}
</style>
