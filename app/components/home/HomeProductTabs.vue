<template>
  <section class="home-tabs section">
    <div class="container">
      <UiReveal class="home-tabs__head">
        <p class="eyebrow">The full menu</p>
        <h2 class="section-title">Our Product Categories</h2>

        <div class="home-tabs__switch" role="tablist" aria-label="Product categories">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            role="tab"
            :aria-selected="active === tab.id"
            :class="{ 'home-tabs__tab--active': active === tab.id }"
            class="home-tabs__tab"
            @click="active = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </UiReveal>

      <Transition name="fade" mode="out-in">
        <div :key="active" class="home-tabs__grid">
          <UiReveal v-for="item in activeItems" :key="item.name" class="home-tabs__item">
            <div class="home-tabs__icon">
              <img :src="item.image" :alt="item.name" loading="lazy" />
            </div>
            <span class="home-tabs__name">{{ item.name }}</span>
          </UiReveal>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MEAT_ITEMS, SEAFOOD_ITEMS } from '~/data/site'

const tabs = [
  { id: 'meat', label: 'Meat' },
  { id: 'seafood', label: 'Seafood' }
] as const

type TabId = (typeof tabs)[number]['id']

const active = ref<TabId>('meat')

const activeItems = computed(() => (active.value === 'meat' ? MEAT_ITEMS : SEAFOOD_ITEMS))
</script>

<style scoped>
.home-tabs {
  background: linear-gradient(180deg, var(--teal-deep) 0%, var(--ink) 100%);
  color: var(--white);
}

.home-tabs__head {
  text-align: center;
}

.home-tabs .section-title {
  color: var(--white);
  margin: 0 auto;
}

.home-tabs__switch {
  display: inline-flex;
  gap: 6px;
  padding: 6px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
}

.home-tabs__tab {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #bcd8d8;
  padding: 12px 30px;
  border-radius: 999px;
  transition: background 0.18s ease, color 0.18s ease;
}

.home-tabs__tab--active {
  background: var(--teal);
  color: var(--white);
}

.home-tabs__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 44px;
}

.home-tabs__item {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  padding: 28px 16px 24px;
  transition: background 0.18s ease, transform 0.18s ease;
}

.home-tabs__item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.home-tabs__icon {
  width: 96px;
  height: 96px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: var(--mint-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.home-tabs__icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.home-tabs__name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 15.5px;
  color: var(--white);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1000px) {
  .home-tabs__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 640px) {
  .home-tabs__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 420px) {
  .home-tabs__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
