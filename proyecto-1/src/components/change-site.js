import AFRAME from'aframe';

import React from 'react';

function Imagen () {
AFRAME.registerComponent('change-site', {
    schema: {
     img:{type:'string'}
    },
  
    init: function () {
        var data = this.data; // lo que llega de change-site:
        var el = this.el;  // elemento
        el.addEventListener("mouseenter",function(){
            var mySky=document.querySelector("#my-sky");
            mySky.setAttribute("src",data.img)
        }); 
    }
  });
}
export default Imagen; 