alert("Bienvenido a nuestro servicio de impresión");

function cantidadCopias (){
    let cantidad = parseInt(prompt("Ingrese la cantidad de copias que desea imprimir"));
    let precioDeImpresion;

    if (isNaN(cantidad) || cantidad < 1){
        alert("Ingrese un número valido de copias, mayor o igual a 1");
        return null;
    }

    switch (true){
        case (cantidad <= 499):
            precioDeImpresion = cantidad * 120;
            break;
        case (cantidad <= 749):
            precioDeImpresion = cantidad * 100;
            break;
        default:
            precioDeImpresion = cantidad * 80;
    }
    return{
        cantidad: cantidad,
        precio: precioDeImpresion
    } 
}

function mostrarPrecio (){
    const pago = cantidadCopias ();

    if (pago != null){
    alert("El precio a pagar por las " + pago.cantidad + " copias es de: $" + pago.precio);
    }
}

mostrarPrecio();