alert("Bienvenido señor/a usuario")

let genero = prompt("Ingrese su género: femenino o masculino");
let edad = prompt("Ingrese su edad");
let reciben = 0;

if(genero === "femenino"){

    if (edad >50){
    reciben = 120000;
    }else if(edad >= 30 && edad <=50 ){
        reciben = 100000;
    }else if(edad < 30 ){
    console.log("No recibe ayuda")
    alert("No recibe ayuda")
    }


}else if(genero === "masculino"){
    reciben = 40000;

}else{
    console.log("Datos incorrectos. Por favor vuelva a ingresarlos");
    alert("Datos incorrectos. Por favor vuelva a ingresarlos");
}
console.log("El valor de su ayuda económica mensual es de: " + reciben);
alert("El valor de su ayuda económica mensual es de " + reciben);
