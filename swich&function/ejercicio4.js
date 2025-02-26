
function comprobarParImpar(numero) {
    switch (true) {
        case numero % 2 === 0:
            return "El número: " + numero + " es par";
        case numero % 2 !== 0:
            return "El número: " + numero + " es impar";
    }
}

alert("Bienvenido, ingrese un número");
let numero = prompt("Ingrese el número que desee");


if (numero === null || numero.trim() === "" || isNaN(numero)) {
    alert("Por favor ingrese un número.");
} else {
    numero = Number(numero); 
    let result = comprobarParImpar(numero);
    console.log(result);
    alert(result);
}