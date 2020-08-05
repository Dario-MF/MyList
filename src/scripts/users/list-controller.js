import { List } from './list';
import { showInfo, closeModal, showModal, modalLogin, modalRegistro } from '../moduls/menus';

;
((d) => {

    const list = new List()
    list.consultarLists();

    d.getElementById("listBtnSubmit").addEventListener("click", () => {
        const list = new List();
        const user = firebase.auth().currentUser;

        if (user == null) {
            showInfo('Para crear una lista debe estar registrado', 5000);
            return
        }
        const color = d.getElementById("selectColorList").value;

        list.crearList(user.uid, user.email, color);

    });








})(document)