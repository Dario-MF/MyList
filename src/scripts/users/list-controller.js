import { showInfo, idListTarget, closeModal, activeMenu } from '../moduls/general';
import { Task } from './task';
import { Lista } from './list';



const list = new Lista();
const task = new Task();

/* Crear nueva lista */
document.getElementById("listBtnSubmit").addEventListener("click", () => {
    const user = firebase.auth().currentUser;
    const lists = document.querySelectorAll(".lists-pendings li")
    const color = document.getElementById("selectColorList").value;

    if (user == null) {
        showInfo('Para crear una lista debe estar registrado', 5000);
        return
    } else if (lists.length >= 10) {
        showInfo('No se pueden crear mas listas', 5000);
    } else {
        list.crearList(user.uid, user.email, color);
    }
    const modalNewList = document.getElementById("modalNewList");
    closeModal(modalNewList);

});

/* Crear nueva tarea*/
document.getElementById("btnCreateTask").addEventListener("click", () => {
    const user = firebase.auth().currentUser;
    const newTaskName = document.getElementById("newTaskName").value;
    const statusTask = document.getElementById("statusTask").value;
    const idList = idListTarget()

    if (user == null) {
        showInfo('Para crear una tarea debe estar registrado', 5000);
        return
    } else {
        task.crearTask(user.uid, idList, newTaskName, statusTask);
    }
    const btnCloseNewTask = document.querySelector(`#${idList} .new-task`)
    const modalNewTask = document.getElementById("modalNewTask");
    activeMenu(btnCloseNewTask, modalNewTask);

});


/* Eliminar Lista */
const btnDeleteList = document.getElementById("btnDeleteList");

btnDeleteList.addEventListener("click", () => {
    list.deleteList(idListTarget());

    const tasksOfLista = document.querySelectorAll(`.${idListTarget()}`);
    for (let item of tasksOfLista) {
        task.deleteTask(item.id);
    }
});





