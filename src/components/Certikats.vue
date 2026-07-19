<script setup>
import { ref } from 'vue'

const projects = ref([
    {
        id: 1,
        title: "Portfolio",
        description: "Moje portfolio, stworzyłem to w vue, mój pierwszy projekt w tym frameworku który potraktowałem poważnie.",
        link: "https://github.com/Sebastian-bip/Portfolio"
    },
    {
        id: 2,
        title: "Strona szkoły",
        description: "Pracowałem z kolegą nad nową stroną naszej szkoły, byłem odpowiedzialny z back-end, stworzyłem API, dużą strukturę bazy danych SQL. Byłem w większej części odpowiedizalny za projekt oraz produkcje. Strona nie dostała furtki od dyreki więc jest to projekt porzucony.",
        link: "https://github.com/Sebastian-bip/ZST_StronaTestowa"
    },
    {
        id: 3,
        title: "Strona Matematyczna",
        description: "Pierwszy poważny projekt wykorzystujący moją znajomość HTMLa oraz CSS który jest moją największą dumą. Strona służy do generowania zadań matematycznych na poziomie 3-klasy szkoły podstawowej z różnymi poziomami trudności",
        link: "https://github.com/KarasuXYZ/Fina-Projekt"
        // https://karasuxyz.github.io/Fina-Projekt/
    },
    {
        id: 4,
        title: "Prosty Quizz",
        description: "Interakwyna strona internetowa z podstawowymi pytaniami z zakresu IT stworzona na dni otwarte w mojej uwczesnej szkole. Projekt bazujący na Javascrypcie",
        link: "https://github.com/KarasuXYZ/Quizz"
    }
])
</script>

<template>
    <section class="projects">
        <h2>Moje projekty</h2>

        <div v-for="project in projects" :key="project.id" class="project">
            <div class="info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>

            <a :href="project.link" target="_blank" rel="noopener noreferrer">
                Otwórz projekt ↗
            </a>
        </div>
    </section>
</template>

<style scoped>
section {
    width: min(90%, 1100px);
    margin: 3rem auto;
    padding: 2rem;
    background: #3a3a3a;
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, .25);
}

h2 {
    margin: 0 0 2rem;
    color: #42b883;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .5px;
}

section>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, .08);
    transition: .25s ease;
}

section>div:first-of-type {
    border-top: none;
}

section>div:hover {
    transform: translateX(6px);
}

section>div>div {
    flex: 1;
}

h3 {
    margin: 0;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
}

p {
    margin-top: .6rem;
    color: #c9c9c9;
    line-height: 1.6;
    font-size: .95rem;
}

a {
    padding: .8rem 1.3rem;
    border: 1px solid #42b883;
    border-radius: 999px;
    color: #42b883;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;
    transition: .25s ease;
}

a:hover {
    background: #42b883;
    color: #222;
}

@media (max-width: 768px) {
    section {
        padding: 1.5rem;
    }

    section>div {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    a {
        width: fit-content;
    }
}
</style>