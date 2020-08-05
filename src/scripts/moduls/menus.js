

;
const showModal = (modal) => {
    modal.classList.add("is-active");
}

const closeModal = (modal) => {
    modal.classList.remove("is-active");
}

const activeMenu = (button, modal) => {
    button.classList.toggle("is-active");
    modal.classList.toggle("is-active");
}

const showInfo = (mensaje, tiempo) => {
    const infoText = document.getElementById("infoText");
    const infoBox = document.getElementById("infoBox");

    infoText.innerText = mensaje;
    infoBox.style.marginRight = '0';

    window.setTimeout(() => {
        infoBox.style.marginRight = '-50rem';
        infoText.innerText = '';
    }, tiempo);
}

/* menu ppal */
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function () {
    activeMenu(hamburger, header)
});

/* modal registro */
const btnRegistro = document.getElementById("linkRegistrarse");
const modalRegistro = document.getElementById("modalRegistro");
const registroBtnClose = document.getElementById("registroBtnClose");

btnRegistro.addEventListener("click", function (e) {
    e.preventDefault()
    closeModal(modalLogin);
    showModal(modalRegistro);
    activeMenu(hamburger, header)
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
    activeMenu(hamburger, header)
});

loginBtnClose.addEventListener("click", function () {
    closeModal(modalLogin)
});

/* Modal new list */
const btnNewList = document.getElementById("btnNewList");
const modalNewList = document.getElementById("modalNewList");
const newListBtnClose = document.getElementById("newListBtnClose");

btnNewList.addEventListener("click", function () {
    showModal(modalNewList);
})
newListBtnClose.addEventListener("click", function () {
    closeModal(modalNewList)
});

/* Modal new task */
const eventNewTask = (listId) => {
    const btnOpenNewTask = document.querySelector(`#id${listId} .new-task`)
    const modalNewTask = document.getElementById("modalNewTask");

    btnOpenNewTask.addEventListener("click", function () {
        activeMenu(btnOpenNewTask, modalNewTask);
    })

};

/* ordenar separadores */
const separadorOrden = () => {
    const separadores = document.querySelectorAll(".btn-separador");

    for (let separador of separadores) {
        let indexMarcador = 49;

        separador.addEventListener("click", function (e) {
            const listTarget = e.target.parentNode.parentNode;
            const lists = document.querySelectorAll(".lists-pendings li");

            for (let list of lists) {
                if (list == listTarget) {
                    list.style.zIndex = '50'
                } else {
                    list.style.zIndex = `${indexMarcador}`
                    indexMarcador -= 1;
                }
            }
        })
    }
}










export { showModal, closeModal, showInfo, eventNewTask, activeMenu, separadorOrden, modalLogin, modalRegistro }