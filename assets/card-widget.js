class CardWidget {
    constructor(nodo, producto){
        this.nodo = nodo,
        this.producto = Object.assign({}, producto),
        this.cantidad = 0,
        this.cantidadDOM = nodo.querySelector("#cantidad")
        this.cantidadDOM.innerText = 0;

        this.suma = nodo.querySelector('.suma')
        this.resta = nodo.querySelector('.resta')
        this.compra = nodo.querySelector('#compra')

        //Sumar +1 en la cantidad de productos
        this.suma.addEventListener('click', () => {
            if (this.cantidad < this.producto.stock){
            this.cantidad++
            this.cantidadDOM.innerText = this.cantidad
            }
        })
        //Restar -1 en la cantidad de productos
        this.resta.addEventListener('click', () => {
            if(this.cantidad != 0){
            this.cantidad--
            this.cantidadDOM.innerText = this.cantidad
        }
        })
        
        //Mostrar cuadro de mensaje 

        const message = document.querySelector('#box__message')

        //Ejecutar con el boton la compra
        this.compra.addEventListener('click', () => {
            carrito.agregarItem(this.producto, this.cantidad)
            

            setTimeout(() => {
                message.classList.add('box__message-active').fadeOut(6000)
            }, 0);
            setTimeout(() => {
                message.classList.remove('box__message-active').fadeIn(6000)
            }, 2000);

        })
        
    }
}