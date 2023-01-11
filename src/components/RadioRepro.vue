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
      style="margin-right: 23vw; margin-top: 1.3vw"
    >
      <audio id="player">
        <source
          id="source"
          src="https://stream.arcast.net:4443/radio/radiosur.stream/playlist.m3u8/;"
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
          <!-- <i
            class="fas fa-play text-white"
            id="iconPlay"
            onclick="togglePlay();"
          ></i> -->
          <font-awesome-icon
            icon="fa-solid fa-play"
            style="font-size: 2vw"
            inverse
          />
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
            name="volumen"
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
          <font-awesome-icon id="iconVolume" icon="fa-solid fa-volume-high" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioRepro",
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

input[type="range"] {
  -webkit-appearance: none;
  margin-right: 1vw;
  width: 12vw;
  height: 1.3vw;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#c8c544, #c8c544);
  background-size: 50% 100%;
  background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: 0 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #c8c544;
  box-shadow: 0 0 2px 0 #555;
  height: 1.3vw;
  width: 1.3vw;
  border-radius: 5px;
  box-shadow: none;
  align-self: center;
}
</style>