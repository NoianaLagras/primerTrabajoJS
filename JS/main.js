
let seguirComprando = false
let pagar =""
let cantidad = 0
let subtotal = parseInt(0)
//                           Forma de pago
function tipoDePago (elegirPago,debito,credito){
    switch (elegirPago) {
        case "1":
        
            return  alert("El valor subtotal de su compra seria $" + debito)
        
        
        case "2":
        
            return alert(("Los pagos con tarjeta de credito tienen un recargo del 10%, el valor subtotal de su compra seria de $")+(credito*1.10))
        
        default: alert("No pudimos procesar tu operacion")
    }

}
//                   Bienvenida al asistente de compras

do{
let bienvenida = prompt("Bienvenido a nuestro asistente de compra , por favor ingrese su nombre")

if (bienvenida== "") {
    alert("No pudimos registrar el nombre ingresado, por favor, intentelo de nuevo")
}else {
    alert("Hola " + bienvenida + "! esperamos ayudarle a registrar su compra , aqui podra ver el monto total de su carrito , la forma de pago y el precio del envio")
}
//                      Unidades a comprar

    do {
        cantidad = parseInt(prompt("Por Favor ingrese la cantidad de unidades que desea comprar (limite de compra 10 unidades)","Ej:3"))

    if (cantidad < 10 ) {
    alert("Ha ingresado " + cantidad + " de unidad/unidades")
    }else if (cantidad > 10) {
        alert("Por favor ingrese un numero menor que el limite de unidades")
        cantidad = 0
        }
    } while (confirm("¿Desea reingresar el numero de unidades?"))
  


//           forma de pago
let precioProducto = 300

subtotal+= cantidad*precioProducto


pagar= prompt ("Ingresa su forma de pago \n 1 Para pagar con tarjeta de debito \n 2 Para pagar con tarjeta de credito")
pagar= tipoDePago (pagar,subtotal,subtotal)


//                          Envios
const calculoDeEnvios = (subtotal) => {
    const envios = confirm ("Desea agregar tambien el envio a domicilio?")
    if (envios && subtotal >= 3000 ) {

        alert ("Felicitaciones! tenes envio a domicilio gratis , el valor total de tu compra es $"+ subtotal)
    
    }  else if (envios && subtotal < 3000) {

        subtotal += 1000
        alert("El total de su compra mas el costo de envio es de $"+ subtotal)

    } else {
        
        alert("El total de su compra es de $"+ subtotal)
    }
    return subtotal
};
 const totalConEnvio = calculoDeEnvios(subtotal)

confirm("Desea realizar esta compra?" )
alert("Muchas gracias!  " +bienvenida+ " por visitar nuestra pagina!")

seguirComprando= confirm("Desea Seguir comprando?")
} while (seguirComprando);
