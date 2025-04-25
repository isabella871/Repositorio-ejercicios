/*
    ° Map() – crea el mapa.
    ° map.set(clave, valor)) – almacena el valor asociado a la clave.
    ° map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
    ° map.has(clave) – devuelve true si la clave existe en map, false si no existe.
    ° map.delete(clave) – elimina el elemento con esa clave.
    ° map.clear() – elimina todo del map.
    ° map.size – tamaño, devuelve la cantidad de elementos actual.
*/

let saldo = 0;
let transacciones = new Map (); //Se guardan las transacciones

const mostrarSaldo = () => {
    alert("Su saldo es: " + saldo)
};

const deposito = (monto) => {
    monto = Number (monto)
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido");
        return;
    }
    saldo += monto;

    // Creamos una clave única usando la fecha actual
    let clave = Date.now(); //Genra la clave única usando milisegundos

    //Guardamos la transacción
    transacciones.set(clave, monto);

    //Si hay más de 5 transacciones, se elimina la más antigua
    if (transacciones.size > 5) {
         //Obtiene la clave más antigua (la primera que se ingresó al Map)
        let claveAntigua = transacciones.keys().next().value;
        //Elimina la transacción más antigua
        transacciones.delete(claveAntigua); 
    }

    alert("Se ha depositado: " + monto + " ahora su saldo es de: " + saldo);
};

const retirarDinero = (monto) => {
    monto = Number(monto)

    if (monto > saldo){
        alert("Su saldo es insuficiente para retirar")
        return;
    }
    if (monto > 500){
        alert("No puede retirar más de 500 en una sola transacción")
        return;
    }
    saldo -= monto;
    transacciones.delete(-monto)
    
    if (transacciones.size > 5) {
        let claveAntigua = transacciones.keys().next().value;
        transacciones.delete(claveAntigua);
    }
    alert("Ha sido retirado: " + monto + " ahora su saldo es de: " + saldo);
};


const verTransacciones = () => {
    let mensaje = "Últimas transacciones:\n";

    //Recorre todas las transacciones para mostrarlas
    transacciones.forEach((valor,clave) => {
        let fecha = new Date(clave).toLocaleString(); // Convertimos la clave a fecha
        mensaje += `Deposito de $${valor} en ${fecha} \n `
    });      
    alert(mensaje);
};


while(true){
    let opcion = prompt("Elige una opción: \n1. Consultar saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Ver últimas 5 transacciones \n5. Salir")

    if (opcion === "1"){
        mostrarSaldo()
    }else if (opcion === "2"){
        let monto = prompt("Ingrese el la cantidad de monto que desea depositar");
        deposito(monto)
    }else if (opcion === "3"){
        let monto = prompt("Ingrese la cantidad de monto que dese retirar");
        retirarDinero(monto)
    }else if (opcion === "4"){
        verTransacciones()
    }else if (opcion === "5"){
        alert("Gracias por usar el cajero...");
        break;
    }else{
        alert("Opción invalida. Por favor, intene de nuevo. Debe ser un número entre 1 & 5");
    }
}
