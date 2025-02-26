
function cantidadRetirar(dinero){
    let cantidad;

    switch(true){
        case dinero >= 10000:
            cantidad = "Puede retirar el dinero";
            break;
        default:
            cantidad = "No puede retirar el dinero";
    }
    console.log(cantidad);
}

let precio = 20;
cantidadRetirar(precio);