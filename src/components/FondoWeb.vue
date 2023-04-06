<template>
    <div id="fondo">
        <ProgramCarousel/>
    </div>
  </template>

<script>
import ProgramCarousel from './ProgramCarousel.vue';
export default {
    components: {
        ProgramCarousel,
    }
}
</script>

<style>
#fondo {
    background-color: black;
    background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: 0;
}
</style>