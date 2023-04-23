<template>
      <div class="video"></div>
  </template>
  
  <script>
  
  export default {
    name: 'VideoPlayer',
    
  }
  </script>

<style>
.video {
  height: 70vh;
  width: 50vw;
  background: grey;
}
@media screen and (max-width: 768px) {
  .video {
    height: 50vh;
    width: 90%;
  }
}
</style>