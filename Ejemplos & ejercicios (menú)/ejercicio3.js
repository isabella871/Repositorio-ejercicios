let mensaje= alert("Bienvenido")
let tipoLavadora = prompt("Ingrese el tipo de lavadora que desea utilizar: 1. Grande / 2. Pequeña")
let cantidad = prompt("Ingrese cuantas lavadoras desea utilizar: ")
let horasEnUso = prompt("Ingrese cuantas horas las va a utiizar: ");
let costo = 0;

if( tipoLavadora == 1){
    costo = cantidad * horasEnUso * 40000;   
    if(cantidad > 3){
        costo = costo *(1 - 3 / 100);
    }
}

else if( tipoLavadora == 2){
    costo = cantidad * horasEnUso * 3000;
    if(cantidad > 3){
        costo = costo * (1 -3 / 100);
    }
}

console.log(" Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horasEnUso + " horas: " + costo.toFixed(2))
alert(" Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horasEnUso + " horas: " + costo.toFixed(2))

