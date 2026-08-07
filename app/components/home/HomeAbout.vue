<template>
  <section class="home-about section-tint section">
    <div class="container home-about__inner">
      <UiReveal class="home-about__media">
        <video
          class="home-about__video"
          :poster="aboutPoster"
          muted
          loop
          autoplay
          playsinline
          preload="none"
          aria-label="Product packing at bezgoFresh"
        >
          <source :src="aboutVideo" type="video/mp4" />
        </video>
      </UiReveal>

      <UiReveal class="home-about__content">
        <p class="eyebrow">About us</p>
        <h2 class="section-title">
          Hi! We're bezgoFresh, are you a busy professional struggling to find time to buy fresh fish &amp; meat from the market?
        </h2>
        <p class="section-sub">
          We connect you with quality-checked local butchers and fishmongers so the freshest selection is just a WhatsApp message away — delivered straight to your doorstep.
        </p>
        <NuxtLink to="/know-more" class="btn btn-ghost home-about__cta">
          Check us out!
          <UiIcon name="arrow" :size="18" />
        </NuxtLink>
      </UiReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
const aboutPoster = '/images/about-poster.jpg'
const aboutVideo = '/images/about-video.mp4'
</script>

<style scoped>
.home-about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}

.home-about__media {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: linear-gradient(160deg, var(--mint), var(--teal-light));
}

.home-about__media::before {
  content: '';
  display: block;
  padding-top: 74%;
}

.home-about__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-about__cta {
  margin-top: 30px;
}

@media (max-width: 900px) {
  .home-about__inner {
    grid-template-columns: 1fr;
  }

  .home-about__media {
    order: -1;
  }
}
</style>
