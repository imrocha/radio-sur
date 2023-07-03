<template>
  <div class="fondo">
    <NavBarRepro />
    <div class="contenedor">
      <!-- <div class="categoria">
        <h3>Categoria</h3>
      </div> -->
      <div class="tituloLectura">
        {{ noticia.titulo }}
      </div>
      <div class="fecha">{{ noticia.fecha }}</div>
      <div class="cuerpo">
        {{ noticia.subtitulo }}
      </div>
    </div>

    <div v-if="!cargando" class="contenedorFoto">
      <img class="fotoLectura" :src="noticia.foto" alt="" />
    </div>
    <div v-else class="spinner">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="contenedor">
      <div class="cuerpo">
        {{ noticia.texto }}
      </div>

      <div class="link" v-if="!existeLink">
          <a :href=noticia.link ><u>Leer noticia</u></a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRepro from "./NavBarRepro.vue";
import Firebase from "firebase";
import "firebase/storage";
import config from "../../config";
let app = Firebase.initializeApp(config, "leer");
let db = app.database();
let storage = app.storage();
let storageRef = storage.ref();

export default {
  name: "LeerNoticia",
  data() {
    return {
      noticia: {
        titulo: "",
        texto: "",
        subtitulo: "",
        fecha: "",
        foto: "",
        link: "",
        nombreFoto: "",
      },
      cargando: true,
      existeLink: false,

    };
  },
  components: {
    NavBarRepro,
  },



  methods: {
    async obtenerNoticia() {
    const notaId  = this.$route.params.id;
      await db.ref('nota/' + notaId).once('value')
      .then((snapshot) => {
        const nota = snapshot.val();
        this.noticia.titulo = nota.titulo;
        this.noticia.subtitulo = nota.subtitulo;
        this.noticia.texto = nota.cuerpo;
        this.noticia.link = nota.link;
        this.noticia.nombreFoto = nota.nombreFoto;
        this.noticia.fecha = nota.fecha;
        this.obtenerImagenNoticia();
      })
      .catch((error) => {
        console.log(error);
      });
    },

    async obtenerImagenNoticia() {
      try {
        this.cargando = true;

        const res = await storageRef.child("imagenes/").listAll();
        const urls = await Promise.all(res.items.map((item) => item.getDownloadURL()));
        const url = urls.find((url) => url.includes(this.noticia.nombreFoto));
        this.noticia.foto = url;
        this.cargando = false;

      } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario o realizar otra acción según su necesidad
      }
    },

    existelink() {
      if (this.noticia.link == "") {
        this.existeLink = false;
      } else {
        this.existeLink = true;
      }
    },
    
  },

  created() {
    this.obtenerNoticia();
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

.link {
  font-family: "Outfit", sans-serif;
  font-weight: 300;
  color: #c8c544;
  font-size: 1.5rem;
  margin-top: 2%;
}

.contenedor {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
}

.fondo {
  display: table-header-group;
  background: rgb(44, 43, 24);
  background: linear-gradient(
    30deg,
    rgba(44, 43, 24, 1) 0%,
    rgba(0, 0, 15, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );
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
  width: 40%;
  height: 20%;
  border-radius: 1rem;
}

.contenedorFoto {
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
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
