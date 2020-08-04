import imgUserLogout from '../../img/avatarLogout.png';
import imgUserLogin from '../../img/avatarLogin.png';



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

/* menu item auth-change */
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById("linkIdentificarse").style.display = "none";
        document.getElementById("linkRegistrarse").style.display = "none";
        document.getElementById("linkLogOut").style.display = "block";
        document.getElementById("workStage").style.display = "flex";
        document.getElementById("eslogan").style.display = "none";
        if (user.photoUrl) {
            document.getElementById('imgUser').src = user.photoURL;

        } else {
            document.getElementById('imgUser').src = imgUserLogin;
        }
    }
});

/* logOut user */
const linkLogOut = document.getElementById("linkLogOut");

linkLogOut.addEventListener("click", function () {
    const user = firebase.auth().currentUser;
    if (user) {
        return firebase.auth().signOut()
            .then(() => {
                linkLogOut.style.display = "none";
                document.getElementById("linkIdentificarse").style.display = "block";
                document.getElementById("linkRegistrarse").style.display = "block";
                document.getElementById("workStage").style.display = "none";
                document.getElementById("eslogan").style.display = "block";



                document.getElementById('imgUser').src = imgUserLogout;

                showInfo('Se desconecto correctamente', 5000)
            }).catch(error => {
                showInfo(`Error en la desconexion: ${error}`)
            })
    }
})







export { showModal, closeModal, showInfo, modalLogin, modalRegistro }