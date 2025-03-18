
function tipoMovimiento (tipo) {
    let direccion;

    switch (true){
        case tipo == "arriba":
            direccion = "Dron moviendose hacia arriba";
            break;
        case tipo == "abajo":
            direccion = "Dron moviendose hacia abajo";
            break;
        case tipo == "derecha":
            direccion = "Dron moviendose hacia la derecha";
            break;
        case tipo == "izquierda":
            direccion = "Dron moviendose hacia la izquierda";
            break;
        default:
            direccion = "Movimiento no identificado";
    }
    console.log(direccion)
}

let movimiento = "derecha" ;
tipoMovimiento(movimiento);
