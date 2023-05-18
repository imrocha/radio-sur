<template>
  <div id="fondo">
    <ProgramCarousel />
    <PostCard />
    <div class="media">
      <VideoPlayer/>
      <SpotifyCard /> 
    </div>
</div>
</template>

<script>
import ProgramCarousel from "./ProgramCarousel.vue";
import PostCard from "./PostCard.vue";
import VideoPlayer from "./VideoPlayer.vue";
import SpotifyCard from './SpotifyCard.vue';
export default {
  components: {
    ProgramCarousel,
    PostCard,
    VideoPlayer,
    SpotifyCard
  },
};
</script>

<style>
#fondo {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    196deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 16, 26, 1) 0%,
    rgba(0, 1, 35, 1) 40%,
    rgba(7, 7, 0, 1) 100%
  );
  height: 100%;
  width: 100%;
}


.media {
  margin-top: 2%;
  display: flex;
  justify-content: center;
  padding-bottom: 3%;
  }

  @media screen and (max-width: 854px) {
    .media {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>