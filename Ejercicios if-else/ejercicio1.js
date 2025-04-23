let nombre = "Ana López";
let horas = 4;
let salario = 0;

if (horas <= 10) {
    salario = horas * 30000;
    console.log(`Señor/a ${nombre}, el número de horas es ${horas}, su salario equivale a $${salario}`);
    
} else if (horas > 10) {  
    salario = horas * 33000;
    console.log(`Señor/a ${nombre}, el número de horas es ${horas}, su salario equivale a $${salario}`);
}