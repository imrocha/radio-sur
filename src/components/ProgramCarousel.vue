<template>
  <div>
    <vueper-slides
  :visible-slides="3"
  :slide-ratio="1 / 6"
  :dragging-distance="200"
  :arrows="false"
  :bullets="false">
  <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"/>
</vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  data(){
    return {
    slides: [
    {
      image: require('../assets/info.png')
    },
    {
      image: require('../assets/puro-rock.png')
    },
    {
      image: require('../assets/info.png') // sarasa
    },
    {
      image: require('../assets/puro-rock.png')
  },{
      image: require('../assets/info.png')
    },
    {
      image: require('../assets/puro-rock.png')
    },
    {
      image: require('../assets/info.png')
    },
    {
      image: require('../assets/puro-rock.png')
  },
  ]
    }
  },
  components: {
    VueperSlides,
    VueperSlide
  },

  
}
</script>

<style>
.programas {
  width: 100%;
  height: 100%;
}
</style>