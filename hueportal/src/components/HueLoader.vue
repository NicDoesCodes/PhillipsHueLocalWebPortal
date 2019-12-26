
<template>

  <div class="row">
    <div class="col-lg-12">
      <div class="row top-bar">
        <div class="col-lg-12">
          <h1>Hue portal</h1>
        </div>
      </div>
        <div class="row">
          <div class="col-sm-4 sidebar">
            <h2>Status:</h2>
              <span>{{ bridgeIP }}</span>
          </div>
          <div class="col-sm-8 body-content">
            
          </div>
        </div>
      
    </div>
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
            localStorage.ipAddress = ipAddress;
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
