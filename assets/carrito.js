class Carrito {
    constructor(nombre){
        this.user = nombre,
        this.items = [],
        this.total =  0
    }

    agregarItem(item, cant){
        if(this.items.includes(item)){
            let pos = this.items.indexOf(item)
            this.items[pos].cantidad = cant  
        } else {
            item.cantidad = cant
            this.items.push(item)
        }
    }
}