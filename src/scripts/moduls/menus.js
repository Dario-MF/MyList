
const showModal = (modal) => {
    modal.classList.add("is-active");
}

const closeModal = (modal) => {
    modal.classList.remove("is-active");
}

const activeMenu = () => {
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
}

/* menu ppal */
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", activeMenu);

/* modal registro */
const btnRegistro = document.getElementById("linkRegistrarse");
const modalRegistro = document.getElementById("modalRegistro");
const registroBtnClose = document.getElementById("registroBtnClose");

btnRegistro.addEventListener("click", function (e) {
    e.preventDefault()
    closeModal(modalLogin);
    showModal(modalRegistro);
    activeMenu()
});

registroBtnClose.addEventListener("click", function () {
    closeModal(modalRegistro)
});

/* Modal Login */
const btnLogin = document.getElementById("linkIdentificarse");
const modalLogin = document.getElementById("modalLogin");
const loginBtnClose = document.getElementById("loginBtnClose");

btnLogin.addEventListener("click", function (e) {
    e.preventDefault()
    closeModal(modalRegistro);
    showModal(modalLogin);
    activeMenu()
});

loginBtnClose.addEventListener("click", function () {
    closeModal(modalLogin)
});






export { showModal, closeModal, modalLogin, modalRegistro }