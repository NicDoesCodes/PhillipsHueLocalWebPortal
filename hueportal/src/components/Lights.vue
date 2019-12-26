
<template>

  <div class="row">
        <ul id="example-1">
            <li v-for="light in lights" v-bind:key="light.uniqueid">
                <div class="col-lg">
                    <div class="card">
                        <div class="card-header">
                            {{ light.name }}
                        </div>
                        <div class="card-body">
                            {{ light.type }}
                        </div>

                    </div>
                </div>
            </li>
        </ul>
  </div>

</template>


<script>

import HueService from '../service/hueService';
const Hue = new HueService;


export default {
  name: 'LightList',
  props: {
    lights: []
  },
  watch: {
      lights: function(){

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
