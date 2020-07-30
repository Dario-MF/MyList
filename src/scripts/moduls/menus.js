
/* menu ppal */
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
});



/* modal registro */
const btnRegistro = document.getElementById("linkRegistrarse");
const modalRegistro = document.getElementById("modalRegistro");
const registroBtnClose = document.getElementById("registroBtnClose");

btnRegistro.addEventListener("click", function () {

    if (document.querySelector("#modalLogin.is-active")) {
        modalLogin.classList.toggle("is-active");
        modalRegistro.classList.toggle("is-active");
    } else {
        modalRegistro.classList.toggle("is-active");
    }
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
});

registroBtnClose.addEventListener("click", function () {
    modalRegistro.classList.toggle("is-active");
});



/* Modal Login */
const btnLogin = document.getElementById("linkIdentificarse");
const modalLogin = document.getElementById("modalLogin");
const loginBtnClose = document.getElementById("loginBtnClose");

btnLogin.addEventListener("click", function () {

    if (document.querySelector("#modalRegistro.is-active")) {
        modalRegistro.classList.toggle("is-active");
        modalLogin.classList.toggle("is-active");
    } else {
        modalLogin.classList.toggle("is-active");
    }
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
});

loginBtnClose.addEventListener("click", function () {
    modalLogin.classList.toggle("is-active");
});

