<script setup>
    import { ref } from 'vue'
    const title = ref("Sebastian Kramarz Portfolio")
    const podpis = ref("Strona wykonana bez użycia Sztucznej Inteligencji")

</script>

<template>
    <section>
        <h1>{{ title }}</h1>
        <h6>{{ podpis }}</h6>
    </section>
</template>

<style scoped>
    section
    {
        display:grid;
        justify-content: center;
        align-items: center;
        background-color: rgb(105, 181, 39);
        width: 60%;
        margin: auto;
        margin-top: 2em ;
        border-radius: 19px;
        transition: ease 0.6s;
        opacity: 90%;
    }
    h6{
        position: absolute;
        color: rgb(105, 181, 39);
        transition: ease 0.6s;
        z-index: -1;
    }
    section:hover{
        border-radius: 27px;
        width: 75%;
        transition: ease 0.6s;
    }
    section:hover h1{
        color:aqua;
        transition: ease 0.6s;

    }
    section:hover h6{
        transition: ease 0.6s;
        color:red;
        margin-left: 5em;

    }
</style>
