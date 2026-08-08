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
import { EMAIL, PHONE } from '~/data/site'

useSeoMeta({
  title: 'Privacy Policy | bezgoFresh',
  description: 'How bezgoFresh collects, uses and protects your personal information.'
})

const BLOCKS = [
  {
    title: 'Information we collect',
    body: [
      'At bezgoFresh, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website bezgofresh.com. By using our website, you agree to this policy.',
      'We collect various types of information, such as:',
      'Personal Information — Name, email address, phone number, billing address, and payment information when you make a purchase or register on our site. Account details like username, password, and preferences.',
      'Non-Personal Information — Data that does not directly identify you, such as device type and general usage patterns.',
      'Behavioral Data — Search history, pages viewed, clicks, and time spent on the website. Preferences set on the site, such as saved items or wish-list data.',
      'Geolocation Data — Location information, if enabled on your device.',
      'Cookies and Tracking Technologies — Cookies, web beacons, and tracking pixels are used to analyze usage and customize content.'
    ]
  },
  {
    title: 'How we use your information',
    body: [
      'Website Operations — To operate, maintain, and optimize our website and services.',
      'Personalization — To customize your experience, including showing content and ads tailored to your preferences.',
      'Communication — To send updates, promotions, newsletters, and respond to inquiries.',
      'Transaction Processing — To process orders, payments, and deliver products/services.',
      'Analytics — To monitor site performance and understand usage trends.',
      'Security — To prevent fraud, unauthorized access, or other malicious activity.'
    ]
  },
  {
    title: 'How we share your information',
    body: [
      'We do not sell your data. However, we may share your information with:',
      'Service Providers — Trusted partners who help us operate our website (e.g., hosting, analytics, payment gateways).',
      'Advertising Partners — For delivering personalized advertisements (with your consent).',
      'Legal Requirements — When required by law or to protect our legal rights.'
    ]
  },
  {
    title: 'Your choices and rights',
    body: [
      'Access and Update Information — You can access, correct, or delete your personal data by logging into your account or contacting us.',
      'Opt-Out — Marketing emails: unsubscribe using the link provided in each email. Cookies: adjust your browser settings to manage or block cookies.',
      'Data Portability — Request a copy of your data in a machine-readable format.'
    ]
  },
  {
    title: 'Cookies and tracking',
    body: [
      'Types of cookies we use — Essential cookies (necessary for the website to function), performance cookies (help us analyze usage and improve the site), and advertising cookies (deliver relevant advertisements).',
      'Managing cookies — You can disable cookies in your browser settings. However, this may affect certain website functionalities.',
      'Third-Party Services — Our website integrates third-party services like payment processors, analytics tools (e.g., Google Analytics), and social media platforms. These third parties may collect data independently under their policies.'
    ]
  },
  {
    title: 'Data security',
    body: [
      'We take robust security measures, including encryption and secure servers, to protect your data. However, no system is entirely secure, and you should exercise caution when sharing information online.'
    ]
  },
  {
    title: 'International data transfers',
    body: [
      'If you access our website outside India, your data may be transferred to and processed in countries with different privacy laws. By using our site, you consent to this transfer.'
    ]
  },
  {
    title: "Children's privacy",
    body: [
      'Our website is not intended for individuals under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with information, contact us immediately.'
    ]
  },
  {
    title: 'Retention of data',
    body: [
      'We retain your personal data for as long as necessary to provide our services or comply with legal obligations.'
    ]
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted here, and significant updates may be communicated via email or a notice on our website.'
    ]
  },
  {
    title: 'Contact us',
    body: [
      `If you have any questions, concerns, or requests regarding this Privacy Policy, contact us:`,
      `Email: ${EMAIL}`,
      `Phone: ${PHONE}`
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
