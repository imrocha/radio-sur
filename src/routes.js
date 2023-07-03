import HomeWeb from "./components/HomeWeb.vue";
import NoticiasWeb from "./components/Noticias/NoticiasWeb.vue";
import LeerNoticia from "./components/Noticias/LeerNoticia.vue"

export default [
    { path: "/", component: HomeWeb, name:"HomeWeb" },
    { path: "/noticias", component: NoticiasWeb, name:"NoticiasWeb" },
    { path: "/noticia/:id", component: LeerNoticia, name:"LeerNoticia"},
  ]
