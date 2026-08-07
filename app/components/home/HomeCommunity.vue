<template>
  <section class="home-community section-tint section">
    <div class="container">
      <UiReveal class="home-community__card">
        <div class="home-community__content">
          <p class="eyebrow">Be part of the family</p>
          <h2 class="home-community__title">Join Our Community and get <span>upto 50% off</span></h2>
          <div class="home-community__links">
            <NuxtLink to="/tc" class="home-community__tc">T&amp;C apply</NuxtLink>
            <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary">
              <UiIcon name="whatsapp" :size="20" />
              Get started
            </a>
          </div>
        </div>
        <img class="home-community__img" :src="communityImage" alt="bezgoFresh community" loading="lazy" />
      </UiReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '~/data/site'

const communityImage = '/images/community.jpg'
</script>

<style scoped>
.home-community__card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: linear-gradient(120deg, var(--teal) 0%, var(--teal-dark) 100%);
  box-shadow: var(--shadow);
}

.home-community__content {
  position: relative;
  z-index: 2;
  padding: clamp(36px, 6vw, 72px);
  max-width: 640px;
}

.home-community__title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(24px, 3.4vw, 38px);
  line-height: 1.2;
  color: var(--white);
}

.home-community__title span {
  color: var(--gold);
}

.home-community__links {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-top: 28px;
}

.home-community__tc {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--white);
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  padding-bottom: 4px;
}

.home-community__tc:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.home-community__img {
  position: absolute;
  right: -40px;
  top: 0;
  height: 100%;
  width: 46%;
  object-fit: cover;
  opacity: 0.9;
}

@media (max-width: 760px) {
  .home-community__img {
    display: none;
  }
}
</style>
