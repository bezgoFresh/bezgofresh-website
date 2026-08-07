<template>
  <section class="home-stats section-tint section">
    <div class="container">
      <div class="home-stats__grid">
        <UiReveal v-for="stat in STATS" :key="stat.label" class="home-stats__item">
          <strong class="home-stats__value display">{{ stat.value }}</strong>
          <span class="home-stats__label">{{ stat.label }}</span>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { STATS } from '~/data/site'
</script>

<style scoped>
.home-stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.home-stats__item {
  text-align: center;
  padding: 40px 24px;
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.home-stats__value {
  display: block;
  font-size: clamp(44px, 6vw, 72px);
  color: var(--teal);
  line-height: 1;
}

.home-stats__label {
  display: block;
  margin-top: 10px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

@media (max-width: 640px) {
  .home-stats__grid {
    grid-template-columns: 1fr;
  }
}
</style>
