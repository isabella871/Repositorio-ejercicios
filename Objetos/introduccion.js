let libro = {   //Crear objeto
    titulo: "El Sobrino del mago",
    autor: "C.S. Lewis",
    año: 1955
};

console.log("Título:", libro.titulo);  //Acceder a propiedades
console.log("Año:", libro.año);

libro.año = 1995;   //Modificar una propiedad
console.log("Año:", libro.año);

libro.disponible = true;    //Agregar nueva propiedad
console.log("Disponible:", libro.disponible);

delete libro.autor;     //Eliminar una propiedad
console.log("Autor:", libro.autor);

console.log("Información del Libro:", libro);