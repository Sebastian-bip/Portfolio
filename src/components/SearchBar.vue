<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')
function submit() { emit('search', query.value.trim()) }
</script>
<template>
    <form class="search-shell surface flex items-center gap-3 rounded-[18px] p-2" @submit.prevent="submit"><svg
            class="ml-2 shrink-0 text-[#a9a7a4]" width="21" height="21" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.7-3.7" />
        </svg><input v-model="query" type="search"
            class="min-w-0 flex-1 bg-transparent px-1 text-[15px] text-white outline-none placeholder:text-[#777572]"
            placeholder="Szukaj po tytule, aktorze, reżyserze..." aria-label="Szukaj filmów" /><button type="submit"
            class="primary-button !min-h-10 !rounded-[13px] !px-4 text-sm">Szukaj<span class="hidden md:inline">
                filmów</span></button></form>
</template>
