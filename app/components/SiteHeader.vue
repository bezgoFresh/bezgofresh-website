<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <NuxtLink to="/" class="site-header__brand" aria-label="bezgoFresh home">
        <img :src="logo" alt="bezgoFresh" width="110" height="110" />
      </NuxtLink>

      <nav class="site-header__nav" aria-label="Primary">
        <NuxtLink v-for="link in NAV_LINKS" :key="link.to" :to="link.to" class="site-header__link" :class="{ 'site-header__link--active': isActive(link.to) }">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="site-header__actions">
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary site-header__cta">
          <UiIcon name="whatsapp" :size="18" />
          Order Now
        </a>
        <button class="site-header__burger" aria-label="Toggle menu" :aria-expanded="isOpen" @click="isOpen = !isOpen">
          <UiIcon name="close" :size="26" v-if="isOpen" />
          <UiIcon name="menu" :size="26" v-else />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="isOpen" class="site-header__mobile" aria-label="Mobile">
        <NuxtLink v-for="link in NAV_LINKS" :key="link.to" :to="link.to" class="site-header__mobile-link" @click="isOpen = false">
          {{ link.label }}
        </NuxtLink>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn btn-primary site-header__mobile-cta">
          <UiIcon name="whatsapp" :size="18" />
          Order on WhatsApp
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { NAV_LINKS, WHATSAPP_URL } from '~/data/site'

const logo = '/images/logo.png'

const route = useRoute()
const isOpen = ref(false)

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 84px;
}

.site-header__brand img {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
}

.site-header__link {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-soft);
  padding: 10px 16px;
  border-radius: 999px;
  transition: color 0.15s ease, background 0.15s ease;
}

.site-header__link:hover {
  color: var(--teal);
  background: var(--mint-soft);
}

.site-header__link--active {
  color: var(--teal-dark);
  background: var(--mint);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.site-header__cta {
  padding: 13px 22px;
  font-size: 14px;
}

.site-header__burger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: var(--ink);
  border: 1px solid var(--border);
}

.site-header__mobile {
  position: absolute;
  inset: 84px 0 auto 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 24px 28px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.site-header__mobile-link {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--ink);
  padding: 14px 8px;
  border-bottom: 1px solid var(--mint);
}

.site-header__mobile-cta {
  margin-top: 16px;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 900px) {
  .site-header__nav {
    display: none;
  }

  .site-header__burger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .site-header__cta {
    display: none;
  }
}
</style>
