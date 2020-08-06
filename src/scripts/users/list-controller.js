import { List } from './list';
import { Task } from './task';
import { showInfo, idListTarget, closeModal, activeMenu } from '../moduls/menus';

;
((d) => {

    const list = new List()
    const task = new Task()
    list.consultarLists();
    task.consultarTask();

    /* Crear nueva lista */
    d.getElementById("listBtnSubmit").addEventListener("click", () => {
        const user = firebase.auth().currentUser;
        const lists = d.querySelectorAll(".lists-pendings li")
        const color = d.getElementById("selectColorList").value;

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
    d.getElementById("btnCreateTask").addEventListener("click", () => {
        const user = firebase.auth().currentUser;
        const newTaskName = d.getElementById("newTaskName").value;
        const statusTask = d.getElementById("statusTask").value;
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
    })








})(document)