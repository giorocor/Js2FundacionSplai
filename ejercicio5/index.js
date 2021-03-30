function mostrar(a){
    var a=a.getAttribute('src')
    console.log(a)
    document.getElementById("principal").setAttribute('src',a);
}