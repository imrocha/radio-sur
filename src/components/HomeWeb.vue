<template>
    <div>
      <LandingPage/>
      <FondoWeb/>
      <RadioFooter/>
    </div>
  </template>
  
  <script>
  import LandingPage from './LandingPage.vue';
  import FondoWeb from './FondoWeb.vue';
  import RadioFooter from './RadioFooter.vue';  
  
  export default {
    name: 'HomeWeb',
    components: {
      LandingPage,
      FondoWeb,
      RadioFooter
  
    }
  }
  </script>
  
  <style>
  </style>
  