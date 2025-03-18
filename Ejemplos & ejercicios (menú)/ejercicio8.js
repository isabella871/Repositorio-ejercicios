alert("Bienvenido a nuestro gimnasio");

let mensualidad = prompt("Ingrese el costo de mensualidad que desea pagar: 18000 (15 días), 35000 (30 días), 86000 (90 días)");
let dias = prompt("Escoja entre los siguientes días: 15, 30 o 90 días");

if(dias === "15"){
    mensualidad = 18000;      
}else if(dias === "30"){
    mensualidad = 35000;
}else if(dias === "90"){
    mensualidad = 86000;
}else{
    console.log("El precio a pagar es: " + mensualidad)
    alert("El precio a pagar es: " + mensualidad)
}
console.log("La información ingresada no es valida. Ingrese el costo de la mensualidad al día correspondiente")
alert("La información ingresada no es valida. Ingrese el costo de la mensualidad al día correspondiente")
