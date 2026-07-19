<script setup>
import { ref } from 'vue'

import jsIcon from '@/assets/icons/javascript.svg'
import pythonIcon from '@/assets/icons/python.svg'
import cppIcon from '@/assets/icons/cpp.svg'
import csharpIcon from '@/assets/icons/csharp.svg'
import phpIcon from '@/assets/icons/php.svg'
import sqlIcon from '@/assets/icons/sql.svg'
import htmlIcon from '@/assets/icons/html.svg'
import cssIcon from '@/assets/icons/css.svg'
import reactIcon from '@/assets/icons/react.svg'
import vueIcon from '@/assets/icons/vue.svg'
import mlIcon from '@/assets/icons/ai.svg'

//{id: ,name: , level: ,} template
const languages = ref([
    { id: 1, name: "JavaScript", icon: jsIcon, level: "Średnio zaawansowany" },
    { id: 2, name: "Python", icon: pythonIcon, level: "Średnio zaawansowany" },
    { id: 3, name: "C++", icon: cppIcon, level: "Podstawy" },
    { id: 4, name: "C#", icon: csharpIcon, level: "Podstawy" },
    { id: 5, name: "PHP", icon: phpIcon, level: "Podstawy" },
    { id: 6, name: "SQL", icon: sqlIcon, level: "Średnio zaawansowany" },
    { id: 7, name: "HTML", icon: htmlIcon, level: "Zaawansowany" },
    { id: 8, name: "CSS", icon: cssIcon, level: "Średnio zaawansowany" },
    { id: 9, name: "React", icon: reactIcon, level: "Podstawy" },
    { id: 10, name: "Vue", icon: vueIcon, level: "Średnio zaawansowany" },
    { id: 11, name: "Machine Learning", icon: mlIcon, level: "Podstawy" },
])
</script>
<template>
    <section>
        <h2>Technologie i języki, z których korzystam</h2>
        <ul>
            <li v-for="lang in languages" :key="lang.id">
                <img :src="lang.icon" :alt="lang.name" class="icon" />
                <div class="content">
                    <span class="name">{{ lang.name }}</span>
                    <span class="level">{{ lang.level }}</span>
                </div>
            </li>
        </ul>
    </section>
</template>
<style scoped>
section {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 2rem;
    width: 80%;
    max-width: 1100px;
    padding: 2rem;
    background: #3f3f3f;
    border-radius: 16px;
}

h2 {
    margin: 0;
    color: #42b883;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: .5px;
}

ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    padding: 0;
    margin-top: 1.5rem;
}
li {
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .45rem .9rem;
    background: #2b2b2b;
    color: white;
    border: 1px solid #42b883;
    border-radius: 999px;
    font-size: .9rem;
    font-weight: 500;
    transition: .2s ease;
}

li:hover {
    background: #42b883;
    color: #1f1f1f;
    transform: translateY(-2px);
}

.icon {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
}

.content {
    display: flex;
    flex-direction: column;
}

.name {
    font-weight: 600;
}

.level {
    font-size: .75rem;
    opacity: .75;
}
</style>