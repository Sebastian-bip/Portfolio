<script setup>
import { computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useTmdbImage } from '@/composables/useTmdbImage'
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useMovieStore } from '@/stores/movieStore'

const route = useRoute()
const movieStore = useMovieStore()
const favoriteStore = useFavoriteStore()

const { getImageUrl } = useTmdbImage()

const movie = computed(() => movieStore.selectedMovie)

async function loadMovie() {
    const id = route.params.id

    if (!id) return

    await movieStore.fetchMovieDetails(id)
}

onMounted(() => {
    loadMovie()
})

watch(
    () => route.params.id,
    () => {
        loadMovie()
    }
)
</script>
<template>
    <LoadingSpinner v-if="movieStore.loading" />
    <div v-else-if="movieStore.error" class="surface rounded-[18px] p-6 text-[#e7a18f]">{{ movieStore.error }}</div>
    <article v-else-if="movie" class="relative">
        <div class="absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden rounded-[24px] opacity-35"><img
                v-if="movie.backdrop_path" :src="getImageUrl(movie.backdrop_path, 'w1280')"
                class="size-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#101011]/60 to-[#101011]" />
        </div>
        <RouterLink to="/"
            class="inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#b0ada9] transition hover:text-[#f09279]">
            ← Wróć do odkrywania</RouterLink>
        <div class="grid gap-8 pt-14 md:grid-cols-[245px_1fr] md:gap-12 lg:grid-cols-[290px_1fr]">
            <div class="mx-auto w-full max-w-[290px] md:mx-0"><img v-if="movie.poster_path"
                    :src="getImageUrl(movie.poster_path)" :alt="`Plakat filmu ${movie.title}`"
                    class="aspect-[2/3] w-full rounded-[20px] object-cover shadow-2xl shadow-black/50" /></div>
            <div class="max-w-3xl self-end pb-4">
                <p class="eyebrow">{{ movie.release_date?.slice(0, 4) || 'Wkrótce' }} · {{movie.genres?.map(g =>
                    g.name).slice(0, 2).join(' / ')}}</p>
                <h1 class="display mt-4 text-5xl font-extrabold sm:text-6xl lg:text-7xl">{{ movie.title }}</h1>
                <div class="mt-7 flex flex-wrap items-center gap-3"><span
                        class="rounded-xl bg-[#f3c879] px-3 py-2 font-mono text-sm font-medium text-[#211c14]">★ {{
                            movie.vote_average?.toFixed(1) ?? '—' }}</span><span
                        class="rounded-xl border border-white/12 bg-black/20 px-3 py-2 font-mono text-xs text-[#d1cfca]">{{
                            movie.runtime ? `${movie.runtime} min` : 'Brak czasu trwania' }}</span></div>
                <p class="mt-8 text-[15px] leading-8 text-[#c0bdb9] sm:text-base">{{ movie.overview || 'Film nie ma
                    opisu.' }}</p>

                <button class="primary-button mt-8" type="button" @click="favoriteStore.toggleFavorite(movie)"><svg
                        width="18" height="18" viewBox="0 0 24 24"
                        :fill="favoriteStore.isFavorite(movie.id) ? 'currentColor' : 'none'" stroke="currentColor"
                        stroke-width="2">
                        <path
                            d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z" />
                    </svg>{{ favoriteStore.isFavorite(movie.id) ? 'Zapisano na Twojej liście' : 'Dodaj do mojej listy'
                    }}</button>
            </div>
        </div>
    </article>
</template>
