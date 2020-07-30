
/* menu ppal */
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("is-active");

    header.classList.toggle("is-active");
});

/* modal registro */
const btnRegistro = document.getElementById("linkLogin");
const modalRegistro = document.getElementById("modalRegistro");
const registroBtnClose = document.getElementById("registroBtnClose");

btnRegistro.addEventListener("click", function () {
    modalRegistro.classList.toggle("is-active");

    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
});

registroBtnClose.addEventListener("click", function () {
    modalRegistro.classList.toggle("is-active")
});