

/* info para usuario */

const showInfo = (mensaje, tiempo) => {
    const infoText = document.getElementById("infoText");
    const infoBox = document.getElementById("infoBox");

    infoText.innerText = mensaje;
    infoBox.style.marginRight = '0';

    window.setTimeout(() => {
        infoBox.style.marginRight = '-50rem';
        infoText.innerText = '';
    }, tiempo);


}
showInfo('✅ esto funciona', 4000);






export { showInfo }