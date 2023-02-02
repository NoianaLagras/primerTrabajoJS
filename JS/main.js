//                   Bienvenida al asistente de compra


let bienvenida = prompt("Bienvenido a nuestro asistente de compra , por favor ingrese su nombre")

if (bienvenida== "") {
    alert("No pudimos registrar el nombre ingresado, por favor, vuelva a ingresar su nombre")
}else { 
    alert("Hola " + bienvenida + " esperamos ayudarle a registrar su compra , aqui podra ver el monto total de su compra y la forma de pago")
}
//                      Unidades a comprar
do {
    let cantidad = prompt("Por Favor ingrese la cantidad de unidades que desea comprar (limite de compra 10 unidades)","Ej:3")

if (cantidad<10) {
    alert("Ha ingresado " + cantidad + " unidad/unidades")
}else { 
    alert("Por favor ingrese un numero menor que el limite de unidades")
    cantidad = 0
    break;
}
} while (confirm("¿Desea reingresarlo?"));
//                           Forma de pago






