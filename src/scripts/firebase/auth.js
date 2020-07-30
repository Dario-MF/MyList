
class Autenticacion {

    autEmailPass(email, password) {

    }

    crearCuentaEmail(nombre, email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                result.user.updeteProfile({
                    displayName: nombre
                });

                const configuracion = {
                    url: 'http://localhost:8080/'
                }

                result.user.sendEmailVerification(configuracion)
                    .catch(error => {
                        console.error(error);
                        //Agregar funcion que muestra error al usuario
                    });

                firebase.auth().signOut();
                //Mostrar mensaje de bienvenida y recordar verificarse con email
                //Cerrar modal
            })
            .catch(error => {
                console.error(error);
                //Agregar funcion que muestra error al usuario
            });

    }



}