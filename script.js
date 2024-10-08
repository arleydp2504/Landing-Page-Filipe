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


const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close');
let scrollPosition;

// Abrindo o pop-up ao clicar na imagem
document.querySelectorAll('.slide a').forEach(anchor => {
    anchor.onclick = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        scrollPosition = window.scrollY; // Salva a posição de rolagem
        const popupId = anchor.getAttribute('href'); // Obtém o ID do pop-up
        document.querySelector(popupId).style.display = 'block'; // Exibe o pop-up
        document.body.style.overflow = 'hidden'; // Desabilita a rolagem
    };
});

// Fechando o pop-up ao clicar no botão de fechar
closeButtons.forEach(button => {
    button.onclick = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        const popup = button.closest('.popup');
        popup.style.display = 'none'; // Esconde o pop-up
        document.body.style.overflow = ''; // Restaura a rolagem
        window.scrollTo(0, scrollPosition); // Restaura a posição de rolagem
    };
});
