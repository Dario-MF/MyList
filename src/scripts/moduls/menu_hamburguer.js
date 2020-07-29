
let hamburger = document.querySelector(".hamburger");
let header = document.querySelector(".header");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("is-active");

    header.classList.toggle("is-active");
});