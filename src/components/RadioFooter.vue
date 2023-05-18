<template>
  <div id="footer">
    <div id="footer-info">
      <div id="logo">
        <img id="sur" src="../assets/logosur2.png" alt="radio-sur">
      </div>
      <div id="la-radio">
        <h4>LA RADIO</h4>
        <p class="paginas">Streaming</p>
        <p class="paginas">Programacion</p>
        <p class="paginas">Ranking</p>
        <p class="paginas">Noticias</p>
        <p class="paginas">Acerca de nosotros</p>
      </div>

      <div id="contacto">
        <h4>CONTACTO</h4>
        <p class="info">Telefono</p>
        <p class="info">Email</p>
        <p class="info">Dirección</p>
      </div>
    </div>
    <div id="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.6693936708148!2d-57.894649923459696!3d-34.86453357132055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e4484a0dde79%3A0x45094030d84695d5!2sRadio%20Sur%20105.1!5e0!3m2!1ses!2sar!4v1683478485900!5m2!1ses!2sar"
          style="border: 0"
          class="google-maps"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

h4 {
  color: white;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
}
p {
  color: white;
  margin-bottom: 8%;
  padding: 0;
  font-family: "Outfit", sans-serif;
  font-weight: 400;
}

#logo {
  width: min-content;
  margin-right: 5%;
}

#sur {
  width: 15rem;
  height: 15rem;
}

#footer {
  display: flex;
  background: rgb(3, 3, 0);
  height: 100%;
  width: 100%;
}

.google-maps {
  width: 25vw;
  height: 20vh;
}

#mapa {
margin: 2% 5% 0 3%;

}

#footer-info {
  margin:2% 0 0 3%;
  display: flex;
  height: 100%;
  width: 100%;
}

#la-radio {
  margin-right: 8%;
}

@media screen and (max-width: 854px) {
  #logo {
    display: none;
  }

  #footer {
    flex-direction: column;
  }
  #footer-info {
    flex-direction: column;
    width: 90vw;
    margin:2% 0 0 3%;

  }
  #mapa {
    margin: 2% 5% 0 3%;
  }
  #la-radio {
    margin-right: 0;
  }
  .google-maps {
    width: 100%;
    height: 20vh;
  }

  #footer-info {
    margin-bottom: 5%;
  }
  #mapa {
    margin-bottom: 5%;
  }
  #la-radio {
    margin-bottom: 5%;
  }

}
</style>