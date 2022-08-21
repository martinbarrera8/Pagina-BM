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


        this.suma.addEventListener('click', () => {
            if (this.cantidad < this.producto.stock){
            this.cantidad++
            this.cantidadDOM.innerText = this.cantidad
            }
        })
        this.resta.addEventListener('click', () => {
            if(this.cantidad != 0){
            this.cantidad--
            this.cantidadDOM.innerText = this.cantidad
        }
        })

        this.compra.addEventListener('click', () => {
            carrito.agregarItem(this.producto, this.cantidad)
        })
        
    }
}