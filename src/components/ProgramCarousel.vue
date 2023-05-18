<template>
  <div class="carrusel">
    <vueper-slides
      v-bind:visible-slides="cards"
      :slide-ratio="slideRatio"
      :dragging-distance="100"
      :arrows="false"
      :bullets="false"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data() {
    return {
      cards: 3,
      slideRatio: 1 / 6,
      slides: [
        {
          image: require("../assets/info.png"),
        },
        {
          image: require("../assets/puro-rock.png"),
        },
        {
          image: require("../assets/info.png"), // sarasa
        },
        {
          image: require("../assets/puro-rock.png"),
        },
        {
          image: require("../assets/info.png"),
        },
        {
          image: require("../assets/puro-rock.png"),
        },
        {
          image: require("../assets/info.png"),
        },
        {
          image: require("../assets/puro-rock.png"),
        },
      ],
    };
  },

  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.cards = 2;
        this.slideRatio = 1 / 4; // aspect ratio for medium screens
      } else {
        this.cards = 3;
        this.slideRatio = 1 / 6; // default aspect ratio for large screens
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // para inicializar el valor de `cards` en la carga inicial de la página
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style>
.carrusel {
  margin-bottom: 2%;
}

.vueper-slide img {
  max-width: 100%;
  max-height: 300px;
}
.programas {
  width: 100%;
  height: 100%;
}
</style>