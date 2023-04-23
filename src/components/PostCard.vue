<template>
  <div class="padre">
  <div class="base">
    <div class="descripcion">
      <p class="titulo">TEMPORADA CAPRICORNIO Y UNA NAVIDAD.</p>
      <p class="subtitulo">Horoscopo en un minuto con Mauro.</p>
      <p class="texto">
        ¡Qué semana arrancamos ¡ Ganó argentina, el pueblo argentino llora de felicidad , se viene Navidad. Independientemente de las energías se festeja a pesar de todo. Dato de color: Las energías de los astros siempre estuvieron de nuestro lado.
      </p>
      <p class="verNota">VER LA NOTA ></p>
    </div>
    <div class="marco">
      <img class="foto" src="../assets/horoscopo.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;600;300&display=swap');
.padre {
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.base {
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 28vw;
  background-color: white;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);

}

.descripcion {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-right: 2%;
}

.titulo {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: #C8C544;
  font-size: 3vw;
  margin-top: 2%;
  margin-left: 3%;
  margin-bottom: 0;
}

.subtitulo {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  color: black;
  font-size: 2vw;
  margin-left: 3%;
  margin-bottom: 0;
}

.texto {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  color: black;
  font-size: 1.7vw;
  margin-left: 3%;
  margin-bottom: 0;
}


.foto {
  width: 100%;
  height: 100%;
}

.verNota {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  text-align: end;
  color: #C8C544;
  font-size: 1.5vw;
  margin-top: 2%;
  margin-bottom: 1.5%;
  cursor: pointer;
}

@media screen and (max-width: 768px) {

  .base {
    border-radius: 10px;
    flex-direction: column;
    height: auto;
    width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .descripcion {
    margin-right: 0;
    width: 100%;
  }

  .foto {
    display: none;
  }

  .verNota {
    text-align: end;
    margin-right: 3%;
  }
  
  .titulo {
    font-size: 1rem;
  }

  .subtitulo{
    font-size: 0.8rem;
  }

  .texto {
    font-size: 0.7rem;
  }


 .verNota {
    font-size: 0.7rem;
 }
}
</style>