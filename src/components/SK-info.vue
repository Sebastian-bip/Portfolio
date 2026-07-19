<script setup>
import { ref, computed } from 'vue'

const src = ref('/ZdjęcieCV.png')
const phone = ref("+48 535 732 678")
const city = ref("Łowicz")
const country = ref("Polska")
//const adress = ref("ul. Dolna 24")
const Email = ref("sebastian123456ja@gmail.com")
const ME = ref("Sebastian Kramarz")
const role = ref("Junior Developer")

// -- social media: linki --
const linkedin = ref("https://www.linkedin.com/in/sebastian-kramarz-05b14036b/")
const instagram = ref("https://www.instagram.com/sebastan.jpg/")
const github = ref("https://github.com/Sebastian-bip")
const steam = ref("https://steamcommunity.com/profiles/76561198054421299/")

// -- sekcja "o mnie" --
const aboutMe = ref("Jestem ambitnym młodym chłopakiem, programowania traktuje jako swoje hobby przez ostatnie półtora roku. Szybko się uczę i szukam środowiska w którym mógłbym poszerzać moje horyzonty.")

// -- kopiowanie do schowka (email / telefon) --
const copiedField = ref("")

function copyToClipboard(text, fieldName) {
    navigator.clipboard.writeText(text)
    copiedField.value = fieldName
    setTimeout(() => {
        if (copiedField.value === fieldName) copiedField.value = ""
    }, 1200)
}

// -- ikonki SVG jako zwykłe stringi, żeby nie zaśmiecały template --
// (bez markowego logo Steam - patrz komentarz przy steamIcon)
const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" d="M1.5 3.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0"></path>
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" d="M1.5 22.5v-14h4v14h-4Z"></path>
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" d="M8 8.5v14h4v-6.908c0 -1.092 1 -3.092 3.895 -3.092 1.643 0 2.605 0.845 2.605 2.5v7.5h4V15c0 -1.309 -0.312 -2.937 -1.394 -4.277 -1.144 -1.417 -2.913 -2.223 -5.21 -2.223 -1.513 0 -2.835 0.615 -3.896 1.366V8.5H8Z"></path>
</svg>`

const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M11.996 1.771a10.486 10.486 0 0 0 -3.314 20.438c0.523 0.092 0.69 -0.216 0.69 -0.493 0 -0.25 0.005 -0.945 0 -1.824 -2.919 0.633 -3.522 -1.381 -3.522 -1.381a2.775 2.775 0 0 0 -1.163 -1.534c-0.952 -0.65 0.071 -0.638 0.071 -0.638a2.201 2.201 0 0 1 1.607 1.08 2.232 2.232 0 0 0 3.05 0.871c0.05 -0.53 0.285 -1.025 0.666 -1.397 -2.328 -0.266 -4.776 -1.165 -4.776 -5.184a4.055 4.055 0 0 1 1.08 -2.815 3.762 3.762 0 0 1 0.103 -2.774s0.882 -0.282 2.883 1.076a9.924 9.924 0 0 1 5.252 0c2.007 -1.357 2.881 -1.076 2.881 -1.076 0.387 0.878 0.424 1.87 0.104 2.774a4.05 4.05 0 0 1 1.079 2.816c0 4.03 -2.452 4.916 -4.789 5.174a2.487 2.487 0 0 1 0.718 1.933v2.904c0 0.28 0.17 0.59 0.702 0.488a10.487 10.487 0 0 0 -3.322 -20.438v0Z"></path>
</svg>`

const instagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" height="20" width="20">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg>`

// tymczasowa uproszczona ikonka (nie oficjalne logo Steam) - podmień, jeśli chcesz mieć markowe
const steamIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" d="M14 9.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0 -3 0"></path>
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" d="M8.25 17.116a1 1 0 1 0 1 -1.732l-7.747 -3.627C1.632 6.07 6.283 1.5 12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5c-4.971 0 -9.136 -3.455 -10.223 -8.095l6.473 2.711Z"></path>
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" d="M6.851 14.261a2.74 2.74 0 0 1 2.144 -0.75l3.013 -4.029a3.5 3.5 0 1 1 3.947 3.238l-4.466 3.287a2.75 2.75 0 1 1 -5.488 0.167"></path>
</svg>`

// -- lista social media do v-for, żeby template nie powtarzał się 4x --
const socialLinks = computed(() => [
    { name: "LinkedIn", url: linkedin.value, icon: linkedinIcon },
    { name: "GitHub", url: github.value, icon: githubIcon },
    { name: "Instagram", url: instagram.value, icon: instagramIcon },
    { name: "Steam", url: steam.value, icon: steamIcon },
])
</script>

<template>
    <section class="cv-header">

        <div class="photo-frame">
            <div class="photo-frame__bar"></div>
            <img :src alt="Photo of me" class="photo-frame__img">
            <div class="photo-frame__home"></div>
        </div>

        <div class="profile">
            <h1 class="profile__name">{{ ME }}</h1>
            <p class="profile__role">{{ role }} — {{ city }}, {{ country }}</p>

            <div class="profile__contact">
                <p class="profile__contact-item" @click="copyToClipboard(Email, 'email')" title="Kliknij, aby skopiować">
                    {{ Email }}
                    <span v-if="copiedField === 'email'" class="profile__copied">skopiowano!</span>
                </p>
                <p class="profile__contact-item" @click="copyToClipboard(phone, 'phone')" title="Kliknij, aby skopiować">
                    {{ phone }}
                    <span v-if="copiedField === 'phone'" class="profile__copied">skopiowano!</span>
                </p>
            </div>

            <ul class="socials">
                <li v-for="link in socialLinks" :key="link.name" class="socials__item">
                    <span class="socials__icon" v-html="link.icon"></span>
                    <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
                </li>
            </ul>
        </div>

        <div class="about">
            <p>{{ aboutMe }}</p>
        </div>

    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

.cv-header {
    --paper: #F2EDE5;
    --ink: #2A2620;
    --muted-warm: #8B7862;
    --muted-gray: #6E6A63;
    --hairline: #DCD5C8;

    display: flex;
    align-items: flex-start;
    gap: 48px;
    box-sizing: border-box;
    margin: 3em auto;
    padding: 2.5em 3em;
    width: 70%;
    background: var(--paper);
    border-radius: 12px;
}

/* --- ramka na zdjęcie --- */
.photo-frame {
    flex-shrink: 0;
    width: 180px;
    height: 250px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid var(--hairline);
    background: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.photo-frame__bar {
    height: 10px;
    flex-shrink: 0;
}

.photo-frame__img {
    flex: 1;
    width: 100%;
    object-fit: cover;
}

.photo-frame__home {
    height: 22px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.photo-frame__home::after {
    content: "";
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background: var(--hairline);
}

/* --- kolumna: imię, stanowisko, kontakt, social media --- */
.profile {
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex-shrink: 0;
    padding-top: 4px;
}

.profile__name {
    margin: 0;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 600;
    font-size: 40px;
    color: var(--ink);
}

.profile__role {
    margin: 0;
    font-size: 15px;
    color: var(--muted-warm);
}

.profile__contact {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.profile__contact-item {
    margin: 0;
    font-size: 14px;
    color: var(--muted-warm);
    cursor: pointer;
    width: fit-content;
}

.profile__contact-item:hover {
    text-decoration: underline dashed;
}

.profile__copied {
    margin-left: 6px;
    font-size: 10px;
    color: #7FB84D;
}

.socials {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin: 8px 0 0;
    padding: 0;
    flex-wrap: wrap;
}

.socials__item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.socials__icon {
    display: inline-flex;
    color: var(--ink);   /* SVG-i mają stroke="currentColor", więc dziedziczą ten kolor */
}

.socials__item a {
    font-size: 14px;
    color: var(--ink);
    text-decoration: none;
}

.socials__item a:hover {
    text-decoration: underline;
}

/* --- sekcja "o mnie", po prawej stronie całego komponentu --- */
.about {
    flex: 1;
    padding-top: 4px;
}

.about p {
    margin: 0;
    max-width: 46ch;
    font-size: 15px;
    line-height: 1.6;
    color: var(--muted-gray);
}

@media (max-width: 780px) {
    .cv-header {
        flex-direction: column;
        align-items: center;
        width: 90%;
        text-align: center;
    }

    .profile {
        align-items: center;
    }

    .profile__contact-item {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>