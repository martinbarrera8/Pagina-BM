
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

//FORM MODAL

const tituloNombre = document.querySelector('#title__nombre')

const inputNombre = document.querySelector('#input__nombre')
const inputApellido = document.querySelector('#input__apellido')
const inputGmail = document.querySelector('#input__gmail')
const btnSubmit = document.querySelector('#btn__submit')

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
event.preventDefault()

const nombre = inputNombre.value
const apellido = inputApellido.value 

nombre__user.innerHTML = `Bienvenido ${nombre} ${apellido}`

console.log('ENVIAR')
})

//FIN FORM MODAL

//FIN MODAL


  //Productos -------------------------------------------------------------------

    //CARRITO
  let carrito =  new Carrito('Stefano')

    let baseDeDatos = [];
    
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/casco.jpeg" alt="Casco">', "Casco Moto Cross Enduro Ufo Onyx Rapture Winnersport", 56000))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/pechera.jpeg" alt="Pechera">', "Pechera Fox Proframe LC", 33600))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/guante.jpeg" alt="Guantes">', "Guantes Fox Dirtpaw Mata", 12300))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/botas.jpeg" alt="Botas">', "Botas Alpinestars Tech 8 Rs", 102500))
    
    const section = document.querySelector("#section__productos")
    let temp = document.querySelector("template")
    let card = temp.content.querySelector("div.card")
    
    render(baseDeDatos)
    
    function render(array) {
        array.forEach((elemt) => {
            let cardClonada = card.cloneNode(card, true)
            cardBody = cardClonada.querySelector('.card__body')
            cardBody.children[0].innerHTML = elemt.img
            cardBody.children[1].innerText = elemt.nombre
            cardBody.children[2].innerText = "$" + elemt.precio
        
            section.appendChild(cardClonada)
            new CardWidget (cardClonada, elemt)
        })
    }

    //Final Productos -------------------------------------------------------------------
    
    