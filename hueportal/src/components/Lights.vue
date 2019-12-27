
<template>

  <div class="row">
        <ul id="example-1">
            <li v-for="(light, index) in lights" v-bind:key="light.uniqueid">
                <div class="col-lg">
                    <div class="card">
                        <div class="card-header">
                            {{ light.name }}
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm">
                                    <label>On/Off </label>
                                </div>
                                <div class="col-sm">
                                    <label class="switch">
                                        <input type="checkbox" v-on:click="toggleLightStatus(index,light.state.on)" v-model="light.state.on"  data-toggle="toggle" data-onstyle="success">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="row color-row">
                              <div class=col-sm>
                                <chrome-picker :value="{ h: 150, s: 0.66, v: 0.30 }" @input="updateValue"></chrome-picker>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
  </div>

</template>


<script>

import HueService from '../service/hueService';
import ColourService from '../service/colourService';
import { Chrome } from 'vue-color'

const Hue = new HueService;
const Colour = new ColourService;

export default {
  name: 'LightList',
  props: {
    lights: []
  },components:{
    'chrome-picker': Chrome
  },
  watch: {
      lights: function(){
      }
  },
  created:function(){
    this.getLights();
    console.log(Colour.convertRGBtoXYZ(239,21,75));
  },methods:{
    getLights:function(){
        var vm = this;
        if(localStorage.ipAddress){
            Hue.getAllLights(function(responseLights){
                vm.lights = responseLights;
            });
        }
    },
    toggleLightStatus:function(lightIndex,currentState){
        Hue.toggleLight(lightIndex,currentState);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
