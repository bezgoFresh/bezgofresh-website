<template>
  <section class="home-hero">
    <div class="container home-hero__inner">
      <div class="home-hero__content">
        <UiReveal>
          <p class="home-hero__eyebrow">
            <UiIcon name="bolt" :size="16" />
            Fresh, every single day
          </p>
          <h1 class="home-hero__title display">
            From Butchers,<br />Direct To Your<br /><span>Doorstep!</span>
          </h1>
          <p class="home-hero__sub">Skip the wait. Get fresh meat in minutes.</p>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary home-hero__cta">
            <UiIcon name="whatsapp" :size="20" />
            Order Now
          </a>
        </UiReveal>
      </div>

      <UiReveal class="home-hero__media">
        <div class="home-hero__blob">
          <img :src="heroImage" alt="A butcher preparing your bezgoFresh order" />
        </div>
        <div class="home-hero__badge">
          <UiIcon name="leaf" :size="20" />
          <div>
            <strong>Quality Checked</strong>
            <span>Trusted local butchers</span>
          </div>
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '~/data/site'

const heroImage = '/images/hero-butcher.png'
</script>

<style scoped>
.home-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #dff5f5 55%, #c2ebeb 100%);
}

.home-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(600px 400px at 85% 20%, rgba(102, 204, 204, 0.25), transparent 70%);
  pointer-events: none;
}

.home-hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
  padding-top: clamp(48px, 7vw, 96px);
  padding-bottom: clamp(48px, 7vw, 96px);
}

.home-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--teal);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 128, 128, 0.2);
  padding: 9px 16px;
  border-radius: 999px;
  margin-bottom: 22px;
}

.home-hero__title {
  font-size: clamp(42px, 7.5vw, 84px);
  line-height: 1.02;
  color: var(--ink);
}

.home-hero__title span {
  color: var(--teal);
}

.home-hero__sub {
  margin-top: 20px;
  font-size: clamp(18px, 2vw, 22px);
  color: var(--ink-soft);
}

.home-hero__cta {
  margin-top: 32px;
  padding: 19px 38px;
  font-size: 16px;
}

.home-hero__media {
  position: relative;
  display: flex;
  justify-content: center;
}

.home-hero__blob {
  position: relative;
  width: min(100%, 460px);
  aspect-ratio: 1;
  border-radius: 44% 56% 58% 42% / 44% 42% 58% 56%;
  background: linear-gradient(145deg, var(--teal) 0%, var(--teal-deep) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0, 95, 95, 0.35);
}

.home-hero__blob img {
  width: 88%;
  height: auto;
  object-fit: contain;
  transform: translateY(2px);
}

.home-hero__badge {
  position: absolute;
  left: 4%;
  bottom: 8%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--white);
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.home-hero__badge svg {
  color: var(--teal);
}

.home-hero__badge strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 14px;
  color: var(--ink);
}

.home-hero__badge span {
  font-size: 13px;
  color: var(--ink-soft);
}

@media (max-width: 860px) {
  .home-hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .home-hero__eyebrow {
    justify-content: center;
  }

  .home-hero__blob {
    width: min(100%, 380px);
    margin-top: 8px;
  }
}
</style>
