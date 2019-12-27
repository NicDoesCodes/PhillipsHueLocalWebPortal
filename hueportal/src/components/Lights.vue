
<template>
  <ul id="example-1">
    <li v-for="(light, index) in lights" v-bind:key="light.uniqueid">
      <v-col cols="8">
        <v-card dark>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ light.name }}</v-list-item-title>
              <v-switch label="On / Off" v-on:click="toggleLightStatus(index,light.state.on)" v-model="light.state.on"></v-switch>
              <v-row justify="space-around">
                  <v-col cols="12">
                    <v-slider v-model="light.state.bri"  v-on:change="sliderChange(index,light.state.bri)" min="0" max="254" label="Brightness" ></v-slider>
                  </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </li>
  </ul>
</template>


<script>

import HueService from '../service/hueService';

const Hue = new HueService;

export default {
  name: 'LightList',
  props: {
    lights: []
  },data () {
    return {
      min: 0,
      max: 254
    }
  },watch: {
      lights: function(light){
        console.log(light);
      }
  },
  created:function(){
    this.getLights();

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
    },
    sliderChange:function(lightID,brightnessValue){
      Hue.setBrightness(lightID,brightnessValue);
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
