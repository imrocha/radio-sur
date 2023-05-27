<template>
  <div class="padreNoticias">
    <div class="baseNoticias">
      <div class="marcoNoticias">
        <img class="fotoNoticias" src="../../assets/horoscopo.jpg" alt="" />
      </div>
      <div class="descripcionNoticias">
        <p class="tituloNoticias">
          Noelia Sinkunas se quedo con dos premios gardel
        </p>
        <p class="textoNoticias">
          ¡Qué semana arrancamos ¡ Ganó argentina, el pueblo argentino llora de
          felicidad , se viene Navidad.¡Qué semana arrancamos ¡ Ganó argentina,
          el pueblo argentino llora de felicidad , se viene Navidad.
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
  
  <style>
a,
a:hover,
a:focus,
a:active {
  text-decoration: none !important;
  color: #c8c544;
}
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
.padreNoticias {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2%;
}

.baseNoticias {
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 18vw;
  background-color: black;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
}

.descripcionNoticias {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-right: 2%;
    justify-content: center;
}

.tituloNoticias {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  background: linear-gradient(to bottom, #5A5906, #C8C544);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
  font-size: 2vw;

  margin-top: 2%;
  margin-left: 3%;
  margin-bottom: 0;
}

.subtituloNoticias {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  color: black;
  font-size: 2vw;
  margin-left: 3%;
  margin-bottom: 0;
}

.textoNoticias {
  font-family: "Outfit", sans-serif;
    font-weight: 200;
  color: white;
  font-size: 1.5vw;
  margin-left: 3%;
  margin-right: 3%;

  margin-bottom: 2%;
}

.fotoNoticias {
  width: 100%;
  height: 100%;
}

.verNotaNoticias {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  text-align: end;
  color: #c8c544;
  font-size: 1.5vw;
  margin-top: 2%;
  margin-bottom: 1.5%;
  cursor: pointer;
}

@media screen and (max-width: 1580px) {
  .textoNoticias {
    font-size: calc(1.5rem - ((100vw) / 10000));
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  margin-bottom: 2%;
  }
  .tituloNoticias {
    font-size: 2rem;
  }
}

@media screen and (max-width: 1499px) {

  .tituloNoticias {
    font-size: 1.9rem;
  }
}

@media screen and (max-width: 1380px) {
  .textoNoticias {
    font-size: calc(1.4rem - ((100vw) / 10000));
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  margin-bottom: 2%;
  }
}

@media screen and (max-width: 1245px) {
  .textoNoticias {
    font-size: calc(1.3rem - ((100vw) / 10000));
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  margin-bottom: 2%;
  }
}

@media screen and (max-width: 1245px) {
  .tituloNoticias {
    font-size: 2.3vw;
  }
}

@media screen and (max-width: 1080px) {
  .textoNoticias {
    font-size: 1.45vw;
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  margin-bottom: 2%;
  }

  .tituloNoticias {
    font-size: 2.5vw;
  }
}

@media screen and (max-width: 1000px) {
  .textoNoticias {
    font-size: 1.5vw;
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  margin-bottom: 2%;
  }
}

@media screen and (max-width: 854px) {
  .baseNoticias {
    border-radius: 10px;
    flex-direction: column;
    height: auto;
    width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .descripcionNoticias {
    margin-right: 0;
    width: 100%;
  }


  .verNotaNoticias {
    text-align: end;
    margin-right: 3%;
  }

  .tituloNoticias {
    font-size: 1rem;
  }

  .fotoNoticias {
    display: none;
  }

  .subtituloNoticias {
    font-size: 0.8rem;
  }

  .textoNoticias {
    font-size: 0.7rem;
  }

  .verNotaNoticias {
    font-size: 0.7rem;
  }
}
</style>