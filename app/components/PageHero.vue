<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <UiReveal>
        <p v-if="eyebrow" class="eyebrow eyebrow-light">{{ eyebrow }}</p>
        <h1 class="page-hero__title display">{{ title }}</h1>
        <p v-if="subtitle" class="page-hero__sub">{{ subtitle }}</p>
        <div v-if="$slots.default" class="page-hero__actions">
          <slot />
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  eyebrow: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--teal-deep) 0%, var(--teal) 60%, var(--teal-light) 100%);
  padding: clamp(64px, 9vw, 120px) 0;
}

.page-hero__title {
  font-size: clamp(40px, 7vw, 76px);
  color: var(--white);
  text-transform: uppercase;
}

.page-hero__sub {
  margin-top: 18px;
  max-width: 56ch;
  font-size: 18px;
  color: #d7ecec;
}

.page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}
</style>
