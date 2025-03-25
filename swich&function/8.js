
function ingresarDias (mensaje){
    let cantidadDías = promp(mensaje);
    console.log("Los días ingresados fueron: " + dias);
    return dias;
}

function mostrararMensualidad (dias, mensualidad){

    switch (mensualidad){
        case "15":
            if (dias == "15"){
                mensualidad = 18000;
            }else if (dias == "30"){
                mensualidad = 35000;
            }else if (dias == "90"){
                mensualidad = 86000;
            }else{
                console.log("El precio a pagar es: " + mensualidad)
                alert("El precio a pagar es: " + mensualidad)
            }
            break;
    }
}
