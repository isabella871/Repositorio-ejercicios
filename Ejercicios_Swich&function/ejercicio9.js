alert("Ingrese los tres números enteros a sumar");

function ingresarAngulos () {
    let angulo1, angulo2, angulo3;

    while (true) {
        angulo1 = parseInt(prompt("Ingrese un número entero para el ángulo 1"));
        angulo2 = parseInt(prompt("Ingrese un número entero para el ángulo 2"));
        angulo3 = parseInt(prompt("Ingrese un número entero para el ángulo 3"));
    
        if (
            Number.isInteger(angulo1) &&
            Number.isInteger(angulo2) &&
            Number.isInteger(angulo3)
        ){
            return angulo1 + angulo2 + angulo3;
        }else{
            alert("Ingrese únicamente números enteros válidos para los tres ángulos")
        }
    }
}


function validarTriangulo(suma){
    switch (suma){
        case 180:
            console.log("La suma de los ángulos es: " + suma + " el triángulo es válido");
            alert("La suma de los ángulos es: " + suma + " el triángulo es válido");
            break;
        default:
            console.log("La suma de los ángulos es: " + suma + " el triángulo no es válido, dado que la suma de los ángulos de un triángulo es 180 grados");
            alert(" La suma de los ángulos es: " + suma +  " el triángulo no es válido, dado que la suma de los ángulos de un triángulo es 180 grados");
            break;
    }
}

let suma = ingresarAngulos();
validarTriangulo(suma);





