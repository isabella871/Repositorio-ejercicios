
const esPrimo = num => {
    // Verificar si el número es menor que 2 (Los números menores que 2 no son primos)
    if (num < 2){
        return false;
    }

    // Verificar el número es 2 (el único número par primo)
    if (num === 2){
        return true;
    }

    // Verificar si el número es impar 
    if (num % 2 === 0){
        return false;
    }

    // Verificar si el número es divisible por cualquier número impar entre 3 y la raíz cuadrada del número
    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2){
        if (num % i === 0 ){
            return false;
        }
    }

    // Si no es divisible por ningún número entonces es primo
    return true;

}

console.log(esPrimo(7));
console.log(esPrimo(10));
console.log(esPrimo(17));
console.log(esPrimo(0));
console.log(esPrimo(1));