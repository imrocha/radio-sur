<template>
  <div class="d-md-flex flex-column" id="fondo">
    <div
      class="d-flex flex-column flex-grow-0 align-items-center align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center justify-content-xxl-start align-items-xxl-center"
      style="background-attachment: inherit"
    >
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style>
#fondo {
  background-image: url("../assets/mic-grande.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
