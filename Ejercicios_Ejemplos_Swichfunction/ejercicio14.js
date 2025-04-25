alert("Bienvenido a SandwichOrder")

function pedidoSandwich () {
    let pedido = prompt("Bienvenido a SandwichOrder, ¿qué sandwich deseas odenar?")
    return pedido;
}

function tamañoSandwich () {
    let tamaño;
    let precio;

    while (true){
        tamaño = parseInt(prompt("Ingrese el tamaño de sandwich que desea ordenar: 1. Grande / 2. Pequeño"));
    
        if (isNaN(tamaño) || tamaño < 1 || tamaño > 2) {
            alert("Error. Debe seleccionar entre los tamaños 1 & 2");
            continue;
        }

        switch (tamaño){
            case 1:
                precio = 12000;
                break;
            case 2: 
                precio = 6000;
                break;
        }
        break;
    }

    return {
        tamaño: tamaño,
        precio: precio
    };
}

function ingredientesAdicionales () {
    let ingredientesAdicionales1, ingredientesAdicionales2, ingredientesAdicionales3, ingredientesAdicionales4;

    while (true) { 
        ingredientesAdicionales1 = prompt("Ingrese los ingredientes adicionales que desea: tocineta (sí/no)").toLowerCase();
        ingredientesAdicionales2 = prompt("Ingrese los ingredientes adicionales que desea: pavo (sí/no)").toLowerCase();
        ingredientesAdicionales3 = prompt("Ingrese los ingredientes adicionales que desea: queso (sí/no)").toLowerCase();
        ingredientesAdicionales4 = prompt("Ingrese los ingredientes adicionales que desea: jalapeño (sí/no)").toLowerCase();

        if (
            ["sí", "no"].includes(ingredientesAdicionales1) &&
            ["sí", "no"].includes(ingredientesAdicionales2) &&
            ["sí", "no"].includes(ingredientesAdicionales3) &&
            ["sí", "no"].includes(ingredientesAdicionales4)
        ){
            break;
        }

        alert("Error. Debe seleccionar si/no para cada uno de los ingredientes");
    }

    return {
        ingredientesAdicionales1: ingredientesAdicionales1,
        ingredientesAdicionales2: ingredientesAdicionales2,
        ingredientesAdicionales3: ingredientesAdicionales3,
        ingredientesAdicionales4: ingredientesAdicionales4
    };
}

function verPrecio (precio, ingredientesAdicionales1, ingredientesAdicionales2, ingredientesAdicionales3, ingredientesAdicionales4) {
    let precioFinal = precio;

    if (ingredientesAdicionales1 == "sí") {
        precioFinal = precioFinal + 3000;
    }
    if (ingredientesAdicionales2 == "sí") {
        precioFinal = precioFinal + 3000;
    }
    if (ingredientesAdicionales3 == "sí") {
        precioFinal = precioFinal + 2500;
    }
    // El jalapeño (ingredientesAdicionales4) es gratis

    return precioFinal;
}



let sandwich = pedidoSandwich()
let tamaño = tamañoSandwich()
let ingredientes = ingredientesAdicionales()

let precioFinal = verPrecio(
    tamaño.precio,
    ingredientes.ingredientesAdicionales1,
    ingredientes.ingredientesAdicionales2,
    ingredientes.ingredientesAdicionales3,
    ingredientes.ingredientesAdicionales4
);

alert("El valor a pagar por el sándwich " + (tamaño.tamaño == 1 ? "Grande" : "Pequeño") + " es de: $" + precioFinal)
console.log("El valor a pagar por el sándwich " + (tamaño.tamaño == 1 ? "Grande" : "Pequeño") + " es de: $" + precioFinal)
