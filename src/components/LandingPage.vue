<template>
  <div class="d-md-flex flex-column" id="fondo1">
    <NavBar/>
    <LandingEslogan/>
    <RadioRepro/>
    
  </div>
</template>

<script>
import LandingEslogan from "./LandingEslogan.vue";
import RadioRepro from "./RadioRepro.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "LandingPage",
  components: {
    LandingEslogan,
    RadioRepro,
    NavBar

  }
};
</script>

<style>
#fondo1 {
  background-image: url("../assets/mic-grande.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}
</style>
