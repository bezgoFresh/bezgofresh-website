<template>
  <div ref="el" class="fade-up" :class="{ 'is-visible': visible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    visible.value = true
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )

  if (el.value) {
    observer.observe(el.value)
  }
})
</script>
