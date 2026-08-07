<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: string
    duration?: number
  }>(),
  { duration: 1600 }
)

const el = ref<HTMLElement | null>(null)
const display = ref('0')

const match = props.value.match(/^([\d,]+)(.*)$/)
const target = match ? Number(match[1].replace(/,/g, '')) : 0
const suffix = match?.[2] || props.value

function format(n: number) {
  return n.toLocaleString('en-US') + suffix
}

function animate() {
  const start = performance.now()
  function tick(now: number) {
    const t = Math.min((now - start) / props.duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    display.value = format(Math.round(target * eased))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    display.value = format(target)
    return
  }

  let started = false
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true
          animate()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5, rootMargin: '0px 0px -8% 0px' }
  )

  if (el.value) {
    observer.observe(el.value)
  }
})
</script>
