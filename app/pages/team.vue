<template>
  <div>
    <PageHero
      eyebrow="Team"
      title="The people behind the fresh"
      subtitle="A small, driven team making fresh fish and meat convenient for Palakkad."
    />

    <section class="section">
      <div class="container">
        <UiReveal class="team__head">
          <p class="eyebrow">Meet the crew</p>
          <h2 class="section-title">The bezgoFresh team</h2>
        </UiReveal>

        <div class="team__grid">
          <UiReveal v-for="member in TEAM" :key="member.name" class="team__card">
            <div class="team__avatar">
              <img :src="member.image" :alt="member.name" loading="lazy" />
            </div>
            <h3 class="team__name">{{ member.name }}</h3>
            <p class="team__role">{{ member.role }}</p>
            <p class="team__bio">{{ member.bio }}</p>
          </UiReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Team | bezgoFresh',
  description: 'Meet the bezgoFresh team delivering fresh fish and meat to your doorstep in Palakkad.'
})

const TEAM = [
  { name: 'Your Name', role: 'Founder', bio: 'Building bezgoFresh to make fresh food accessible and convenient for everyone.', image: '/images/logo.png' },
  { name: 'Team Member', role: 'Operations', bio: 'Keeping deliveries fast, fresh and on time, every single day.', image: '/images/logo.png' },
  { name: 'Team Member', role: 'Quality Control', bio: 'Making sure only the freshest, quality-checked selection reaches you.', image: '/images/logo.png' }
]
</script>

<style scoped>
.team__head {
  margin-bottom: 40px;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.team__card {
  text-align: center;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 34px 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.team__card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.team__avatar {
  width: 110px;
  height: 110px;
  margin: 0 auto 18px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--mint-soft);
  border: 3px solid var(--mint);
}

.team__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team__name {
  font-family: var(--font-heading);
  font-size: 19px;
}

.team__role {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--teal);
  margin-top: 4px;
}

.team__bio {
  margin-top: 12px;
  font-size: 14.5px;
  color: var(--ink-soft);
}

@media (max-width: 820px) {
  .team__grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
