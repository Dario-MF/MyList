import { Autenticacion } from './auth';

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








})(document);