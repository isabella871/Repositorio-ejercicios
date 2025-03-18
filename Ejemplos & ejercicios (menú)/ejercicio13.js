let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):").toLowerCase();
let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

if (isNaN(minutos) || minutos < 0) {
    console.log("Error. Ingrese un número válido de minutos.");

} else {
    let cargoFijo, valorMinuto, valorPaquete;

    if (operador === "tigo") {
        cargoFijo = 45000; valorMinuto = 200; valorPaquete = 12000;
    } else if (operador === "claro") {
        cargoFijo = 30000; valorMinuto = 100; valorPaquete = 18000;
    } else if (operador === "movistar") {
        cargoFijo = 40000; valorMinuto = 250; valorPaquete = 8000;
    } else {
        console.log("Error: Operador no válido. Ingrese Tigo, Claro o Movistar.");
        cargoFijo = valorMinuto = valorPaquete = 0; // No calcula si el operador es inválido
    }

    if (cargoFijo > 0) {
        let costoTotal = cargoFijo + (minutos * valorMinuto) + valorPaquete;
        console.log("Operador: " + operador);
        console.log("Minutos internacionales: " + minutos);
        console.log("Costo total: $" + costoTotal);
    }
}
