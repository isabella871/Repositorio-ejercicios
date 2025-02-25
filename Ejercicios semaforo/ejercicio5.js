alert("Bienvenido, estudiante. A continuación, ingrese las notas de las materias. Recuerde que debe ser un número del 1 al 10");

let fisica = parseInt(prompt("Ingrese su nota de física"));
let quimica = parseInt(prompt("Ingrese su nota de química"));
let biologia = parseInt(prompt("Ingrese su nota de biología"));
let matematicas = parseInt(prompt("Ingrese su nota de matemáticas"));
let informatica = parseInt(prompt("Ingrese su nota de informática"));
let calificacion;


if (fisica < 1 || fisica > 10 || quimica < 1 || quimica >10 || biologia < 1 || biologia > 10 || matematicas < 1 || matematicas > 10 || informatica < 1 || informatica > 10){
    alert("Por favor ingrese nuevamente sus notas, las que ingresó enteriormente no eran válidas");
    console.log("Por favor ingrese nuevamente sus notas, las que ingresó enteriormente no eran válidas")

}else{
    let suma = fisica + quimica +  biologia + matematicas + informatica;
    alert("La suma de sus notas es: " + suma)
    let porcentaje = (suma / 50) *100;

    if(porcentaje <= 59.9){
        calificacion = "Mala";
        alert("Mala");
        console.log("Mala");

    }else if(porcentaje <= 80){
        calificacion = "Buena";
        alert("Buena");
        console.log("Buena");

    }else{
        calificacion = "Excelente";
        alert("Excelente");
        console.log("Excelente");
    }

    alert("Tu porcentaje es: " + porcentaje + " % y tú calificación es: " + calificacion);
    console.log("Tu porcentaje es: " + porcentaje + " % y tú calificación es: " + calificacion);

}


