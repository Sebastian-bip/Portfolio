<script setup>
import { ref } from 'vue'

import exampleImage from '@/assets/PrzykladZD.jpg'

const projects = ref([
    {
        id: 1,
        title: "Portfolio",
        description: "Moje portfolio, stworzyłem to w Vue, mój pierwszy projekt w tym frameworku który potraktowałem poważnie.",
        github: "https://github.com/Sebastian-bip/Portfolio",
        demo: "https://portfolio-nine-beige-l3h2pmm3nm.vercel.app",
        image: exampleImage
    },
    {
        id: 2,
        title: "Strona szkoły",
        description: "Pracowałem z kolegą nad nową stroną naszej szkoły, byłem odpowiedzialny z back-end, stworzyłem API, dużą strukturę bazy danych SQL. Byłem w większej części odpowiedizalny za projekt oraz produkcje. Strona nie dostała furtki od dyreki więc jest to projekt porzucony. Strona była wykonywana w Next.js",
        github: "https://github.com/Sebastian-bip/ZST_StronaTestowa",
        demo: "https://zst-strona-testowa.vercel.app/data-base-test",
        image: exampleImage
    },
    {
        id: 3,
        title: "Strona Matematyczna",
        description: "Pierwszy poważny projekt wykorzystujący moją znajomość HTMLa oraz CSS który jest moją największą dumą. Strona służy do generowania zadań matematycznych na poziomie 3-klasy szkoły podstawowej z różnymi poziomami trudności",
        github: "https://github.com/KarasuXYZ/Fina-Projekt",
        demo: "https://karasuxyz.github.io/Fina-Projekt/",
        image: exampleImage
    },
    {
        id: 4,
        title: "Prosty Quizz",
        description: "Interakwyna strona internetowa z podstawowymi pytaniami z zakresu IT stworzona na dni otwarte w mojej uwczesnej szkole. Projekt bazujący na Javascrypcie",
        github: "https://github.com/KarasuXYZ/Quizz",
        demo: "https://karasuxyz.github.io/Quizz/",
        image: exampleImage
    }
])
</script>

<template>
    <section class="projects">
        <h2>Moje projekty</h2>

        <div class="projects-grid">
    <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
    >
        <img
            :src="project.image"
            :alt="project.title"
            class="project-image"
        >

        <div class="info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </div>

        <div class="buttons">
            <a :href="project.github" target="_blank">
                GitHub
            </a>

            <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
            >
                Demo
            </a>
        </div>
    </div>
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
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}
.project-card {
    display: flex;
    flex-direction: column;

    background: #2f2f2f;
    border-radius: 16px;

    overflow: hidden;

    transition: .25s ease;
}

.project-card:hover {
    transform: translateY(-6px);
}
.project-image {
    width: 100%;
    aspect-ratio: 16 / 9;

    object-fit: cover;

    background: #444;
}
.info {
    padding: 1.5rem;
    flex: 1;
}
.buttons {
    display: flex;
    gap: 1rem;

    padding: 1.5rem;
    padding-top: 0;
}

.buttons a {
    flex: 1;
    text-align: center;
}
@media (max-width: 800px) {

    .projects-grid {
        grid-template-columns: 1fr;
    }

}

</style>