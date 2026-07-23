<script setup>
import { computed, onMounted, ref } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import MovieGrid from '@/components/MovieGrid.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useMovieStore } from '@/stores/movieStore'
const movieStore = useMovieStore(); const activeQuery = ref('')
const heading = computed(() => activeQuery.value ? `Wyniki dla „${activeQuery.value}”` : 'Na co masz dziś ochotę?')
onMounted(() => movieStore.fetchPopularMovies())
function handleSearch(query) { activeQuery.value = query; if (query) movieStore.searchMovies(query); else movieStore.fetchPopularMovies() }
</script>
<template>
  <section>
    <div class="grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
      <div class="max-w-3xl pt-5">
        <p class="eyebrow mb-5">Wieczór z dobrym kinem</p>
        <h1 class="display max-w-2xl text-5xl font-extrabold text-[#f5f3ef] sm:text-6xl lg:text-7xl">{{ heading }}</h1>
        <p class="mt-6 max-w-xl text-base leading-7 text-[#aaa8a5]">Zamiast bez końca przewijać — znajdź historię, która
          naprawdę zostanie z Tobą na dłużej.</p>
      </div>
      <div class="surface relative overflow-hidden rounded-[20px] p-6 sm:p-7">
        <div class="absolute -right-10 -top-10 size-36 rounded-full bg-[#f09279]/15 blur-2xl" />
        <p class="eyebrow">Nastrój na dziś</p>
        <p class="mt-4 text-2xl font-bold tracking-[-.055em]">Duże emocje.<br /><span class="text-[#999795]">Nawet na
            małym ekranie.</span></p>
        <div class="mt-6 flex items-center gap-3">
          <div class="flex -space-x-2"><span v-for="color in ['#ec967d', '#e6c080', '#82a0b3']" :key="color"
              class="size-7 rounded-full border-2 border-[#242325]" :style="{ background: color }" /></div><span
            class="text-xs text-[#999795]">Nowe propozycje każdego dnia</span>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <SearchBar @search="handleSearch" />
    </div>
    <div class="mt-16 flex items-end justify-between gap-4">
      <div>
        <p class="eyebrow">{{ activeQuery ? 'Wyniki wyszukiwania' : 'Wybór na teraz' }}</p>
        <h2 class="mt-2 text-2xl font-extrabold tracking-[-.055em] sm:text-3xl">{{ activeQuery ? `Znaleziono:
          ${movieStore.movies.length}` : 'Popularne w tej chwili' }}</h2>
      </div><button v-if="activeQuery" class="text-sm font-bold text-[#f09279] transition hover:text-[#ffb6a1]"
        @click="handleSearch('')">Wyczyść</button>
    </div>
    <LoadingSpinner v-if="movieStore.loading" />
    <div v-else-if="movieStore.error" class="surface mt-8 rounded-[18px] p-6 text-[#e7a18f]">{{ movieStore.error }}
    </div>
    <MovieGrid v-else-if="movieStore.movies.length" class="mt-8" :movies="movieStore.movies" />
    <div v-else class="surface mt-8 rounded-[18px] p-10 text-center text-[#999795]">Nie znaleźliśmy filmu. Spróbuj
      innego tytułu lub nazwiska.</div>
  </section>
</template>
