import HomeWeb from "./components/HomeWeb.vue";
import NoticiasWeb from "./components/Noticias/NoticiasWeb.vue";
import LeerNoticia from "./components/Noticias/LeerNoticia.vue"

export default [
    { path: "/", component: HomeWeb },
    { path: "/noticias", component: NoticiasWeb },
    { path: "/noticias/leer", component: LeerNoticia},
  ]
