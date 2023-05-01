<template>
  <div class="padre">
    <div class="base">
      <div class="descripcion">
        <p class="titulo">{{ noticia.titulo }}</p>
        <p class="subtitulo">{{ noticia.subtitulo }}</p>
        <p class="texto">
          {{noticia.texto}}
        </p>
        <a :href=noticia.link class="verNota" target="_blank">VER LA NOTA ></a>
      </div>
      <div class="marco">
        <img class="foto" :src=noticia.foto alt="" />
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
      },
      spotify: ""
    };
  },
  methods: {
  async obtenerNoticia() {
    try {
      const snapshot = await db.ref("nota").once("value");
      const noticias = snapshot.val();
      const noticia = noticias[Object.keys(noticias)[0]];
      this.noticia.titulo = noticia.titulo;
      this.noticia.subtitulo = noticia.subtitulo;
      this.noticia.texto = noticia.cuerpo;
      this.noticia.link = noticia.link;
      await this.obtenerImagenNoticia();
    } catch (error) {
      console.error(error);
      // Mostrar un mensaje de error al usuario o realizar otra acción según su necesidad
    }
  },

  async obtenerImagenNoticia() {
    try {
      const res = await storageRef.child("imagenes/").listAll();
      const url = await res.items[0].getDownloadURL();
      this.noticia.foto = url;
    } catch (error) {
      console.error(error);
      // Mostrar un mensaje de error al usuario o realizar otra acción según su necesidad
    }
  }
},

created() {
  this.obtenerNoticia();
}
};
</script>

<style>
 a, a:hover, a:focus, a:active {
      text-decoration: none !important;
      color: #c8c544;
 }
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;600;300&display=swap");
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
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  color: #c8c544;
  font-size: 3vw;
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
  font-size: 1.7vw;
  margin-left: 3%;
  margin-bottom: 0;
}

.foto {
  width: 100%;
  height: 100%;
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