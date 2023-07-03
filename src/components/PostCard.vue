<template>
  <div class="padre" v-if="noticia.destacada">
    <div class="base">
      <div class="descripcion">
        <p class="titulo">{{ noticia.titulo }}</p>
        <p class="texto">
          {{ noticia.subtitulo }}
        </p>
        <a v-if="!cargando" :href="noticia.link" class="verNota" target="_blank"
          >VER LA NOTA ></a
        >
      </div>
      <div class="marco">
        <img v-if="!cargando" class="foto" :src="noticia.foto" alt="" />
        <div v-else class="spinner">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
import "firebase/storage";
import config from "@/config";
let app = Firebase.initializeApp(config);
let db = app.database();
let storage = app.storage();
let storageRef = storage.ref();

export default {
  data() {
    return {
      noticia: {
        titulo: "",
        subtitulo: "",
        texto: "",
        foto: "",
        link: "",
        nombreFoto: "",
        destacada: true,
      },
      spotify: "",
      cargando: true,
    };
  },
  methods: {
    async obtenerNoticia() {
      try {
        const snapshot = await db.ref("nota").once("value");
        const noticias = snapshot.val();
        const noticiasDestacadas = Object.values(noticias).filter(
          (noticia) => noticia.destacada === "true"
        );
        console.log(noticiasDestacadas);
        if (noticiasDestacadas.length > 0) {
          const noticiaDestacada = noticiasDestacadas[0]; // Obtén la primera noticia destacada (puedes ajustar esto según tus necesidades)
          this.noticia.titulo = noticiaDestacada.titulo;
          this.noticia.subtitulo = noticiaDestacada.subtitulo;
          this.noticia.texto = noticiaDestacada.cuerpo;
          this.noticia.link = noticiaDestacada.link;
          this.noticia.nombreFoto = noticiaDestacada.nombreFoto;
          await this.obtenerImagenNoticia();
        } else {
          this.noticia.destacada = false;
        }
      } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario o realizar otra acción según su necesidad
      }
    },

    async obtenerImagenNoticia() {
      try {
        this.cargando = true;
        const res = await storageRef.child("imagenes/").listAll();
        const urls = await Promise.all(
          res.items.map((item) => item.getDownloadURL())
        );
        const url = urls.find((url) => url.includes(this.noticia.nombreFoto));
        this.noticia.foto = url;
        this.cargando = false;
      } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario o realizar otra acción según su necesidad
      }
    },
  },

  created() {
    this.obtenerNoticia();
  },
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
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");
.padre {
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
  height: 27vw;
  background-color: white;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
}

.descripcion {
  display: flex;
  flex-direction: column;
  /* width: 70%; */
  margin-right: 2%;
}

.titulo {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  color: #c8c544;
  font-size: 2.5vw;

  margin-top: 2%;
  margin-left: 3%;
  margin-bottom: 0;
}

.subtitulo {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  color: black;
  font-size: 2vw;
  margin-left: 3%;
  margin-bottom: 0;
}

.texto {
  font-family: "Outfit", sans-serif;
  font-weight: 300;
  color: black;
  font-size: 1.5vw;
  margin-left: 3%;
  margin-bottom: 0;
  margin-right: 3%;
}

.foto {
  width: 100%;
  height: 100%;
}

.marco {
  display: flex;
  align-items: center;
  width: 150em;
}

.verNota {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  text-align: end;
  color: #c8c544;
  font-size: 1.5vw;
  margin-top: 2%;
  margin-bottom: 1.5%;
  cursor: pointer;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
}

.spinner .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner .lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #ccc;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ccc transparent transparent transparent;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 1580px) {
  .texto {
    font-size: calc(1.5rem - ((100vw) / 10000));
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .titulo {
    font-size: 2rem;
  }
}
@media screen and (max-width: 1380px) {
  .texto {
    font-size: calc(1.5rem - ((100vw) / 10000));
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 1245px) {
  .texto {
    font-size: calc(1.5rem - ((100vw) / 10000));
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 1245px) {
  .titulo {
    font-size: 2.3vw;
  }
}

@media screen and (max-width: 1080px) {
  .texto {
    font-size: 1.5vw;
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .titulo {
    font-size: 2.5vw;
  }
}

@media screen and (max-width: 1000px) {
  .texto {
    font-size: 1.5vw;
    margin-left: 3%;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Aquí puedes cambiar la cantidad de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 854px) {
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

  .subtitulo {
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