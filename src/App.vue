<template>
  <div id="app">
    <LandingPage/>
    <FondoWeb/>
    <RadioFooter/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import FondoWeb from './components/FondoWeb.vue';
import RadioFooter from './components/RadioFooter.vue';


export default {
  name: 'App',
  components: {
    LandingPage,
    FondoWeb,
    RadioFooter

  }
}
</script>

<style>
</style>
