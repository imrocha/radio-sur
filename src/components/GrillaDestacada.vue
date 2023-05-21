<template>
  <div>
    <div class="contenedorColumna">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <PostGrilla
              gradientColor="linear-gradient(to right, rgba(207, 85, 108, 0.2) 78%, rgba(177, 42, 91, 0.2) 100%);"
              :img="fondo"
            />
          </div>
          <div class="swiper-slide">
            <PostGrilla
              gradientColor="linear-gradient(120deg, rgba(132, 250, 176, 0.2) 0%, rgba(143, 211, 244, 0.2) 100%);"
              :img="fondo2"
            />
          </div>
          <div class="swiper-slide">
            <PostGrilla
              gradientColor="linear-gradient(to right, rgba(250, 112, 154, 0.2) 0%, rgba(254, 225, 64, 0.2) 100%);"
              :img="fondo3"
            />
          </div>
          <div class="swiper-slide">
            <PostGrilla
              gradientColor="linear-gradient(to top, rgba(48, 207, 208, 0.2) 0%, rgba(51, 8, 103, 0.2) 100%);"
              :img="fondo4"
            />
          </div>
          <div class="swiper-slide">
            <PostGrilla
              gradientColor="linear-gradient(to top, rgba(210, 153, 194, 0.2) 0%, rgba(254, 249, 215, 0.2) 100%);"
              :img="fondo5"
            />
          </div>
          <div class="swiper-slide">
            <PostGrilla
              gradientColor="linear-gradient(to top, rgba(152, 144, 227, 0.2) 0%, rgba(177, 244, 207, 0.2) 100%);"
              :img="fondo6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostGrilla from "./PostGrilla.vue";
import Swiper, {Autoplay} from "swiper";
import bili from "../assets/bili.jpeg";
import bunny from "../assets/bunny.jpeg";
import frances from "../assets/frances.jpg";
import maluma from "../assets/maluma.png";
import shakira from "../assets/shakira.png";
import rosalia from "../assets/rosalia.jpg";
Swiper.use(Autoplay); 

export default {
  name: "GrillaDestacada",
  components: {
    PostGrilla,
  },
  data() {
    return {
      swiper: null,
      fondo: bili,
      fondo2: bunny,
      fondo3: frances,
      fondo4: maluma,
      fondo5: shakira,
      fondo6: rosalia,
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      if (this.swiper === null) {
        this.swiper = new Swiper(".swiper-container", {
          slidesPerView: "auto",
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loop: true,
          spaceBetween: 10,
          // Otras opciones de configuración de Swiper si las necesitas
        });

        this.swiper.update();
      }
    },
  },
};
</script>

<style scoped>
@import "swiper/swiper-bundle.css";

/* Estilos adicionales */

.contenedorColumna {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  justify-content: center;
  margin-top: 2%;
}

.fila1,
.fila2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3%;
  align-items: center;
  align-content: center;
}

.swiper-container {
  width: 100%;
  overflow: hidden; /* Evita el desbordamiento horizontal */
}

.swiper-slide {
  width: auto; /* Ajusta el ancho de las imágenes según el contenido */
}
</style>
