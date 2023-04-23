<template>
  <div>
    <div
      class="text-center d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-xl-center"
    >
      <h1
        class="fw-semibold text-end flex-row align-self-start order-first eslogan"
        id="eslogan"
      >
        &nbsp; LA VES<br />LA SENTIS<br />LA ESCUCHAS<br />
      </h1>
    </div>

    <div
      class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center align-items-xxl-center"
      style="margin: 1vh"
    >
      <img src="../assets/logo-sur.png" class="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingEslogan",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit&display=swap");
#eslogan {
  position: sticky;
  color: #c8c544;
  font-family: Outfit;
  display: inline-grid;
  font-size: calc(0.5rem + 5vw);
  transform: perspective(0px) translate(0px) skew(0deg);
  margin-right: 5.5em;
  line-height: calc(1rem + 4vw);
  letter-spacing: 0.2vw;
  background: linear-gradient(to bottom, #c8c544 55%, #5a5906 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo {
  width: calc(1em + 14vw);
  font-size: 5px;
  margin-right: calc(1em + 23vw);
}

@media (max-width: 768px) {
  #eslogan {
    font-size: calc(0.8rem + 5vw);
    margin-top: 10%;
    margin-right: 3.5em;
    margin-left: 0.5%;
    line-height: calc(1rem + 4vw);
    letter-spacing: 0.2vw;
  }
  
  .logo {
    display: none;
  }
}

@media (max-width: 920px) {
  .logo{
    display: none;
  }
}
</style>