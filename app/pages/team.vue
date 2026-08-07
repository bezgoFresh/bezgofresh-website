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
              <img v-if="member.image" :src="member.image" :alt="member.name" loading="lazy" />
              <span v-else class="team__avatar-fallback">{{ initials(member.name) }}</span>
            </div>
            <h3 class="team__name">{{ member.name }}</h3>
            <p class="team__role">{{ member.role }}</p>
            <p v-if="member.bio" class="team__bio">{{ member.bio }}</p>
            <div class="team__links">
              <a
                :href="member.linkedin || '#'"
                :class="{ 'team__link--muted': !member.linkedin }"
                target="_blank"
                rel="noopener"
                :aria-label="`${member.name} on LinkedIn`"
                :title="member.linkedin ? 'LinkedIn' : 'LinkedIn coming soon'"
              >
                <UiIcon name="linkedin" :size="16" />
              </a>
              <a
                :href="member.email ? `mailto:${member.email}` : '#'"
                :class="{ 'team__link--muted': !member.email }"
                :aria-label="`Email ${member.name}`"
                :title="member.email ? 'Email' : 'Email coming soon'"
              >
                <UiIcon name="mail" :size="16" />
              </a>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>

    <section class="section-tint section">
      <div class="container">
        <UiReveal class="team__badge">
          <img class="team__badge-logo" :src="nvidiaBadge" alt="NVIDIA Inception program member" loading="lazy" />
          <div class="team__badge-text">
            <h3 class="team__badge-title">Proud member of NVIDIA Inception</h3>
            <p class="team__badge-copy">
              bezgoFresh is part of the NVIDIA Inception program, accelerating our journey to bring
              technology and freshness together for Palakkad.
            </p>
          </div>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Team | bezgoFresh',
  description: 'Meet the bezgoFresh team delivering fresh fish and meat to your doorstep in Palakkad.'
})

const nvidiaBadge = '/images/nvidia-inception-program-badge-rgb-for-screen.png'

const TEAM = [
  { name: 'Your Name', role: 'Founder', bio: 'Building bezgoFresh to make fresh food accessible and convenient for everyone.', image: '', linkedin: '', email: '' },
  { name: 'Team Member', role: 'Operations', bio: 'Keeping deliveries fast, fresh and on time, every single day.', image: '', linkedin: '', email: '' },
  { name: 'Team Member', role: 'Quality Control', bio: 'Making sure only the freshest, quality-checked selection reaches you.', image: '', linkedin: '', email: '' },
  {
    name: 'John Joyel',
    role: 'Head of Technology',
    image: '/images/company/joyel.png',
    linkedin: 'https://www.linkedin.com/in/john-joyel/',
    email: 'johnjoyel0@hotmail.com'
  },
  {
    name: 'Mohammed Shahid',
    role: 'Founding Engineer',
    image: '/images/company/shahid.png',
    linkedin: 'https://www.linkedin.com/in/shhyydh/',
    email: 'shahid@bezgofresh.com'
  },
  {
    name: 'Anas',
    role: 'Human Resource',
    image: '',
    linkedin: '',
    email: ''
  },
  {
    name: 'Parthiv K',
    role: 'Founding Engineer',
    image: '/images/company/parthiv.png',
    linkedin: 'https://www.linkedin.com/in/parthiv-k-134b95282/',
    email: ''
  },
  {
    name: 'Muhammed Shihab',
    role: 'Logistic Executive',
    image: '',
    linkedin: '',
    email: ''
  }
]

function initials(name: string) {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>

<style scoped>
.team__head {
  margin-bottom: 40px;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.team__card {
  text-align: center;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 30px 20px 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.team__card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.team__avatar {
  width: 104px;
  height: 104px;
  margin-bottom: 16px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--mint-soft);
  border: 3px solid var(--mint);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team__avatar-fallback {
  font-family: var(--font-display);
  font-size: 34px;
  color: var(--teal);
}

.team__name {
  font-family: var(--font-heading);
  font-size: 17px;
}

.team__role {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--teal);
  margin-top: 4px;
}

.team__bio {
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--ink-soft);
}

.team__links {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.team__links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border);
  color: var(--teal);
  transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
}

.team__links a:hover {
  background: var(--teal);
  border-color: var(--teal);
  color: var(--white);
  transform: translateY(-2px);
}

.team__link--muted {
  opacity: 0.35;
}

.team__badge {
  display: flex;
  align-items: center;
  gap: 36px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(28px, 4vw, 44px);
  box-shadow: var(--shadow-sm);
}

.team__badge-logo {
  width: min(240px, 40%);
  height: auto;
  flex-shrink: 0;
}

.team__badge-title {
  font-family: var(--font-heading);
  font-size: clamp(19px, 2.4vw, 26px);
  margin-bottom: 8px;
}

.team__badge-copy {
  color: var(--ink-soft);
  font-size: 15px;
  max-width: 58ch;
}

@media (max-width: 1000px) {
  .team__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 760px) {
  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team__badge {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}

@media (max-width: 460px) {
  .team__grid {
    grid-template-columns: 1fr;
    max-width: 340px;
    margin: 0 auto;
  }
}
</style>
