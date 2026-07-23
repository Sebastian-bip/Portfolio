<script setup>

import { onMounted } from 'vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
onMounted(() => themeStore.applyTheme())

</script>

<template>
    <div class="app-shell flex flex-col">
        <Navbar />
        <main class="site-container flex-1 py-8 md:py-12">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>
