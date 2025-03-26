
alert("Ingrese los tres números enteros a sumar");

function ingresarAngulos (angulo1, angulo2, angulo3){
    if(isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)){
        console.log("Ingrese únicamente números enteros");
        return null;
    }else{
        return angulo1 + angulo2 + angulo3;
    }
}

function validarTriangulo(suma){
    switch (suma){
        case 180:
            console.log("La suma de los ángulos es: " + suma + " el triángulo es válido");
            alert("La suma de los ángulos es: " + suma + " el triángulo es válido");
            break;
        default:
            console.log("La suma de los ángulos es: " + suma + " el triángulo no es válido");
            alert(" La suma de los ángulos es: " + suma +  " el triángulo no es válido");
            break;
    }
}

let angulo1 = parseInt(prompt("Ingrese un número entero para el angulo 1"));
let angulo2 = parseInt(prompt("Ingrese un número entero para el angulo 2"));
let angulo3 = parseInt(prompt("Ingrese un número entero para el angulo 3"));

let suma = ingresarAngulos(angulo1, angulo2, angulo3);
if (suma !== null){
    validarTriangulo(suma);
}

