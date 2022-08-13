
//HACER LOGIN CON MODAL

//MODAL  

const modalConteiner = document.querySelector('#modal__conteiner')
const modal = document.querySelector('#modal')

const abrirModal = document.querySelector('#boton__user')
const cerrarModal = document.querySelector('#boton__close')

abrirModal.addEventListener('click',() => {
    modalConteiner.classList.add('modal__conteiner-active')
})

cerrarModal.addEventListener('click',() => {
    modalConteiner.classList.remove('modal__conteiner-active')
})

//FIN MODAL


  //Productos -------------------------------------------------------------------

class producto {
    constructor(img, nombre, precio){
    this.img = img,
    this.nombre = nombre,
    this.precio = precio
    }
    };
    
    let baseDeDatos = [];
    
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/casco.jpeg" alt="Casco">', "Casco Moto Cross Enduro Ufo Onyx Rapture Winnersport", 56000))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/pechera.jpeg" alt="Pechera">', "Pechera Fox Proframe LC", 33600))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/guante.jpeg" alt="Guantes">', "Guantes Fox Dirtpaw Mata", 12300))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/botas.jpeg" alt="Botas">', "Botas Alpinestars Tech 8 Rs", 102500))
    
    const section = document.querySelector("#section__productos")
    const section1 = document.querySelector("#section__productos1")
    let temp = document.querySelector("template")
    let card = temp.content.querySelector("div")
    
    
    baseDeDatos.forEach((elemt) => {
        let cardClonada = card.cloneNode(card, true)
        cardClonada.children[0].innerHTML = elemt.img
        cardClonada.children[1].innerText = elemt.nombre
        cardClonada.children[2].innerText = "$" + elemt.precio
    
        section.appendChild(cardClonada)
    })

    //Final Productos -------------------------------------------------------------------
    
    