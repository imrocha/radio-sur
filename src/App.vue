<template>
  <div id="app">
    <NavBar/>
    <LandingEslogan/>
    <RadioRepro/>
    <LandingPage/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import NavBar from './components/NavBar.vue'
import LandingEslogan from "./components/LandingEslogan.vue";
import RadioRepro from './components/RadioRepro.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    LandingPage,
    LandingEslogan,
    RadioRepro

  }
}
</script>

<style>
</style>
