<template>
  <div>
    <PageHero
      eyebrow="Partner Up With Us"
      title="Sell more with bezgoFresh"
      subtitle="If you're a butcher or fishmonger who takes pride in quality, we want to work with you."
    />

    <section class="section">
      <div class="container">
        <div class="butcher__grid">
          <UiReveal class="butcher__intro">
            <p class="eyebrow">For vendors</p>
            <h2 class="section-title">Grow your business beyond your shop</h2>
            <p class="section-sub">
              bezgoFresh gives local butchers and fishmongers a new sales channel — a convenient way for customers to order from you without losing your quality standards.
            </p>
            <ul class="butcher__list">
              <li><UiIcon name="check" :size="18" /> More customers, more sales</li>
              <li><UiIcon name="check" :size="18" /> Your name and quality stay front and centre</li>
              <li><UiIcon name="check" :size="18" /> Delivery and ordering handled for you</li>
              <li><UiIcon name="check" :size="18" /> Fair, reliable payments</li>
            </ul>
            <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary butcher__btn">
              <UiIcon name="whatsapp" :size="20" />
              Partner up with us
            </a>
          </UiReveal>

          <UiReveal class="butcher__criteria">
            <h3 class="butcher__criteria-title">What we look for</h3>
            <div v-for="item in CRITERIA" :key="item" class="butcher__criteria-item">
              <UiIcon name="check" :size="18" />
              <p>{{ item }}</p>
            </div>
            <p class="butcher__criteria-note">
              We visit, verify and maintain quality checks so every order reflects the trust your customers place in you.
            </p>
          </UiReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '~/data/site'

useSeoMeta({
  title: 'Butcher Partner Up | bezgoFresh',
  description: 'Local butchers and fishmongers can grow sales with bezgoFresh. Partner up and reach more customers in Palakkad.'
})

const CRITERIA = [
  'Hygienic handling and clean premises',
  'Consistent, honest quality',
  'Willingness to prepare orders on demand',
  'Reliable daily supply'
]
</script>

<style scoped>
.butcher__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(36px, 6vw, 80px);
  align-items: start;
}

.butcher__list {
  margin-top: 22px;
}

.butcher__list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--ink-soft);
}

.butcher__list svg {
  color: var(--teal);
}

.butcher__btn {
  margin-top: 28px;
}

.butcher__criteria {
  background: var(--teal-deep);
  color: var(--white);
  border-radius: var(--radius-lg);
  padding: 36px 30px;
}

.butcher__criteria-title {
  font-family: var(--font-heading);
  font-size: 20px;
  color: var(--white);
  margin-bottom: 18px;
}

.butcher__criteria-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.butcher__criteria-item svg {
  color: var(--teal-light);
  flex-shrink: 0;
}

.butcher__criteria-item p {
  font-size: 15px;
}

.butcher__criteria-note {
  margin-top: 20px;
  font-size: 14px;
  color: #bcd8d8;
}

@media (max-width: 860px) {
  .butcher__grid {
    grid-template-columns: 1fr;
  }
}
</style>
