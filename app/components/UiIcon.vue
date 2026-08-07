<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="filled ? 'currentColor' : 'none'"
    :stroke="filled ? 'none' : 'currentColor'"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-if="name === 'whatsapp'" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path v-else-if="name === 'phone'" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path v-else-if="name === 'truck'" d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <path v-else-if="name === 'truck'" d="M5.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    <path v-else-if="name === 'leaf'" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path v-else-if="name === 'leaf'" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    <path v-else-if="name === 'knife'" d="M16 2l5 5-8.5 8.5a4.5 4.5 0 0 1-6.36 0l-.01-.01a4.5 4.5 0 0 1 0-6.36L16 2z" />
    <path v-else-if="name === 'user'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle v-else-if="name === 'user'" cx="12" cy="7" r="4" />
    <path v-else-if="name === 'tag'" d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.42 0l8.58-8.58a1 1 0 0 0 0-1.42L12 2z" />
    <path v-else-if="name === 'tag'" d="M7 7h.01" />
    <path v-else-if="name === 'cart'" d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path v-else-if="name === 'cart'" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    <path v-else-if="name === 'location'" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle v-else-if="name === 'location'" cx="12" cy="10" r="3" />
    <path v-else-if="name === 'arrow'" d="M5 12h14M12 5l7 7-7 7" />
    <path v-else-if="name === 'check'" d="M20 6L9 17l-5-5" />
    <path v-else-if="name === 'menu'" d="M3 6h18M3 12h18M3 18h18" />
    <path v-else-if="name === 'close'" d="M18 6L6 18M6 6l12 12" />
    <path v-else-if="name === 'star'" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    <path v-else-if="name === 'instagram'" d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z" />
    <path v-else-if="name === 'instagram'" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <circle v-else-if="name === 'instagram'" cx="17" cy="7" r="1" />
    <path v-else-if="name === 'facebook'" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    <path v-else-if="name === 'twitter'" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    <path v-else-if="name === 'linkedin'" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2a6 6 0 0 1 2-2z" />
    <path v-else-if="name === 'linkedin'" d="M2 9h4v12H2z" />
    <circle v-else-if="name === 'linkedin'" cx="4" cy="4" r="2" />
    <path v-else-if="name === 'mail'" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path v-else-if="name === 'mail'" d="M22 6l-10 7L2 6" />
    <path v-else-if="name === 'clock'" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
    <path v-else-if="name === 'clock'" d="M12 6v6l4 2" />
    <path v-else-if="name === 'bolt'" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 20
  },
  filled: {
    type: Boolean,
    default: false
  }
})
</script>
