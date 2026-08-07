<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <div class="site-header__pill">
      <NuxtLink to="/" class="site-header__brand" aria-label="bezgoFresh home">
        <img :src="logo" alt="bezgoFresh" />
      </NuxtLink>

      <nav class="site-header__nav" aria-label="Primary">
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.to"
          :to="link.to"
          class="site-header__link"
          :class="{ 'site-header__link--active': isActive(link.to) }"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="site-header__actions">
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn site-header__cta">
          <UiIcon name="whatsapp" :size="17" />
          Order Now
        </a>
        <button class="site-header__burger" aria-label="Toggle menu" :aria-expanded="isOpen" @click="isOpen = !isOpen">
          <UiIcon name="close" :size="24" v-if="isOpen" />
          <UiIcon name="menu" :size="24" v-else />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="isOpen" class="site-header__mobile" aria-label="Mobile">
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.to"
          :to="link.to"
          class="site-header__mobile-link"
          :class="{ 'site-header__mobile-link--active': isActive(link.to) }"
          @click="isOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="btn site-header__mobile-cta">
          <UiIcon name="whatsapp" :size="18" />
          Order on WhatsApp
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { NAV_LINKS, WHATSAPP_URL } from '~/data/site'

const route = useRoute()
const logo = '/images/logo.png'
const isOpen = ref(false)
const scrolled = ref(false)

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}

function onScroll() {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  pointer-events: none;
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

.site-header__pill {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: min(94%, 1360px);
  padding: 10px 14px 10px 10px;
  border-radius: 999px;
  background:
    radial-gradient(130% 170% at 0% 0%, rgba(255, 255, 255, 0.16), transparent 45%),
    radial-gradient(150% 190% at 100% 100%, rgba(0, 60, 60, 0.4), transparent 55%),
    rgba(0, 128, 128, 0.48);
  -webkit-backdrop-filter: blur(16px) saturate(1.5);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 44px rgba(0, 64, 64, 0.3);
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), padding 0.45s cubic-bezier(0.22, 1, 0.36, 1), background 0.45s ease, box-shadow 0.45s ease;
}

.site-header--scrolled .site-header__pill {
  width: min(74%, 860px);
  padding: 8px 10px 8px 8px;
  background:
    radial-gradient(130% 170% at 0% 0%, rgba(255, 255, 255, 0.12), transparent 45%),
    radial-gradient(150% 190% at 100% 100%, rgba(0, 60, 60, 0.45), transparent 55%),
    rgba(0, 128, 128, 0.62);
  box-shadow: 0 10px 34px rgba(0, 64, 64, 0.36);
}

.site-header__brand img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), height 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.site-header--scrolled .site-header__brand img {
  width: 44px;
  height: 44px;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 auto;
}

.site-header__link {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  padding: 10px 16px;
  border-radius: 999px;
  transition: background 0.15s ease, color 0.15s ease;
}

.site-header__link:hover {
  background: rgba(255, 255, 255, 0.14);
  color: var(--white);
}

.site-header__link--active {
  background: rgba(255, 255, 255, 0.18);
  color: var(--white);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.site-header__cta {
  background: var(--white);
  color: var(--teal-dark);
  padding: 12px 22px;
  font-size: 14px;
  box-shadow: 0 6px 18px rgba(0, 64, 64, 0.24);
  transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}

.site-header__cta:hover {
  background: var(--gold);
  color: var(--ink);
  transform: translateY(-2px);
}

.site-header__burger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--white);
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.site-header__mobile {
  position: fixed;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  width: min(92%, 480px);
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  border-radius: 24px;
  background: rgba(0, 67, 67, 0.96);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.site-header__mobile-link {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  padding: 13px 12px;
  border-radius: 14px;
}

.site-header__mobile-link:hover,
.site-header__mobile-link--active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.site-header__mobile-cta {
  margin-top: 8px;
  background: var(--white);
  color: var(--teal-dark);
  padding: 14px 20px;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

@media (max-width: 900px) {
  .site-header__nav {
    display: none;
  }

  .site-header__burger {
    display: flex;
  }
}

@media (max-width: 520px) {
  .site-header__pill {
    width: min(96%, 1360px);
  }

  .site-header--scrolled .site-header__pill {
    width: min(92%, 860px);
  }

  .site-header__cta {
    display: none;
  }
}
</style>
