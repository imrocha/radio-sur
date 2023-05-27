<template>
  <div class="fondo">
    <NavBarRepro />
    <div class="contenedor">
      <div class="categoria">
        <h3>Categoria</h3>
      </div>
      <div class="tituloLectura">
        Noelia Sinkunas se quedo con dos premios gardel
      </div>
      <div class="fecha">MES DIA AÑO</div>
      <div class="cuerpo">
        ¡Qué semana arrancamos ¡ Ganó argentina, el pueblo argentino llora de
        felicidad , se viene Navidad.¡Qué semana arrancamos ¡ Ganó argentina, el
        pueblo argentino llora de felicidad , se viene Navidad.
      </div>
    </div>

    <div class="contenedorFoto">
      <img class="fotoLectura" src="../../assets/frio.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import NavBarRepro from "./NavBarRepro.vue";

export default {
  name: "LeerNoticia",
  components: {
    NavBarRepro,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

h1 {
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  color: #ffffff;
  font-size: 5vw;

  margin-top: 1%;
  margin-left: 10%;
  margin-bottom: 0;
}

h3 {
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  color: #ffffff;
  font-size: 2rem;
  margin-top: 5%;
  margin-bottom: 5%;
}

.contenedor {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
}

.fondo {
  background: rgb(44, 43, 24);
  background: linear-gradient(
    30deg,
    rgba(44, 43, 24, 1) 0%,
    rgba(0, 0, 15, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: 100%;
}

.categoria {
  background-color: #c8c544;
  border-radius: 2rem;
  padding-left: 2%;
  padding-right: 2%;
  display: inline-flex;
  margin-bottom: 1%;
}

.tituloLectura {
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  color: white;
  font-size: 3rem;
  margin: 0;
}

.fecha {
  font-family: "Outfit", sans-serif;
  font-weight: 200;
  color: #c8c544;
  font-size: 1.5rem;
  margin: 0;
}

.cuerpo {
  font-family: "Outfit", sans-serif;
  font-weight: 300;
  color: white;
  font-size: 1.8rem;
}

.fotoLectura {
  width: 70%;
  height: 50%;
  border-radius: 1rem;
  margin-bottom: 2%;
}

.contenedorFoto {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 752px) {
  h3 {
    font-size: 1.5rem;
  }

  .tituloLectura {
    font-size: 2.3rem;
    line-height: normal;
    margin-bottom: inherit;
}

.fecha {
    font-size: 1.1rem;
    margin-bottom: inherit;
}

.fotoLectura {
  width: 90%;
  border-radius: 0;
}
  .cuerpo {
    font-size: 1.3rem;
  }
}
</style>
