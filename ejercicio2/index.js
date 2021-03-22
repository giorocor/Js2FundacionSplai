
//Expresion regular para validar formato fecha
var texto="naci el 05/04/1998 en cali";
document.writeln(texto.match(/\d{2}\/\d{2}\/\d{2,4}/));
document.write("<br>");

//Expresion regular para validar correo
var email="hola mi correo es giogio@hotmail.com gracias";
document.writeln(email.match(/\w*@\w*\.\w{2,3}/));
document.write("<br>");

//Expresion regular para transformar a formato unicode
var caracteres = {
    '&' : '&amp;',
    '\"' : '&quot;',
    '<' : '&lt;',
    '>' : '&gt;'
   };
var texto = '<>&"';
document.write(texto);
document.write("<br>");

texto=texto.replace(/[<>&"]/g,  function (c) {
return caracteres[c];
});
console.log(texto);


//Expresion regular para organizar fullname
var texto="Giovanny Rodriguez";
texto=texto.split(/\s/);
document.writeln(texto[1], ", ", texto[0]);

//Expresion regular para eliminar etiquetas peligrosas
var texto="<script> hacer nada</script>";
console.log(texto.replace(/<script>(.*)<\/script>/,""));
