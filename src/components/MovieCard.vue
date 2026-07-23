<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useTmdbImage } from '@/composables/useTmdbImage'
import { useFavoriteStore } from '@/stores/favoriteStore'
const props = defineProps({ movie: { type: Object, required: true }, index: { type: Number, default: 0 } })
const { getImageUrl } = useTmdbImage(); const favoriteStore = useFavoriteStore()
const posterUrl = computed(() => getImageUrl(props.movie.poster_path)); const year = computed(() => props.movie.release_date?.slice(0, 4) || '—')
</script>
<template>
    <article class="movie-card group relative" :style="{ animationDelay: `${Math.min(index * 35, 350)}ms` }">
        <RouterLink :to="{ name: 'movie-details', params: { id: movie.id } }" class="block">
            <div
                class="relative aspect-[2/3] overflow-hidden rounded-[18px] bg-[#262527] shadow-[0_12px_26px_rgba(0,0,0,.28)]">
                <img v-if="posterUrl" :src="posterUrl" :alt="`Plakat filmu ${movie.title}`"
                    class="size-full object-cover transition duration-500 ease-out group-hover:scale-[1.055]" />
                <div v-else class="grid size-full place-items-center p-6 text-center text-sm text-[#92908d]">Brak
                    plakatu</div>
                <div
                    class="absolute inset-0 bg-gradient-to-t from-[#151414]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span
                    class="absolute bottom-3 left-3 rounded-lg bg-[#141313]/85 px-2 py-1 font-mono text-[11px] font-medium text-[#f9d59c] backdrop-blur-md">★
                    {{ movie.vote_average?.toFixed(1) ?? '—' }}</span>
            </div>
            <div class="px-1 pt-3">
                <h2
                    class="line-clamp-1 text-[15px] font-bold tracking-[-.035em] text-[#f2f0ec] transition-colors group-hover:text-[#f4a08a]">
                    {{ movie.title }}</h2>
                <p class="mt-1 text-xs font-medium text-[#8d8b88]">{{ year }} <span class="mx-1 text-[#555]">•</span>
                    Film</p> <!-- Wszystko tu jest filmem jego kurwa mać -->
            </div>
        </RouterLink><button type="button"
            class="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-xl border border-white/15 bg-[#171616]/72 text-pink-500 dark:text-white opacity-0 backdrop-blur transition-all duration-200 hover:scale-110 hover:border-[#f09279] hover:text-[#f09279] group-hover:opacity-100 focus:opacity-100"
            :aria-label="favoriteStore.isFavorite(movie.id) ? 'Usuń z mojej listy' : 'Dodaj do mojej listy'"
            :aria-pressed="favoriteStore.isFavorite(movie.id)" @click.stop="favoriteStore.toggleFavorite(movie)">
            <svg width="17" height="17" viewBox="0 0 24 24"
                :fill="favoriteStore.isFavorite(movie.id) ? 'currentColor' : 'none'" stroke="currentColor"
                stroke-width="2">
                <path
                    d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
        </button>
    </article>
</template>
