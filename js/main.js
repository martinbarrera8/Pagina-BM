// -------------------------------------------------------------------
// alert("Bienvenidos a BTK MOTORS!")

// const nombre = prompt("Cual es tu nombre?")

// const nombreUser = document.getElementById("nombreUser")

// nombreUser.innerHTML = `Bienvenido ${nombre}!` 
// nombreUser.append()

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
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/pechera.jpeg" alt="Casco">', "Pechera FOX", 33600))
    baseDeDatos.push(new producto ('<img class="card__img" src="./image/guante.jpeg" alt="Casco">', "Guantes FOX", 11500))
    baseDeDatos.push(new producto ("botas.jpeg", "Botas FOX", 67500))
    
    
    
    const section = document.querySelector("#section__productos")
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
    
    