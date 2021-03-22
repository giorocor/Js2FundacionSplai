var hora= document.getElementById("hora");
var minuto= document.getElementById("minuto");
var segundo= document.getElementById("segundo");

setInterval(() => {
    hora.innerHTML=new Date().getHours();
    minuto.innerHTML=new Date().getMinutes();
    segundo.innerHTML=new Date().getSeconds();  
}, 1000);