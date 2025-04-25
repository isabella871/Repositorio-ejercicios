alert("Bienvenido a nuestro servicio de operadores");

function verOperador () {
    let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):").toLowerCase();
    return operador;
}

function verMinutos () {
    let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
    
    if (isNaN(minutos) || minutos < 0) {
        alert("Error. Ingrese un número válido de minutos.");
        return null;
    }
    return minutos;
}

function verPlan (operador) {
    let cargoFijo, valorMinuto, valorPaquete;

    switch (operador) {
        case "tigo":
            cargoFijo = 45000; 
            valorMinuto = 200; 
            valorPaquete = 12000;
            break;
        case "claro":
            cargoFijo = 30000; 
            valorMinuto = 100; 
            valorPaquete = 18000;
            break;
        case "movistar":
            cargoFijo = 40000; 
            valorMinuto = 250; 
            valorPaquete = 8000;
            break;
        default:
            alert("Error: Operador no válido. Ingrese Tigo, Claro o Movistar.");
            return null;
    }
    return {
        cargoFijo,
        valorMinuto,
        valorPaquete,
        operador
    }
}

function verPrecioFinal () {
    const operador = verOperador();
    if (!operador) return;

    const plan = verPlan(operador);
    if (!plan) return;

    const minutos = verMinutos();
    if (!minutos === null) return;

    const costoTotal = plan.cargoFijo + (minutos * plan.valorMinuto) + plan.valorPaquete;

    alert("Operador: " + operador + "\nMinutos Internacionales: " + minutos + "\nCosto Total: $" + costoTotal)
}

verPrecioFinal()
