<script
    setup>    import { RouterLink } from 'vue-router'; import MovieGrid from '@/components/MovieGrid.vue'; import { useFavoriteStore } from '@/stores/favoriteStore'; const favoriteStore = useFavoriteStore()</script>
<template>
    <section>
        <p class="eyebrow">Twoja kolekcja</p>
        <div class="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
                <h1 class="display text-5xl font-extrabold sm:text-6xl">Filmy na później.</h1>
                <p class="mt-4 text-[#aaa8a5]">Twoja osobista półka z tytułami, do których warto wrócić.</p>
            </div><span
                class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-[#d2cfca]">{{
                    favoriteStore.favorites.length.toString().padStart(2, '0') }} filmów</span>
        </div>
        <MovieGrid v-if="favoriteStore.favorites.length" class="mt-12" :movies="favoriteStore.favorites" glow />
        <div v-else class="surface mt-12 rounded-[20px] p-10 sm:p-16">
            <p class="eyebrow">Jeszcze tu pusto</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-[-.055em]">Twoja lista czeka.</h2>
            <p class="mt-3 max-w-md leading-7 text-[#999795]">Zapisuj filmy, które przyciągnęły Twoją uwagę. Wystarczy
                kliknąć serce na plakacie.</p>
            <RouterLink to="/" class="primary-button mt-7">Odkrywaj filmy <span>→</span></RouterLink>
        </div>
    </section>
</template>
