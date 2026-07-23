<template>
  <div class="tmdb-logo" :style="{ height: size + 'px' }">
    <svg v-if="variant === 'short'" viewBox="0 0 400 200" :height="size" :width="size * (400 / 200)"
      xmlns="http://www.w3.org/2000/svg" role="img" :aria-label="title">
      <defs>
        <linearGradient :id="gradId" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#90cea1" />
          <stop offset="100%" stop-color="#01b4e4" />
        </linearGradient>
      </defs>

      <text x="0" y="72" class="tmdb-text tmdb-green">TM</text>
      <rect x="185" y="0" width="215" height="90" rx="45" fill="#01b4e4" />

      <rect x="0" y="110" width="235" height="90" rx="45" :fill="`url(#${gradId})`" />
      <text x="255" y="182" class="tmdb-text tmdb-blue">DB</text>
    </svg>

    <svg v-else viewBox="0 0 620 300" :height="size" :width="size * (620 / 300)" xmlns="http://www.w3.org/2000/svg"
      role="img" :aria-label="title">
      <defs>
        <linearGradient :id="gradId" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#90cea1" />
          <stop offset="100%" stop-color="#01b4e4" />
        </linearGradient>
      </defs>

      <text x="0" y="72" class="tmdb-text tmdb-green">THE</text>
      <rect x="215" y="0" width="405" height="90" rx="45" fill="#01b4e4" />

      <text x="0" y="177" class="tmdb-text tmdb-green">M</text>
      <circle cx="110" cy="150" r="45" :fill="`url(#${gradId})`" />
      <text x="175" y="177" class="tmdb-text tmdb-blue">VIE</text>

      <rect x="0" y="210" width="305" height="90" rx="45" :fill="`url(#${gradId})`" />
      <text x="325" y="282" class="tmdb-text tmdb-blue">DB</text>
    </svg>
  </div>
</template>

<script setup>
/**
 * TmdbLogo.vue
 *
 * Hand-built recreation of TMDB's wordmark logo (blue palette),
 * based on the colors/layout from TMDB's "Logos & Attribution" brand page.
 *
 * Usage:
 *   <TmdbLogo variant="short" :size="40" />
 *   <TmdbLogo variant="full" :size="60" />
 */

const props = defineProps({
  // 'short' = "TM / DB" mark, 'full' = "THE MOVIE DB" wordmark
  variant: {
    type: String,
    default: 'short',
    validator: (v) => ['short', 'full'].includes(v)
  },
  // rendered height in px, width scales automatically to keep aspect ratio
  size: {
    type: [Number, String],
    default: 40
  },
  title: {
    type: String,
    default: 'The Movie Database (TMDB)'
  }
})

// unique gradient id per instance so multiple logos on the same page don't clash
const gradId = `tmdb-gradient-${Math.random().toString(36).slice(2, 9)}`
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

.tmdb-logo {
  display: inline-flex;
  align-items: center;
  line-height: 0;
}

.tmdb-text {
  font-family: 'Poppins', 'Arial Black', 'Helvetica Neue', sans-serif;
  font-weight: 800;
  font-size: 84px;
  letter-spacing: -2px;
}

.tmdb-green {
  fill: #90cea1;
}

.tmdb-blue {
  fill: #01b4e4;
}
</style>