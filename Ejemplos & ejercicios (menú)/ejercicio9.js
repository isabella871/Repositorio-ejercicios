alert("Ingrese los tres números enteros a sumar");

let angulo1 = parseInt(prompt("Ingrese un número entero para el angulo1:"));
let angulo2 = parseInt(prompt("Ingrese un número entero para el angulo2:"));
let angulo3 = parseInt(prompt("Ingrese un número entero para el angulo3:")); 


if(isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)){
    console.log("Ingrese únicamente números enteros");
    alert("Ingrese únicamente números enteros");

}else{
    let suma = angulo1 + angulo2 + angulo3;
    console.log("La suma de los angulos: " + suma);
    alert("La suma de los angulos: " + suma);

    if(suma == 180){
        console.log("El triángulo es válido de acuerdo a la suma de los angulos: " + suma);
        alert("El triángulo es válido de acuerdo a la suma de los angulos: " + suma);
    }else{
        console.log("El triángulo no es válido");
        alert("El triángulo no es válido");
    }
}

    