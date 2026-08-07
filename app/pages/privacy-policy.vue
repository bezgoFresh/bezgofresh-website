<template>
  <div>
    <PageHero
      eyebrow="Policies"
      title="Privacy Policy"
      subtitle="How we collect, use and protect your information."
    />

    <section class="section">
      <div class="container legal">
        <UiReveal v-for="block in BLOCKS" :key="block.title">
          <h2>{{ block.title }}</h2>
          <p v-for="para in block.body" :key="para">{{ para }}</p>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | bezgoFresh',
  description: 'How bezgoFresh collects, uses and protects your personal information.'
})

const BLOCKS = [
  {
    title: 'Information we collect',
    body: [
      'We collect only what is needed to fulfil your order: your name, phone number, delivery address and order history.',
      'We do not collect payment details directly; transactions handled through linked platforms follow their own policies.'
    ]
  },
  {
    title: 'How we use it',
    body: [
      'Your information is used to process orders, arrange delivery, and keep you updated on your order status.',
      'With your consent, we may share offers and community updates relevant to your purchases.'
    ]
  },
  {
    title: 'Sharing your data',
    body: [
      'We share your name, phone number and address only with the vendor and delivery partner fulfilling your order.',
      'We never sell your personal information to third parties.'
    ]
  },
  {
    title: 'Data security',
    body: [
      'We take reasonable steps to protect your information against loss, misuse and unauthorised access.',
      'Order-related details are retained only as long as needed for operations and record-keeping.'
    ]
  },
  {
    title: 'Contact us',
    body: [
      'For any privacy-related questions, reach us on WhatsApp or email us — we respond promptly.'
    ]
  }
]
</script>

<style scoped>
.legal {
  max-width: 820px;
  margin: 0 auto;
}

.legal h2 {
  font-family: var(--font-heading);
  font-size: 22px;
  margin: 36px 0 10px;
}

.legal p {
  color: var(--ink-soft);
  margin-bottom: 12px;
}
</style>
