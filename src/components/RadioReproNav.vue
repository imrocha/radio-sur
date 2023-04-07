<template>
  <div>
    <div
      class="
        d-flex d-sm-flex d-md-flex
        justify-content-center
        align-items-center
        justify-content-sm-center
        align-items-sm-center
        justify-content-md-center
        align-items-md-center
      "
      style="margin-right: 23vw; margin-top: 1.3vw; margin-bottom: 8.2%;"
    >
      <audio id="player" ref="repro" autoplay>
        <source
          id="source"
          src="https://stream.xweb.ar/8008/stream"
        />
      </audio>
      <div
        id="pill"
        class="
          d-flex
          flex-row
          justify-content-start
          align-items-center
          justify-content-sm-start
          align-items-sm-center
          justify-content-md-start
          align-items-md-center
          justify-content-lg-start
          align-items-lg-center
          justify-content-xl-start
          align-items-xl-center
          justify-content-xxl-start
          align-items-xxl-center
        "
      >
        <div
          id="circlePlay"
          class="
            border-0
            d-flex d-xxl-flex
            justify-content-center
            align-items-center
            justify-content-xxl-center
            align-items-xxl-center
          "
        >

         <font-awesome-icon v-bind:icon="['fas', iconPlay]" style="font-size: 2vw;" inverse @click="togglePlay"/>
        </div>
        <div
          class="
            d-flex
            justify-content-center
            align-items-center align-items-sm-center
            volumen
          "
          style="margin-left: 1.6vw"
        >
          <input
            class="
              d-flex d-sm-flex d-md-flex
              justify-content-center
              align-items-center
              justify-content-sm-center
              align-items-sm-center
              justify-content-md-center
              align-items-md-center
            "
            type="range"
            id="volumen"
            value="0.5"
            min="0"
            max="1"
            step="0.01"
            v-model="volume"
            ref="vol"
            @input="handleInputChange"
          />
        </div>
        <div
          class="
            d-flex d-sm-flex d-md-flex
            justify-content-center
            align-items-center
            justify-content-sm-center
            align-items-sm-center
            justify-content-md-center
            align-items-md-center
          "
          style="margin-left: 1.2vw"
        >
        <font-awesome-icon id="iconVolume" v-bind:icon="['fas', iconVol]" @click="toggleMute"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioRepro",
  data() {
    return {
      iconPlay: "play",
      iconVol: "volume-low",
      volume: 0.5
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    handleInputChange(event) {
      console.log(this.$refs.repro.paused);
      const target = event.target;
      const min = target.min;
      const max = target.max;
      const value = target.value;

      this.volume = value;
      this.$refs.repro.volume = value;
      target.style.backgroundSize = (100 * (value - min)) / (max - min) + "% 100%";

      if(this.$refs.repro.volume == 0) {
        this.iconVol = "volume-xmark";
      } else if(this.$refs.repro.volume > 0 && this.$refs.repro.volume <= 0.3) {
        this.iconVol = "volume-off";
      } else if(this.$refs.repro.volume > 0.3 && this.$refs.repro.volume <= 0.7) {
        this.iconVol = "volume-low";
      } else if(this.$refs.repro.volume > 0.7 && this.$refs.repro.volume <= 1) {
        this.iconVol = "volume-high";
      } 
    },
    togglePlay() {
      if(this.$refs.repro.paused && !this.$refs.repro.ended) {
        this.iconPlay = "pause";
        this.$refs.repro.play();
      } else {
        this.iconPlay = "play";
        this.$refs.repro.pause();
      }
    },

    toggleMute() {
      if (this.$refs.repro.muted) {
    this.$refs.repro.muted = false;
    this.$refs.vol.style.backgroundSize = `${this.volume * 100}% 100%`;
    if (this.volume > 0 && this.volume <= 0.3) {
      this.iconVol = "volume-off";
    } else if (this.volume > 0.3 && this.volume <= 0.7) {
      this.iconVol = "volume-low";
    } else if (this.volume > 0.7 && this.volume <= 1) {
      this.iconVol = "volume-high";
    } else {
      this.iconVol = "volume-low";
    }
  } else {
    player.muted = true;
    this.iconVol = "volume-mute";
    this.$refs.vol.value = 0;
    this.$refs.vol.style.backgroundSize = "0% 100%";
    
  } 
    }
  }
}; 
</script>

<style>
#pill {
  width: 27vw;
  height: 6.3vw;
  left: 59px;
  top: 487px;
  background: rgba(0, 0, 0, 0.49);
  border-radius: 100px;
}

#circlePlay {
  left: 6.25%;
  right: 6.25%;
  top: 6.25%;
  bottom: 6.25%;
  background: radial-gradient(
    147.17% 124.75% at 49.2% -0.7%,
    #c8c544 60.42%,
    #5a5906 100%
  );
  width: 5vw;
  height: 5vw;
  border-radius: 100px;
  margin-left: 0.8vw;
}

#iconVolume {
  font-size: 3.1vw;
  background: linear-gradient(to bottom, #c8c544 100%, #5a5906 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #c8c544;
}

input[type=range] {
    appearance: none;
    margin-right: 1vw;
    width: 12vw;
    height: 1.3vw;
    background: rgba(255, 255, 255, .6);
    border-radius: 5px;
    background-image: linear-gradient(#c8c544, #c8c544);
    background-size: 50% 100%;
    background-repeat: no-repeat
}


input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: transparent;
    box-shadow: 0 0 2px 0 #555;
    height: 1.3vw;
    width: 1.3vw;
    border-radius: 5px;
    box-shadow: none;
    align-self: center
}

</style>