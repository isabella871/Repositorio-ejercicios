
function calcularCosto(tipoLavadora, cantidad, horasEnUso) {
    let costo = 0;

    switch (tipoLavadora) {
        case '1':
            costo = cantidad * horasEnUso * 40000;
            if (cantidad > 3) {
                costo *= (1 - 3 / 100);
            }
            break;
        case '2':
            costo = cantidad * horasEnUso * 3000;
            if (cantidad > 3) {
                costo *= (1 - 3 / 100);
            }
            break;
        default:
            console.log("Tipo de lavadora no válido");
            break;
    }
    return costo;
}

function mostrarCosto(costo, cantidad, tipoLavadora, horasEnUso) {
    console.log("Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horasEnUso + " horas: " + costo.toFixed(2));
    alert("Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horasEnUso + " horas: " + costo.toFixed(2));
}

alert("Bienvenido");
let tipoLavadora = prompt("Ingrese el tipo de lavadora que desea utilizar: 1. Grande / 2. Pequeña");
let cantidad = prompt("Ingrese cuantas lavadoras desea utilizar: ");
let horasEnUso = prompt("Ingrese cuantas horas las va a utilizar: ");

let costo = calcularCosto(tipoLavadora, cantidad, horasEnUso);
mostrarCosto(costo, cantidad, tipoLavadora, horasEnUso);
