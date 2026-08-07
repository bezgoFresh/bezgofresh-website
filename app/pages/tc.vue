<template>
  <div>
    <PageHero
      eyebrow="Policies"
      title="Terms & Conditions"
      subtitle="The fine print behind every fresh delivery."
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
  title: 'Terms & Conditions | bezgoFresh',
  description: 'bezgoFresh terms and conditions covering orders, delivery, returns and refunds.'
})

const BLOCKS = [
  {
    title: 'Orders',
    body: [
      'Orders are placed through WhatsApp or the bezgoFresh shop. By placing an order you confirm that the details you provide are accurate.',
      'All orders are subject to availability. We reserve the right to refuse or cancel any order if the requested items are unavailable or fail quality checks.'
    ]
  },
  {
    title: 'Delivery',
    body: [
      'We deliver across our service area in Palakkad. Delivery times are estimates and may vary based on traffic and order volume.',
      'Please provide an accurate delivery location. Additional charges may apply for deliveries outside the standard service area.'
    ]
  },
  {
    title: 'Returns & Refunds',
    body: [
      'Freshness is our priority. If you are not satisfied with the quality of your delivery, contact us immediately on WhatsApp with your order details.',
      'Qualifying issues are eligible for replacement or refund as decided by our team, subject to verification.'
    ]
  },
  {
    title: 'Pricing & Offers',
    body: [
      'Prices are updated regularly and are final at the time your order is confirmed.',
      'Promotional offers, including community and referral rewards, are subject to their specific terms and can be withdrawn at any time.'
    ]
  },
  {
    title: 'Liability',
    body: [
      'bezgoFresh acts as a platform connecting customers with quality-checked vendors. Our liability is limited to the value of the delivered order.',
      'For your safety, perishable items should be stored appropriately after delivery.'
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
