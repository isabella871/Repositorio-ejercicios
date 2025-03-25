//Si los campos requeridos no son correctos no se continua el programa
//Se debe ingresar un número en el tamaño del sandwich isNaN


alert("Bienvenido a SandwichOrder");
console.log("Bienvenido a SandwichOrder");

let tamaño = parseInt(prompt("Ingrese el tamaño de sandwich que desea ordenar: 1. Grande / 2. Pequeño"));
let ingredientesAdicionales1 = prompt("Ingrese los ingredientes adicionales que desea: tocineta (sí/no)").toLowerCase();
let ingredientesAdicionales2 = prompt("Ingrese los ingredientes adicionales que desea: pavo (sí/no)").toLowerCase();
let ingredientesAdicionales3 = prompt("Ingrese los ingredientes adicionales que desea: queso (sí/no)").toLowerCase();
let ingredientesAdicionales4 = prompt("Ingrese los ingredientes adicionales que desea: jalapeño (sí/no)").toLowerCase();
let valorPagar = 0;

if (tamaño == 1) {
    valorPagar = 12000;
    if (ingredientesAdicionales1 == "sí") {
        valorPagar = valorPagar + 3000;
    }
    if (ingredientesAdicionales2 == "sí") {
        valorPagar = valorPagar + 3000;
    }
    if (ingredientesAdicionales3 == "sí") {
        valorPagar = valorPagar + 2500;
    }
    // El jalapeño es gratis, no se suma al precio
} else if (tamaño == 2) {
    valorPagar = 6000;
    if (ingredientesAdicionales1 == "sí") {
        valorPagar = valorPagar + 3000;
    }
    if (ingredientesAdicionales2 == "sí") {
        valorPagar = valorPagar + 3000;
    }
    if (ingredientesAdicionales3 == "sí") {
        valorPagar = valorPagar + 2500;
    }
    // El jalapeño es gratis, no se suma al precio
} else {
    console.log("Error: Seleccione un tamaño válido (1 o 2).");
    alert("Error: Seleccione un tamaño válido (1 o 2).");
}

console.log("El valor a pagar por el sándwich " + (tamaño == 1 ? "Grande" : "Pequeño") + " es de: $" + valorPagar);
alert("El valor a pagar por el sándwich " + (tamaño == 1 ? "Grande" : "Pequeño") + " es de: $" + valorPagar);
