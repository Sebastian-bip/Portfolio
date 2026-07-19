<script setup>
import Certikats from './components/Certikats.vue'
import Header from './components/Header.vue'
import Languages from './components/Languages.vue'
import SKInfo from './components/SK-info.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <!-- <Header /> -->

  <SKInfo class="fade delay-1" />

  <Languages class="fade delay-2" />

  <Certikats class="fade delay-3" />

  <Footer class="fade delay-4" />

</template>

<style scoped>

.fade{
    opacity:0;
    transform:translateY(30px);

    animation:fadeUp .7s cubic-bezier(.16,1,.3,1) forwards;
}

.delay-1{
    animation-delay:.2s;
}

.delay-2{
    animation-delay:.45s;
}

.delay-3{
    animation-delay:.7s;
}

.delay-4{
    animation-delay:.95s;
}

@keyframes fadeUp{

    from{
        opacity:0;
        transform:translateY(30px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

</style>