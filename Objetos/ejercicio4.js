let biblioteca = {
    libros: [
        {
            titulo: "Orgullo y prejuicio",
            autor: "Jane Austen",
            añoPublicado: 1813,
            disponible: true
        },
        {
            titulo: "Cumbres Borrascosas",
            autor: "Emily Brontë",
            añoPublicado: 1847,
            disponible: false
        },
        {
            titulo: "El fantasma de la ópera",
            autor: "Gaston Leroux",
            añoPublicado: 1909,
            disponible: true
        },
        {
            titulo: "Hamlet",
            autor: "William Shakespeare",
            añoPublicado: 1623,
            disponible: false
        }
    ]
}


//Buscamos los libros que estan disponibles
function mostrarDisponibles () {
    for (let i = 0; i < biblioteca.libros.length; i ++){
        if (biblioteca.libros[i].disponible === true){
            console.log(`${i + 1}. ${biblioteca.libros[i].titulo}`);
        }
    }
}


//Buscamos el autor
function buscarPorAutor (autor) {
    let encontrados = biblioteca.libros.filter(libro => libro.autor === autor); // libro => libro.autor === autor - Esa función se ejecuta para cada elemento del array, 
    
    if (encontrados.length > 0){
        encontrados.forEach(libro => {
            console.log(libro.titulo);
        })
    }else{
        console.log("Lo sentimos, el autor ingresado no se encuentra en la biblioteca");
    }
}

mostrarDisponibles();
buscarPorAutor("Jane Austen");