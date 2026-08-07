<template>
  <div>
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />

    <a
      class="whatsapp-float"
      :href="WHATSAPP_URL"
      target="_blank"
      rel="noopener"
      aria-label="Order on WhatsApp"
    >
      <UiIcon name="whatsapp" :size="30" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '~/data/site'
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  transition: transform 0.18s ease;
}

.whatsapp-float:hover {
  transform: translateY(-3px) scale(1.04);
}
</style>
