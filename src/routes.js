// import HomeWeb from "./components/HomeWeb.vue";
// import NoticiasWeb from "./components/Noticias/NoticiasWeb.vue";
// import LeerNoticia from "./components/Noticias/LeerNoticia.vue"

// export default [
//     { path: "/", component: HomeWeb, name:"HomeWeb" },
//     { path: "/noticias", component: NoticiasWeb, name:"NoticiasWeb" },
//     { path: "/noticia/:id", component: LeerNoticia, name:"LeerNoticia"},
//   ]
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'HomeWeb',
      component: () => import(/* webpackChunkName: "HomeWeb" */ './components/HomeWeb.vue')
    },
    {
      path: '/noticias',
      name: 'NoticiasWeb',
      component: () => import(/* webpackChunkName: "NoticiasWeb" */ './components/Noticias/NoticiasWeb.vue')
    },
    {
      path: '/noticias/:id',
      name: 'LeerNoticia',
      component: () => import(/* webpackChunkName: "LeerNoticia" */ './components/Noticias/LeerNoticia.vue')
    }
  ]

  const router = new VueRouter({
    routes
  })
  
  export default router