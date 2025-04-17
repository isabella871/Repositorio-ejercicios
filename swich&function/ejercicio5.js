function obtenerNota(materia){
    let nota = parseInt(prompt("Ingrese su nota de: " + materia + "entre 1 y 10"));

    if(isNaN(nota) || nota < 1 || nota > 10){
        alert("Nota no válida, porfavor ingrese nuevamente su nota entre 1 y 10");
        return obtenerNota(materia);
    }
    return nota;
}

function obtenerCalificacion(porcentaje) {
    let calificacion;

    switch (true){
        case (porcentaje <= 59.9):
            calificacion = "Mala"
            break;
        case (porcentaje <= 80):
            calificacion = "Buena" 
            break;
        default:
            calificacion = "Excelente"
    }
    return calificacion;
}

function calcularNotas(){
    alert("Bienvenido, estudiante. A continuación, ingrese las notas de sus materias");

    let fisica = obtenerNota("física")
    let quimica = obtenerNota("quimíca")
    let biologia = obtenerNota("biología")
    let matematica = obtenerNota("matemática")
    let informatica = obtenerNota("informática")

    let suma = fisica + quimica + biologia + matematica + informatica;
    let porcentaje = (suma / 50 ) *100 ;
    let calificacion = obtenerCalificacion(porcentaje);

    alert("La suma de todas sus notas es: " + suma);
    alert("Su porcentaje es: " + porcentaje + "y su calificación es: " + calificacion);
    console.log("Su porcentaje es: " + porcentaje + "y su calificación es: " + calificacion);
}

calcularNotas();