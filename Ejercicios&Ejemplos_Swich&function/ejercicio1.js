
function calcularSalario(horas) {
    let salario;
    
    switch (true) {
        case (horas <= 10):
            salario = horas * 30000;
            break;
        case (horas > 10):
            salario = horas * 33000;
            break;
        default:
            salario = 0;
    }
    return salario;
}

function mostrarSalario(nombre, horas, salario) {
    console.log("Señor/a " + nombre + " , el número de horas es " + horas + " , por esto, su salario equivale a : " + salario);
}

let nombre = "Ana López";
let horas = 4;
let salario = calcularSalario(horas);
mostrarSalario(nombre, horas, salario);
