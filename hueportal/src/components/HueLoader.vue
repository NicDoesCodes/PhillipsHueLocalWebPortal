
<template>
  <div class="hello">
    <h1 id="huestat">{{ message}}</h1>
    <span>{{ bridgeIP }}</span>
  </div>
</template>

<script>

import HueService from '../service/hueService';

const Hue = new HueService;


export default {
  name: 'HueLoader',
  props: {
    message: String,
    bridgeIP: String
  },
  created:function(){
    this.getBridgeIP();
  },methods:{
    getBridgeIP:function(){
        var vm = this;
         Hue.findBridge(function(ipAddress){
          if(ipAddress){
            vm.bridgeIP = ipAddress;
          }else{
            vm.bridgeIP = "No bridge found...";
          }
      });
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
