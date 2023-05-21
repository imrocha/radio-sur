<template>
  <div class="noticias">
    <NavBarRepro />
    <div>
      <h1>Noticias</h1>
    </div>

    <div class="destacada">
      <PostCard />
    </div>
<div class="data">
    <div class="grilla">
        <GrillaDestacadaVue />
    </div>

    <div class="separador" style="margin-bottom: 2%; margin-top: 2%;"></div>

        <PostCardNoticiasVue />
        <PostCardNoticiasVue />
</div>
    

  </div>
</template>

<script>
import GrillaDestacadaVue from './GrillaDestacada.vue';
import NavBarRepro from "./NavBarRepro.vue";
import PostCard from "./PostCard.vue";
import PostCardNoticiasVue from './PostCardNoticias.vue';

export default {
  name: "NoticiasWeb",
  components: {
    NavBarRepro,
    PostCard,
    GrillaDestacadaVue,
    PostCardNoticiasVue,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

h1 {
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  color: #ffffff;
  font-size: 5vw;

  margin-top: 1%;
  margin-left: 10%;
  margin-bottom: 0;
}

.noticias {
  background: rgb(200,197,68);
background: linear-gradient(180deg, rgba(200,197,68,1) 10%, rgba(0,0,0,1) 32%);
  width: 100%;
  height: 100%;
}

.data {
  background: rgb(44, 43, 24);
  background: linear-gradient(
    30deg,
    rgba(44, 43, 24, 1) 0%,
    rgba(0, 0, 15, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: 100%;
}

.separador {
    margin-top: 4%;
    height: 1px;
    background-color: #C8C544;
    margin-left: 7%;
    margin-right: 7%;
}

@media(max-width: 767px) {
  h1 {
    font-size: 9vw;
    margin-left: 5%;
    margin-bottom: 2%;
  }
}


</style>