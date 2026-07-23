import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'movie-explorer-favorites'

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = ref(loadFavorites())
  const favoriteIds = computed(() => new Set(favorites.value.map((movie) => movie.id)))

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
  }

  function isFavorite(id) {
    return favoriteIds.value.has(id)
  }

  function toggleFavorite(movie) {
    if (!movie?.id) return

    if (isFavorite(movie.id)) {
      favorites.value = favorites.value.filter((favorite) => favorite.id !== movie.id)
    } else {
      favorites.value = [...favorites.value, { ...movie }]
    }
    save()
  }

  return { favorites, isFavorite, toggleFavorite }
})
