let pelicula = {
    titulo: "The Great Gatsby",
    director: "Baz Luhrmann",
    añoEstreno: 2013,
    generos: ["comedia", "fantasía","drama","romance"]
}

function mostrarInfo (pelicula) {
    console.log(pelicula.titulo.toUpperCase()); 

    if (pelicula.añoEstreno >= 2010){
        console.log("La película es moderna");
    }else{
        console.log("La película es clásica");
    }
}

for (let i = 0; i < pelicula.generos.length; i++){
    console.log(`${i + 1}. ${pelicula.generos[i]}`);
}

function agregarGenero (pelicula, nuevoGenero) {
    if (pelicula.generos.includes(nuevoGenero)){
        console.log("El género ya está en la lista");
    }else{
        pelicula.generos.push(nuevoGenero);
        console.log("El genero ha sido agregado, la lista está actualizada:", pelicula.generos);
    }
}

mostrarInfo(pelicula);
agregarGenero(pelicula, "historico");

console.log("Título:", pelicula.titulo);
console.log("Géneros Actualizados:", pelicula.generos);