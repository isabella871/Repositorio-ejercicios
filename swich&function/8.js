
alert ("Bienvenido a nuestro gimnacio");

function calcularMensualidad (dias){
    let mensualidad;

    switch(dias){
        case "15":
            mensualidad =18000;
            break;
        case "30":
            mensualidad = 35000;
            break;
        case "90":
            mensualidad = 86000;
            break;
        default:
            mensualidad = null;
    }
    return mensualidad;
}

function mostrarValor (mensualidad){
    if (mensualidad != null){
        console.log("El precio a pagar es: " + mensualidad);
        alert ("El precio a pagar es: " + mensualidad);
    }else{
        console.log("Los datos ingresados son invalidos. Por favor ingrese la información correspondiente");
        alert("Los datos ingresados son invalidos. Por favor ingrese la información correspondiente")
    }
}

let dias = prompt("Escoja entre los siguientes días: 15, 30 o 90 días")
let mensualidad = calcularMensualidad(dias);
mostrarValor(mensualidad);
