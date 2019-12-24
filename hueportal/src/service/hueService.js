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

  }