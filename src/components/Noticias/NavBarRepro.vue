<template>
  <div>
    <b-navbar
      :toggleable="toggle"
      type="dark"
      :fixed="isFixed"
      :variant="navColor"
    >
      <div>
        <b-navbar-toggle
          target="nav-collapse"
          style="margin-left: 10px; border: 0"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
            style="color: #ffffff"
            size="lg"
          />
        </b-navbar-toggle>
        <b-navbar-brand href="#" v-if="fix">
          <router-link :to="{ name: 'HomeWeb' }">
            <img
              src="../../assets/sur.png"
              alt="radio-sur"
              class="sur"
            /> </router-link
        ></b-navbar-brand>
      </div>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto items">
          <div v-if="fix" class="paginas">
            <!-- <b-nav-item class="nav-item" style="margin-top: 2%">
                <p class="nav-menu">Streaming</p>
              </b-nav-item>
              <b-nav-item class="nav-item">
                <p class="nav-menu">Programación</p>
              </b-nav-item> -->
            <b-nav-item class="nav-item">
              <p class="nav-menu">Noticias</p>
            </b-nav-item>
            <b-nav-item class="nav-item">
              <p class="nav-menu">La Radio</p>
            </b-nav-item>
            <b-nav-item class="nav-item">
              <p class="nav-menu">Contacto</p>
            </b-nav-item>
          </div>
          <div class="borde" v-if="fix"></div>
          <div class="redes">
            <b-nav-item href="#">
              <font-awesome-icon
                icon="fa-brands fa-facebook"
                size="2x"
                inverse
                :class="{ 'social-icon': fix }"
              />
            </b-nav-item>
            <b-nav-item href="#">
              <font-awesome-icon
                icon="fa-brands fa-twitter"
                size="2x"
                inverse
                :class="{ 'social-icon': fix }"
              />
            </b-nav-item>
            <b-nav-item href="#">
              <font-awesome-icon
                icon="fa-brands fa-whatsapp"
                size="2x"
                inverse
                :class="{ 'social-icon': fix }"
              />
            </b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
  
  <script>
export default {
  components: {},

  name: "NavBarRepro",
  data() {
    return {
      isFixed: null,
      toggle: "",
      navColor: "black",
      fix: true,
    };
  },
};
</script>
  
  <style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

.sur {
  width: 50%;
  height: 40%;
  margin-left: 5%;
  margin-bottom: 2%;
}

.nav-menu {
  font-family: "Outfit", sans-serif;
  margin: 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-link {
  padding: 0;
  margin-bottom: 1%;
  margin-left: 3%;
}

.items {
  display: flex;
  flex-direction: column;
}

.paginas {
  display: flex;
  flex-direction: column;
}

.redes {
  display: flex;
  flex-direction: row;
  margin-left: 3%;
  margin-top: 1%;
}

.borde {
  border-style: solid;
  border-width: 0.2px;
  border-color: white;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 1%;
}

.social-icon {
  margin-right: 3vw;
}
</style>