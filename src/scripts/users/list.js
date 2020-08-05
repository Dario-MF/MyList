import { showInfo, eventNewTask, separadorOrden } from '../moduls/menus';

class List {
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
                console.log(`ID de la ista: ${refDoc.id}`);
                showInfo(`Lista creada correctamente`, 5000);
            })
            .catch(error => {
                showInfo(`Error en la creacion de la lista: ${error}`, 5000);
            })

    }

    consultarLists() {
        this.db.collection('listas').onSnapshot(querySnapshot => {
            const lists = document.getElementById("listPendings");
            lists.innerHTML = '';

            let widthMarcador = 90.1;
            let indexMarcador = 50
            querySnapshot.forEach(list => {
                let listHtml = this.listTemplate(
                    list.data().color,
                    list.id
                );
                lists.insertAdjacentHTML('beforeend', listHtml);

                const marcador = document.querySelector(`#id${list.id} .btn-separador`)
                marcador.style.right = `${widthMarcador}%`
                document.querySelector(`#id${list.id}`).style.zIndex = `${indexMarcador}`
                widthMarcador -= 10;
                indexMarcador -= 1;
                eventNewTask(list.id);

            })
            separadorOrden()
        })
    }

    listTemplate(color, listaId) {
        return `<li id="id${listaId}">
                <div class="list-user" style="background-color:${color}">
                    <div class="btn-separador"></div>
                    <div class="box-btn-task">
                        <div class="new-task" title="Añadir nueva tarea"></div>
                    </div>
                    <div class="button-task urgente" title="Ordenar uregentes"></div>
                    <div class="button-task importante" title="Ordenar importantes"></div>
                    <div class="button-task no-importante" title="Ordenar no importantes"></div>
                </div>
            </li >`
    }

}






export { List }