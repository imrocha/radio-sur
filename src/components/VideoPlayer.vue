<template>
  <div>
    <iframe
    class="youtube"
      :src="videoYoutube"
      v-show="link === 'youtube'"
    >    
    </iframe>

    <video ref="video" class="video" v-show="link === 'streaming'" controls controlsList="nodownload"></video>

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
  data() {
    return {
      link: null,
      videoLink: "",
      videoStreaming: "",
      videoYoutube: "",
    };
  },



  methods: {
    async obtenerVideo() {
      try {
        const snapshot = await db.ref("link").once("value");
        const video = snapshot.val();
        const videoPlayer = video[Object.keys(video)];
        this.videoLink = videoPlayer.link;
        this.link = videoPlayer.tipo;

        if (this.link === "streaming") {
          this.videoStreaming = this.videoLink;
        } else {
          this.videoYoutube = this.videoLink;
        }
        this.cargarHLS();
      } catch (error) {
        console.log(error);
      }
    },

    cargarHLS() {
    let hls = new Hls();
    let stream = this.videoStreaming;
    let video = this.$refs["video"];
    hls.loadSource(stream);
    hls.attachMedia(video);
  
    }
  },

  created() {
    this.obtenerVideo();
  },
};
</script>

<style>
.video {

  width: 62vw;
  height: max-content;
}

.youtube {
  width: 62vw;
  height: 62vh;
}


@media screen and (max-width: 854px) {
  .video {
    margin-top: 5%;
    width: 90vw;
    height: max-content;
  }

  .youtube {
    width: 90vw;
  }
}
</style>