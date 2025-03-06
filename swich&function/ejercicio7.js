
function ingreseGenero(mensaje){
    let genero = prompt(mensaje);
    console.log("Genero ingresado es: " + genero);
    return genero;
}

function ingresarEdad(numero){
    let edad = parseInt(prompt("Ingrese " + numero + ":"));

    while (isNaN(edad)){
        alert("Por favor ingrese un número válido");
        edad = parseInt(prompt("Ingrese " + numero + ":"));
    }
    return edad;
}

function mostrarAyudaEconomica(genero, edad){
    let ayuda = 0;

    switch (genero){
        case "femenino":
            if (edad > 50){
                ayuda = 120000;
            }else if (edad >= 30 && edad <=50 ){
                ayuda = 100000;
            }else if(edad < 30 ){
            console.log("No recibe ayuda");
            alert("No recibe ayuda");
            }
            break;

        case "masculino":
            ayuda = 40000;
            break;
        default: 
            console.log("Datos incorrectos. Por favor vuelva a ingresarlos");
            alert("Datos incorrectos. Por favor vuelva a ingresarlos");
    }
    return ayuda;
}

alert("Bienvenido señor/a usuario")

let genero = ingreseGenero ("Ingrese su genero, femenino o masculino");
let edad = ingresarEdad("Su edad");
let reciben = mostrarAyudaEconomica (genero , edad);

console.log("El valor de su ayuda económica mensual es de: " + reciben);
alert("El valor de su ayuda económica mensual es de " + reciben);



