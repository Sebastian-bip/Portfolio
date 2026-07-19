<script setup>
import { ref } from 'vue'

const greetings = ref("Dziękuję każdemu rekruterowi, który poświęcił czas na obejrzenie mojego portfolio! 😁")
</script>

<template>
    <footer>
        <p>{{ greetings }}</p>
    </footer>
</template>

<style scoped>
footer {
    width: min(90%, 1100px);
    margin: 4rem auto 0;
    padding: 1.5rem 2rem;
    background: #3f3f3f;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-top: 2px solid #42b883;
    box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.25);
}

p {
    margin: 0;
    text-align: center;
    color: #f5f5f5;
    font-size: 1rem;
    line-height: 1.6;
}
</style>