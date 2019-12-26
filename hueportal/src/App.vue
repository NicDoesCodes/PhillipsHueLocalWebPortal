<template>
  <div id="app">
    <div class="row top-row">
        <div class="col-lg-12">  
            <HueLoader message="Welcome to Your Hue Portal App"/>
        </div>
    </div>

    <div class="row main-content">
      <div class="col-lg-4 sidebar">
      </div>

      <div class="col-lg-8 content-area">
        <LightList />
      </div>
    </div>
  </div>
</template>

<script>

import HueLoader from './components/HueLoader.vue';
import LightList from  './components/Lights.vue';

export default {
  name: 'app',
  components: {
    HueLoader,
    LightList
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
