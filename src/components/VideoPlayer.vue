<template>
  <div>
    <video ref="video" class="video" controls></video>
    <iframe
      width="640"
      height="520"
      src="https://www.youtube.com/embed/OsD1SJKtO9U "
    >
    </iframe>
  </div>
</template>

<script>
import Hls from "hls.js";
import Firebase from "firebase";
import "firebase/storage";
import config from "@/config";
let appSpot = Firebase.initializeApp(config, "player");
let db = appSpot.database();

export default {
  mounted() {
    let hls = new Hls();
    let stream = "https://youtu.be/ls3rD8VfiSY?list=RDMMls3rD8VfiSY";
    let video = this.$refs["video"];
    hls.loadSource(stream);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  },

  methods: {
    async obtenerVideo() {
      try {
        const snapshot = await db.ref("musica").once("value");
        const playlist = snapshot.val();
        const spotify = playlist[Object.keys(playlist)];
        this.link = spotify;
        console.log(this.link);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.video {
  width: 60%;
}
@media screen and (max-width: 854px) {
  .video {
    height: 100%;
    width: 90%;
  }
}
</style>