<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
import { useFavoriteStore } from '@/stores/favoriteStore'
import ThemeToggle from './ThemeToggle.vue'

const favoriteStore = useFavoriteStore()
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-white/7 bg-[#101011]/85 backdrop-blur-xl">
    <div class="site-container flex h-20 items-center justify-between gap-4">
      <RouterLink to="/" class="group flex items-center gap-3" aria-label="Strona glowna Wyszukiwarki Filmow">
        <span
          class="grid size-10 place-items-center rounded-[14px] bg-[#79b8f3] text-sm font-black text-[#102033] transition-transform duration-200 group-hover:rotate-[-8deg] group-hover:scale-105">S.K</span>
        <!-- <span class="hidden text-lg font-extrabold tracking-[-.06em] text-[#79b8f3] sm:block">S.K</span> -->
      </RouterLink>
      <nav class="flex items-center gap-1 rounded-2xl border border-white/8 bg-white/[.035] p-1"
        aria-label="Glowna nawigacja">
        <RouterLink to="/"
          class="nav-link rounded-xl px-3 py-2 text-sm font-bold text-[#a9a7a4] transition hover:bg-white/8 hover:text-white"
          active-class="!bg-white/10 !text-white">Odkrywaj</RouterLink>
        <RouterLink to="/favorites"
          class="nav-link flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-[#a9a7a4] transition hover:bg-white/8 hover:text-white"
          active-class="!bg-white/10 !text-white">Moja lista <span v-if="favoriteStore.favorites.length"
            class="grid size-5 place-items-center rounded-md bg-[#f09279] text-[10px] text-[#201716]">{{
              favoriteStore.favorites.length }}</span></RouterLink>
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>
