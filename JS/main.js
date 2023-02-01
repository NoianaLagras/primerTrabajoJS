let producto = ""
let nombreProducto= "Anillo LOTR plata"
let seguirComprando = false
let cantidad = 0
let precio = 0
let precioFinal= 0

alert("Desea comprar este producto "+nombreProducto )
do {
    cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar (limite : 10 unidades)" ,"Ej: 3"))    

    producto= prompt("Como desea abonar su compra?" , "Ej: Credito (recargo 10%) o Debito")
    switch (producto) {
        case "Debito":
            precio= 300
            break
        case "Credito":
            precio=350
            break
        default:
            alert("Elija una opcion valida para abonar su compra")
            precio = 0
            cantidad = 0
            break;
    }
    precioFinal+= cantidad*precio
    alert("El valor total de la compra seria $"+precioFinal )
    seguirComprando= confirm("Desea Seguir comprando")
} while (seguirComprando);

alert("La compra del producto se ha realizado con Exito!")