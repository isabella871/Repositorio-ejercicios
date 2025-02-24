alert("Bienvenido, estudiante")

let fisica= obtenerNota("Física");
let quimica= obtenerNota("Química");
let biologia= obtenerNota("Biología");
let matematicas= obtenerNota("Matemática");
let informatica= obtenerNota("Informática");


//Obtener y validar notas

function obtenerNota(materia){
    let nota;
    do{
        console.log(" Ingrese nota de " + materia +":");
        nota = parseFloat(prompt(" Ingrese nota de " + materia + " entre 0 y 10 "));
        
        if(isNaN(nota) || nota < 0 || nota > 10 ){
            alert("Ingrese una nota entre 0 y 10");
            console.log(" ⚠ Error, nota no valida. Ingrese una nota entre 0 y 10");
        }
    }while(isNaN(nota) || nota < 0 || nota >10 );

    console.log(nota); //Muestra las notas debajo de la materia
    return nota;
}


//Notas en consola

console.log("\n📌 Notas Ingresadas")
console.log("Física: "  + fisica);
console.log("Química: "  + quimica);
console.log("Biología: "  + biologia);
console.log("Matemáticas: "  + matematicas);
console.log("Informática: "  + informatica);


//Calculo de porcentaje final

let sumaNotas=  fisica + quimica + biologia + matematicas + informatica;
let porcentaje= (sumaNotas / 50) * 100;


//Calificación cuanlitativa

let calificacion;
if(porcentaje >= 0 && porcentaje < 60){
    calificacion= "Mala";
}else if(porcentaje >= 60 && porcentaje <= 80){
    calificacion= "Buena"
}else{
    calificacion= "Excelente"
}


//Calculos en consola

console.log("\n📊 Calculo del rendimiento académico");
console.log("Suma total de notas: "  + sumaNotas);
console.log("Porcentaje obtenido " + porcentaje + " % ");
console.log("Tú calificación es " + calificacion);



console.log("\n✅ Tú porcentaje es: " + porcentaje + "% y tu calificación es: " + calificacion);


