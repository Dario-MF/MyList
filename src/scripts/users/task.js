import { showInfo, tasksInFocus } from '../moduls/menus';

class Task {
    constructor() {
        this.db = firebase.firestore()
    }

    crearTask(uid, idList, titleTask, status) {
        return this.db.collection('tasks').add({
            uid: uid,
            idList: idList,
            titleTask: titleTask,
            status: status
        })
            .then(refDoc => {
                showInfo(`Tarea creada correctamente`, 5000);
            })
            .catch(error => {
                showInfo(`Error en la creacion de la tarea: ${error}`, 5000);
            })
    }

    consultarTask() {
        this.db.collection('tasks').onSnapshot(querySnapshot => {
            const tasksList = document.getElementById("listPending");
            tasksList.innerHTML = '';

            querySnapshot.forEach(task => {
                let taskHtml = this.taskTemplate(
                    task.data().titleTask,
                    task.data().idList,
                    task.data().status,
                    task.id
                );
                tasksList.insertAdjacentHTML('beforeend', taskHtml);
                this.deleteTaskEvent()

            })
            tasksInFocus();
        })
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


}




export { Task };