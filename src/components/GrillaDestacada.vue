<template>
  <div>
    <div class="contenedorColumna">
      <div class="fila1">
        <div class="elemento" v-bind:style="{ 'background-color': backgroundColor1 }"></div>
        <div class="elemento" v-bind:style="{ 'background-color': backgroundColor2 }"></div>
        <div class="elemento" v-bind:style="{ 'background-color': backgroundColor3 }"></div>
      </div>

      <div class="fila2">
        <div class="elemento" v-bind:style="{ 'background-color': backgroundColor4 }"></div>
        <div class="elemento" v-bind:style="{ 'background-color': backgroundColor5 }"></div>
        <div class="elemento" v-bind:style="{ 'background-color': backgroundColor6 }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrillaDestacada",
  data() {
    return {
      backgroundColor1: "blue",
      backgroundColor2: "green",
      backgroundColor3: "red",
      backgroundColor4: "yellow",
      backgroundColor5: "orange",
      backgroundColor6: "purple",
    };
  },
};
</script>

<style scoped>
.contenedorColumna {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  width: 100%;
}

.fila1,
.fila2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 3%;
}

.elemento {
  width: 50vw;
  height: 20vh;
  margin-left: 5%;
  margin-right: 5%;
}

@media (max-width: 767px) {
  /* Breakpoint para celulares */
  .fila1,
  .fila2 {
    flex-direction: column;
  }
  .elemento {
    width: 90vw;
    margin: 2% 0;
  }
}
</style>
