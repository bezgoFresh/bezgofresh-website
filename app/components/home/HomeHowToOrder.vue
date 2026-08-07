<template>
  <section class="home-order section-dark section">
    <div class="container home-order__inner">
      <UiReveal class="home-order__media">
        <div class="home-order__phone">
          <img :src="phoneImage" alt="Ordering meat on WhatsApp" loading="lazy" />
        </div>
      </UiReveal>

      <div class="home-order__content">
        <UiReveal>
          <p class="eyebrow eyebrow-light">Simple as 1-2-3</p>
          <h2 class="section-title">How to order?</h2>
        </UiReveal>

        <UiReveal v-for="step in ORDER_STEPS" :key="step.number" class="home-order__step">
          <span class="home-order__number display">{{ step.number }}</span>
          <div>
            <h3 class="home-order__title">{{ step.title }}</h3>
            <p class="home-order__text">{{ step.text }}</p>
          </div>
        </UiReveal>

        <UiReveal>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-white home-order__cta">
            <UiIcon name="whatsapp" :size="20" />
            Order on WhatsApp
          </a>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ORDER_STEPS, WHATSAPP_URL } from '~/data/site'

const phoneImage = '/images/whatsapp-phone.jpg'
</script>

<style scoped>
.home-order__inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: clamp(36px, 6vw, 80px);
}

.home-order__media {
  position: relative;
}

.home-order__phone {
  position: relative;
  width: min(100%, 420px);
  margin: 0 auto;
  aspect-ratio: 9 / 15;
  border-radius: 36px;
  background: linear-gradient(160deg, var(--teal-light), var(--teal));
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
  border: 8px solid var(--ink);
}

.home-order__phone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-order__step {
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.home-order__step:first-of-type {
  margin-top: 8px;
}

.home-order__number {
  font-size: 44px;
  line-height: 1;
  color: var(--teal-light);
  min-width: 60px;
}

.home-order__title {
  font-family: var(--font-heading);
  font-size: 19px;
  color: var(--white);
  margin-bottom: 6px;
}

.home-order__text {
  font-size: 15.5px;
  color: #bcd8d8;
}

.home-order__cta {
  margin-top: 30px;
}

@media (max-width: 900px) {
  .home-order__inner {
    grid-template-columns: 1fr;
  }

  .home-order__media {
    order: -1;
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
