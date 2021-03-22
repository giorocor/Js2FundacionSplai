var arrayDados=[];


    function tirarDados(){
        var dado1= Math.ceil((Math.random()*6));
        var dado2= Math.ceil((Math.random()*6));
        return dado1+dado2;
    }

    function guardar(valor){
        arrayDados.push(valor);
    }


for(var i=0;i<36;i++){
    guardar(tirarDados())
}
document.write(arrayDados);