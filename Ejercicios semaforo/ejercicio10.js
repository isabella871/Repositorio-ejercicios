alert("Bienvenido a nustro servicio de impresión");
console.log("Bienvenido a nustro servicio de impresión");

let cantidadCopias =parseInt(prompt("Ingrese el número de copias que desee"));
let precioDeImpresion;

if(isNaN(cantidadCopias) || cantidadCopias < 0){
    alert("Ingrese un número valido de copias");
}else if(cantidadCopias <=499){
    precioDeImpresion = cantidadCopias * 120;
}else if(cantidadCopias <= 749){
    precioDeImpresion = cantidadCopias * 100;
}else if(cantidadCopias <= 999){
    precioDeImpresion = cantidadCopias * 80;
}else{
    precioDeImpresion = cantidadCopias * 50;
}

if (!isNaN(precioDeImpresion)) {
    console.log("El precio a pagar por las " + cantidadCopias + " copias es de: $" + precioDeImpresion);
    alert("El precio a pagar por las " + cantidadCopias + " copias es de: $" + precioDeImpresion);
}
    
