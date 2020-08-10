

;
const showModal = (modal) => {
    modal.classList.add("is-active");
};

const closeModal = (modal) => {
    modal.classList.remove("is-active");
};

const activeMenu = (button, modal) => {
    button.classList.toggle("is-active");
    modal.classList.toggle("is-active");
};

const showInfo = (mensaje, tiempo) => {
    const infoText = document.getElementById("infoText");
    const infoBox = document.getElementById("infoBox");

    infoText.innerText = mensaje;
    infoBox.style.marginRight = '0';

    window.setTimeout(() => {
        infoBox.style.marginRight = '-50rem';
        infoText.innerText = '';
    }, tiempo);
};

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
        document.getElementById("newTaskName").value = '';
    })

};

/* Obtener id List en target */
const idListTarget = () => {
    const lists = document.querySelectorAll(".lists-pendings li");
    for (let list of lists) {
        if (list.style.zIndex == 50) {
            return list.id
        }
    }
};

/* Vistas de tareas */
const tasksInFocus = () => {
    const tasksOpen = document.querySelectorAll(`.${idListTarget()}`);
    const tasksPending = document.querySelectorAll(".list-pending li");
    const tasksDone = document.querySelectorAll(".done-list li");

    for (let task of tasksPending) {
        task.style.display = 'none';
    }
    for (let task of tasksDone) {
        task.style.display = 'none';
    }
    for (let task of tasksOpen) {
        task.style.display = 'block'
    }
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
                    list.style.zIndex = '50';
                    tasksInFocus();
                } else {
                    list.style.zIndex = `${indexMarcador}`
                    indexMarcador -= 1;
                }
            }
        })
    }
};

/* ordenar por status */
const ordenarStatus = (status) => {
    const listBox = document.querySelector("#listPending");
    const tasks = document.querySelectorAll("#listPending li");
    const arrayTask = Array.from(tasks);

    arrayTask.sort((a, b) => {
        if (a.classList.contains(status)) {
            return -1
        } else {
            return 1
        }
    }).forEach(task => { listBox.appendChild(task) })
};

/* Evento ordenar tareas */
const ordenarTask = () => {
    const btnsOrden = document.querySelectorAll(".button-task");

    for (let btn of btnsOrden) {
        btn.addEventListener("click", function (e) {
            if (e.target.classList.contains("btn-urgente")) {
                ordenarStatus("urgente");

            } else if (e.target.classList.contains("btn-importante")) {
                ordenarStatus("importante");

            } else if (e.target.classList.contains("btn-no-importante")) {
                ordenarStatus("no-importante");
            }
        });
    }
};




export {
    showModal,
    closeModal,
    showInfo,
    eventNewTask,
    activeMenu,
    separadorOrden,
    tasksInFocus,
    modalLogin,
    modalRegistro,
    idListTarget,
    ordenarTask
}