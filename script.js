AOS.init();

/* Inicio slider */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

/* Final do slider */


/* INICIO DO POP UP */

let modalSite = document.querySelector('dialog');
let btnFechar = document.querySelectorAll('dialog button');

let cont= 0

setTimeout(() => {
    modalSite.showModal();
},2000)
btnFechar.forEach(button => {
    button.addEventListener('click', ()=>{
        modalSite.close()
        cont = 1;
    })
})


/* FINAL DO POP UP */
