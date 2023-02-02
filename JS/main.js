
let seguirComprando = false
let pagar =""
let cantidad = 0
let precioFinal =0
//                           Forma de pago
function tipoDePago (elegirPago,debito,credito){
    switch (elegirPago) {
        case "1":
            
            return  alert("El valor de su compra seria $" + debito)
            
          
        case "2":
            
            return alert(("Los pagos con tarjeta de credito tienen un recargo del 10%, el valor de su compra seria de $")+(credito*1.10))
        
        default: alert("No pudimos procesar tu operacion")
        
        
    }

}
//                   Bienvenida al asistente de compra


let bienvenida = prompt("Bienvenido a nuestro asistente de compra , por favor ingrese su nombre")

if (bienvenida== "") {
    alert("No pudimos registrar el nombre ingresado, por favor, intentelo de nuevo")
}else { 
    alert("Hola " + bienvenida + " esperamos ayudarle a registrar su compra , aqui podra ver el monto total de su carrito y la forma de pago")
}
//                      Unidades a comprar
do{
    do {
        cantidad = prompt("Por Favor ingrese la cantidad de unidades que desea comprar (limite de compra 10 unidades)","Ej:3")

    if (cantidad < 10 ) {
    alert("Ha ingresado " + cantidad + " de unidad/unidades")
    }else if (cantidad > 10) {
        alert("Por favor ingrese un numero menor que el limite de unidades")
        cantidad = 0
        }
    } while (confirm("¿Desea reingresarlo?"))
  


//forma de pago
let precioProducto = 300

precioFinal+= cantidad*precioProducto


pagar= prompt ("Ingresa su forma de pago \n 1 Para pagar con tarjeta de debito \n 2 Para pagar con tarjeta de credito")
pagar= tipoDePago (pagar,precioFinal,precioFinal)
confirm("Desea realizar esta compra?" )

seguirComprando= confirm("Desea Seguir comprando?")
} while (seguirComprando);
 alert("Muchas gracias por visitar nuestra pagina!")