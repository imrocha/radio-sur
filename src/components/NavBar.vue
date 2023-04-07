<template>
  <div>
    <b-navbar
      :toggleable="toggle"
      type="dark"
      :fixed="isFixed"
      :variant="navColor"
    >

    
      <div>
        <b-navbar-toggle target="nav-collapse" style="margin-left: 10px">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </b-navbar-toggle>
        <b-navbar-brand href="#" v-if="fix"><img src="../assets/sur.png" alt="radio-sur" class="sur"></b-navbar-brand>
      </div>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item>
            <p class="nav-menu">Streaming</p>
          </b-nav-item>
          <b-nav-item>
            <p class="nav-menu">Programación</p>
          </b-nav-item>
          <b-nav-item>
            <p class="nav-menu">Noticias</p>
          </b-nav-item>
          <b-nav-item>
            <p class="nav-menu">La Radio</p>
          </b-nav-item>
          <b-nav-item>
            <p class="nav-menu">Contacto</p>
          </b-nav-item>
          
          <b-nav-item href="#">
            <font-awesome-icon icon="fa-brands fa-facebook" size="2x" inverse />
          </b-nav-item>
          <b-nav-item href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" size="2x" inverse />
          </b-nav-item>
          <b-nav-item href="#">
            <font-awesome-icon icon="fa-brands fa-whatsapp" size="2x" inverse />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
components: {
  },

  name: "NavBar",
  data() {
    return {
      isFixed: null,
      toggle: "sm",
      navColor: "",
      fix: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      
      if (window.pageYOffset > window.innerHeight - 70) {
        this.isFixed = "top";
        this.fix = true;
        this.navColor = "black";
        this.toggle = "";
      } else {
        this.isFixed = null;
        this.fix = false;
        this.navColor = "";
        this.toggle = "sm";
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;600;500;400;300&display=swap');

.sur {
  width: 50%;
  height: 40%;
  margin-left: 5%;
  margin-bottom: 2%;
}

.nav-menu {
  font-family: 'Outfit', sans-serif;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 10px;
}

</style>