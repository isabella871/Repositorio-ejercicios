
function cantidadRetirar(dinero) {
    let cantidad;

    switch (true) {
        case dinero >= 10000:
            cantidad = "Puede retirar el dinero";
            break;
        case dinero >= 5000:
            cantidad = "Puede retirar una cantidad menor";
            break;
        default:
            cantidad = "No puede retirar el dinero";
    }
    console.log(cantidad);
}

let precio = 20000;
cantidadRetirar(precio);
