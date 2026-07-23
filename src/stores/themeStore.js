import { ref } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'movie-explorer-theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem(STORAGE_KEY) || 'dark')

  function applyTheme() {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem(STORAGE_KEY, theme.value)
    applyTheme()
  }

  return { theme, toggleTheme, applyTheme }
})
