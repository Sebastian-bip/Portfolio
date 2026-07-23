import { ref } from 'vue'
import { defineStore } from 'pinia'
import { movieService } from '@/services/movieService'

export const useMovieStore = defineStore('movies', () => {
  const movies = ref([])
  const selectedMovie = ref(null)
  const loading = ref(false)
  const error = ref('')

  async function run(request) {
    loading.value = true
    error.value = ''
    try {
      return await request()
    } catch (requestError) {
      error.value = requestError.message || 'Unable to load movies.'
      return null
    } finally {
      loading.value = false
    }
  }

  async function fetchPopularMovies() {
    const results = await run(movieService.getPopularMovies)
    if (results) movies.value = results
  }

  async function searchMovies(query) {
    const results = await run(() => movieService.searchMovies(query))
    if (results) movies.value = results
  }

  async function fetchMovieDetails(id) {
    selectedMovie.value = null
    const movie = await run(() => movieService.getMovieDetails(id))
    if (movie) selectedMovie.value = movie
  }

  return { movies, selectedMovie, loading, error, fetchPopularMovies, searchMovies, fetchMovieDetails }
})
