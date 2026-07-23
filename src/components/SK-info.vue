<script setup>
import { ref } from "vue"

const photo = "/ZdjęcieCV.jpg"

const name = "Sebastian Kramarz"
const role = "Junior Front-End Developer"

const phone = "+48 535 732 678"
const email = "sebastian123456ja@gmail.com"
const location = "Łowicz, Polska"

const about =
    "Jestem początkującym Front-End Developerem, który od ponad półtora roku rozwija swoje umiejętności w tworzeniu aplikacji internetowych. Programowanie jest moją pasją – lubię poznawać nowe technologie, szybko się uczę i chętnie podejmuję nowe wyzwania. Szukam miejsca, w którym będę mógł rozwijać się pod okiem bardziej doświadczonych programistów i zdobywać praktyczne doświadczenie."

const copied = ref("")

function copy(text, type) {
    navigator.clipboard.writeText(text)
    copied.value = type
    setTimeout(() => {
        copied.value = ""
    }, 1200)
}

const socials = [
    { name: "GitHub", url: "https://github.com/Sebastian-bip" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sebastian-kramarz-05b14036b/" },
    { name: "Instagram", url: "https://www.instagram.com/sebastan.jpg/" },
   // { name: "Steam", url: "https://steamcommunity.com/profiles/76561198054421299/" },
]
</script>

<template>
    <section>
        <img :src="photo" :alt="name" class="photo">

        <div class="content">
            <h1>{{ name }}</h1>
            <h2>{{ role }}</h2>

            <p class="about">{{ about }}</p>

            <div class="contact">
                <button @click="copy(email, 'email')">
                    {{ email }}
                    <span v-if="copied === 'email'">✓</span>
                </button>

                <button @click="copy(phone, 'phone')">
                    {{ phone }}
                    <span v-if="copied === 'phone'">✓</span>
                </button>

                <span class="location">📍 {{ location }}</span>
            </div>

            <ul class="socials">
                <li v-for="social in socials" :key="social.name">
                    <a :href="social.url" target="_blank" rel="noopener noreferrer">{{ social.name }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    width: min(90%, 1100px);
    margin: 3rem auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2rem;
    background: #3a3a3a;
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, .25);
    font-family: 'Inter', sans-serif;
}

.photo {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 18px;
    border: 3px solid #42b883;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h1 {
    margin: 0;
    color: white;
    font-size: 2.4rem;
    font-family: 'Geist', sans-serif;
}

h2 {
    margin: 0;
    color: #42b883;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Geist', sans-serif;
}

.about {
    color: #d0d0d0;
    line-height: 1.7;
    margin: 0;
}

.contact {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
}

.contact button {
    background: #2b2b2b;
    color: white;
    border: 1px solid #42b883;
    border-radius: 999px;
    padding: .55rem 1rem;
    cursor: pointer;
    transition: .2s;
}

.contact button:hover {
    background: #42b883;
    color: #222;
}

.location {
    color: #bbb;
}

.socials {
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.socials li {
    border: 1px solid #42b883;
    border-radius: 999px;
    transition: .2s;
}

.socials li:hover {
    background: #42b883;
}

.socials a {
    display: block;
    padding: .55rem 1rem;
    color: white;
    text-decoration: none;
}

.socials li:hover a {
    color: #222;
}

@media (max-width: 800px) {
    section {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .photo {
        margin: auto;
    }

    .contact {
        justify-content: center;
    }

    .socials {
        justify-content: center;
    }
}
</style>
