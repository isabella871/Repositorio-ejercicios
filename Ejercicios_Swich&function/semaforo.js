

function determinarAccion(colorSemaforo) {
    let mensaje;
    switch (colorSemaforo) {
        case "rojo":
            mensaje = "parar";
            break;
        case "verde":
            mensaje = "siga";
            break;
        case "amarillo":
            mensaje = "preparar";
            break;
        case "luces intermitentes":
            mensaje = "apagado";
            break;
        case "cambio luces":
            mensaje = "encendido";
            break;
        default:
            mensaje = "estado desconocido";
    }
    return mensaje;
}

let colorSemaforo = "luces intermitentes";
let mensaje = determinarAccion(colorSemaforo);
console.log(mensaje);
