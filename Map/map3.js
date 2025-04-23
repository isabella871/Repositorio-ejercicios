let cola = new Map ([
    [1, ""],
    [2, ""],
    [3, ""],
    [4, ""],
    [5, ""],
    [6, ""],
    [7, ""]
]);

const agregarCliente = (nombre) => {
    //Limpia el nombre - Verifica si el nombre es válido.
    nombre = nombre.trim();
    if (nombre.length === 0){
        alert("Lo sentimos, debe ingresar un nombre válido");
        return;
    }

    let clienteAgregado = false;
    //Recorre el Map buscando la primera posición vacía (valor === "").
    for (let [posicion, cliente] of cola.entries()){
        if (cliente === ""){
            //Si la encuentra, coloca el cliente y termina.
            cola.set(posicion, nombre);
            alert(nombre + " Ha sido agregado a la posición " + posicion);
            clienteAgregado = true;
            break;
        } 
    }

    //Si no hay espacio, muestra que la cola está llena.
    if (!clienteAgregado){
        alert("La cola está llena " + nombre + " No puede ser agregado");
    }
};

const atenderCliente = () => {
    let clienteAtendido = false;

    for (let [posicion, cliente] of cola.entries()){

        //Buscamos el primer cliente cuyo valor no sea "".
        if (cliente !== ""){
            
            //Mostramos quién es y lo eliminamos, es decir, dejamos su valor como "".
            cola.set(posicion, ""); //Se libera la posición al ser atendido
            alert(cliente + " Ha sido atendido y eliminado de la cola");
            clienteAtendido = true;
            break;
        }
    }
    if (!clienteAtendido) {
        alert("No hay clientes en la cola");
    } 
};

const mostrarCola = () => {
    let resultado = "Clientes en la cola: \n";
    let vacia = true;

    cola.forEach((valor, clave) => {
        if (valor !== ""){
            resultado += "Posicón  " + clave + ": " + valor + " \n";
            vacia = false;
        }
    });

    if (vacia) {
        alert("La cola está vacía");
    }else {
        alert(resultado);
    }
};

const buscarCliente = (nombre) => {
    /*Limpia y convierte a minúsculas el nombre 
    ingresado para comparar correctamente sin importar mayúsculas. */

    nombre = nombre.trim().toLowerCase();
    let encontrado = false;

    //bucle for...of que recorre cada par clave-valor del Map
    for (const [_, cliente] of cola){
        //Dentro del bucle, compara el nombre del cliente (valor del Map) con el nombre buscado
        
        if (cliente.toLowerCase() === nombre){
            //Si lo encuentra, marca encontrado como true y usa break para salir del bucle
            encontrado = true;
            break;
        }
    }

    if (encontrado){
        alert(nombre +  " está en la cola");
    } else {
        alert(nombre + " no está en la cola");
    }
};

const eliminarDuplicados = () => {
    let nombresUnicos = new Set();


    for (let [clave, nombre] of cola){
        if (nombresUnicos.has(nombre) && nombre !== ""){
            cola.set(clave, "");
        }else{
            nombresUnicos.add(nombre);
        }
    }
    alert("Se han eliminado los clientes duplicados en la cola");
};

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