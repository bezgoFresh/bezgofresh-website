<template>
  <section class="home-community section-tint section">
    <div class="container">
      <UiReveal class="home-community__card">
        <img class="home-community__bg" :src="communityImage" alt="" loading="lazy" />
        <div class="home-community__content">
          <p class="eyebrow eyebrow-light">Be part of the family</p>
          <h2 class="home-community__title">Join Our Community<br />and get <span>upto 50% off</span></h2>
          <NuxtLink to="/tc" class="home-community__tc">T&amp;C apply</NuxtLink>
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
const communityImage = '/images/community.jpg'
</script>

<style scoped>
.home-community__card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: linear-gradient(120deg, var(--teal) 0%, var(--teal-dark) 100%);
  box-shadow: var(--shadow);
  padding: clamp(48px, 6vw, 84px) 24px clamp(40px, 5vw, 60px);
  text-align: center;
}

.home-community__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.16;
}

.home-community__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 720px;
  margin: 0 auto;
}

.home-community__title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(24px, 4vw, 42px);
  line-height: 1.2;
  color: var(--white);
}

.home-community__title span {
  color: var(--gold);
}

.home-community__tc {
  margin-top: 26px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  padding-bottom: 4px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.home-community__tc:hover {
  color: var(--gold);
  border-color: var(--gold);
}
</style>
