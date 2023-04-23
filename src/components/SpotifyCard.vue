<template>
  <div>
    <iframe
    class="spotify"
      src="https://open.spotify.com/embed/playlist/37i9dQZF1EQqedj0y9Uwvu?utm_source=generator&theme=0"
      frameBorder="0"
      height="100%"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>
  
  <script>
export default {
  name: "SpotifyCard",
};
</script>

<style>
.spotify {
  height: 100%;
  width: 95%;
  margin-left: 10%;
}
@media screen and (max-width: 768px) {
.spotify {
  height: 68vh;
  width: 90vw;
  margin-left: 0%;
  margin-top: 4%;

}
}
</style>