<template>
  <div id="footer">
    <div id="footer-info">
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

      <div class="mapa">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Radio Sur&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            ><a href="https://2yu.co">2yu</a><br /><a
              href="https://embedgooglemap.2yu.co/"
              >html embed google map</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;600;300&display=swap");

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
#footer {
  background: rgb(3, 3, 0);
  height: 100%;
  width: 100%;
}

#footer-info {
  display: flex;
  height: 100%;
  width: 100%;
}

#la-radio {
  margin-right: 8%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 30vw;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}
</style>