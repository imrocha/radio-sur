<template>
  <div id="app">
    <LandingPage/>
    <FondoWeb/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import FondoWeb from './components/FondoWeb.vue';


export default {
  name: 'App',
  components: {
    LandingPage,
    FondoWeb

  }
}
</script>

<style>
</style>
