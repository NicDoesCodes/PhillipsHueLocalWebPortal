import axios from 'axios';

export default class HueService{
    
    findBridge(callback) {
        axios({ method: "GET", "url": "https://discovery.meethue.com" }).then(result => {
            result.data.forEach(element => {
                if(element.hasOwnProperty('internalipaddress')){
                    callback(element.internalipaddress);
                }else{
                    callback(false);
                }
            });
        }, error => {
            if(error){
                callback(false);
            }
        });
    }

    getAllLights(callback){
        axios({ method: "GET", "url": "http://"+localStorage.ipAddress+"/api/"+process.env.VUE_APP_HUE_USER}).then(result => {
            var lights = false;

            if(result.data.lights != "undefined"){
                lights = result.data.lights;
            }
            callback(lights)
        }, error => {
            if(error){
                console.log(error);
            }
        });
    }

    toggleLight(lightIndex,currentState){
        var newState = false;

        if(currentState == false){
            newState = true;
        }
        axios({
            method: 'PUT',
            url: "http://"+localStorage.ipAddress+"/api/"+process.env.VUE_APP_HUE_USER+"/lights/"+lightIndex+"/state" ,
            data: {
                "on":newState
            }
        }),error => {
            console.log(error);
        };
    }

  }