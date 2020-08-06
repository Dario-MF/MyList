import { showInfo, eventNewTask, separadorOrden, ordenarTask } from '../moduls/menus';


class Lista {
    constructor() {
        this.db = firebase.firestore()
    }

    crearList(uid, emailUser, color) {
        return this.db.collection('listas').add({
            uid: uid,
            autor: emailUser,
            color: color
        })
            .then(refDoc => {

                showInfo(`Lista creada correctamente`, 5000);
            })
            .catch(error => {
                showInfo(`Error en la creacion de la lista: ${error}`, 5000);
            })

    }

    consultarLists() {
        const user = firebase.auth().currentUser;
        this.db.collection('listas')
            .where("autor", "==", user.email)
            .onSnapshot(querySnapshot => {
                const lists = document.getElementById("listPendings");
                lists.innerHTML = '';

                let widthMarcador = 90.1;
                let indexMarcador = 50
                querySnapshot.forEach(list => {
                    let listHtml = this.listTemplate(
                        list.data().color,
                        list.id
                    );
                    lists.insertAdjacentHTML('afterbegin', listHtml);

                    const marcador = document.querySelector(`#id${list.id} .btn-separador`)
                    marcador.style.right = `${widthMarcador}%`
                    document.querySelector(`#id${list.id}`).style.zIndex = `${indexMarcador}`
                    widthMarcador -= 10;
                    indexMarcador -= 1;
                    eventNewTask(list.id);

                })
                separadorOrden();
                ordenarTask();
            })
    }

    deleteList(listId) {
        this.db.collection('listas').doc(listId.substring(2)).delete();
        showInfo(`Lista borrada correctamente`, 5000);
    }

    listTemplate(color, listaId) {
        return `<li id="id${listaId}">
                <div class="list-user" style="background-color:${color}">
                    <div class="btn-separador"></div>
                    <div class="box-btn-task">
                        <div class="new-task" title="Añadir nueva tarea"></div>
                    </div>
                    <div class="button-task btn-urgente" title="Ordenar uregentes"></div>
                    <div class="button-task btn-importante" title="Ordenar importantes"></div>
                    <div class="button-task btn-no-importante" title="Ordenar no importantes"></div>
                </div>
            </li >`
    }

}

export { Lista };