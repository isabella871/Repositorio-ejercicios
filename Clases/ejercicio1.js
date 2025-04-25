class CursoOnline {
    constructor(nombre, duracionSemanas) {
        this.nombre = nombre;
        this.duracionSemanas = duracionSemanas;
        this.estudiantes = []; // Empezamos con una lista vacía
    }

    // Método para inscribir estudiantes
    inscribirEstudiante(nombreEstudiante) {
        this.estudiantes.push(nombreEstudiante);
        console.log(`${nombreEstudiante} ha sido inscrito en el curso ${this.nombre}.`);
    }

    // Método para mostrar los estudiantes inscritos
    mostrarEstudiantes() {
        if (this.estudiantes.length === 0) {
            console.log(`No hay estudiantes inscritos en el curso ${this.nombre}.`);
        } else {
            console.log(`Estudiantes inscritos en ${this.nombre}:`);
            this.estudiantes.forEach((estudiante, index) => {
                console.log(`${index + 1}. ${estudiante}`);
            });
        }
    }

    // Método para mostrar la información general del curso
    infoCurso() {
        console.log(`Curso: ${this.nombre}`);
        console.log(`Duración: ${this.duracionSemanas} semanas`);
        console.log(`Estudiantes inscritos: ${this.estudiantes.length}`);
    }
}

// Se crea una instancia del curso:
let cursoFrontend = new CursoOnline("Frontend Básico", 4);

// Inscribir estudiantes:
cursoFrontend.inscribirEstudiante("Isabella");
cursoFrontend.inscribirEstudiante("Mateo");
cursoFrontend.inscribirEstudiante("Laura");

// Mostramos la información del curso:
cursoFrontend.infoCurso();

// Mostramos los estudiantes inscritos:
cursoFrontend.mostrarEstudiantes();
