
const generarFiobonacci = (n) =>{
    // Verificar si n es un número válido
    if (n <= 0 || !Number.isInteger(n)){
        return "Por favor, ingrese un número positivo";
    }

    let resultado = "";
    let a = 0, b = 1;

    // Imprimir los dos primeros números de la serie
    resultado += a + "" + b + "";

    // Generar los números de la serie utilizando un ciclo
    for (let i = 2; i < n; i++){
        const siguiente = a + b;
        resultado += "" + siguiente + "";
        a = b;
        b = siguiente;
    }

    // Devolver la cadena con la serie de Fiobanacci
    return resultado;
}

console.log(generarFiobonacci(8));
console.log(generarFiobonacci(0));
console.log(generarFiobonacci(-5));
