
function ingresarNumero(numero){
    let num = parseInt(prompt("Ingrese " + numero + ":"));

    if(isNaN(num)){
        alert("Por favor ingrese un número válido");
        return ingresarNumero(numero)
    }
    return num;
}

function calcularNumeroMayor(){
    alert("Bienvenido, ingrese tres números");

    let num1 = ingresarNumero ("numero 1");
    let num2 = ingresarNumero ("numero 2");
    let num3 = ingresarNumero ("numero 3")

    let mayor= Math.max(num1, num2, num3);

    alert("El número mayor es: " + mayor);
    console.log("El número mayor es: " + mayor);
}

calcularNumeroMayor()

