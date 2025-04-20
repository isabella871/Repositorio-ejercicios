let saldo = 0;
let transacciones = [0, 0, 0, 0, 0];

const mostrarSaldo = () => {
    alert("Su saldo es: " + saldo)
};

const deposito = (monto) => {
    monto = Number(monto)
    saldo += monto;
    transacciones.push(monto)

    if(transacciones.length > 5){
        transacciones.shift()
    }
    alert ("Se ha depositado: " + monto + " Su saldo ahora es de: " + saldo)
};

const retirarDinero = (monto) => {
    monto = Number(monto)

    if (monto > saldo){
        alert("Su saldo es insuficiente para retirar")
        return;
    }
    if( monto > 500){
        alert("No puede retirar más de 500 en una sola transacción")
        return;
    }
    saldo -= monto;
    transacciones.push(-monto)
    if(transacciones.length > 5){
        transacciones.shift()
    }
    alert("Ha sido retirado: "  + monto +  " ahora, su saldo es de: "  + saldo)
};

const verTransacciones = () => {
    alert("Ver las últimas cinco transacciones: " + transacciones)

    transacciones.forEach((t, index) =>{
        let tipoTransaccion = t > 0 ? "Deposito" : "Retiro"
        alert("Transacción " + tipoTransaccion + " : " + Math.abs(t)) 
    })
};


while(true){
    let opcion = prompt("Elige una opción: \n1. Consultar saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Ver últimas 5 transacciones \n5. Salir")

    if (opcion === "1"){
        mostrarSaldo()
    }else if (opcion === "2"){
        let monto = prompt("Ingrese el la cantidad de monto que desea depositar")
        deposito(monto)
    }else if (opcion === "3"){
        let monto = prompt("Ingrese la cantidad de monto que dese retirar")
        retirarDinero(monto)
    }else if (opcion === "4"){
        verTransacciones()
    }else if (opcion === "5"){
        alert("Gracias por usar el cajero...")
        break;
    }else{
        alert("Opción invalida. Por favor, intene de nuevo")
    }
}