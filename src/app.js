import './scss/main.scss';

var saludo = document.createElement("h1");
var texto = document.createTextNode("Hello world");
saludo.appendChild(texto);
document.body.appendChild(saludo);

