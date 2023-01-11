<template>
  <div>
  <b-navbar toggleable="sm" type="dark" >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="#"> <font-awesome-icon icon="fa-brands fa-facebook" size="2x" inverse/> </b-nav-item>
        <b-nav-item href="#"> <font-awesome-icon icon="fa-brands fa-twitter" size="2x" inverse/> </b-nav-item>
        <b-nav-item href="#"> <font-awesome-icon icon="fa-brands fa-whatsapp" size="2x" inverse/> </b-nav-item>
        
      </b-navbar-nav>

     
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
    name: "NavBar",
    components: {
    },
}
</script>

<style>

</style>