<script setup>
import BorderGlow from './BorderGlow.vue'
import MovieCard from './MovieCard.vue'

defineProps({ movies: { type: Array, required: true }, glow: { type: Boolean, default: false } })
</script>

<template>
    <div class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <component :is="glow ? BorderGlow : 'div'" v-for="(movie, index) in movies" :key="movie.id" :animated="glow"
            :glow-intensity="0.82" :border-radius="18" glow-color="209 100% 72%">
            <MovieCard :movie="movie" :index="index" />
        </component>
    </div>
</template>
