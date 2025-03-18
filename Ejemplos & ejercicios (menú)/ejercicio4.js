alert("Bienvenido, ingrese un número")
let numero =prompt("Ingrese el número que desee");

// Verificar si la entrada es un número válido
if (numero === null || numero.trim() === "" || isNaN(numero)) {
    alert("Por favor ingrese un número.");
} else {
    numero = Number(numero); // Convertir a número
    if (numero % 2 === 0) {
        console.log("El número: " + numero + " es par");
        alert("El número: " + numero + " es par");
    } else {
        console.log("El número: " + numero + " es impar");
        alert("El número: " + numero + " es impar");
    }
}

