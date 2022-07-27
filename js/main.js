console.log("BTK Motors")


alert("Bienvenidos a BTK Motors!")

function ingresoUser(){

    let user = prompt('Ingrese su nombre de usuario')

    while(user.length < 3){

        alert("Ingreso incorrecto. Intentelo de nuevo")

        user = prompt('Ingrese su nombre de usuario')
    }

    console.log('Usuario ingresado correcto.')
}

ingresoUser()




let ind = 0




const edad = Number(prompt("Ingrese su edad"))

if(edad >= 18){
    console.log("Es mayor de edad.")

        function accesorios(){

            iva = 21

            let precioBotas = 98900
            let precioGuantes = 12600
            let precioPecheras = 63500
            let precioCascos = 56000

        alert("Accesorios: \n \n Botas \n Casco \n Guantes \n Pechera")
        ind = prompt("Que deseas comprar?").toLowerCase()
        
        


            if(ind == "botas"){
                alert("El precio de las botas es de $" + precioBotas)
                const botas = prompt("Deseas confirmar la compra? Falta incluir IVA").toLowerCase()

                if (botas === "si") {
                    alert("Su pedido fue confirmado")

                    let montoBotas = (precioBotas * iva)/ 100

                    let montoTotalBotas = precioBotas + montoBotas

                    alert("El precio total es : $" + montoTotalBotas)


                     let suma = prompt("Desea agregar algo mas al carrito?").toLowerCase()
                  

                    if(suma == "si"){
                    
                        accesorios()

                    }else {
                        alert("Hasta luego!")
                }
            }
            }



            if(ind == "casco"){
                alert("El precio del casco es de $" + precioCascos)
                const casco = prompt("Deseas confirmar la compra? Falta incluir IVA").toLowerCase()

                if (casco === "si") {
                    alert("Su pedido fue confirmado")

                    let montoCascos = (precioCascos * iva)/ 100

                    let montoTotalCascos = precioCascos + montoCascos

                    alert("El precio total es : $" + montoTotalCascos)


                     let suma = prompt("Desea agregar algo mas al carrito?").toLowerCase()
                  

                    if(suma == "si"){
                    
                        accesorios()

                    }else {
                        alert("Gracias por visitarnos. Hasta luego!")
                }
            } 
            }



            if(ind == "pechera"){
                alert("El precio de la pechera es de $" + precioPecheras)
                const pechera = prompt("Deseas confirmar la compra? Falta incluir IVA").toLowerCase()

                if (pechera === "si") {
                    alert("Su pedido fue confirmado")

                    let montoPecheras = (precioPecheras * iva)/ 100

                    let montoTotalPecheras = precioPecheras + montoPecheras

                    alert("El precio total es : $" + montoTotalPecheras)


                     let suma = prompt("Desea agregar algo mas al carrito?").toLowerCase()
                  

                    if(suma == "si"){
                    
                        accesorios()

                    }else {
                        alert("Gracias por visitarnos. Hasta luego!")
                }
            } 
            }



            if(ind == "guantes"){
                alert("El precio de los guantes es de $" + precioGuantes)
                const guantes = prompt("Deseas confirmar la compra? Falta incluir IVA").toLowerCase()

                if (guantes === "si") {
                    alert("Su pedido fue confirmado")

                    let montoGuantes = (precioGuantes * iva)/ 100

                    let montoTotalGuantes = precioGuantes + montoGuantes

                    alert("El precio total es : $" + montoTotalGuantes)
                    

                     let suma = prompt("Desea agregar algo mas al carrito?").toLowerCase()
                  
                    
                    if(suma == "si"){
                    
                        accesorios()

                    }else {
                        alert("Gracias por visitarnos. Hasta luego!")
                }
            } 
            }


        }


        accesorios()


} else{
    alert("Lo siento, eres menor de edad")
}
