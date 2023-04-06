<template>
  <div id="fondo">
    <ProgramCarousel />
    <div class="prueba"></div>
  </div>
</template>

<script>
import ProgramCarousel from "./ProgramCarousel.vue";
export default {
  components: {
    ProgramCarousel,
  },
};
</script>

<style>
#fondo {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    196deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 16, 26, 1) 0%,
    rgba(0, 1, 35, 1) 40%,
    rgba(7, 7, 0, 1) 100%
  );
}

.prueba {
  height: 400px;
  width: 400px;
}
</style>