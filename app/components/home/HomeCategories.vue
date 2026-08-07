<template>
  <section class="home-categories section">
    <div class="container">
      <UiReveal class="home-categories__head">
        <div>
          <p class="eyebrow">What we deliver</p>
          <h2 class="section-title">Our Product Categories</h2>
        </div>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="home-categories__viewall">
          view all
          <UiIcon name="arrow" :size="18" />
        </a>
      </UiReveal>

      <div class="home-categories__grid">
        <UiReveal v-for="category in CATEGORIES" :key="category.name">
          <article class="category-card">
            <div class="category-card__media">
              <img :src="category.image" :alt="category.name" loading="lazy" />
            </div>
            <h3 class="category-card__name display">{{ category.name }}</h3>
            <p class="category-card__text">{{ category.tagline }}</p>
          </article>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CATEGORIES, WHATSAPP_URL } from '~/data/site'
</script>

<style scoped>
.home-categories__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 44px;
}

.home-categories__viewall {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--teal);
  padding-bottom: 6px;
  border-bottom: 2px solid var(--teal);
  transition: gap 0.15s ease, color 0.15s ease;
}

.home-categories__viewall:hover {
  gap: 12px;
  color: var(--teal-dark);
}

.home-categories__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.category-card {
  position: relative;
  height: 100%;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px 30px;
  text-align: center;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.category-card__media {
  position: relative;
  z-index: 1;
  height: clamp(160px, 19vw, 220px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-card__media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 14px 18px rgba(0, 64, 64, 0.16));
}

.category-card__name {
  position: relative;
  z-index: 2;
  margin-top: -20px;
  font-size: 26px;
  letter-spacing: 0.04em;
  color: var(--teal-dark);
  margin-bottom: 8px;
}

.category-card__text {
  font-size: 14.5px;
  color: var(--ink-soft);
  line-height: 1.55;
}

@media (max-width: 1000px) {
  .home-categories__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .home-categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .home-categories__head {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 400px) {
  .home-categories__grid {
    grid-template-columns: 1fr;
  }
}
</style>
