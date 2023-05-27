<template>
  <div>
    <div class="contenedorColumna">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(nota, index) in notas" :key="index">
            <PostGrilla :img="`${nota.urlImagen}`" :gradientColor="gradientColors[index % gradientColors.length]" :titulo="`${nota.titulo}`"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostGrilla from "./PostGrilla.vue";
import Swiper, {Autoplay} from "swiper";
import Firebase from "firebase";
import "firebase/storage";
import config from "../../config";
let app = Firebase.initializeApp(config, "grilla");
let db = app.database();
let storage = app.storage();
let storageRef = storage.ref();

Swiper.use(Autoplay); 

export default {
  name: "GrillaDestacada",
  components: {
    PostGrilla,
  },
  data() {
    return {
      notas: [],
      gradientColors: [
        "linear-gradient(to right, rgba(207, 85, 108, 0.2) 78%, rgba(177, 42, 91, 0.2) 100%);",
        "linear-gradient(120deg, rgba(132, 250, 176, 0.2) 0%, rgba(143, 211, 244, 0.2) 100%);",
        "linear-gradient(to right, rgba(250, 112, 154, 0.2) 0%, rgba(254, 225, 64, 0.2) 100%);",
        "linear-gradient(to top, rgba(48, 207, 208, 0.2) 0%, rgba(51, 8, 103, 0.2) 100%);",
        "linear-gradient(to top, rgba(210, 153, 194, 0.2) 0%, rgba(254, 249, 215, 0.2) 100%);",
        "linear-gradient(to top, rgba(152, 144, 227, 0.2) 0%, rgba(177, 244, 207, 0.2) 100%);",
      ],
      swiper: null,

    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      if (this.swiper === null) {
        this.swiper = new Swiper(".swiper-container", {
          slidesPerView: "auto",
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loop: true,
          spaceBetween: 10,
          // Otras opciones de configuración de Swiper si las necesitas
        });

        this.swiper.update();
      }
    },

    async obtenerNoticia() {
      try {
        const snapshot = await db.ref("nota").get();
        const noticias = snapshot.val();
        const notas = Object.entries(noticias).map(([id, nota]) => {
          nota.id = id; // Agregar el hash ID al objeto nota
          return nota;
        });
        this.notas = notas;
        await this.obtenerImagenNoticia();
        console.log(this.notas);
      } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error al usuario o realizar otra acción según su necesidad
      }
    },

    async obtenerImagenNoticia() {
  try {
    const res = await storageRef.child("imagenes/").listAll();
    const urls = await Promise.all(res.items.map((item) => item.getDownloadURL()));

    this.notas = this.notas.map((nota) => {
      const imagenNota = nota.nombreFoto;
      const url = urls.find((url) => url.includes(imagenNota));
      return {
        ...nota,
        urlImagen: url ? url : '',
      };
    });
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

<style scoped>
@import "swiper/swiper-bundle.css";

/* Estilos adicionales */

.contenedorColumna {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  justify-content: center;
  margin-top: 2%;
}

.fila1,
.fila2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3%;
  align-items: center;
  align-content: center;
}

.swiper-container {
  width: 100%;
  overflow: hidden; /* Evita el desbordamiento horizontal */
}

.swiper-slide {
  width: auto; /* Ajusta el ancho de las imágenes según el contenido */
}
</style>
