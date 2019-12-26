<template>
  <div id="app">
    <div class="row">
        <div class="col-lg-12">  
            <HueLoader message="Welcome to Your Hue Portal App"/>
        </div>
    </div>
    
  </div>
</template>

<script>

import HueLoader from './components/HueLoader.vue'

export default {
  name: 'app',
  components: {
    HueLoader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
