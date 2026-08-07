<template>
  <section class="no-stores section">
    <div class="container">
      <UiReveal>
        <p class="eyebrow">The bezgoFresh way</p>
        <h2 class="no-stores__title display">
          NO STORES<br /><span>JUST SPEED</span>
        </h2>
        <p class="no-stores__text">
          Partner up with local butchers by ensuring their quality of work and deliver straight to your doorstep.
        </p>
      </UiReveal>
    </div>
  </section>
</template>

<style scoped>
.no-stores {
  position: relative;
  overflow: hidden;
}

.no-stores::before {
  content: '';
  position: absolute;
  right: -140px;
  top: -140px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102, 204, 204, 0.18), transparent 70%);
}

.no-stores__title {
  font-size: clamp(48px, 12vw, 148px);
  line-height: 0.92;
  color: var(--ink);
}

.no-stores__title span {
  color: var(--teal);
}

.no-stores__text {
  margin-top: 26px;
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
