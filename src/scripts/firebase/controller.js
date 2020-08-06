import { Autenticacion } from './auth';
import { showInfo } from '../moduls/menus';
import imgUserLogout from '../../img/avatarLogout.png';
import imgUserLogin from '../../img/avatarLogin.png';

;
((d) => {
    const auth = new Autenticacion();

    /* form registro */
    d.getElementById("registroBtnSubmit").addEventListener("click", function () {
        const regName = d.getElementById("regName").value;
        const regEmail = d.getElementById("regEmail").value;
        const regPassword = d.getElementById("regPassword").value;


        auth.crearCuentaEmail(regName, regEmail, regPassword);
    });

    /* form login */
    d.getElementById("loginBtnSubmit").addEventListener("click", function () {
        const loginEmail = d.getElementById("loginEmail").value;
        const loginPassword = d.getElementById("loginPassword").value;


        auth.autEmailPass(loginEmail, loginPassword);
    })

    /* Login google */
    const authGoogle = d.getElementsByClassName("auth-social-google");

    for (let element of authGoogle) {
        element.addEventListener("click", function () {

            auth.authWithGoogle();
        })
    };

    /* login facebook */
    const authFacebook = d.getElementsByClassName("auth-social-facebook");

    for (let element of authFacebook) {
        element.addEventListener("click", function () {

            auth.authWithFacebook();
        })
    };

    /* login Github */
    const authGithub = d.getElementsByClassName("auth-social-github");

    for (let element of authGithub) {
        element.addEventListener("click", function () {

            auth.authWithGitHub();
        })
    };

    /* menu item auth-change */
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            d.getElementById("linkIdentificarse").style.display = "none";
            d.getElementById("linkRegistrarse").style.display = "none";
            d.getElementById("linkLogOut").style.display = "block";
            d.getElementById("workStage").style.display = "flex";
            d.getElementById("eslogan").style.display = "none";

            if (user.photoURL) {

                d.getElementById('imgUser').src = user.photoURL;

            } else {
                d.getElementById('imgUser').src = imgUserLogin;
            }
        }
    });

    /* logOut user */
    const linkLogOut = d.getElementById("linkLogOut");

    linkLogOut.addEventListener("click", function () {
        const user = firebase.auth().currentUser;
        if (user) {
            return firebase.auth().signOut()
                .then(() => {
                    linkLogOut.style.display = "none";
                    d.getElementById("linkIdentificarse").style.display = "block";
                    d.getElementById("linkRegistrarse").style.display = "block";
                    d.getElementById("workStage").style.display = "none";
                    d.getElementById("eslogan").style.display = "block";



                    d.getElementById('imgUser').src = imgUserLogout;

                    showInfo('Se desconecto correctamente', 5000)
                }).catch(error => {
                    showInfo(`Error en la desconexion: ${error}`)
                })
        }
    });









})(document);