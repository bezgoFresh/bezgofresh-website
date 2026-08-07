<template>
  <section class="home-features section">
    <div class="container">
      <UiReveal class="home-features__head">
        <p class="eyebrow">Why choose us</p>
        <h2 class="section-title">It's all here, One Service with All Needs</h2>
      </UiReveal>

      <div class="home-features__grid">
        <UiReveal v-for="feature in FEATURES" :key="feature.title">
          <NuxtLink to="/butcher" class="home-features__card">
            <span class="home-features__icon">
              <UiIcon :name="feature.icon" :size="26" />
            </span>
            <h3 class="home-features__title">{{ feature.title }}</h3>
            <p class="home-features__text">{{ feature.text }}</p>
            <span class="home-features__arrow">
              <UiIcon name="arrow" :size="18" />
            </span>
          </NuxtLink>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FEATURES } from '~/data/site'
</script>

<style scoped>
.home-features__head {
  max-width: 60ch;
  margin-bottom: 44px;
}

.home-features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.home-features__card {
  position: relative;
  display: block;
  height: 100%;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 34px 28px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.home-features__card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
  border-color: var(--teal-light);
}

.home-features__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--mint);
  color: var(--teal-dark);
  margin-bottom: 20px;
}

.home-features__title {
  font-family: var(--font-heading);
  font-size: 19px;
  margin-bottom: 10px;
}

.home-features__text {
  font-size: 15px;
  color: var(--ink-soft);
  line-height: 1.6;
}

.home-features__arrow {
  position: absolute;
  top: 28px;
  right: 28px;
  display: inline-flex;
  color: var(--teal-light);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.home-features__card:hover .home-features__arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 900px) {
  .home-features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .home-features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
