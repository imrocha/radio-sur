<template>
  <div class="d-md-flex flex-column" id="fondo">
    <br>
    <br>  
    <br>
    <LandingEslogan/>
    <RadioRepro/>
    
  </div>
</template>

<script>
import LandingEslogan from "./LandingEslogan.vue";
import RadioRepro from "./RadioRepro.vue";

export default {
  name: "LandingPage",
  components: {
    LandingEslogan,
    RadioRepro,

  }
};
</script>

<style>
#fondo {
  background-image: url("../assets/mic-grande.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}
</style>
