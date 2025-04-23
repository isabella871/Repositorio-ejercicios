/*
    ° Map() – crea el mapa.
    ° map.set(clave, valor)) – almacena el valor asociado a la clave.
    ° map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
    ° map.has(clave) – devuelve true si la clave existe en map, false si no existe.
    ° map.delete(clave) – elimina el elemento con esa clave.
    ° map.clear() – elimina todo del map.
    ° map.size – tamaño, devuelve la cantidad de elementos actual.
*/

let habitaciones = new Map ([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0]
]);

const mostrarEstado = () => {
    let estado = "Estado de las habitaciones: \n";
    habitaciones.forEach((valor,clave) => {
        estado += `Habitación ${clave}: ${valor === 0 ? "Libre" : "Ocupada"} \n`;
    });
    alert(estado);
};

const  reservarHabitacion = (numHabitacion) => {
    if (!habitaciones.has(numHabitacion)){
        alert("El número de habitación es inválido. Por favor, ingrese un número de habitación entre 1 y 5");
    }else if (habitaciones.get(numHabitacion) === 1){
        alert("La habitación se encuentra ocupada");
    }else {
        habitaciones.set(num, 1)
        alert("La habitación "  + numHabitacion + " ha sido reservada con éxito")
    }
};

const liberarHabitacion = (numHabitacion) => {
    if (!habitaciones.has(numHabitacion)){
        alert("El número de habitación es inválido. Por favor, ingrese un número de habitación entre 1 y 5");
    }else if (habitaciones.get(numHabitacion) === 0){
        alert("Ahora, la habitación se encuentra libre");
    }else{
        habitaciones.set(num, 0);
        alert("La habitación " + numHabitacion + " ha sido liberada con éxito");
    }
};

//Menú
while (true) { 
    let opcion = prompt("1. Ver estado \n2.Reservar \n3.Liberar \n4.Salir \nElige una opción:"); 
    if (opcion === "1") { 
        mostrarEstado(); 
    } else if (opcion === "2") { 
        let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); 
        reservarHabitacion(num); 
    } else if (opcion === "3") { 
        let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); 
        liberarHabitacion(num); 
    } else if (opcion === "4") { 
        alert("Saliendo..."); 
        break; 
    } else { 
        alert("Opción inválida."); 
    } 
} 
