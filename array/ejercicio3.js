
let cola = []; 
const capacidadMaxima = 7; 

const agregarCliente = (nombre) => {
    nombre = nombre. n ()
    if (nombre.length === 0) {
        alert("Debe ingresar un nombre válido.")
        return;
    }

    if (cola.length < capacidadMaxima) {
        cola.push(nombre);
        alert(nombre + "ha sido agregado a la cola")
    } else {
        alert("La cola está llena " + nombre +  "no puede ingresar");
    }
}


const atenderCliente = () => {
    if (cola.length > 0) {
        let clienteAtendido = cola.at(0)
        cola.shift()
        alert(clienteAtendido +  " ha sido atendido");
    } else {
        alert("No hay clientes en la cola para atender.");
    }
}


const mostrarCola = () => {
    if (cola.length === 0) {
        alert("La cola está vacía.");
    } else {
        alert("Clientes en la cola:");
        cola.forEach((cliente, index) => {
            alert(index + 1 + "" + cliente);
        });
    }
}


const buscarCliente = (nombre) => {
    if (cola.some(cliente => cliente.toLowerCase() === nombre.toLowerCase())) {
        (nombre +  " está en la cola");
    } else {
        alert(nombre + " no está en la cola");
    }
}

const eliminarDuplicados = () => {
    cola = cola.filter((cliente, index, arr) => arr.indexOf(cliente) === index);
    alert("Se han eliminado los clientes duplicados en la cola.");
}


while (true) {
    let opcion = prompt("Elige una opción:\n1. Agregar cliente\n2. Atender cliente\n3. Ver cola\n4. Buscar cliente\n5. Eliminar duplicados\n6. Salir");

    if (opcion === "1") {
        let nombre = prompt("Ingrese el nombre del cliente:");
        agregarCliente(nombre);
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        mostrarCola();
    } else if (opcion === "4") {
        let nombre = prompt("Ingrese el nombre del cliente a buscar:");
        buscarCliente(nombre);
    } else if (opcion === "5") {
        eliminarDuplicados();
    } else if (opcion === "6") {
        alert("Saliendo del programa...");
        break;
    } else {
        alert("Opción inválida. Inténtelo de nuevo.");
    }
}

