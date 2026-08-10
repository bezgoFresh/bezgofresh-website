<template>
  <section class="no-stores section">
    <div class="container">
      <UiReveal>
        <div class="no-stores__heading">
          <p class="eyebrow">The bezgoFresh way</p>
          <h2 class="no-stores__title display">
            NO STORES<br /><span>JUST SPEED</span>
          </h2>
          <p class="no-stores__text">
            Partner up with local butchers by ensuring their quality of work and deliver straight to your doorstep.
          </p>
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<style scoped>
.no-stores {
  position: relative;
  overflow: hidden;
}

.no-stores .container {
  text-align: center;
}

.no-stores__heading {
  display: inline-block;
  max-width: 100%;
  text-align: left;
}

.no-stores .eyebrow {
  justify-content: flex-start;
}

.no-stores__title {
  font-size: clamp(48px, 12vw, 148px);
  line-height: 0.92;
  color: var(--ink);
  text-align: center;
}

.no-stores__title span {
  color: var(--teal);
}

.no-stores__text {
  margin: 26px 0 0;
  max-width: 52ch;
  font-size: 19px;
  color: var(--ink-soft);
}

@media (max-width: 520px) {
  .no-stores__title {
    font-size: clamp(44px, 16vw, 96px);
  }
}
</style>
