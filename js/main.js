
// -- MODAL USUARIO ---------------------------------------------------------------------------------------- 

//SELECCION DE LOS ID DEL MODAL EN EL HTML
const modalConteiner = document.querySelector('#modal__conteiner')
const modal = document.querySelector('#modal')
// BOTONES PARA ABRIR O CERRAR EL MODAL
const abrirModal = document.querySelector('#boton__user')
const cerrarModal = document.querySelector('#boton__close')

//EVENTO PARA ABRIR O CERRAR EL MODAL
abrirModal.addEventListener('click',() => {
    modalConteiner.classList.add('modal__conteiner-active')
})

cerrarModal.addEventListener('click',() => {
    modalConteiner.classList.remove('modal__conteiner-active')
})


// -- FORMULARIO MODAL USUARIO -----------------------------------------------------------------------------------

const tituloNombre = document.querySelector('#title__nombre')

//SELECCION DE INPUTS DE LOS CAMPOS DE DATOS
const inputNombre = document.querySelector('#input__nombre')
const inputApellido = document.querySelector('#input__apellido')
const inputGmail = document.querySelector('#input__gmail')
const btnSubmit = document.querySelector('#btn__submit')

const formulario = document.querySelector('#formulario')

//EVENTO PARA ENVIAR LA INFORMACION RELLENADA EN EL ANTERIOR PASO Y GUARDAR EN EL HTML Y EN LOCALSTORAGE
formulario.addEventListener('submit', (event) => {
event.preventDefault()
modalConteiner.classList.remove('modal__conteiner-active')

const nombre = inputNombre.value
const apellido = inputApellido.value 
const mail = inputGmail.value

// --  LOCAL STORAGE --------------------------------------------

let usuarioLocal = localStorage.getItem('usuario')

const pedirUsuarioLocal = () => {
  usuarioLocal = mail
  localStorage.setItem('usuario', usuarioLocal)
}

  pedirUsuarioLocal()

const btnChangeUser = document.querySelector('#btn__change')

btnChangeUser.addEventListener('click', () => {
  localStorage.removeItem('usuario')
  modalConteiner.classList.remove('modal__conteiner-active')
  nombre__user.innerHTML = `Iniciar Sesion`
})

// -- FINAL LOCAL STORAGE ---------------------------------------


nombre__user.innerHTML = `Bienvenido ${nombre} ${apellido}`

console.log('ENVIAR')
})

// -- FINAL FORMULARIO MODAL USUARIO -----------------------------------------------------------------------------

// -- FINAL MODAL USUARIO ---------------------------------------------------------------------------------------- 



// -- CARRITO MODAL ----------------------------------------------------------------------------------------------

const contenedorProductos = document.getElementById('contenedor-productos')


const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const finalizarCompra = document.getElementById('finalizar-compra')

// MODIFICACION DEL CONTADOR
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//ALERTA PARA VACIAR CARRITO
botonVaciar.addEventListener('click', () => {

    Swal.fire(
      {
      title: 'Estas seguro de vaciar el carrito?',
      icon: 'warning',
      iconColor: 'red',
      showCancelButton: true,
      confirmButtonText: 'Si, vaciar',
      cancelButtonText: 'No, cancelar'
    }
    ).then( (result) => {
      if(result.isConfirmed){
        carrito.length = 0
        actualizarCarrito()
      }
    }
    )

})

//ALERTA PARA FINALIZAR LA COMPRA
finalizarCompra.addEventListener('click', () => {

  Swal.fire(
    {
    title: 'Deseas confirmar la compra?',
    showCancelButton: true,
    confirmButtonText: 'Si, confirmar',
    cancelButtonText: 'No, cancelar',
  }
  ).then( (result) => {
    if(result.isConfirmed){
      carrito.length = 0
      actualizarCarrito()
      contenedorModal.classList.toggle('modal-active')

      Swal.fire({
        title: 'Hecho!',
        text: 'Gracias por su compra!',
        icon: 'success',
        timer: '4000',
        showConfirmButton: false,
      })
    }

  }
  )

})


//INTRODUCCION DEL PRODUCTO EN EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <div class="conteiner-img">
    <img class="card-img" src=${producto.img} alt= "">
    </div>
    <h3 class="card-h3">${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">
        <img class="btn-img-red" src="./image/sumarred.svg" alt="Sumar">
        <img class="btn-img" src="./image/carrito.svg" alt="Carrito">
    </button>
    `
    contenedorProductos.appendChild(div)

    //INTRODUCCION DEL HTML AL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)

        Swal.fire({
          title: 'Producto agregado al carrito',
          icon: 'success',
          iconColor: 'red',
          position: 'bottom-end',
          timer: '2000',
          showConfirmButton: false,
          toast: true,
        })
        //
    })
})

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carrito

    if (existe){ //SI YA ESTÁ EN EL CARRITO, SE ACTUALIZA LA CANTIDAD
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Se trabaja con ID
        carrito.push(item)
    }

    actualizarCarrito() 
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1) 

    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = ""
    // AGREGAR AL MODAL. Se recorre sobre el array de carrito.

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p class="productoEnCarrito-p">${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><img class="boton-eliminar-svg" src="./image/basura.svg" alt="basurero"></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length // Actualizamos con la longitud del carrito.
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto que se recorre en el carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.
}

// -- FINAL CARRITO MODAL ----------------------------------------------------------------------------------------