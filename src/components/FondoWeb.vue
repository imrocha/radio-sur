<template>
  <div id="fondo">
    <ProgramCarousel />
    <PostCard />
  </div>
</template>

<script>
import ProgramCarousel from "./ProgramCarousel.vue";
import PostCard from "./PostCard.vue";
export default {
  components: {
    ProgramCarousel,
    PostCard
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
  height: 100vh;
  width: 100%;
}

.prueba {
  height: 400px;
  width: 400px;
}
</style>