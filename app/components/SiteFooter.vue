<template>
  <footer class="site-footer">
    <div class="site-footer__main">
      <div class="container site-footer__grid">
        <div class="site-footer__brand">
          <img :src="logo" alt="bezgoFresh" />
          <p class="site-footer__blurb">
            Fresh fish &amp; meat delivered straight from trusted local butchers to your doorstep.
          </p>
        </div>

        <div class="site-footer__col">
          <h3 class="site-footer__heading">Contact Us</h3>
          <ul>
            <li v-for="link in FOOTER_LINKS.contact" :key="link.to + link.label">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__col">
          <h3 class="site-footer__heading">Policies</h3>
          <ul>
            <li v-for="link in FOOTER_LINKS.policies" :key="link.to + link.label">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__col">
          <h3 class="site-footer__heading">Available in</h3>
          <p class="site-footer__location">
            <UiIcon name="location" :size="18" />
            {{ LOCATION }}
          </p>
          <h3 class="site-footer__heading site-footer__heading--gap">Social Links</h3>
          <div class="site-footer__socials">
            <a v-for="social in SOCIALS" :key="social.name" :href="social.url" target="_blank" rel="noopener" :aria-label="social.name">
              <Icon :name="social.icon" :size="18" />
            </a>
            <a :href="`mailto:${EMAIL}?subject=I%20have%20to%20say%20something`" aria-label="Email bezgoFresh">
              <Icon name="ph:envelope-simple-fill" :size="18" />
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="site-footer__divider"></div>
      </div>

      <div class="container site-footer__tagline">
        <h2 class="site-footer__tagline-title">Anything Fresh<br />that brings happiness...</h2>
        <a :href="SHOP_URL" target="_blank" rel="noopener" class="btn btn-white site-footer__tagline-btn">
          Order Now!
        </a>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="container site-footer__bottom-inner">
        <p>&copy; {{ new Date().getFullYear() }} bezgoFresh. All rights reserved.</p>
        <p>Made with freshness in {{ LOCATION }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { EMAIL, FOOTER_LINKS, LOCATION, SHOP_URL, SOCIALS } from '~/data/site'

const logo = '/images/logo.png'
</script>

<style scoped>
.site-footer__main {
  background: var(--teal-deep);
  color: #bcd8d8;
  padding: 72px 0 0;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
}

.site-footer__brand img {
  height: 46px;
  width: auto;
  object-fit: contain;
  margin-bottom: 16px;
}

.site-footer__blurb {
  max-width: 30ch;
  font-size: 15px;
}

.site-footer__heading {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 18px;
}

.site-footer__heading--gap {
  margin-top: 28px;
}

.site-footer__col li {
  margin-bottom: 12px;
}

.site-footer__col a {
  color: #bcd8d8;
  font-size: 15px;
  transition: color 0.15s ease;
}

.site-footer__col a:hover {
  color: var(--teal-light);
}

.site-footer__location {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: var(--teal-light);
}

.site-footer__socials {
  display: flex;
  gap: 12px;
}

.site-footer__socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--white);
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}

.site-footer__socials a:hover {
  background: var(--teal);
  border-color: var(--teal);
  transform: translateY(-2px);
}

.site-footer__divider {
  height: 3px;
  margin-top: 64px;
  background: linear-gradient(90deg, transparent, rgba(102, 204, 204, 0.7), transparent);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.site-footer__tagline {
  padding: 64px 0 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.site-footer__tagline-title {
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(30px, 5vw, 54px);
  line-height: 1.08;
  color: var(--white);
}

.site-footer__tagline-btn {
  padding: 17px 36px;
  border-radius: 30px;
  font-size: 15px;
}

.site-footer__bottom {
  background: var(--ink);
  padding: 18px 0;
}

.site-footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 13px;
  color: #8fa6a6;
}

@media (max-width: 900px) {
  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 520px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
  }

  .site-footer__bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
