import { showInfo, closeModal, showModal, modalLogin, modalRegistro } from '../moduls/menus';
import avatar from '../../img/avatarLogin.png';



class Autenticacion {

    autEmailPass(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                if (result.user.emailVerified) {
                    document.getElementById('imgUser').src = avatar;
                    showInfo(`Bienvenido ${result.user.displayName}`, 5000);

                } else {
                    firebase.auth().signOut();
                    showInfo(`❌ Por favor verifique su cuenta con el email`, 5000)
                }
                closeModal(modalLogin)
            })
    }

    crearCuentaEmail(nombre, email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                result.user.updateProfile({
                    displayName: nombre
                });
                const configuracion = {
                    url: 'http://localhost:8080/#'//Url hosting.
                }
                result.user.sendEmailVerification(configuracion)
                    .catch(error => {
                        console.error(error);

                        showInfo(`❌ error: ${error.message}`, 5000);
                    });
                firebase.auth().signOut();

                showInfo(`✅ ${nombre} Registro correcto!! recuerde verificarse con el email`, 5000);
                closeModal(modalRegistro);
            })
            .catch(error => {
                console.error(error);
                showInfo(`❌ error: ${error}`, 5000);
            });
    }

    authWithGoogle() {
        const provGoogle = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provGoogle)
            .then(result => {
                document.getElementById('imgUser').src = result.user.photoURL;

                closeModal(modalRegistro);
                closeModal(modalLogin);
                showInfo(`Bienvenido ${result.user.displayName} !!`, 5000);
            })
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/account-exists-with-different-credential') {

                    showInfo(`❌ Ya estas registrado en otro proveedor con este email`, 5000);
                } else {
                    showInfo(`❌ Error al autenticarse con Github: ${errorMessage}`, 5000);
                }
            })


    }

    authWithFacebook() {
        const provFacebook = new firebase.auth.FacebookAuthProvider()

        firebase.auth().signInWithPopup(provFacebook)
            .then(result => {
                document.getElementById('imgUser').src = result.user.photoURL;

                closeModal(modalRegistro);
                closeModal(modalLogin);

                showInfo(`Bienvenido ${result.user.displayName} !!`, 5000);
            })
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/account-exists-with-different-credential') {

                    showInfo(`❌ Ya estas registrado en otro proveedor con este email`, 5000);
                } else {
                    showInfo(`❌ Error al autenticarse con Github: ${errorMessage}`, 5000);
                }
            })
    }

    authWithGitHub() {
        const provGithub = new firebase.auth.GithubAuthProvider()

        firebase.auth().signInWithPopup(provGithub)
            .then(result => {
                document.getElementById('imgUser').src = result.user.photoURL;
                console.log(result.user)
                closeModal(modalRegistro);
                closeModal(modalLogin);
                showInfo(`Bienvenido!!`, 5000);
            })
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/account-exists-with-different-credential') {

                    showInfo(`❌ Ya estas registrado en otro proveedor con este email`, 5000);
                } else {
                    showInfo(`❌ Error al autenticarse con Github: ${errorMessage}`, 5000);
                }
            })
    }



}








export { Autenticacion };