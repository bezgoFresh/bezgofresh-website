<template>
  <div>
    <PageHero
      eyebrow="Contact Us"
      title="We're here to help"
      subtitle="Questions, feedback or a craving for something fresh? Reach us on WhatsApp or drop us a line."
    />

    <section class="section">
      <div class="container contact__grid">
        <UiReveal class="contact__info">
          <h2 class="section-title">Talk to the bezgoFresh family</h2>
          <p class="section-sub">
            Our team responds fast. For orders, use WhatsApp with today's menu — the fastest way to get fresh meat and fish delivered.
          </p>

          <div class="contact__card">
            <span class="contact__icon"><UiIcon name="whatsapp" :size="24" /></span>
            <div>
              <strong>Order on WhatsApp</strong>
              <span>{{ PHONE }}</span>
            </div>
          </div>

          <div class="contact__card">
            <span class="contact__icon"><Icon name="ph:envelope-simple-fill" :size="24" /></span>
            <div>
              <strong>Email us</strong>
              <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
            </div>
          </div>

          <div class="contact__card">
            <span class="contact__icon"><UiIcon name="location" :size="24" /></span>
            <div>
              <strong>Head Office</strong>
              <span>04 Opp. Shadi Mahal, near Town Square Club, {{ LOCATION }}, KL 678014</span>
            </div>
          </div>
        </UiReveal>

        <UiReveal class="contact__form-wrap">
          <form class="contact__form" @submit.prevent="onSubmit">
            <h3 class="contact__form-title">Send us a message</h3>
            <label class="contact__field">
              <span>Your name</span>
              <input v-model="form.name" type="text" name="name" required placeholder="John Doe" />
            </label>
            <label class="contact__field">
              <span>Your number</span>
              <input v-model="form.phone" type="tel" name="phone" required placeholder="+91 9XXXX XXXXX" />
            </label>
            <label class="contact__field">
              <span>Message</span>
              <textarea v-model="form.message" name="message" rows="4" required placeholder="Tell us what you need..."></textarea>
            </label>
            <button type="submit" class="btn btn-primary contact__submit">
              <UiIcon name="whatsapp" :size="20" />
              Send via WhatsApp
            </button>
          </form>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { EMAIL, LOCATION, PHONE, PHONE_INTL } from '~/data/site'

useSeoMeta({
  title: 'Contact Us | bezgoFresh',
  description: 'Contact bezgoFresh for fresh fish and meat delivery in Palakkad. Order on WhatsApp, email us, or find us near Town Square Club.'
})

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

function onSubmit() {
  const text = `Hi bezgoFresh!%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`
  window.open(`https://wa.me/${PHONE_INTL}?text=${text}`, '_blank')
}
</script>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(36px, 6vw, 80px);
  align-items: start;
}

.contact__card {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 22px;
}

.contact__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--mint);
  color: var(--teal-dark);
}

.contact__card strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 15px;
  color: var(--ink);
}

.contact__card span,
.contact__card a {
  font-size: 14.5px;
  color: var(--ink-soft);
}

.contact__form-wrap {
  position: sticky;
  top: 110px;
}

.contact__form {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(28px, 4vw, 44px);
  box-shadow: var(--shadow-sm);
}

.contact__form-title {
  font-family: var(--font-heading);
  font-size: 22px;
  margin-bottom: 24px;
}

.contact__field {
  display: block;
  margin-bottom: 18px;
}

.contact__field span {
  display: block;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  color: var(--ink-soft);
  margin-bottom: 8px;
}

.contact__field input,
.contact__field textarea {
  width: 100%;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink);
  background: var(--mint-soft);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 13px 16px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.contact__field input:focus,
.contact__field textarea:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.12);
}

.contact__field textarea {
  resize: vertical;
}

.contact__submit {
  width: 100%;
  margin-top: 6px;
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }

  .contact__form-wrap {
    position: static;
  }
}
</style>
