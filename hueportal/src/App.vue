<template>
  <div id="app">
    <HueLoader message="Welcome to Your Hue Portal App" bridgeIP=""/>
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
  margin-top: 60px;
}
</style>
