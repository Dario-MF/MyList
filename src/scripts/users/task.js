import { showInfo, tasksInFocus } from '../moduls/general';

class Task {
    constructor() {
        this.db = firebase.firestore()
    }

    crearTask(uid, idList, titleTask, status) {
        return this.db.collection('tasks').add({
            uid: uid,
            idList: idList,
            titleTask: titleTask,
            status: status,
            finalizado: false
        })
            .then(() => {
                showInfo(`Tarea creada correctamente`, 5000);
            })
            .catch(error => {
                showInfo(`Error en la creacion de la tarea: ${error}`, 5000);
            })
    }

    consultarTask() {
        const user = firebase.auth().currentUser;
        this.db.collection('tasks')
            .where("uid", "==", user.uid)
            .onSnapshot(querySnapshot => {
                const listPending = document.getElementById("listPending");
                const listDone = document.getElementById("doneList");
                listPending.innerHTML = '';
                listDone.innerHTML = '';

                querySnapshot.forEach(task => {
                    let taskHtml = this.taskTemplate(
                        task.data().titleTask,
                        task.data().idList,
                        task.data().status,
                        task.id
                    );
                    let taskHtmlChecked = this.taskTemplateCheked(
                        task.data().titleTask,
                        task.data().idList,
                        task.data().status,
                        task.id
                    );

                    if (task.data().finalizado) {
                        listDone.insertAdjacentHTML('beforeend', taskHtmlChecked);
                    } else {
                        listPending.insertAdjacentHTML('beforeend', taskHtml);
                    }
                    this.deleteTaskEvent()
                    this.finalizarTaskEvent()
                })
                tasksInFocus();
            })
    }

    updateTask(final, taskId) {
        const refUser = this.db.collection('tasks').doc(taskId.substring(2))

        refUser.update({
            finalizado: final
        })
    }

    finalizarTaskEvent() {
        const checkItems = document.querySelectorAll(".list-item-check")

        for (let item of checkItems) {
            item.addEventListener("click", (e) => {

                if (e.target.checked == true) {
                    this.updateTask(true, e.target.parentNode.parentNode.id)

                } else {
                    this.updateTask(false, e.target.parentNode.parentNode.id)
                }
            })
        }
    }

    deleteTask(taskId) {
        this.db.collection('tasks').doc(taskId.substring(2)).delete();
    }

    deleteTaskEvent() {
        const btnsDeleteTask = document.querySelectorAll(".delete-task");

        for (let btn of btnsDeleteTask) {
            btn.addEventListener("click", (e) => {
                const taskId = e.target.parentNode.parentNode.id;
                this.deleteTask(taskId);
            })
        }
    };

    taskTemplate(titleTask, listaId, status, taskId) {
        return `<li class="${listaId} ${status}" id="id${taskId}">
                    <div class="list-item ${status}">
                        <h3 class="list-item-title">${titleTask}</h3>
                        <input class="list-item-check" type="checkbox" title="Finalizar">
                        <div class="delete-task" id="deleteTask" title="Eliminar"></div>
                    </div>
                </li>`
    }
    taskTemplateCheked(titleTask, listaId, status, taskId) {
        return `<li class="${listaId} ${status}" id="id${taskId}">
                    <div class="list-item ${status} finalizado">
                        <h3 class="list-item-title">${titleTask}</h3>
                        <input class="list-item-check" type="checkbox" checked title="Finalizar">
                        <div class="delete-task" id="deleteTask" title="Eliminar"></div>
                    </div>
                </li>`
    }
}


export { Task };