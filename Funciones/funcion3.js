
const sumaDigitos = num => {
    // to.String -- convertir el número a una cadena de texto -- Math.abs(Se asegura que el número sea positivo) 
    const numString = Math.abs(num).toString();

    // Iniciar la variable para almacenar la suma
    let suma = 0;

    // Iterar sobre cada dígito de la cadena de texto
    // for (inicio; condición; incremento){}
    for (let i = 0; i < numString.length; i++){
        // Convertir el dígito actual de cadena a número
        const digito = parseInt(numString[i]);

        // Suma el dígito a la variable suma
        suma += digito;
    }

    // Devolver la suma de los dígitos
    return suma;
}

console.log(sumaDigitos(123));
console.log(sumaDigitos(-67));
console.log(sumaDigitos(0));
