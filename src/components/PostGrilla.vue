<template>
  <div>
    <div class="elemento">
      <div class="gradiente" :style="`background-image: ${gradientColor}`"></div>
      <img class="imgNotas" :src="img" alt="" />
      <div class="texto">
        <h2>Lorem ipsum</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostGrilla",
  props: {
    gradientColor: {
      type: String,
      default: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));",
    },
    img: {
      type: String,
    },
  },
  data() {
    return {};
  },

  mounted() {
    console.log(this.img);
  },
};
</script>

<style scoped>
.imgNotas {
  height: 100%;
  object-fit: cover;
}

.elemento {
  position: relative; /* Necesario para el gradiente */
  width: 100%;
  height: 18vw;
}

.gradiente {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.texto {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: left;
  color: white;
}

.texto h2 {
  font-size: 2vw;
  margin-bottom: 8px;
}

@media (max-width: 767px) {
  .elemento {
    height: 23vh;
    margin: 5%;
  }

  h2 {
    font-size: 3vw;
  }
}
</style>
