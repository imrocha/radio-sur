<template>
  <div>
    <iframe
    class="spotify"
      :src=link
      frameBorder="0"
      height="100%"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>
  
  <script>

import Firebase from "firebase";
import "firebase/storage";
import config from "@/config";
let appSpot = Firebase.initializeApp(config, 'spot');
let db = appSpot.database();

export default {
  name: "SpotifyCard",

  data() {
    return {
      link: '',
    }
  },

  methods: {
    async obtenerPlaylist() {
      try {
        const snapshot = await db.ref("musica").once("value");
      const playlist = snapshot.val();
      const spotify = playlist[Object.keys(playlist)];
        this.link = spotify;
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.obtenerPlaylist();
    
}
};
</script>

<style>
.spotify {
  height: 40vh;
  width: 95%;
  margin-left: 10%;
}
@media screen and (max-width: 854px) {
.spotify {
  height: 40vh;
  width: 90vw;
  margin-left: 0%;
  margin-top: 4%;

}
}
</style>